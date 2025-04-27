"use client";

import type React from "react";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  end: number;
  duration?: number; // en millisecondes
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime: number | null = null;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        // Utilisation d'une fonction d'easing pour rendre l'animation plus naturelle
        // EaseOutExpo fait ralentir l'animation vers la fin
        const easeOutExpo = 1 - Math.pow(2, -10 * progress);

        setCount(Math.min(easeOutExpo * end, end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setHasAnimated(true);
        }
      };

      animationFrame = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration, hasAnimated]);

  // Formatage du nombre avec des décimales et séparateurs si nécessaire
  const formattedCount = count.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <div ref={ref} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </div>
  );
};

// Variante qui prend une chaîne comme "10+" ou "98%" et extrait le nombre
export const AnimatedValue: React.FC<{
  value: string;
  className?: string;
  duration?: number;
}> = ({ value, className, duration = 2000 }) => {
  // Extraction du nombre et du suffixe/préfixe
  const numericMatch = value.match(/([+-]?\d+(\.\d+)?)/);

  if (!numericMatch) {
    return <div className={className}>{value}</div>;
  }

  const numericValue = Number.parseFloat(numericMatch[0]);
  const prefix = value.substring(0, value.indexOf(numericMatch[0]));
  const suffix = value.substring(value.indexOf(numericMatch[0]) + numericMatch[0].length);

  // Détermination des décimales en fonction de la valeur d'entrée
  const decimals = numericMatch[0].includes(".")
    ? numericMatch[0].split(".")[1].length
    : 0;

  return (
    <Counter
      end={numericValue}
      prefix={prefix}
      suffix={suffix}
      decimals={decimals}
      className={className}
      duration={duration}
    />
  );
};
