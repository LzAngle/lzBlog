// .vuepress/config.ts
import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
var config_default = defineUserConfig({
  title: "\u9753\u4ED4\u7684\u5C0F\u7F51\u7AD9",
  base: "/lzBlog/",
  description: "Just playing around",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "\u9753\u4ED4",
    authorAvatar: "https://guli-file-lz.oss-cn-hangzhou.aliyuncs.com/avatar/teacher/WechatIMG12.jpeg",
    docsRepo: "https://github.com/LzAngle",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"]
        },
        {
          text: "module two",
          children: ["api", "plugin"]
        }
      ]
    },
    navbar: [
      { text: "\u4E3B\u9875", link: "/" },
      { text: "Categories", link: "/categories/reco/1/" },
      { text: "Tags", link: "/tags/tag1/1/" },
      {
        text: "Docs",
        children: [
          { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
          { text: "vuepress-theme-reco", link: "/blogs/other/guide" }
        ]
      }
    ],
    friendLink: [
      { 
        title: "luff's blog",
        desc: "梁桑的博客",
        link: "https://dreamluffe.github.io/"
      },
    ],
    bulletin: {
      // body: [
      //   {
      //     type: "text",
      //     content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
      //     style: "font-size: 12px;",
      //   },
      //   {
      //     type: "hr",
      //   },
      //   {
      //     type: "title",
      //     content: "QQ 群",
      //   },
      //   {
      //     type: "text",
      //     content: `
      //     <ul>
      //       <li>QQ群1：1037296104</li>
      //       <li>QQ群2：1061561395</li>
      //       <li>QQ群3：962687802</li>
      //     </ul>`,
      //     style: "font-size: 12px;",
      //   },
      //   {
      //     type: "hr",
      //   },
      //   {
      //     type: "title",
      //     content: "GitHub",
      //   },
      //   {
      //     type: "text",
      //     content: `
      //     <ul>
      //       <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
      //       <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
      //     </ul>`,
      //     style: "font-size: 12px;",
      //   },
      //   {
      //     type: "hr",
      //   },
      //   {
      //     type: "buttongroup",
      //     children: [
      //       {
      //         text: "打赏",
      //         link: "/docs/others/donate.html",
      //       },
      //     ],
      //   },
      // ],
    }
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  })
  // debug: true,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZ1ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9semFuZ2xlL2VudGVydGFpbm1lbnQvQmxvZy9teWJsb2cvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbHphbmdsZS9lbnRlcnRhaW5tZW50L0Jsb2cvbXlibG9nLy52dWVwcmVzcy9jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2x6YW5nbGUvZW50ZXJ0YWlubWVudC9CbG9nL215YmxvZy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xuaW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWVPcHRpb25zIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgcmVjb1RoZW1lIGZyb20gXCJ2dWVwcmVzcy10aGVtZS1yZWNvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICB0aXRsZTogXCJcdTk3NTNcdTRFRDRcdTc2ODRcdTVDMEZcdTdGNTFcdTdBRDlcIixcbiAgYmFzZTogXCIvbHpCbG9nL1wiLFxuICBkZXNjcmlwdGlvbjogXCJKdXN0IHBsYXlpbmcgYXJvdW5kXCIsXG4gIHRoZW1lOiByZWNvVGhlbWUoe1xuICAgIHN0eWxlOiBcIkB2dWVwcmVzcy1yZWNvL3N0eWxlLWRlZmF1bHRcIixcbiAgICBsb2dvOiBcImh0dHBzOi8vZ3VsaS1maWxlLWx6Lm9zcy1jbi1oYW5nemhvdS5hbGl5dW5jcy5jb20vYXZhdGFyL3RlYWNoZXIvV2VjaGF0SU1HMTIuanBlZ1wiLFxuICAgIGF1dGhvcjogXCJcdTk3NTNcdTRFRDRcIixcbiAgICBhdXRob3JBdmF0YXI6IFwiaHR0cHM6Ly9ndWxpLWZpbGUtbHoub3NzLWNuLWhhbmd6aG91LmFsaXl1bmNzLmNvbS9hdmF0YXIvdGVhY2hlci9XZWNoYXRJTUcxMi5qcGVnXCIsXG4gICAgZG9jc1JlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL0x6QW5nbGVcIixcbiAgICBkb2NzQnJhbmNoOiBcIm1haW5cIixcbiAgICBkb2NzRGlyOiBcImV4YW1wbGVcIixcbiAgICBsYXN0VXBkYXRlZFRleHQ6IFwiXCIsXG4gICAgLy8gc2VyaWVzIFx1NEUzQVx1NTM5RiBzaWRlYmFyXG4gICAgc2VyaWVzOiB7XG4gICAgICBcIi9kb2NzL3RoZW1lLXJlY28vXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6IFwibW9kdWxlIG9uZVwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBbXCJob21lXCIsIFwidGhlbWVcIl0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiBcIm1vZHVsZSB0d29cIixcbiAgICAgICAgICBjaGlsZHJlbjogW1wiYXBpXCIsIFwicGx1Z2luXCJdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIG5hdmJhcjogW1xuICAgICAgeyB0ZXh0OiBcIlx1NEUzQlx1OTg3NVwiLCBsaW5rOiBcIi9cIiB9LFxuICAgICAgeyB0ZXh0OiBcIkNhdGVnb3JpZXNcIiwgbGluazogXCIvY2F0ZWdvcmllcy9yZWNvLzEvXCIgfSxcbiAgICAgIHsgdGV4dDogXCJUYWdzXCIsIGxpbms6IFwiL3RhZ3MvdGFnMS8xL1wiIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiRG9jc1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogXCJ2dWVwcmVzcy1yZWNvXCIsIGxpbms6IFwiL2RvY3MvdGhlbWUtcmVjby90aGVtZVwiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcInZ1ZXByZXNzLXRoZW1lLXJlY29cIiwgbGluazogXCIvYmxvZ3Mvb3RoZXIvZ3VpZGVcIiB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGJ1bGxldGluOiB7XG4gICAgICAvLyBib2R5OiBbXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIC8vICAgICBjb250ZW50OiBgXHVEODNDXHVERjg5XHVEODNDXHVERjg5XHVEODNDXHVERjg5IHJlY28gXHU0RTNCXHU5ODk4IDIueCBcdTVERjJcdTdFQ0ZcdTYzQTVcdThGRDEgQmV0YSBcdTcyNDhcdTY3MkNcdUZGMENcdTU3MjhcdTUzRDFcdTVFMDMgTGF0ZXN0IFx1NzI0OFx1NjcyQ1x1NEU0Qlx1NTI0RFx1NEUwRFx1NEYxQVx1NTE4RFx1NjcwOVx1NTkyN1x1NzY4NFx1NjZGNFx1NjVCMFx1RkYwQ1x1NTkyN1x1NUJCNlx1NTNFRlx1NEVFNVx1NUMzRFx1NjBDNVx1NUMxRFx1OUM5Q1x1NEU4Nlx1RkYwQ1x1NUU3Nlx1NEUxNFx1NUUwQ1x1NjcxQlx1NTkyN1x1NUJCNlx1NTcyOCBRUSBcdTdGQTRcdTU0OEMgR2l0SHViIFx1OEUwQVx1OERDM1x1NTNDRFx1OTk4OFx1NEY3Rlx1NzUyOFx1NEY1M1x1OUE4Q1x1RkYwQ1x1NjIxMVx1NEYxQVx1NTcyOFx1N0IyQ1x1NEUwMFx1NjVGNlx1OTVGNFx1NTRDRFx1NUU5NFx1MzAwMmAsXG4gICAgICAvLyAgICAgc3R5bGU6IFwiZm9udC1zaXplOiAxMnB4O1wiLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgdHlwZTogXCJoclwiLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgdHlwZTogXCJ0aXRsZVwiLFxuICAgICAgLy8gICAgIGNvbnRlbnQ6IFwiUVEgXHU3RkE0XCIsXG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgIC8vICAgICBjb250ZW50OiBgXG4gICAgICAvLyAgICAgPHVsPlxuICAgICAgLy8gICAgICAgPGxpPlFRXHU3RkE0MVx1RkYxQTEwMzcyOTYxMDQ8L2xpPlxuICAgICAgLy8gICAgICAgPGxpPlFRXHU3RkE0Mlx1RkYxQTEwNjE1NjEzOTU8L2xpPlxuICAgICAgLy8gICAgICAgPGxpPlFRXHU3RkE0M1x1RkYxQTk2MjY4NzgwMjwvbGk+XG4gICAgICAvLyAgICAgPC91bD5gLFxuICAgICAgLy8gICAgIHN0eWxlOiBcImZvbnQtc2l6ZTogMTJweDtcIixcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHR5cGU6IFwiaHJcIixcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHR5cGU6IFwidGl0bGVcIixcbiAgICAgIC8vICAgICBjb250ZW50OiBcIkdpdEh1YlwiLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAvLyAgICAgY29udGVudDogYFxuICAgICAgLy8gICAgIDx1bD5cbiAgICAgIC8vICAgICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Z1ZXByZXNzLXJlY28vdnVlcHJlc3MtdGhlbWUtcmVjby1uZXh0L2lzc3Vlc1wiPklzc3VlczxhLz48L2xpPlxuICAgICAgLy8gICAgICAgPGxpPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdnVlcHJlc3MtcmVjby92dWVwcmVzcy10aGVtZS1yZWNvLW5leHQvZGlzY3Vzc2lvbnMvMVwiPkRpc2N1c3Npb25zPGEvPjwvbGk+XG4gICAgICAvLyAgICAgPC91bD5gLFxuICAgICAgLy8gICAgIHN0eWxlOiBcImZvbnQtc2l6ZTogMTJweDtcIixcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHR5cGU6IFwiaHJcIixcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIHR5cGU6IFwiYnV0dG9uZ3JvdXBcIixcbiAgICAgIC8vICAgICBjaGlsZHJlbjogW1xuICAgICAgLy8gICAgICAge1xuICAgICAgLy8gICAgICAgICB0ZXh0OiBcIlx1NjI1M1x1OEQ0RlwiLFxuICAgICAgLy8gICAgICAgICBsaW5rOiBcIi9kb2NzL290aGVycy9kb25hdGUuaHRtbFwiLFxuICAgICAgLy8gICAgICAgfSxcbiAgICAgIC8vICAgICBdLFxuICAgICAgLy8gICB9LFxuICAgICAgLy8gXSxcbiAgICB9LFxuICAgIC8vIGNvbW1lbnRDb25maWc6IHtcbiAgICAvLyAgIHR5cGU6ICd2YWxpZScsXG4gICAgLy8gICAvLyBvcHRpb25zIFx1NEUwRSAxLnggXHU3Njg0IHZhbGluZUNvbmZpZyBcdTkxNERcdTdGNkVcdTRFMDBcdTgxRjRcbiAgICAvLyAgIG9wdGlvbnM6IHtcbiAgICAvLyAgICAgLy8gYXBwSWQ6ICd4eHgnLFxuICAgIC8vICAgICAvLyBhcHBLZXk6ICd4eHgnLFxuICAgIC8vICAgICAvLyBwbGFjZWhvbGRlcjogJ1x1NTg2Qlx1NTE5OVx1OTBBRVx1N0JCMVx1NTNFRlx1NEVFNVx1NjUzNlx1NTIzMFx1NTZERVx1NTkwRFx1NjNEMFx1OTE5Mlx1NTRFNlx1RkYwMScsXG4gICAgLy8gICAgIC8vIHZlcmlmeTogdHJ1ZSwgLy8gXHU5QThDXHU4QkMxXHU3ODAxXHU2NzBEXHU1MkExXG4gICAgLy8gICAgIC8vIG5vdGlmeTogdHJ1ZSxcbiAgICAvLyAgICAgLy8gcmVjb3JkSVA6IHRydWUsXG4gICAgLy8gICAgIC8vIGhpZGVDb21tZW50czogdHJ1ZSAvLyBcdTk2OTBcdTg1Q0ZcdThCQzRcdThCQkFcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgfSksXG4gIC8vIGRlYnVnOiB0cnVlLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThULFNBQVMsd0JBQXdCO0FBRS9WLE9BQU8sZUFBZTtBQUV0QixJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE9BQU87QUFBQSxFQUNQLE1BQU07QUFBQSxFQUNOLGFBQWE7QUFBQSxFQUNiLE9BQU8sVUFBVTtBQUFBLElBQ2YsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsY0FBYztBQUFBLElBQ2QsVUFBVTtBQUFBLElBQ1YsWUFBWTtBQUFBLElBQ1osU0FBUztBQUFBLElBQ1QsaUJBQWlCO0FBQUE7QUFBQSxJQUVqQixRQUFRO0FBQUEsTUFDTixxQkFBcUI7QUFBQSxRQUNuQjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVSxDQUFDLFFBQVEsT0FBTztBQUFBLFFBQzVCO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sVUFBVSxDQUFDLE9BQU8sUUFBUTtBQUFBLFFBQzVCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLEVBQUUsTUFBTSxnQkFBTSxNQUFNLElBQUk7QUFBQSxNQUN4QixFQUFFLE1BQU0sY0FBYyxNQUFNLHNCQUFzQjtBQUFBLE1BQ2xELEVBQUUsTUFBTSxRQUFRLE1BQU0sZ0JBQWdCO0FBQUEsTUFDdEM7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSLEVBQUUsTUFBTSxpQkFBaUIsTUFBTSx5QkFBeUI7QUFBQSxVQUN4RCxFQUFFLE1BQU0sdUJBQXVCLE1BQU0scUJBQXFCO0FBQUEsUUFDNUQ7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsVUFBVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFxRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBY0YsQ0FBQztBQUFBO0FBRUgsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
