import { CalendarX, ShieldOff, HandCoins } from "lucide-react";

const policies = [
  { icon: CalendarX, title: "NO EMI", desc: "No Installment Facility" },
  { icon: ShieldOff, title: "NO SECURITY DEPOSIT", desc: "Zero refundable deposit" },
  { icon: HandCoins, title: "FULL PAYMENT", desc: "Required Before the Process Begins" },
];

const PaymentPolicy = () => (
  <section className="py-20 md:py-32 bg-background">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="text-center mb-12">
        <span className="eyebrow text-primary">Policy</span>
        <h2 className="h-sec mb-4">
          Payment <span className="text-gradient">Policy</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Clear, upfront terms — no hidden charges, no surprises.
        </p>
      </div>

      <div className="rounded-3xl border-2 border-border bg-card p-8 md:p-10">
        <div className="grid sm:grid-cols-3 gap-8 md:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {policies.map((p) => (
            <div key={p.title} className="flex flex-col items-center text-center px-4 pt-8 sm:pt-0 first:pt-0">
              <div className="relative w-16 h-16 mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <p.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-extrabold text-base md:text-lg mb-1">
                {p.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PaymentPolicy;
