import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/eldosh-motors/',
  server: {
    port: 3000,
    host: true
  }
});

