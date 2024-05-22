import { DevIconTypes } from "@/components/dev-icons"

export interface ProjectData {
  title: string
  description: string
  titleLink: string
  links: { title: string; href: string }[]
  icons?: DevIconTypes[]
}

const projectsData: ProjectData[] = [
  {
    title: "基于大数据挖掘的超特高压换流阀状态智能监测和评估系统项目",
    description:
      "国网湖南检修公司基于大数据挖掘的超特高压换流阀状态智能监测和评估系统项目外委研究服务",
    titleLink: "https://jollyui.dev",
    links: [],
  },
  {
    title: "大型充油线圈设备运行工况异常预警技术研究及应用",
    description:
      "国网湖南超高压变电公司大型充油线圈设备运行工况异常预警技术研究及应用外协加工与测试技术服务",
    titleLink: "https://f1-gpt.vercel.app",
    links: [
      {
        title: "GitHub",
        href: "https://github.com/thecw9/power_prophet",
      },
    ],
  },
  {
    title: "基于多源数据融合的超特高压换流阀工况识别研究",
    description: "国网湖南超高压变电公司基于多源数据融合的超特高压换流阀工况识别研究项目外委研究服务",
    titleLink: "",
    links: [],
  },

  {
    title: "基于机器学习的风电机组关键设备故障预警系统开发及应用项目",
    description: "",
    titleLink: "https://github.com/thecw9/wind_turbine",
    links: [
      { title: "GitHub", href: "https://github.com/thecw9/wind_turbine" },
    ],
  },
  {
    title: "换流阀状态监测与智能评估系统实践教程",
    description: "教材",
    titleLink: "https://jolbol1.github.io/f1-calc/",
    links: [
      {
        title: "Demo",
        href: "https://jolbol1.github.io/f1-calc/",
      },
    ],
  },
  {
    title: "大数据驱动的双馈风电机组智能异常检测方法研究",
    description: "湖南省自然科学基金项目",
    titleLink: "https://www.npmjs.com/package/cz-gitmojis",
    links: [
      { title: "GitHub", href: "https://github.com/jolbol1/cz-gitmojis" },
      { title: "NPM", href: "https://www.npmjs.com/package/cz-gitmojis" },
    ],
  },
  {
    title: "电力系统紫外信号采集与状态监测装置",
    description: "实用新型专利",
    titleLink: "https://github.com/jolbol1/bedTime",
    links: [{ title: "GitHub", href: "https://github.com/jolbol1/bedTime" }],
  },
  {
    title: "火电机组负荷偏差智能监测与评估系统",
    description: "软件著作权",
    titleLink: "https://github.com/jolbol1/jshopland",
    links: [{ title: "GitHub", href: "https://github.com/jolbol1/jshopland" }],
    icons: ["next", "react", "typescript"],
  },
]

export default projectsData