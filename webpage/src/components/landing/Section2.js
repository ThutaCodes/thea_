import React from 'react';
import {motion} from 'framer-motion';
import LandingCard from '@/components/LandingCard';

function Section2() {
  return (
    <motion.div 
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}

    className='w-full lg:container mx-auto flex flex-col items-center justify-center my-20'>
        <div className='flex flex-col w-full px-6 md:w-full md:px-10 md:py-10'>
            <span className='text-lg accent-color'>
                What we do?
            </span>
            <p className='text-xl md:text-3xl w-full md:w-2/3 font-thin opacity-70'>
            Operating as a fully remote firm, our dedicated team of expert engineers, project designers, and industry specialists delivers excellence from anywhere in the world, making high-impact technology accessible to growing businesses.
            </p>
        </div>
        <div className='h-full w-full absolute flex items-center justify-center'>
            <div className='h-64 w-64 light-color rounded-full blur-[210px]'></div>
        </div>
        <div className='relative w-full p-5 md:px-10 py-4 gap-4 lg:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <LandingCard/>
            <LandingCard/> 
            <LandingCard/>
            <LandingCard/>
            <LandingCard/>
            <LandingCard/>
        </div>
    </motion.div>
  )
}

export default Section2