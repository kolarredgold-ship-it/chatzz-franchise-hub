import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChefHat, Coffee, GraduationCap, Heart, House, ImagePlus, Leaf, MapPin, Megaphone, MessageCircle, Phone, Rocket, ShieldCheck, Sprout, Store, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { generalEnquiry, homeModels, whatsapp } from "@/lib/homepage";
import realShop from "@/assets/shop-real.asset.json";
import mockShop from "@/assets/shop-mockup.asset.json";
import pani from "@/assets/pani-puri.asset.json";
import dahi from "@/assets/dahi-puri.asset.json";

export function useHomepageMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.querySelector(".home-page");
    if (!root || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.08 });
    root.querySelectorAll(".reveal").forEach(section => observer.observe(section));
    root.classList.add("motion-ready");
    return () => { observer.disconnect(); root.classList.remove("motion-ready"); };
  }, []);
}

const hope = [
  { icon: Store, title: "Be your own boss", copy: "A business that gives your ambition a place to grow." },
  { icon: Heart, title: "Earn with dignity", copy: "Build practical skills. Create something you can be proud of." },
  { icon: House, title: "A future for your family", copy: "Take a thoughtful step towards the tomorrow you imagine." },
];
export function WhyStart() {
  return <section id="about" className="home-section reveal"><div className="home-container"><div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"><div><span className="eyebrow">More than a food business</span><h2 className="h-sec text-secondary">A little courage.<br />A world of possibility.</h2></div><p className="max-w-sm text-muted-foreground">Good food brings people together. Your own business can be the beginning of something meaningful.</p></div><div className="home-scroll hope-row" tabIndex={0} aria-label="Reasons to start your business">{hope.map(item => <article key={item.title} className="hope-card stagger-item rounded-2xl border border-border bg-card p-6 soft-shadow"><item.icon className="h-8 w-8 text-primary mb-5" strokeWidth={1.5} /><h3 className="text-lg font-extrabold text-secondary">{item.title}</h3><p className="mt-3 text-muted-foreground">{item.copy}</p></article>)}</div></div></section>;
}

