export const navKeys = [
  { key: "about", href: "/#about" },
  { key: "skills", href: "/#skills" },
  { key: "work", href: "/#projects" },
  { key: "aiTools", href: "/ai-tools" },
  { key: "journey", href: "/#experience" },
  { key: "contact", href: "/#contact" },
];

export const socials = [
  { label: "Telegram", display: "@Gaming_Ghost_200lvl", href: "https://t.me/Gaming_Ghost_200lvl", icon: "send" as const },
  { label: "GitHub", display: "Umar033ya", href: "https://github.com/Umar033ya/", icon: "github" as const },
  { label: "Email", display: "umaryakubov033ppp@gmail.com", href: "mailto:umaryakubov033ppp@gmail.com", icon: "mail" as const },
];

export const heroStats = [
  { value: "3", suffix: "", label: "Shipped products" },
  { value: "2", suffix: "", label: "Platforms — web & mobile" },
  { value: "12", suffix: "+", label: "Skills & modern stack" },
];

export type SkillItem = {
  name: string;
  category: "Mobile" | "Frontend" | "Backend" | "Database" | "Language" | "Styling" | "Tooling";
  iconName: string;
  description: string;
  color: string;
};

export const skillsList: SkillItem[] = [
  {
    name: "React Native",
    category: "Mobile",
    iconName: "Smartphone",
    description: "Building native cross-platform mobile apps for iOS and Android.",
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    category: "Language",
    iconName: "Code2",
    description: "Writing strongly-typed, scalable, and maintainable software.",
    color: "#3178C6",
  },
  {
    name: "Next.js",
    category: "Frontend",
    iconName: "Globe",
    description: "Full-stack React framework with SSR, SSG, and App Router.",
    color: "#FFFFFF",
  },
  {
    name: "Node.js",
    category: "Backend",
    iconName: "Server",
    description: "Server-side JavaScript runtime for REST APIs, auth flows, and real-time services.",
    color: "#5FA04E",
  },
  {
    name: "SQLite",
    category: "Database",
    iconName: "Database",
    description: "Lightweight embedded SQL database for local-first web and mobile storage.",
    color: "#38BDF8",
  },
  {
    name: "React",
    category: "Frontend",
    iconName: "Atom",
    description: "Creating interactive dynamic user interfaces and component systems.",
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    category: "Language",
    iconName: "FileCode",
    description: "Core logic scripting with modern ES6+ features.",
    color: "#F7DF1E",
  },
  {
    name: "HTML",
    category: "Frontend",
    iconName: "Layout",
    description: "Semantic web structuring and SEO-friendly document layouts.",
    color: "#E34F26",
  },
  {
    name: "CSS",
    category: "Styling",
    iconName: "Palette",
    description: "Responsive layouts, flexbox, grid, and fluid CSS animations.",
    color: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    iconName: "Wind",
    description: "Utility-first CSS framework for rapid and elegant styling.",
    color: "#06B6D4",
  },
  {
    name: "Git",
    category: "Tooling",
    iconName: "GitBranch",
    description: "Distributed version control system and branch management.",
    color: "#F05032",
  },
  {
    name: "GitHub",
    category: "Tooling",
    iconName: "Github",
    description: "Collaborative code hosting, CI/CD workflows, and code review.",
    color: "#FFFFFF",
  },
];

export type AITool = {
  id: string;
  name: string;
  shortDescription: string;
  myUsage: string;
  gradient: [string, string];
  iconName: string;
  badge: string;
};

