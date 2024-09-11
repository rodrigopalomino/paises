import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/pixabay-api": {
        target: "https://pixabay.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pixabay-api/, ""),
      },
    },
  },
});
