'use client'
import Link from 'next/link'
import React from 'react'
import Navbar from '../navbar'
import Image from 'next/image'

import { useIntersectionObserver } from '@/app/utlis/hooks/useIntersectionObserver'

import Waves from "@/public/assets/svg/waves.svg"

const Hero = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section ref={sectionRef} id='about' className='relative w-full bg-gradient-to-b from-primary-content to-accent-content text-white pb-16 md:pb-12' style={{ clipPath: 'polygon(0 0, 100% 0%, 100% 79%, 0 100%)' }}>
      <Navbar />
      <div className={`opacity-0 px-12 mt-12 pb-16 lg:px-24 lg:pt-24 lg:pb-36 flex flex-col items-center justify-between lg:flex-row  ${isVisible ? `animate-fadeInRight` : ''}`}>
        {/* gap-4 if adding about section back */}
        <div className='group flex flex-col items-center text-center mt-6 mb-8 lg:mb-0 gap-2 lg:m-0 lg:items-start'>
          <h1 className='text-7xl mb-4 lg:w-1/4 lg:text-9xl font-bold text-balance'>
            Vanessa
            <span className='text-neutral-content text-balance group-hover:text-gold-base ease-in-out duration-700 group-hover:transition-all'> Martin </span>
          </h1>
          <p className='text-xl'>Website Development, Deployment, and Maintenance.</p>
          {/* <p className='w-full lg:w-2/5 text-md text-balance lg:text-left'>I&apos;m a Full-stack Developer in the Bay Area.

            My passion is creating responsive, intuitive UI/UX and a secure, fast back-end.

            Mission — to explore the intersection of art and technology.</p> */}
        </div>

        <Link href='/assets/res/vanessa-martin-resume.docx' download="VanessaMartin_Resume.docx" aria-label="Button to download Vanessa's Resume" className='p-4 text-2xl text-nowrap border rounded-[16px] mt-4 lg:mt-0 ease-in-out duration-300 animate-bounce hover:text-gold-base hover:border-current hover:drop-shadow-lg hover:transition-all active:scale-95'>My Resume</Link>

      </div>
      {/* <Image src={Waves} alt="" className='w-full absolute top-0 left-0' /> */}
    </section>
  )
}

export default Hero
