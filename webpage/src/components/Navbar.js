import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div className='w-full fixed top-0 my-8 flex z-30 justify-center items-center'>
        <div className='bg-black/50 backdrop-blur-xl w-[90%] py-6 px-6 md:px-10 flex items-center justify-between rounded-full border border-color'>
            <div className='font-black text-2xl'>
                Thea
                <span className='text-3xl accent-color'>Solutions</span>      
            </div>
            <div className='w-fit hidden gap-y-4 gap-x-6 text-lg md:flex'>
                <Link href='/'>About</Link>
                <Link href='/'>Services</Link>
                <Link href='/'>Pricing</Link>
                <Link href='/'>Testimonials</Link>
                <Link href='/'>FAQ</Link>
                <Link href='/'>Blog</Link>
                <Link href='/'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar;