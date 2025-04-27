import { ProcessSection } from "@/components/sections/ProcessSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata = {
  title: "Our Process | Klikx 3D Isometric Modeling",
  description: "Learn about our streamlined process for creating stunning 3D isometric property models.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="bg-background py-20 md:py-32">
        <div className="container px-4 sm:px-8 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our <span className="text-primary">Process</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              From concept to completion, discover how we bring your property to life through 3D isometric modeling.
            </p>
          </div>
        </div>
      </section>
      <ProcessSection />
      <CtaSection />
    </>
  );
}
