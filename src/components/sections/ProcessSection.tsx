"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const steps = [
  {
    number: "01",
    title: "Consultation & Besoins",
    description:
      "Nous commençons par comprendre votre propriété et vos besoins de visualisation. Partagez les plans, photos, et toutes exigences spécifiques que vous avez.",
  },
  {
    number: "02",
    title: "Proposition & Accord",
    description:
      "Sur la base de vos exigences, nous recommandons le forfait le plus adapté et fournissons une proposition détaillée avec calendrier et livrables.",
  },
  {
    number: "03",
    title: "Modélisation 3D",
    description:
      "Notre équipe spécialisée crée un modèle isométrique détaillé de votre propriété, en se concentrant sur les proportions et la disposition précises.",
  },
  {
    number: "04",
    title: "Textures & Détails",
    description:
      "Nous ajoutons textures, couleurs et détails environnementaux pour donner vie à votre propriété avec le niveau de détail adapté à votre forfait choisi.",
  },
  {
    number: "05",
    title: "Révision & Affinage",
    description:
      "Examinez le rendu initial et demandez des ajustements. Nous affinons le modèle selon vos commentaires (le nombre de révisions dépend de votre forfait).",
  },
  {
    number: "06",
    title: "Livraison Finale",
    description:
      "Recevez votre modèle 3D isométrique haute résolution dans les formats de fichiers demandés, prêt à valoriser vos annonces immobilières.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="bg-background section-padding">
      <div className="container px-4 sm:px-8 md:px-12">
        <div className="mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-primary font-medium mb-4">Notre Méthode</h3>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl max-w-2xl">
              Processus
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Du concept à la réalisation, voici comment nous transformons votre propriété en une superbe visualisation 3D isométrique
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-16">
            {steps.slice(0, 3).map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-primary text-xs font-mono mb-2">{step.number}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-16">
            {steps.slice(3).map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="relative"
              >
                <div className="text-primary text-xs font-mono mb-2">{step.number}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 text-center"
        >
          <Button
            asChild
            size="lg"
            className="rounded-none px-10 py-7 text-base"
          >
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer"
            >
              Commencer votre projet
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
