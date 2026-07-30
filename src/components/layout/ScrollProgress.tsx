"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();
  return <div className="fixed left-0 top-0 z-[80] h-1 bg-gradient-to-r from-primary via-accent to-secondary" style={{ width: `${progress * 100}%` }} />;
}
