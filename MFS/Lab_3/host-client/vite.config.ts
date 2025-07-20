import federation from "@originjs/vite-plugin-federation";
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const isDev = command === "serve";
  const isProd = command === "build";

  return {
    plugins: [
      react(),
      federation({
        name: "host",
        remotes: {
          flights: "http://localhost:5001/assets/remoteEntry.js"
        },
        shared: ["@mui/material", "react", "react-dom", "@mui/x-data-grid"],
      }),
    ],
    define: {
      __APP_ENV__: JSON.stringify(mode),
    },
    server: {
      port: isDev ? 3000 : 8080,
    },
    build: {
      sourcemap: isProd,
    },
  };
});
