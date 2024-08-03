import { ProjectType } from "@/app/types"
import Image from "next/image"
import Link from "next/link"

const Project = ({ title, date, img, src }: ProjectType) => {
  return (
    <div className="w-full">
      <div className="w-full">
        <Image
          sizes="200px"
          width={200}
          height={200}
          alt={title}
          src={img}
        />
      </div>
      <p>{title}</p>

      <Link href={src}>Website</Link>
      <span>{date}</span>
    </div>
  )
}

export default Project
