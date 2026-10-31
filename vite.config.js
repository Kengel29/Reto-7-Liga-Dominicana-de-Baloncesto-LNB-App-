import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ¡Esto es para que evita el error 404 en las rutas de los scripts!
})
