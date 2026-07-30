"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { useLanguage } from "@/context/LanguageContext";

const codeLines = [
  { text: "const developer = {", indent: 0, color: "text-ink-secondary" },
  { text: "name: 'Abdulla Yakubov',", indent: 1, color: "text-accent-teal" },
  { text: "age: 17,", indent: 1, color: "text-ink-primary" },
  { text: "role: 'React Native & Full Stack Developer',", indent: 1, color: "text-accent-blue" },
  { text: "platforms: ['iOS', 'Android', 'Web'],", indent: 1, color: "text-accent-violet" },
  { text: "believesIn: 'clean code & fluid user experiences',", indent: 1, color: "text-ink-secondary" },
  { text: "};", indent: 0, color: "text-ink-secondary" },
];

export function About() {
  const { t } = useLanguage();

  const tags: string[] = t("about.tags") || [];

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container-content grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20 items-center">
        <div>
          <SectionHeading
            eyebrow={t("about.eyebrow")}
            title={t("about.title")}
            description={t("about.description")}
          />

          <div className="mt-8 space-y-4 text-ink-secondary leading-relaxed">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            {Array.isArray(tags) && tags.map((tag) => (
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
