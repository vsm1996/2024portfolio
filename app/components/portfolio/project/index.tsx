import { ProjectType } from "@/app/types"
import Image from "next/image"
import Link from "next/link"

const ProjectCard = ({ title, date, img, src }: ProjectType) => {
  return (
    <div className=" flex flex-col
    w-full lg:w-1/4 h-full rounded-md bg-secondary text-neutral-content self-stretch 
      ease-in-out duration-300 transition hover:transition-all hover:bg-secondary-content
      hover:drop-shadow-2xl hover:-translate-y-2 ">
      <Link target='_blank' href={src} className='relative w-full h-full'>
        <Image
          src={img}
          alt={title || ''}
          sizes="300px"
          // fill
          width={300}
          height={300}
          className='object-contain object-center h-full w-full rounded-md'
        />
      </Link>

      <div className="cursor-pointer w-full h-full p-4 flex flex-col gap-2">
        <p>{title}</p>
        <p>{date}</p>
      </div>

    </div>
  )
}

export default ProjectCard
