"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-content">
        <div className="rounded-3xl border border-border glass overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-border lg:divide-y-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="px-6 py-10 sm:px-8 sm:py-12"
              >
                <div className="font-mono text-4xl sm:text-5xl font-semibold gradient-text">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-sm font-medium text-ink-primary">{stat.label}</div>
                <div className="mt-0.5 text-xs text-ink-tertiary">{stat.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
