import { Timer, TrendingUp, Banknote, Megaphone, Eye, Clock, Paintbrush, Zap } from "lucide-react";

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
  <section className="py-20 md:py-32 bg-card">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16">
        {/* ROI */}
        <div>
          <span className="eyebrow text-primary">Returns</span>
          <h2 className="h-sec leading-tight mb-8">
            Break-even & <span className="text-gradient">ROI</span>
          </h2>
          <div className="space-y-5">
            {roiPoints.map((r) => (
              <div key={r.label} className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <r.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-extrabold text-gradient">{r.value}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{r.label} · {r.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing */}
        <div>
          <span className="eyebrow text-primary">Growth Strategy</span>
          <h2 className="h-sec leading-tight mb-4">
            Marketing <span className="text-gradient">Strategy</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            BANGARPET CHATZz marketing is visibility-led, not ad-heavy. Digital marketing is optional; foot traffic and habit formation drive most sales.
          </p>
          <div className="space-y-4">
            {marketingPoints.map((m) => (
              <div key={m.label} className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <m.icon className="h-5 w-5 text-accent" />
                </div>
                <span className="text-sm font-semibold">{m.label}</span>
              </div>
            ))}
          </div>
          <p className="text-sm font-medium text-primary mt-6">
            Our advantage: being present exactly when hunger peaks.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ROISection;
