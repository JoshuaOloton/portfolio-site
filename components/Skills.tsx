"use client";

import { inter } from "@/app/fonts";
import { motion, Variants } from "framer-motion";
import { skills } from "@/app/data/skills";
import React from "react";
import Favorites from "./Favorites";
import Languages from "./Languages";
import Frameworks from "./Frameworks";
import Tools from "./Tools";
import Overview from "./Overview";

/**
 * SkillsSection
 * - Responsive grid (left: lists, right: radar/progress-style area on large screens)
 * - Accessible: roles, aria-labels, visible text alternatives for progress
 * - Animations: staggered entrance + subtle hover scaling
 */

const containerSlideIn = (direction: "left" | "right"): Variants  => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -50 : 50
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.04,
      delay: 0.4,
      duration: 0.5
    },
  },
});

const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
};

const header: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.02
    }
  }
}

const span: Variants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 }
}

export default function SkillsSection() {
  const titleText: string = "Skills & Expertise";

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className={`${ inter.className } section-layout`}
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <motion.h2
            id="skills-heading"
            className="section-header"
            variants={header}
            initial="initial"
            whileInView="animate"
            // viewport={{ once: true }}
          >
            {titleText.split("").map((char, index) => (
              <motion.span 
                key={index}
                variants={span}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="inline-block whitespace-pre"
              >
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="section-subheader max-w-2xl m-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            // viewport={{ once: true }}
          >
            Languages, frameworks and tools I use daily, with proficiency
            levels and my favorites highlighted.
          </motion.p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left: Favorites + Languages */}
          <motion.div
            variants={containerSlideIn("left")}
            initial="hidden"
            whileInView="show"
            // viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Favorites */}
            <Favorites data={skills.favorites} itemVariant={item} />

            {/* Languages */}
            <Languages data={skills.languages} itemVariant={item} />

            {/* Frameworks */}
            <Frameworks data={skills.frameworks} itemVariant={item} />
          </motion.div>

          {/* Right: Tools and visual */}
          <motion.aside
            variants={containerSlideIn("right")}
            initial="hidden"
            whileInView="show"
            // viewport={{ once: true }}
            className="space-y-6"
            aria-labelledby="tools-heading"
          >
            <Tools data={skills.tools} itemVariant={item} />

            {/* Visual summary - simple circular proficiency chart */}
            <Overview data={skills.favorites} itemVariant={item} />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
