import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Ravi Kumar Reddy",
    location: "Medchal",
    rating: 5,
    quote:
      "Excellent borewell drilling work. Got water at 200 feet. Very professional team and free site inspection was very helpful.",
  },
  {
    name: "Lakshmi Narayana",
    location: "Kompally",
    rating: 5,
    quote:
      "Very satisfied with SB Drillers. 30 years experience really shows. Robo technology made the process clean and fast.",
  },
  {
    name: "Suresh Babu",
    location: "Shamirpet",
    rating: 4,
    quote:
      "Drilled borewell for our farm. Water found at good depth. Reasonable pricing and on-time completion. Highly recommended.",
  },
  {
    name: "Anitha Devi",
    location: "Medchal",
    rating: 5,
    quote:
      "Best borewell contractors in the area. My borewell has been working perfectly for 3 years. Trustworthy and reliable service.",
  },
  {
    name: "Venkat Rao",
    location: "Ghatkesar",
    rating: 5,
    quote:
      "Used SB Drillers for residential borewell. Their 4.5 inch borewell is perfect for our home. Great after-service support.",
  },
];

const STAR_POSITIONS = ["1", "2", "3", "4", "5"] as const;

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-3" aria-label={`${rating} out of 5 stars`}>
      {STAR_POSITIONS.map((pos, i) => (
        <Star
          key={pos}
          className={`h-4 w-4 ${
            i < rating
              ? "text-brand-orange fill-brand-orange"
              : "text-gray-300 fill-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-secondary"
      data-ocid="testimonials.section"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-brand-orange font-semibold uppercase tracking-widest text-sm">
            Customer Reviews
          </span>
          <h2 className="font-poppins font-extrabold text-brand-navy mt-2 text-3xl sm:text-4xl uppercase tracking-wide">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-brand-orange rounded mx-auto mt-4" />
        </motion.div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="testimonials.list"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-white rounded-xl shadow-card border border-border p-6 flex flex-col relative overflow-hidden"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              data-ocid={`testimonials.item.${i + 1}`}
            >
              {/* Decorative quote icon */}
              <Quote
                className="absolute top-4 right-4 h-9 w-9 text-brand-orange opacity-15"
                aria-hidden="true"
              />

              {/* Star rating */}
              <StarRating rating={t.rating} />

              {/* Quote text */}
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Customer info */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-brand-navy flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-brand-navy text-sm leading-tight">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
