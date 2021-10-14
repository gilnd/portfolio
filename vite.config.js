import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import vitePluginString from 'vite-plugin-string'

export default defineConfig({
  plugins: [
    vue(),
    vitePluginString()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@comp': path.resolve(__dirname, './src/components'),
    }
  },
  server: {
    open: true,
  }
})
