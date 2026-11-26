import { useEffect, useMemo, useState } from "react";
import { MessageCircle, ArrowRight, GraduationCap, Store, Coffee, Sparkles } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import shopMockup from "@/assets/shop-mockup.asset.json";

const WHATSAPP_URL = "https://wa.me/919738959525?text=Hi%2C%20I%27m%20interested%20in%20the%20Bangarpet%20Chatzz%20franchise.%20Please%20share%20details.";

const slides = [
  {
    icon: Sparkles,
    badge: "Franchise Opportunity",
    quote: "Be Your Own Boss",
    title: "Bangarpet Chatzz",
    line: "Start your chaat & pani puri business with authentic recipes and training support.",
    cta: { label: "Explore Models", href: "#models" },
  },
  {
    icon: GraduationCap,
    badge: "Model 1 · Business Training",
    quote: "Learn Today. Build Tomorrow.",
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
    quote: "Start Small. Think Big.",
    title: "Kiosk Model",
    line: "Explore a compact counter-service format for pani puri, chaats and takeaway, with indicative planning specifications.",
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
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const autoplay = useMemo(() => Autoplay({ active: !reducedMotion, delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true }), [reducedMotion]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setReducedMotion(preference.matches);
    syncMotion();
    preference.addEventListener("change", syncMotion);
    return () => preference.removeEventListener("change", syncMotion);
  }, []);

  return (
    <section className="relative overflow-hidden flex items-center">
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

      <Carousel
        opts={{ loop: true }}
        plugins={[autoplay]}
        className="relative w-full"
        aria-label="Bangarpet Chatzz business models"
      >
        <CarouselContent>
          {slides.map((slide, index) => {
            const Heading = index === 0 ? "h1" : "h2";
            return (
            <CarouselItem key={slide.title}>
              <div className="container relative max-w-5xl mx-auto px-12 md:px-20 py-12 text-center min-h-[min(760px,82svh)] flex flex-col items-center justify-center">
                <span className="inline-block mb-5 text-xs font-bold uppercase text-secondary">
                  {slide.badge}
                </span>

                <slide.icon className="h-9 w-9 text-secondary mb-5" aria-hidden="true" />

                <p className="text-secondary text-lg md:text-2xl font-extrabold mb-4">
                  “{slide.quote}”
                </p>

                <Heading className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 text-background drop-shadow-2xl">
                  {slide.title}
                </Heading>

                <p className="text-sm md:text-lg text-background/80 mb-7 max-w-2xl mx-auto leading-relaxed font-medium">
                  {slide.line}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button asChild size="lg" className="text-sm md:text-base px-5 shadow-xl shadow-primary/40 rounded-full">
                    <a href={slide.cta.href}>{slide.cta.label} <ArrowRight className="ml-2 h-5 w-5" /></a>
                  </Button>
                  <Button asChild size="lg" className="text-sm md:text-base px-5 rounded-full bg-background text-foreground hover:bg-background/90">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Enquiry
                    </a>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          );})}
        </CarouselContent>

        <CarouselPrevious
          title="Previous slide"
          className="left-1 md:left-5 h-9 w-9 border-background/30 bg-background/10 text-background hover:bg-background/20 hover:text-secondary"
        />
        <CarouselNext
          title="Next slide"
          className="right-1 md:right-5 h-9 w-9 border-background/30 bg-background/10 text-background hover:bg-background/20 hover:text-secondary"
        />
      </Carousel>

    </section>
  );
};

export default HeroSection;
