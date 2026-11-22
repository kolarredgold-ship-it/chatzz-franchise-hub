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
  <section className="py-16 md:py-24 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <span className="eyebrow text-primary">Location Economics</span>
      <div className="grid gap-4 md:grid-cols-6">
        <div className="md:col-span-3 rounded-lg border border-border bg-card p-8">
          <h2 className="h-sec leading-tight mb-4">Micro-Market <span className="text-gradient">Strategy</span></h2>
          <p className="text-muted-foreground">Profitability in the chaat business depends more on micro-location than city popularity. Correct placement directly translates into stable daily revenue.</p>
        </div>
        <div className="md:col-span-3 grid grid-cols-2 gap-4">
          {advantages.map((a) => (
            <div key={a} className="rounded-lg bg-secondary/15 border border-secondary/40 p-4 text-sm font-semibold">{a}</div>
          ))}
        </div>
        <h3 className="md:col-span-6 mt-4 text-sm font-bold uppercase tracking-widest text-muted-foreground">Ideal Locations</h3>
        {locations.map((loc, i) => (
          <div key={loc.label} className={`${i < 2 ? "md:col-span-3" : "md:col-span-2"} flex items-center gap-4 p-5 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors`}>
            <loc.icon className="h-6 w-6 text-primary shrink-0" />
            <span className="font-semibold text-sm">{loc.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LocationStrategy;
