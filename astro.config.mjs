import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://federicogarciabarreiro.github.io',
  base: 'porfolio',
  integrations: [tailwind()],
})
