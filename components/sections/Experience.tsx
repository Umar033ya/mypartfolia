"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading
          eyebrow="Journey"
          title="How the toolkit came together."
          description="Each stage added a platform or a discipline — the throughline is always shipping real, working products."
        />

        <div className="mt-16 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]" />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <motion.div
                key={item.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 sm:pl-10"
              >
                <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent-blue bg-bg sm:h-[19px] sm:w-[19px]">
                  <span className="absolute inset-[3px] rounded-full bg-accent-gradient" />
                </span>

                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent-teal">
                    {item.period}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-ink-primary">
                    {item.title}
                  </h3>
                  <span className="text-sm text-ink-tertiary">{item.org}</span>
                </div>

                <p className="mt-3 max-w-2xl text-ink-secondary leading-relaxed">
                  {item.summary}
                </p>

                <ul className="mt-3 space-y-1.5">
                  {item.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-ink-secondary">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-tertiary" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
