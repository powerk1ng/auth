import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import envCompatible from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), envCompatible()],
  server: {
    port: 3000,
  },
  root: path.resolve(__dirname, "."),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})