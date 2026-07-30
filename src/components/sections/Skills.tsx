"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { Reveal } from "@/components/common/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = useState(skillCategories[0].title);
  const category = skillCategories.find((item) => item.title === active) || skillCategories[0];

  return (
    <Section id="skills" eyebrow="Skills" title="Modern frontend stack, grounded in UI decisions." description="Practical tools and technologies I use to design and build polished web experiences.">
      <div className="mb-6 flex flex-wrap gap-3">
        {skillCategories.map((item) => (
          <button key={item.title} onClick={() => setActive(item.title)} className={cn("rounded-full border px-5 py-3 text-sm font-semibold transition", active === item.title ? "border-primary bg-primary text-white" : "border-slate-200 bg-white/70 text-slate-700 hover:border-primary dark:border-white/10 dark:bg-white/10 dark:text-slate-200")}>
            {item.title}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {category.skills.map((skill) => (
          <Reveal key={skill.name}>
            <GlassCard className="min-h-20 p-4">
              <p className="font-display text-base font-semibold text-slate-950 dark:text-white">{skill.name}</p>
            </GlassCard>
          </Reveal>
        ))}
      </motion.div>
    </Section>
  );
}
