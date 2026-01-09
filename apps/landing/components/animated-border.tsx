"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedBorderProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  onAnimationComplete?: () => void;
}

export function AnimatedBorder({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  onAnimationComplete,
}: AnimatedBorderProps) {
  // Calculate perimeter for stroke animation
  // Using a percentage-based approach for responsive sizing
  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay,
          duration,
          ease: "easeInOut" as const,
        },
        opacity: {
          delay,
          duration: 0.1,
        },
      },
    },
  };

  return (
    <div className={`relative ${className}`}>
      {/* SVG Border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="4"
          ry="4"
          fill="none"
          stroke="rgba(255, 255, 255, 0.8)"
          strokeWidth="1.5"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          onAnimationComplete={onAnimationComplete}
          style={{
            width: "calc(100% - 2px)",
            height: "calc(100% - 2px)",
          }}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
