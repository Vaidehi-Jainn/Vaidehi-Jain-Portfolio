"use client";

import { useMousePosition } from "@/hooks/useMousePosition";

export function InteractiveBackground() {
  const { x, y } = useMousePosition();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 noise opacity-60" />
      <div className="absolute left-1/2 top-[-12rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/25" />
      <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-secondary/16 blur-3xl dark:bg-secondary/20" />
      <div
        className="absolute h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/14 blur-3xl transition-transform duration-300"
        style={{ left: x, top: y }}
      />
    </div>
  );
}
