import type { ElementType } from "react";
import { FaFigma, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { SiBootstrap, SiCss, SiGit, SiJavascript, SiMui, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { marqueeTech } from "@/data/skills";

const icons: Record<string, ElementType> = {
  HTML5: FaHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: FaReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Material UI": SiMui,
  Bootstrap: SiBootstrap,
  Git: SiGit,
  GitHub: FaGithub,
  Figma: FaFigma,
  "VS Code": VscCode,
};

export function TechnologyMarquee() {
  const items = [...marqueeTech, ...marqueeTech];
  return (
    <div className="border-y border-slate-200/70 bg-white/50 py-5 backdrop-blur dark:border-white/10 dark:bg-white/[0.035]">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-4 hover:[animation-play-state:paused]">
          {items.map((tech, index) => {
            const Icon = icons[tech] || FaReact;
            return (
              <div key={`${tech}-${index}`} className="flex min-w-max items-center gap-3 rounded-full border border-white/10 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm dark:bg-white/10 dark:text-slate-100">
                <Icon className="text-primary" size={19} />
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
