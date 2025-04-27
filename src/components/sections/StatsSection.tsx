"use client";

import React from "react";
import { StatsGrid } from "@/components/ui/stat-card";
import { motion } from "framer-motion";

export function StatsSection() {
  const stats = [
    {
      value: "10+",
      label: "Années d'expérience",
      bgColor: "bg-primary",
      textColor: "text-white",
    },
    {
      value: "98%",
      label: "Taux de satisfaction",
      bgColor: "bg-slate-100",
      textColor: "text-foreground",
    },
    {
      value: "500+",
      label: "Projets réalisés",
      bgColor: "bg-slate-800",
      textColor: "text-white",
    },
    {
      value: "24h",
      label: "Délai de réponse",
      bgColor: "bg-primary/20",
      textColor: "text-foreground",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <StatsGrid stats={stats} />
        </motion.div>
      </div>
    </section>
  );
}
