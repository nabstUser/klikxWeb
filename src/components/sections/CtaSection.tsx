"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/images/isometric-houses.jpg')] bg-cover bg-center opacity-5" />
      <div className="container relative px-4 sm:px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to Transform Your Property Listings?
          </h2>
          <p className="mt-6 text-lg text-white/80 md:text-xl">
            Take the first step toward creating stunning 3D visualizations that will captivate potential guests and increase your bookings.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-full px-8 text-primary"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/20 px-8 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-primary-foreground/10 blur-3xl" />
    </section>
  );
}
