"use client";

import { useScrollToSection } from '@/app/hooks/useScrollToSection';
import { FloatingNav } from './ui/floating-navbar'
import { CiHome, CiCircleInfo  } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { GrProjects } from "react-icons/gr";

const Navbar = () => {

  const { servicesRef } = useScrollToSection();

  const navLinks = [
    {
      name: 'Home',
      link: '/',
      icon: <CiHome />
    },
    {
      name: 'About',
      link: '#about',
      icon: <CiCircleInfo />
    },
    {
      name: 'Services',
      link: '#services',
      icon: <CiCircleInfo />,
      ref: servicesRef
    },
    {
      name: 'Projects',
      link: '#projects',
      icon: <GrProjects />
    },
    {
      name: 'Contact',
      link: '#contact',
      icon: <IoIosContact />
    },
  ]

  return (
    <FloatingNav navItems={navLinks} />
  )
}

export default Navbar