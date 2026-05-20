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

function HexCard({
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
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.08 }}
      className="relative flex items-center justify-center rounded-xl px-4 py-3 cursor-default select-none transition-shadow duration-300"
      style={{
        background: "var(--bg-card)",
        border: `1px solid ${color}40`,
        minWidth: "90px",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${glow}, 0 0 40px ${glow}55`;
        (e.currentTarget as HTMLElement).style.borderColor = color;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = `${color}40`;
      }}
    >
      <span className="text-xs font-mono font-semibold text-center leading-tight" style={{ color }}>
        {skill}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-5xl mx-auto px-4">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest uppercase mb-2 text-center"
          style={{ color: "var(--accent-cyan)" }}
        >
          What I work with
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
          style={{ color: "var(--text-primary)" }}
        >
          Skills
        </motion.h2>

        <div className="flex flex-col gap-10">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div key={cat.label}>
              {/* Category label */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.06 }}
                className="font-mono text-xs tracking-widest uppercase mb-4"
                style={{ color: cat.color }}
              >
                {cat.label}
              </motion.p>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, si) => (
                  <HexCard
                    key={skill}
                    skill={skill}
                    color={cat.color}
                    glow={cat.glow}
                    delay={ci * 0.04 + si * 0.06}
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
