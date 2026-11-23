import { Timer, TrendingUp, Banknote, Eye, Clock, Paintbrush, Zap } from "lucide-react";

const roiPoints = [
  { icon: Timer, label: "Break-even", value: "3–5 Months", sub: "Location-dependent" },
  { icon: TrendingUp, label: "Urban ROI", value: "High Upside", sub: "Busy zones outperform" },
  { icon: Banknote, label: "Cash Flow", value: "Strong", sub: "When execution is right" },
];

const marketingPoints = [
  { icon: Eye, label: "High-footfall placement" },
  { icon: Clock, label: "Fixed, reliable operating hours" },
  { icon: Paintbrush, label: "Clean, eye-catching branding" },
  { icon: Zap, label: "Fast service during rush hours" },
];

const ROISection = () => (
  <section className="py-16 md:py-24 bg-card">
    <div className="container max-w-6xl mx-auto px-4">
      <span className="eyebrow text-primary">Returns</span>
      <h2 className="h-sec leading-tight mb-8">Break-even & <span className="text-gradient">ROI</span></h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {roiPoints.map((r) => (
          <div key={r.label} className="rounded-lg bg-background border border-border p-6">
            <r.icon className="h-7 w-7 text-primary mb-4" />
            <p className="text-3xl font-extrabold text-gradient">{r.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{r.label} · {r.sub}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 mt-4 lg:grid-cols-3">
        <div className="rounded-lg bg-foreground text-background p-8">
          <span className="eyebrow text-secondary">Growth Strategy</span>
          <h3 className="h-sec mb-4">Marketing Strategy</h3>
          <p className="text-sm text-background/80">BANGARPET CHATZz marketing is visibility-led, not ad-heavy. Digital marketing is optional; foot traffic and habit formation drive most sales.</p>
          <p className="text-sm font-medium text-secondary mt-6">Our advantage: being present exactly when hunger peaks.</p>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {marketingPoints.map((m) => (
            <div key={m.label} className="flex items-center gap-4 p-5 rounded-lg bg-background border border-border">
              <m.icon className="h-6 w-6 text-primary shrink-0" />
              <span className="text-sm font-semibold">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ROISection;
