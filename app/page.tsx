import Image from "next/image";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";

export default function Home() {
  return (
   <>
     <Hero />
     <Education />
     <Projects />
   </>
  );
}
