"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { useLanguage } from "@/context/LanguageContext";
import { FileQuestion, Home } from "lucide-react";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="min-h-[80vh] flex items-center justify-center pt-32 pb-24">
        <div className="container-content text-center max-w-lg">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl glass border border-border text-accent-teal mb-6">
            <FileQuestion size={40} />
          </div>
          <h1 className="text-4xl font-semibold text-ink-primary mb-3">
            404 — {t("notFound.title")}
          </h1>
          <p className="text-ink-secondary mb-8 leading-relaxed">
            {t("notFound.description")}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink-primary px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-105"
          >
            <Home size={16} />
            {t("notFound.backHome")}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