export const aiTools: AITool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    shortDescription: "Programming, debugging, architecture, learning, and project planning.",
    myUsage: "I leverage ChatGPT for quick algorithmic problem solving, drafting architecture outlines, debugging stack trace errors, and learning new library paradigms swiftly.",
    gradient: ["#10A37F", "#1A7F64"],
    iconName: "Bot",
    badge: "AI Assistant",
  },
  {
    id: "claude",
    name: "Claude",
    shortDescription: "Large codebase analysis and software architecture.",
    myUsage: "Claude helps me synthesize deep contextual understanding across multi-file repositories, refactor complex domain models, and design robust software architectures.",
    gradient: ["#D97706", "#B45309"],
    iconName: "BrainCircuit",
    badge: "Architecture & Analysis",
  },
  {
    id: "cursor",
    name: "Cursor",
    shortDescription: "AI-powered coding editor for faster development.",
    myUsage: "Cursor acts as an extended brain in my daily workflow—speeding up boilerplate creation, executing inline edits, and accelerating full-stack feature development.",
    gradient: ["#3B82F6", "#1D4ED8"],
    iconName: "Terminal",
    badge: "AI Editor",
  },
  {
    id: "devin",
    name: "Devin",
    shortDescription: "Feature implementation, bug fixing, UI improvements.",
    myUsage: "I use Devin for end-to-end autonomous feature execution, rapid bug triage, and automating UI Polish tasks across complex modules.",
    gradient: ["#8B5CF6", "#6D28D9"],
    iconName: "Cpu",
    badge: "Autonomous Engineer",
  },
  {
    id: "gemini",
    name: "Gemini",
    shortDescription: "Research, brainstorming, and alternative solutions.",
    myUsage: "Gemini is my go-to for multi-modal analysis, researching cutting-edge web specs, and exploring creative technical alternatives for complex problems.",
    gradient: ["#EC4899", "#8B5CF6"],
    iconName: "Sparkles",
    badge: "Research & Innovation",
  },
  {
    id: "anti-gravity",
    name: "Anti Gravity",
    shortDescription: "UI generation, design inspiration, rapid prototyping.",
    myUsage: "Anti Gravity drives my workflow for high-fidelity UI component generation, visual concept exploration, and building rapid interactive prototypes.",
    gradient: ["#06B6D4", "#3B82F6"],
    iconName: "Layers",
    badge: "UI & Prototyping",
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
      "A full-stack web platform built to streamline how products go from idea to release. Abdulla owned the architecture end to end — a typed Next.js frontend, a component system built for speed, and a data layer designed to stay predictable as features multiply.",
    role: "Full Stack Developer",
    platform: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    gradient: ["#4F8CFF", "#8B7CF6"],
    year: "2024",
    links: { demo: "#", repo: "https://github.com/Umar033ya/" },
  },
  {
    slug: "dachago",
    name: "Dachago.uz",
    tagline: "A modern marketplace experience, built for scale.",
    description:
      "A production web application focused on clean information architecture and fast, reliable performance under real traffic. Abdulla built the frontend system and integrated the state and data layers so the product stays fast as the catalog grows.",
    role: "Full Stack Developer",
    platform: "Web",
    tech: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS"],
    gradient: ["#2DD4BF", "#4F8CFF"],
    year: "2024",
    links: { demo: "#", repo: "https://github.com/Umar033ya/" },
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
    links: { demo: "#", repo: "https://github.com/Umar033ya/" },
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
    title: "Full Stack & React Native Developer",
    org: "Independent",
    summary:
      "Designing and building complete products end to end — from typed backend schemas to pixel-perfect mobile and web interfaces.",
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
  { value: 12, suffix: "+", label: "Core technologies mastered", note: "mobile, web & backend" },
  { value: 2, suffix: "", label: "Platforms covered", note: "iOS, Android, web" },
  { value: 100, suffix: "%", label: "TypeScript adoption", note: "on every project" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Abdulla took a vague product idea and turned it into something that felt finished from day one. The attention to detail on animation and state handling was way beyond what we asked for.",
    name: "Product Lead",
    role: "Early-stage startup",
  },
  {
    quote:
      "What stood out was how Abdulla thought about the whole system, not just the screen in front of him. The React Native app he built still feels native and ultra-responsive.",
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

