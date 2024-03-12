import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Replace the default required index.css by main.scss file
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style/main.scss";`
      },
    },
  },
})
