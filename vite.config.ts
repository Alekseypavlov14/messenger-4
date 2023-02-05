import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      "@features": join(__dirname, './src/features'),
      "@pages": join(__dirname, './src/pages'),
      "@assets": join(__dirname, './src/assets'),
      "@utils": join(__dirname, './src/utils'),
      "@shared": join(__dirname, './src/shared'),
      "@entities": join(__dirname, './src/entities'),
      "@type": join(__dirname, './src/types'),
      "@widgets": join(__dirname, './src/widgets'),
    }
  }
})
