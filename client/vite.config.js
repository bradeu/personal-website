import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './src/__tests__/setup.js',
    },
    server: {
      origin: 'http://localhost:5173',
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      manifest: true,
      rollupOptions: {
          input: './src/main.jsx',
          output: {
              assetFileNames: (file) => {
                  if (String(file.name).endsWith('.css')) {
                      return `assets/css/[name].min.css`
                  }
                  
                  return 'assets/content/[name].[ext]'
              },
              entryFileNames: () => {
                  return 'assets/js/[name].min.js'
              }
          },
      }
    }
})
