import { Bot, Ruler, Shield, Zap } from "lucide-react";
import { motion } from "motion/react";

export function Technology() {
  return (
    <section
      id="technology"
      className="py-20"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.13 0.04 240) 0%, oklch(0.17 0.045 240) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-gold font-semibold uppercase tracking-widest text-sm">
              Our Technology
            </span>
            <h2 className="font-display font-extrabold text-white mt-2 text-3xl sm:text-4xl tracking-wide mb-5">
              Advanced Robo Technology
            </h2>
            <div className="w-16 h-1 bg-brand-gold rounded mb-6" />
            <p className="text-white/65 mb-4 leading-relaxed">
              SB Drillers uses state-of-the-art{" "}
              <strong className="text-white/90">
                Robotic Drilling Technology
              </strong>{" "}
              — the most precise and efficient method available in the industry
              today. Our rigs feature computer-controlled drilling systems that
              ensure accurate depth, minimal deviation, and maximum water yield.
            </p>
            <p className="text-white/65 mb-8 leading-relaxed">
              We offer two industry-standard borewell sizes to match every need:
              <strong className="text-white/90"> 6½ inch</strong> for high-yield
              agricultural and commercial use, and{" "}
              <strong className="text-white/90">4½ inch</strong> for residential
              and compact space requirements.
            </p>

            {/* Borewell sizes */}
            <div className="flex gap-4 flex-wrap">
              <div className="bg-card border border-white/10 rounded-xl px-6 py-4 text-center shadow-card hover:border-brand-gold/30 hover:shadow-card-hover transition-all duration-300">
                <span className="font-display font-extrabold text-brand-gold text-3xl">
                  6½"
                </span>
                <p className="text-white/85 font-semibold text-sm mt-1">
                  Borewell Size
                </p>
                <p className="text-white/50 text-xs">
                  Agriculture / Commercial
                </p>
              </div>
              <div className="bg-card border border-white/10 rounded-xl px-6 py-4 text-center shadow-card hover:border-brand-gold/30 hover:shadow-card-hover transition-all duration-300">
                <span className="font-display font-extrabold text-brand-gold text-3xl">
                  4½"
                </span>
                <p className="text-white/85 font-semibold text-sm mt-1">
                  Borewell Size
                </p>
                <p className="text-white/50 text-xs">Residential / Compact</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {[
              {
                icon: Bot,
                title: "Computer-Controlled Rigs",
                desc: "Precise depth control and zero deviation with robotic guidance systems.",
              },
              {
                icon: Shield,
                title: "Safe & Reliable",
                desc: "All drilling follows safety standards protecting your property and our crew.",
              },
              {
                icon: Zap,
                title: "Fast Completion",
                desc: "High-performance rigs complete drilling quickly, minimizing site downtime.",
              },
              {
                icon: Ruler,
                title: "Accurate Measurement",
                desc: "Digital depth gauges and water-level testing for every borewell drilled.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-card border border-white/10 rounded-xl p-5 shadow-card flex gap-4 hover:border-brand-gold/25 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-gold/15 border border-brand-gold/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white/90 text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-white/55 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
