"use client";

import { inter } from "@/app/fonts"
import { HoverEffect } from "./ui/card-hover-effect";
import { servicesData } from "@/app/data/services";
import { motion } from "motion/react";


const Services = () => {

  return (
    <section className={`${inter.className} section_layout`} id="services">
      {/* <div>
          <h2 className="section_header">WHAT I OFFER</h2>
          <p className="section_subheader">Bringing your ideas to life with expertise and creativity.</p>
        </div> */}
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