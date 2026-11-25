import { useRef } from "react";
import { MessageCircle, ArrowRight, ArrowDown, GraduationCap, Store, Coffee, Sparkles } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import shopMockup from "@/assets/shop-mockup.asset.json";

const WHATSAPP_URL = "https://wa.me/919738959525?text=Hi%2C%20I%27m%20interested%20in%20the%20Bangarpet%20Chatzz%20franchise.%20Please%20share%20details.";

const slides = [
  {
    icon: Sparkles,
    badge: "🔥 Franchise Opportunity",
    quote: "Be Your Own Boss",
    title: "Start Your BANGARPET CHATZZ Franchise",
    line: "A profitable chaat & pani puri business model for urban India — zero royalty, proven recipes, full brand support.",
    cta: { label: "Explore Models", href: "#models" },
  },
  {
    icon: GraduationCap,
    badge: "Model 1 · Business Training",
    quote: "Learn Today. Earn Tomorrow.",
    title: "Business Training Program",
    line: "Master authentic recipes, kitchen setup, operations, costing and hygiene — then launch under your own brand.",
    cta: { label: "See Training Details", href: "#models" },
  },
  {
    icon: Store,
    badge: "Model 2 · Franchise & Branding",
    quote: "Your Dream. Our Brand.",
    title: "Franchise & Branding",
    line: "Everything in the training program, plus the right to use the Bangarpet Chatzz brand with full branding support.",
    cta: { label: "See Franchise Details", href: "#models" },
  },
  {
    icon: Store,
    badge: "Outlet Format · Kiosk",
    quote: "Small Space. Big Business.",
    title: "Kiosk Model",
    line: "A compact counter-service format for pani puri, chaats and takeaway — perfect for college zones and busy streets.",
    cta: { label: "See Kiosk Specs", href: "#outlet-models" },
  },
  {
    icon: Coffee,
    badge: "Outlet Format · Café",
    quote: "Build Your Own Café Culture.",
    title: "Café Model",
    line: "A larger seated format with chaats, milkshakes, burgers, pizzas and sandwiches for high-street neighbourhoods.",
    cta: { label: "See Café Specs", href: "#outlet-models" },
  },
];

const HeroSection = () => {
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: true, stopOnMouseEnter: true }));

  return (
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

      <Carousel
        opts={{ loop: true }}
        plugins={[autoplay.current]}
        className="relative w-full"
        aria-label="Bangarpet Chatzz business models"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.title}>
              <div className="container relative max-w-5xl mx-auto px-4 py-24 text-center min-h-[92vh] flex flex-col items-center justify-center">
                <span className="inline-block px-5 py-2 mb-8 text-xs font-bold uppercase tracking-[0.2em] rounded-full bg-secondary text-secondary-foreground shadow-lg">
                  {slide.badge}
                </span>

                <slide.icon className="h-12 w-12 text-secondary mb-6" aria-hidden="true" />

                <p className="text-secondary text-lg md:text-2xl font-extrabold uppercase tracking-widest mb-4">
                  “{slide.quote}”
                </p>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] mb-6 text-background drop-shadow-2xl">
                  {slide.title}
                </h1>

                <p className="text-base md:text-xl text-background/80 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                  {slide.line}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="text-base px-10 py-6 shadow-xl shadow-primary/40 rounded-full">
                    <a href={slide.cta.href}>{slide.cta.label} <ArrowRight className="ml-2 h-5 w-5" /></a>
                  </Button>
                  <Button asChild size="lg" className="text-base px-10 py-6 rounded-full bg-background text-foreground hover:bg-background/90">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Enquiry
                    </a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          title="Previous slide"
          className="left-3 md:left-8 h-11 w-11 border-background/30 bg-background/10 text-background hover:bg-background/20 hover:text-secondary"
        />
        <CarouselNext
          title="Next slide"
          className="right-3 md:right-8 h-11 w-11 border-background/30 bg-background/10 text-background hover:bg-background/20 hover:text-secondary"
        />
      </Carousel>

      <a href="#about" className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 inline-flex flex-col items-center gap-2 text-background/60 hover:text-secondary transition-colors">
        <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
