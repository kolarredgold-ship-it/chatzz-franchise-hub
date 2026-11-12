import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { lovable } from '@/integrations/lovable';
import '@lovable.dev/cloud-auth-js/styles.css';
import { ADMIN_PATH, SHEET_URL, CrmData, Lead, Trainer, blankLead, crmRequest, dueFollowUp, loadCrm, locationReports, statuses } from '@/lib/crm';
import { CrmLeadEditor, selectClass } from '@/components/CrmLeadEditor';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Users, MapPin, GraduationCap, CalendarClock, Plus, RefreshCw, ExternalLink, LogOut, ShieldCheck, Search, ChevronRight } from 'lucide-react';

const empty: CrmData = { leads: [], trainers: [], activity: [] };
export default function Admin() {
  const navigate = useNavigate();
  const [data, setData] = useState(empty);
  const [access, setAccess] = useState<'checking'|'signedout'|'denied'|'admin'>('checking');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [view, setView] = useState('Leads');
  const [query, setQuery] = useState('');
  const [city, setCity] = useState('All locations');
  const [status, setStatus] = useState('All statuses');
  const [lead, setLead] = useState<Lead | null>(null);
  const [trainer, setTrainer] = useState<Trainer | null>(null);
  const refresh = useCallback(async () => { setBusy(true); try { setData(await loadCrm()); setError(''); } catch (e) { setError(e instanceof Error ? e.message : 'Unable to load records'); throw e; } finally { setBusy(false); } }, []);
  useEffect(() => {
    let live = true;
    async function verify() {
      const { data: result } = await supabase.auth.getUser();
      if (!live) return;
      if (!result.user) { setAccess('signedout'); setData(empty); return; }
      const { data: allowed, error: roleError } = await supabase.rpc('has_role',{ _user_id: result.user.id, _role: 'admin' });
      if (!live) return;
      if (roleError || allowed !== true) { setAccess('denied'); setData(empty); return; }
      setAccess('admin');
      if (window.location.pathname === '/staff-callback') navigate(ADMIN_PATH, { replace: true });
      void refresh().catch(() => {});
    }
    const { data: listener } = supabase.auth.onAuthStateChange(() => { setTimeout(() => { if (live) void verify(); }, 0); });
    void verify();
    return () => { live = false; listener.subscription.unsubscribe(); };
  },[navigate,refresh]);
  async function signIn(provider: 'google'|'lovable') {
    setError('');
    const result = await lovable.auth.signInWithOAuth(provider,{ redirect_uri: `${window.location.origin}/staff-callback` });
    if (result.error) setError(result.error.message);
  }
  const cities = [...new Set(data.leads.map(l => l.city))].sort();
  const filtered = data.leads.filter(l => (city === 'All locations' || l.city === city) && (status === 'All statuses' || l.status === status) && `${l.name} ${l.phone} ${l.city} ${l.area}`.toLowerCase().includes(query.toLowerCase()));
  const displayed = view === 'Follow-ups' ? filtered.filter(l => dueFollowUp(l)) : view === 'Training' ? filtered.filter(l => l.trainerId || l.trainingStatus !== 'Not scheduled') : filtered;
  const stats = [{ label: 'Total leads', value: data.leads.length, icon: Users }, { label: 'Follow-ups due', value: data.leads.filter(l => dueFollowUp(l)).length, icon: CalendarClock }, { label: 'Locations', value: cities.length, icon: MapPin }, { label: 'Training active', value: data.leads.filter(l => ['Scheduled','In progress'].includes(l.trainingStatus)).length, icon: GraduationCap }];
  return <div className="min-h-screen bg-background"><header className="border-b bg-card"><div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 md:px-8"><div><a href="/" className="text-lg font-extrabold">Bangarpet <span className="text-primary">Chatzz</span></a><p className="text-xs text-muted-foreground">FRANCHISE OPERATIONS</p></div><div className="flex gap-2">{access === 'admin' && <><Button asChild variant="outline" size="sm"><a href={SHEET_URL} target="_blank" rel="noopener noreferrer"><ExternalLink />Google Sheet</a></Button><Button variant="ghost" size="icon" title="Sign out" aria-label="Sign out" onClick={() => void supabase.auth.signOut()}><LogOut /></Button></>}</div></div></header>
    <main className="mx-auto max-w-7xl space-y-7 px-4 py-7 md:px-8"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow mb-2">Partner pipeline</p><h1 className="text-3xl font-extrabold">Franchise workspace</h1></div>{access === 'admin' && <div className="flex gap-2"><Button variant="outline" size="icon" title="Refresh records" aria-label="Refresh records" disabled={busy} onClick={() => void refresh().catch(() => {})}><RefreshCw className={busy ? 'animate-spin' : ''} /></Button><Button onClick={() => setLead(blankLead())}><Plus />Add lead</Button></div>}</div>
    {access !== 'admin' ? <section className="border-y py-10"><ShieldCheck className="mb-4 h-8 w-8 text-primary" /><h2 className="h-card">{access === 'checking' ? 'Checking staff access…' : access === 'denied' ? 'Staff approval required' : 'Private staff records'}</h2><p className="my-3 max-w-lg text-sm text-muted-foreground">{access === 'denied' ? 'Your account is signed in but has not been granted administrator access. Contact the project owner to approve your account.' : 'Lead contact details are available only to approved staff. Your active staff session opens this workspace directly.'}</p>{access === 'signedout' && <div className="flex flex-wrap gap-3"><Button variant="outline" onClick={() => void signIn('google')}><svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5"><path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"/></svg>Sign in with Google</Button><Button className="lovable-auth-button" onClick={() => void signIn('lovable')}>Sign in with Lovable</Button></div>}{access === 'denied' && <Button variant="outline" onClick={() => void supabase.auth.signOut()}>Switch account</Button>}</section> : <>
      <div className="grid grid-cols-2 gap-5 border-y py-6 md:grid-cols-4">{stats.map(s => <div key={s.label}><s.icon className="mb-2 h-5 w-5 text-primary"/><p className="text-3xl font-extrabold">{s.value}</p><p className="text-xs text-muted-foreground">{s.label}</p></div>)}</div>
      <nav aria-label="Workspace views" className="flex gap-1 overflow-x-auto border-b pb-3">{['Leads','Follow-ups','Location reports','Trainers','Training'].map(v => <Button key={v} variant={view === v ? 'default' : 'ghost'} size="sm" onClick={() => setView(v)}>{v}</Button>)}</nav>
      {view === 'Trainers' ? <section><div className="mb-4 flex items-center justify-between"><h2 className="h-card">Trainer directory</h2><Button onClick={() => setTrainer({ id:'',name:'',phone:'',city:'',specialty:'' })}><Plus />Add trainer</Button></div>{!data.trainers.length && <p className="py-10 text-muted-foreground">No trainers added yet.</p>}<div className="grid gap-4 md:grid-cols-3">{data.trainers.map(t => <article key={t.id} className="rounded-lg border bg-card p-5"><h3 className="h-card">{t.name}</h3><p className="text-sm text-muted-foreground">{t.city} · {t.specialty}</p><p className="my-2 text-sm">{t.phone}</p><p className="text-xs text-muted-foreground">{data.leads.filter(l => l.trainerId === t.id).length} assigned leads</p><Button className="mt-4" variant="outline" size="sm" onClick={() => setTrainer(t)}>Edit trainer</Button></article>)}</div></section> : <>
        <div className="grid gap-3 sm:grid-cols-3"><div className="relative"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground"/><Input aria-label="Search leads" className="pl-9" placeholder="Search name, mobile, area…" value={query} onChange={e => setQuery(e.target.value)} /></div><select aria-label="Filter location" className={selectClass} value={city} onChange={e => setCity(e.target.value)}><option>All locations</option>{cities.map(c => <option key={c}>{c}</option>)}</select><select aria-label="Filter status" className={selectClass} value={status} onChange={e => setStatus(e.target.value)}><option>All statuses</option>{statuses.map(s => <option key={s}>{s}</option>)}</select></div>
        {view === 'Location reports' ? <div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="border-b text-muted-foreground"><tr>{['City','Leads','Due','Training','Converted'].map(h => <th key={h} className="p-3">{h}</th>)}</tr></thead><tbody>{locationReports(filtered).map(r => <tr key={r.city} className="border-b"><td className="p-3 font-semibold">{r.city}</td><td className="p-3">{r.total}</td><td className="p-3 text-primary">{r.due}</td><td className="p-3">{r.training}</td><td className="p-3">{r.converted}</td></tr>)}</tbody></table>{!filtered.length && <p className="py-10 text-muted-foreground">No location records yet.</p>}</div> : <section><div className="mb-4 flex justify-between"><h2 className="h-card">{view === 'Training' ? 'Training schedule' : view === 'Follow-ups' ? 'Due & overdue follow-ups' : 'Lead register'}</h2><span className="text-sm text-muted-foreground">{displayed.length} records</span></div>{!displayed.length ? <p className="border-y py-12 text-center text-muted-foreground">{data.leads.length ? 'No records match your filters.' : 'No leads yet. Add your first franchise enquiry.'}</p> : <div className="divide-y border-y">{displayed.slice().reverse().map(l => <div key={l.id} className="flex items-start justify-between gap-3 py-5"><div className="min-w-0"><h3 className="h-card break-words">{l.name}</h3><p className="text-sm text-muted-foreground">{l.city}{l.area && ` · ${l.area}`}</p><p className="mt-1 text-sm">{l.model} · {l.phone}</p><div className="mt-2 flex flex-wrap gap-2 text-xs"><span className="rounded border bg-muted px-2 py-1">{l.status}</span>{l.nextFollowUp && <span className={dueFollowUp(l) ? 'py-1 text-primary' : 'py-1 text-muted-foreground'}>Follow-up: {l.nextFollowUp}</span>}</div>{view === 'Training' && <p className="mt-2 text-sm">{data.trainers.find(t => t.id === l.trainerId)?.name || 'Unassigned'} · {l.trainingStatus}<br/>{l.trainingStart || 'Start not set'} — {l.trainingEnd || 'End not set'}</p>}</div><Button variant="outline" size="icon" aria-label={`Open ${l.name}`} title="Open lead" onClick={() => setLead(l)}><ChevronRight /></Button></div>)}</div>}</section>}
      </>}
    </>}{error && <p role="alert" className="text-sm text-destructive">{error}</p>}<footer className="border-t pt-5 text-xs text-muted-foreground">Bangarpet Chatzz · Franchise & training operations</footer></main>
    {lead && <CrmLeadEditor lead={lead} trainers={data.trainers} activity={data.activity} close={() => setLead(null)} refresh={refresh} />}
    {trainer && <Dialog open onOpenChange={open => { if (!open) setTrainer(null); }}><DialogContent className="w-[calc(100%-2rem)] max-h-[90dvh] overflow-y-auto"><DialogTitle className="font-extrabold">{trainer.id ? 'Edit trainer' : 'Add trainer'}</DialogTitle><DialogDescription>Trainer directory</DialogDescription><form className="space-y-4" onSubmit={async e => { e.preventDefault(); setBusy(true); try { const {id,...fields}=trainer; await crmRequest({ action:'saveTrainer',trainer:{ ...fields,...(id ? {id} : {}) } }); await refresh(); setTrainer(null); } catch(e) { setError(e instanceof Error ? e.message : 'Unable to save trainer'); } finally { setBusy(false); } }}>{(['name','phone','city','specialty'] as const).map(k => <div key={k}><Label className="capitalize" htmlFor={`trainer-${k}`}>{k}</Label><Input id={`trainer-${k}`} required={k !== 'specialty'} type={k === 'phone' ? 'tel':'text'} value={trainer[k]} onChange={e => setTrainer({...trainer,[k]:e.target.value})}/></div>)}{error && <p role="alert" className="text-sm text-destructive">{error}</p>}<Button disabled={busy} type="submit">Save trainer</Button></form></DialogContent></Dialog>}
  </div>;
}