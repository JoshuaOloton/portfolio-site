"use client";

import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { inter } from "@/app/fonts";
import { motion } from "motion/react";
import { projects } from "@/app/data/projects";
import { useRef } from "react";

type Props = {};

const Projects = ({}: Props) => {
  const projectsRef = useRef<HTMLDivElement>(null);

  return (
    <section className={`${inter.className} section_layout h-full`}>
      <div className="flex justify-center items-center relative h-screen">
        <div className="absolute top-4 md:top-6">
          <h3 className="section_header">MY PROJECTS AT A GLANCE</h3>
          <p className="section_subheader">
            Explore the projects that showcase my skills and creative solutions.
          </p>
        </div>
        <div className="flex gap-8 w-full overflow-x-scroll snap-x snap-mandatory no-scrollbar" ref={projectsRef}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full px-52 py-10 flex-shrink-0 flex flex-col gap-0 snap-center"
            >
              <motion.img 
                initial={{ y: -50 }}
                whileInView={{ y: 0 }}
                // transition={{ delay: 0.1 }}
                src={project.image} 
                className="w-3/5 mx-auto my-3" 
                alt={project.title} 
              />
              <h4 className="text-2xl tracking-wider font-bold my-2">{project.title}</h4>
              <hr className="w-1/5 m-auto border border-yellow-500 my-2" />
              <p className="text-justify tracking-wide leading-7 my-3">{project.description.substring(0,200)}...</p>
              <div>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a href={project.source}>Source Code</a>
              <a href={project.visit}>Visit Site</a>
            </div>
          ))}
        </div>
        <ChevronLeft
            onClick={() => {
              if (projectsRef.current) {
                projectsRef.current.scrollBy({
                  left: -300,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer"
          />
          <ChevronRight
            onClick={() => {
              if (projectsRef.current) {
                projectsRef.current.scrollBy({
                  left: 300,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          />
      </div>
    </section>
  );
};

export default Projects;
