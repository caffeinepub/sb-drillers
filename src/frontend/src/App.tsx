import { Contact } from "@/components/Contact";
import { FloatingContact } from "@/components/FloatingContact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Technology } from "@/components/Technology";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <div className="font-body">
      <Toaster />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        <Technology />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
