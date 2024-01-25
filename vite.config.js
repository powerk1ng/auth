import { dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import envCompatible from "vite-plugin-env-compatible";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), envCompatible()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        secure: false,
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@backend": path.resolve(__dirname, "backend"),
    },
  },
});
