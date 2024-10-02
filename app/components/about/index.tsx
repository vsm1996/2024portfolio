import React from 'react'

import { useIntersectionObserver } from '@/app/utlis/hooks/useIntersectionObserver'

const AboutSection = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();

  return (
    <section ref={sectionRef}
      className={`group w-full pb-8 px-2 lg:px-24 mt-5 mb-12 flex flex-col items-center text-base-300 opacity-0 transition-all ease-in-out duration-500 
    ${isVisible ? `animate-fadeInUp` : ''}`}
    >
      <h2 className='w-full text-center text-2xl mb-4 transition-all duration-300 hover:underline'>
        I&apos;m a Full-stack Developer based in the Bay Area.
      </h2>
      <h3 className='w-full md:w-2/5 text-center text-lg transition-all duration-300 hover:scale-105 mb-6'>
        My passion is crafting responsive, intuitive UI/UX and building secure, high-performance back-end systems.
        My mission — to explore the intersection of art and technology, blending creativity with functionality.
      </h3>
      <p className='w-full md:w-2/5 text-center text-xl transition-all duration-300 hover:scale-105 group-hover:text-gold-base'>Feel free to explore my previous projects below!</p>
    </section>
  )
}

export default AboutSection
