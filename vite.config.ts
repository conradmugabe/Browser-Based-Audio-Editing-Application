import path from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "/src"),
      "@mocks": path.resolve(__dirname, "/mocks"),
      "@tests": path.resolve(__dirname, "/tests"),
      "@logging": path.resolve(__dirname, "/src/logging"),
      "@monitoring": path.resolve(__dirname, "/src/monitoring"),
      "@bootstrap": path.resolve(__dirname, "/src/bootstrap"),
      "@auth": path.resolve(__dirname, "/src/auth"),
      "@users": path.resolve(__dirname, "/src/users"),
    },
  },
});
