"use client";

import { FaArrowDownLong } from "react-icons/fa6";
import { HeroHighlight } from "./ui/hero-highlight";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { inter } from "@/app/fonts";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import { useScrollToSection } from "@/app/hooks/useScrollToSection";

type Props = {
  onProjectsClick: () => void;
}

const Hero = ({ onProjectsClick }: Props) => {

  return (
    <section className={`${inter.className} w-full h-screen snap-start`}>
      {/* <HeroHighlight> */}
      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] h-full w-full max-w-5xl m-auto">
        <div className="flex flex-col justify-center">
          <motion.h3 className="font-bold text-4xl md:text-6xl my-7 flex">
            <motion.p
              initial={{ 
                x: -100, 
                opacity: 0 
              }}
              animate={{ 
                x: [0, 10, 0], 
                opacity: 1 
              }}
              transition={{ 
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
            >
              Hi!
              <span className="inline-block animate-jiggle">&#128075;</span>
            </motion.p>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 2 }}
            >
              I'm Joshua
            </motion.span>
          </motion.h3>
          <motion.h3 
            className="font-semibold text-lg md:text-2xl tracking-[8px] text-gray-500 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2.5 }}
          >
            <Typewriter
              words={[
                "Software Engineer",
                "Web Developer",
                "Tech Enthusiast",
                "Mobile App Developer",
              ]}
              loop={true}
              cursor={true}
              cursorColor="#FF6F61"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={2500}
            />
          </motion.h3>
          <motion.p 
            className="mt-5 text-base leading-loose"
            initial={{ 
              opacity: 0,
              y: 50
            }}
            animate={{ 
              opacity: 1,
              y: 0
            }}
            transition={{ 
              duration: 1, 
              delay: 3.5 
            }}
          >
            I craft intuitive, scalable full-stack applications that bring ideas to life. From clean APIs to dynamic interfaces, I deliver efficient solutions that elevate user experience. Ready to build something exceptional?
          </motion.p>
          <motion.p 
            className="italic mt-6 text-lg"
            initial={{ 
              opacity: 0,
              x: -200
            }}
            animate={{ 
              opacity: 1,
              x: [10, 0]
            }}
            transition={{ 
              duration: 0.5, 
              delay: 4.5
            }}
          >
            <Typewriter
              words={[
                "Let's create something incredible together!"
              ]}
              loop={1}
              cursor={false}
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={2500}
            />
          </motion.p>
          <motion.div 
            className="my-10"
            initial={{ 
              opacity: 0,
              x: -200
            }}
            animate={{ 
              opacity: 1,
              x: [10, 0]
            }}
            transition={{ 
              duration: 0.5, 
              delay: 4.5
            }}
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black text-white flex items-center space-x-2"
              onClick={onProjectsClick}
            >
              <FaArrowDownLong />
              <span>See My Projects</span>
            </HoverBorderGradient> 
          </motion.div>
        </div>
      </div>
      {/* </HeroHighlight> */}
    </section>
  );
};

export default Hero;
