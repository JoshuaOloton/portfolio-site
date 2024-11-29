import Image from "next/image";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
   <main className="flex flex-col justify-center items-center">
     <div className="w-full max-w-5xl">
       <Hero />
       <Services />
       {/* <Education />
       <Projects /> */}
     </div>
   </main>
  );
}
