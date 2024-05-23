export interface ImageProps {
  src: string
  alt: string
}

export interface BooksData {
  title: string
  description: string
  titleLink: string
  links: { title: string; href: string }[]
  images?: ImageProps[]
}

const booksData: BooksData[] = [
  {
    title: "换流阀状态监测与智能评估系统实践教程",
    description: "教材",
    titleLink: "https://jolbol1.github.io/f1-calc/",
    links: [],
    images: [
      {
        src: "/images/resume/books/换流阀状态监测与智能评估系统实践教程-封面.png",
        alt: "Project 1",
      },
    ],
  },
]

export default booksData
