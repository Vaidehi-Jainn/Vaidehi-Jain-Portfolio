import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-4 pt-28">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">404</p>
        <h1 className="mt-4 font-display text-5xl font-semibold text-slate-950 dark:text-white">Page not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">This route is not available yet.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 font-semibold text-white dark:bg-white dark:text-slate-950">Back home</Link>
      </div>
    </main>
  );
}
