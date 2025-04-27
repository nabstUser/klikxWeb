"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { LayoutGrid, Layers, Eye, Clock, Sparkles, LineChart } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    title: "Clear Layout Visualization",
    description:
      "Our isometric view provides a complete overview of the property layout, helping potential guests understand the space before booking.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Customizable Detail Levels",
    description:
      "Choose the level of detail that matches your needs, from simple exterior models to fully detailed interior and exterior visualizations.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Perspective Optimization",
    description:
      "Isometric perspective offers the perfect balance between realism and clarity, optimizing space perception in a visually appealing way.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Quick Turnaround",
    description:
      "Get your 3D models faster than traditional rendering services, with our streamlined workflow and efficient modeling techniques.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Visual Impact",
    description:
      "Stand out from other listings with unique, eye-catching visuals that showcase your property's best features in a memorable way.",
  },
  {
    icon: <LineChart className="h-6 w-6" />,
    title: "Proven Results",
    description:
      "Properties with 3D isometric models see increased engagement and booking rates, giving you a competitive edge in the marketplace.",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background py-20 md:py-32">
      <motion.div
        className="absolute top-0 right-0 -z-10 h-full w-full"
        style={{
          background: "radial-gradient(circle at 80% 50%, rgba(var(--primary), 0.08) 0%, transparent 50%)"
        }}
      />

      <div className="container relative z-10 px-4 sm:px-8 md:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Why Choose Isometric 3D Modeling
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover how our specialized approach helps property listings stand out and attract more bookings
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-lg border bg-card p-6 shadow-sm"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 30px -15px rgba(var(--primary), 0.2)"
                  }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-1 hidden lg:block"
            style={{ y }}
          >
            <div className="relative h-full min-h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/images/isometric-house-2.jpg"
                alt="Detailed isometric house model"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute bottom-8 left-8 max-w-xs rounded-lg bg-background/80 p-6 backdrop-blur-sm"
              >
                <h3 className="mb-2 text-xl font-semibold">See the Difference</h3>
                <p className="text-sm">
                  Our isometric models provide clarity and detail that traditional photos cannot match, helping guests make informed decisions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
