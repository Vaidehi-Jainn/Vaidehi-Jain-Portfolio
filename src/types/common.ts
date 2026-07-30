export type NavItem = {
  label: string;
  href: string;
};

export type SkillCategory = {
  title: string;
  skills: {
    name: string;
    level: "Experienced" | "Proficient" | "Working Knowledge" | "Currently Learning";
  }[];
};
