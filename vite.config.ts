import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

import Sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    Sitemap({
      hostname: 'https://artemkloko.github.io',
      dynamicRoutes: [
        '/en',
        '/de'
      ],
      readable: true
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue') || id.includes('@unhead')) {
              return 'vendor-vue';
            }
            if (id.includes('fortawesome')) {
              return 'vendor-icons';
            }
          }
        }
      }
    }
  }
})
