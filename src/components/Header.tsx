import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Market", href: "#market" },
  { label: "Menu", href: "#menu" },
  { label: "Models", href: "#models" },
  { label: "Why Us", href: "#why-us" },
  { label: "Enquiry", href: "#enquiry" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-2xl font-black text-gradient" style={{ fontFamily: "'Playfair Display', serif" }}>
          Bangarpet Chatzz
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="rounded-full">
            <a href="tel:9738959525"><Phone className="mr-1 h-4 w-4" /> Call Now</a>
          </Button>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-medium hover:bg-muted transition-colors">
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button asChild size="sm" className="w-full rounded-full">
              <a href="tel:9738959525"><Phone className="mr-1 h-4 w-4" /> Call Now</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
