import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/919738959525?text=Hi%2C%20I%27m%20interested%20in%20the%20Bangarpet%20Chatzz%20franchise.%20Please%20share%20details.";

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
    {/* Decorative circles */}
    <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
    <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />

    <div className="container relative text-center max-w-3xl mx-auto px-4">
      <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest rounded-full bg-primary/15 text-primary">
        🔥 Franchise Opportunity
      </span>

      <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4">
        Bangarpet <span className="text-gradient">Chatzz</span>
      </h1>

      <p className="text-lg md:text-xl font-medium text-muted-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
        Authentic Bangarpet-Style Chaats – Now Across India
      </p>

      <p className="text-base text-muted-foreground mb-10 max-w-xl mx-auto">
        Start your own profitable street food business with zero royalty, proven recipes, and full brand support. Training starts from just ₹50,000!
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button asChild size="lg" className="text-base px-8 shadow-lg shadow-primary/30">
          <a href="tel:9738959525"><Phone className="mr-2 h-5 w-5" /> Call Now</a>
        </Button>
        <Button asChild size="lg" variant="outline" className="text-base px-8 border-2 border-green-600 text-green-700 hover:bg-green-50">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Enquiry
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
