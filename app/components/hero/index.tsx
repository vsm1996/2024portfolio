import Link from 'next/link'
import React from 'react'
import Navbar from '../navbar'
import Image from 'next/image'

import Waves from "@/public/assets/svg/waves.svg"

const Hero = () => {
  return (
    <section id='about' className='relative w-full bg-gradient-to-b from-primary-content to-accent-content text-white pb-16 md:pb-12' style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 79%, 0 100%)' }}>
      <Navbar />
      <div className=' px-12 mt-12 pb-16 md:px-24 md:pt-24 md:pb-36 flex flex-col items-center justify-between md:flex-row'>
        <div className='group mt-6 md:m-0'>
          <h1 className='text-7xl md:w-1/4 md:text-9xl font-bold text-balance'>
            Vanessa
            <span className='text-neutral-content text-balance group-hover:text-secondary ease-in-out duration-700 group-hover:transition-all'> Martin </span>
          </h1>
          <p className='mb-6'>Website Development, Deployment, and Maintenance.</p>
        </div>
        <Link href='#porftolio' className='p-4 border rounded-[16px] hover:text-neutral-content hover:border-current hover:drop-shadow-lg'>My Work</Link>
        {/* <p className='w-1/2 text-xl'>I&apos;m a Full-stack Developer in the Bay Area.

My passion is creating responsive, intuitive UI/UX and a secure, fast back-end.

Mission — to explore the intersection of art and technology.</p> */}


      </div>
      {/* <Image src={Waves} alt="" className='w-full absolute top-0 left-0' /> */}
    </section>
  )
}

export default Hero
