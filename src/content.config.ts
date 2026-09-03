import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * Колекція кейсів. Кожен кейс — один .mdx файл у src/content/projects/.
 * Поля нижче — «контракт»: Astro перевіряє їх при збірці й підкаже,
 * якщо щось забуте чи неправильного типу. Додати новий кейс = новий файл.
 */
const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      /** Назва кейсу, напр. "SPORTS AI-PRO" */
      title: z.string(),
      /** Категорія, напр. "Mobile App", "B2B SaaS Platform" */
      category: z.string(),
      /** Короткий опис (список проєктів + SEO fallback) */
      summary: z.string(),
      /** Порядок у списку проєктів (менше = вище) */
      order: z.number(),
      /** Показати першим/виділеним на головній */
      featured: z.boolean().default(false),
      /** Мітка статусу, напр. "SOON" (кейс ще готується) */
      status: z.string().optional(),
      /** Мета для sticky-сайдбара кейсу */
      year: z.string().optional(),
      role: z.string().optional(),
      timeline: z.string().optional(),
      client: z.string().optional(),
      location: z.string().optional(),
      team: z.string().optional(),
      scope: z.string().optional(),
      /** Короткий інтро-абзац під мета у сайдбарі */
      intro: z.string().optional(),
      /** TL;DR — рядки {label, body} у контент-колонці */
      tldr: z
        .array(z.object({ label: z.string(), body: z.string() }))
        .optional(),
      /** Ключові метрики (виводяться великими цифрами) */
      metrics: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .optional(),
      /** Обкладинка (кладеться поряд із .mdx або у src/assets) */
      cover: image().optional(),
      /** Відео-обкладинка (шлях у /public, напр. "/video/x.mp4"); cover — poster */
      coverVideo: z.string().optional(),
      /** SEO-перевизначення (необов'язкові) */
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      /** Чернетка — не публікується у продакшн-збірці */
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
