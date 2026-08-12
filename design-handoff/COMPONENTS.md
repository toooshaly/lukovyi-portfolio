# COMPONENTS — інвентар екранів і компонентів

Claude Design має спроєктувати КОЖЕН пункт із усіма станами.
Праворуч — class-назви, які використовує код (щоб стилі лягли 1:1;
можна лишити ці ж імена).

## Екрани
1. **Lock screen** `.lock` — шпалера, дата, великий годинник `.lock-clock`,
   аватар-спіраль `.avatar`, ім'я/роль, кнопка `.unlock-btn`, підказка внизу.
2. **Desktop** — центрований блок: інтро-картка `.intro` (аватар + kicker
   `.intro-kicker` + текст + лінк `.intro-more`) та сітка іконок `.icons`.
3. **Case / About / Contact** — контент у вікні `.win` (див. Window).

## Компоненти (зі станами)
- **MenuBar** `.menubar`: лого-спіраль + ім'я `.menu-name`, пункти `.menu-item`
  (About/Work/Contact), пошук `.menu-search`, соцлінки, дата/час.
- **AppIcon** `.app-tile` + підпис `.icon-label`: крафтові плитки Big Sur-стилю.
  Типи: folder (Case Studies), book (About), mail (Contact), doc (Resume),
  camera (Photos), dribbble, behance, linkedin.
  Стани: normal · hover (підйом+тінь) · **selected** (заокруглена підкладка
  `.icon.selected::before` + синій підпис) · dragging.
- **Dock** `.dock` + плитки `.dock-app`: Figma/Webflow/Framer/Notion/Claude/
  Photoshop, кольорові градієнти, hover-магніфікація.
- **Widgets** `.widget` (панель зверху-справа):
  - Choose a theme — 4 свотчі `.sw`
  - Weather — місто + °C
  - **Now Playing** `.np` — кнопка play `.np-play`, назва/виконавець, прогрес `.np-bar`/`.np-fill`
- **Spotlight** `.sl` (⌘K): поле `#sl-input`, список `.sl-item` (title `.sl-t` + sub `.sl-s`), active-стан.
- **Window** `.win`: тайтлбар `.win-bar` зі «світлофором» (`.l-close/.l-min/.l-max`),
  заголовок `.win-title`, тіло `.win-content` (скрол).
- **CaseStudy layout** усередині вікна: hero (категорія, H1, summary, meta-грід),
  обкладинка, **метрики** (великі цифри), **таблиця воронки**, секції-проза
  `.case-content` (h2/h3/h4, blockquote-callout, зображення-мокапи), CTA.
- **About This Mac** `.am-card`: спіраль, ім'я, роль, список «характеристик».
- **Context menu** `.ctx` (права кнопка): About / Change theme / Clean up icons.
- **Selection menu** `.ctx` (на виділеній іконці): Tidy up / Deselect + пілюля
  `.selpill` «N selected».
- **Marquee** `.marquee`: напівпрозорий синій прямокутник виділення.
- **Password modal** `.pw-card`: замок, текст, поле, Cancel/Unlock.

## Асети, яких БРАКУЄ (Claude Design має намалювати)
- 8 крафтових об'єктів-іконок столу (тека, книжка, конверт, документ,
  камера + бренд-марки Dribbble/Behance/LinkedIn) — окремими **SVG**.
- Іконки dock (за бажанням — справжні лого замість літер).
- Спіраль-знак у 2–3 розмірах.
- (Опційно) фонові шпалери 4 тем як зображення.

## Респонсив
- Десктоп — головний. Мобільний — спрощений fallback (віджети ховаються,
  іконки в 3 колонки, вікно на весь екран).
