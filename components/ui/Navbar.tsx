"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { PERSONAL_INFO } from "@/data/constants";

const links = [
  { name: "Home", href: "#hero", id: "hero" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(links[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-5"
      >
        {/* Gradient border wrapper */}
        <div className="relative group">
          {/* Outer glow halo */}
          <div
            className={cn(
              "absolute -inset-px rounded-full blur-md transition-opacity duration-500 pointer-events-none",
              scrolled ? "opacity-60" : "opacity-30"
            )}
            style={{
              background:
                "conic-gradient(from 0deg, rgba(139,92,246,0.5), rgba(6,182,212,0.5), rgba(236,72,153,0.5), rgba(139,92,246,0.5))",
            }}
          />

          {/* Animated gradient border */}
          <div
            className="absolute -inset-[1px] rounded-full opacity-60"
            style={{
              background:
                "conic-gradient(from var(--gradient-angle, 0deg), rgba(139,92,246,0.7), rgba(6,182,212,0.7), rgba(236,72,153,0.7), rgba(139,92,246,0.7))",
              animation: "rotate-gradient 8s linear infinite",
            }}
          />

          <header
            className={cn(
              "relative rounded-full transition-all duration-500 overflow-hidden",
              scrolled
                ? "bg-black/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(139,92,246,0.15)]"
                : "bg-black/60 backdrop-blur-xl"
            )}
          >
            {/* Inner gradient shimmer */}
            <div
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                background:
                  "linear-gradient(120deg, transparent 30%, rgba(139,92,246,0.08) 50%, transparent 70%)",
              }}
            />

            <nav className="relative px-2 sm:px-3 h-12 sm:h-14 flex items-center gap-1 sm:gap-2">
              {/* Logo */}
              <a
                href="#hero"
                className="flex items-center gap-2 group/logo shrink-0 pl-2 pr-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
                aria-label="Home"
              >
                <span className="relative w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold text-white overflow-hidden ring-1 ring-white/20">
                  {/* Spinning conic background */}
                  <span
                    className="absolute inset-0"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #8b5cf6, #06b6d4, #ec4899, #8b5cf6)",
                      animation: "rotate-gradient 4s linear infinite",
                    }}
                  />
                  {/* Inner dark circle for contrast */}
                  <span className="absolute inset-[2px] rounded-full bg-zinc-950 flex items-center justify-center">
                    <span className="text-gradient-accent font-extrabold">A</span>
                  </span>
                  {/* Hover glow */}
                  <span
                    className="absolute -inset-1 opacity-0 group-hover/logo:opacity-100 blur-md transition-opacity duration-300"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #8b5cf6, #06b6d4, #ec4899)",
                    }}
                  />
                </span>
                <span className="hidden sm:block font-bold text-sm tracking-tight text-white">
                  Ankita<span className="text-zinc-500 group-hover/logo:text-cyan-400 transition-colors">.dev</span>
                </span>
              </a>

              {/* Divider */}
              <span className="hidden md:block w-px h-5 bg-white/10" />

              {/* Desktop nav */}
              <div className="hidden md:flex items-center gap-0.5 relative flex-1 justify-center">
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className={cn(
                      "relative px-3 lg:px-4 py-1.5 text-[13px] font-medium transition-colors duration-300 rounded-full group/link",
                      active === link.id ? "text-white" : "text-zinc-400 hover:text-white"
                    )}
                  >
                    {active === link.id && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(6,182,212,0.15))",
                          border: "1px solid rgba(139,92,246,0.3)",
                          boxShadow:
                            "inset 0 1px 0 rgba(255,255,255,0.1), 0 0 20px rgba(139,92,246,0.15)",
                        }}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {active === link.id && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="relative flex h-1.5 w-1.5"
                        >
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-400" />
                        </motion.span>
                      )}
                      {link.name}
                    </span>
                    {/* Subtle underline on hover when not active */}
                    {active !== link.id && (
                      <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-px w-0 group-hover/link:w-1/2 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300" />
                    )}
                  </a>
                ))}
              </div>

              {/* Divider */}
              <span className="hidden md:block w-px h-5 bg-white/10" />

              {/* Resume CTA */}
              <a
                href={PERSONAL_INFO.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="relative hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white overflow-hidden group/resume shrink-0 transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Animated gradient background */}
                <span
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500"
                  style={{
                    backgroundSize: "200% 100%",
                    animation: "gradient-shift 4s ease infinite",
                  }}
                />
                {/* Hover overlay */}
                <span className="absolute inset-0 bg-white opacity-0 group-hover/resume:opacity-10 transition-opacity" />
                {/* Shimmer sweep */}
                <span className="absolute inset-0 -translate-x-full group-hover/resume:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative z-10 flex items-center gap-1">
                  Resume
                  <span aria-hidden="true" className="group-hover/resume:translate-x-0.5 group-hover/resume:-translate-y-0.5 transition-transform">↗</span>
                </span>
              </a>

              {/* Mobile hamburger */}
              <button
                className="md:hidden relative w-9 h-9 ml-auto flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <div className="w-4 h-3 flex flex-col justify-between items-center">
                  <span
                    className={cn(
                      "w-full h-[1.5px] bg-white transition-all duration-300 origin-center",
                      menuOpen && "rotate-45 translate-y-[5px]"
                    )}
                  />
                  <span
                    className={cn(
                      "w-full h-[1.5px] bg-white transition-all duration-300",
                      menuOpen && "opacity-0"
                    )}
                  />
                  <span
                    className={cn(
                      "w-full h-[1.5px] bg-white transition-all duration-300 origin-center",
                      menuOpen && "-rotate-45 -translate-y-[5px]"
                    )}
                  />
                </div>
              </button>
            </nav>
          </header>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[72px] left-4 right-4 z-50 md:hidden rounded-3xl overflow-hidden"
          >
            <div className="absolute -inset-px rounded-3xl opacity-40 blur-md"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(139,92,246,0.5), rgba(6,182,212,0.5), rgba(236,72,153,0.5), rgba(139,92,246,0.5))",
              }}
            />
            <div className="relative bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl">
              <nav className="flex flex-col p-2 gap-0.5">
                {links.map((link, i) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={cn(
                      "relative px-5 py-3 text-sm font-medium transition-all rounded-2xl flex items-center gap-3",
                      active === link.id
                        ? "text-white"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    )}
                    style={
                      active === link.id
                        ? {
                            background:
                              "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(6,182,212,0.1))",
                            border: "1px solid rgba(139,92,246,0.25)",
                          }
                        : undefined
                    }
                  >
                    {active === link.id && (
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-400" />
                      </span>
                    )}
                    {link.name}
                  </motion.a>
                ))}
                <div className="px-2 pt-2 pb-1">
                  <a
                    href={PERSONAL_INFO.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="relative block w-full text-center py-3 rounded-2xl text-sm font-semibold text-white overflow-hidden"
                  >
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-500"
                      style={{
                        backgroundSize: "200% 100%",
                        animation: "gradient-shift 4s ease infinite",
                      }}
                    />
                    <span className="relative z-10">Resume ↗</span>
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
