"use client";

import { AnchorHTMLAttributes, ReactNode, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function MagneticButton({
  children,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  }

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[transform,box-shadow] duration-300 ease-out",
        variant === "primary"
          ? "bg-ink-primary text-bg shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:shadow-[0_8px_30px_rgba(79,140,255,0.35)]"
          : "glass glass-hover text-ink-primary",
        className
      )}
      style={{ transitionProperty: "transform" }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
