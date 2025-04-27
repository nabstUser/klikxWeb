"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";

const packages = [
  {
    id: "basic",
    name: "Basic",
    subtitle: "Modèles extérieurs simples",
    description: "Parfait pour les présentations simples de propriétés",
    price: "199€",
    features: [
      "Modèle 3D isométrique extérieur",
      "Textures et éclairage de base",
      "1 révision incluse",
      "Livraison sous 5 jours",
      "Fichiers JPEG/PNG haute résolution",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    subtitle: "Extérieur détaillé",
    description: "Idéal pour une visualisation détaillée",
    price: "349€",
    features: [
      "Modèle 3D isométrique extérieur détaillé",
      "Textures et éclairage améliorés",
      "Éléments paysagers basiques",
      "2 révisions incluses",
      "Livraison sous 4 jours",
      "Fichiers JPEG/PNG/SVG haute résolution",
    ],
    highlighted: true,
  },
  {
    id: "deluxe",
    name: "Deluxe",
    subtitle: "Intérieur & Extérieur",
    description: "Solution complète de présentation immobilière",
    price: "599€",
    features: [
      "Modèle 3D isométrique intérieur et extérieur ultra-détaillé",
      "Textures avancées et effets d'éclairage",
      "Détails paysagers complets",
      "Angles de vue multiples",
      "3 révisions incluses",
      "Livraison sous 7 jours",
      "Tous formats + fichiers source modifiables",
    ],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState("premium");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  return (
    <section ref={ref} id="services" className="relative overflow-hidden bg-background section-padding">
      <div className="container relative z-10 px-4 sm:px-8 md:px-12">
        <div className="mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-primary font-medium mb-4">Nos Offres</h3>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl max-w-2xl">
              Services de Modélisation 3D
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Choisissez le forfait qui correspond le mieux à vos besoins de visualisation immobilière.
              Chaque offre est conçue pour mettre en valeur votre propriété de manière unique.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-start">
          <div>
            <div className="flex flex-col sm:flex-row mb-8 border-b">
              {packages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setActiveTab(pkg.id)}
                  className={`px-5 py-4 text-left sm:text-center border-b-2 transition-colors font-medium ${
                    activeTab === pkg.id
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {pkg.name}
                </button>
              ))}
            </div>

            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`${activeTab === pkg.id ? "block" : "hidden"}`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.subtitle}</h3>
                  <p className="text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="mb-6 flex items-baseline gap-x-1">
                    <span className="text-5xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground">/ modèle</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-x-3">
                      <CheckCircle className="h-6 w-6 flex-shrink-0 text-primary mt-0.5" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="default"
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
                    Demander un devis
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ y: y1 }}
            className="relative h-[500px] md:h-[600px] bg-muted/30 hidden md:block"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {activeTab === "basic" && (
                <Image
                  src="/images/isometric-house-1.jpg"
                  alt="Modèle 3D isométrique Basic"
                  width={400}
                  height={400}
                  className="object-contain p-8"
                />
              )}
              {activeTab === "premium" && (
                <Image
                  src="/images/isometric-house-2.jpg"
                  alt="Modèle 3D isométrique Premium"
                  width={400}
                  height={400}
                  className="object-contain p-8"
                />
              )}
              {activeTab === "deluxe" && (
                <Image
                  src="/images/isometric-houses.jpg"
                  alt="Modèle 3D isométrique Deluxe"
                  width={400}
                  height={400}
                  className="object-contain p-8"
                />
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white p-6">
              <span className="text-xl font-bold">100%</span>
              <span className="text-sm block">Personnalisable</span>
            </div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
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
              Découvrir nos services
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
