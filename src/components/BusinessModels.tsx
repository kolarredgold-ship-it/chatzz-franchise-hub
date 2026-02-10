import { Check, GraduationCap, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919738959525?text=Hi%2C%20I%27m%20interested%20in%20the%20Bangarpet%20Chatzz%20franchise.%20Please%20share%20details.";

const models = [
  {
    icon: GraduationCap,
    title: "Chaat Making Training",
    price: "₹50,000",
    tag: "One-time fee",
    duration: "5–7 days",
    features: [
      "Complete chaat making training",
      "Hygiene & preparation SOPs",
      "Ingredient sourcing guidance",
      "Training completion certificate",
    ],
    note: "Brand name usage not included",
    highlight: false,
  },
  {
    icon: Building2,
    title: "Brand & Business Model",
    price: "₹1,50,000",
    tag: "One-time fee",
    duration: "Full setup",
    features: [
      "Brand name usage rights",
      "Complete training included",
      "Raw material support (initial phase)",
      "Secret masala & formulations",
      "SOPs & menu guidance",
      "Branding & launch support",
      "No royalty – ever",
      "No monthly fees",
    ],
    note: null,
    highlight: true,
  },
];

const BusinessModels = () => (
  <section id="models" className="py-16 md:py-24 bg-background">
    <div className="container max-w-5xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-black text-center mb-4">
        Business <span className="text-gradient">Models</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12">Choose the plan that fits your goals</p>

      <div className="grid md:grid-cols-2 gap-8">
        {models.map((m) => (
          <div
            key={m.title}
            className={`relative rounded-2xl border-2 p-8 transition-all ${
              m.highlight
                ? "border-primary bg-gradient-to-b from-primary/5 to-background shadow-xl shadow-primary/10 scale-[1.02]"
                : "border-border bg-background shadow-sm"
            }`}
          >
            {m.highlight && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold uppercase bg-primary text-primary-foreground rounded-full tracking-wider">
                Most Popular
              </span>
            )}
            <m.icon className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>{m.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{m.tag} · {m.duration}</p>
            <p className="text-4xl font-black text-gradient mb-6">{m.price}</p>

            <ul className="space-y-3 mb-6">
              {m.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {m.note && <p className="text-xs text-muted-foreground italic mb-6">* {m.note}</p>}

            <Button asChild className="w-full" size="lg" variant={m.highlight ? "default" : "outline"}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Enquire Now</a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BusinessModels;
