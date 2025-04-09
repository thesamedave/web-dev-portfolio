import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/web-dev-portfolio/',  // Asegúrate de cambiar esto a tu nombre de repositorio
  plugins: [react()],
})
