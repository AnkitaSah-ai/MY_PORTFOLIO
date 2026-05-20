import { PERSONAL_INFO } from "@/data/constants";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center min-h-screen">
      {/* Placeholder — replaced in Phase 2 with Hero section */}
      <div className="text-center px-6">
        <p className="font-mono text-sm tracking-widest mb-4" style={{ color: "var(--accent-purple-light)" }}>
          PHASE 1 COMPLETE
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold mb-4"
          style={{
            background: "linear-gradient(135deg, #9d8ff5, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
          {PERSONAL_INFO.title}
        </p>
        <p className="text-sm mt-2 font-mono" style={{ color: "var(--text-muted)" }}>
          {PERSONAL_INFO.subtitle}
        </p>
      </div>
    </main>
  );
}
