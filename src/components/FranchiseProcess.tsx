import { MousePointerClick, CreditCard, Landmark, Mail, Truck, UserCheck, PlayCircle } from "lucide-react";

const steps = [
  { icon: MousePointerClick, text: "Choose your preferred business model." },
  { icon: CreditCard, text: "Complete the full payment." },
  { icon: Landmark, text: "Payment is made to the company's official bank account." },
  { icon: Mail, text: "Agreement is sent via email." },
  { icon: Truck, text: "Sign the agreement and send the physical copy through Post/Courier." },
  { icon: UserCheck, text: "After receiving the signed agreement and payment, training begins." },
  { icon: PlayCircle, text: "Training is provided either: Online (Recorded) or Offline (3–6 Days)." },
];

const FranchiseProcess = () => (
  <section className="py-20 md:py-32 bg-accent">
    <div className="container max-w-4xl mx-auto px-4">
      <div className="text-center mb-14">
        <span className="eyebrow text-secondary">How It Works</span>
        <h2 className="h-sec text-accent-foreground mb-4">
          Franchise <span className="text-secondary">Process</span>
        </h2>
        <p className="text-accent-foreground/70 max-w-xl mx-auto">
          A clear, step-by-step onboarding — the same for both Model 1 and Model 2.
        </p>
      </div>

      <div className="bg-background rounded-3xl p-6 md:p-10 shadow-2xl">
        <ol className="relative space-y-5">
          {steps.map((s, i) => (
            <li key={i} className="flex items-center gap-4 md:gap-6 group">
              <div className="shrink-0 relative">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-extrabold text-lg shadow-md">
                  {i + 1}
                </div>
              </div>
              <div className="flex-1 flex items-center justify-between gap-4 pb-5 border-b border-dashed border-border last:border-none last:pb-0">
                <p className="text-sm md:text-base font-medium text-foreground">{s.text}</p>
                <div className="shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-accent" />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default FranchiseProcess;
