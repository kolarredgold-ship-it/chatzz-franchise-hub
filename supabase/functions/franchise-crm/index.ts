import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { activityKeys, leadKeys, records, requestSchema, trainerKeys } from './schema.ts';

const spreadsheetId = '13zaDih7d1OJyxNubv_JWMe5JXYvzphl7YlOfZW73k4w';
const base = `https://connector-gateway.lovable.dev/google_sheets/v4/spreadsheets/${spreadsheetId}`;
const reply = (data: unknown, status = 200) => new Response(JSON.stringify(data), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

async function sheets(path: string, method = 'GET', body?: unknown) {
  const key = Deno.env.get('LOVABLE_API_KEY');
  const connection = Deno.env.get('GOOGLE_SHEETS_API_KEY');
  if (!key || !connection) throw new Error('Google Sheets connection is unavailable');
  const response = await fetch(base + path, { method, headers: { Authorization: `Bearer ${key}`, 'X-Connection-Api-Key': connection, 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined });
  if (!response.ok) {
    const details = await response.text();
    console.error(`Google Sheets failed [${response.status}]: ${details}`);
    throw new SheetError(response.status, details);
  }
  return await response.json();
}
class SheetError extends Error { constructor(public status: number, public details: string) { super('Google Sheets request failed'); } }

Deno.serve(async req => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return reply({ error: 'Method not allowed' }, 405);
  try {
    const authorization = req.headers.get('Authorization');
    if (!authorization?.startsWith('Bearer ')) return reply({ error: 'Staff sign-in is required' }, 401);
    const client = createClient(Deno.env.get('SUPABASE_URL') ?? '', Deno.env.get('SUPABASE_ANON_KEY') ?? '', { global: { headers: { Authorization: authorization } } });
    const { data: userData, error: userError } = await client.auth.getUser(authorization.slice(7));
    if (userError || !userData.user) return reply({ error: 'Staff sign-in is required' }, 401);
    const { data: admin, error: roleError } = await client.rpc('has_role', { _user_id: userData.user.id, _role: 'admin' });
    if (roleError || admin !== true) return reply({ error: 'This account has not been approved for staff access' }, 403);
    let json: unknown;
    try { json = await req.json(); } catch { return reply({ error: 'Invalid request' }, 400); }
    const parsed = requestSchema.safeParse(json);
    if (!parsed.success) return reply({ error: parsed.error.issues.map(i => i.message).join('; ') }, 400);
    const input = parsed.data;
    if (input.action === 'list') {
      const result = await sheets('/values:batchGet?ranges=Leads!A:O&ranges=Trainers!A:E&ranges=Activity!A:F');
      return reply({ leads: records(leadKeys, result.valueRanges?.[0]?.values), trainers: records(trainerKeys, result.valueRanges?.[1]?.values), activity: records(activityKeys, result.valueRanges?.[2]?.values) });
    }
    const now = new Date().toISOString();
    if (input.action === 'activity') {
      const result = await sheets('/values/Leads!A:A');
      if (!(result.values ?? []).some((r: string[]) => r[0] === input.leadId)) return reply({ error: 'Lead not found' }, 404);
      await sheets('/values/Activity!A:F:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS', 'POST', { values: [[crypto.randomUUID(), input.leadId, input.type, input.note, now, userData.user.id]] });
      return reply({ ok: true });
    }
    const isLead = input.action === 'saveLead';
    const item = isLead ? input.lead : input.trainer;
    const keys = isLead ? leadKeys : trainerKeys;
    const sheet = isLead ? 'Leads' : 'Trainers';
    const last = isLead ? 'O' : 'E';
    const old = await sheets(`/values/${sheet}!A:${last}`);
    const rows: string[][] = old.values ?? [];
    const index = item.id ? rows.findIndex(r => r[0] === item.id) : -1;
    if (item.id && index < 1) return reply({ error: 'Record no longer exists. Refresh the workspace.' }, 404);
    if (isLead && input.lead.trainerId) {
      const trainers = await sheets('/values/Trainers!A:A');
      if (!(trainers.values ?? []).some((r: string[]) => r[0] === input.lead.trainerId)) return reply({ error: 'Choose an existing trainer' }, 400);
    }
    const value: Record<string, unknown> = { ...item, id: item.id ?? crypto.randomUUID(), createdAt: index > 0 ? rows[index][14] : now };
    const values = [keys.map(k => value[k] ?? '')];
    if (index > 0) await sheets(`/values/${sheet}!A${index + 1}:${last}${index + 1}?valueInputOption=RAW`, 'PUT', { values });
    else await sheets(`/values/${sheet}!A:${last}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, 'POST', { values });
    return reply({ ok: true, id: value.id });
  } catch (error) {
    if (error instanceof SheetError) return reply({ error: error.message, status: error.status, details: error.details }, error.status);
    console.error('CRM request failed:', error instanceof Error ? error.message : 'Unknown error');
    return reply({ error: 'Unable to reach Google Sheets. Please try again later.' }, 500);
  }
});