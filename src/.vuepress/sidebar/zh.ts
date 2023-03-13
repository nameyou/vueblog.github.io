import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/javadocs/": [
    "/",
    {
      icon: "discover",
      text: "Java基础",
      prefix: "javase/",
      collapsible: true,
      children: ["Java基础知识","Java基础知识疑难点","Java常见关键字总结","代理模式详解","反射机制","用好Java中的枚举真的没有那么简单","" +
      "IO模型","BIO-NIO-AIO总结"]
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
