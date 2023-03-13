import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({
  base: "/",
// 设置正在使用的语言
  lang: "zh-CN",
  locales: {
   /* "/en/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },*/
    "/": {
      lang: "zh-CN",
      title: "代码岛",
      description: "Just do do do do do do do it !!!",
    },
  },

  theme,

  shouldPrefetch: false,
  plugins: [

  ],

});
