"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { PERSONAL_INFO } from "@/data/constants";

// Load canvas only on client — Three.js can't run server-side
const HeroCanvas = dynamic(() => import("@/components/3d/HeroCanvas"), {
  ssr: false,
});

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: "easeOut" as const },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D background canvas */}
      <HeroCanvas />

      {/* Radial vignette so text stays readable */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, #07070f 75%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Available badge */}
        <motion.div {...fadeUp(0)}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase glass mb-8"
            style={{ color: "var(--accent-green)", borderColor: "rgba(52,211,153,0.25)", border: "1px solid" }}>
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: "var(--accent-green)" }}
              />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--accent-green)" }} />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          {...fadeUp(0.1)}
          className="text-lg md:text-xl font-mono mb-2"
          style={{ color: "var(--text-secondary)" }}
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name with typewriter + glitch */}
        <motion.div {...fadeUp(0.2)} className="mb-4">
          <TypeAnimation
            sequence={[
              400,
              "ANKITA SAH",
              2000,
              "A DEVELOPER",
              1200,
              "AN AI BUILDER",
              1200,
              "ANKITA SAH",
              8000,
            ]}
            wrapper="h1"
            speed={55}
            deletionSpeed={70}
            repeat={Infinity}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
            style={{
              background: "linear-gradient(135deg, #9d8ff5 0%, #7c3aed 40%, #06b6d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
            }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-base md:text-lg font-mono max-w-xl mb-10"
          style={{ color: "var(--text-secondary)" }}
        >
          Full Stack + GenAI Developer&nbsp;·&nbsp;Problem Solver&nbsp;·&nbsp;
          <span style={{ color: "var(--accent-purple-light)" }}>
            2nd Year @ {PERSONAL_INFO.college}
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.45)}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 glass"
            style={{
              color: "var(--text-primary)",
              border: "1px solid rgba(124,58,237,0.4)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 28px rgba(124,58,237,0.55), 0 0 60px rgba(124,58,237,0.2)";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(124,58,237,0.9)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.borderColor =
                "rgba(124,58,237,0.4)";
            }}
          >
            Explore My Work&nbsp;↓
          </a>

          <a
            href={PERSONAL_INFO.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
              color: "#fff",
              boxShadow: "0 0 20px rgba(124,58,237,0.35)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 36px rgba(124,58,237,0.7), 0 0 70px rgba(6,182,212,0.3)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 20px rgba(124,58,237,0.35)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Download Resume&nbsp;↗
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <span className="text-xs font-mono tracking-widest" style={{ color: "var(--text-muted)" }}>
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8"
            style={{ background: "linear-gradient(to bottom, var(--accent-purple), transparent)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
