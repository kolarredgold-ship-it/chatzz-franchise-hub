import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919738959525?text=Hi%2C%20I%27m%20interested%20in%20the%20Bangarpet%20Chatzz%20franchise.%20Please%20share%20details.";

const HeroSection = () => (
  <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-foreground via-foreground/95 to-foreground">
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-accent/15 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[150px]" />
    </div>

    <div className="container relative max-w-4xl mx-auto px-4 py-20 text-center">
      <span className="inline-block px-5 py-2 mb-8 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-primary/20 text-primary border border-primary/30">
        🔥 Franchise Opportunity
      </span>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 text-background">
        Start Your<br />
        <span className="text-gradient">BANGARPET CHATZz</span><br />
        <span className="text-background/80 text-3xl md:text-5xl lg:text-5xl">Franchise</span>
      </h1>

      <p className="text-lg md:text-xl text-background/60 mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
        A Profitable Chaat & Pani Puri Business Model for Urban India.
        Zero royalty. Proven recipes. Full brand support.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <Button asChild size="lg" className="text-base px-10 py-6 shadow-xl shadow-primary/40 rounded-full">
          <a href="tel:9738959525"><Phone className="mr-2 h-5 w-5" /> Call Now</a>
        </Button>
        <Button asChild size="lg" variant="outline" className="text-base px-10 py-6 rounded-full border-2 border-primary/50 text-primary bg-primary/10 hover:bg-primary/20">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Enquiry
          </a>
        </Button>
      </div>

      <a href="#about" className="inline-flex flex-col items-center gap-2 text-background/40 hover:text-primary transition-colors">
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </div>
  </section>
);

export default HeroSection;
