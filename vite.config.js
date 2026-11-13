import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url' // Nativo de Node.js
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Esto inyecta las variables automáticamente en cada archivo SCSS
        additionalData: `@use "@/styles/variables" as v; @use "@/styles/mixins" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      // Esto le dice a Vite que '@' apunta a la carpeta 'src'
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
