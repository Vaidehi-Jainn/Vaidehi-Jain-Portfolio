import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";
import { GlassCard } from "@/components/ui/GlassCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.cardSummary,
    openGraph: {
      title: `${project.title} Case Study`,
      description: project.cardSummary,
    },
  };
}

export default async function ProjectCaseStudy({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const toc = ["Overview", "Problem", "Process", "Screens", "Challenges", "Results"];

  return (
    <main className="min-h-screen pt-32">
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-primary dark:text-slate-300"><ArrowLeft size={16} /> Back to projects</Link>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950 text-white shadow-card">
          <div className="relative p-8 sm:p-12" style={{ background: `radial-gradient(circle at 20% 0%, ${project.accent}66, transparent 34%), linear-gradient(135deg, #020617, #111827)` }}>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">{project.type}</p>
            <h1 className="mt-5 font-display text-4xl font-semibold sm:text-6xl">{project.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{project.summary}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Role", project.role],
                ["Status", project.status],
                ["Duration", project.duration],
                ["Team", project.team],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-100">{label}</p>
                  <p className="mt-2 text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-24 sm:px-6 lg:grid-cols-[16rem_1fr] lg:px-8">
        <aside className="hidden lg:block">
          <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur dark:border-white/10 dark:bg-white/10">
            <p className="mb-4 text-sm font-semibold text-slate-950 dark:text-white">Case Study</p>
            <nav className="grid gap-3">
              {toc.map((item) => <a key={item} className="text-sm text-slate-600 hover:text-primary dark:text-slate-300" href={`#${item.toLowerCase()}`}>{item}</a>)}
            </nav>
          </div>
        </aside>
        <div className="grid gap-6">
          <CaseBlock id="overview" title="Project overview" body={project.caseStudy.overview} />
          <CaseBlock id="problem" title="Business problem" body={project.problem} items={project.caseStudy.requirements} />
          <CaseBlock id="process" title="Design and frontend approach" body="The work connected workflow understanding, interface design, and reusable frontend implementation." items={[...project.caseStudy.designProcess, ...project.caseStudy.frontendProcess]} />
          <CaseBlock title="Technology stack" items={project.technologies} />
          <CaseBlock id="screens" title="Key screens and flows" body={project.banner} items={project.caseStudy.screens} />
          <div className="grid gap-6 md:grid-cols-2" id="challenges">
            <CaseBlock title="Challenges" items={project.caseStudy.challenges} />
            <CaseBlock title="Solutions" items={project.caseStudy.solutions} />
          </div>
          <CaseBlock id="results" title="Results and learnings" items={[...project.caseStudy.results, ...project.caseStudy.learnings]} />
          <GlassCard className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Next project</p>
              <p className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{nextProject.title}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href={project.liveUrl} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold dark:border-white/10"><ExternalLink size={16} /> Live</Link>
              <Link href={project.githubUrl} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold dark:border-white/10"><Github size={16} /> GitHub</Link>
              <Link href={`/projects/${nextProject.slug}`} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">Next <ArrowRight size={16} /></Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </main>
  );
}

function CaseBlock({ id, title, body, items }: { id?: string; title: string; body?: string; items?: string[] }) {
  return (
    <GlassCard id={id}>
      <h2 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">{title}</h2>
      {body ? <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{body}</p> : null}
      {items ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {items.map((item) => <span key={item} className="rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300">{item}</span>)}
        </div>
      ) : null}
    </GlassCard>
  );
}
