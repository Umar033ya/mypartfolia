"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { heroStats } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLanguage } from "@/context/LanguageContext";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const { t } = useLanguage();

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
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            variants={item}
            className="text-[2.6rem] sm:text-6xl lg:text-7xl font-semibold leading-[1.04] text-ink-primary text-balance"
          >
            {t("hero.title1")}
            <br />
            <span className="gradient-text">{t("hero.title2")}</span> {t("hero.title3")}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 measure text-lg text-ink-secondary leading-relaxed"
          >
            {t("hero.bio")}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="#projects" variant="primary">
              {t("hero.viewWork")}
              <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              <Sparkles size={16} />
              {t("hero.startProject")}
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border glass max-w-2xl"
        >
          {heroStats.map((stat, idx) => {
            const labelKey = idx === 0 ? "products" : idx === 1 ? "platforms" : "stack";
            return (
              <div key={idx} className="px-5 py-5 sm:px-8 sm:py-7">
                <div className="font-mono text-2xl sm:text-3xl font-semibold text-ink-primary">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-ink-tertiary">
                  {t(`hero.stats.${labelKey}`)}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
