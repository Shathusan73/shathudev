import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or vue, etc.

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  base: '/' // This is important for deployment
})