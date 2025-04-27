import type React from "react";

interface ArrowProps {
  direction?: "up" | "right" | "down" | "left" | "up-right";
  size?: "sm" | "md" | "lg";
  className?: string;
  color?: string;
}

export const Arrow: React.FC<ArrowProps> = ({
  direction = "up-right",
  size = "md",
  className = "",
  color = "currentColor",
}) => {
  const sizeMap = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-6 h-6",
  };

  const sizeClass = sizeMap[size];
  const combinedClassName = `${sizeClass} ${className}`;

  switch (direction) {
    case "up":
      return (
        <svg
          className={combinedClassName}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 5L12 19M12 5L18 11M12 5L6 11"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "right":
      return (
        <svg
          className={combinedClassName}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 12H19M19 12L13 6M19 12L13 18"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "down":
      return (
        <svg
          className={combinedClassName}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 19L12 5M12 19L18 13M12 19L6 13"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "left":
      return (
        <svg
          className={combinedClassName}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12H5M5 12L11 6M5 12L11 18"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "up-right":
    default:
      return (
        <svg
          className={combinedClassName}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 17L17 7M17 7H7M17 7V17"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};
