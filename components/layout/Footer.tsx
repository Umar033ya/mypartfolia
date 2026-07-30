"use client";

import { Github, Mail, Send, ArrowUp } from "lucide-react";
import { socials } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = { send: Send, github: Github, mail: Mail };

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border">
      <div className="container-content py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display text-base font-semibold text-ink-primary">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-gradient text-xs font-bold text-bg">
            AY
          </span>
          Abdulla Yakubov
          <span className="ml-2 font-mono text-xs font-normal text-ink-tertiary">
            © {year} • {t("footer.copyright")}
          </span>
        </div>

        <div className="flex items-center gap-5">
          {socials.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap] || Mail;
            return (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target={s.icon !== "mail" ? "_blank" : undefined}
                rel={s.icon !== "mail" ? "noreferrer" : undefined}
                className="text-ink-secondary transition-colors hover:text-ink-primary"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <a
          href="#top"
          className="flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-ink-primary"
        >
          {t("footer.backToTop")}
          <span className="flex h-8 w-8 items-center justify-center rounded-full glass glass-hover">
            <ArrowUp size={14} />
          </span>
        </a>
      </div>
    </footer>
  );
}
