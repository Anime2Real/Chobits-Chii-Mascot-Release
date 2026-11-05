import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig(() => ({
  base: './',
  // kimi-plugin-inspect-react 已移除：其 peer 仍锁 vite ^7.2.0，与 vite 8 无法共存
  // （npm ci 直接 ERESOLVE 失败）。它只在 dev 下提供元素审查属性，等其支持 vite 8 再引回。
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
