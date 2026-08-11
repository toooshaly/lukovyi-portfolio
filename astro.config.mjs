// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Фінальний домен сайту. Потрібен для sitemap.xml і canonical URL.
  // TODO: замінити на реальний домен після деплою (має збігатися з SITE.url у src/consts.ts).
  site: "https://lukovyi.netlify.app",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()]
});