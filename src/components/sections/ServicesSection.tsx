"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-scroll";

const packages = [
  {
    name: "Basic",
    description: "Perfect for simple property listings",
    price: "$199",
    features: [
      "Isometric exterior 3D model",
      "Basic texture and lighting",
      "1 revision included",
      "Delivered within 5 days",
      "High-resolution JPEG/PNG files",
    ],
  },
  {
    name: "Premium",
    description: "Ideal for detailed property visualization",
    price: "$349",
    features: [
      "Detailed isometric exterior 3D model",
      "Enhanced textures and lighting",
      "Basic landscaping elements",
      "2 revisions included",
      "Delivered within 4 days",
      "High-resolution JPEG/PNG/SVG files",
    ],
    highlighted: true,
  },
  {
    name: "Deluxe",
    description: "Complete property showcase solution",
    price: "$599",
    features: [
      "Ultra-detailed isometric exterior & interior",
      "Advanced textures and lighting effects",
      "Comprehensive landscaping details",
      "Multiple viewing angles",
      "3 revisions included",
      "Delivered within 7 days",
      "All file formats + editable source files",
    ],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-muted/50 py-20 md:py-32">
      {/* Background elements */}
      <motion.div
        className="absolute top-0 left-0 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
        style={{ y: y2 }}
      />

      <div className="container relative z-10 px-4 sm:px-8 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ opacity }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Service Packages
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the package that best fits your property visualization needs
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
            >
              <Card
                className={`h-full transition-all ${
                  pkg.highlighted
                    ? "border-primary/50 shadow-md"
                    : ""
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground">/ model</span>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-x-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant={pkg.highlighted ? "default" : "outline"}
                    className="w-full rounded-full"
                  >
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="cursor-pointer"
                    >
                      Get Started
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
