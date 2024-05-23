import { ProjectData } from "@/data/resume/projectsData"

import Link from "@/components/link"

interface ProjectCardProps extends ProjectData {
  className?: string
}

const ProjectCard = ({
  title,
  description,
  links,
  titleLink,
  images,
  className,
}: ProjectCardProps) => (
  <div
    className={className ?? "relative grow p-4 md:w-1/2 md:grow-0 2xl:w-1/3"}
  >

    {/* 标题和描述 */}
    <div>
      <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
        {titleLink ? (
          <Link href={titleLink} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className=" mb-3 max-w-none text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </div>

    {/* 图片 */}
    <div className="flex flex-wrap gap-2 mt-4">
      {images &&
        images.map((image, index) => (
          <img
            key={`${title}-${image.src}-${index}`}
            src={image.src}
            alt={image.alt}
            className="object-cover w-full"
          />
        ))}
    </div>

    {/* 链接 */}
    <div className="flex flex-wrap gap-2 mt-4">
      {links &&
        links.map((link, index) => (
          <div key={`${title}-${link.title}-links`}>
            {index !== 0 && <span className="px-3">|</span>}
            <Link
              key={`${title}-${link.title}`}
              href={link.href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${link.title}`}
            >
              {link.title}
            </Link>
          </div>
        ))}
    </div>

  </div>
)

export default ProjectCard
