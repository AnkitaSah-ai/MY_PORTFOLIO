"use client";

import { PERSONAL_INFO } from "@/data/constants";

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-5 sm:px-6 relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <p className="font-mono text-xs text-zinc-500">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-zinc-600 flex items-center gap-1.5">
          Crafted with Next.js & Framer Motion
        </p>
      </div>
    </footer>
  );
}
