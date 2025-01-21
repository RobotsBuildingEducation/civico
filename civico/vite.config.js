import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: parseInt(process.env.npm_config_port),
  },
  plugins: [
    react(),
    VitePWA({
      workbox: {
        maximumFileSizeToCacheInBytes: 4000000, // Set to 4MB or any higher value
      },
      manifest: {
        name: "Civico",
        short_name: "Civico",
        start_url: "./",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff",
        description: "PWA install handler package for Civico",
        icons: [
          {
            src: "https://res.cloudinary.com/dtkeyccga/image/upload/v1732001090/Untitled_design_54_uj4q2v.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
    }),
  ],
  base: "/",
});
