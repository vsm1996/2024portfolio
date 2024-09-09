import Link from 'next/link'
import React from 'react'
import Navbar from '../navbar'

const Hero = () => {
  return (
    <section className='w-full bg-gradient-to-b from-primary-content to-accent-content text-white' style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 79%, 0 100%)' }}>
      <Navbar />
      <div className='px-12 mt-12 pb-16 md:px-24 md:pt-24 md:pb-36 flex flex-col items-center justify-between md:flex-row'>
        <div className='mt-6 md:m-0'>
          <h1 className='text-8xl md:w-1/4 md:text-9xl font-bold text-balance'>
            Vanessa
            <span className='text-neutral-content text-balance'> Martin </span>
          </h1>
          <p className='mb-6'>Development, Deployment, and Maintenance.</p>
        </div>
        <Link href='#porftolio' className='p-4 border rounded-[16px] hover:text-neutral-content hover:border-current hover:drop-shadow-lg'>My Work</Link>
      </div>
    </section>
  )
}

export default Hero
