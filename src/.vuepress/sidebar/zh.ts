import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/javadocs/": [
    "/",
    {
      icon: "discover",
      text: "Java基础",
      prefix: "javase/",
      collapsible: true,
      children: ["javase01","javase02"]
    },
    {
      text: "JavaWeb",
      icon: "note",
      collapsible: true,
      prefix: "javaweb/",
      children: ["javaweb01","javaweb02",]
    },

  ],
  "/plandocs":["learnguid", "learnplan"]
});
