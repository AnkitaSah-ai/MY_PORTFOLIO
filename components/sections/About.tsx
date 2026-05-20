"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/constants";

const vp = { once: true, margin: "-80px" as const };
const iv = { opacity: 0, y: 36 };
const av = (delay: number) => ({
  opacity: 1,
  y: 0,
  transition: { duration: 0.7, delay },
});

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto px-4">

        <motion.p
          initial={iv} whileInView={av(0)} viewport={vp}
          className="font-mono text-xs tracking-widest uppercase mb-2 text-center"
          style={{ color: "var(--accent-purple-light)" }}
        >
          Get to know me
        </motion.p>
        <motion.h2
          initial={iv} whileInView={av(0.08)} viewport={vp}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
          style={{ color: "var(--text-primary)" }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left — profile image with rotating glow border */}
          <motion.div
            initial={iv} whileInView={av(0.15)} viewport={vp}
            className="flex justify-center"
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              {/* animated gradient ring */}
              <div
                className="absolute inset-0 rounded-full hue-rotate-anim"
                style={{
                  background: "conic-gradient(from 0deg, #7c3aed, #06b6d4, #ec4899, #7c3aed)",
                  padding: "3px",
                  borderRadius: "50%",
                }}
              >
                <div className="w-full h-full rounded-full" style={{ background: "var(--bg-primary)" }} />
              </div>

              {/* avatar */}
              <div
                className="absolute inset-1 rounded-full flex items-center justify-center overflow-hidden"
                style={{ background: "var(--bg-secondary)" }}
              >
                <span className="text-7xl select-none" role="img" aria-label="Ankita Sah avatar">
                  👩‍💻
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right — bio card */}
          <motion.div
            initial={iv} whileInView={av(0.25)} viewport={vp}
            className="glass rounded-2xl p-8 flex flex-col gap-5"
          >
            {/* Open to work badge */}
            <span
              className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-xs font-mono tracking-wide"
              style={{
                background: "rgba(52,211,153,0.1)",
                border: "1px solid rgba(52,211,153,0.3)",
                color: "var(--accent-green)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "var(--accent-green)" }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--accent-green)" }} />
              </span>
              Open to Work ✅
            </span>

            <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              I&apos;m{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Ankita Sah</span>, a passionate
              2nd year MDC student at{" "}
              <span style={{ color: "var(--accent-purple-light)" }}>
                Surya Sen Mahavidyalaya, Siliguri
              </span>
              . I love building Full Stack apps and exploring GenAI to solve real-world problems.
            </p>

            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              When I&apos;m not coding, I&apos;m experimenting with LLMs, reading about AI research, or designing
              interfaces that feel like the future.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-3 mt-1">
              {[
                { label: "Location", value: "Siliguri, WB" },
                { label: "Course", value: "MDC · 2nd Year" },
                { label: "Focus", value: "Full Stack + GenAI" },
                { label: "Status", value: PERSONAL_INFO.openToWork ? "Available" : "Busy" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{label}</p>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
