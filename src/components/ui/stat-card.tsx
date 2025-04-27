import type React from "react";
import { cn } from "@/lib/utils";
import { AnimatedValue } from "./counter";
import { motion } from "framer-motion";

// Animation variants pour les cartes individuelles
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] // Custom bezier curve for a nice spring effect
    }
  }
};

interface StatCardProps {
  value: string;
  label: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  isVisible?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  bgColor = "bg-primary",
  textColor = "text-white",
  className,
  isVisible,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      className={cn(
        `flex flex-col justify-center p-6 md:p-8 aspect-square ${bgColor} ${textColor}`,
        className
      )}
    >
      <div className="number-stat mb-2">
        <AnimatedValue value={value} isVisible={isVisible} />
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

interface StatsGridProps {
  stats: {
    value: string;
    label: string;
    bgColor?: string;
    textColor?: string;
  }[];
  className?: string;
  isVisible?: boolean;
}

export const StatsGrid: React.FC<StatsGridProps> = ({
  stats,
  className,
  isVisible
}) => {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          label={stat.label}
          bgColor={stat.bgColor}
          textColor={stat.textColor}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
};
