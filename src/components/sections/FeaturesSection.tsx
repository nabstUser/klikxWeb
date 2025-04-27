"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { LayoutGrid, Layers, Eye, Clock, Sparkles, LineChart } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const features = [
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    title: "Visualisation Claire",
    description:
      "Notre vue isométrique offre une vision complète de l'agencement de la propriété, aidant les voyageurs à comprendre l'espace avant de réserver.",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Niveaux de Détail Personnalisables",
    description:
      "Choisissez le niveau de détail qui correspond à vos besoins, des modèles extérieurs simples jusqu'aux visualisations intérieures et extérieures complètes.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Optimisation des Perspectives",
    description:
      "La perspective isométrique offre l'équilibre parfait entre réalisme et clarté, optimisant la perception de l'espace de manière visuellement attrayante.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Réalisation Rapide",
    description:
      "Obtenez vos modèles 3D plus rapidement que les services de rendu traditionnels, grâce à notre flux de travail optimisé et nos techniques de modélisation efficaces.",
  }
];

const stats = [
  {
    number: "250+",
    label: "Modèles 3D Créés",
    color: "bg-primary",
  },
  {
    number: "96%",
    label: "Taux de Satisfaction",
    color: "bg-accent",
  },
  {
    number: "30%",
    label: "Augmentation des Réservations",
    color: "bg-chart-3",
  },
  {
    number: "48h",
    label: "Délai Moyen de Livraison",
    color: "bg-chart-4",
  }
];

export function FeaturesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} id="about" className="relative overflow-hidden bg-background section-padding">
      <div className="container relative z-10 px-4 sm:px-8 md:px-12">
        <div className="mx-auto mb-20 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-primary font-medium mb-4">Nos Avantages</h3>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl max-w-2xl">
              Modélisation 3D Isométrique Professionnelle
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Klikx est une entreprise spécialisée dans la <strong>modélisation 3D isométrique réaliste</strong>, avec un degré de détail adapté en fonction de l'offre choisie. Nous nous adressons principalement aux <strong>propriétaires Airbnb et aux conciergeries</strong>.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${stat.color} text-white color-square`}
            >
              <div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ y }}
          >
            <div className="relative overflow-hidden">
              <Image
                src="/images/isometric-house-2.jpg"
                alt="Modèle 3D isométrique détaillé"
                width={600}
                height={700}
                className="object-contain"
              />
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Pourquoi choisir la modélisation 3D isométrique ?</h3>
              <p className="text-muted-foreground mb-8">
                Grâce à des techniques avancées de modélisation 3D, Klikx permet de donner vie aux espaces sous une perspective isométrique, idéale pour <strong>montrer clairement l'aménagement, optimiser l'espace et séduire les voyageurs</strong>.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center bg-primary text-white">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <Button
            asChild
            size="lg"
            className="rounded-none px-8 py-7 text-base"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              Démarrer maintenant
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
