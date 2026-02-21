"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function HoverEffect({
  items,
  className,
}: {
  items: { title: string; description: string; icon?: React.ReactNode; link?: string }[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {items.map((item, idx) => {
        const Wrapper = item.link ? "a" : "div";
        const wrapperProps = item.link ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } : {};
        return (
          <Wrapper
            key={idx}
            {...wrapperProps}
            className="relative group block p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-accent-glow block rounded-2xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>
            <div className="rounded-xl p-6 bg-card border border-card-border relative z-10 h-full transition-colors group-hover:border-accent/30">
              {item.icon && <div className="mb-3 text-accent">{item.icon}</div>}
              <h4 className="font-display font-bold text-foreground tracking-tight">{item.title}</h4>
              <p className="mt-2 text-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}
