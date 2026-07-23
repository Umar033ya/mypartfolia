# Umar — Portfolio

A premium, animated personal portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion and Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections + Person JSON-LD
  globals.css         Design tokens, base styles
  sitemap.ts / robots.ts

components/
  layout/            Header, Footer
  sections/          Hero, About, Skills, Projects, Experience,
                      Stats, Testimonials, Contact
  ui/                 Reusable primitives: GlassCard, MagneticButton,
                      SectionHeading, AnimatedCounter, AmbientBackground

lib/
  data.ts             All site content (nav, skills, projects, experience,
                      stats, testimonials, socials) — edit here first
  utils.ts            cn() class helper
```

## Before you ship

- **Replace placeholder links.** Project `demo`/`repo` links and social URLs
  in `lib/data.ts` currently point to `#` or generic domains — swap in your
  real GitHub, LinkedIn and live project URLs.
- **Testimonials are sample copy.** `lib/data.ts` → `testimonials` is
  illustrative content written for this template. Replace with real quotes
  from clients or collaborators before publishing.
- **Metadata URL.** `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts`
  use `https://umar.dev` as a placeholder domain — update to your real one.
- **Open Graph image.** Add a real `public/og-image.png` (1200×630) and a
  `public/favicon.ico`.
- **Contact email.** `hello@umar.dev` appears in `lib/data.ts` and
  `components/sections/Contact.tsx` — update to your real address.

## Design notes

- Dark, glass-panel aesthetic with a blue → teal accent gradient.
- Type system: Space Grotesk (display), Inter (body), JetBrains Mono
  (data, stats, code — a nod to the precision of the Mental Arithmetic
  Trainer project).
- Signature background: a fine dot grid with a cursor-following glow,
  respecting `prefers-reduced-motion`.
- All scroll animations use Framer Motion's `whileInView` with `once: true`
  so they don't replay on every scroll.
