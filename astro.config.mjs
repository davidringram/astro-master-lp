// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://your-future-domain.com',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    alpinejs(), 
    icon() // You can keep this simple; it will auto-detect the @iconify-json/lucide package
  ]
});