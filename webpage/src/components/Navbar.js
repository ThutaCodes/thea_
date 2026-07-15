import React from 'react';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

function TikTokIcon({ size = 20, className = '' }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
  )
}

function Navbar() {
  return (
    <div className='w-full fixed top-0 my-1 flex z-30 justify-center items-center'>
        <div className='bg-black/50 backdrop-blur-xl w-[95%] py-1 px-6 md:px-10 flex items-center justify-between rounded-xl border border-color'>
            <img src='/dark_tranStacked_logo.png' alt='Thea Solutions' className='h-24 md:h-28 w-auto' />
            <div className='w-fit hidden items-center gap-y-4 gap-x-6 text-lg md:flex'>
                <Link href='#about'>About</Link>
                <Link href='#services'>Services</Link>
                {/* <Link href='/'>Pricing</Link> */}
                {/* <Link href='/'>Testimonials</Link> */}
                <Link href='#faqs'>FAQ</Link>
                {/* <Link href='/'>Blog</Link> */}
                <Link href='#contact'>Contact</Link>
                <div className='flex gap-3 ml-4'>
                   <Link href='https://www.linkedin.com/company/theasolutionss' target='_blank' rel='noopener noreferrer' className='hover:opacity-100 opacity-70 transition-opacity'>
                        <Linkedin size={20} />
                    </Link>
                    <Link href='https://www.tiktok.com/@theasolutions_?_r=1&_t=ZS-980MdkL0X9J' target='_blank' rel='noopener noreferrer' className='hover:opacity-100 opacity-70 transition-opacity'>
                        <TikTokIcon size={20} />
                    </Link>
                    <Link href='https://www.instagram.com/theasolutions_?igsh=ODc3ZmFrN2tkbDYw' target='_blank' rel='noopener noreferrer' className='hover:opacity-100 opacity-70 transition-opacity'>
                        <Instagram size={20} />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;