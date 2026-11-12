import { Zap, ShieldCheck, MapPin, Clock } from "lucide-react";

const highlights = [
  { icon: Zap, label: "Fast Service" },
  { icon: ShieldCheck, label: "Hygienic Setup" },
  { icon: MapPin, label: "Location Optimized" },
  { icon: Clock, label: "High Turnover" },
];

const AboutSection = () => (
  <section id="about" className="py-20 md:py-32 bg-background">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="eyebrow text-primary">Why It Works</span>
          <h2 className="h-sec leading-tight mb-6">
            Why <span className="text-gradient">BANGARPET CHATZz</span> Works as a Franchise Brand
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-6" />
        </div>
        <div className="space-y-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            BANGARPET CHATZz is built on one powerful idea: traditional Bangarpet-style chaat delivered with speed, hygiene, and consistency in high-footfall urban locations.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Unlike restaurants that depend on long dining cycles or cafés that rely on premium pricing, BANGARPET CHATZz operates as a high-turnover, snack-focused business designed for today's fast-moving consumers—students, office-goers, families, and evening snack lovers.
          </p>
          <p className="text-sm font-medium text-foreground">
            Our franchise model is structured, repeatable, and location-optimized, making it ideal for both first-time entrepreneurs and experienced food business operators.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
        {highlights.map((h) => (
          <div key={h.label} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <h.icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-bold text-center">{h.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
