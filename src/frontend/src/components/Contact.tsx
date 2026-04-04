import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitEnquiry } from "@/hooks/useQueries";
import { CheckCircle2, Loader2, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const mutation = useSubmitEnquiry();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    try {
      await mutation.mutateAsync(form);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      toast.success("Enquiry submitted! We\u2019ll get back to you soon.");
    } catch {
      toast.error("Failed to submit. Please call us directly at 9441558989.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
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
            Reach Us
          </span>
          <h2 className="font-poppins font-extrabold text-foreground mt-2 text-3xl sm:text-4xl uppercase tracking-wide">
            Get In Touch
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-brand-orange rounded" />
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Have a question or ready to drill? Contact us for a free site
            inspection — no obligation, no hidden charges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="bg-brand-navy rounded-lg p-8 h-full"
              style={{ background: "oklch(0.26 0.06 240)" }}
            >
              <h3 className="font-poppins font-bold text-white text-2xl mb-8">
                Contact Information
              </h3>

              {/* Address */}
              <div className="flex gap-4 mb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-orange/20 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Our Location
                  </h4>
                  <address className="text-white/70 text-sm not-italic leading-relaxed">
                    Near Indian Bank, Jaitra Hospital,
                    <br />
                    Pillar No 1, Chandra Nagar Main Road,
                    <br />
                    Medchal — 501401
                  </address>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 mb-10">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-brand-orange/20 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <a
                    href="tel:9441558989"
                    className="text-brand-orange font-bold text-xl hover:text-white transition-colors"
                    data-ocid="contact.link"
                  >
                    9441558989
                  </a>
                  <p className="text-white/60 text-xs mt-1">
                    Available Mon–Sat, 7am–7pm
                  </p>
                </div>
              </div>

              {/* Badge */}
              <div className="bg-brand-orange rounded-lg p-4 flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-white flex-shrink-0" />
                <p className="text-white text-sm font-medium">
                  Free site inspection — visit us or call now!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center py-12"
                data-ocid="contact.success_state"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="font-poppins font-bold text-foreground text-2xl mb-3">
                  Enquiry Submitted!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you! Our team will contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-orange text-white font-semibold px-6 py-2.5 rounded hover:bg-brand-orange-hover transition-colors"
                  data-ocid="contact.secondary_button"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-secondary rounded-lg p-8 flex flex-col gap-5"
                data-ocid="contact.panel"
              >
                <div>
                  <Label
                    htmlFor="contact-name"
                    className="text-sm font-semibold mb-1.5 block"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="contact-name"
                    name="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="bg-white border-border"
                    data-ocid="contact.input"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="contact-email"
                    className="text-sm font-semibold mb-1.5 block"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-white border-border"
                    data-ocid="contact.input"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="contact-phone"
                    className="text-sm font-semibold mb-1.5 block"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="bg-white border-border"
                    data-ocid="contact.input"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="contact-message"
                    className="text-sm font-semibold mb-1.5 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your borewell requirements..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-white border-border resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={mutation.isPending}
                  className="mt-1 flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover disabled:opacity-60 text-white font-bold uppercase tracking-wide px-6 py-3.5 rounded text-sm transition-all duration-200 shadow-md hover:shadow-lg"
                  data-ocid="contact.submit_button"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Enquiry
                    </>
                  )}
                </button>

                {mutation.isError && (
                  <p
                    className="text-destructive text-sm text-center"
                    data-ocid="contact.error_state"
                  >
                    Failed to submit. Please call 9441558989 directly.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
