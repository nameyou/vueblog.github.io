import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "学习教程",
    icon: "discover",
    prefix: "/javadocs/",
    children: [
      {
        text: "Java基础",
        icon: "creative",
        // prefix: "bar/",
        // children: ["baz", { text: "...", icon: "more", link: "" }],
        link: "javase/Java基础知识.md"
      },
      {
        text: "JavaWeb",
        icon: "config",
        link: "javaweb/javaweb01"
      },
    ], },
  {
    text: "自学指南",
    icon: "creative",
    link: "/plandocs/learnguid",

  },
  // {
  //   text: "V2 文档",
  //   icon: "note",
  //   link: "https://note.gaofee.cc/zh/",
  // },
]);
