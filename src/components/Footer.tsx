import { ArrowRight, Check, ChevronDown, Globe, Instagram, Facebook, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { franchiseGuides, guidesByCategory } from "@/lib/franchise-guides";

const WHATSAPP = "https://wa.me/919738959525?text=" + encodeURIComponent("Hi Bangarpet Chatzz, I would like to know more about your franchise and training options.");

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Menu", href: "/#menu" },
  { label: "Business models", href: "/#models" },
  { label: "Budget advisor", href: "/#advisor" },
  { label: "Outlet locations", href: "/#presence" },
  { label: "Enquiry", href: "/#enquiry" },
];

const factPoints = [
  "200+ people trained so far",
  "Karnataka presence — Bengaluru & Kolar",
  "No EMI, no security deposit",
  "No royalty or monthly fees",
];

const programLinks = [
  { label: "Business Training Program", note: "₹49,999 program fee", href: "/#models" },
  { label: "Franchise & Branding Program", note: "₹1,49,999 + ₹39,999 renewal", href: "/#models" },
  { label: "Kiosk Model", note: "₹5,00,000 total investment", href: "/#models" },
  { label: "Café Model", note: "₹15,00,000 total investment", href: "/#models" },
];

const ColumnLabel = ({ children }: { children: string }) => (
  <h2 className="eyebrow text-secondary mb-4">{children}</h2>
);

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="border-b border-background/10">
      <div className="container max-w-6xl mx-auto px-4 py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="eyebrow text-secondary mb-2">Franchise &amp; training</span>
          <h2 className="h-card text-2xl">Talk to the Bangarpet Chatzz team</h2>
          <p className="mt-2 max-w-md text-sm text-background/70">
            Share your budget, city and goals — we will explain which option fits and what it covers.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="rounded-full">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp us
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full border-background/25 bg-background/10 text-background hover:bg-background/20 hover:text-background">
            <a href="tel:9738959525">
              <Phone className="mr-2 h-5 w-5" /> 9738959525
            </a>
          </Button>
        </div>
      </div>
    </div>

    <div className="container max-w-6xl mx-auto px-4 py-14">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link to="/" className="text-2xl font-extrabold text-gradient">Bangarpet Chatzz</Link>
          <p className="mt-4 max-w-sm text-sm text-background/70">
            Chaat-led food businesses across Karnataka — mostly Bengaluru, with three outlets in
            Kolar. 200+ people trained so far.
          </p>
          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <dt className="sr-only">Phone</dt>
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <dd className="flex flex-wrap gap-x-4">
                <a href="tel:9738959525" className="hover:text-secondary transition-colors">9738959525</a>
                <a href="tel:7899666679" className="hover:text-secondary transition-colors">7899666679</a>
              </dd>
            </div>
            <div className="flex items-start gap-3">
              <dt className="sr-only">Website</dt>
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <dd><a href="#" className="hover:text-secondary transition-colors">bangarpetchatzz.com</a></dd>
            </div>
            <div className="flex items-start gap-3">
              <dt className="sr-only">Service area</dt>
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
              <dd className="text-background/80">Karnataka, India — Bengaluru &amp; Kolar</dd>
            </div>
          </dl>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav className="lg:col-span-2" aria-label="Site sections">
          <ColumnLabel>Explore</ColumnLabel>
          <ul className="space-y-2.5 text-sm">
            {exploreLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-background/75 hover:text-secondary hover:underline underline-offset-4 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-3" aria-label="Programs and outlet formats">
          <ColumnLabel>Programs</ColumnLabel>
          <ul className="space-y-3 text-sm">
            {programLinks.map(p => (
              <li key={p.label}>
                <a href={p.href} className="group block">
                  <span className="font-semibold text-background/90 group-hover:text-secondary transition-colors">{p.label}</span>
                  <span className="block text-xs text-background/70">{p.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <ColumnLabel>Why Bangarpet Chatzz</ColumnLabel>
          <ul className="space-y-2.5 text-sm">
            {factPoints.map(f => (
              <li key={f} className="flex items-start gap-2.5 text-background/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <Link to="/#presence" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-secondary hover:underline underline-offset-4">
            See outlet locations <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <section className="mt-14 rounded-xl border border-background/10 bg-background/5 p-6 md:p-8" aria-labelledby="footer-guides-heading">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="footer-guides-heading" className="eyebrow text-secondary">Franchise guides</h2>
            <p className="text-sm text-background/70">
              Every comparison, investment and location guide we publish — {franchiseGuides.length} in total.
            </p>
          </div>
          <Button asChild variant="outline" size="sm" className="shrink-0 rounded-full border-background/25 bg-background/10 text-background hover:bg-background/20 hover:text-background">
            <Link to="/franchise-guides">
              View all guides <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-6">
          {guidesByCategory.map(group => (
            <details key={group.category} className="group border-t border-background/10 py-4 first:border-t-0 first:pt-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold transition-colors hover:text-secondary [&::-webkit-details-marker]:hidden">
                <span className="flex items-center gap-3">
                  {group.category}
                  <span className="rounded-full bg-background/10 px-2 py-0.5 text-xs font-medium text-background/70">
                    {group.guides.length}
                  </span>
                </span>
                <ChevronDown className="h-5 w-5 shrink-0 text-background/70 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="mt-4 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2 xl:grid-cols-3">
                {group.guides.map(guide => (
                  <li key={guide.slug}>
                    <Link
                      to={`/franchise-guides/${guide.slug}`}
                      className="inline-block leading-relaxed text-background/80 hover:text-secondary hover:underline underline-offset-4 transition-colors"
                    >
                      {guide.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-col gap-2 border-t border-background/10 pt-6 text-xs text-background/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Bangarpet Chatzz. All rights reserved.</p>
        <p>Prices, menu availability and terms vary by location. No guaranteed earnings.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
