"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation & Requirements",
    description:
      "We begin by understanding your property and visualization needs. Share property plans, photos, and any specific requirements you have.",
  },
  {
    number: "02",
    title: "Proposal & Agreement",
    description:
      "Based on your requirements, we'll recommend the best package for your needs and provide a detailed proposal with timeline and deliverables.",
  },
  {
    number: "03",
    title: "3D Modeling & Design",
    description:
      "Our specialized team creates a detailed isometric model of your property, focusing on accurate proportions and layout visualization.",
  },
  {
    number: "04",
    title: "Texture & Details",
    description:
      "We add textures, colors, and environmental details to bring your property to life with the appropriate level of detail for your chosen package.",
  },
  {
    number: "05",
    title: "Review & Refinement",
    description:
      "Review the initial render and request any adjustments. We'll refine the model based on your feedback (number of revisions depends on your package).",
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "Receive your completed high-resolution 3D isometric model(s) in the requested file formats, ready to enhance your property listings.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-muted/30 py-20 md:py-32">
      <div className="container px-4 sm:px-8 md:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From concept to completion, here's how we transform your property into a stunning 3D isometric visualization
            </p>
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Vertical line connecting steps */}
          <div className="absolute left-8 top-0 bottom-0 hidden w-0.5 bg-primary/30 md:block" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col gap-8 md:flex-row"
                >
                  <div className="flex flex-shrink-0 items-center md:w-64">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white md:absolute md:z-10">
                      {step.number}
                    </div>
                    <div className="ml-6 md:hidden">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                  </div>
                  <div className="ml-0 md:ml-32">
                    <h3 className="mb-4 hidden text-xl font-semibold md:block">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
