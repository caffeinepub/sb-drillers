import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];

const LOGO_PATH =
  "/assets/gemini_generated_image_bd2no3bd2no3bd2n-019d636d-5c50-75b8-83e1-78a04fb617ca.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? "bg-[oklch(0.13_0.04_240/0.97)] shadow-[0_2px_20px_0_rgba(0,0,0,0.5)]"
          : "bg-[oklch(0.13_0.04_240/0.85)]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 focus:outline-none"
            data-ocid="nav.link"
            aria-label="SB Drillers home"
          >
            <img
              src={LOGO_PATH}
              alt="SB Drillers Logo"
              className="h-12 lg:h-14 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg tracking-wider text-white">
                SB DRILLERS
              </span>
              <span className="text-[10px] text-brand-gold/70 font-medium tracking-widest uppercase">
                Borewell Experts
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-brand-gold transition-colors duration-200 rounded"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:9441558989"
              className="flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-[oklch(0.13_0.04_240)] font-bold px-4 py-2 rounded text-sm transition-all duration-200 shadow-gold-glow hover:shadow-gold-glow-lg"
              data-ocid="nav.primary_button"
            >
              <Phone className="h-4 w-4" />
              Call: 9441558989
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded text-white/80 hover:text-brand-gold"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[oklch(0.15_0.045_240)] border-t border-white/10 px-4 pt-2 pb-4 shadow-md">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-3 py-2.5 text-sm font-medium text-white/80 hover:text-brand-gold hover:bg-white/5 rounded transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            <a
              href="tel:9441558989"
              className="mt-2 flex items-center justify-center gap-2 bg-brand-gold text-[oklch(0.13_0.04_240)] font-bold px-4 py-2.5 rounded text-sm"
              data-ocid="nav.primary_button"
            >
              <Phone className="h-4 w-4" />
              Call: 9441558989
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
