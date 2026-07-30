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
      "Component-Based Development",
      "API Integration",
      "State Management",
      "Cross-Browser Compatibility",
    ].map((name, index) => ({ name, level: index < 8 ? "Proficient" : "Working Knowledge" })),
  },
  {
    title: "UI/UX and Design",
    skills: [
      "Figma",
      "Prototyping",
      "Responsive UI Design",
      "Adobe Photoshop",
      "Canva",
      "Spline",
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
