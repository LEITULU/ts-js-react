import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ts-js-react/',
  build: {
    outDir: 'docs', // ← distではなくdocsに出力
  },
  plugins: [react()],
})
