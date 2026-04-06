import { CheckCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

const LOGO_PATH =
  "/assets/gemini_generated_image_bd2no3bd2no3bd2n-019d636d-5c50-75b8-83e1-78a04fb617ca.png";

export function Hero() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-borewell-rig.dim_1920x900.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark gradient overlay — richer, deeper navy */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.10_0.04_240/0.96)] via-[oklch(0.13_0.04_240/0.82)] to-[oklch(0.13_0.04_240/0.45)]" />
      {/* Subtle gold gradient accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[oklch(0.13_0.04_240/0.90)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Hero Logo */}
          <motion.img
            src={LOGO_PATH}
            alt="SB Drillers Logo"
            className="h-28 md:h-36 w-auto object-contain mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-gold/15 border border-brand-gold/40 rounded-full px-4 py-1.5 mb-6">
            <CheckCircle className="h-4 w-4 text-brand-gold" />
            <span className="text-brand-gold text-sm font-semibold tracking-wide">
              30+ Years of Excellence
            </span>
          </div>

          <h1
            className="font-display font-extrabold text-white leading-tight mb-6"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
              lineHeight: 1.15,
            }}
          >
            Your Trusted Borewell
            <br />
            <span
              className="text-brand-gold"
              style={{
                textShadow: "0 0 32px oklch(0.73 0.16 73 / 0.45)",
              }}
            >
              Experts Since 1989
            </span>
          </h1>

          <p className="text-white/85 text-lg mb-8 leading-relaxed max-w-xl font-body">
            Professional borewell drilling for agriculture, residential,
            commercial, and industrial needs. Serving Medchal &amp; surrounding
            areas with cutting-edge Robo Technology.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["Free Site Inspection", "Robo Technology", '6½" & 4½" Sizes'].map(
              (f) => (
                <span
                  key={f}
                  className="bg-white/10 border border-white/25 text-white/90 text-sm px-4 py-1.5 rounded-full font-medium backdrop-blur-sm"
                >
                  {f}
                </span>
              ),
            )}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={scrollToContact}
              className="bg-brand-gold hover:bg-brand-gold-hover text-[oklch(0.13_0.04_240)] font-bold uppercase tracking-wide px-8 py-3.5 rounded text-sm transition-all duration-200 shadow-gold-glow-lg hover:shadow-[0_0_48px_0_oklch(0.73_0.16_73_/_0.45)] hover:-translate-y-0.5"
              data-ocid="hero.primary_button"
            >
              Get Free Site Inspection
            </button>
            <a
              href="tel:9441558989"
              className="flex items-center gap-2 border-2 border-white/40 text-white hover:border-brand-gold hover:text-brand-gold font-semibold px-6 py-3 rounded text-sm transition-all duration-200 backdrop-blur-sm"
              data-ocid="hero.secondary_button"
            >
              <Phone className="h-4 w-4" />
              Call: 9441558989
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave — matches the dark stats section background */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          style={{ fill: "oklch(0.13 0.04 240)" }}
          className="w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
          role="presentation"
        >
          <path d="M0,64 C360,0 1080,80 1440,32 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
