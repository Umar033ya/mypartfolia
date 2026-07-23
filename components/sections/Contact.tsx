"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { socials } from "@/lib/data";

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail };

export function Contact() {
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
            <p className="section-eyebrow mb-4">Get in touch</p>
            <h2 className="mx-auto max-w-2xl text-3xl sm:text-5xl font-semibold text-ink-primary leading-tight">
              Have a product to build?
              <br />
              Let&apos;s make it real.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-ink-secondary leading-relaxed">
              Whether it&apos;s a web platform or a mobile app, I&apos;m
              happy to talk through the idea and how it could come together.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton href="mailto:hello@umar.dev" variant="primary">
                <Mail size={16} />
                hello@umar.dev
                <ArrowUpRight size={16} />
              </MagneticButton>
            </div>

            <div className="mt-10 flex items-center justify-center gap-6">
              {socials.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.icon !== "mail" ? "_blank" : undefined}
                    rel={s.icon !== "mail" ? "noreferrer" : undefined}
                    className="flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-ink-primary"
                  >
                    <Icon size={16} />
                    {s.label}
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
