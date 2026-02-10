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
  <section id="why-us" className="py-16 md:py-24 bg-card">
    <div className="container max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
        Why <span className="text-gradient">Bangarpet ChatzZ</span>?
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((p) => (
          <div key={p.title} className="flex gap-4 p-5 rounded-xl bg-background border border-border hover:border-primary/40 transition-colors">
            <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
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
