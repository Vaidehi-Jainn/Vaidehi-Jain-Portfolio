"use client";

import { FormEvent, useState } from "react";
import { Download, Mail, MapPin, Send } from "lucide-react";
import { validateContactForm, type ContactFormState } from "@/lib/validations";
import { sendContactMessage } from "@/services/contactService";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Section } from "@/components/ui/Section";

const initialState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  projectType: "",
  message: "",
};

const projectTypes = [
  "Frontend Development",
  "React Development",
  "Next.js Development",
  "Freelance Project",
  "UI Implementation",
  "UI/UX Design",
  "Job Opportunity",
  "Collaboration",
];

export function ResumeContact() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const update = (field: keyof ContactFormState, value: string) => setValues((current) => ({ ...current, [field]: value }));

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    await sendContactMessage(values);
    setStatus("success");
    setValues(initialState);
  };

  return (
    <>
      <Section eyebrow="Resume" title="Interested in my experience and technical background?">
        <GlassCard className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <p className="max-w-2xl text-slate-600 dark:text-slate-300">View or download the resume placeholder. Replace the PDF in public/resume when the final resume is ready.</p>
          <div className="flex flex-wrap gap-3">
            <MagneticButton href="/resume/Vaidehi-Jain-Resume.pdf" variant="ghost">View Resume</MagneticButton>
            <MagneticButton href="/resume/Vaidehi-Jain-Resume.pdf"><Download size={16} /> Download Resume</MagneticButton>
            <MagneticButton href="#contact" variant="ghost">Contact Me</MagneticButton>
          </div>
        </GlassCard>
      </Section>
      <Section id="contact" eyebrow="Contact" title="Let's build something meaningful." description="I'm open to frontend development opportunities, freelance projects, collaborative work, and roles where development and thoughtful design come together.">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <GlassCard>
            <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">Vaidehi Jain</h3>
            <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
              <p className="flex items-center gap-3"><Mail className="text-primary" size={18} /> <a href="mailto:vaidehijain03@gmail.com">vaidehijain03@gmail.com</a></p>
              <p className="flex items-center gap-3"><MapPin className="text-primary" size={18} /> Jaipur, Rajasthan, India</p>
            </div>
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-4 text-sm text-slate-500 dark:border-white/15 dark:text-slate-400">
              LinkedIn, GitHub, and portfolio URLs are currently placeholders in environment variables.
            </div>
          </GlassCard>
          <GlassCard>
            <form onSubmit={submit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" error={errors.name}><input value={values.name} onChange={(e) => update("name", e.target.value)} className="input" placeholder="Your name" /></Field>
                <Field label="Email" error={errors.email}><input value={values.email} onChange={(e) => update("email", e.target.value)} className="input" placeholder="you@example.com" /></Field>
              </div>
              <Field label="Subject" error={errors.subject}><input value={values.subject} onChange={(e) => update("subject", e.target.value)} className="input" placeholder="Opportunity, project, or collaboration" /></Field>
              <Field label="Project type" error={errors.projectType}>
                <select value={values.projectType} onChange={(e) => update("projectType", e.target.value)} className="input">
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </Field>
              <Field label="Message" error={errors.message}><textarea value={values.message} onChange={(e) => update("message", e.target.value)} className="input min-h-36 resize-y" placeholder="Tell me what you would like to build..." /></Field>
              <button disabled={status === "loading"} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-950">
                <Send size={17} /> {status === "loading" ? "Sending..." : "Submit"}
              </button>
              {status === "success" ? <p className="text-sm font-semibold text-emerald-500">Message validated successfully. Connect this form to an API or email service when ready.</p> : null}
              {status === "error" ? <p className="text-sm font-semibold text-red-500">Please fix the highlighted fields.</p> : null}
            </form>
          </GlassCard>
        </div>
      </Section>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
      {label}
      {children}
      {error ? <span className="text-xs text-red-500">{error}</span> : null}
    </label>
  );
}
