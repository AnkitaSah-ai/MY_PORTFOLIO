"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

// Tech chip colors — cycles through accent palette
const CHIP_COLORS: Record<string, { bg: string; text: string }> = {
  React:      { bg: "rgba(6,182,212,0.15)",   text: "#06b6d4" },
  "Node.js":  { bg: "rgba(52,211,153,0.15)",  text: "#34d399" },
  Express:    { bg: "rgba(253,186,116,0.15)", text: "#fb923c" },
  MongoDB:    { bg: "rgba(74,222,128,0.15)",  text: "#4ade80" },
  Python:     { bg: "rgba(250,204,21,0.15)",  text: "#facc15" },
  TypeScript: { bg: "rgba(124,58,237,0.15)",  text: "#9d8ff5" },
  Next:       { bg: "rgba(255,255,255,0.1)",   text: "#e0d7ff" },
  "Next.js":  { bg: "rgba(255,255,255,0.1)",   text: "#e0d7ff" },
};
const fallbackChip = { bg: "rgba(157,143,245,0.15)", text: "#9d8ff5" };

function chipStyle(tech: string) {
  return CHIP_COLORS[tech] ?? fallbackChip;
}

type Props = { project: Project; index: number };

export default function ProjectCard({ project, index }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Vanilla-tilt style — pure CSS-transform, no library import needed at runtime
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;  // -0.5 → 0.5
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale3d(1.03,1.03,1.03)`;
    };
    const onLeave = () => {
      el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const isCompleted = project.status === "Completed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: "easeOut" }}
    >
      <div
        ref={cardRef}
        className="relative rounded-2xl overflow-hidden flex flex-col h-full"
        style={{
          background: "var(--bg-card)",
          border: "1px solid rgba(124,58,237,0.25)",
          transition: "transform 0.15s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          willChange: "transform",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = project.accentColor;
          el.style.boxShadow = `0 0 32px ${project.accentColor}55, 0 8px 40px rgba(0,0,0,0.4)`;
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = "rgba(124,58,237,0.25)";
          el.style.boxShadow = "none";
        }}
      >
        {/* Animated gradient border top strip */}
        <div
          className="h-1 w-full gradient-border-anim"
          style={{
            background: `linear-gradient(90deg, ${project.accentColor}, #06b6d4, #ec4899, ${project.accentColor})`,
            backgroundSize: "300% 100%",
          }}
        />

        {/* Thumbnail placeholder */}
        <div
          className="w-full h-40 flex items-center justify-center relative overflow-hidden"
          style={{ background: "var(--bg-secondary)" }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${project.accentColor}, transparent 70%)`,
            }}
          />
          <span className="text-5xl select-none" role="img" aria-label="project">
            🗂️
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-6 gap-4">
          {/* Title + status */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold leading-tight" style={{ color: "var(--text-primary)" }}>
              {project.title}
            </h3>
            <span
              className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono"
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

          {/* Description */}
          <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
            {project.description}
          </p>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => {
              const c = chipStyle(t);
              return (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium"
                  style={{ background: c.bg, color: c.text }}
                >
                  {t}
                </span>
              );
            })}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all duration-200"
              style={{
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.35)",
                color: "var(--accent-purple-light)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(124,58,237,0.15)";
              }}
            >
              {/* GitHub icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>

            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all duration-200"
                style={{
                  background: "rgba(6,182,212,0.15)",
                  border: "1px solid rgba(6,182,212,0.35)",
                  color: "var(--accent-cyan)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(6,182,212,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(6,182,212,0.15)";
                }}
              >
                {/* External link icon */}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live Demo
              </a>
            ) : (
              <span
                className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-mono"
                style={{ color: "var(--text-muted)", border: "1px solid rgba(90,83,110,0.2)" }}
              >
                No live demo
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
