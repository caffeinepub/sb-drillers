import { Award, CheckCircle, Drill, Truck } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: Award,
    label: "Years Experience",
    target: 35,
    suffix: "+",
  },
  {
    icon: Drill,
    label: "Borewells Drilled",
    target: 200000,
    suffix: "+",
  },
  {
    icon: Truck,
    label: "Drilling Vehicles",
    target: 10,
    suffix: "+",
  },
  {
    icon: CheckCircle,
    label: "Customer Satisfaction",
    target: 100,
    suffix: "%",
  },
];

function useCountUp(
  target: number,
  duration: number,
  delay: number,
  triggered: boolean,
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    let rafId: number;
    const timeoutId = setTimeout(() => {
      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out cubic
        const eased = 1 - (1 - progress) ** 3;
        setCount(Math.round(eased * target));

        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };

      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [target, duration, delay, triggered]);

  return count;
}

function StatCounter({
  target,
  suffix,
  delay,
  triggered,
}: {
  target: number;
  suffix: string;
  delay: number;
  triggered: boolean;
}) {
  const count = useCountUp(target, 2000, delay, triggered);
  const displayValue =
    target >= 10000 ? `${(count / 100000).toFixed(1)}L` : count.toString();
  return (
    <span
      className="font-display font-extrabold text-brand-gold text-4xl leading-none mb-2"
      style={{ textShadow: "0 0 20px oklch(0.73 0.16 73 / 0.4)" }}
    >
      {displayValue}
      {suffix}
    </span>
  );
}

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.13 0.04 240) 0%, oklch(0.17 0.05 250) 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Thin gold divider */}
        <div className="w-24 h-px bg-brand-gold/30 mx-auto mb-12" />
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          data-ocid="stats.list"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                data-ocid={`stats.item.${i + 1}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-gold/15 border border-brand-gold/25 mb-4">
                  <Icon className="h-7 w-7 text-brand-gold" />
                </div>
                <StatCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  delay={i * 150}
                  triggered={triggered}
                />
                <span className="text-white/75 font-medium text-sm uppercase tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
        <div className="w-24 h-px bg-brand-gold/30 mx-auto mt-12" />
      </div>
    </section>
  );
}
