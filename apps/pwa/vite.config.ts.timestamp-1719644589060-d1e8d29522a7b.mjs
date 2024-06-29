// vite.config.ts
import react from "file:///E:/Odoo-Combat/node_modules/.pnpm/@vitejs+plugin-react@4.3.1_vite@5.3.2/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig, loadEnv } from "file:///E:/Odoo-Combat/node_modules/.pnpm/vite@5.3.2/node_modules/vite/dist/node/index.js";
import { VitePWA } from "file:///E:/Odoo-Combat/node_modules/.pnpm/vite-plugin-pwa@0.20.0_vite@5.3.2_workbox-build@7.1.1_workbox-window@7.1.0/node_modules/vite-plugin-pwa/dist/index.js";
import svgr from "file:///E:/Odoo-Combat/node_modules/.pnpm/vite-plugin-svgr@4.2.0_rollup@2.79.1_typescript@5.5.2_vite@5.3.2/node_modules/vite-plugin-svgr/dist/index.js";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.VITE_BE_URL": JSON.stringify(env.VITE_BE_URL)
    },
    plugins: [
      react(),
      svgr(),
      VitePWA({
        registerType: "autoUpdate",
        workbox: {
          globPatterns: [
            "**/*.{js,css,html,ico,png,svg,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,otf,mp4,webm,wav,mp3,m4a,aac,oga}"
          ],
          maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
          // 10 MB
          sourcemap: true
        },
        includeAssets: [
          "favicon.ico",
          "favicon/apple-touch-icon.png",
          "favicon/favicon-32x32.png"
        ],
        manifest: {
          short_name: "Furnitures",
          name: "Furnitures",
          description: "Good Description",
          icons: [
            {
              src: "favicon.ico",
              sizes: "64x64 32x32 24x24 16x16",
              type: "image/x-icon"
            },
            {
              src: "favicon/android-chrome-192x192.png",
              type: "image/png",
              sizes: "192x192"
            },
            {
              src: "favicon/android-chrome-512x512.png",
              type: "image/png",
              sizes: "512x512"
            }
          ],
          start_url: ".",
          display: "standalone",
          theme_color: "#5296d9",
          background_color: "#ffffff"
        }
      })
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxPZG9vLUNvbWJhdFxcXFxhcHBzXFxcXHB3YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcT2Rvby1Db21iYXRcXFxcYXBwc1xcXFxwd2FcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L09kb28tQ29tYmF0L2FwcHMvcHdhL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xyXG5pbXBvcnQgc3ZnciBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgXCJcIik7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRlZmluZToge1xyXG4gICAgICBcInByb2Nlc3MuZW52LlZJVEVfQkVfVVJMXCI6IEpTT04uc3RyaW5naWZ5KGVudi5WSVRFX0JFX1VSTCksXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICByZWFjdCgpLFxyXG4gICAgICBzdmdyKCksXHJcbiAgICAgIFZpdGVQV0Eoe1xyXG4gICAgICAgIHJlZ2lzdGVyVHlwZTogXCJhdXRvVXBkYXRlXCIsXHJcbiAgICAgICAgd29ya2JveDoge1xyXG4gICAgICAgICAgZ2xvYlBhdHRlcm5zOiBbXHJcbiAgICAgICAgICAgIFwiKiovKi57anMsY3NzLGh0bWwsaWNvLHBuZyxzdmcsanBnLGpwZWcsZ2lmLHdlYnAsd29mZix3b2ZmMix0dGYsZW90LG90ZixtcDQsd2VibSx3YXYsbXAzLG00YSxhYWMsb2dhfVwiLFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIG1heGltdW1GaWxlU2l6ZVRvQ2FjaGVJbkJ5dGVzOiAxMCAqIDEwMjQgKiAxMDI0LCAvLyAxMCBNQlxyXG4gICAgICAgICAgc291cmNlbWFwOiB0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5jbHVkZUFzc2V0czogW1xyXG4gICAgICAgICAgXCJmYXZpY29uLmljb1wiLFxyXG4gICAgICAgICAgXCJmYXZpY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCIsXHJcbiAgICAgICAgICBcImZhdmljb24vZmF2aWNvbi0zMngzMi5wbmdcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgICBzaG9ydF9uYW1lOiBcIkZ1cm5pdHVyZXNcIixcclxuICAgICAgICAgIG5hbWU6IFwiRnVybml0dXJlc1wiLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiR29vZCBEZXNjcmlwdGlvblwiLFxyXG4gICAgICAgICAgaWNvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNyYzogXCJmYXZpY29uLmljb1wiLFxyXG4gICAgICAgICAgICAgIHNpemVzOiBcIjY0eDY0IDMyeDMyIDI0eDI0IDE2eDE2XCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS94LWljb25cIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHNyYzogXCJmYXZpY29uL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBzcmM6IFwiZmF2aWNvbi9hbmRyb2lkLWNocm9tZS01MTJ4NTEyLnBuZ1wiLFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICAgIHN0YXJ0X3VybDogXCIuXCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcclxuICAgICAgICAgIHRoZW1lX2NvbG9yOiBcIiM1Mjk2ZDlcIixcclxuICAgICAgICAgIGJhY2tncm91bmRfY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICB9O1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErUCxPQUFPLFdBQVc7QUFDalIsU0FBUyxjQUFjLGVBQWU7QUFDdEMsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sVUFBVTtBQUVqQixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFDM0MsU0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sMkJBQTJCLEtBQUssVUFBVSxJQUFJLFdBQVc7QUFBQSxJQUMzRDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBLFFBQ2QsU0FBUztBQUFBLFVBQ1AsY0FBYztBQUFBLFlBQ1o7QUFBQSxVQUNGO0FBQUEsVUFDQSwrQkFBK0IsS0FBSyxPQUFPO0FBQUE7QUFBQSxVQUMzQyxXQUFXO0FBQUEsUUFDYjtBQUFBLFFBQ0EsZUFBZTtBQUFBLFVBQ2I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFVBQVU7QUFBQSxVQUNSLFlBQVk7QUFBQSxVQUNaLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRSxLQUFLO0FBQUEsY0FDTCxPQUFPO0FBQUEsY0FDUCxNQUFNO0FBQUEsWUFDUjtBQUFBLFlBQ0E7QUFBQSxjQUNFLEtBQUs7QUFBQSxjQUNMLE1BQU07QUFBQSxjQUNOLE9BQU87QUFBQSxZQUNUO0FBQUEsWUFDQTtBQUFBLGNBQ0UsS0FBSztBQUFBLGNBQ0wsTUFBTTtBQUFBLGNBQ04sT0FBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBQUEsVUFDQSxXQUFXO0FBQUEsVUFDWCxTQUFTO0FBQUEsVUFDVCxhQUFhO0FBQUEsVUFDYixrQkFBa0I7QUFBQSxRQUNwQjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
