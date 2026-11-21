import { useState } from "react";
import { ArrowUpRight, Menu, X, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generalEnquiry } from "@/lib/homepage";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Models", href: "#models" },
  { label: "Journey", href: "#journey" },
  { label: "Stories", href: "#stories" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#enquiry" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="home-container flex items-center justify-between h-20 gap-4">
        <a href="/" className="flex min-w-0 items-center gap-2.5 text-secondary" aria-label="Bangarpet Chatzz home">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary"><Utensils className="h-5 w-5" /></span>
          <span><span className="block text-lg sm:text-xl font-extrabold leading-tight">Bangarpet Chatzz<span className="text-primary">.</span></span><span className="block text-xs text-muted-foreground">A taste of possibility</span></span>
        </a>

        <nav className="hidden lg:flex items-center gap-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <Button asChild className="h-11 rounded-full px-5">
            <a href={generalEnquiry} target="_blank" rel="noopener noreferrer">Let's talk <ArrowUpRight /></a>
          </Button>
        </nav>

        <Button variant="ghost" size="icon" className="lg:hidden shrink-0 h-11 w-11" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background pb-4">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm font-medium hover:bg-muted transition-colors">
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button asChild size="sm" className="w-full rounded-full">
              <a href={generalEnquiry} target="_blank" rel="noopener noreferrer">Let's talk on WhatsApp <ArrowUpRight /></a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
