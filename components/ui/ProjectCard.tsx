"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";
import type { Project } from "@/data/projects";

const CHIP_COLORS: Record<string, { bg: string; text: string }> = {
  React:      { bg: "rgba(6,182,212,0.1)",   text: "#22d3ee" },
  "Node.js":  { bg: "rgba(52,211,153,0.1)",  text: "#34d399" },
  Express:    { bg: "rgba(253,186,116,0.1)", text: "#fb923c" },
  MongoDB:    { bg: "rgba(74,222,128,0.1)",  text: "#4ade80" },
  Python:     { bg: "rgba(250,204,21,0.1)",  text: "#facc15" },
  TypeScript: { bg: "rgba(168,85,247,0.1)",  text: "#c084fc" },
  "Next.js":  { bg: "rgba(255,255,255,0.05)",text: "#e4e4e7" },
};
const fallbackChip = { bg: "rgba(255,255,255,0.05)", text: "#a1a1aa" };
const chipStyle = (tech: string) => CHIP_COLORS[tech] ?? fallbackChip;

type Props = { project: Project; index: number };

export default function ProjectCard({ project, index }: Props) {
  const isCompleted = project.status === "Completed";
  
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct * 6); // gentle tilt — was 15deg, too aggressive
    y.set(yPct * -6);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="perspective-1000 w-full h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative rounded-3xl flex flex-col h-full bg-zinc-900/50 backdrop-blur-xl border border-white/5 transition-colors duration-500 hover:border-purple-500/30 overflow-hidden"
      >
        {/* Animated Glow on Hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${project.accentColor}, transparent 70%)`
          }}
        />

        {/* Thumbnail */}
        <div className="w-full h-48 relative overflow-hidden bg-zinc-950 flex items-center justify-center">
          <div 
            className="absolute inset-0 opacity-20 transition-transform duration-700 group-hover:scale-110"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${project.accentColor}, transparent 80%)`,
            }}
          />
          <span className="text-6xl relative z-10 transform-gpu transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" role="img" aria-label="project">
            {project.thumbnail || "🚀"}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-6 sm:p-7 relative z-10">
          <div className="flex items-start justify-between gap-3 mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-white transition-colors duration-300 group-hover:text-purple-200">
              {project.title}
            </h3>
            <span
              className={`shrink-0 px-2.5 py-1 rounded-full text-[10px] font-mono border whitespace-nowrap ${isCompleted ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-orange-500/10 border-orange-500/20 text-orange-400"}`}
            >
              {project.status}
            </span>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed flex-1 mb-5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => {
              const c = chipStyle(t);
              return (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-xs font-mono"
                  style={{ background: c.bg, color: c.text }}
                >
                  {t}
                </span>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white/5 hover:bg-white/10 text-white transition-all border border-white/5"
            >
              Code
            </a>

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-purple-500 hover:bg-purple-400 text-white transition-all shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
