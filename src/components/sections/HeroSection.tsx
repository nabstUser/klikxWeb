"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-scroll";

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background py-20 md:py-32 min-h-[90vh] flex items-center">
      <div className="container relative z-10 px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
            style={{ opacity }}
          >
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-primary">Elevating</span> Property Listings with 3D Isometric Modeling
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
              Klikx creates stunning isometric 3D models of properties, helping Airbnb owners and property management companies increase bookings with captivating visuals.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  Explore Our Services
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            style={{ y, scale }}
          >
            <div className="relative h-[300px] w-full md:h-[500px]">
              <Image
                src="/images/isometric-house-1.jpg"
                alt="3D isometric house model"
                fill
                className="object-contain"
                priority
              />
            </div>
            <motion.div
              className="absolute -right-8 -top-8 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white md:h-24 md:w-24"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <div className="text-center">
                <div className="text-lg font-bold md:text-xl">100%</div>
                <div className="text-sm md:text-base">Custom</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Parallax Background Elements */}
      <motion.div
        className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 100]) }}
      />
      <motion.div
        className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
      />
    </section>
  );
}
