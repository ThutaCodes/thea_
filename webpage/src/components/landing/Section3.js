import React from 'react'
import {motion} from 'framer-motion'
import LandingCard from '@/components/LandingCard';

function Section3() {
  return (
    <motion.div
    initial={{opacity: 0, y: 50}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 1}}
    className='w-full lg:container mx-auto flex flex-row items-center justify-center my-20'>
        <div className='relative w-full p-5 md:px-10 py-4 gap-8 flex flex-col lg:flex-row'>
        <div className='h-full w-full lg:w-1/2'>
                <img src='./assets/images/section3.png' alt='Thea Solutions' />  
        </div>
        <div className='flex flex-col h-full w-full lg:w-1/2'>
            <span className='text-lg accent-color px-1'>
                How we do it?
            </span>
            <div className='text-3xl md:text-5xl w-4/5 font-thin'>
                Your dedicated partner in technological transformation
            </div>
            <div className='relative w-full py-4 gap-4 lg:gap-8 grid grid-cols-1 md:grid-cols-2'>
            <LandingCard/>
            <LandingCard/>
            <LandingCard/>
            <LandingCard/>
        </div>
        </div>
        </div>
    </motion.div>
  )
}

export default Section3