import type { UIStrings } from "../types";

export default {
  nav: {
    home: "首頁",
    posts: "文章",
    tags: "標籤",
    about: "關於",
    archives: "封存",
    search: "搜尋",
  },
  post: {
    publishedAt: "發布於",
    updatedAt: "更新於",
    sharePostIntro: "分享這篇文章：",
    sharePostOn: "在 {{platform}} 上分享",
    sharePostViaEmail: "透過電子郵件分享",
    tagLabel: "標籤",
    backToTop: "回到頂端",
    goBack: "返回",
    editPage: "編輯此頁",
    previousPost: "上一篇",
    nextPost: "下一篇",
  },
  pagination: {
    prev: "上一頁",
    next: "下一頁",
    page: "第",
  },
  home: {
    socialLinks: "社群連結",
    featured: "精選",
    recentPosts: "近期文章",
    allPosts: "所有文章",
  },
  footer: {
    copyright: "版權所有",
    allRightsReserved: "保留所有權利。",
  },
  pages: {
    tagTitle: "標籤",
    tagDesc: "所有帶有此標籤的文章",

    tagsTitle: "標籤",
    tagsDesc: "文章中使用的所有標籤。",

    postsTitle: "文章",
    postsDesc: "我發布的所有文章。",

    archivesTitle: "封存",
    archivesDesc: "我封存的所有文章。",

    searchTitle: "搜尋",
    searchDesc: "搜尋任何文章 ...",
  },
  a11y: {
    skipToContent: "跳至內容",
    openMenu: "開啟選單",
    closeMenu: "關閉選單",
    toggleTheme: "切換主題",
    searchPlaceholder: "搜尋文章...",
    noResults: "找不到結果",
    goToPreviousPage: "前往上一頁",
    goToNextPage: "前往下一頁",
  },
  notFound: {
    title: "404 找不到頁面",
    message: "頁面不存在",
    goHome: "回到首頁",
  },
} satisfies UIStrings;
