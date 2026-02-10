import { Sparkles, Clock, Heart, Coins } from "lucide-react";

const values = [
  { icon: Sparkles, title: "Hygiene", desc: "Clean carts/outlets attract families and office workers" },
  { icon: Heart, title: "Consistent Taste", desc: "Standard processes reduce taste variation" },
  { icon: Clock, title: "Fast Service", desc: "Quick turnaround keeps queues moving" },
  { icon: Coins, title: "Value for Money", desc: "Affordable pricing with trusted quality" },
];

const ConsumerInsights = () => (
  <section className="py-20 md:py-32 bg-background">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Consumer Expectations</span>
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          What <span className="text-gradient">Customers</span> Want
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Modern customers are brand-aware but habit-driven. Once trust is built, repeat visits follow naturally. In today's market, <strong className="text-foreground">reliability beats novelty</strong>.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {values.map((v) => (
          <div key={v.title} className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <v.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-bold mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{v.title}</h3>
            <p className="text-xs text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ConsumerInsights;
