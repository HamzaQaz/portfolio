"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 4000,
  className,
  containerClassName,
  as: Component = "div",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  return (
    <Component
      className={cn("relative overflow-hidden rounded-xl p-[1px] bg-transparent", containerClassName)}
      {...otherProps}
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute h-[200%] w-[200%]"
          style={{
            background: "conic-gradient(from 0deg, transparent 0deg, #34d399 60deg, transparent 120deg)",
            left: "-50%",
            top: "-50%",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: duration / 1000, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <div className={cn("relative rounded-[11px] bg-background", className)}>
        {children}
      </div>
    </Component>
  );
}
