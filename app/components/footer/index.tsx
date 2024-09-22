import React from 'react'
import GithubLogo from '@/public/assets/logo/github/github-mark-white.svg'
import LinkedInLogo from '@/public/assets/logo/linkedin/linkedin-white.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-5/12 md:w-2/12 flex items-center justify-around mt-7'>
      <Link className='relative p-6 hover:animate-bounce ease-in-out duration-300 hover:transition-all' target='_blank' href={'https://www.linkedin.com/in/vsm1996'}>
        <Image width={50} src={LinkedInLogo} alt='linkedin logo' />
      </Link>
      <Link className='relative hover:animate-bounce ease-in-out duration-300 hover:transition-all' target='_blank' href={'https://github.com/vsm1996/'}>
        <Image width={50} src={GithubLogo} alt='github logo' />
      </Link>
    </div>
  )
}

export default Footer
