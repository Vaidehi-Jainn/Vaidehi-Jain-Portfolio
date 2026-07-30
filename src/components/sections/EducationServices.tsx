import { Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

export function EducationServices() {
  return (
    <>
      <Section eyebrow="Services" title="Ways I can contribute." description="Built for frontend roles, freelance projects, and design-to-code collaboration.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <GlassCard key={service.title} className="group min-h-48">
              <Sparkles className="mb-5 text-accent transition group-hover:rotate-12" />
              <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  );
}
