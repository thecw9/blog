export interface ImageProps {
  src: string
  alt: string
}

export interface ProjectData {
  title: string
  description: string
  titleLink: string
  links: { title: string; href: string }[]
  images?: ImageProps[]
}

const projectsData: ProjectData[] = [
  {
    title: "基于大数据挖掘的超特高压换流阀状态智能监测和评估系统项目",
    description:
      "国网湖南检修公司基于大数据挖掘的超特高压换流阀状态智能监测和评估系统项目外委研究服务",
    titleLink: "",
    links: [],
  },
  {
    title: "大型充油线圈设备运行工况异常预警技术研究及应用",
    description:
      "国网湖南超高压变电公司大型充油线圈设备运行工况异常预警技术研究及应用外协加工与测试技术服务",
    titleLink: "",
    links: [],
  },
  {
    title: "基于多源数据融合的超特高压换流阀工况识别研究",
    description: "国网湖南超高压变电公司基于多源数据融合的超特高压换流阀工况识别研究项目外委研究服务",
    titleLink: "",
    links: [],
  },

  {
    title: "基于机器学习的风电机组关键设备故障预警系统开发及应用项目",
    description: "横向项目",
    titleLink: "",
    links: [],
  },
  {
    title: "基于多源数据融合的大型充油变电设备智能监测与异常预警研究",
    description: "湖南省研究生科研创新项目",
    titleLink: "",
    links: [],
  },
  {
    title: "大数据驱动的双馈风电机组智能异常检测方法研究",
    description: "湖南省自然科学基金项目",
    titleLink: "",
    links: [],
  },
]

export default projectsData
