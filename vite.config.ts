import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'


export default defineConfig({
  base: '/da-portfolio/', 
  plugins: [
    // figmaAssetResolver(), 
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(new URL('./src', import.meta.url).pathname),
    },
  },
  assetsInclude: ["**/*.svg", "**/*.csv"],
});