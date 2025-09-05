"use client";

import { inter } from "@/app/fonts"
import { HoverEffect } from "./ui/card-hover-effect";
import { servicesData } from "@/app/data/services";
import { motion } from "motion/react";


const Services = () => {
  const titleText: string = "WHAT I OFFER";

  return (
    <section className={`${inter.className} section-layout border`} id="services">
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
          { titleText.split("").map((char, index) => (
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
          )) }
        </motion.h2>
        <motion.p
          className="section-subheader"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          // viewport={{ once: true }}
        >
          Bringing your ideas to life with expertise and creativity.
        </motion.p>
      </div>
      {/* <div className="grid grid-cols-1 gap-4 mt-14 md:grid-cols-2 lg:grid-cols-3">
        {data.map((service) => (
          <ServicesCard 
            key={service.id} 
            title={service.title} 
            description={service.description} 
          />
        ))}
    </div> */}
    <div 
      className="max-w-5xl mx-auto px-8"
    >
      <HoverEffect items={servicesData} />
    </div>
  </section>
  )
}


export default Services