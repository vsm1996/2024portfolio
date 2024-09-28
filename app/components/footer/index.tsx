import React from 'react'
import GithubLogo from '@/public/assets/logo/github/github-mark-white.svg'
import LinkedInLogo from '@/public/assets/logo/linkedin/linkedin-white.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-5/12 md:w-2/12 flex items-center justify-around mt-7'>
      <Link
        className='group relative p-6 hover:motion-reduce:animate-bounce ease-in-out duration-300 hover:transition-all'
        target='_blank'
        href={'https://www.linkedin.com/in/vsm1996'}
        aria-label="Link to Vanessa's LinkedIn Profile"
      >
        <Image width={63} src={LinkedInLogo} alt='linkedin logo' className='group-hover:scale-125 group-active:scale-100' />
      </Link>
      <Link
        className='group relative p-6 hover:motion-reduce:animate-bounce ease-in-out duration-300 hover:transition-all'
        target='_blank'
        href={'https://github.com/vsm1996/'}
        aria-label="Link to Vanessa's GitHub Profile"
      >
        <Image width={63} src={GithubLogo} alt='github logo' className='group-hover:scale-125 group-active:scale-100' />
      </Link>
    </div>
  )
}

export default Footer
