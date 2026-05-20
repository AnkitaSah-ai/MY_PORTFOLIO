"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

const CHIP_COLORS: Record<string, { bg: string; text: string }> = {
  React:      { bg: "rgba(6,182,212,0.15)",   text: "#06b6d4" },
  "Node.js":  { bg: "rgba(52,211,153,0.15)",  text: "#34d399" },
  Express:    { bg: "rgba(253,186,116,0.15)", text: "#fb923c" },
  MongoDB:    { bg: "rgba(74,222,128,0.15)",  text: "#4ade80" },
  Python:     { bg: "rgba(250,204,21,0.15)",  text: "#facc15" },
  TypeScript: { bg: "rgba(124,58,237,0.15)",  text: "#9d8ff5" },
  "Next.js":  { bg: "rgba(255,255,255,0.1)",  text: "#e0d7ff" },
};
const fallbackChip = { bg: "rgba(157,143,245,0.15)", text: "#9d8ff5" };
const chipStyle = (tech: string) => CHIP_COLORS[tech] ?? fallbackChip;

type Props = { project: Project; index: number };

export default function ProjectCard({ project, index }: Props) {
  const isCompleted = project.status === "Completed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl overflow-hidden flex flex-col h-full transition-shadow duration-300"
      style={{
        background: "var(--bg-card)",
        border: "1px solid rgba(124,58,237,0.2)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = project.accentColor;
        el.style.boxShadow = `0 16px 40px -16px ${project.accentColor}66, 0 0 0 1px ${project.accentColor}33`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "rgba(124,58,237,0.2)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Top accent strip */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${project.accentColor}, #06b6d4)`,
        }}
      />

      {/* Thumbnail */}
      <div
        className="w-full h-36 sm:h-40 flex items-center justify-center relative overflow-hidden"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div
          className="absolute inset-0 opacity-25 transition-opacity duration-500 group-hover:opacity-50"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.accentColor}, transparent 70%)`,
          }}
        />
        <span className="text-4xl sm:text-5xl select-none relative z-10" role="img" aria-label="project">
          🗂️
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 gap-3 sm:gap-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm sm:text-base font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
            {project.title}
          </h3>
          <span
            className="shrink-0 flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-mono"
            style={{
              background: isCompleted ? "rgba(52,211,153,0.12)" : "rgba(251,146,60,0.12)",
              border: `1px solid ${isCompleted ? "rgba(52,211,153,0.35)" : "rgba(251,146,60,0.35)"}`,
              color: isCompleted ? "var(--accent-green)" : "#fb923c",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: isCompleted ? "var(--accent-green)" : "#fb923c" }}
            />
            {project.status}
          </span>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tech.map((t) => {
            const c = chipStyle(t);
            return (
              <span
                key={t}
                className="px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-mono font-medium"
                style={{ background: c.bg, color: c.text }}
              >
                {t}
              </span>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-[11px] sm:text-xs font-mono font-semibold transition-all duration-200 hover:bg-purple-500/25"
            style={{
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.3)",
              color: "var(--accent-purple-light)",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Code
          </a>

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-[11px] sm:text-xs font-mono font-semibold transition-all duration-200 hover:bg-cyan-500/25"
              style={{
                background: "rgba(6,182,212,0.15)",
                border: "1px solid rgba(6,182,212,0.3)",
                color: "var(--accent-cyan)",
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Live
            </a>
          ) : (
            <span
              className="inline-flex items-center px-3 py-2 rounded-lg text-[10px] sm:text-xs font-mono"
              style={{ color: "var(--text-muted)" }}
            >
              No live demo
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
