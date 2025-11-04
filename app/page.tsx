"use client";

import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import ContactMe from "@/components/ContactMe";
import { useRef } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contactMeSectionRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToProjectSection = () => projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
   <main className="flex flex-col justify-center items-center z-0">
     <div ref={containerRef} className="px-10 py-0 snap-y snap-mandatory overflow-y-scroll h-screen w-screen relative">
      <Hero onProjectsClick={scrollToProjectSection} />
      <AboutMe containerRef={containerRef} />
      <Services />
      <Projects ref={projectsSectionRef} />
      <Skills />
      <ContactMe ref={contactMeSectionRef} />
       {/* <Education /> */}
       <Footer />
     </div>
   </main>
  );
}
