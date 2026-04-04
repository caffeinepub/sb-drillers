import { CheckCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

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
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.19_0.055_240/0.90)] via-[oklch(0.19_0.055_240/0.75)] to-[oklch(0.19_0.055_240/0.40)]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 rounded-full px-4 py-1.5 mb-6">
            <CheckCircle className="h-4 w-4 text-brand-orange" />
            <span className="text-brand-orange text-sm font-semibold tracking-wide">
              30+ Years of Excellence
            </span>
          </div>

          <h1
            className="font-poppins font-extrabold text-white leading-tight mb-6"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
              lineHeight: 1.15,
            }}
          >
            Your Trusted Borewell
            <br />
            <span className="text-brand-orange">Experts Since 1994</span>
          </h1>

          <p className="text-white/85 text-lg mb-8 leading-relaxed max-w-xl">
            Professional borewell drilling for agriculture, residential,
            commercial, and industrial needs. Serving Medchal & surrounding
            areas with cutting-edge Robo Technology.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            {["Free Site Inspection", "Robo Technology", '6½" & 4½" Sizes'].map(
              (f) => (
                <span
                  key={f}
                  className="bg-white/15 border border-white/30 text-white text-sm px-4 py-1.5 rounded-full font-medium"
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
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-bold uppercase tracking-wide px-8 py-3.5 rounded text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              data-ocid="hero.primary_button"
            >
              Get Free Site Inspection
            </button>
            <a
              href="tel:9441558989"
              className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-brand-navy font-semibold px-6 py-3 rounded text-sm transition-all duration-200"
              data-ocid="hero.secondary_button"
            >
              <Phone className="h-4 w-4" />
              Call: 9441558989
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          className="w-full fill-white"
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
