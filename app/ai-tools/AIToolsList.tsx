"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { AITool } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import {
  Bot,
  BrainCircuit,
  Terminal,
  Cpu,
  Sparkles,
  Layers,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  BrainCircuit,
  Terminal,
  Cpu,
  Sparkles,
  Layers,
};

type Props = {
  tools: AITool[];
};

export function AIToolsList({ tools }: Props) {
  const { t } = useLanguage();

  return (
    <div className="mt-14 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {tools.map((tool, index) => {
        const Icon = iconMap[tool.iconName] || Bot;

        return (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <GlassCard className="group relative p-7 h-full flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-accent-blue/50">
              <div
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-10 group-hover:opacity-25 transition-opacity duration-500 blur-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${tool.gradient[0]}, ${tool.gradient[1]})`,
                }}
              />

              <div>
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl glass border border-border shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${tool.gradient[0]}22, ${tool.gradient[1]}22)`,
                    }}
                  >
                    <span
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${tool.gradient[0]}, ${tool.gradient[1]})`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      <Icon size={28} />
                    </span>
                  </div>

                  <span className="font-mono text-xs px-3 py-1 rounded-full glass border border-border text-ink-tertiary">
                    {tool.badge}
                  </span>
                </div>

                <h2 className="mt-6 font-display text-2xl font-semibold text-ink-primary group-hover:text-accent-teal transition-colors">
                  {tool.name}
                </h2>

                <p className="mt-2 text-sm font-medium text-accent-teal/90 leading-snug">
                  {tool.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-border/60">
                <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-ink-tertiary mb-2">
                  <CheckCircle2 size={13} className="text-accent-teal" />
                  <span>{t("aiTools.myUsage")}</span>
                </div>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {tool.myUsage}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        );
      })}
    </div>
  );
}
