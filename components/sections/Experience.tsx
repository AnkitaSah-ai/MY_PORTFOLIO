"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { EDUCATION } from "@/data/constants";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding relative" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4 block"
          >
            Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
          >
            Education & <span className="text-gradient-accent">Experience.</span>
          </motion.h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          {/* Animated central line for desktop, left for mobile */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {EDUCATION.map((entry, i) => (
              <div 
                key={entry.institution}
                className={`relative flex flex-col md:flex-row items-start md:items-center justify-between group ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-[-29px] md:left-1/2 w-8 h-8 rounded-full bg-black border-2 border-zinc-800 md:-translate-x-1/2 flex items-center justify-center z-10 transition-colors duration-500 group-hover:border-purple-500 shadow-[0_0_0_4px_rgba(0,0,0,1)]">
                  <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-cyan-400 transition-colors duration-500 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                </div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`w-full md:w-[45%] glass-panel p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 ml-6 md:ml-0`}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-4">
                    {entry.year}
                  </span>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {entry.institution}
                  </h3>
                  
                  <h4 className="text-sm sm:text-base font-semibold text-zinc-300 mb-4">
                    {entry.degree} — {entry.course}
                  </h4>
                  
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    {entry.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-600">
                    <span>📍</span> {entry.location}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
