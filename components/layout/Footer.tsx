import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { socials } from "@/lib/data";

const iconMap = { github: Github, linkedin: Linkedin, mail: Mail };

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-content py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display text-base font-semibold text-ink-primary">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-gradient text-xs font-bold text-bg">
            U
          </span>
          Umar
          <span className="ml-2 font-mono text-xs font-normal text-ink-tertiary">
            © {year}
          </span>
        </div>

        <div className="flex items-center gap-5">
          {socials.map((s) => {
            const Icon = iconMap[s.icon];
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
          Back to top
          <span className="flex h-8 w-8 items-center justify-center rounded-full glass glass-hover">
            <ArrowUp size={14} />
          </span>
        </a>
      </div>
    </footer>
  );
}
