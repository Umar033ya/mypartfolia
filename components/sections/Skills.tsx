"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Code2,
  Globe,
  Atom,
  FileCode,
  Layout,
  Palette,
  Wind,
  GitBranch,
  Github,
  Server,
  Database,
  LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { skillsList } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Code2,
  Globe,
  Atom,
  FileCode,
  Layout,
  Palette,
  Wind,
  GitBranch,
  Github,
  Server,
  Database,
};

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading
          eyebrow={t("skills.eyebrow")}
          title={t("skills.title")}
          description={t("skills.description")}
        />

        <div className="mt-14 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skillsList.map((skill, index) => {
            const Icon = iconMap[skill.iconName] || Code2;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <GlassCard
                  spotlight
                  className="group relative p-6 h-full flex flex-col justify-between overflow-hidden transition-colors duration-300 hover:border-accent-blue/40"
                  style={
                    {
                      "--skill": skill.color,
                      "--skill-light": skill.colorLight ?? skill.color,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-xl pointer-events-none"
                    style={{ backgroundColor: skill.colorLight ?? skill.color }}
                  />

                  <div>
                    <div className="flex items-center justify-between">
                      <div className="skill-ink flex h-12 w-12 items-center justify-center rounded-xl glass border border-border transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                        <Icon size={24} />
                      </div>
                      <span className="font-mono text-xs px-2.5 py-1 rounded-full glass border border-border text-ink-tertiary">
                        {skill.category}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-xl font-semibold text-ink-primary group-hover:text-accent-teal transition-colors">
                      {skill.name}
                    </h3>
                    <p className="mt-2 text-sm text-ink-secondary leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-ink-tertiary">
                    <span className="font-mono">{t("skills.proficiency")}</span>
                    <span className="h-1.5 w-16 rounded-full bg-surface-hover overflow-hidden">
                      <motion.span
                        className="block h-full rounded-full bg-accent-gradient"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.04 }}
                      />
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
