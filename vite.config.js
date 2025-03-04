import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/We/',
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  server: {
    host: true,
    port: 5174,
    strictPort: true,
    fs: {
      strict: false,
      allow: ['../']
    },
    middlewares: [
      (req, res, next) => {
        if (req.url.endsWith('.jsx')) {
          res.setHeader('Content-Type', 'application/javascript; charset=utf-8')
        }
        next()
      }
    ],
    cors: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
