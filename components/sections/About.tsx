"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/constants";

const vp = { once: true, margin: "-80px" as const };
const iv = { opacity: 0, y: 24 };
const av = (delay: number) => ({
  opacity: 1,
  y: 0,
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number] },
});

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={iv} whileInView={av(0)} viewport={vp}
          className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-2 text-center"
          style={{ color: "var(--accent-purple-light)" }}
        >
          Get to know me
        </motion.p>
        <motion.h2
          initial={iv} whileInView={av(0.08)} viewport={vp}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-14"
          style={{ color: "var(--text-primary)" }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">

          {/* Profile photo with subtle gradient ring */}
          <motion.div
            initial={iv} whileInView={av(0.15)} viewport={vp}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 float-y">
              {/* Soft glow */}
              <div
                className="absolute -inset-2 rounded-full blur-2xl soft-pulse"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(124,58,237,0.5), rgba(6,182,212,0.5), rgba(236,72,153,0.5), rgba(124,58,237,0.5))",
                }}
              />
              {/* Static gradient ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 220deg, #7c3aed, #06b6d4, #ec4899, #7c3aed)",
                  padding: "2px",
                }}
              >
                <div className="w-full h-full rounded-full" style={{ background: "var(--bg-primary)" }} />
              </div>
              {/* Avatar */}
              <div
                className="absolute inset-1 rounded-full flex items-center justify-center overflow-hidden"
                style={{ background: "var(--bg-secondary)" }}
              >
                <span className="text-6xl sm:text-7xl select-none" role="img" aria-label="Avatar">
                  👩‍💻
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bio card */}
          <motion.div
            initial={iv} whileInView={av(0.25)} viewport={vp}
            className="glass rounded-2xl p-6 sm:p-8 flex flex-col gap-4 sm:gap-5"
          >
            <span
              className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono tracking-wide"
              style={{
                background: "rgba(52,211,153,0.1)",
                border: "1px solid rgba(52,211,153,0.3)",
                color: "var(--accent-green)",
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "var(--accent-green)" }} />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5"
                  style={{ background: "var(--accent-green)" }} />
              </span>
              Open to Work
            </span>

            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              I&apos;m{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Ankita Sah</span>, a passionate
              2nd year MDC student at{" "}
              <span style={{ color: "var(--accent-purple-light)" }}>
                Surya Sen Mahavidyalaya, Siliguri
              </span>
              . I love building Full Stack apps and exploring GenAI to solve real-world problems.
            </p>

            <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              When I&apos;m not coding, I&apos;m experimenting with LLMs, reading about AI research, or
              designing interfaces that feel like the future.
            </p>

            <div className="grid grid-cols-2 gap-3 mt-1">
              {[
                { label: "Location", value: "Siliguri, WB" },
                { label: "Course", value: "MDC · 2nd Year" },
                { label: "Focus", value: "Full Stack + AI" },
                { label: "Status", value: PERSONAL_INFO.openToWork ? "Available" : "Busy" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[10px] sm:text-xs font-mono" style={{ color: "var(--text-muted)" }}>{label}</p>
                  <p className="text-xs sm:text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
