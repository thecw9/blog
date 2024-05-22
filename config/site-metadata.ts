// @ts-check

import { SiteConfig } from "config/config"

const siteMetadata: SiteConfig = {
  title: "Thecw's Blog",
  author: "Jiawen Zuo",
  headerTitle: "Thecw's Notes",
  description:
    "Discover my personal website, where I showcase my coding skills and expertise in software engineering. Explore a range of innovative software tools, blog posts, and project showcases that demonstrate my passion for problem-solving and creativity in the rapidly changing field of technology.",
  language: "en-us",
  theme: "system", // system, dark or light
  siteUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://jamesshopland.com",
  siteRepo: "https://github.com/thecw9/blog",
  siteLogo: "/static/images/logo.png",
  image: "/static/images/avatar.png",
  socialBanner: "/static/images/twitter-card.png",
  email: "hello@jamesshopland.com",
  github: "https://github.com/thecw9",
  twitter: "https://twitter.com",
  facebook: "https://facebook.com",
  youtube: "https://www.youtube.com",
  linkedin: "https://www.linkedin.com/in/james-shopland",
  locale: "en-GB",
  giscusConfig: {
    repo: process.env.NEXT_PUBLIC_GISCUS_REPO ?? "",
    repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID ?? "",
    category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY ?? "",
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID ?? "",
    mapping: "pathname",
    reactions: "1",
    metadata: "0",
    theme: "light",
    darkTheme: "transparent_dark",
    themeURL: "",
    lang: "en",
  },
  kbarConfig: {
    searchDocumentsPath: "search.json",
  },
}

export default siteMetadata
