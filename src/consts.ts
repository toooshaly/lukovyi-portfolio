/**
 * Єдине джерело правди для метаданих сайту.
 * Змінюєш тут — оновлюється скрізь (header, footer, SEO, JSON-LD).
 */

export const SITE = {
  name: "Anton Lukovyi",
  role: "Freelance UX/UI Designer",
  url: "https://desluko.com",
  email: "lukovyiwork@gmail.com",
  location: "Celle, Germany",
  description:
    "Freelance UX/UI designer from Celle, Germany. I help startups and businesses create intuitive, user-centered interfaces — from research and wireframes to pixel-perfect designs ready for development.",
} as const;

/** Головна навігація. `num` — моно-нумерація в стилі поточного сайту. */
export const NAV = [
  { num: "01", label: "Home", href: "/" },
  { num: "02", label: "About Me", href: "/about-me" },
  { num: "03", label: "Projects", href: "/projects" },
  { num: "04", label: "Contact", href: "/contact" },
] as const;

/** Соцмережі (реальні URL з поточного сайту). */
export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/anton-lukovyi/" },
  { label: "Instagram", href: "https://www.instagram.com/desluko" },
  { label: "Behance", href: "https://www.behance.net/antonlukovyiproject" },
  { label: "Dribbble", href: "https://dribbble.com/Lukovyi" },
  { label: "Telegram", href: "https://t.me/tooshaly" },
] as const;

/** Послуги (з футера поточного сайту). */
export const SERVICES = [
  "Webflow Development",
  "UX/UI Design",
  "Figma to Webflow",
] as const;
