"use client";

import { HTMLAttributes, ReactNode, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hover?: boolean;
  /**
   * Paints a highlight that follows the pointer across the card. Purely
   * pointer-driven, so it stays dormant on touch and for keyboard users.
   */
  spotlight?: boolean;
};

export function GlassCard({
  children,
  className,
  hover = true,
  spotlight = false,
  ...props
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!spotlight || e.pointerType !== "mouse") return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    },
    [spotlight]
  );

  return (
    <div
      ref={ref}
      onPointerMove={spotlight ? handlePointerMove : undefined}
      className={cn(
        "glass rounded-2xl card-shadow",
        hover && "glass-hover card-shadow-hover",
        spotlight && "spotlight relative isolate",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
