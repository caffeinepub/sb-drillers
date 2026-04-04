import { Bot, Circle, ClipboardCheck } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Bot,
    title: "Robo Technology",
    desc: "We use advanced robotic drilling technology for precise, efficient, and reliable boreholes every time.",
  },
  {
    icon: Circle,
    title: '6½" & 4½" Sizes',
    desc: "Multiple borewell diameter options to suit agriculture, residential, commercial and industrial requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Free Site Inspection",
    desc: "Our experts visit your site at no cost to assess ground conditions and recommend the ideal drilling solution.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="about"
      className="py-20 bg-navy-dark"
      style={{ background: "oklch(0.19 0.055 240)" }}
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
          <span className="text-brand-orange font-semibold uppercase tracking-widest text-sm">
            Our Advantages
          </span>
          <h2 className="font-poppins font-extrabold text-white mt-2 text-3xl sm:text-4xl uppercase tracking-wide">
            Why Choose SB Drillers?
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-brand-orange rounded" />
          <p className="mt-5 text-white/70 max-w-xl mx-auto">
            Three decades of trust, proven expertise, and the latest technology
            — delivering groundwater solutions that last a lifetime.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-ocid="whychoose.list"
        >
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                className="bg-white/5 border border-white/10 rounded-lg p-8 text-center hover:bg-white/10 transition-colors duration-300"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`whychoose.item.${i + 1}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-orange/20 mb-6">
                  <Icon className="h-8 w-8 text-brand-orange" />
                </div>
                <h3 className="font-poppins font-bold text-white text-xl mb-3">
                  {feat.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
