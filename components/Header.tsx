"use client";

import { SocialIcon } from 'react-social-icons';
import { motion } from 'motion/react';

type Props = {}

const Header = ({}: Props) => {
  return (
    <header className='sticky top-0 flex justify-between items-center p-5 max-w-6xl mx-auto'>
      <motion.div 
        className='flex gap-4'
        initial={{ 
          opacity: 0,
          scale: 0,
          x: -500
        }}
        animate={{ 
          opacity: 1,
          scale: 1,
          x: 0
        }}
        transition={{ 
          duration: 1
        }}
      >
        <SocialIcon 
          url='https://twitter.com/Oloton_J' 
          className='cursor-pointer transition-transform hover:animate-pulse hover:scale-90'
          style={{ width: 35, height: 35 }}  
          bgColor='#24292e'
          fgColor='gray'
        />
        <SocialIcon 
          url='https://www.linkedin.com/in/joshua-oloton' 
          className='cursor-pointer transition-transform hover:animate-pulse hover:scale-90'        
          style={{ width: 35, height: 35 }}
          bgColor='#24292e'
          fgColor='gray'  
        />
        <SocialIcon 
          url='https://github.com/JoshuaOloton'
          className='cursor-pointer transition-transform hover:animate-pulse hover:scale-90' 
          style={{ width: 35, height: 35 }}    
          bgColor='#24292e'   
          fgColor='gray'
        />
      </motion.div>

      <motion.div 
        className='flex items-center gap-2'
        initial={{ 
          opacity: 0,
          scale: 0,
          x: 500
        }}
        animate={{ 
          opacity: 1,
          scale: 1,
          x: 0
        }}
        transition={{ 
          duration: 1.5
        }}
      >
        <p className='cursor-pointer text-gray-500 text-sm font-semibold hidden md:block'>Get in touch</p>
        <SocialIcon 
          network='email'
          url='mailto:olotonjoshua23@gmail.com' 
          style={{ width: 35, height: 35 }}
          bgColor='#24292e'   
          fgColor='gray'  
          className='transition-transform hover:animate-pulse hover:scale-90'
        />
      </motion.div>
    </header>
  )
}

export default Header