import { Phone, Globe, Instagram, Facebook, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { franchiseGuides, guidesByCategory } from "@/lib/franchise-guides";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        <div>
          <h3 className="text-xl font-extrabold mb-4">Bangarpet Chatzz</h3>
          <p className="mb-5 text-sm text-background/70">
            Chaat franchise and training options across Karnataka, with confirmed
            presence in Bengaluru and Kolar.
          </p>
          <div className="flex items-center gap-6 text-sm mb-6 flex-wrap">
            <a href="tel:9738959525" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Phone className="h-4 w-4" /> 9738959525
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Globe className="h-4 w-4" /> bangarpetchatzz.com
            </a>
          </div>
          <div className="flex items-center justify-start gap-4 mb-6 lg:justify-start">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
          <Link to="/franchise-guides" className="inline-block text-sm font-bold underline hover:text-secondary">
            View all {franchiseGuides.length} guides
          </Link>
        </div>

        <nav aria-label="Franchise guide pages">
          <h2 className="h-card mb-2 text-background">Franchise guides</h2>
          <p className="mb-4 text-sm text-background/70">
            Browse every comparison, investment and location guide we publish.
          </p>
          {guidesByCategory.map(group => (
            <details key={group.category} className="group border-t border-background/15 py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold [&::-webkit-details-marker]:hidden">
                <span>
                  {group.category}
                  <span className="ml-2 font-medium text-background/60">{group.guides.length}</span>
                </span>
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="mt-3 grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2 xl:grid-cols-3">
                {group.guides.map(guide => (
                  <li key={guide.slug}>
                    <Link
                      to={`/franchise-guides/${guide.slug}`}
                      className="inline-block text-background/80 hover:text-secondary transition-colors"
                    >
                      {guide.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </nav>
      </div>

      <div className="mt-10 border-t border-background/15 pt-6 text-center">
        <p className="text-xs text-background/60">
          © {new Date().getFullYear()} Bangarpet Chatzz. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
