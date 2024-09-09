import { ProjectType } from '@/app/types'

import Project from './project'
import ProjectCard from './project'

const projects: ProjectType[] = [{
  title: 'The Traveler',
  date: 'July 2024',
  img: '/assets/img/thetraveler.png',
  src: 'https://thetraveler.vercel.app/',
}]

const Portfolio = () => {
  return (
    <section id="portfolio" className='w-full py-2 px-12 md:px-24'>
      {projects.map(({ title, date, img, src }, index) => (
        <ProjectCard key={index} title={title} date={date} img={img} src={src} />
      ))}
    </section >
  )
}

export default Portfolio
