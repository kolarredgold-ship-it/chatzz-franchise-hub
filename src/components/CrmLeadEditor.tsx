import { useState } from 'react';
import { Lead, Trainer, Activity, models, statuses, trainingStatuses, crmRequest, whatsappLink } from '@/lib/crm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { MessageCircle, Phone, Save } from 'lucide-react';

export const selectClass = 'h-10 w-full rounded-md border border-input bg-background px-3 text-sm';
export function CrmLeadEditor({ lead, trainers, activity, close, refresh }: { lead: Lead; trainers: Trainer[]; activity: Activity[]; close: () => void; refresh: () => Promise<void> }) {
  const [draft, setDraft] = useState(lead);
  const [note, setNote] = useState('');
  const [message, setMessage] = useState(`Hi ${lead.name || 'there'}, this is the Bangarpet Chatzz team following up on your ${lead.model} enquiry in ${lead.city || 'your city'}. When would be a good time to discuss your plans?`);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const update = (key: keyof Lead, value: string) => setDraft(p => ({ ...p, [key]: value }));
  async function save(e: React.FormEvent) {
    e.preventDefault(); setBusy(true); setError('');
    try {
      const { id, createdAt, ...fields } = draft;
      await crmRequest({ action: 'saveLead', lead: { ...fields, ...(id ? { id } : {}) } });
      await refresh(); close();
    } catch (e) { setError(e instanceof Error ? e.message : 'Unable to save'); } finally { setBusy(false); }
  }
  async function log(type: 'Note' | 'WhatsApp opened' | 'Call', text: string) {
    setBusy(true); setError('');
    try { await crmRequest({ action: 'activity', leadId: lead.id, type, note: text }); setNote(''); await refresh(); }
    catch (e) { setError(e instanceof Error ? e.message : 'Unable to save follow-up'); } finally { setBusy(false); }
  }
  const field = (key: keyof Lead, label: string, type = 'text', required = false) => <div key={key}><Label htmlFor={`lead-${key}`}>{label}</Label><Input id={`lead-${key}`} type={type} required={required} value={draft[key]} onChange={e => update(key, e.target.value)} /></div>;
  const select = (key: keyof Lead, label: string, values: readonly string[]) => <div><Label htmlFor={`lead-${key}`}>{label}</Label><select id={`lead-${key}`} className={selectClass} value={draft[key]} onChange={e => update(key, e.target.value)}>{values.map(v => <option key={v}>{v}</option>)}</select></div>;
  return <Dialog open onOpenChange={open => { if (!open) close(); }}><DialogContent className="max-h-[90dvh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto"><DialogHeader><DialogTitle className="font-extrabold">{lead.id ? lead.name : 'Add lead'}</DialogTitle><DialogDescription>{lead.id ? `${lead.city} · ${lead.model}` : 'Franchise enquiry'}</DialogDescription></DialogHeader>
    <form onSubmit={save} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">{field('name','Full name','text',true)}{field('phone','Mobile number','tel',true)}{field('city','City','text',true)}{field('area','Area')}{select('model','Interested model',models)}{field('budget','Budget (₹)','number')}{select('status','Lead status',statuses)}{field('nextFollowUp','Next follow-up','date')}</div>
      <div className="border-t pt-4"><h3 className="h-card mb-3">Trainer & training</h3><div className="grid gap-4 sm:grid-cols-2"><div><Label htmlFor="lead-trainer">Assigned trainer</Label><select id="lead-trainer" className={selectClass} value={draft.trainerId} onChange={e => update('trainerId', e.target.value)}><option value="">Unassigned</option>{trainers.map(t => <option key={t.id} value={t.id}>{t.name} · {t.city}</option>)}</select></div>{select('trainingStatus','Training status',trainingStatuses)}{field('trainingStart','Start date','date')}{field('trainingEnd','End date','date')}</div><Label htmlFor="training-notes">Training details / modules</Label><Textarea id="training-notes" value={draft.trainingNotes} onChange={e => update('trainingNotes', e.target.value)} /></div>
      {error && <p role="alert" className="text-sm text-destructive">{error}</p>}<Button disabled={busy} type="submit"><Save />{busy ? 'Saving…' : 'Save lead'}</Button>
    </form>
    {lead.id && <><div className="space-y-3 border-t pt-4"><h3 className="h-card">WhatsApp follow-up</h3><Label htmlFor="wa-message">Message</Label><Textarea id="wa-message" value={message} onChange={e => setMessage(e.target.value)} /><div className="flex flex-wrap gap-2"><Button disabled={!message.trim() || busy} asChild><a href={whatsappLink(lead.phone,message)} target="_blank" rel="noopener noreferrer" onClick={() => void log('WhatsApp opened',message)}><MessageCircle />Open WhatsApp</a></Button><Button asChild variant="outline"><a href={`tel:${lead.phone}`} onClick={() => void log('Call','Call initiated; outcome not recorded')}><Phone />Call</a></Button></div><p className="text-xs text-muted-foreground">Chat opened does not confirm that a message was sent or delivered.</p></div><div className="space-y-3 border-t pt-4"><h3 className="h-card">Follow-up history</h3><Label htmlFor="follow-up-note">Outcome / note</Label><Textarea id="follow-up-note" value={note} onChange={e => setNote(e.target.value)} /><Button variant="outline" disabled={busy || !note.trim()} onClick={() => void log('Note',note)}>Save follow-up note</Button><div className="space-y-3">{activity.filter(a => a.leadId === lead.id).slice().reverse().map(a => <div key={a.id} className="border-l-2 border-primary pl-3"><p className="text-xs text-muted-foreground">{a.type} · {new Date(a.createdAt).toLocaleString()}</p><p className="whitespace-pre-wrap break-words text-sm">{a.note}</p></div>)}</div></div></>}
  </DialogContent></Dialog>;
}