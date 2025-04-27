"use client";

import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="bg-background border-y section-padding">
      <div className="container relative px-4 sm:px-8 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-12 items-center md:grid-cols-2 lg:gap-20"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="block text-primary">Klikx</span>
              Modèles 3D isométriques pour propriétaires Airbnb
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Prêt à transformer vos annonces immobilières avec des visuels captivants qui augmenteront vos réservations ?
            </p>
          </div>

          <div className="bg-primary p-8 md:p-12">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Démarrer un projet
              </h3>
              <p className="text-white/80 mb-8">
                Franchissez la première étape vers la création de visualisations 3D époustouflantes qui captiveront vos clients potentiels.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-none px-8 text-primary w-full"
              >
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer"
                >
                  Nous contacter
                </ScrollLink>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
