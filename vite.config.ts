import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ВАЖНО: замените 'eldosh-sayt' на точное название вашего репозитория на GitHub
  base: '/eldosh-sayt/',
  server: {
    port: 3000,
    host: true
  }
});
