"use client";

import { PERSONAL_INFO } from "@/data/constants";

export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center"
      style={{ borderTop: "1px solid rgba(124,58,237,0.12)" }}
    >
      <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
        Designed &amp; Built by{" "}
        <span style={{ color: "var(--accent-purple-light)" }}>{PERSONAL_INFO.name}</span>
        {" "}·{" "}
        <span style={{ color: "var(--text-muted)" }}>
          {new Date().getFullYear()}
        </span>
      </p>
      <p className="font-mono text-xs mt-1" style={{ color: "rgba(90,83,110,0.5)" }}>
        Next.js · Three.js · Framer Motion · Tailwind CSS
      </p>
    </footer>
  );
}
