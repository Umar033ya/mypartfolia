"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
            scrolled ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.35)]" : "bg-transparent border border-transparent"
          }`}
        >
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-lg font-semibold text-ink-primary"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-gradient text-sm font-bold text-bg">
              U
            </span>
            Umar
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-ink-secondary transition-colors hover:text-ink-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton href="#contact" variant="secondary" className="px-5 py-2.5 text-sm">
              Let&apos;s talk
            </MagneticButton>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg text-ink-primary"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 rounded-2xl p-4 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-ink-secondary transition-colors hover:bg-surface-hover hover:text-ink-primary"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-ink-primary px-3 py-2.5 text-center text-sm font-medium text-bg"
              >
                Let&apos;s talk
              </a>
            </nav>
          </motion.div>
        ) : null}
      </div>
    </motion.header>
  );
}
