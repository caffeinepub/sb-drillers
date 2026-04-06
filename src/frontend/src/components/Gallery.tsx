import { motion } from "motion/react";

const galleryImages = [
  {
    src: "/assets/img-20260406-wa0012-019d63ad-6c2a-7152-b0f5-776936d045e1.jpg",
    caption: "Our Founder",
    tag: "Founder",
  },
  {
    src: "/assets/img-20260406-wa0010-019d63ad-6c53-7368-a153-4c64a5309d0e.jpg",
    caption: "6½ Inch Borewell",
    tag: '6½"',
  },
  {
    src: "/assets/img-20260406-wa0009-019d63ad-70fa-77ff-9af8-b8cef9159e44.jpg",
    caption: "4½ Inch Borewell",
    tag: "4½ BOREWELLS",
  },
  {
    src: "/assets/img-20260406-wa0011-019d63ad-713f-73e2-9f75-057602187026.jpg",
    caption: "Robo Technology Drilling",
    tag: "Robo Technology",
  },
];

// Duplicate images for seamless infinite loop
const loopedImages = [...galleryImages, ...galleryImages, ...galleryImages];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.17 0.045 240) 0%, oklch(0.13 0.04 240) 100%)",
      }}
      data-ocid="gallery.section"
    >
      {/* Section heading */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-brand-gold font-semibold uppercase tracking-widest text-sm">
            Photo Gallery
          </span>
          <h2 className="font-display font-extrabold text-white mt-2 text-3xl sm:text-4xl tracking-wide">
            Our Work in Action
          </h2>
          <div className="w-16 h-1 bg-brand-gold rounded mx-auto mt-4" />
          <p className="text-white/55 mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            Real projects. Real results. See our Robo Technology drilling rigs,
            precision borewell sizes, and the passion of our founding team.
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll carousel */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Left fade edge */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{
            background:
              "linear-gradient(to right, oklch(0.17 0.045 240), transparent)",
          }}
        />
        {/* Right fade edge */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{
            background:
              "linear-gradient(to left, oklch(0.13 0.04 240), transparent)",
          }}
        />

        {/* Scrolling track */}
        <div
          className="gallery-track flex gap-5 py-4"
          style={{ width: "max-content" }}
          data-ocid="gallery.list"
        >
          {loopedImages.map((img, idx) => (
            <div
              key={`${img.caption}-${idx}`}
              className="gallery-card flex-shrink-0 group relative rounded-2xl overflow-hidden border border-white/10 shadow-card cursor-pointer"
              style={{ width: "320px", height: "280px" }}
              data-ocid={
                idx < galleryImages.length
                  ? `gallery.item.${idx + 1}`
                  : undefined
              }
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Tag badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-brand-gold/90 text-xs font-bold text-[oklch(0.13_0.04_240)] uppercase tracking-wider shadow">
                {img.tag}
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                <p className="text-white font-semibold text-sm leading-tight">
                  {img.caption}
                </p>
                <div className="w-8 h-0.5 bg-brand-gold rounded mt-1" />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
