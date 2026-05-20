"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/constants";

type Status = "idle" | "sending" | "success" | "error";

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" as const },
  transition: { duration: 0.8, delay, ease: EASE },
});

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key"
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-black pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <motion.h2 
            {...fadeUp(0)}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6"
          >
            Let's <span className="text-gradient-accent">Talk.</span>
          </motion.h2>
          <motion.p 
            {...fadeUp(0.1)}
            className="text-lg sm:text-xl text-zinc-400 font-medium"
          >
            Have an idea? I'd love to hear about it.
          </motion.p>
        </div>

        <motion.div 
          {...fadeUp(0.2)}
          className="glass-panel p-8 sm:p-12 md:p-16 rounded-[2rem] sm:rounded-[3rem] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono tracking-wider text-zinc-400 uppercase ml-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white outline-none focus:border-purple-500/50 focus:bg-zinc-900 transition-all placeholder:text-zinc-600"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono tracking-wider text-zinc-400 uppercase ml-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white outline-none focus:border-cyan-500/50 focus:bg-zinc-900 transition-all placeholder:text-zinc-600"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono tracking-wider text-zinc-400 uppercase ml-2">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl px-6 py-4 text-white outline-none focus:border-pink-500/50 focus:bg-zinc-900 transition-all placeholder:text-zinc-600 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="mt-4 relative group w-full sm:w-auto self-end inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-white overflow-hidden transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed border border-white/10"
            >
              {/* Button Background Gradient */}
              <div className={`absolute inset-0 transition-opacity duration-300 ${status === 'success' ? 'bg-emerald-500' : 'bg-gradient-to-r from-purple-600 to-cyan-600 opacity-80 group-hover:opacity-100'}`} />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={status}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="relative z-10 flex items-center gap-2"
                >
                  {status === "idle" && <><Send size={18} /> Send Message</>}
                  {status === "sending" && <><Loader2 size={18} className="animate-spin" /> Sending...</>}
                  {status === "success" && <><CheckCircle size={18} /> Sent Successfully!</>}
                  {status === "error" && <>Try Again</>}
                </motion.div>
              </AnimatePresence>
            </button>
          </form>

          <div className="flex justify-center gap-4 mt-12 pt-8 border-t border-white/5 relative z-10">
            {[
              { name: "GitHub", href: PERSONAL_INFO.github },
              { name: "LinkedIn", href: PERSONAL_INFO.linkedin },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-colors text-sm font-semibold text-zinc-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
