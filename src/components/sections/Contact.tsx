"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { validateContactForm, type ContactFormState } from "@/lib/validations";
import { sendContactMessage } from "@/services/contactService";
import { GlassCard } from "@/components/ui/GlassCard";
import { Section } from "@/components/ui/Section";

const initialState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

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
    <Section id="contact" eyebrow="Contact" title="Let's build something meaningful." description="I'm open to frontend development opportunities, freelance projects, collaborative work, and roles where development and thoughtful design come together.">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="grid content-start gap-4">
            <GlassCard className="p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Get in touch</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-slate-950 dark:text-white">Vaidehi Jain</h3>
            </GlassCard>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <ContactTile href="mailto:vaidehijain.work@gmail.com" icon={<Mail size={18} />} label="Email" value="vaidehijain.work@gmail.com" />
              <ContactTile icon={<Phone size={18} />} label="Phone" value="+91 8824633438" />
              <ContactTile icon={<MapPin size={18} />} label="Location" value="Jaipur, Rajasthan, India" />
            </div>
          </div>

          <GlassCard className="p-5 sm:p-6">
            <form onSubmit={submit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" error={errors.name}><input value={values.name} onChange={(e) => update("name", e.target.value)} className="input" placeholder="Your name" /></Field>
                <Field label="Email" error={errors.email}><input value={values.email} onChange={(e) => update("email", e.target.value)} className="input" placeholder="Your email" /></Field>
              </div>
              <Field label="Mobile Number" error={errors.phone}><input value={values.phone} onChange={(e) => update("phone", e.target.value)} className="input" placeholder="Your number" /></Field>
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
  );
}

function ContactTile({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/75 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-accent/40 dark:border-white/10 dark:bg-white/[0.055]">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">{label}</span>
        <span className="mt-1 block break-all text-sm font-semibold text-slate-800 dark:text-slate-100">{value}</span>
      </span>
    </div>
  );

  return href ? <a href={href}>{content}</a> : content;
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
