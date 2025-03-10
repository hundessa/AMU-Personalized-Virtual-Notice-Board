import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "AMU Personalized Virtual Notice Board",
        short_name: "AMUNoticeBoard",
        description: "Amu personalized notice board progressive web app",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/src/assets/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/src/assets/logo1.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
    tailwindcss(),
  ],
});
