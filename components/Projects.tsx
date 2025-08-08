"use client";

import { ChevronLeft, ChevronRight, Dot, SquareArrowOutUpRight } from "lucide-react";
import { inter } from "@/app/fonts";
import { motion } from "motion/react";
import { projects } from "@/app/data/projects";
import React, { useRef, useEffect, useState } from "react";

type Props = {
  ref: React.RefObject<HTMLDivElement>;
};

const Projects = ({ ref }: Props) => {
  const projectsCarouselRef = useRef<HTMLDivElement | null>(null);

  // State to manage visibility of left and right buttons
  // Initially, show the right button and hide the left button
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const ref = projectsCarouselRef.current;
    
    if (ref) {
      ref.scrollLeft = 0; // Reset scroll position on mount

      const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = ref;
        setShowLeftButton(scrollLeft > 0);
        setShowRightButton(scrollWidth - scrollLeft - clientWidth > 1);
      };

      ref.addEventListener("scroll", handleScroll);
      return () => {
        ref?.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  
  return (
    <section className={`${inter.className} section-layout h-full`} ref={ref} id="projects">
      <div className="flex justify-center items-center relative h-screen">
        <div className="absolute top-4 md:top-6">
          <h3 className="section-header">MY PROJECTS AT A GLANCE</h3>
          <p className="section-subheader">
            Explore the projects that showcase my skills and creative solutions.
          </p>
        </div>
        <div aria-label="Projects Carousel" className="flex gap-8 w-full overflow-x-scroll snap-x snap-mandatory no-scrollbar" ref={projectsCarouselRef}>
          {projects.map((project) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              key={project.id}
              className="w-full px-52 py-10 flex-shrink-0 flex flex-col gap-0 snap-center rounded-2xl shadow-lg"
            >
              <motion.img 
                initial={{ y: -100 }}
                whileInView={{ y: 0 }}
                // transition={{ ease: "easeOut" }}
                src={project.image} 
                className="w-3/5 mx-auto my-3" 
                alt={project.title} 
              />
              <h4 className="text-2xl tracking-wider font-bold my-2">
                {project.title}{" "}
                <a href={project.visit} target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-400 transition-colors duration-200">
                  <SquareArrowOutUpRight className="inline" />
                </a>
              </h4>
              <hr className="w-1/5 m-auto border border-yellow-500 my-2" />
              <p className="text-justify tracking-wide leading-7 my-3">{project.description.substring(0,200)}...</p>
              <div className="flex flex-wrap items-center justify-center gap-1 my-3">
                {project.tags.map((tag, index) => (
                  <React.Fragment key={index}>
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{ delay: (index + 1) * 0.95/5 }} 
                      className="bg-[#1F1F1F] text-gray-200 border border-gray-700 rounded-full px-4 py-1 text-sm font-medium shadow-sm hover:bg-[#2A2A2A] transition-colors duration-200"
                      >
                        {tag}
                      </motion.span>
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{ delay: (index + 1) * 0.95/5 }} 
                      className="text-gray-300 last:hidden"
                    >
                      <Dot size={26} />
                    </motion.span>
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        { showLeftButton && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 group p-1 rounded-full">
            <ChevronLeft
                onClick={() => {
                  projectsCarouselRef.current?.scrollBy({
                    left: -300,
                    behavior: "smooth",
                  });
                }}
                size={26}
                className="cursor-pointer opacity-30 group-hover:opacity-100 group-hover:duration-500 transition-opacity"
                />
          </div>
        )}
        { showRightButton && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 group p-1 rounded-full">
            <ChevronRight
              onClick={() => {
                projectsCarouselRef.current?.scrollBy({
                  left: 300,
                  behavior: "smooth",
                });
              }}
              size={26}
              className="cursor-pointer opacity-30 group-hover:opacity-100 group-hover:duration-500 transition-opacity"
            />
          </div>
        )}   
      </div>
    </section>
  );
};

export default Projects;
