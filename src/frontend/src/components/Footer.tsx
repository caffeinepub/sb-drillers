import { Drill, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="text-white"
      style={{ background: "oklch(0.10 0.03 240)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-gold/20 border border-brand-gold/30 p-1.5 rounded-lg">
                <Drill className="h-5 w-5 text-brand-gold" />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-wider text-white">
                  SB DRILLERS
                </span>
                <p className="text-white/40 text-xs tracking-widest uppercase">
                  Borewell Experts
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Trusted borewell contractor with 30+ years of excellence. Serving
              Medchal and surrounding areas since 1989.
            </p>
            <div className="flex gap-2">
              <span className="bg-brand-gold/15 border border-brand-gold/25 text-brand-gold text-xs font-semibold px-2.5 py-1 rounded-full">
                30+ Years
              </span>
              <span className="bg-brand-gold/15 border border-brand-gold/25 text-brand-gold text-xs font-semibold px-2.5 py-1 rounded-full">
                2L+ Borewells
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleScroll(link.href)}
                    className="text-white/50 hover:text-brand-gold text-sm transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 text-sm uppercase tracking-widest">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="h-4 w-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <address className="text-white/50 text-sm not-italic leading-relaxed">
                  Near Indian Bank, Jaitra Hospital,
                  <br />
                  Pillar No 1, Chandra Nagar Main Road,
                  <br />
                  Medchal — 501401
                </address>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="h-4 w-4 text-brand-gold flex-shrink-0" />
                <a
                  href="tel:9441558989"
                  className="text-white/65 hover:text-brand-gold text-sm transition-colors font-medium"
                  data-ocid="footer.link"
                >
                  9441558989
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {year} SB Drillers. All rights reserved.
          </p>
          <p className="text-white/25 text-xs">
            Built with ❤️ using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
