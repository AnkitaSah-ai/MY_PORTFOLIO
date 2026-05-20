"use client";

import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    label: "Frontend",
    color: "#7c3aed",
    glow: "rgba(124,58,237,0.45)",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.45)",
    skills: ["Node.js", "Express.js", "Python", "FastAPI", "REST APIs"],
  },
  {
    label: "Database",
    color: "#34d399",
    glow: "rgba(52,211,153,0.45)",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "SQL"],
  },
  {
    label: "GenAI",
    color: "#f472b6",
    glow: "rgba(244,114,182,0.45)",
    skills: ["LangChain", "OpenAI API", "Gemini API", "Hugging Face", "Prompt Eng."],
  },
  {
    label: "Tools",
    color: "#fb923c",
    glow: "rgba(251,146,60,0.45)",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Vercel"],
  },
] as const;

function Chip({
  skill,
  color,
  glow,
  delay,
}: {
  skill: string;
  color: string;
  glow: string;
  delay: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={{ y: -3 }}
      className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-mono font-semibold cursor-default select-none transition-all duration-200"
      style={{
        background: "var(--bg-card)",
        border: `1px solid ${color}33`,
        color,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 20px -8px ${glow}`;
        (e.currentTarget as HTMLElement).style.borderColor = `${color}99`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = `${color}33`;
      }}
    >
      {skill}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-2 text-center"
          style={{ color: "var(--accent-cyan)" }}
        >
          What I work with
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-14"
          style={{ color: "var(--text-primary)" }}
        >
          Skills
        </motion.h2>

        <div className="flex flex-col gap-8 sm:gap-10">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div key={cat.label}>
              <motion.p
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: ci * 0.05 }}
                className="font-mono text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-3 sm:mb-4"
                style={{ color: cat.color }}
              >
                — {cat.label}
              </motion.p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {cat.skills.map((skill, si) => (
                  <Chip
                    key={skill}
                    skill={skill}
                    color={cat.color}
                    glow={cat.glow}
                    delay={ci * 0.03 + si * 0.04}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
