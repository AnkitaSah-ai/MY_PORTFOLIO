export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  status: "Completed" | "In Progress";
  thumbnail: string;
  accentColor: string;
};

const PROJECTS: Project[] = [
  {
    title: "CRUD Manager App",
    description:
      "A full-stack CRUD application for managing data with a clean UI, REST API backend, and MongoDB database. Solves real-world data management problems.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/AnkitaSah-ai",
    live: "",
    status: "Completed",
    thumbnail: "/projects/crud.png",
    accentColor: "#7c3aed",
  },
];

export default PROJECTS;
