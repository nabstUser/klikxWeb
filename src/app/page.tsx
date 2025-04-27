import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { StatsSection } from "@/components/sections/StatsSection";

export default function Home() {
  return (
    <main>
      <section id="hero">
        <HeroSection />
      </section>

      <StatsSection />

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      <section id="process">
        <ProcessSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <CtaSection />
    </main>
  );
}
