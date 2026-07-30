import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("relative py-20 sm:py-24", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {title ? (
          <div className="mb-10 max-w-3xl">
            {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p> : null}
            <h2 className="font-display text-3xl font-semibold text-slate-950 dark:text-white sm:text-5xl">{title}</h2>
            {description ? <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{description}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
