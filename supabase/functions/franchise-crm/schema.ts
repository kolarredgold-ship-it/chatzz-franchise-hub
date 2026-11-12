import { z } from 'npm:zod@3.25.76';

export const leadKeys = ['id', 'name', 'phone', 'city', 'area', 'model', 'budget', 'status', 'nextFollowUp', 'trainerId', 'trainingStart', 'trainingEnd', 'trainingStatus', 'trainingNotes', 'createdAt'] as const;
export const trainerKeys = ['id', 'name', 'phone', 'city', 'specialty'] as const;
export const activityKeys = ['id', 'leadId', 'type', 'note', 'createdAt', 'staffId'] as const;
const text = z.string().trim().max(200).default('');
const date = z.string().refine(v => v === '' || (/^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v))), 'Invalid date').default('');
export const leadSchema = z.object({
  id: z.string().uuid().optional(), name: z.string().trim().min(1).max(100),
  phone: z.string().trim().regex(/^\+?[0-9\s-]{10,18}$/, 'Enter a valid phone number'),
  city: z.string().trim().min(1).max(100), area: text,
  model: z.enum(['Training', 'Franchise & Branding', 'Kiosk', 'Café']),
  budget: z.string().regex(/^\d*$/).max(12).default(''),
  status: z.enum(['New', 'Contacted', 'Interested', 'Training', 'Converted', 'Lost']).default('New'),
  nextFollowUp: date, trainerId: z.union([z.string().uuid(), z.literal('')]).default(''),
  trainingStart: date, trainingEnd: date,
  trainingStatus: z.enum(['Not scheduled', 'Scheduled', 'In progress', 'Completed']).default('Not scheduled'),
  trainingNotes: z.string().max(4000).default(''),
}).refine(l => !l.trainingStart || !l.trainingEnd || l.trainingEnd >= l.trainingStart, 'Training end cannot be before start');
export const trainerSchema = z.object({ id: z.string().uuid().optional(), name: z.string().trim().min(1).max(100), phone: z.string().trim().regex(/^\+?[0-9\s-]{10,18}$/), city: z.string().trim().min(1).max(100), specialty: text });
export const requestSchema = z.discriminatedUnion('action', [
  z.object({ action: z.literal('list') }),
  z.object({ action: z.literal('saveLead'), lead: leadSchema }),
  z.object({ action: z.literal('saveTrainer'), trainer: trainerSchema }),
  z.object({ action: z.literal('activity'), leadId: z.string().uuid(), type: z.enum(['Note', 'WhatsApp opened', 'Call']), note: z.string().trim().min(1).max(4000) }),
]);
export function records(keys: readonly string[], rows: string[][] = []) {
  return rows.slice(1).filter(row => row[0]).map(row => Object.fromEntries(keys.map((key, i) => [key, row[i] ?? ''])));
}