module.exports = {
  title: "Vitepress Test Site",
  description: "Just playing around.",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Contact", link: "/contact" },
    ],
    sidebar: [
      { text: "Home", link: "/" },
      { text: "Contact", link: "/contact" },
    ],
  },
  markdown: {
    lineNumbers: false,
  },
  toc: { includeLevel: [1] },
  anchor: { permalink: false },
};
