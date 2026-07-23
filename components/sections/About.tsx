"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const codeLines = [
  { text: "const developer = {", indent: 0, color: "text-ink-secondary" },
  { text: "name: 'Umar',", indent: 1, color: "text-accent-teal" },
  { text: "role: 'Full Stack JS Developer',", indent: 1, color: "text-accent-blue" },
  { text: "platforms: ['web', 'iOS', 'android'],", indent: 1, color: "text-accent-violet" },
  { text: "believesIn: 'shipping well-typed code',", indent: 1, color: "text-ink-secondary" },
  { text: "};", indent: 0, color: "text-ink-secondary" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-content grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20 items-center">
        <div>
          <SectionHeading
            eyebrow="About"
            title="I build the whole product, not just the screen."
            description="Umar is a full stack JavaScript developer who works comfortably across the entire stack — from data modeling and state management to the pixel-level detail of an interface. The same care goes into a web dashboard as into a mobile app used every day."
          />

          <div className="mt-8 space-y-4 text-ink-secondary leading-relaxed">
            <p>
              That range shows up in the work: <strong className="text-ink-primary font-medium">DropForge</strong> and{" "}
              <strong className="text-ink-primary font-medium">Dachago.uz</strong> are production web
              platforms built with Next.js and TypeScript, while the{" "}
              <strong className="text-ink-primary font-medium">Mental Arithmetic Trainer</strong> is a
              React Native app shipped to iOS and Android from a single codebase.
            </p>
            <p>
              Umar favors TypeScript everywhere, keeps state predictable with
              Zustand and Redux Toolkit, and treats Git history as
              documentation — every project is built to be handed off, not
              just handed over.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {["Web", "iOS", "Android", "TypeScript-first"].map((tag) => (
              <span
                key={tag}
                className="rounded-full glass px-4 py-1.5 text-xs font-mono text-ink-secondary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: -1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <GlassCard hover={false} className="p-6 sm:p-8 relative overflow-hidden">
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-20 blur-[80px]"
              style={{ background: "radial-gradient(circle, #4F8CFF, transparent 70%)" }}
            />
            <div className="flex items-center gap-1.5 mb-6">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="font-mono text-sm sm:text-base leading-8">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className={line.color}
                  style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                >
                  {line.text}
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
