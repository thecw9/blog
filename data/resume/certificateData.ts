export interface ImageProps {
  src: string
  alt: string
}

export interface CertificateData {
  title: string
  description: string
  titleLink: string
  links: { title: string; href: string }[]
  images?: ImageProps[]
}

const certificateData: CertificateData[] = [
  {
    title: "电力系统紫外信号采集与状态监测装置",
    description: "实用新型专利",
    titleLink: "https://github.com/jolbol1/bedTime",
    links: [{ title: "GitHub", href: "https://github.com/jolbol1/bedTime" }],
    images: [
      {
        src: "/images/resume/certificate/电力系统紫外信号采集与状态监测装置.jpg",
        alt: "电力系统",
      },
    ],
  },
  {
    title: "火电机组负荷偏差智能监测与评估系统",
    description: "软件著作权",
    titleLink: "https://github.com/jolbol1/jshopland",
    links: [{ title: "GitHub", href: "https://github.com/jolbol1/jshopland" }],
    images: [
      {
        src: "/images/resume/certificate/火电机组负荷偏差智能监测与评估系统.jpg",
        alt: "火电机组",
      },
    ],
  },
]

export default certificateData
