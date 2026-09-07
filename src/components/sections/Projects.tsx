import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/ui/Section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Enterprise, e-commerce, and marketplace interfaces." description="Projects that show how I turn requirements and designs into responsive, usable web experiences.">
      <div className="grid gap-5">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.08}>
            <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-card backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow dark:border-white/10 dark:bg-white/[0.055]">
              <div className={`grid ${index === 1 ? "lg:grid-cols-[0.68fr_0.32fr]" : "lg:grid-cols-[0.32fr_0.68fr]"}`}>
                <div className={`relative min-h-48 overflow-hidden p-6 text-white transition-transform duration-700 ease-out group-hover:scale-[1.015] lg:min-h-full ${index === 1 ? "lg:order-2" : ""}`} style={{ background: `linear-gradient(145deg, ${project.accent}, #0f172a 78%)` }}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_20%,rgba(255,255,255,0.24),transparent_32%)]" />
                  <div className="absolute inset-0 noise opacity-20" />
                  <div className="relative z-10 flex h-full flex-col justify-between gap-10">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">Project 0{index + 1}</p>
                      <h3 className="mt-4 font-display text-4xl font-semibold leading-tight">{project.title}</h3>
                    </div>
                  </div>
                </div>

                <div className={`p-6 sm:p-7 ${index === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{project.status}</span>
                    {project.label ? <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-500">{project.label}</span> : null}
                  </div>

                  <p className="mt-5 text-sm font-semibold text-slate-500 dark:text-slate-400">{project.role}</p>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-700 dark:text-slate-300">{project.cardSummary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => <span key={tech} className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">{tech}</span>)}
                  </div>

                  <div className={`mt-6 flex items-center justify-between gap-4 ${index === 1 ? "sm:flex-row-reverse" : ""}`}>
                    <div className="hidden h-px flex-1 bg-slate-200 dark:bg-white/10 sm:block" />
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"><ArrowUpRight size={16} /> View Project</Link>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
