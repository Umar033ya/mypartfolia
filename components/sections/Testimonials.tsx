"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading
          eyebrow="Feedback"
          title="What it's like to work together."
          align="center"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="p-7 h-full flex flex-col">
                <Quote className="text-accent-teal" size={22} />
                <p className="mt-4 flex-1 text-ink-secondary leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-gradient-soft font-mono text-sm text-ink-primary">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-ink-primary">{t.name}</div>
                    <div className="text-xs text-ink-tertiary">{t.role}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
