import { supabase } from '@/integrations/supabase/client';
import { FunctionsHttpError } from '@supabase/supabase-js';
import { z } from 'zod';

export const ADMIN_PATH = '/operations/franchise-7c92b4e6a183';
export const SHEET_URL = 'https://docs.google.com/spreadsheets/d/13zaDih7d1OJyxNubv_JWMe5JXYvzphl7YlOfZW73k4w/edit';
export const statuses = ['New', 'Contacted', 'Interested', 'Training', 'Converted', 'Lost'] as const;
export const models = ['Training', 'Franchise & Branding', 'Kiosk', 'Café'] as const;
export const trainingStatuses = ['Not scheduled', 'Scheduled', 'In progress', 'Completed'] as const;
export type Lead = { id: string; name: string; phone: string; city: string; area: string; model: string; budget: string; status: string; nextFollowUp: string; trainerId: string; trainingStart: string; trainingEnd: string; trainingStatus: string; trainingNotes: string; createdAt: string };
export type Trainer = { id: string; name: string; phone: string; city: string; specialty: string };
export type Activity = { id: string; leadId: string; type: string; note: string; createdAt: string; staffId: string };
export type CrmData = { leads: Lead[]; trainers: Trainer[]; activity: Activity[] };
const string = z.string();
const dataSchema = z.object({
  leads: z.array(z.object({ id: string, name: string, phone: string, city: string, area: string, model: string, budget: string, status: string, nextFollowUp: string, trainerId: string, trainingStart: string, trainingEnd: string, trainingStatus: string, trainingNotes: string, createdAt: string })),
  trainers: z.array(z.object({ id: string, name: string, phone: string, city: string, specialty: string })),
  activity: z.array(z.object({ id: string, leadId: string, type: string, note: string, createdAt: string, staffId: string })),
});
export async function crmRequest(body: unknown): Promise<unknown> {
  const { data, error } = await supabase.functions.invoke('franchise-crm', { body });
  if (error) {
    if (error instanceof FunctionsHttpError) {
      const details = await error.context.text();
      let message = details;
      try { const parsed = JSON.parse(details); message = parsed.error ?? details; } catch { /* retain provider text */ }
      throw new Error(message);
    }
    throw new Error(error.message);
  }
  return data;
}
export async function loadCrm(): Promise<CrmData> { return dataSchema.parse(await crmRequest({ action: 'list' })); }
export const blankLead = (): Lead => ({ id: '', name: '', phone: '', city: '', area: '', model: 'Training', budget: '', status: 'New', nextFollowUp: '', trainerId: '', trainingStart: '', trainingEnd: '', trainingStatus: 'Not scheduled', trainingNotes: '', createdAt: '' });
export function localToday(now = new Date()) { return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`; }
export function dueFollowUp(lead: Lead, today = localToday()) { return Boolean(lead.nextFollowUp && lead.nextFollowUp <= today && !['Converted', 'Lost'].includes(lead.status)); }
export function whatsappLink(phone: string, message: string) {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits.length === 10 ? '91' + digits : digits}?text=${encodeURIComponent(message)}`;
}
export function locationReports(leads: Lead[], today = localToday()) {
  const groups = new Map<string, { city: string; total: number; due: number; converted: number; training: number }>();
  for (const lead of leads) {
    const city = lead.city.trim() || 'Unspecified';
    const key = city.toLowerCase();
    const row = groups.get(key) ?? { city, total: 0, due: 0, converted: 0, training: 0 };
    row.total++; row.due += Number(dueFollowUp(lead, today)); row.converted += Number(lead.status === 'Converted'); row.training += Number(['Scheduled', 'In progress'].includes(lead.trainingStatus));
    groups.set(key, row);
  }
  return [...groups.values()].sort((a,b) => b.total - a.total);
}