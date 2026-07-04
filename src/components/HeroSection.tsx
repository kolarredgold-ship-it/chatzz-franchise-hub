import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import shopMockup from "@/assets/shop-mockup.asset.json";

const WHATSAPP_URL = "https://wa.me/919738959525?text=Hi%2C%20I%27m%20interested%20in%20the%20Bangarpet%20Chatzz%20franchise.%20Please%20share%20details.";

const HeroSection = () => (
  <section className="relative overflow-hidden min-h-[92vh] flex items-center">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={shopMockup.url}
        alt="Bangarpet Chatzz outlet"
        className="w-full h-full object-cover"
      />
      {/* Overlay gradients for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-transparent to-foreground/40" />
    </div>

    {/* Ambient glows */}
    <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
    <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-accent/20 blur-[100px]" />

    <div className="container relative max-w-5xl mx-auto px-4 py-24 text-center">
      <span className="inline-block px-5 py-2 mb-8 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-secondary text-secondary-foreground shadow-lg">
        🔥 Franchise Opportunity
      </span>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 text-background drop-shadow-2xl">
        Start Your<br />
        <span className="text-secondary">BANGARPET CHATZz</span><br />
        <span className="text-background/90 text-3xl md:text-5xl lg:text-5xl">Franchise</span>
      </h1>

      <p className="text-lg md:text-xl text-background/80 mb-4 max-w-2xl mx-auto leading-relaxed font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
        A Profitable Chaat & Pani Puri Business Model for Urban India.
      </p>
      <p className="text-sm md:text-base text-secondary font-bold mb-12 uppercase tracking-widest">
        Zero Royalty · Proven Recipes · Full Brand Support
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <Button asChild size="lg" className="text-base px-10 py-6 shadow-xl shadow-primary/40 rounded-full">
          <a href="tel:9738959525"><Phone className="mr-2 h-5 w-5" /> Call Now</a>
        </Button>
        <Button asChild size="lg" className="text-base px-10 py-6 rounded-full bg-background text-foreground hover:bg-background/90">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Enquiry
          </a>
        </Button>
      </div>

      {/* Stat strip */}
      <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto p-4 md:p-6 rounded-2xl bg-background/10 backdrop-blur-md border border-background/20">
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-black text-secondary">₹49k</div>
          <div className="text-[10px] md:text-xs uppercase tracking-wider text-background/70">Training Start</div>
        </div>
        <div className="text-center border-x border-background/20">
          <div className="text-2xl md:text-3xl font-black text-secondary">35+</div>
          <div className="text-[10px] md:text-xs uppercase tracking-wider text-background/70">Chaat Items</div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-3xl font-black text-secondary">0%</div>
          <div className="text-[10px] md:text-xs uppercase tracking-wider text-background/70">Royalty</div>
        </div>
      </div>

      <a href="#about" className="inline-flex flex-col items-center gap-2 mt-12 text-background/60 hover:text-secondary transition-colors">
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </div>
  </section>
);

export default HeroSection;
