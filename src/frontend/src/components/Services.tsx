import {
  Building2,
  ClipboardCheck,
  Factory,
  Home,
  Layers,
  Sprout,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Sprout,
    name: "Agriculture Borewells",
    desc: "Reliable deep borewells for crop irrigation and farm water supply solutions.",
  },
  {
    icon: Home,
    name: "Residential Borewells",
    desc: "Clean groundwater for homes — from plotting to completion with precision drilling.",
  },
  {
    icon: Building2,
    name: "Commercial Borewells",
    desc: "High-capacity borewells for commercial complexes, offices and retail outlets.",
  },
  {
    icon: Factory,
    name: "Industrial Borewells",
    desc: "Heavy-duty industrial drilling for factories, plants, and large-scale operations.",
  },
  {
    icon: Layers,
    name: "Under Slab Borewells",
    desc: "Specialized under-slab drilling without disturbing existing structures or flooring.",
  },
  {
    icon: ClipboardCheck,
    name: "Free Site Inspection",
    desc: "No-cost expert assessment of your site before any drilling commitment.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-brand-orange font-semibold uppercase tracking-widest text-sm">
            What We Do
          </span>
          <h2 className="font-poppins font-extrabold text-foreground mt-2 text-3xl sm:text-4xl uppercase tracking-wide">
            Our Trusted Services
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-brand-orange rounded" />
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
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
            return (
              <motion.div
                key={service.name}
                className="group bg-white border border-border rounded-lg p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-orange/10 group-hover:bg-brand-orange/20 mb-4 transition-colors">
                  <Icon className="h-6 w-6 text-brand-orange" />
                </div>
                <h3 className="font-poppins font-bold text-foreground text-lg mb-2">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
