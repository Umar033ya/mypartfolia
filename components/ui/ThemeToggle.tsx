"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-8 w-8 rounded-xl glass border border-border flex items-center justify-center text-ink-secondary opacity-50" />
    );
  }

  const isDark = theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      className="flex h-8 w-8 items-center justify-center rounded-xl glass border border-border text-ink-secondary transition-all hover:bg-surface-hover hover:text-ink-primary"
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: [0.8, 1] }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDark ? (
          <Moon size={16} className="text-accent-blue" />
        ) : (
          <Sun size={16} className="text-amber-400" />
        )}
      </motion.div>
    </motion.button>
  );
}
