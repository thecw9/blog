import projectsData from "@/data/resume/projectsData"
import certificateData from "@/data/resume/certificateData"
import gamingData from "@/data/resume/gamingData"
import booksData from "@/data/resume/booksData"

import ProjectCard from "@/components/project-card"


export const metadata = {
  title: "About",
  description: `My projects page, where I showcase some of my software engineering projects. From building web apps with TypeScript and react to developing Java plugins for game, my projects demonstrate my diverse skill set and experience. Explore my work work and get a glimpse into my passion for problem-solving and creativity in the rapidly changing field of technology.`,
}

export default async function Projects() {
  return (
    <div className="container divide-y divide-gray-200 dark:divide-gray-700">

      {/* 项目 */}
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          项目
        </h1>
        <p className="text-lg leading-7 text-gray-700 dark:text-gray-400">
          Welcome to my projects page, where I showcase some of my software
          engineering projects. From building web apps with TypeScript and react
          to developing Java plugins for game, my projects demonstrate my
          diverse skill set and experience. Explore my work work and get a
          glimpse into my passion for problem-solving and creativity in the
          rapidly changing field of technology.
        </p>
      </div>
      <div className=" pt-12">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d) => (
            <ProjectCard
              key={d.title}
              title={d.title}
              description={d.description}
              titleLink={d.titleLink}
              links={d.links}
              images={d.images}
            />
          ))}
        </div>
      </div>

      {/* 证书 */}
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          证书
        </h1>
        <p className="text-lg leading-7 text-gray-700 dark:text-gray-400">
          Welcome to my projects page, where I showcase some of my software
          engineering projects. From building web apps with TypeScript and react
          to developing Java plugins for game, my projects demonstrate my
          diverse skill set and experience. Explore my work work and get a
          glimpse into my passion for problem-solving and creativity in the
          rapidly changing field of technology.
        </p>
      </div>
      <div className=" pt-12">
        <div className="-m-4 flex flex-wrap">
          {certificateData.map((d) => (
            <ProjectCard
              key={d.title}
              title={d.title}
              description={d.description}
              titleLink={d.titleLink}
              links={d.links}
              images={d.images}
            />
          ))}
        </div>
      </div>

      {/* 比赛 */}
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          比赛
        </h1>
        <p className="text-lg leading-7 text-gray-700 dark:text-gray-400">
          Welcome to my projects page, where I showcase some of my software
          engineering projects. From building web apps with TypeScript and react
          to developing Java plugins for game, my projects demonstrate my
          diverse skill set and experience. Explore my work work and get a
          glimpse into my passion for problem-solving and creativity in the
          rapidly changing field of technology.
        </p>
      </div>
      <div className=" pt-12">
        <div className="-m-4 flex flex-wrap">
          {gamingData.map((d) => (
            <ProjectCard
              key={d.title}
              title={d.title}
              description={d.description}
              titleLink={d.titleLink}
              links={d.links}
              images={d.images}
            />
          ))}
        </div>
      </div>

      {/* 书籍 */}
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          书籍
        </h1>
        <p className="text-lg leading-7 text-gray-700 dark:text-gray-400">
          Welcome to my projects page, where I showcase some of my software
          engineering projects. From building web apps with TypeScript and react
          to developing Java plugins for game, my projects demonstrate my
          diverse skill set and experience. Explore my work work and get a
          glimpse into my passion for problem-solving and creativity in the
          rapidly changing field of technology.
        </p>
      </div>
      <div className=" pt-12">
        <div className="-m-4 flex flex-wrap">
          {booksData.map((d) => (
            <ProjectCard
              key={d.title}
              title={d.title}
              description={d.description}
              titleLink={d.titleLink}
              links={d.links}
              images={d.images}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
