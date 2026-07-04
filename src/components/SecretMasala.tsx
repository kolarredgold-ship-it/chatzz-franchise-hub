import { Flame, Package, Truck, Lock } from "lucide-react";

const highlights = [
  { icon: Flame, text: "Our signature Secret Masala is available separately." },
  { icon: Package, text: "One-Month Masala Package" },
  { icon: Truck, text: "Delivery Charges Extra" },
];

const SecretMasala = () => (
  <section className="py-20 md:py-32 bg-foreground text-background">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-secondary text-secondary-foreground">
          Signature Offering
        </span>
        <h2 className="text-3xl md:text-5xl font-black mb-4">
          🌶️ Secret <span className="text-secondary">Masala</span>
        </h2>
        <p className="text-background/60 max-w-xl mx-auto">
          The soul of every Bangarpet Chatzz dish — crafted with proprietary spice blends.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Left: package highlights */}
        <div className="rounded-3xl bg-background/5 border border-background/10 p-8 backdrop-blur">
          <ul className="space-y-5">
            {highlights.map((h) => (
              <li key={h.text} className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <h.icon className="h-5 w-5 text-secondary" />
                </div>
                <p className="text-sm md:text-base font-medium pt-2">{h.text}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: What makes it special */}
        <div className="relative rounded-3xl bg-gradient-to-br from-primary to-accent p-8 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-background/10 blur-2xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="h-6 w-6 text-primary-foreground" />
              <h3 className="text-xl md:text-2xl font-black text-primary-foreground" style={{ fontFamily: "'Poppins', sans-serif" }}>
                What Makes It Special?
              </h3>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              Our Secret Masala is a <strong>proprietary blend</strong> made from multiple spices.
              The exact recipe is <strong>confidential</strong> and shared only with authorized franchise partners under strict terms.
            </p>
            <div className="mt-6 inline-block px-4 py-2 rounded-full bg-background/20 text-primary-foreground text-xs font-bold uppercase tracking-wider">
              🔒 Recipe Confidential
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SecretMasala;
