import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

const highlights = [
  "3+ Major Projects",
  "Enterprise and Freelance Experience",
  "Web and Mobile Interfaces",
  "Responsive-First Development",
  "Design-to-Code Expertise",
];

export function HighlightsTestimonials() {
  return (
    <Section eyebrow="Highlights" title="Experience signals without inflated claims.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {highlights.map((item) => (
          <GlassCard key={item} className="text-center">
            <p className="font-display text-xl font-semibold text-slate-950 dark:text-white">{item}</p>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
}
