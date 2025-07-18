import Image from "next/image";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import ContactMe from "@/components/ContactMe";

export default function Home() {
  return (
   <main className="flex flex-col justify-center items-center z-0">
     <div className="px-10 py-0 md:px-0 snap-y snap-mandatory overflow-y-scroll h-screen w-screen">
      <Hero />
      <Services />
      <Projects />
      <Skills />
      {/* <ContactMe /> */}
       {/* <Education /> */}
     </div>
   </main>
  );
}
