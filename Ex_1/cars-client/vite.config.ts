import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "cars",
      filename: "remoteEntry.js",
      exposes: {
        APP: "./src/App",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5002,
  },
});
