"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container-content">
        <SectionHeading
          eyebrow={t("projects.eyebrow")}
          title={t("projects.title")}
          description={t("projects.description")}
        />

        <div className="mt-14 space-y-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-border glass-hover transition-colors"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <div
                  className="relative flex min-h-[220px] items-center justify-center overflow-hidden p-8 lg:min-h-[280px]"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradient[0]}22, ${project.gradient[1]}22)`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-40 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08) 0, transparent 40%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.06) 0, transparent 40%)",
                    }}
                  />
                  <div className="relative flex flex-col items-center gap-3 text-center">
                    <span
                      className="font-mono text-6xl font-semibold opacity-90"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      {project.name.slice(0, 2).toUpperCase()}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-tertiary">
                      {project.platform}
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-9 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs font-mono text-ink-tertiary">
                    <span>{project.year}</span>
                    <span className="h-1 w-1 rounded-full bg-ink-tertiary" />
                    <span>{project.role}</span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-ink-primary">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-accent-teal text-sm">{project.tagline}</p>
                  <p className="mt-4 text-ink-secondary leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="rounded-full border border-border px-3 py-1 text-xs text-ink-secondary"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-5">
                    {project.links.demo ? (
                      <a
                        href={project.links.demo}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-primary transition-colors hover:text-accent-blue"
                      >
                        {t("projects.viewProject")} <ArrowUpRight size={15} />
                      </a>
                    ) : null}
                    {project.links.repo ? (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-ink-secondary transition-colors hover:text-ink-primary"
                      >
                        <Github size={15} /> {t("projects.sourceCode")}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
