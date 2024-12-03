import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      //Route used as a proxy at the frontend
      '/api': {
        target: 'https://zenquotes.io', // API URL
        changeOrigin: true,
      },
    },
  },
});
