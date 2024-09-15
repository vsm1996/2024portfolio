import { ProjectType } from "@/app/types"
import Image from "next/image"
import Link from "next/link"

const ProjectCard2 = ({ title, img, src, desc, tech }: ProjectType) => {
  return (
    <div className=" flex flex-col
      w-full lg:w-1/4 h-auto rounded-md bg-secondary-content text-white self-stretch 
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

      <div className="cursor-pointer w-full h-[200px] p-4 flex flex-col gap-2">
        <p>{title}</p>
        <p>{desc}</p>
        <p>Technologies: {tech.map(text => text + ' ')}</p>
      </div>

    </div>
  )
}

export default ProjectCard2