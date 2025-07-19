import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "flights",
      filename: "remoteEntry.js",
      exposes: {
        "./Flights": "./src/Flights.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],

  server: {
    port: 5001,
  },
});
