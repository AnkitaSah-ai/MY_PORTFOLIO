"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EDUCATION } from "@/data/constants";

export default function Education() {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding">
      <div className="max-w-3xl mx-auto px-4">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs tracking-widest uppercase mb-2 text-center"
          style={{ color: "var(--accent-pink)" }}
        >
          Academic journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ color: "var(--text-primary)" }}
        >
          Education
        </motion.h2>

        <div className="relative" ref={lineRef}>
          {/* Animated vertical timeline line */}
          <div
            className="absolute left-5 top-0 w-0.5 origin-top"
            style={{
              height: "100%",
              background: "linear-gradient(to bottom, var(--accent-purple), var(--accent-cyan))",
              transform: isInView ? "scaleY(1)" : "scaleY(0)",
              transition: "transform 1.1s cubic-bezier(0.22,1,0.36,1)",
              transformOrigin: "top",
            }}
          />

          <div className="flex flex-col gap-12">
            {EDUCATION.map((entry, i) => (
              <motion.div
                key={entry.institution}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.15 + 0.3, ease: "easeOut" }}
                className="relative pl-14"
              >
                {/* Node dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.5, type: "spring", stiffness: 200 }}
                  className="absolute left-0 top-1 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--bg-card)",
                    border: "2px solid var(--accent-purple)",
                    boxShadow: "0 0 16px rgba(124,58,237,0.5)",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>🎓</span>
                </motion.div>

                {/* Card */}
                <div
                  className="glass rounded-2xl p-6"
                  style={{ borderColor: "rgba(124,58,237,0.25)" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3
                        className="text-lg font-bold leading-tight"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {entry.institution}
                      </h3>
                      <p
                        className="text-sm font-semibold mt-0.5"
                        style={{ color: "var(--accent-purple-light)" }}
                      >
                        {entry.degree} &middot; {entry.course}
                      </p>
                    </div>

                    <span
                      className="self-start flex-shrink-0 px-3 py-1 rounded-full text-xs font-mono"
                      style={{
                        background: "rgba(124,58,237,0.15)",
                        border: "1px solid rgba(124,58,237,0.35)",
                        color: "var(--accent-purple-light)",
                      }}
                    >
                      {entry.year}
                    </span>
                  </div>

                  <p className="text-xs font-mono mb-3" style={{ color: "var(--text-muted)" }}>
                    📍 {entry.location}
                  </p>

                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {entry.description}
                  </p>

                  {/* Currently studying badge */}
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono"
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
                    Currently Studying
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
