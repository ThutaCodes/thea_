import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

function Footer() {
  return (
    <div className='w-full transparent-white overflow-hidden'>
        <motion.div 
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className='w-full lg:container mx-auto lg:px-10 flex flex-col md:flex-row items-end justify-end lg:justify-between'> 
            <div className='w-full lg:w-2/3 h-fit my-6 lg:my-10 flex flex-col justify-center lg:justify-start items-center lg:items-start'>
                <div className='text-2xl lg:text-5xl w-full md:w-4/5 px-6 lg:px-0'>
                Don&apos;t Wait - transform your business <span className='accent-color'>today!</span>
                </div>
            </div>
            <div className='w-full lg:w-1/3 h-fit my-6 lg:my-10 md:pr-10 flex flex-col justify-center items-center md:items-start'>
                <span className='text-lg lg:text-xl w-full px-6'>Leave your email, we will contact you</span>
                <div className='flex gap-3 px-6 w-full mt-4'>
                    <input className='py-3 px-4 rounded-[8px] bg-gray-900/70 border border-gray-800 w-full' type='email' placeholder='Email Address' />
                    <button className='py-3 px-6 rounded-[8px] bg-[#F1F1F0] text-base text-[#1A1816]'>Submit</button>
                </div>
            </div>
        </motion.div>
        <motion.div 
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        delay={0.5}
        transition={{duration: 1}}
        className='w-full lg:container mx-auto px-6 lg:px-10 py-10 flex flex-row justify-between items-center gap-8'>
        <div className='font-black text-2xl'>
                Thea
                <span className='text-3xl accent-color'>Solutions</span>      
            </div>
            <div className='w-fit gap-y-4 gap-x-6 text-lg flex justify-end opacity-70 flex-wrap'>
                <Link href='/'>About</Link>
                <Link href='/'>Services</Link>
                <Link href='/'>Pricing</Link>
                <Link href='/'>Testimonials</Link>
                <Link href='/'>FAQ</Link>
                <Link href='/'>Blog</Link>
                <Link href='/'>Contact</Link>
            </div>
        </motion.div>
    </div>
  )
}

export default Footer