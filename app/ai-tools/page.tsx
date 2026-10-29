"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { aiTools } from "@/lib/data";
import { Zap } from "lucide-react";
import { AIToolsList } from "./AIToolsList";
import { useLanguage } from "@/context/LanguageContext";

export default function AIToolsPage() {
  const { t } = useLanguage();

  return (
    <>
      <ScrollProgress />
      <AmbientBackground />
      <Header />
      <main className="pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="container-content">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-ink-secondary border border-border">
              <Zap size={14} className="text-accent-teal" />
              <span>{t("aiTools.badge")}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold leading-[1.08] text-ink-primary">
              {t("aiTools.title1")} <br />
              <span className="gradient-text">{t("aiTools.title2")}</span>
            </h1>

            <p className="mt-6 text-lg text-ink-secondary leading-relaxed">
              {t("aiTools.description")}
            </p>
          </div>

          <AIToolsList tools={aiTools} />
        </div>
      </main>
      <Footer />
    </>
  );
}
