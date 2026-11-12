import { MapPin, Sparkles, Users } from "lucide-react";
import shopReal from "@/assets/shop-real.asset.json";
import shopMockup from "@/assets/shop-mockup.asset.json";

const OutletShowcase = () => (
  <section className="py-20 md:py-32 bg-background">
    <div className="container max-w-6xl mx-auto px-4">
      <div className="text-center mb-14">
        <span className="eyebrow text-primary">Live Outlet</span>
        <h2 className="h-sec mb-4">
          Real Stores. Real <span className="text-gradient">Footfall</span>.
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See what a Bangarpet Chatzz outlet looks like — bright branding, hungry customers, high evening turnover.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-6">
        {/* Large real photo */}
        <div className="md:col-span-3 group relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto">
          <img
            src={shopReal.url}
            alt="Bangarpet Chatzz live outlet with customers"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-background">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-widest rounded-full bg-secondary text-secondary-foreground">
              Live in Bangalore
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2">
              Peak Evening Rush
            </h3>
            <p className="text-sm text-background/80 max-w-md">
              Our outlets thrive between 5 PM – 9:30 PM when customer demand peaks.
            </p>
          </div>
        </div>

        {/* Right column: mockup + stats */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="group relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <img
              src={shopMockup.url}
              alt="Bangarpet Chatzz branded outlet mockup"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-background">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-primary text-primary-foreground">
                Signature Branding
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: MapPin, label: "Prime Spots" },
              { icon: Users, label: "Daily Repeat" },
              { icon: Sparkles, label: "Hygienic" },
            ].map((s) => (
              <div key={s.label} className="p-4 rounded-2xl bg-card border border-border text-center">
                <s.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                <div className="text-xs font-bold uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OutletShowcase;
