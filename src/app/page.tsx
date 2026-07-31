import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { ResumeContact } from "@/components/sections/Contact";
import { Skills } from "@/components/sections/Skills";
import { TechnologyMarquee } from "@/components/sections/TechnologyMarquee";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechnologyMarquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <ResumeContact />
    </main>
  );
}
