import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
    </main>
  );
}
