"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const features = [
  {
    title: "Modèles sur mesure",
    description:
      "Chaque modèle 3D est entièrement personnalisé selon vos spécifications exactes, capturant fidèlement l'essence et les caractéristiques uniques de votre propriété.",
  },
  {
    title: "Rendu haute qualité",
    description:
      "Nos modèles 3D offrent un niveau de détail exceptionnel, avec des textures réalistes, un éclairage parfait et des proportions exactes pour un résultat impressionnant.",
  },
  {
    title: "Processus efficace",
    description:
      "Notre flux de travail rationalisé garantit une livraison rapide sans compromettre la qualité, vous permettant d'intégrer rapidement les modèles dans vos listings.",
  },
  {
    title: "Support multiplateforme",
    description:
      "Les modèles sont optimisés pour toutes les plateformes, qu'il s'agisse de sites web, d'applications mobiles ou de présentations, assurant une expérience visuelle cohérente.",
  },
];

export function FeaturesSection() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="bg-background py-24 md:py-32" id="features">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="super-title">À propos de nos services</div>
            <h2 className="mb-8">CARACTÉRISTIQUES</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mb-10">
              Chez Klikx, nous combinons expertise technique et vision artistique pour créer des modèles 3D isométriques qui transforment la façon dont les clients perçoivent les propriétés immobilières.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="max-w-md">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 flex justify-center"
        >
          <Button
            asChild
            variant="arrow"
            size="link"
            className="group text-lg"
          >
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              Voir nos services
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
