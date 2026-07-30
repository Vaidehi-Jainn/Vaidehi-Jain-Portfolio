export type ProjectStatus = "Live Project" | "Live and Ongoing" | "Ongoing";

export type Project = {
  slug: string;
  title: string;
  label?: string;
  type: string;
  role: string;
  status: ProjectStatus;
  duration: string;
  team: string;
  summary: string;
  cardSummary: string;
  problem: string;
  responsibilities: string[];
  features: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  accent: string;
  banner: string;
  caseStudy: {
    overview: string;
    requirements: string[];
    users: string[];
    informationArchitecture: string[];
    designProcess: string[];
    frontendProcess: string[];
    responsiveStrategy: string[];
    screens: string[];
    challenges: string[];
    solutions: string[];
    results: string[];
    learnings: string[];
  };
};
