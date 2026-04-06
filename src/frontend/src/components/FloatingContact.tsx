import { Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="white"
      className="w-7 h-7"
      aria-hidden="true"
    >
      <path d="M16 3C8.832 3 3 8.832 3 16c0 2.385.638 4.617 1.748 6.547L3 29l6.641-1.727A12.93 12.93 0 0 0 16 29c7.168 0 13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11a10.95 10.95 0 0 1-5.57-1.516l-.387-.234-4.012 1.043 1.074-3.906-.254-.41A10.946 10.946 0 0 1 5 16C5 9.914 9.914 5 16 5zm-3.152 5.277c-.195 0-.512.074-.785.371-.273.297-1.04 1.016-1.04 2.477 0 1.46 1.063 2.871 1.211 3.07.149.2 2.063 3.285 5.07 4.473 2.497.98 3.008.786 3.551.739.543-.047 1.754-.719 2-.414.246.305.246 1.023.246 1.023s-.75.586-1.047.82c-.297.234-2.34 1.18-4.684.086-2.344-1.094-3.918-3.34-4.18-3.68-.261-.34-2.093-2.832-2.093-5.379 0-2.547 1.32-3.793 1.793-4.32.472-.527 1.027-.52 1.367-.52.34 0 .68 0 .98.008.316.007.742-.12 1.16.887.422 1.012 1.43 3.496 1.555 3.75.125.254.207.55.043.879-.168.328-.25.535-.496.824-.246.293-.52.652-.742.875-.246.246-.504.516-.215 1.012.289.496 1.28 2.117 2.746 3.43 1.887 1.68 3.473 2.195 3.969 2.441.496.246.785.207 1.074-.125.289-.332 1.234-1.441 1.563-1.934.328-.492.656-.41 1.105-.246.449.164 2.848 1.344 3.344 1.586.496.242.824.367.949.574.125.207.125 1.195-.293 2.348-.418 1.152-2.438 2.203-3.363 2.297-.855.086-1.918.12-3.098-.277-2.57-.867-5.418-2.965-7.531-6.168-1.086-1.656-1.695-3.527-1.703-5.398 0-2.016.621-3.375 1.363-4.434.742-1.059 1.738-1.59 2.398-1.59z" />
    </svg>
  );
}

export function FloatingContact() {
  const [callHovered, setCallHovered] = useState(false);
  const [waHovered, setWaHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 flex flex-col items-end gap-3"
      style={{ zIndex: 50 }}
      data-ocid="floating_contact.panel"
    >
      {/* WhatsApp Button */}
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
      >
        {/* Tooltip */}
        <motion.span
          className="bg-[oklch(0.10_0.03_240)] border border-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md pointer-events-none whitespace-nowrap"
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: waHovered ? 1 : 0, x: waHovered ? 0 : 8 }}
          transition={{ duration: 0.18 }}
          aria-hidden="true"
        >
          WhatsApp Us
        </motion.span>

        <a
          href="https://wa.me/919441558989"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          data-ocid="floating_contact.whatsapp_button"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
          style={{ backgroundColor: "#25D366" }}
          onMouseEnter={() => setWaHovered(true)}
          onMouseLeave={() => setWaHovered(false)}
          onFocus={() => setWaHovered(true)}
          onBlur={() => setWaHovered(false)}
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            <WhatsAppIcon />
          </motion.div>
        </a>
      </motion.div>

      {/* Call Button */}
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.25, ease: "easeOut" }}
      >
        {/* Tooltip */}
        <motion.span
          className="bg-[oklch(0.10_0.03_240)] border border-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md pointer-events-none whitespace-nowrap"
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: callHovered ? 1 : 0, x: callHovered ? 0 : 8 }}
          transition={{ duration: 0.18 }}
          aria-hidden="true"
        >
          Call Us
        </motion.span>

        <a
          href="tel:9441558989"
          aria-label="Call SB Drillers"
          data-ocid="floating_contact.call_button"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-brand-gold/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-gold bg-brand-gold hover:bg-brand-gold-hover"
          onMouseEnter={() => setCallHovered(true)}
          onMouseLeave={() => setCallHovered(false)}
          onFocus={() => setCallHovered(true)}
          onBlur={() => setCallHovered(false)}
        >
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
          >
            <Phone
              className="w-6 h-6 text-[oklch(0.13_0.04_240)]"
              strokeWidth={2.2}
            />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
}
