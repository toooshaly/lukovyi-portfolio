// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Фінальний домен сайту. Потрібен для sitemap.xml і canonical URL.
  site: "https://desluk.com",

  // Прибирає панель розробника Astro знизу екрана (вона й так лише локальна)
  devToolbar: { enabled: false },

  // Стару /projects і /lab злили в єдину /work — тримаємо старі URL живими.
  redirects: {
    "/projects": "/work",
    "/lab": "/work",
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()]
});