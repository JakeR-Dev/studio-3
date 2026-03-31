import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  base: '/studio-3/',
  build: {
    cssMinify: 'esbuild',
  },
});
