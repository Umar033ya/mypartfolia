import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/ui/AmbientBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdulla Yakubov",
  jobTitle: "React Native & Full Stack Developer",
  url: "https://umar.dev",
  sameAs: ["https://github.com/Umar033ya", "https://t.me/Gaming_Ghost_200lvl"],
  knowsAbout: [
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Expo",
    "Zustand",
    "Redux Toolkit",
    "Firebase",
    "Node.js",
    "SQLite",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <ScrollProgress />
      <AmbientBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
