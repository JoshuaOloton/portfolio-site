"use client";

import { inter } from "@/app/fonts";
import { motion } from "motion/react";
import Skill from "./Skill";

const Skills = () => {
  const titleText: string = "SKILLS";

  return (
    <section className={`${inter.className} section-layout`} id="skills">
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <motion.h2
            className="section-header"
            initial="initial"
            whileInView="animate"
            transition={{
              staggerChildren: 0.02,
            }}
            // viewport={{ once: true }}
          >
            {titleText.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  initial: { y: 50, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="inline-block whitespace-pre"
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="section-subheader"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            // viewport={{ once: true }}
          >
            A list of technologies that I am proficient in.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-4 place-content-center gap-8 h-full"
        >
          <p className="text-2xl font-bold text-center">
            Use SVG Framer Motion Animation to animate Skill SVGs
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
