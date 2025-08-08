"use client";

import { inter } from "@/app/fonts"
import { motion } from "motion/react";
import Skill from "./Skill"


const Skills = () => {
  return (
    <section className={`${inter.className} section-layout`} id="skills">
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <h2 className="section-header">SKILLS</h2>
          <p className="section-subheader">A list of technologies that I am proficient in.</p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="grid grid-cols-4 place-content-center gap-8 h-full"
          >
          <p className="text-2xl font-bold text-center">Use SVG Framer Motion Animation to animate Skill SVGs</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills