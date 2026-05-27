import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://josue-dev-02.tech',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});