export function InvestmentModels() {
  return <section id="models" className="home-section reveal bg-muted/50"><div className="home-container"><div className="text-center mx-auto max-w-2xl mb-10"><span className="eyebrow">Your ambition. Your starting point.</span><h2 className="h-sec text-secondary">Find your way to begin.</h2><p className="mt-4 text-muted-foreground">A compact kiosk, a welcoming café, or skills to start on your own. Choose what feels right for your journey.</p></div><div className="grid gap-4 lg:grid-cols-3">{homeModels.map((model,i) => { const Icon = [Store,Coffee,GraduationCap][i]; return <article key={model.id} className={`stagger-item flex min-w-0 flex-col rounded-2xl border bg-card p-6 md:p-7 soft-shadow transition-transform duration-300 motion-safe:hover:-translate-y-1 ${model.id === 'cafe' ? 'border-secondary' : 'border-border'}`}><div className="flex items-center justify-between gap-2"><Icon className="h-8 w-8 text-secondary" strokeWidth={1.5} /><span className={`rounded-full px-3 py-1 text-xs font-semibold ${model.id === 'cafe' ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-secondary'}`}>{model.badge}</span></div><h3 className="mt-6 text-2xl font-extrabold text-secondary">{model.title}</h3><p className="mt-2 text-muted-foreground">{model.label}</p><p className={`mt-6 font-extrabold text-secondary ${model.id === 'training' ? 'text-2xl' : 'text-4xl'}`}>{model.price}</p><p className="mt-1 text-xs text-muted-foreground">{model.id === 'training' ? 'Ask for the current fee & next batch' : 'Total outlet investment · indicative scope'}</p><ul className="my-6 space-y-3 border-t border-border pt-6">{model.features.map(feature => <li key={feature} className="flex gap-2.5 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{feature}</li>)}</ul><p className="mt-auto mb-6 text-xs leading-relaxed text-muted-foreground"><strong>Not included / to confirm: </strong>{model.exclusion}</p><Button asChild size="lg" variant={model.id === 'cafe' ? 'secondary' : 'outline'} className="h-auto min-h-12 w-full whitespace-normal rounded-full px-4 py-3 text-sm"><a href={whatsapp(model.message)} target="_blank" rel="noopener noreferrer"><MessageCircle />{model.button}</a></Button></article>; })}</div><p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground max-w-3xl mx-auto">Kiosk and café amounts are total investments, not setup-only costs. Space, staffing and menu specifications are indicative, not guaranteed inclusions. Brand terms include ₹39,999 annual renewal; there is no royalty or monthly brand fee. Confirm the complete scope before payment.</p><div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 border-t border-border pt-6 text-sm font-medium text-secondary">{['No EMI', 'No security deposit', 'Full payment before the process begins'].map(item => <span key={item} className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />{item}</span>)}</div></div></section>;
}

const journey = [
  { icon: MessageCircle, title: "Enquire", copy: "Share your plans. We'll listen." },
  { icon: ChefHat, title: "Learn", copy: "Build confidence, one recipe at a time." },
  { icon: Store, title: "Set up", copy: "Bring your own space to life." },
  { icon: Rocket, title: "Launch", copy: "Welcome your first customers." },
  { icon: Sprout, title: "Grow", copy: "Keep learning. Keep moving forward." },
];
export function Journey() {
  return <section id="journey" className="home-section reveal"><div className="home-container"><div className="text-center mb-12"><span className="eyebrow">You don't have to begin alone</span><h2 className="h-sec text-secondary">From a first message<br />to your first customer.</h2></div><div className="relative grid gap-7 md:grid-cols-5 md:gap-4"><div className="journey-line" aria-hidden="true" />{journey.map((step,i) => <div key={step.title} className="relative stagger-item flex items-start gap-5 md:block"><div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background text-primary"><step.icon className="h-5 w-5" /></div><div className="md:mt-5"><p className="text-xs text-primary mb-1">0{i+1}</p><h3 className="text-lg font-extrabold text-secondary">{step.title}</h3><p className="mt-2 max-w-40 text-sm text-muted-foreground">{step.copy}</p></div></div>)}</div><p className="mt-10 text-center text-lg font-semibold text-secondary">Your own business, your own future.</p><p className="mt-3 text-center text-xs text-muted-foreground">Model selection, full payment and applicable agreement come before training and setup.</p></div></section>;
}

const included = [
  { icon: GraduationCap, title: "Hands-on training", copy: "Recipes, preparation and daily operations." },
  { icon: Store, title: "Branding guidance", copy: "Brand association for franchise partners." },
  { icon: Leaf, title: "Recipes & sauces", copy: "Authentic methods and ingredient guidance." },
  { icon: House, title: "Setup guidance", copy: "Plan a space that works for your format." },
  { icon: Users, title: "Ongoing guidance", copy: "Discuss available post-launch support." },
  { icon: Megaphone, title: "Marketing guidance", copy: "Build visibility in your neighbourhood." },
];
export function Support() {
  return <section className="home-section reveal bg-secondary text-secondary-foreground"><div className="home-container"><div className="mb-10 md:flex md:justify-between md:items-end"><div><span className="eyebrow text-hero-highlight">Skills. Support. A stronger start.</span><h2 className="h-sec">A foundation you<br />can build on.</h2></div><p className="mt-5 max-w-sm text-secondary-foreground/75">Understand what comes with your chosen model. We'll walk you through it before you commit.</p></div><div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{included.map(item => <div key={item.title} className="stagger-item border-t border-secondary-foreground/20 py-6"><item.icon className="h-7 w-7 text-hero-highlight mb-5" strokeWidth={1.5} /><h3 className="font-extrabold text-base">{item.title}</h3><p className="mt-3 text-sm text-secondary-foreground/70">{item.copy}</p></div>)}</div><p className="mt-5 border-t border-secondary-foreground/20 pt-5 text-xs text-secondary-foreground/65">Support varies by program and agreement. Secret Masala is available separately as a one-month package; delivery charges are extra. Its proprietary recipe remains confidential.</p></div></section>;
}

const gallery = [
  { url: realShop.url, title: "An actual Bangarpet Chatzz outlet", label: "Our outlet" },
  { url: mockShop.url, title: "Bangarpet Chatzz shopfront concept — not an actual outlet", label: "Design concept" },
  { url: pani.url, title: "Illustrative pani puri food photograph", label: "Pani puri · illustrative" },
  { url: dahi.url, title: "Illustrative dahi puri food photograph", label: "Dahi puri · illustrative" },
];
export function Gallery() {
  const [selected, setSelected] = useState<(typeof gallery)[number] | null>(null);
  return <section id="presence" className="home-section reveal"><div className="home-container"><div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-end mb-8"><div><span className="eyebrow">Rooted in real places</span><h2 className="h-sec text-secondary">A flavour from Bangarpet.<br />A growing Karnataka family.</h2></div><div className="max-w-sm"><p className="flex items-center gap-2 text-secondary font-semibold"><MapPin className="h-4 w-4 text-primary" /> Bengaluru & Kolar</p><p className="mt-2 text-muted-foreground">Most outlets are in Bengaluru, with three in Kolar. 200+ people trained — and counting.</p></div></div><div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{gallery.map(item => <Button key={item.url} variant="ghost" className="group relative aspect-square h-auto w-full overflow-hidden rounded-2xl p-0" onClick={() => setSelected(item)} aria-label={`Enlarge ${item.title}`}><img src={item.url} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105" loading="lazy" /><span className="absolute bottom-0 left-0 right-0 bg-secondary/90 px-3 py-3 text-left text-xs text-secondary-foreground whitespace-normal">{item.label}<ArrowUpRight className="float-right h-4 w-4" /></span></Button>)}</div><p className="mt-4 text-xs text-muted-foreground">Real outlet photo, labelled design concept and illustrative food photography. Ask us about available locations.</p></div><Dialog open={Boolean(selected)} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="max-w-3xl"><DialogTitle>{selected?.label}</DialogTitle><DialogDescription>{selected?.title}</DialogDescription>{selected && <img src={selected.url} alt={selected.title} className="max-h-[70vh] w-full object-contain rounded-lg" />}</DialogContent></Dialog></section>;
}

export function Stories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const labels = ['The first step', 'The learning journey', 'A new beginning'];
  return <section id="stories" className="home-section reveal bg-muted/50"><div className="home-container"><div className="mb-8 text-center"><span className="eyebrow">Stories of hope</span><h2 className="h-sec text-secondary">Behind every business,<br />there's a person with a dream.</h2><p className="mt-4 mx-auto max-w-xl text-muted-foreground">This space is reserved for real partner stories, shared with their permission. No invented stories. No promised earnings.</p></div><div ref={scrollRef} className="home-scroll" tabIndex={0} aria-label="Partner story placeholders" onScroll={e => { const el = e.currentTarget; const card = el.firstElementChild; if (card) setActive(Math.min(2, Math.round(el.scrollLeft / (card.getBoundingClientRect().width + 16)))); }}>{labels.map((label,i) => <article key={label} className="story-card flex flex-col rounded-2xl border border-border bg-card p-6 md:p-8"><div className="flex h-40 items-center justify-center rounded-lg bg-muted/65 text-secondary/40"><ImagePlus className="h-9 w-9" strokeWidth={1} /></div><p className="mt-6 text-xs font-medium text-primary">Story 0{i+1} · Awaiting a real partner story</p><h3 className="mt-2 text-xl font-extrabold text-secondary">{label}</h3><p className="mt-4 text-muted-foreground">Add real story here</p><p className="mt-3 text-xs text-muted-foreground">Partner photo, personal experience and verified details — with consent.</p></article>)}</div><div className="mt-4 flex justify-center gap-1" aria-label="Choose a story">{labels.map((label,i) => <Button key={label} variant="ghost" size="icon" className="h-11 w-11 rounded-full" aria-label={`View story ${i+1}`} aria-pressed={active === i} onClick={() => { const el = scrollRef.current; const card = el?.firstElementChild; if (el && card) el.scrollTo({left: i * (card.getBoundingClientRect().width + 16), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}); setActive(i); }}><span className={`h-2 w-2 rounded-full ${active === i ? 'bg-secondary' : 'bg-secondary/25'}`} /></Button>)}</div></div></section>;
}

const faqs = [
  { question: "What's included in my investment?", answer: "The kiosk is ₹5 lakh and the café is ₹15 lakh in total investment. Listed space, staffing, equipment and menu plans are indicative, not guaranteed inclusions. Request a full itemised breakdown, including premises costs and working capital, before making a payment. Training-only does not include outlet setup or brand rights." },
  { question: "Is there really no royalty?", answer: "There is no royalty or monthly brand fee. Brand association has a separate ₹39,999 annual renewal fee, subject to the agreement. Own-brand training has no annual brand renewal. No EMI or security deposit is offered; full payment is required before the process begins." },
  { question: "How long does training take?", answer: "Practical training is typically 3–6 days, with recorded online training also available. Ask our team about the current fee, format, next batch dates and the training included in your chosen model." },
  { question: "What support is available after launch?", answer: "Our team can explain the operations, branding and marketing guidance available under your chosen agreement. Confirm the scope, availability and any separate costs in writing before payment. Business performance depends on your location, costs and day-to-day operations; earnings are not guaranteed." },
  { question: "Which locations are available?", answer: "Our confirmed presence is in Karnataka — mostly Bengaluru, with three outlets in Kolar. Available territories change, so share your preferred city and area on WhatsApp for a current location discussion. We have trained 200+ people; this is not an outlet count." },
];
export function FAQ() {
  return <section id="faq" className="home-section reveal"><div className="home-container grid gap-8 md:grid-cols-12"><div className="md:col-span-5"><span className="eyebrow">Clarity before commitment</span><h2 className="h-sec text-secondary">Small questions.<br />Important answers.</h2><p className="mt-5 max-w-sm text-muted-foreground">A good beginning starts with knowing what to expect.</p><Button asChild variant="link" className="mt-4 h-12 p-0"><a href={generalEnquiry} target="_blank" rel="noopener noreferrer">Have another question? <ArrowUpRight /></a></Button></div><Accordion type="single" collapsible className="md:col-span-7">{faqs.map((faq,i) => <AccordionItem key={faq.question} value={`faq-${i}`} className="border-border"><AccordionTrigger className="py-6 text-left text-base font-semibold text-secondary hover:no-underline">{faq.question}</AccordionTrigger><AccordionContent className="text-base leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>;
}

export function FinalCTA() {
  return <section className="reveal bg-primary/10 border-t border-primary/15 py-14 md:py-20"><div className="home-container text-center"><Sprout className="h-9 w-9 mx-auto mb-5 text-primary" strokeWidth={1.5} /><span className="eyebrow">A better tomorrow starts today</span><h2 className="h-sec text-secondary">Your new beginning<br />is one message away.</h2><p className="mt-4 text-muted-foreground">Let's talk about the future you want to build.</p><Button asChild size="lg" className="mt-7 h-auto min-h-12 rounded-full px-7 py-3 whitespace-normal"><a href={generalEnquiry} target="_blank" rel="noopener noreferrer"><MessageCircle /> Take the first step on WhatsApp <ArrowRight /></a></Button></div></section>;
}

export function StickyActions() {
  return <><div className="fixed bottom-0 inset-x-0 z-40 border-t border-border bg-card p-3 pb-[calc(12px+env(safe-area-inset-bottom))] md:hidden"><div className="grid grid-cols-2 gap-3"><Button asChild className="h-12 rounded-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 text-base"><a href={generalEnquiry} target="_blank" rel="noopener noreferrer"><MessageCircle /> WhatsApp</a></Button><Button asChild variant="outline" className="h-12 rounded-full text-base"><a href="tel:9738959525"><Phone /> Call</a></Button></div></div><Button asChild size="icon" className="fixed bottom-7 right-7 z-40 hidden md:inline-flex h-14 w-14 rounded-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 soft-shadow"><a href={generalEnquiry} target="_blank" rel="noopener noreferrer" aria-label="Chat with Bangarpet Chatzz on WhatsApp" title="Chat on WhatsApp"><MessageCircle className="!h-6 !w-6" /></a></Button></>;
}