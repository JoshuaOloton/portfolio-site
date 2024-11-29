import React from 'react'
import { inter } from '@/app/fonts'

const Hero = () => {
  return (
    <section className={`${inter.className} w-full mt-28 mb-[1000px]`}>
      <div className='grid grid-cols-[3fr_2fr]'>
        <div>
          <h3 className='font-bold text-7xl my-7'>Hi, I'm Joshua &#128075;</h3>
          <h3 className='font-semibold text-5xl tracking-widest'>Full-Stack Developer</h3>
          <p className='mt-5 text-base leading-loose'>
            A Passionate Software Engineer Turning Ideas Into Reality. With a background in web development and a knack for crafting intuitive, scalable solutions, I specialize in building full-stack applications that enhance user experiences. From designing seamless APIs to engineering dynamic frontends, I bring ideas to life with clean, efficient code.
          </p>
          <p className='italic mt-6 text-lg'>Let's create something incredible together!</p>
        </div>
      </div>
    </section>
  )
}

export default Hero