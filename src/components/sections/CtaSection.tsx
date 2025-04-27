"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Arrow } from "@/components/ui/arrow";

export function CtaSection() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto text-white"
        >
          <div className="mb-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Klikx<span className="inline-block ml-2">®</span>
            </h2>
            <div className="flex justify-center mb-8">
              <div className="h-1 w-20 bg-white/20" />
            </div>
            <h3 className="text-xl md:text-2xl font-medium mb-8">
              MODÈLES 3D ISOMÉTRIQUES POUR
              <br />
              PROPRIÉTAIRES ET AGENCES IMMOBILIÈRES
            </h3>
          </div>

          <div className="inline-flex items-center font-medium text-lg group">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer flex items-center"
            >
              Démarrer maintenant
              <Arrow
                direction="up-right"
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                color="white"
                size="lg"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
