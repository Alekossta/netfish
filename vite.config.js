import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    brotliSize: false, // Disable Brotli size reporting
  },
});
