import type { NavItem } from "@/types/common";

export const navigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "#" },
  { label: "GitHub", href: process.env.NEXT_PUBLIC_GITHUB_URL || "#" },
  { label: "Email", href: "mailto:vaidehijain03@gmail.com" },
  { label: "Portfolio", href: process.env.NEXT_PUBLIC_PORTFOLIO_URL || "#" },
];
