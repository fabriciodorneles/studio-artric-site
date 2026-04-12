import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://studioartric.com.br',
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },
});
