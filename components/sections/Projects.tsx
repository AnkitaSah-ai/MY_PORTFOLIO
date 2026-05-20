"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import PROJECTS from "@/data/projects";

function ComingSoonCard({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "var(--bg-card)",
        border: "1px dashed rgba(124,58,237,0.25)",
        minHeight: "320px",
      }}
    >
      <div className="h-1 w-full opacity-40"
        style={{ background: "linear-gradient(90deg, #7c3aed, #06b6d4)" }} />

      <div className="h-36 sm:h-40 w-full opacity-30 flex items-center justify-center"
        style={{ background: "var(--bg-secondary)" }}>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--accent-purple)" }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.4, delay: i * 0.2, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6 gap-3 items-center justify-center text-center">
        <span className="text-3xl select-none">🚧</span>
        <p
          className="font-mono text-xs sm:text-sm font-semibold tracking-wide"
          style={{ color: "var(--accent-purple-light)" }}
        >
          More projects coming soon
        </p>
        <p className="text-[11px] sm:text-xs" style={{ color: "var(--text-muted)" }}>
          Currently building in public. Stay tuned!
        </p>
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
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-2 text-center"
          style={{ color: "var(--accent-pink)" }}
        >
          Things I&apos;ve built
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-14"
          style={{
            background:
              "linear-gradient(135deg, #f0eeff 0%, #9d8ff5 50%, #06b6d4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          My Work
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
          <ComingSoonCard index={PROJECTS.length} />
        </div>
      </div>
    </section>
  );
}
