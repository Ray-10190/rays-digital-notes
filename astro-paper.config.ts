import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://ray-10190.github.io/rays-digital-notes/",
    title: "Ray的數位筆記",
    description: "Ray 的數位筆記",
    author: "Ray",
    profile: "https://www.youtube.com/@Ray-1028",
    ogImage: "",
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
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "youtube",   url: "https://www.youtube.com/@Ray-1028",  linkTitle: "YouTube" },
    { name: "instagram", url: "https://www.instagram.com/ray20141028/", linkTitle: "Instagram" },
    { name: "facebook",  url: "https://www.facebook.com/profile.php?id=61566444941709&locale=zh_TW", linkTitle: "Facebook" },
    { name: "threads",   url: "https://www.threads.com/@ray20141028?hl=zh-tw", linkTitle: "Threads" },
  ],
  shareLinks: [
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});