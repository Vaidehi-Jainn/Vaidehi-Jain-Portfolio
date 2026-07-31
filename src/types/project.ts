export type ProjectStatus = "Live and Ongoing";

export type Project = {
  slug: string;
  title: string;
  label?: string;
  role: string;
  status: ProjectStatus;
  cardSummary: string;
  features: string[];
  technologies: string[];
  liveUrl: string;
  accent: string;
};
