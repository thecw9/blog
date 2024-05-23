export interface ImageProps {
  src: string
  alt: string
}

export interface GamingData {
  title: string
  description: string
  titleLink: string
  links: { title: string; href: string }[]
  images?: ImageProps[]
}

const gamingData: GamingData[] = [
  {
    title: "2021年湖南省大学生数学竞赛一等奖",
    description: "",
    titleLink: "https://github.com/jolbol1/bedTime",
    links: [],
    images: [
      {
        src: "/images/resume/gaming/2021年湖南省大学生数学竞赛一等奖.png",
        alt: "2021年湖南省大学生数学竞赛一等奖",
      },
    ],
  },
  {
    title: "第十三届全国大邪神数学竞赛一等奖",
    description: "",
    titleLink: "https://github.com/jolbol1/bedTime",
    links: [],
    images: [
      {
        src: "/images/resume/gaming/第十三届全国大学生数学竞赛一等奖.png",
        alt: "第十三届全国大学生数学竞赛一等奖",
      },
    ],
  },
  {
    title: "第八届全国大学生能源经济学术创意大赛三等奖",
    description: "",
    titleLink: "https://github.com/jolbol1/bedTime",
    links: [],
    images: [
      {
        src: "/images/resume/gaming/第八届全国大学生能源经济学术创意大赛三等奖.jpg",
        alt: "第八届全国大学生能源经济学术创意大赛三等奖",
      },
    ],
  },
  {
    title: "第二届中国研究生“双碳”创新与创意大赛三等奖",
    description: "",
    titleLink: "https://github.com/jolbol1/jshopland",
    links: [],
    images: [
      {
        src: "/images/resume/gaming/第二届中国研究生”双碳“创新与创意大赛三等奖.jpg",
        alt: "第二届中国研究生”双碳“创新与创意大赛三等奖",
      },
    ],
  },
]

export default gamingData
