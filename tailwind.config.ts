import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg-main)",
          elevated: "var(--bg-elevated)",
          panel: "var(--bg-panel)",
        },
        surface: {
          DEFAULT: "var(--surface-bg)",
          hover: "var(--surface-hover)",
        },
        border: {
          DEFAULT: "var(--border-color)",
          strong: "var(--border-strong)",
        },
        ink: {
          primary: "var(--ink-primary)",
          secondary: "var(--ink-secondary)",
          tertiary: "var(--ink-tertiary)",
        },
        accent: {
          blue: "#4F8CFF",
          teal: "#2DD4BF",
          violet: "#8B7CF6",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #4F8CFF 0%, #2DD4BF 100%)",
        "accent-gradient-soft": "linear-gradient(135deg, rgba(79,140,255,0.15) 0%, rgba(45,212,191,0.15) 100%)",
        "radial-fade": "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        marquee: "marquee 30s linear infinite",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      maxWidth: {
        content: "1160px",
      },
    },
  },
  plugins: [],
};
export default config;
