"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [progress, setProgress] = useState(1);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((value) => {
        const next = Math.min(value + 7, 100);
        if (next === 100) {
          window.setTimeout(() => setDone(true), 260);
          window.clearInterval(interval);
        }
        return next;
      });
    }, 45);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.55 }} className="fixed inset-0 z-[100] grid place-items-center bg-ink text-white">
          <div className="w-72 text-center">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-2xl border border-white/15 bg-white/10 font-display text-2xl font-bold">
              VJ
            </motion.div>
            <p className="mb-4 font-mono text-sm text-cyan-200">loading interface {progress}%</p>
            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-accent to-secondary"
                initial={{ width: "1%" }}
                animate={{ width: `${progress}%` }}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
