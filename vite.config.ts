import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  resolve: {
    alias: {
      "@mocks": path.resolve(__dirname, "/mocks"),
      "@bootstrap": path.resolve(__dirname, "/src/bootstrap"),
      "@logging": path.resolve(__dirname, "/src/logging"),
    },
  },
});
