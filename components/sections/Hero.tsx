"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { heroStats } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="container-content">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-ink-secondary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-teal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-teal" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-ink-primary"
          >
            Full Stack
            <br />
            <span className="gradient-text">JavaScript</span> Developer.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-ink-secondary leading-relaxed"
          >
            I&apos;m Umar — I design and build products end to end, from
            typed, well-architected backends to interfaces on web, iOS and
            Android that feel fast and considered.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="#projects" variant="primary">
              View my work
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              <Sparkles size={16} />
              Start a project
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border glass max-w-2xl"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="px-5 py-5 sm:px-8 sm:py-7">
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-ink-primary">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-ink-tertiary">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
