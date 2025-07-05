// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),
//     tailwindcss(),
//   ],
  
// })

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from 'path'
// import { fileURLToPath } from 'url'

// // ESM-safe __dirname replacement
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(), // Optional: only if your custom plugin exists
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

