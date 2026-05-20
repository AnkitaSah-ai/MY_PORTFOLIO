"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
          style={{ background: "var(--bg-primary)" }}
        >
          {/* Spinning ring */}
          <div className="relative w-16 h-16">
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px solid transparent",
                borderTopColor: "var(--accent-purple)",
                borderRightColor: "var(--accent-cyan)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
            />
            <div
              className="absolute inset-2 rounded-full flex items-center justify-center"
              style={{ background: "var(--bg-secondary)" }}
            >
              <span className="text-xl select-none">✦</span>
            </div>
          </div>

          {/* Name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent-purple-light)" }}
          >
            ANKITA SAH
          </motion.p>

          {/* Loading bar */}
          <div
            className="w-40 h-px overflow-hidden"
            style={{ background: "rgba(124,58,237,0.2)" }}
          >
            <motion.div
              className="h-full"
              style={{ background: "linear-gradient(90deg, var(--accent-purple), var(--accent-cyan))" }}
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
