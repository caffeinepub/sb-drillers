import { Badge } from "@/components/ui/badge";
import {
  Building2,
  ClipboardCheck,
  Factory,
  Home,
  Layers,
  Sprout,
  Star,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Sprout,
    name: "Agriculture Borewells",
    desc: "Reliable deep borewells for crop irrigation and farm water supply solutions.",
    featured: false,
  },
  {
    icon: Home,
    name: "Residential Borewells",
    desc: "Clean groundwater for homes — from plotting to completion with precision drilling.",
    featured: false,
  },
  {
    icon: Building2,
    name: "Commercial Borewells",
    desc: "High-capacity borewells for commercial complexes, offices and retail outlets.",
    featured: false,
  },
  {
    icon: Factory,
    name: "Industrial Borewells",
    desc: "Heavy-duty industrial drilling for factories, plants, and large-scale operations.",
    featured: false,
  },
  {
    icon: Layers,
    name: "Under Slab Borewells",
    desc: "Specialized under-slab drilling without disturbing existing structures or flooring.",
    featured: true,
  },
  {
    icon: ClipboardCheck,
    name: "Free Site Inspection",
    desc: "No-cost expert assessment of your site before any drilling commitment.",
    featured: false,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.17 0.05 250) 0%, oklch(0.15 0.045 240) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-brand-gold font-semibold uppercase tracking-widest text-sm">
            What We Do
          </span>
          <h2 className="font-display font-extrabold text-white mt-2 text-3xl sm:text-4xl tracking-wide">
            Our Trusted Services
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-brand-gold rounded" />
          <p className="mt-5 text-white/65 max-w-xl mx-auto">
            From agriculture to industrial, we deliver expert borewell solutions
            with 30+ years of experience across Medchal and the surrounding
            region.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="services.list"
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            if (service.featured) {
              return (
                <motion.div
                  key={service.name}
                  className="relative group rounded-xl p-[2px] shadow-[0_8px_40px_0_oklch(0.73_0.16_73_/_0.30)] hover:shadow-[0_12px_56px_0_oklch(0.73_0.16_73_/_0.45)] hover:-translate-y-2 transition-all duration-300 sm:col-span-1"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.73 0.16 73) 0%, oklch(0.65 0.18 73) 50%, oklch(0.58 0.16 73) 100%)",
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  data-ocid={`services.item.${i + 1}`}
                >
                  {/* Glow ring animation */}
                  <span
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    aria-hidden
                  >
                    <span
                      className="absolute inset-0 rounded-xl animate-pulse opacity-20"
                      style={{
                        background:
                          "linear-gradient(135deg, oklch(0.73 0.16 73), oklch(0.58 0.16 73))",
                      }}
                    />
                  </span>

                  <div
                    className="relative rounded-[10px] p-6 h-full flex flex-col"
                    style={{
                      background:
                        "linear-gradient(145deg, oklch(0.62 0.17 73) 0%, oklch(0.68 0.18 73) 40%, oklch(0.73 0.16 73) 100%)",
                    }}
                  >
                    {/* Specialized Service badge */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-[oklch(0.13_0.04_240)] text-brand-gold font-bold text-xs px-3 py-1 shadow-md border-0 flex items-center gap-1 whitespace-nowrap">
                        <Star className="h-3 w-3 fill-brand-gold text-brand-gold" />
                        Specialized Service
                      </Badge>
                    </div>

                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/20 mb-4 mt-2">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-white text-lg mb-2">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-white/85 text-sm leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Bottom accent line */}
                    <div className="mt-4 pt-4 border-t border-white/25">
                      <span className="text-white/85 text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-white/70 inline-block" />
                        No damage to existing structure
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={service.name}
                className="group bg-card border border-white/10 rounded-xl p-6 shadow-card hover:shadow-card-hover hover:border-brand-gold/35 hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-gold/15 group-hover:bg-brand-gold/25 border border-brand-gold/20 mb-4 transition-colors">
                  <Icon className="h-6 w-6 text-brand-gold" />
                </div>
                <h3 className="font-display font-bold text-white/90 text-lg mb-2">
                  {service.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
