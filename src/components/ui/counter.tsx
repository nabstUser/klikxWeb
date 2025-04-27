"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
  isVisible?: boolean;
}

export const Counter: React.FC<CounterProps> = ({
  end,
  duration = 0.8, // Encore plus rapide, 0.8 seconde
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
  isVisible: externalIsVisible,
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  // Utiliser la visibilité externe si fournie, sinon détecter avec useInView
  const internalIsVisible = useInView(ref, {
    once: false,
    amount: 0.5,
    margin: "-5% 0px",
  });

  // Prioriser la visibilité externe si elle est fournie
  const isVisible = externalIsVisible !== undefined ? externalIsVisible : internalIsVisible;

  // Référence à l'animation frame pour pouvoir l'annuler
  const animationRef = useRef<number | null>(null);

  // Temps de départ de l'animation
  const startTimeRef = useRef<number | null>(null);

  // Version précédente de isVisible pour détecter les changements
  const prevIsVisibleRef = useRef(isVisible);

  // Pour mémoriser la valeur de départ à chaque animation
  const startValueRef = useRef<number>(0);

  useEffect(() => {
    // Ne déclencher l'animation que si isVisible a changé
    if (prevIsVisibleRef.current === isVisible) return;
    prevIsVisibleRef.current = isVisible;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    startTimeRef.current = null;

    // Définir la valeur de départ selon la direction du changement
    const startValue = isVisible ? 0 : end;
    startValueRef.current = startValue;

    // Mettre à jour immédiatement la valeur affichée pour éviter les sauts
    setCount(startValue);

    const targetValue = isVisible ? end : 0;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsedTime = timestamp - startTimeRef.current;
      const progress = Math.min(elapsedTime / (duration * 1000), 1);

      // Easing plus rapide (easeOutQuad)
      const easeOutQuad = 1 - Math.pow(1 - progress, 2);

      // Interpoler entre la valeur de départ et la valeur cible
      const newCount = startValueRef.current + (targetValue - startValueRef.current) * easeOutQuad;

      setCount(newCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Assurer que la valeur finale est exacte
        setCount(targetValue);
      }
    };

    // Démarrer l'animation seulement si la valeur cible est différente de la valeur actuelle
    if (startValue !== targetValue) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

// Composant utilitaire pour analyser des valeurs comme "10+" ou "98%"
export const AnimatedValue: React.FC<{
  value: string;
  className?: string;
  duration?: number;
  isVisible?: boolean;
}> = ({ value, className, duration = 0.8, isVisible }) => {
  // Extraire le nombre et le suffixe/préfixe
  const numericMatch = value.match(/([+-]?\d+(\.\d+)?)/);

  if (!numericMatch) {
    return <span className={className}>{value}</span>;
  }

  const numericValue = parseFloat(numericMatch[0]);
  const prefix = value.substring(0, value.indexOf(numericMatch[0]));
  const suffix = value.substring(value.indexOf(numericMatch[0]) + numericMatch[0].length);

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
      isVisible={isVisible}
    />
  );
};
