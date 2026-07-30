import Link from "next/link";
import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import { projects } from "@/data/projects";
import { Reveal } from "@/components/common/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Enterprise, e-commerce, and marketplace interfaces." description="A frontend-focused view of practical work, with UI/UX context where it shaped the implementation.">
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.slug}>
            <GlassCard className="group overflow-hidden p-0">
              <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-72 overflow-hidden bg-slate-950 p-6 text-white">
                  <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(circle at 30% 20%, ${project.accent}55, transparent 35%), linear-gradient(135deg, #0f172a, #020617)` }} />
                  <div className="relative z-10">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">0{index + 1} / {project.type}</p>
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                      <div className="mb-4 flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-green-400" /></div>
                      <div className="grid gap-3">
                        {project.features.slice(0, 5).map((feature) => <div key={feature} className="rounded-lg bg-white/10 px-3 py-2 text-sm">{feature}</div>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{project.status}</span>
                    {project.label ? <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-500">{project.label}</span> : null}
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">{project.role}</p>
                  <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">{project.cardSummary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 8).map((tech) => <span key={tech} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-white/10 dark:text-slate-300">{tech}</span>)}
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 dark:bg-white dark:text-slate-950"><Layers3 size={16} /> Case Study</Link>
                    <Link href={project.liveUrl} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:text-slate-200"><ArrowUpRight size={16} /> Live Link</Link>
                    <Link href={project.githubUrl} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:text-slate-200"><Github size={16} /> GitHub</Link>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
