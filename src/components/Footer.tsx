import { Phone, Globe, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-10">
    <div className="container max-w-4xl mx-auto px-4 text-center">
      <h3 className="text-xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Bangarpet Chatzz</h3>
      <div className="flex items-center justify-center gap-6 text-sm mb-6 flex-wrap">
        <a href="tel:9738959525" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
          <Phone className="h-4 w-4" /> 9738959525
        </a>
        <a href="#" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
          <Globe className="h-4 w-4" /> bangarpetchatzz.com
        </a>
      </div>
      <div className="flex items-center justify-center gap-4 mb-6">
        <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
          <Instagram className="h-4 w-4" />
        </a>
        <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
          <Facebook className="h-4 w-4" />
        </a>
      </div>
      <p className="text-xs text-background/60">© {new Date().getFullYear()} Bangarpet Chatzz. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
