import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://ray-10190.github.io/rays-digital-notes/",
    title: "Ray的數位筆記",
    description: "Ray 的數位筆記",
    author: "Ray",
    profile: "https://github.com/Ray-10190",
    ogImage: "default-og.jpg",
    lang: "zh-tw",
    timezone: "Asia/Taipei",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/Ray-10190/rays-digital-notes/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "youtube",   url: "https://www.youtube.com/@Ray-1028" },
    { name: "instagram", url: "https://www.instagram.com/ray20141028/" },
  ],
  shareLinks: [
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});