import { useRef, useState } from "react";
import { ArrowRight, Check, Loader2, MessageCircle, Sparkles } from "lucide-react";
import { FunctionsHttpError } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AdvisorResponse, advisorResponseSchema, advisorWhatsApp, formatRupees } from "@/lib/advisor";

const FranchiseAdvisor = () => {
  const [budget, setBudget] = useState("");
  const [city, setCity] = useState("");
  const [goals, setGoals] = useState("");
  const [result, setResult] = useState<AdvisorResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const busy = useRef(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const clearResult = () => { setResult(null); setError(""); };

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (busy.current) return;
    if (!city.trim() || goals.trim().length < 10 || !Number.isFinite(Number(budget)) || Number(budget) <= 0) {
      setError("Enter your budget, city and at least 10 characters about your business goals.");
      return;
    }
    busy.current = true; setLoading(true); setError(""); setResult(null);
    try {
      const { data, error: failure } = await supabase.functions.invoke("franchise-advisor", { body: { budget: Number(budget), city: city.trim(), goals: goals.trim() } });
      if (failure) {
        if (failure instanceof FunctionsHttpError) {
          const details = await failure.context.json().catch(() => null);
          throw new Error(typeof details?.error === "string" ? details.error : "The advisor is unavailable. Please enquire on WhatsApp.");
        }
        throw new Error("The advisor could not connect. Please check your connection or enquire on WhatsApp.");
      }
      setResult(advisorResponseSchema.parse(data));
      requestAnimationFrame(() => resultRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" }));
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "The advisor is unavailable. Please enquire on WhatsApp.");
    } finally { busy.current = false; setLoading(false); }
  }

  return <section id="advisor" className="scroll-mt-20 border-y border-border bg-card py-16 md:py-24">
    <div className="container mx-auto max-w-5xl px-4">
      <div className="mb-10 max-w-3xl">
        <span className="eyebrow flex items-center gap-2"><Sparkles className="h-4 w-4" /> AI business advisor</span>
        <h2 className="h-sec">Find your <span className="text-gradient">best-fit option</span></h2>
      </div>
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        <form onSubmit={submit} className="space-y-5">
          <div className="space-y-2"><Label htmlFor="advisor-budget">Total available budget (₹)</Label><Input id="advisor-budget" type="number" inputMode="numeric" min="1" max="100000000" step="1" required placeholder="e.g. 200000" disabled={loading} value={budget} onChange={e => { setBudget(e.target.value); clearResult(); }} /></div>
          <div className="space-y-2"><Label htmlFor="advisor-city">City / Area</Label><Input id="advisor-city" required minLength={2} maxLength={100} placeholder="e.g. Bengaluru, Whitefield" disabled={loading} value={city} onChange={e => { setCity(e.target.value); clearResult(); }} /></div>
          <div className="space-y-2"><Label htmlFor="advisor-goals">Your business goals</Label><Textarea id="advisor-goals" required minLength={10} maxLength={1500} rows={4} placeholder="e.g. I want to open a small chaat outlet under my own brand near a college." disabled={loading} value={goals} onChange={e => { setGoals(e.target.value); clearResult(); }} /></div>
          <Button type="submit" size="lg" className="w-full" disabled={loading}>{loading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin motion-reduce:animate-none" /> Considering your options…</> : <><Sparkles className="mr-2 h-5 w-5" /> Get my recommendation</>}</Button>
          {error && <div role="alert" className="space-y-3 text-sm text-destructive"><p>{error}</p><Button asChild variant="outline" className="w-full"><a href={advisorWhatsApp(budget, city, goals)} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> Enquire on WhatsApp</a></Button></div>}
          <p className="text-xs text-muted-foreground">Your answers are sent to AI to prepare your recommendation. We don’t save them as leads.</p>
        </form>
        <div ref={resultRef} aria-live="polite" aria-busy={loading} className="min-w-0 border-t border-border pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          {result ? <div className="space-y-5">
            <span className="eyebrow">Your recommendation</span>
            <h3 className="text-2xl font-extrabold text-accent">{result.terms?.title ?? "Plan your next step first"}</h3>
            {result.terms && <div><p className="text-3xl font-extrabold">{formatRupees(result.terms.fee)} <span className="text-sm font-medium text-muted-foreground">{result.option === "kiosk" || result.option === "cafe" ? "total investment" : "program fee"}</span></p><p className="mt-1 text-sm text-muted-foreground">{result.option === "kiosk" || result.option === "cafe" ? "Confirm recurring brand terms and itemised scope with our team." : result.terms.renewal ? `${formatRupees(result.terms.renewal)} annual brand renewal` : "Own brand · No annual renewal fee"}</p></div>}
            <p className="text-sm leading-relaxed">{result.summary}</p>
            <ul className="space-y-3">{result.reasons.map((reason, i) => <li key={i} className="flex gap-3 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{reason}</span></li>)}</ul>
            <h4 className="h-card">Next steps</h4><ol className="list-decimal space-y-2 pl-5 text-sm">{result.nextSteps.map((step, i) => <li key={i}>{step}</li>)}</ol>
            <p className="border-t border-border pt-4 text-xs text-muted-foreground">Indicative AI guidance, not a profit guarantee. {result.option === "kiosk" || result.option === "cafe" ? "Outlet-format amounts are total investments; confirm inclusions and recurring terms." : "Training and brand program fees exclude outlet setup and working capital."} No EMI or security deposit; full payment is required. Final terms and city availability must be confirmed with our team.</p>
            <Button asChild size="lg" className="h-auto min-h-11 w-full whitespace-normal"><a href={advisorWhatsApp(budget, city, goals, result.terms?.title ?? "Budget / goals review needed")} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5 shrink-0" /> Discuss my plan on WhatsApp</a></Button>
          </div> : <div className="space-y-6">
            <h3 className="h-card">Two paths. Your ambition.</h3>
            <div className="border-b border-border pb-6"><p className="mb-2 text-sm font-medium text-primary">01 / Own-brand business</p><h4 className="text-xl font-extrabold">Business Training Program</h4><p className="mt-2 text-2xl font-extrabold">₹49,999</p><p className="mt-2 text-sm text-muted-foreground">Chaat preparation, operations and setup guidance. No Bangarpet Chatzz brand rights.</p></div>
            <div><p className="mb-2 text-sm font-medium text-primary">02 / Brand partnership</p><h4 className="text-xl font-extrabold">Franchise &amp; Branding</h4><p className="mt-2 text-2xl font-extrabold">₹1,49,999</p><p className="mt-2 text-sm text-muted-foreground">Training plus brand rights and branding support. ₹39,999 annual brand renewal.</p></div>
            <Button asChild variant="link" className="px-0"><a href="#models">Compare both models <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
          </div>}
        </div>
      </div>
    </div>
  </section>;
};
export default FranchiseAdvisor;