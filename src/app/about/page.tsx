import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import Image from "next/image";

export const metadata = {
  title: "About Us | Klikx 3D Isometric Modeling",
  description: "Learn more about Klikx and our mission to transform property listings with stunning 3D isometric models.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-background py-20 md:py-32">
        <div className="container px-4 sm:px-8 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About <span className="text-primary">Klikx</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              We're transforming property marketing with captivating 3D isometric visualizations.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/images/isometric-house-2.jpg"
                alt="3D isometric house model"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
              <p className="mb-4 text-muted-foreground">
                Klikx was founded with a simple mission: to help property owners showcase their spaces in the most attractive and impactful way possible.
              </p>
              <p className="mb-4 text-muted-foreground">
                We recognized that traditional photography, while valuable, often struggles to convey spatial relationships and overall layout. Our isometric 3D modeling approach bridges that gap, giving potential guests a clear understanding of the property before booking.
              </p>
              <p className="text-muted-foreground">
                Today, we work with individual Airbnb hosts, property management companies, and real estate professionals across the country, helping them stand out in a competitive market with our customized 3D visualizations.
              </p>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <h3 className="mb-2 text-xl font-medium">Our Mission</h3>
              <p className="text-muted-foreground">
                To enhance property listings with stunning visual representations that increase bookings and rental success.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="mb-2 text-xl font-medium">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the leading provider of isometric 3D modeling for the short-term rental and property management industries.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gem"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/></svg>
              </div>
              <h3 className="mb-2 text-xl font-medium">Our Values</h3>
              <p className="text-muted-foreground">
                Quality, attention to detail, customer satisfaction, and innovation drive everything we do at Klikx.
              </p>
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
