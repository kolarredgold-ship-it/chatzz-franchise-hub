import { Check, GraduationCap, Store, Coffee, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { outletModels, outletEnquiry } from "@/lib/outlet-models";

const WHATSAPP_URL = "https://wa.me/919738959525?text=Hi%2C%20I%27m%20interested%20in%20the%20Bangarpet%20Chatzz%20franchise.%20Please%20share%20details.";

const models = [
  {
    tag: "Model 1",
    icon: GraduationCap,
    title: "Business Training Program",
    price: "₹49,999",
    features: [
      "Complete Food Business Training",
      "Authentic Recipes & Preparation Methods",
      "Kitchen Setup Guidance",
      "Operations & Staff Management",
      "Costing & Pricing Strategy",
      "Hygiene & Inventory Management",
      "Online Recorded Training",
      "Offline Practical Training (3–6 Days)",
    ],
    note: {
      title: "NOTE:",
      items: [
        "This is NOT a franchise.",
        "You operate under your own brand.",
        "No annual renewal fee.",
      ],
    },
    highlight: false,
  },
  {
    tag: "Model 2",
    icon: Store,
    title: "Bangarpet Chatzz Franchise & Branding",
    price: "₹1,49,999",
    features: [
      "Everything in Business Training Program",
      "Right to Use the Bangarpet Chatzz Brand*",
      "Branding Support",
      "Franchise Guidance",
      "Online or Offline Training (3–6 Days)",
    ],
    renewal: {
      label: "Annual Brand Renewal Fee",
      amount: "₹39,999",
    },
    disclaimer: "*As per company terms and conditions.",
    highlight: true,
  },
];

const BusinessModels = () => (
  <section id="models" className="py-20 md:py-32 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-14">
        <span className="eyebrow text-primary">Pricing</span>
        <h2 className="h-sec mb-4">
          Choose The <span className="text-gradient">Business Model</span> That Fits You
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Two proven paths to build your food business — with or without our brand.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {models.map((m) => (
          <div
            key={m.title}
            className={`relative rounded-3xl border-2 p-8 md:p-10 transition-all flex flex-col ${
              m.highlight
                ? "border-primary bg-gradient-to-b from-primary/5 to-background shadow-2xl shadow-primary/10 md:scale-[1.03]"
                : "border-border bg-card shadow-sm"
            }`}
          >
            {/* Model tag */}
            <div className="flex justify-center mb-6">
              <span className="px-6 py-2 text-sm font-extrabold uppercase tracking-wider bg-secondary text-secondary-foreground rounded-full shadow-md">
                {m.tag}
              </span>
            </div>

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent flex items-center justify-center shadow-lg">
              <m.icon className="h-8 w-8 text-accent-foreground" />
            </div>

            <h3 className="text-xl md:text-2xl font-extrabold text-center mb-6 text-accent leading-tight">
              {m.title}
            </h3>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="inline-block px-8 py-3 bg-accent rounded-lg shadow-lg">
                <span className="h-sec text-accent-foreground">{m.price}</span>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-6 flex-1">
              {m.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" strokeWidth={3} />
                  <span className="font-medium">{f}</span>
                </li>
              ))}
            </ul>

            {/* Renewal (Model 2) */}
            {m.renewal && (
              <div className="mb-4 p-4 rounded-xl bg-secondary/20 border border-secondary text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1">
                  {m.renewal.label}
                </p>
                <p className="text-2xl font-extrabold text-accent">{m.renewal.amount}</p>
              </div>
            )}

            {m.disclaimer && (
              <p className="text-xs text-muted-foreground italic text-center mb-6">{m.disclaimer}</p>
            )}

            {/* Note (Model 1) */}
            {m.note && (
              <div className="mb-6 p-5 rounded-xl bg-foreground text-background">
                <p className="text-sm font-extrabold uppercase tracking-wider mb-2 text-secondary">
                  {m.note.title}
                </p>
                <ul className="space-y-1.5">
                  {m.note.items.map((item) => (
                    <li key={item} className="text-sm flex gap-2">
                      <span className="text-secondary">•</span>
                      <span dangerouslySetInnerHTML={{ __html: item.replace("NOT", "<strong>NOT</strong>").replace("own brand", "<strong>own brand</strong>") }} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Button asChild className="w-full rounded-full" size="lg" variant={m.highlight ? "default" : "outline"}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Enquire Now</a>
            </Button>
          </div>
        ))}
      </div>

      {/* Contact banner */}
      <div id="outlet-models" className="scroll-mt-20 mt-20">
        <span className="eyebrow">Outlet formats</span>
        <h2 className="h-sec mb-4">Kiosk or <span className="text-gradient">Café</span></h2>
        <p className="max-w-2xl mb-8 text-muted-foreground">Total investment options for your Bangarpet Chatzz outlet. Suggested specifications below are indicative and subject to location and final approval.</p>
        <div className="grid gap-6 md:grid-cols-2">
          {outletModels.map(m => <article key={m.id} className="flex min-w-0 flex-col rounded-lg border border-border bg-card p-6 md:p-8">
            <div className="mb-5 flex items-center gap-3 text-primary">{m.id === "kiosk" ? <Store className="h-7 w-7" /> : <Coffee className="h-7 w-7" />}<h3 className="text-2xl font-extrabold">{m.title}</h3></div>
            <p className="text-3xl font-extrabold text-accent">₹{m.investment.toLocaleString("en-IN")}</p>
            <p className="mt-1 text-sm font-medium text-muted-foreground">Total investment</p>
            <p className="my-5 text-sm">{m.description}</p>
            <h4 className="h-card mb-3">Indicative specifications</h4>
            <dl className="mb-6 flex-1 divide-y divide-border">{m.specifications.map(spec => <div key={spec.label} className="py-3"><dt className="text-xs font-semibold uppercase text-muted-foreground">{spec.label}</dt><dd className="mt-1 text-sm">{spec.value}</dd></div>)}</dl>
            <Button asChild size="lg" className="w-full"><a href={outletEnquiry(m.title, m.investment)} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> Enquire about {m.id === "kiosk" ? "kiosk" : "café"}</a></Button>
          </article>)}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">The amounts above are total investments, not setup-only costs. Space, staffing, menu and equipment are suggested planning specifications, not guaranteed package inclusions. Confirm the itemised scope, premises costs, working capital and recurring brand terms with our team before payment. These are outlet formats, distinct from the training and brand-association program fees above.</p>
      </div>
      <div className="mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-accent to-primary text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-primary-foreground/90 mb-2">
          For Complete Details, Call or WhatsApp
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-primary-foreground">
          <a href="tel:7899666679" className="text-xl md:text-2xl font-extrabold hover:underline">
            7899666679
          </a>
          <span className="text-xl md:text-2xl font-extrabold opacity-50">|</span>
          <a href="tel:9738959525" className="text-xl md:text-2xl font-extrabold hover:underline">
            9738959525
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default BusinessModels;
