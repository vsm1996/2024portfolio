'use client'
import { ProjectType } from '@/app/types'
import ProjectCard from './project'
import AboutSection from '../about'
import React from 'react'

const projects: ProjectType[] = [
  {
    title: 'The Traveler',
    desc: 'Displays latest travel and aviation news using the New York Times API in a sleek, beautiful design.',
    tech: ['NextJS 14', 'TailwindCSS', 'DaisyUI', 'Vercel'],
    img: '/assets/img/thetraveler.png',
    role: 'Front-End',
    src: 'https://thetraveler.vercel.app/',
  },
  {
    title: 'Soka Gakkai - Internet Practitioners',
    desc: 'A social media site for a global Buddhist organization.',
    tech: ['NextJS 14', 'Tailwind', 'DaisyUI', 'Prisma', 'Node', 'Vercel'],
    img: '/assets/img/sgip.png',
    role: 'Full-Stack',
    src: 'https://sgip.vercel.app/',
  },
  {
    title: 'Siena Analytics',
    desc: 'A front-end NextJS + headless Wordpress site for global supply chain AI company.',
    tech: ['NextJS 12', 'SCSS', 'Node', 'Vercel'],
    img: '/assets/img/siena.png',
    role: 'Front-End',
    src: 'https://www.peaktech.com/portfolio/siena-analytics/?redirect=siena',
  },
  {
    title: 'Nium',
    desc: 'Main marketing site for global fintech company.',
    tech: ['NextJS', 'SCSS', 'Node', 'Vercel'],
    img: '/assets/img/nium.png',
    role: 'Front-End',
    src: 'https://www.nium.com/',
  },
  {
    title: 'Photosnap',
    desc: 'A front-end ReactJS site for photographers and visual story tellers.',
    tech: ['React', 'CSS', 'Node', 'Vercel'],
    img: '/assets/img/photosnap.png',
    role: 'Front-End',
    src: 'https://photosnap-roan.vercel.app/',
  },
  {
    title: 'PlayStation',
    desc: 'Marketing site of top leading gaming company, specializing in branding, product, and community fun!',
    tech: ['jQuery', 'CSS', 'React', 'Netlify'],
    img: '/assets/img/playstation.png',
    role: 'Front-End',
    src: 'https://www.playstation.com/en-us/',
  },
]

const Portfolio = () => {

  return (
    <section className='w-full pt-20 pb-6 px-12 md:px-24'>
      <AboutSection />
      <div id="portfolio" className='mt-20 grid grid-rows-6 grid-flow-col gap-6 md:grid-flow-row md:grid-rows-3 md:grid-cols-2 xl:grid-rows-2 xl:grid-cols-3'>
        {projects.map(({ title, img, src, desc, tech, role }, index) => (
          <ProjectCard key={index} title={title} tech={tech} desc={desc} img={img} src={src} role={role} index={index} />
        ))}
      </div >
    </section>
  )
}

export default Portfolio
