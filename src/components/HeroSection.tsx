import { MessageCircle, ArrowDown, ArrowUpRight, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/chatzz-hero.asset.json";
import { generalEnquiry } from "@/lib/homepage";

const HeroSection = () => (
  <section id="home" className="home-hero relative isolate overflow-hidden bg-secondary text-secondary-foreground">
    <img src={hero.url} alt="Fresh pani puri, chutney and spiced pani on a steel thali" className="hero-photo absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
    <div className="hero-shade absolute inset-0" />
    <div className="home-container relative py-14 md:py-20">
      <div className="hero-copy max-w-xl">
        <span className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase"><span className="h-2 w-2 rounded-full bg-primary" /> Bangarpet Chatzz · Franchise & training</span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">Start Your Own<br className="hidden sm:block" /> Business.<br /><span className="text-hero-highlight">Build Your Hope.</span></h1>
        <p className="mt-6 text-base md:text-lg max-w-md text-secondary-foreground/85">No royalty. Full training. A proven chaat brand from Bangarpet.</p>
        <p className="mt-3 text-sm text-secondary-foreground/65">Your first step to a better tomorrow.</p>
        <div className="mt-8 flex flex-col items-start gap-3">
          <Button asChild size="lg" className="hero-cta h-auto min-h-12 rounded-full px-6 py-3 whitespace-normal text-left"><a href={generalEnquiry} target="_blank" rel="noopener noreferrer"><MessageCircle /> Get Franchise Details on WhatsApp <ArrowUpRight /></a></Button>
          <Button asChild variant="ghost" className="h-12 rounded-full text-secondary-foreground hover:bg-secondary-foreground/10 hover:text-secondary-foreground"><a href="#models">See Investment Models <ArrowDown /></a></Button>
        </div>
        <div className="mt-9 grid grid-cols-3 border-t border-secondary-foreground/20 pt-6 max-w-md gap-3">
          {[['0%', 'No Royalty'], ['₹5L', 'Kiosk investment'], ['Full', 'Training support']].map(([value,label]) => <div key={label} className="hero-stat"><p className="text-2xl font-extrabold text-hero-highlight">{value}</p><p className="text-xs text-secondary-foreground/75 mt-1">{label}</p></div>)}
        </div>
      </div>
      <div className="hero-food-note hidden lg:flex absolute right-10 bottom-16 items-center gap-3 border-l-2 border-primary pl-4"><span><span className="block text-sm font-semibold">Authentic flavours.</span><span className="text-xs text-secondary-foreground/75">Real possibilities.</span></span></div>
    </div>
    <div className="relative border-t border-secondary-foreground/15 bg-secondary/85">
      <div className="home-container flex flex-wrap items-center justify-between gap-3 py-4 text-xs sm:text-sm text-secondary-foreground/85"><span className="flex items-center gap-2"><Check className="h-4 w-4 text-hero-highlight" /> 200+ people trained</span><span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-hero-highlight" /> Rooted in Karnataka</span><span className="hidden sm:flex items-center gap-2"><Check className="h-4 w-4 text-hero-highlight" /> No royalty or monthly fees</span></div>
    </div>
  </section>
);

export default HeroSection;
