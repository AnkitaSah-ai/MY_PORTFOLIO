"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PERSONAL_INFO } from "@/data/constants";
import AnimatedText from "@/components/ui/AnimatedText";

const HeroCanvas = dynamic(() => import("@/components/3d/HeroCanvas"), {
  ssr: false,
});

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
});

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effects driven by scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28"
    >
      <HeroCanvas />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-5 sm:px-8 gap-10 lg:gap-8"
      >
        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 max-w-3xl">

          <motion.div {...fadeUp(0.1)} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-mono tracking-wider uppercase glass-panel text-zinc-300 border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for new opportunities
            </span>
          </motion.div>

          <motion.p
            {...fadeUp(0.2)}
            className="text-base sm:text-lg font-mono mb-2 text-zinc-400"
          >
            Hi, I&apos;m
          </motion.p>

          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-extrabold tracking-tighter mb-4 leading-none">
            <AnimatedText
              text={PERSONAL_INFO.name}
              className="text-white text-glow"
            />
          </div>

          <motion.p
            {...fadeUp(0.4)}
            className="text-lg sm:text-2xl md:text-3xl font-semibold mb-3 text-gradient-accent max-w-2xl"
          >
            {PERSONAL_INFO.title}
          </motion.p>

          <motion.p
            {...fadeUp(0.5)}
            className="text-sm sm:text-base text-zinc-500 mb-8 sm:mb-10 max-w-lg leading-relaxed"
          >
            I build elegant, high-performance web experiences focusing on
            stunning design and generative AI integration.
          </motion.p>

          <motion.div
            {...fadeUp(0.6)}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="shimmer-on-hover group relative inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm transition-all duration-300 bg-white text-black hover:bg-zinc-200 hover:-translate-y-0.5"
            >
              Explore My Work
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                →
              </span>
            </a>

            <a
              href={PERSONAL_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-border inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm transition-all duration-300 glass-panel text-white hover:-translate-y-0.5"
            >
              View Resume
              <span aria-hidden="true">↗</span>
            </a>
          </motion.div>
        </div>

        {/* Profile image */}
        <motion.div
          {...fadeUp(0.3)}
          className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-[380px] lg:h-[380px] shrink-0"
        >
          {/* Outer rotating gradient ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(139,92,246,0.6), rgba(6,182,212,0.6), rgba(236,72,153,0.6), rgba(139,92,246,0.6))",
              filter: "blur(20px)",
              opacity: 0.5,
            }}
          />

          {/* Inner ring */}
          <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-br from-purple-500/40 via-cyan-400/40 to-pink-500/40">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full h-full rounded-full overflow-hidden bg-zinc-900 relative"
            >
              <img
                src="/images/profile.jpg"
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop";
                }}
              />
              {/* Inner shadow for depth */}
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] pointer-events-none rounded-full" />
              {/* Subtle scan overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px)",
                }}
              />
            </motion.div>
          </div>

          {/* Orbit dots */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <span className="absolute bottom-2 right-4 w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3"
        aria-hidden="true"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-zinc-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
