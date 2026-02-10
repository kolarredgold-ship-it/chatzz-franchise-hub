import { Star, Ban, Settings, TrendingUp, Maximize2, MapPin } from "lucide-react";

const points = [
  { icon: Star, title: "Authentic Bangarpet Taste", desc: "Time-tested recipes loved by thousands" },
  { icon: Ban, title: "No Royalty, No Hidden Charges", desc: "One-time fee, lifetime business" },
  { icon: Settings, title: "Simple Operations", desc: "Easy to learn, easy to run daily" },
  { icon: TrendingUp, title: "High-Demand Chaat Menu", desc: "35+ items that customers keep coming back for" },
  { icon: Maximize2, title: "Small Space Friendly", desc: "Start with as little as 100 sq. ft." },
  { icon: MapPin, title: "Strong Local Appeal", desc: "Chaat is India's favourite street food" },
];

const WhyChoose = () => (
  <section id="why-us" className="py-20 md:py-32 bg-background">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Advantages</span>
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          Why <span className="text-gradient">Bangarpet Chatzz</span>?
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {points.map((p) => (
          <div key={p.title} className="group flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-lg transition-all">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <p.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-sm mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{p.title}</h3>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose;
