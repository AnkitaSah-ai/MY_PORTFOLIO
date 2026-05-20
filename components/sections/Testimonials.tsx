"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Senior Engineer @ TechFlow",
    text: "Ankita possesses a rare blend of strong backend logic and an incredible eye for design. Her work on our AI integration pipeline was seamless.",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager @ Innovate",
    text: "Working with Ankita was a breeze. She quickly grasped our complex requirements and delivered an interface that completely wowed our users.",
  },
  {
    name: "David Kim",
    role: "Founder @ Nexa",
    text: "Her ability to bridge generative AI with beautiful frontend experiences is unmatched for someone still in college. Highly recommended.",
  },
  {
    name: "Elena Rostova",
    role: "Creative Director",
    text: "The attention to detail in Ankita's motion design and CSS styling shows a maturity beyond her years. A true creative developer.",
  },
];

export default function Testimonials() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-400 mb-4 block"
          >
            Endorsements
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
          >
            What people <span className="text-gradient-accent">say.</span>
          </motion.h2>
        </div>

        {mounted && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/5 relative group hover:border-cyan-500/30 transition-colors duration-500 flex flex-col overflow-hidden"
              >
                <div
                  className="absolute -top-4 right-4 sm:right-6 text-8xl text-white/5 font-serif leading-none group-hover:text-cyan-500/10 transition-colors duration-500 pointer-events-none select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </div>

                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 relative z-10 font-medium">
                  {testimonial.text}
                </p>

                <div className="flex items-center gap-4 relative z-10 mt-auto pt-6 border-t border-white/5">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-zinc-400 font-bold border border-white/10">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-zinc-500 font-mono mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
