"use client";

import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  hover?: boolean;
};

export function GlassCard({ children, className, hover = true, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl",
        hover && "glass-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
