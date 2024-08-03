import { ProjectType } from '@/app/types'

import Project from './project'

const projects: ProjectType[] = [{
  title: 'The Traveler',
  date: 'July 2024',
  img: '/assets/img/thetraveler.png',
  src: 'https://thetraveler.vercel.app/',
}]

const Portfolio = () => {
  return (
    <section id="portfolio" className='w-full h-dvh'>
      {projects.map(({ title, date, img, src }, index) => <Project key={index} title={title} date={date} img={img} src={src} />)}

    </section >
  )
}

export default Portfolio
