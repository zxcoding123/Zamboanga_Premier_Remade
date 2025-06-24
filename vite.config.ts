import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()], // ✅ clean and correct
    assetsInclude: ['**/*.glb'], // 👈 Add this line
})
