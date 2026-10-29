"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navKeys } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="container-content">
        <div
          className={`mt-4 flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass card-shadow" : "bg-transparent border border-transparent"
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-lg font-semibold text-ink-primary"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-gradient text-xs font-bold text-bg">
              AY
            </span>
            Abdulla
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navKeys.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink-secondary transition-colors hover:text-ink-primary"
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <MagneticButton href="/#contact" variant="secondary" className="px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm">
              {t("nav.letsTalk")}
            </MagneticButton>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-primary"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 rounded-2xl p-4 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navKeys.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-ink-secondary transition-colors hover:bg-surface-hover hover:text-ink-primary"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-ink-primary px-3 py-2.5 text-center text-sm font-medium text-bg"
              >
                {t("nav.letsTalk")}
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </div>
    </motion.header>
  );
}
