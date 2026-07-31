import type { SkillCategory } from "@/types/common";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Responsive Design",
      "API Integration",
    ].map((name, index) => ({ name, level: index < 8 ? "Proficient" : "Working Knowledge" })),
  },
  {
    title: "Visual Design",
    skills: [
      "Figma",
      "Prototyping",
      "Canva",
      "PowerPoint Presentation"
    ].map((name, index) => ({ name, level: index < 10 ? "Experienced" : "Working Knowledge" })),
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"].map((name) => ({
      name,
      level: "Proficient",
    })),
  },
];

export const marqueeTech = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Material UI",
  "Bootstrap",
  "Git",
  "GitHub",
  "Figma",
  "VS Code",
];
