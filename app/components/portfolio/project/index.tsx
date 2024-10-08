'use client'
import { ProjectCardType } from "@/app/types"
import Image from "next/image"
import Link from "next/link"
import { useIntersectionObserver } from '@/app/utlis/hooks/useIntersectionObserver'


const ProjectCard = ({ title, img, src, desc, tech, index, role }: ProjectCardType) => {
  const [cardRef, isVisible] = useIntersectionObserver();
  return (
    // glass
    <div
      ref={cardRef}
      className={`group relative flex flex-col opacity-0 w-full h-auto min-h-[465px] max-h-full text-base-300 self-stretch
      transition-all ease-in-out duration-500 ${isVisible ? `animate-fadeInUp delay-[${index * 2000}ms]` : ''}`}
    >
      <div className="flex flex-col transition-all ease-in-out duration-500 rounded-lg bg-secondary-content/75 group-active:bg-secondary/95 group-active:scale-90  group-hover:bg-secondary/85 group-hover:drop-shadow-2xl group-hover:scale-95 h-full">
        <Link target='_blank' href={src} className='w-full h-auto relative' aria-label={`Link to ${title} project`}>
          <div className="relative w-full aspect-video">
            <Image
              src={img}
              alt={title || ''}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className='object-cover object-top w-full h-auto rounded-md
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 '
            />
          </div>
        </Link>

        {/* backdrop-blur */}
        <div className="cursor-pointer w-full h-full p-4 flex flex-col gap-3">
          <h2 className="text-2xl group-hover:underline">{title}</h2>
          <p className="text-md">{desc}</p>
          <small className="text-sm group-hover:text-gold-base group-hover:animate-bounce">Role: {role}</small>
          <small className="text-sm">Technologies: {tech.map((text, index) => text + (index !== (tech.length - 1) ? ', ' : ''))}</small>
        </div>

      </div>
    </div >
  )
}

export default ProjectCard