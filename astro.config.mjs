import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://federicogarciabarreiro.github.io',
  base: 'porfolio',
  integrations: [react(), tailwind()],
})