"use client";

import { Button } from "@/components/ui/button";
import { Arrow } from "@/components/ui/arrow";
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

  // Effets de parallax améliorés
  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Éléments d'arrière-plan
  const bgLeft = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgRight = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-background"
    >
      {/* Éléments d'arrière-plan bleutés */}
      <motion.div
        className="absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl z-0"
        style={{ y: bgLeft }}
      />
      <motion.div
        className="absolute -right-48 top-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl z-0"
        style={{ y: bgRight }}
      />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Texte à gauche */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 lg:col-span-6 relative z-20"
            style={{ opacity }}
          >
            <div>
              <div className="super-title">Création de modèles révolutionnaires</div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bold leading-[0.9] tracking-tight">
                MODÈLES 3D
                <span className="text-primary block">ISOMÉTRIQUES</span>
                RÉALISTES
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl my-4">
              Que vous soyez propriétaire Airbnb ou une agence immobilière, Klikx crée des modèles 3D isométriques captivants qui augmentent vos réservations et valorisent votre propriété comme jamais auparavant.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mt-6">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-primary text-white hover:bg-primary/90 px-8 py-6 transition-all duration-300"
              >
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer flex items-center"
                >
                  Voir nos services
                  <Arrow direction="up-right" className="ml-3 w-5 h-5" />
                </Link>
              </Button>

              <div className="flex items-center group">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="cursor-pointer text-primary font-medium text-lg flex items-center"
                >
                  Nous contacter
                  <Arrow
                    direction="up-right"
                    className="ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Image à droite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:col-span-6 z-10"
            style={{ y, scale }}
          >
            <div className="relative h-[350px] md:h-[450px] lg:h-[550px] w-full overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/images/isometric-house-1.jpg"
                alt="Modèle 3D isométrique d'une maison"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <motion.div
              className="absolute -right-4 top-6 flex h-24 w-24 items-center justify-center bg-primary text-white md:h-28 md:w-28 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <div className="text-center">
                <div className="text-xl font-bold md:text-2xl">100%</div>
                <div className="text-sm md:text-base">Custom</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
