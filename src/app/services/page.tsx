import { ServicesSection } from "@/components/sections/ServicesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata = {
  title: "Services | Klikx 3D Isometric Modeling",
  description: "Explore our range of 3D isometric modeling services for property visualization.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-background py-20 md:py-32">
        <div className="container px-4 sm:px-8 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Explore our range of 3D isometric modeling services tailored for property owners and managers.
            </p>
          </div>
        </div>
      </section>
      <ServicesSection />
      <FeaturesSection />
      <CtaSection />
    </>
  );
}
