"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading
          eyebrow="Toolkit"
          title="A stack chosen for speed and reliability."
          description="Every tool here earns its place because it's shipped in a real product — not a résumé line."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: groupIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="p-6 sm:p-7 h-full">
                <div className="flex items-start justify-between">
                  <h3 className="font-display text-lg font-semibold text-ink-primary">
                    {group.category}
                  </h3>
                  <span className="font-mono text-xs text-ink-tertiary">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink-secondary">{group.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-bg-elevated/60 px-3 py-1.5 text-sm text-ink-primary transition-colors hover:border-border-strong"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
