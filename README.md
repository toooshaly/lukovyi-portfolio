# Anton Lukovyi — Portfolio

Статичне портфоліо на **Astro + Tailwind CSS + TypeScript**.
Швидке, без підписок, розгортається на Netlify (безкоштовний тариф).

## Запуск локально

Потрібен Node.js 22+.

```bash
npm install      # встановити залежності (один раз)
npm run dev      # локальний сервер: http://localhost:4321
npm run build    # зібрати продакшн-версію в /dist
npm run preview  # переглянути зібрану версію локально
```

## Як додати новий кейс

Один кейс = **один файл**. Створи `src/content/projects/<slug>.mdx`:

```mdx
---
title: "НАЗВА КЕЙСУ"
category: "Mobile App"          # тип проєкту
summary: "Один рядок опису для списку та SEO."
order: 6                         # порядок у списку (менше = вище)
featured: false                  # true — показати першим на головній
year: "2025"                     # опційно
role: "UX/UI Design"             # опційно
timeline: "6 weeks"              # опційно
client: "Client name"            # опційно
metrics:                         # опційно — великі цифри в шапці
  - value: "+38%"
    label: "Conversion rate"
# cover: ./cover.png             # опційно — обкладинка поряд із цим файлом
---

## Overview
Текст кейсу у форматі Markdown…

## The problem
…

## Solution
…
```

Сторінка `/projects/<slug>`, картка на головній і в списку проєктів
з'являться автоматично. Нічого більше правити не треба.

- **Приховати кейс** з продакшну: додай `draft: true` у метадані.
- **Статус «SOON»**: додай `status: "SOON"` (картка стане неактивною).

## Де що лежить

```
src/
  components/        перевикористовувані блоки (Header, Footer, Button, ProjectCard…)
  layouts/           BaseLayout (усі сторінки) + CaseStudyLayout (кейси)
  pages/             index, about-me, contact, projects/ (+ [slug].astro)
  content/projects/  кейси (.mdx) — редагуй тут
  styles/global.css  дизайн-токени (кольори, шрифти)
  consts.ts          навігація, соцмережі, контакти — єдине джерело правди
public/
  fonts/             самохостовані шрифти
  og-default.png     прев'ю для соцмереж (заміни на власне за бажанням)
  robots.txt
```

## Змінити кольори / шрифти / контакти

- **Кольори і шрифти** — `src/styles/global.css` (блок `@theme`).
- **Ім'я, роль, пошта, навігація, соцмережі** — `src/consts.ts`.

## Деплой на Netlify

1. Заливаєш репозиторій на GitHub.
2. На Netlify: **Add new site → Import from Git** → обираєш репозиторій.
   Команда збірки й папка публікації вже прописані в `netlify.toml`.
3. Після деплою заміни домен у двох місцях на реальний:
   - `site` у `astro.config.mjs`
   - `SITE.url` у `src/consts.ts`
   - адресу sitemap у `public/robots.txt`

**Форма контакту** працює на Netlify Forms автоматично (без коду) —
повідомлення з'являтимуться у вкладці *Forms* панелі Netlify.
