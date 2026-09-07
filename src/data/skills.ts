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
      "Canva",
      "PowerPoint Presentation"
    ].map((name, index) => ({ name, level: index < 10 ? "Experienced" : "Working Knowledge" })),
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"].map((name) => ({
      name,
      level: "Working Knowledge",
    })),
  },
  {
    title: "DevOps & Workflow",
    skills: ["Git", "GitHub", "GitHub Actions", "CI/CD", "Agile/Scrum", "VS Code", "Postman"].map((name) => ({
      name,
      level: name === "Git" || name === "GitHub" ? "Proficient" : "Working Knowledge",
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
  "GitHub Actions",
  "CI/CD",
  "Agile/Scrum",
  "MySQL",
  "MongoDB",
  "Figma",
  "VS Code",
];
