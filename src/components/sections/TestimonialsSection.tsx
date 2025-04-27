"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const testimonials = [
  {
    id: "testimonial-1",
    quote:
      "Les modèles 3D isométriques de Klikx ont complètement transformé nos annonces Airbnb. Nous avons constaté une augmentation de 30% des demandes de réservation depuis leur ajout à nos photos de propriété.",
    author: "Sarah J.",
    role: "Superhôte Airbnb",
  },
  {
    id: "testimonial-2",
    quote:
      "En tant qu'entreprise de gestion immobilière, nous avions besoin d'un moyen de présenter plusieurs propriétés de manière cohérente. Klikx a livré des modèles isométriques impressionnants que nos clients adorent et qui ont considérablement amélioré nos résultats marketing.",
    author: "Michael T.",
    role: "PDG, Urban Stay Properties",
  },
  {
    id: "testimonial-3",
    quote:
      "Le niveau de détail dans notre modèle 3D premium est impressionnant. Klikx a capturé toutes les caractéristiques architecturales uniques de notre maison de vacances, la faisant ressortir sur un marché encombré.",
    author: "Rebecca L.",
    role: "Propriétaire de location saisonnière",
  },
  {
    id: "testimonial-4",
    quote:
      "Le service client de Klikx est aussi impressionnant que leurs modèles 3D. Ils ont été réactifs, ont effectué toutes les révisions demandées rapidement et ont livré avant la date prévue.",
    author: "David K.",
    role: "Investisseur immobilier",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-muted/30 section-padding">
      <div className="container px-4 sm:px-8 md:px-12">
        <div className="mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-primary font-medium mb-4">Témoignages</h3>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl max-w-2xl">
              Ce que disent nos clients
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Découvrez les témoignages de propriétaires et gestionnaires qui ont valorisé leurs annonces avec nos modèles 3D isométriques
            </p>
          </motion.div>
        </div>

        <div className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative border-t pt-8"
            >
              <blockquote className="grid grid-cols-1 md:grid-cols-6 gap-8">
                <div className="md:col-span-1">
                  <div className="font-medium mb-1">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
                <p className="text-xl md:text-2xl leading-relaxed font-medium md:col-span-5">
                  {testimonial.quote}
                </p>
              </blockquote>
            </motion.div>
          ))}
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
              Rejoindre nos clients satisfaits
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
