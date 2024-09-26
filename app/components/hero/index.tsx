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
      <div className={`opacity-0 px-12 mt-12 pb-16 md:px-24 md:pt-24 md:pb-36 flex flex-col items-center justify-between lg:flex-row  ${isVisible ? `motion-safe:animate-fadeInRight` : ''}`}>
        <div className='group text-center mt-6 lg:m-0 lg:text-left'>
          <h1 className='text-7xl mb-4 md:w-1/4 md:text-9xl font-bold text-balance'>
            Vanessa
            <span className='text-neutral-content text-balance group-hover:text-gold-base ease-in-out duration-700 group-hover:transition-all'> Martin </span>
          </h1>
          <p className='mb-6'>Website Development, Deployment, and Maintenance.</p>
        </div>
        {/* <p className='w-1/2 text-xl'>I&apos;m a Full-stack Developer in the Bay Area.

            My passion is creating responsive, intuitive UI/UX and a secure, fast back-end.

            Mission — to explore the intersection of art and technology.</p> */}

        <Link href='/assets/res/vanessa-martin-resume.docx' download="VanessaMartin_Resume.docx" className='p-4 text-lg text-nowrap border rounded-[16px] mt-4 lg:mt-0 ease-in-out duration-300 animate-bounce hover:text-gold-base hover:border-current hover:drop-shadow-lg hover:transition-all'>My Resume</Link>


      </div>
      {/* <Image src={Waves} alt="" className='w-full absolute top-0 left-0' /> */}
    </section>
  )
}

export default Hero
