"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/constants";

const HeroCanvas = dynamic(() => import("@/components/3d/HeroCanvas"), {
  ssr: false,
});

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <HeroCanvas />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, #07070f 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center px-5 sm:px-6">

        {/* Available badge */}
        <motion.div {...fadeUp(0)} className="mb-6 sm:mb-8">
          <span
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono tracking-widest uppercase glass"
            style={{ color: "var(--accent-green)" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "var(--accent-green)" }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ background: "var(--accent-green)" }}
              />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-sm sm:text-base md:text-lg font-mono mb-2 sm:mb-3"
          style={{ color: "var(--text-secondary)" }}
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4 sm:mb-5 leading-[1.05]"
          style={{
            background:
              "linear-gradient(135deg, #f0eeff 0%, #9d8ff5 50%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ANKITA SAH
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl mb-2"
          style={{ color: "var(--text-secondary)" }}
        >
          Full Stack + GenAI Developer
        </motion.p>

        <motion.p
          {...fadeUp(0.4)}
          className="text-xs sm:text-sm font-mono mb-8 sm:mb-10"
          style={{ color: "var(--text-muted)" }}
        >
          2nd Year @ {PERSONAL_INFO.college}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 glass hover:border-purple-400/60"
            style={{
              color: "var(--text-primary)",
              border: "1px solid rgba(124,58,237,0.35)",
            }}
          >
            Explore My Work&nbsp;↓
          </a>

          <a
            href={PERSONAL_INFO.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              color: "#fff",
              boxShadow: "0 10px 30px -10px rgba(124,58,237,0.5)",
            }}
          >
            Download Resume&nbsp;↗
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[10px] font-mono tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-7"
            style={{ background: "linear-gradient(to bottom, var(--accent-purple), transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
