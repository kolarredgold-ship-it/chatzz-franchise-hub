import { ShieldCheck, BookOpen, Lock } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Maintain Standards", desc: "Uphold taste consistency and hygiene at all times" },
  { icon: BookOpen, title: "Follow SOPs", desc: "Adhere to our standard operating procedures for daily operations" },
  { icon: Lock, title: "No Recipe/Brand Misuse", desc: "Protect the brand and proprietary formulations" },
];

const Expectations = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-black mb-4">
        Partner <span className="text-gradient">Expectations</span>
      </h2>
      <p className="text-muted-foreground mb-12">What we expect from every franchise partner</p>

      <div className="grid sm:grid-cols-3 gap-6">
        {items.map((i) => (
          <div key={i.title} className="p-6 rounded-xl border border-border bg-card text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <i.icon className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-bold text-sm mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{i.title}</h3>
            <p className="text-xs text-muted-foreground">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Expectations;
