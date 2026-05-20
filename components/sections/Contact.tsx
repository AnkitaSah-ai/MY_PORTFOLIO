"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/constants";

type Status = "idle" | "sending" | "success" | "error";

const inputStyle: React.CSSProperties = {
  background: "rgba(7,7,15,0.7)",
  border: "1px solid rgba(124,58,237,0.2)",
  color: "var(--text-primary)",
};

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "var(--accent-purple)";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.15)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = "rgba(124,58,237,0.2)";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-2 text-center"
          style={{ color: "var(--accent-cyan)" }}
        >
          Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 px-2"
          style={{ color: "var(--text-primary)" }}
        >
          Let&apos;s Build Something Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="text-xs sm:text-sm text-center mb-10 sm:mb-12 px-4"
          style={{ color: "var(--text-muted)" }}
        >
          Have a project idea or just want to say hi? Drop a message — I reply within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl p-6 sm:p-8 md:p-10"
          style={{
            background: "rgba(13,12,34,0.7)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(124,58,237,0.25)",
          }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] sm:text-xs font-mono tracking-wide" style={{ color: "var(--text-muted)" }}>
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Your name"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] sm:text-xs font-mono tracking-wide" style={{ color: "var(--text-muted)" }}>
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] sm:text-xs font-mono tracking-wide" style={{ color: "var(--text-muted)" }}>
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Hi Ankita, I'd love to collaborate on..."
                className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition-all duration-200"
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className="relative w-full py-3 sm:py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 disabled:hover:translate-y-0"
              style={{
                background:
                  status === "success"
                    ? "linear-gradient(135deg, #34d399, #059669)"
                    : "linear-gradient(135deg, #7c3aed, #06b6d4)",
                color: "#fff",
                boxShadow:
                  status === "success"
                    ? "0 10px 30px -10px rgba(52,211,153,0.5)"
                    : "0 10px 30px -10px rgba(124,58,237,0.5)",
                cursor: status === "sending" || status === "success" ? "not-allowed" : "pointer",
              }}
            >
              <AnimatePresence mode="wait">
                {status === "idle" && (
                  <motion.span key="idle"
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2">
                    <Send size={14} /> Send Message
                  </motion.span>
                )}
                {status === "sending" && (
                  <motion.span key="sending"
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2">
                    <Loader2 size={14} className="animate-spin" /> Sending...
                  </motion.span>
                )}
                {status === "success" && (
                  <motion.span key="success"
                    initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-2">
                    <CheckCircle size={14} /> Message Sent!
                  </motion.span>
                )}
                {status === "error" && (
                  <motion.span key="error"
                    initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-2">
                    Failed — try again
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </form>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mt-6 sm:mt-8 pt-5 sm:pt-6"
            style={{ borderTop: "1px solid rgba(124,58,237,0.15)" }}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.25)",
                color: "var(--accent-purple-light)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "rgba(6,182,212,0.1)",
                border: "1px solid rgba(6,182,212,0.25)",
                color: "var(--accent-cyan)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.55V9H3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
