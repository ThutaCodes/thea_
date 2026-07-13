import React from 'react'

function LandingCard() {
  return (
    <div className='py-6 lg:py-8 px-4 lg:px-8 hover:-translate-y-2 transition-all duration-300 border border-color backdrop-blur-xl transparent-white w-full flex flex-col gap-y-4'>
        <div className='paragraph-color text-lg'>Thea Solutions</div>
        <div className='paragraph-color text-lg font-thin line-clamp-2 lg:line-clamp-3'>Bespoke software development, enterprise-grade AI, and intelligent automation solutions engineered specifically for SMEs to streamline operations and scale with confidence.</div>
    </div>
  )
}

export default LandingCard