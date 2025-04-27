"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { AnimatedValue } from "@/components/ui/counter";

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Callback pour détecter quand la section devient visible
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting !== isVisible) {
        setIsVisible(entry.isIntersecting);
      }
    },
    [isVisible]
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.25,
      rootMargin: "-5% 0px",
    });

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, [handleIntersection]);

  const stats = [
    {
      id: "experience",
      value: "10+",
      label: "Années d'expérience",
      color: "bg-primary text-white",
    },
    {
      id: "satisfaction",
      value: "98%",
      label: "Taux de satisfaction",
      color: "bg-zinc-50 dark:bg-zinc-800 text-foreground",
    },
    {
      id: "projects",
      value: "500+",
      label: "Projets réalisés",
      color: "bg-zinc-900 text-white",
    },
    {
      id: "response",
      value: "24h",
      label: "Délai de réponse",
      color: "bg-primary/20 text-foreground",
    },
  ];

  // Animation variants pour créer un effet d'apparition en grille
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 md:py-32" id="stats-section">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className={`aspect-square ${stat.color} p-6 md:p-8 lg:p-10 flex flex-col justify-center items-start transition-transform hover:scale-[1.02] duration-300`}
            >
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 md:mb-3">
                <AnimatedValue value={stat.value} isVisible={isVisible} />
              </div>
              <div className="text-sm md:text-base uppercase tracking-wide font-medium opacity-80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
