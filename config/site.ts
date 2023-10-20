import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "BookGPT ",
  description: "Upload a book, start asking question",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Credentials",
      href: "/credentials",
    },
  ],
  links: {
    twitter: "https://twitter.com/shittyai_",
    github: "https://github.com/shittyai",
  },
}
