import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/70 p-6 shadow-card backdrop-blur-xl transition duration-300 dark:bg-white/[0.055]",
        "hover:border-accent/40 hover:shadow-glow",
        className,
      )}
      {...props}
    />
  );
}
