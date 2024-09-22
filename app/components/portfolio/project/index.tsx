import { ProjectType } from "@/app/types"
import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({ title, img, src, desc, tech }: ProjectType) => {
  return (
    // glass
    <div className="group flex flex-col
      w-full h-auto rounded-md bg-secondary-content text-white self-stretch 
      ease-in-out duration-300 transition hover:transition-all hover:bg-secondary
      hover:drop-shadow-2xl hover:-translate-y-2 ">
      <Link target='_blank' href={src} className='relative w-full h-auto self-start'>
        <Image
          src={img}
          alt={title || ''}
          sizes="300px"
          // fill
          width={300}
          height={300}
          className='object-contain object-top h-full w-full rounded-md'
        />
      </Link>

      {/* backdrop-blur */}
      <div className="cursor-pointer w-full h-full p-4 flex flex-col gap-2">
        <h2 className="text-2xl group-hover:underline">{title}</h2>
        <p className="text-md">{desc}</p>
        <small className="text-sm">Technologies: {tech.map((text, index) => text + (index !== (tech.length - 1) ? ', ' : ''))}</small>
      </div>

    </div>
  )
}

export default ProjectCard