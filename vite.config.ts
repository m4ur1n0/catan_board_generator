import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/catan_board_generator/',
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches the output directory you want
  },
});
