import { Zap, ShieldCheck, MapPin, Clock } from "lucide-react";

const highlights = [
  { icon: Zap, label: "Fast Service" },
  { icon: ShieldCheck, label: "Hygienic Setup" },
  { icon: MapPin, label: "Location Optimized" },
  { icon: Clock, label: "High Turnover" },
];

const AboutSection = () => (
  <section id="about" className="py-16 md:py-24 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <span className="eyebrow text-primary">Why It Works</span>
      <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
        <div className="md:col-span-2 md:row-span-2 rounded-lg bg-foreground text-background p-8 flex flex-col justify-between">
          <h2 className="h-sec leading-tight">Why <span className="text-secondary">BANGARPET CHATZz</span> Works as a Franchise Brand</h2>
          <p className="mt-6 text-sm text-background/80">Our franchise model is structured, repeatable, and location-optimized, making it ideal for both first-time entrepreneurs and experienced food business operators.</p>
        </div>
        <p className="md:col-span-2 rounded-lg border border-border bg-card p-6 text-base leading-relaxed text-muted-foreground">
          BANGARPET CHATZz is built on one powerful idea: traditional Bangarpet-style chaat delivered with speed, hygiene, and consistency in high-footfall urban locations.
        </p>
        <p className="md:col-span-2 rounded-lg border border-border bg-card p-6 text-sm leading-relaxed text-muted-foreground">
          Unlike restaurants that depend on long dining cycles or cafés that rely on premium pricing, BANGARPET CHATZz operates as a high-turnover, snack-focused business designed for today's fast-moving consumers—students, office-goers, families, and evening snack lovers.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {highlights.map((h) => (
          <div key={h.label} className="flex items-center gap-3 p-5 rounded-lg bg-primary/10 border border-primary/20">
            <h.icon className="h-6 w-6 text-primary shrink-0" />
            <span className="text-sm font-bold">{h.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
