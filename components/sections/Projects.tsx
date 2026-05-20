"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import PROJECTS from "@/data/projects";

// Glitch title — CSS keyframes approach, no extra deps
function GlitchTitle() {
  return (
    <h2
      className="text-3xl md:text-4xl font-extrabold text-center mb-14 glitch-title"
      data-text="MY WORK"
      style={{ color: "var(--text-primary)" }}
    >
      MY WORK
    </h2>
  );
}

// "Coming soon" skeleton placeholder card
function ComingSoonCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: "easeOut" }}
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "var(--bg-card)",
        border: "1px solid rgba(124,58,237,0.12)",
        minHeight: "360px",
      }}
    >
      {/* skeleton top strip */}
      <div className="h-1 w-full skeleton-shimmer" />

      {/* skeleton thumbnail */}
      <div className="h-40 w-full skeleton-shimmer opacity-40" />

      <div className="flex flex-col flex-1 p-6 gap-4 items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-3xl select-none">🚧</span>
          <p
            className="font-mono text-sm font-semibold tracking-wide"
            style={{ color: "var(--accent-purple-light)" }}
          >
            More projects coming soon...
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            Currently building in public. Stay tuned!
          </p>
        </div>

        {/* pulsing skeleton lines */}
        <div className="w-full flex flex-col gap-2 mt-2">
          {[80, 60, 70].map((w, i) => (
            <div
              key={i}
              className="h-2 rounded-full skeleton-shimmer"
              style={{ width: `${w}%`, animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest uppercase mb-2 text-center"
          style={{ color: "var(--accent-pink)" }}
        >
          Things I&apos;ve built
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
        >
          <GlitchTitle />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
          <ComingSoonCard index={PROJECTS.length} />
        </div>
      </div>
    </section>
  );
}
