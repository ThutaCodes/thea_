import React from 'react'
import {motion} from 'framer-motion'

function Section4() {
  return (
    <motion.div 
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
    className='w-full lg:container mx-auto flex flex-row items-center justify-center my-20'>
        <div className='relative w-full p-5 gap-6 md:px-10 py-4 flex flex-col items-center md:flex-row'>
          <div className='flex flex-col gap-y-6 h-full w-full md:w-1/2'>
              <span className='text-lg accent-color px-1'>
                Why do we need it?
              </span>
              <div className='text-3xl md:text-5xl w-4/5 font-thin'>
                Build a robust foundation for future success through the power of AI
              </div>
              <div className='text-base md:text-lg w-4/5 font-thin opacity-70 line-clamp-4'>
              Our mission focuses on providing growing businesses with custom software, optimized workflows, and intelligent automation to eliminate manual bottlenecks and maintain a competitive advantage. Whether automating repetitive daily tasks or building a platform to accelerate growth, we help you scale with confidence.
              </div>
          </div>
          <div className='h-full w-full md:w-1/2 relative'>
            <img src='./assets/images/section4.jpg' className='contrast-125' alt='Thea Solutions' /> 
            <div className='absolute top-0 h-full w-full bg-gradient-to-r from-[#03050f] via-white/10 to-transparent'/>
          </div>
        </div>
    </motion.div>
  )
}

export default Section4