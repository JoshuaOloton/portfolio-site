"use client";

import { inter } from "@/app/fonts"
import { projects } from "@/app/data/projects"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"


type Props = {}

const Projects = ({}: Props) => {
  return (
    <section className={`${inter.className} section_layout`}>
      <div className="flex justify-center items-center relative h-screen">
        <div className="absolute top-4 md:top-6">
          <h3 className="section_header">MY WORK IN ACTION</h3>
          <p className="section_subheader">Explore the projects that showcase my skills and creative solutions.</p>
        </div>
        <div className="flex gap-8 w-full overflow-x-scroll no-scrollbar snap-x snap-mandatory relative">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="w-full px-52 py-10 flex-shrink-0 flex flex-col snap-center"
            >
              <h4>{project.title}</h4>
              {/* <p>{project.description}</p> */}
              <img src={project.image} alt={project.title} />
              <div>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a href={project.source}>Source Code</a>
              <a href={project.visit}>Visit Site</a>
            </div>
          ))}
          {/* <ChevronLeft onClick={() => {
            scrollBy({ left: -300,
            behavior: 'smooth'
            });
          }} className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer" />
          <ChevronRight onClick={() => {
            scrollBy({ left: 300,
            behavior: 'smooth'
            });
          }} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer" /> */}
        </div>
      </div>
    </section>
  )
}

export default Projects