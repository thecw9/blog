// import { MDXLayoutRenderer } from '@/components/MDXComponents'

import Image from "next/image"
import { notFound } from "next/navigation"

import AIDark from "@/public/images/general/ai-dark.webp"
import AILight from "@/public/images/general/ai-light.webp"
import { allAuthors } from "contentlayer/generated"

import { CodingTimeline } from "@/components/coding-timeline"
import ImageSwitcher from "@/components/image-switcher"
import { Mdx } from "@/components/mdx/mdx"
import ProjectCard from "@/components/project-card"
import SocialIcon from "@/components/social-icons"

export const metadata = {
  title: "About",
}

export default function About() {
  const author = allAuthors.find((p) => p.slug === "default")
  if (!author) notFound()
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    github,
    youtube,
  } = author

  return (
    <div className="container divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About me
        </h1>
      </div>
      <div className=" items-start space-y-2 pt-3 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="relative flex flex-col items-center space-x-2 pt-8">
          <ImageSwitcher
            light={AIDark}
            dark={AILight}
            alt={"image made with ai art"}
            width={250}
            height={106}
            className="absolute top-[-6px]"
          />
          {avatar && (
            <Image
              src={avatar}
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
              priority={true}
            />
          )}
          <h2 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
            {name}
          </h2>
          <div className="text-gray-700 dark:text-gray-400">{occupation}</div>
          <div className="text-gray-700 dark:text-gray-400">{company}</div>
          <div className="flex space-x-3 pt-6">
            {youtube && <SocialIcon kind="youtube" href={youtube} />}
            {email && <SocialIcon kind="mail" href={`mailto:${email}`} />}
            {github && <SocialIcon kind="github" href={github} />}
            {linkedin && <SocialIcon kind="linkedin" href={linkedin} />}
            {twitter && <SocialIcon kind="twitter" href={twitter} />}
          </div>
        </div>
        <div className="max-w-none pb-8 pt-8 text-gray-700 dark:text-gray-300 xl:col-span-2">
          <Mdx code={author.body.code} />

          {/* 个人经历 */}
          <div className="relative col-span-2 col-start-2 ">
            <h3 className="my-12 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100  sm:text-4xl sm:leading-10 md:my-6 md:text-left  md:leading-14">
              个人经历
            </h3>
            <CodingTimeline />
          </div>
        </div>

        {/* 专业证书 */}
        <div className="col-span-full items-start space-y-2 pt-3 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <h3 className="col-span-2 col-start-2 mb-6 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-left md:leading-14">
            技能
          </h3>
          <ProjectCard
            title={"Python"}
            description="熟练使用Python进行开发，熟练使用Pytorch、Tensorflow等深度学习框架，熟练使用Pandas、Numpy等数据处理库，熟练使用Flask、FastAPI等后端框架"
            links={[]}
            titleLink={"www.python.org"}
            className="md relative col-span-2 col-start-2 w-full grow"
          />
          <ProjectCard
            title={"Shell"}
            description=""
            links={[]}
            titleLink={"www.python.org"}
            className="md relative col-span-2 col-start-2 w-full grow"
          />
          <ProjectCard
            title={"Linux"}
            description="熟练使用Linux操作系统"
            links={[]}
            titleLink={""}
            className="md relative col-span-2 col-start-2 w-full grow"
          />
          <ProjectCard
            title={"后端开发"}
            description="熟练使用Flask（基于大数据挖掘的超特高压换流阀状态智能监测和评估系统项目）、FastAPI（大型充油线圈设备运行工况异常预警技术研究及应用、基于机器学习的风电机组关键设备故障预警系统开发及应用项目）等后端框架"
            links={[]}
            titleLink={""}
            className="md relative col-span-2 col-start-2 w-full grow"
          />
          <ProjectCard
            title={"前端开发"}
            description="熟练使用Vue（大型充油线圈设备运行工况异常预警技术研究及应用、基于机器学习的风电机组关键设备故障预警系统开发及应用项目）、React（个人网站）等前端框架"
            links={[]}
            titleLink={""}
            className="md relative col-span-2 col-start-2 w-full grow"
          />
          <ProjectCard
            title={"数据库"}
            description="熟练使用PostgreSQL（大型充油线圈设备运行工况异常预警技术研究及应用、基于机器学习的风电机组关键设备故障预警系统开发及应用项目）、MySQL（基于大数据挖掘的超特高压换流阀状态智能监测和评估系统项目）、Redis（基于大数据挖掘的超特高压换流阀状态智能监测和评估系统项目、大型充油线圈设备运行工况异常预警技术研究及应用、基于机器学习的风电机组关键设备故障预警系统开发及应用项目）等数据库"
            links={[]}
            titleLink={""}
            className="md relative col-span-2 col-start-2 w-full grow"
          />
          <ProjectCard
            title={"Docker"}
            description="熟练使用Docker部署应用"
            links={[]}
            titleLink={""}
            className="md relative col-span-2 col-start-2 w-full grow"
          />
          <ProjectCard
            title={"Git"}
            description="熟练使用Git进行版本控制"
            links={[]}
            titleLink={""}
            className="md relative col-span-2 col-start-2 w-full grow"
          />
          <ProjectCard
            title={"Superset"}
            description="熟练使用Superset进行数据可视化"
            links={[]}
            titleLink={""}
            className="md relative col-span-2 col-start-2 w-full grow"
          />
          <ProjectCard
            title={"Kafka"}
            description="熟练使用Kafka消息队列"
            links={[]}
            titleLink={""}
            className="md relative col-span-2 col-start-2 w-full grow"
          />
          <ProjectCard
            title={"HTTP & Websocket MQTT"}
            description="熟练使用HTTP、Websocket、MQTT等协议"
            links={[]}
            titleLink={""}
            className="md relative col-span-2 col-start-2 w-full grow"
          />
        </div>
      </div>
    </div>
  )
}
