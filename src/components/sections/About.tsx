import { BriefcaseBusiness, Brush, Code2, FileCode2, GraduationCap, Mail, MonitorSmartphone, Phone } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { education } from "@/data/education";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

const highlights = [
  {
    title: "Frontend Development",
    description: "Developing fast, responsive, scalable, and extensible web experiences with modern frontend technologies.",
    Icon: Code2,
  },
  {
    title: "Responsive Design",
    description: "Creating layouts that stay polished across mobile, tablet, and desktop screens.",
    Icon: MonitorSmartphone,
  },
  {
    title: "Clean Code",
    description: "Writing reusable components, clear structure, and maintainable frontend logic.",
    Icon: FileCode2,
  },
  {
    title: "Visual Design",
    description: "Designing user-friendly interfaces that combine aesthetics with functionality.",
    Icon: Brush,
  },
];

const profileDetails = [
  {
    label: "Email",
    value: "vaidehijain03@gmail.com",
    href: "mailto:vaidehijain03@gmail.com",
    Icon: Mail,
  },
  {
    label: "Phone",
    value: "8824633438",
    href: "tel:8824633438",
    Icon: Phone,
  },
  {
    label: "Experience",
    value: "1.5+ years",
    Icon: BriefcaseBusiness,
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Frontend craft with design fluency." description="I turn product workflows and visual systems into responsive, practical, and polished interfaces.">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <GlassCard className="gradient-border h-full">
            <div className="mb-6 inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Available for frontend roles and freelance work</div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              I&apos;m a Frontend Developer specializing in Next.js and React, with a passion for building responsive, high-performance, and user-centric web applications. I combine development skills with a working knowledge of Figma to bridge the gap between design and implementation, ensuring seamless user experiences. I enjoy solving real-world challenges through clean, maintainable code and continuously expanding my expertise in modern frontend technologies, Visual Design, and development best practices. I&apos;m always eager to learn, collaborate, and contribute to building digital products that are both functional and visually impactful.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {profileDetails.map(({ label, value, href, Icon }) => {
                const content = (
                  <div className="rounded-xl border border-slate-200 bg-white/70 p-3 transition hover:-translate-y-1 hover:border-primary/40 dark:border-white/10 dark:bg-white/10">
                    <Icon className="mb-3 text-primary" size={22} />
                    <p className="text-[0.68rem] font-semibold uppercase text-slate-500 dark:text-slate-400">{label}</p>
                    <p className="mt-1.5 whitespace-nowrap text-[0.72rem] font-semibold text-slate-950 dark:text-white sm:text-[0.65rem] md:text-xs lg:text-[0.65rem] xl:text-xs">{value}</p>
                  </div>
                );

                return href ? (
                  <a key={label} href={href} aria-label={`${label}: ${value}`}>
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </GlassCard>
        </Reveal>
        <div className="space-y-4">
          <Reveal>
            <GlassCard className="p-5">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Education</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-slate-950 dark:text-white">{education.degree}</h3>
                  <p className="mt-1 text-base text-slate-700 dark:text-slate-200">{education.field}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{education.institution}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">{education.period}</span>
                    <span className="rounded-full bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-500">
                      {education.scoreLabel}: {education.score}
                    </span>
                  </div>
                </div>
              </div>
            </GlassCard>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map(({ title, description, Icon }) => (
              <Reveal key={title}>
                <GlassCard className="group min-h-40 p-5">
                  <Icon className="mb-4 text-primary transition group-hover:scale-110" size={26} />
                  <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
