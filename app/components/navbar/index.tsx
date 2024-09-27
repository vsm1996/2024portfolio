import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useIntersectionObserver } from '@/app/utlis/hooks/useIntersectionObserver'

interface NavLink {
  href: string,
  title: string,
}

const navLinks: NavLink[] = [
  {
    href: '#about',
    title: 'About',
  },
  {
    href: '#portfolio',
    title: 'Portfolio',
  },
]

const Navbar = () => {
  const [sectionRef, isVisible] = useIntersectionObserver();
  return (
    <nav ref={sectionRef}
      className={`opacity-0 w-full bg-transparent flex items-center justify-between py-2 px-12 md:px-24 border border-t-0 border-l-0 border-r-0 border-b-1
      ${isVisible ? `motion-safe:animate-fadeIn` : ''}
      `}
    >
      <div>
        <span>
          <Image
            src='/assets/svg/lotus.svg'
            alt={'lotus'}
            sizes="75px"
            // fill
            width={75}
            height={75}
            className='h-full rounded-md motion-safe:animate-[pulse_3s_ease-in-out_infinite]'
          />
        </span>
      </div>
      <ul className='w-fit flex items-center p-5 gap-4'>
        {navLinks.map(({ href, title }: NavLink, index: number) => (
          <li
            key={index}
            className='text-base-300 cursor-pointer ml-3 ease-in-out duration-300 hover:text-gold-base hover:motion-safe:animate-wiggle hover:transition-all active:border-b-2 active:border-gold-light active:text-shadow-sm active:text-gold-light'
          >
            <Link href={href}>
              {title}
            </Link>
          </li>
        ))}
        <li
          className='text-base-300 cursor-pointer ml-3 ease-in-out duration-300 hover:text-gold-base hover:motion-safe:animate-wiggle hover:transition-all'
        >
          <Link href="#contact">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:hidden ease-in-out duration-300 hover:motion-safe:animate-wiggle hover:text-gold-base hover:transition-all">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <span className='hidden md:inline-block text-base-300 ease-in-out duration-300 hover:text-gold-base hover:motion-safe:animate-wiggle hover:transition-all active:border-b-2 active:border-gold-light active:text-shadow-sm active:text-gold-light'>Contact Me</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
