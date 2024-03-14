import About from "@/components/about";
import Divider from "@/components/divider";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4">
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
