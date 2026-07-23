export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/", icon: "github" as const },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" as const },
  { label: "Email", href: "mailto:hello@umar.dev", icon: "mail" as const },
];

export const heroStats = [
  { value: "3", suffix: "", label: "Shipped products" },
  { value: "2", suffix: "", label: "Platforms — web & mobile" },
  { value: "12", suffix: "+", label: "Core technologies" },
];

export type SkillGroup = {
  category: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Interface",
    description: "Building interfaces that feel instant and considered.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    category: "Mobile",
    description: "Native-feeling mobile apps from a single codebase.",
    skills: ["React Native", "Expo"],
  },
  {
    category: "State & Data",
    description: "Predictable state, wherever the app runs.",
    skills: ["Zustand", "Redux Toolkit", "Firebase"],
  },
  {
    category: "Workflow",
    description: "Shipping and collaborating without friction.",
    skills: ["Git", "GitHub"],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  platform: string;
  tech: string[];
  gradient: [string, string];
  year: string;
  links: { demo?: string; repo?: string };
};

export const projects: Project[] = [
  {
    slug: "dropforge",
    name: "DropForge",
    tagline: "A forge for shipping drops without the busywork.",
    description:
      "A full-stack web platform built to streamline how products go from idea to release. Umar owned the architecture end to end — a typed Next.js frontend, a component system built for speed, and a data layer designed to stay predictable as features multiply.",
    role: "Full Stack Developer",
    platform: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    gradient: ["#4F8CFF", "#8B7CF6"],
    year: "2024",
    links: { demo: "#", repo: "#" },
  },
  {
    slug: "dachago",
    name: "Dachago.uz",
    tagline: "A modern marketplace experience, built for scale.",
    description:
      "A production web application focused on clean information architecture and fast, reliable performance under real traffic. Umar built the frontend system and integrated the state and data layers so the product stays fast as the catalog grows.",
    role: "Full Stack Developer",
    platform: "Web",
    tech: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS"],
    gradient: ["#2DD4BF", "#4F8CFF"],
    year: "2024",
    links: { demo: "#", repo: "#" },
  },
  {
    slug: "mental-arithmetic-trainer",
    name: "Mental Arithmetic Trainer",
    tagline: "Turning fast math into a daily habit.",
    description:
      "A cross-platform mobile app that trains mental arithmetic through short, focused daily sessions. Built with React Native and Expo for a native feel on iOS and Android from one codebase, with Zustand keeping session state fast and simple.",
    role: "React Native Developer",
    platform: "iOS & Android",
    tech: ["React Native", "Expo", "Zustand", "TypeScript"],
    gradient: ["#8B7CF6", "#2DD4BF"],
    year: "2023",
    links: { demo: "#", repo: "#" },
  },
];

export type ExperienceItem = {
  period: string;
  title: string;
  org: string;
  summary: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2024 — Present",
    title: "Full Stack JavaScript Developer",
    org: "Independent",
    summary:
      "Designing and building complete products end to end — from the database to the pixel — for web and mobile.",
    highlights: [
      "Shipped DropForge and Dachago.uz as production Next.js applications",
      "Standardized on TypeScript across every project for safer, faster iteration",
    ],
  },
  {
    period: "2023",
    title: "React Native Developer",
    org: "Independent",
    summary:
      "Took the Mental Arithmetic Trainer from concept to a published cross-platform mobile app.",
    highlights: [
      "Built and shipped with React Native and Expo for iOS and Android",
      "Used Zustand to keep app state lightweight and predictable",
    ],
  },
  {
    period: "2022 — 2023",
    title: "Frontend Developer",
    org: "Independent",
    summary:
      "Focused on the fundamentals — React, component architecture, and building UI that holds up under real use.",
    highlights: [
      "Deepened expertise in React, JavaScript and modern CSS with Tailwind",
      "Adopted Git and GitHub workflows for clean, collaborative shipping",
    ],
  },
];

export const stats = [
  { value: 3, suffix: "", label: "Products shipped", note: "web & mobile" },
  { value: 12, suffix: "+", label: "Technologies used in production", note: "and counting" },
  { value: 2, suffix: "", label: "Platforms covered", note: "iOS, Android, web" },
  { value: 100, suffix: "%", label: "TypeScript adoption", note: "on every new project" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// Sample testimonials — replace with real client or teammate feedback before shipping.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Umar took a vague product idea and turned it into something that felt finished from day one. The attention to detail on animation and state handling was way beyond what we asked for.",
    name: "Product Lead",
    role: "Early-stage startup",
  },
  {
    quote:
      "What stood out was how Umar thought about the whole system, not just the screen in front of him. The mobile app he built still feels fast a year later.",
    name: "Founder",
    role: "Consumer mobile app",
  },
  {
    quote:
      "Clean code, clear communication, and he shipped ahead of schedule. Dachago.uz has held up well under real traffic since launch.",
    name: "Engineering Manager",
    role: "E-commerce platform",
  },
];
