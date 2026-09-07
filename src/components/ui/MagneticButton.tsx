"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  target?: string;
  rel?: string;
};

export function MagneticButton({ href, children, variant = "primary", className, target, rel }: MagneticButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-white text-slate-950 hover:bg-cyan-100 dark:bg-white"
      : "border border-white/15 bg-white/5 text-slate-900 hover:border-accent/60 dark:text-white";
  const content = (
    <motion.span whileHover={{ scale: 1.035 }} whileTap={{ scale: 0.97 }} className={cn("inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition", styles, className)}>
      {children}
    </motion.span>
  );

  return href ? <Link href={href} target={target} rel={rel}>{content}</Link> : content;
}
