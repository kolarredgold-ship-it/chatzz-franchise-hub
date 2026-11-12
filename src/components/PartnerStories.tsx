import { Quote } from "lucide-react";
import arjun from "@/assets/sample-partner-arjun.jpg";
import kavya from "@/assets/sample-partner-kavya.jpg";
import ravi from "@/assets/sample-partner-ravi.jpg";

const stories = [
  { name: "Arjun", city: "Bengaluru", model: "Own-brand training", image: arjun, quote: "I wanted to learn the recipes and understand everyday operations before starting my own chaat business.", result: "Example outcome: prepared an own-brand launch plan." },
  { name: "Kavya", city: "Kolar", model: "Franchise & branding", image: kavya, quote: "My goal was a branded neighbourhood outlet, with a clear menu and consistent preparation routines.", result: "Example outcome: planned branding and staff preparation." },
  { name: "Ravi", city: "Bengaluru", model: "Business training", image: ravi, quote: "I wanted to make my preparation, hygiene and costing more consistent as I explored a chaat menu.", result: "Example outcome: organised a daily operations checklist." },
];

const PartnerStories = () => <section id="partner-stories" className="bg-card py-16 md:py-24">
  <div className="container mx-auto max-w-6xl px-4">
    <span className="eyebrow">Partner stories / samples</span>
    <h2 className="h-sec mb-4">Different goals. <span className="text-gradient">Shared ambition.</span></h2>
    <p className="mb-10 max-w-2xl text-sm text-muted-foreground">Illustrative examples only — fictional names, stories and outcomes with AI-generated portraits. These are not verified customer testimonials or promised results.</p>
    <div className="grid gap-6 md:grid-cols-3">
      {stories.map(story => <article key={story.name} className="overflow-hidden rounded-lg border border-border bg-background">
        <img src={story.image} alt={`Illustrative AI-generated portrait for the fictional ${story.name} story`} loading="lazy" width={816} height={816} className="aspect-square w-full object-cover" />
        <div className="space-y-4 p-6">
          <p className="text-xs font-semibold uppercase text-primary">Fictional example</p>
          <div><h3 className="text-xl font-extrabold">{story.name} · {story.city}</h3><p className="text-sm text-muted-foreground">{story.model}</p></div>
          <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
          <blockquote className="text-sm leading-relaxed">“{story.quote}”</blockquote>
          <p className="border-t border-border pt-4 text-sm font-medium">{story.result}</p>
        </div>
      </article>)}
    </div>
  </div>
</section>;
export default PartnerStories;