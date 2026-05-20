export const PERSONAL_INFO = {
  name: "ANKITA SAH",
  firstName: "Ankita",
  lastName: "Sah",
  title: "Full Stack & GenAI Developer",
  subtitle: "2nd Year Student · MDC Course · Siliguri",
  college: "Surya Sen Mahavidyalaya",
  location: "Siliguri, West Bengal",
  email: "ankitasah@example.com",
  github: "https://github.com/AnkitaSah-ai",
  linkedin: "https://linkedin.com/in/ankita-sah",
  resume: "/resume.pdf",
  bio: "I'm a 2nd year student at Surya Sen Mahavidyalaya, Siliguri, pursuing an MDC course. Passionate about Full Stack development and Generative AI, I build intelligent web experiences that merge creativity with cutting-edge technology.",
  openToWork: true,
} as const;

export const SKILLS = {
  languages: ["Python", "TypeScript", "JavaScript", "Java"],
  frontend: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
  backend: ["Node.js", "Express.js", "REST APIs", "FastAPI"],
  ai: ["LangChain", "OpenAI API", "Hugging Face", "Prompt Engineering"],
  databases: ["MongoDB", "PostgreSQL", "Firebase"],
  tools: ["Git", "GitHub", "Vercel", "VS Code", "Figma"],
} as const;

export const EDUCATION = [
  {
    institution: "Surya Sen Mahavidyalaya",
    location: "Siliguri, West Bengal",
    degree: "Bachelor of Science",
    course: "MDC Course",
    year: "2023 – Present",
    description: "2nd Year student focused on computer science fundamentals and software development.",
  },
] as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const PROJECTS: {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  thumbnail: string;
  status: "Completed" | "In Progress";
}[] = [];
