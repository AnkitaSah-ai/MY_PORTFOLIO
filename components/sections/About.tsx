"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/constants";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" as const },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Header & Title - Left side on Desktop */}
          <div className="lg:col-span-5 flex flex-col gap-6 sticky top-32">
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-3">
                <div className="h-[1px] w-8 bg-purple-500" />
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-400">
                  The Architect
                </span>
              </div>
            </motion.div>
            
            <motion.h2 
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
            >
              Crafting digital <br />
              <span className="text-gradient-accent">experiences.</span>
            </motion.h2>

            <motion.div 
              {...fadeUp(0.2)}
              className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mt-4 glass-panel"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden bg-zinc-900">
                <img 
                  src="/images/profile.jpg" 
                  alt="Ankita Sah" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";
                  }}
                />
              </div>
            </motion.div>
          </div>

          {/* Bio Content - Right side on Desktop */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:mt-24">
            <motion.div {...fadeUp(0.3)} className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300 font-medium mb-6 relative z-10 wrap-break-word">
                I&apos;m <span className="text-white">Ankita Sah</span>, a Full Stack Developer and Generative AI enthusiast currently pursuing my MDC at Surya Sen Mahavidyalaya.
              </p>

              <p className="text-sm sm:text-base text-zinc-500 leading-relaxed mb-8 relative z-10 wrap-break-word">
                My journey bridges the gap between intricate backend logic and stunning, fluid user interfaces. I believe the best products don&apos;t just function—they feel alive. By integrating LLMs and cutting-edge web technologies, I aim to build software that feels like the future.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 relative z-10 border-t border-white/10 pt-8">
                {[
                  { label: "Status", value: PERSONAL_INFO.openToWork ? "Available" : "Busy" },
                  { label: "Focus", value: "Full Stack + AI" },
                  { label: "Location", value: "Siliguri, WB" },
                  { label: "Course", value: "MDC · 2nd Yr" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-1 min-w-0">
                    <span className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-wider truncate">{label}</span>
                    <span className="text-sm font-semibold text-zinc-200 wrap-break-word">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
