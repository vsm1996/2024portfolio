import { ProjectType } from '@/app/types'

import Project from './project'
import ProjectCard from './project'

const projects: ProjectType[] = [
  {
    title: 'The Traveler',
    desc: 'Displays latest travel and aviation news using New York Times API in a sleek, beautiful design.',
    tech: ['NextJS 14', 'TailwindCSS', 'DaisyUI', 'Vercel'],
    img: '/assets/img/thetraveler.png',
    src: 'https://thetraveler.vercel.app/',
  },
  {
    title: 'Soka Gakkai - Internet Practitioners',
    desc: 'Built a social media site for a global Buddhist organization.',
    tech: ['NextJS 14', 'Tailwind', 'DaisyUI', 'Prisma', 'Node', 'Vercel'],
    img: '/assets/img/sgip.png',
    src: 'https://sgip.vercel.app/',
  },
  {
    title: 'Siena Analytics',
    desc: 'Fully built front-end NextJS + headless Wordpress site for global supply chain AI company.',
    tech: ['NextJS 12', 'SCSS', 'Node', 'Vercel'],
    img: '/assets/img/siena.png',
    src: 'https://www.peaktech.com/portfolio/siena-analytics/?redirect=siena',
  },
  {
    title: 'Nium',
    desc: 'Main marketing site for global fintech company.',
    tech: ['NextJS', 'SCSS', 'Node', 'Vercel'],
    img: '/assets/img/nium.png',
    src: 'https://www.nium.com/',
  },
  {
    title: 'Photosnap',
    desc: 'Fully built front-end ReactJS site for photographers and visual story tellers.',
    tech: ['React', 'CSS', 'Node', 'Vercel'],
    img: '/assets/img/photosnap.png',
    src: 'https://photosnap-roan.vercel.app/',
  },
  {
    title: 'Lotus Art',
    desc: 'Personal art portfolio and store!',
    tech: ['React', 'CSS', 'Node', 'Vercel'],
    img: '/assets/img/lotusart.png',
    src: 'https://lotus-art.vercel.app/',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio" className='w-full py-2 px-12 md:px-24 flex items-center gap-4 flex-col lg:flex-row'>
      {projects.map(({ title, img, src, desc, tech }, index) => (
        <ProjectCard key={index} title={title} tech={tech} desc={desc} img={img} src={src} />
      ))}
    </section >
  )
}

export default Portfolio
