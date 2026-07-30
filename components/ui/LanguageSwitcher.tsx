"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check } from "lucide-react";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "uz", label: "O'zbek", flag: "🇺🇿" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 rounded-xl glass px-3 py-1.5 text-xs font-medium text-ink-secondary transition-all hover:bg-surface-hover hover:text-ink-primary border border-border"
        aria-label="Select Language"
      >
        <span className="text-sm">{currentLang.flag}</span>
        <span className="hidden sm:inline font-mono">{currentLang.label}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-36 rounded-2xl glass p-1.5 shadow-2xl z-50 border border-border"
          >
            <div className="flex flex-col gap-0.5">
              {languages.map((lang) => {
                const active = lang.code === language;
                return (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setOpen(false);
                    }}
                    className={`flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                      active
                        ? "bg-accent-teal/15 text-accent-teal font-semibold"
                        : "text-ink-secondary hover:bg-surface-hover hover:text-ink-primary"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </div>
                    {active && <Check size={14} className="text-accent-teal" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
