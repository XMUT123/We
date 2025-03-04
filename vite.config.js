import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/We/',
  server: {
    fs: {
      strict: false
    },
    middlewares: [
      (req, res, next) => {
        if (req.url.endsWith('.jsx')) {
          res.setHeader('Content-Type', 'application/javascript')
        }
        next()
      }
    ]
  }
})
