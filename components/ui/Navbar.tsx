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
  { name: "Testimonials", href: "#testimonials", id: "testimonials" },
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
      {/* Top wrapper — gives padding from edge */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4 sm:pt-5"
      >
        <header
          className={cn(
            "max-w-6xl mx-auto rounded-full transition-all duration-500",
            scrolled
              ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "bg-black/30 backdrop-blur-md border border-white/5"
          )}
        >
          <nav className="px-4 sm:px-5 h-12 sm:h-14 flex items-center justify-between gap-4">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 group shrink-0"
              aria-label="Home"
            >
              <span className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400" />
                <span className="absolute inset-0 bg-gradient-to-br from-purple-500 via-fuchsia-500 to-cyan-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
                <span className="relative z-10">A</span>
              </span>
              <span className="hidden sm:block font-bold text-sm tracking-tight text-white">
                Ankita<span className="text-zinc-500">.dev</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1 relative">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={cn(
                    "relative px-3 lg:px-3.5 py-1.5 text-xs lg:text-[13px] font-medium transition-colors duration-300 rounded-full",
                    active === link.id ? "text-white" : "text-zinc-500 hover:text-white"
                  )}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Resume CTA */}
            <a
              href={PERSONAL_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-black bg-white hover:bg-zinc-200 transition-all duration-300 shrink-0"
            >
              Resume
              <span aria-hidden="true">↗</span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10"
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
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-[68px] left-4 right-4 z-50 md:hidden rounded-2xl overflow-hidden bg-black/85 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <nav className="flex flex-col py-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={cn(
                    "px-5 py-3 text-sm font-medium transition-colors",
                    active === link.id
                      ? "text-white bg-white/5"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="px-4 pb-4 pt-2">
                <a
                  href={PERSONAL_INFO.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center py-2.5 rounded-full text-sm font-semibold text-black bg-white"
                >
                  Resume ↗
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
