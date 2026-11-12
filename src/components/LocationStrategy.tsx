import { GraduationCap, Building2, Train, ShoppingBag, MapPin } from "lucide-react";

const locations = [
  { icon: GraduationCap, label: "College Clusters" },
  { icon: Building2, label: "Office Exits & IT Hubs" },
  { icon: Train, label: "Metro & Bus Terminals" },
  { icon: ShoppingBag, label: "Residential-Commercial Zones" },
  { icon: MapPin, label: "Evening Market Streets" },
];

const advantages = [
  "Minimal space requirement",
  "Strong walk-in visibility",
  "Designed for short snack breaks",
  "Peak demand aligns with evening hours (5 PM – 9:30 PM)",
];

const LocationStrategy = () => (
  <section className="py-20 md:py-32 bg-background">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <span className="eyebrow text-primary">Location Economics</span>
          <h2 className="h-sec leading-tight mb-6">
            Micro-Market <span className="text-gradient">Strategy</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Profitability in the chaat business depends more on micro-location than city popularity. Correct placement directly translates into stable daily revenue.
          </p>
          <div className="space-y-3">
            {advantages.map((a) => (
              <div key={a} className="flex items-center gap-3 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span>{a}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Ideal Locations</h3>
          {locations.map((loc) => (
            <div key={loc.label} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <loc.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-sm">{loc.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default LocationStrategy;
