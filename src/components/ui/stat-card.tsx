import type React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  bgColor = "bg-primary",
  textColor = "text-white",
  className,
}) => {
  return (
    <div
      className={cn(
        `flex flex-col justify-center p-6 md:p-8 aspect-square ${bgColor} ${textColor}`,
        className
      )}
    >
      <div className="number-stat mb-2">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
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
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats, className }) => {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          label={stat.label}
          bgColor={stat.bgColor}
          textColor={stat.textColor}
        />
      ))}
    </div>
  );
};
