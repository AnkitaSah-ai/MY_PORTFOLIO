"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "@/data/constants";

function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return active;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(7,7,15,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(124,58,237,0.15)" : "1px solid transparent",
        }}
      >
        <nav className="max-w-6xl mx-auto px-5 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="font-mono text-xs sm:text-sm font-bold tracking-widest"
            style={{ color: "var(--accent-purple-light)" }}
          >
            ANKITA<span style={{ color: "var(--accent-cyan)" }}>.DEV</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={href}>
                  <a
                    href={href}
                    className="relative font-mono text-[11px] tracking-[0.2em] uppercase transition-colors duration-200 hover:text-white"
                    style={{ color: isActive ? "var(--accent-purple-light)" : "var(--text-muted)" }}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 right-0 h-px"
                        style={{ background: "var(--accent-purple)" }}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Resume CTA — desktop */}
          <a
            href={PERSONAL_INFO.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono text-[11px] tracking-wide transition-all duration-200 hover:bg-purple-500/15"
            style={{
              border: "1px solid rgba(124,58,237,0.4)",
              color: "var(--accent-purple-light)",
            }}
          >
            Resume ↗
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden p-2 -mr-2 rounded-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed top-14 sm:top-16 left-0 right-0 z-40 flex flex-col py-3 md:hidden"
            style={{
              background: "rgba(7,7,15,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={closeMenu}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                className="px-6 py-3 font-mono text-xs tracking-[0.2em] uppercase"
                style={{
                  color: active === href.replace("#", "")
                    ? "var(--accent-purple-light)"
                    : "var(--text-secondary)",
                }}
              >
                {label}
              </motion.a>
            ))}
            <a
              href={PERSONAL_INFO.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mx-6 mt-2 py-2.5 rounded-lg text-center font-mono text-[11px]"
              style={{
                border: "1px solid rgba(124,58,237,0.4)",
                color: "var(--accent-purple-light)",
              }}
            >
              Download Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
