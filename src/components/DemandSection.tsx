import { Users, Repeat, TrendingUp, ShoppingBag, Check } from "lucide-react";

const drivers = [
  { icon: Users, title: "Students & Young Professionals", desc: "Daily snack seekers near colleges and offices" },
  { icon: ShoppingBag, title: "Office Workers", desc: "Quick bites during breaks and after work" },
  { icon: Users, title: "Families", desc: "Prefer hygienic street food alternatives" },
  { icon: Repeat, title: "Daily Repeat Customers", desc: "Not seasonal—habitual consumption" },
];

const benefits = [
  "High-frequency consumption",
  "Low customer hesitation to purchase",
  "Strong repeat business",
  "Easy upselling with combo options",
];

const DemandSection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container max-w-6xl mx-auto px-4">
      <span className="eyebrow text-primary">Market Opportunity</span>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-lg border border-border bg-background p-8">
          <h2 className="h-sec mb-4">Urban India: A <span className="text-gradient">High-Demand</span> Chaat Economy</h2>
          <p className="text-muted-foreground">From morning college crowds to evening office dispersal and late-night food seekers, chaat is no longer occasional—it's habitual.</p>
        </div>
        <div className="lg:row-span-2 rounded-lg bg-primary text-primary-foreground p-8">
          <TrendingUp className="h-8 w-8 mb-4" />
          <h3 className="h-card mb-5">Why This Benefits BANGARPET CHATZz</h3>
          <ul className="space-y-3">
            {benefits.map((b) => <li key={b} className="flex gap-3 text-sm"><Check className="h-5 w-5 shrink-0" />{b}</li>)}
          </ul>
          <p className="text-sm mt-6 pt-6 border-t border-primary-foreground/30 text-primary-foreground/90">This demand structure ensures steady daily turnover, which is critical for franchise profitability.</p>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {drivers.map((d) => (
            <div key={d.title} className="flex gap-4 p-5 rounded-lg bg-background border border-border">
              <d.icon className="h-7 w-7 text-primary shrink-0" />
              <div><h3 className="h-card mb-1">{d.title}</h3><p className="text-xs text-muted-foreground">{d.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default DemandSection;
