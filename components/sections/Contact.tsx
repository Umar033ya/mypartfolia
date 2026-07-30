"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Mail, Send } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { socials } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = {
  send: Send,
  github: Github,
  mail: Mail,
};

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-border glass px-6 py-16 text-center sm:px-16 sm:py-24"
        >
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(79,140,255,0.14), transparent)",
            }}
          />

          <div className="relative">
            <p className="section-eyebrow mb-4">{t("contact.eyebrow")}</p>
            <h2 className="mx-auto max-w-2xl text-3xl sm:text-5xl font-semibold text-ink-primary leading-tight">
              {t("contact.title")}
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-ink-secondary leading-relaxed">
              {t("contact.description")}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href="mailto:umaryakubov033ppp@gmail.com" variant="primary">
                <Mail size={16} />
                {t("contact.button")}
                <ArrowUpRight size={16} />
              </MagneticButton>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {socials.map((s) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap] || Mail;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.icon !== "mail" ? "_blank" : undefined}
                    rel={s.icon !== "mail" ? "noreferrer" : undefined}
                    className="flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-ink-primary glass px-4 py-2 rounded-full border border-border hover:border-border-strong"
                  >
                    <Icon size={16} className="text-accent-teal" />
                    <span className="font-medium text-ink-primary">{s.label}:</span>
                    <span>{s.display}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
