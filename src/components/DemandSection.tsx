import { Users, Repeat, TrendingUp, ShoppingBag } from "lucide-react";

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
  <section className="py-20 md:py-32 bg-card">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="eyebrow text-primary">Market Opportunity</span>
        <h2 className="h-sec mb-4">
          Urban India: A <span className="text-gradient">High-Demand</span> Chaat Economy
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From morning college crowds to evening office dispersal and late-night food seekers, chaat is no longer occasional—it's habitual.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
        {drivers.map((d) => (
          <div key={d.title} className="p-6 rounded-2xl bg-background border border-border text-center hover:border-primary/40 transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
              <d.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="h-card mb-1">{d.title}</h3>
            <p className="text-xs text-muted-foreground">{d.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-background rounded-2xl border border-primary/20 p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="h-6 w-6 text-primary" />
          <h3 className="h-card">Why This Benefits BANGARPET CHATZz</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {benefits.map((b) => (
            <div key={b} className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <span>{b}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
          This demand structure ensures steady daily turnover, which is critical for franchise profitability.
        </p>
      </div>
    </div>
  </section>
);

export default DemandSection;
