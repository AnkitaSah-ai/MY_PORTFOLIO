"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/data/constants";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" as const },
  transition: { duration: 0.8, delay, ease: EASE },
});

const bentoCards = [
  {
    title: "Frontend Development",
    skills: SKILLS.frontend,
    className: "md:col-span-2",
    accent: "from-purple-500/20 to-cyan-500/20",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "Backend Engineering",
    skills: SKILLS.backend,
    className: "md:col-span-1",
    accent: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
  },
  {
    title: "Languages",
    skills: SKILLS.languages,
    className: "md:col-span-1",
    accent: "from-pink-500/20 to-rose-500/20",
    border: "group-hover:border-pink-500/50",
  },
  {
    title: "Generative AI",
    skills: SKILLS.ai,
    className: "md:col-span-2",
    accent: "from-cyan-500/20 to-blue-500/20",
    border: "group-hover:border-cyan-500/50",
  },
  {
    title: "Databases",
    skills: SKILLS.databases,
    className: "md:col-span-1",
    accent: "from-orange-500/20 to-amber-500/20",
    border: "group-hover:border-orange-500/50",
  },
  {
    title: "Tools & DevOps",
    skills: SKILLS.tools,
    className: "md:col-span-2",
    accent: "from-indigo-500/20 to-purple-500/20",
    border: "group-hover:border-indigo-500/50",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <motion.div {...fadeUp(0)}>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4 block">
              Arsenal
            </span>
          </motion.div>
          <motion.h2 
            {...fadeUp(0.1)}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
          >
            Technologies I <span className="text-gradient-accent">command.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {bentoCards.map((card, idx) => (
            <motion.div
              key={card.title}
              {...fadeUp(0.1 + idx * 0.05)}
              className={`group glass-panel rounded-3xl p-6 sm:p-8 border border-white/5 transition-all duration-500 relative overflow-hidden flex flex-col gap-6 min-h-50 ${card.className} ${card.border}`}
            >
              {/* Animated Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white relative z-10 pb-1">
                {card.title}
              </h3>

              <div className="flex flex-wrap gap-2 relative z-10 mt-auto">
                {card.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/5 border border-white/10 text-zinc-300 group-hover:bg-white/10 group-hover:border-white/20 transition-colors whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
