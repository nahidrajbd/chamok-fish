<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Generate Tech Rules (Tech Stack Definition)

Defining the technical rules and the technology stack is a foundational step that dictates the tools, frameworks, languages, and platforms to be used throughout the project. This ensures consistency, compatibility, and scalability. The tech rules should clearly outline the chosen technologies and any specific guidelines for their implementation.

Here is the complete **Tech Stack Definition \& Technical Rules Document** for the Chamak Fish Feed website.

***

# Tech Stack Definition \& Technical Rules

## Chamak Fish Feed — Official Website

**Version:** 1.0 | **Date:** February 2026 | **Ref:** PRD v1.0 + DD v1.0

***

## 1. Project Tech Stack Overview

```
┌─────────────────────────────────────────┐
│           FRONTEND (Client)             │
│  Next.js 14 (App Router) + React 18     │
│  Tailwind CSS + shadcn/ui               │
├─────────────────────────────────────────┤
│           CONTENT / DATA                │
│  MDX files (Blog/Tips — Phase 2)        │
│  JSON / constants (Product data)        │
├─────────────────────────────────────────┤
│           FORMS & COMMUNICATION         │
│  EmailJS (Contact/Dealer inquiry forms) │
├─────────────────────────────────────────┤
│           HOSTING & DEPLOYMENT          │
│  Vercel (auto-deploy from GitHub)       │
├─────────────────────────────────────────┤
│           ANALYTICS & SEO              │
│  Google Analytics 4 + Search Console    │
└─────────────────────────────────────────┘
```


***

## 2. Technology Choices (Justified)

| Layer | Technology | Version | Why |
| :-- | :-- | :-- | :-- |
| Framework | **Next.js** | 14 (App Router) | SSR/SSG for SEO — critical for Bengali Google ranking; fast page loads |
| UI Library | **React** | 18 | Component-based; reusable product cards, nav, footer |
| Styling | **Tailwind CSS** | 3.x | Utility-first; fast to build; easy to maintain brand colors |
| Component Kit | **shadcn/ui** | Latest | Pre-built accessible components (dialogs, tabs, forms) |
| Language | **TypeScript** | 5.x | Type safety; prevents bugs in product data structures |
| Package Manager | **pnpm** | Latest | Faster installs, efficient disk usage vs npm |
| Icons | **Lucide React** | Latest | Solid, rounded icons — matches brand icon style |
| Forms | **EmailJS** | v4 | No backend needed; form submissions → email/WhatsApp notification |
| Animation | **Framer Motion** | 11.x | Smooth scroll animations for section reveals (minimal use) |
| Fonts | **Google Fonts (Poppins + Hind Siliguri)** | — | Bengali + English typography as per Design Doc |
| Hosting | **Vercel** | — | Zero-config Next.js deploy; free SSL; global CDN |
| Repo | **GitHub** | — | Version control; Vercel auto-deploys on push to `main` |
| Analytics | **Google Analytics 4** | — | Track visitor behavior, CTA clicks, WhatsApp taps |
| SEO | **next-seo** package | Latest | Centralized meta tags, OG tags, structured data per page |
| Maps | **Google Maps Embed API** | — | Factory + office location embed on Contact page |
| Image Optimization | **Next.js Image (`<Image />`)** | Built-in | Auto WebP conversion, lazy loading, responsive sizes |


***

## 3. Project Folder Structure

```
chamak-fish-feed/
├── public/
│   ├── images/          ← Product photos, hero, factory, founder
│   ├── icons/           ← SVG icons and favicon
│   └── logo/            ← Logo variants (navy, white, transparent)
│
├── src/
│   ├── app/             ← Next.js App Router pages
│   │   ├── layout.tsx   ← Root layout (Navbar + Footer)
│   │   ├── page.tsx     ← Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── products/
│   │   │   └── page.tsx
│   │   ├── why-chamak/
│   │   │   └── page.tsx
│   │   ├── dealers/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   └── blog/        ← Phase 2
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── WhatsAppFAB.tsx  ← Floating WhatsApp button
│   │   ├── ui/          ← shadcn/ui components
│   │   ├── sections/    ← Homepage section components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── WhyChamak.tsx
│   │   │   ├── AboutSnapshot.tsx
│   │   │   ├── Testimonial.tsx
│   │   │   └── CTAStrip.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   └── BrandTabSwitcher.tsx
│   │   └── forms/
│   │       ├── ContactForm.tsx
│   │       └── DealerInquiryForm.tsx
│   │
│   ├── data/
│   │   ├── products.ts  ← All product specs as TypeScript constants
│   │   ├── dealers.ts   ← Dealer list with location/phone
│   │   └── siteConfig.ts ← Site name, phone, address, social links
│   │
│   ├── lib/
│   │   ├── emailjs.ts   ← EmailJS send function
│   │   └── utils.ts     ← cn() helper + shared utilities
│   │
│   └── styles/
│       └── globals.css  ← Tailwind base + custom CSS variables
│
├── tailwind.config.ts   ← Brand colors + font config
├── next.config.ts       ← Image domains, redirects
├── tsconfig.json
├── .env.local           ← EmailJS keys, GA4 ID (never commit to GitHub)
└── package.json
```


***

## 4. Tailwind CSS Brand Config

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      navy:       '#1A2433',
      teal:       '#2A8A8A',
      gold:       '#FFB703',
      softbg:     '#F8FAFA',
      bodygray:   '#3D4F5C',
    },
    fontFamily: {
      sans:    ['Poppins', 'sans-serif'],
      bengali: ['Hind Siliguri', 'sans-serif'],
    },
    borderRadius: {
      card:   '12px',
      input:  '8px',
    },
  },
}
```


***

## 5. Product Data Structure (TypeScript)

```ts
// src/data/products.ts
export type FishType = 'tilapia' | 'carp' | 'pangas';
export type FeedType = 'floating' | 'sinking' | 'mash';
export type Brand = 'chamak' | 'biotech';

export interface ProductSpec {
  id:           string;
  brand:        Brand;
  nameBn:       string;       // Bengali product name
  nameEn:       string;       // English product name
  feedType:     FeedType;
  pelletSizeMm: number | null;
  packKg:       number;
  protein: {
    tilapia?: number;
    carp?:    number;
    pangas?:  number;
    general?: number;
  };
  fat:          number;
  moisture:     number;
  fiber?:       number;
  energy?:      string;       // "2900-3000 kcal/kg"
  features:     string[];     // ["Oil coated", "High FCR"]
  suitableFor:  FishType[];
  image:        string;       // "/images/products/chamak-carp-grower.jpg"
}
```


***

## 6. SEO Rules (Per Page)

Every page **must** have these implemented via `next-seo`:


| Meta Tag | Rule |
| :-- | :-- |
| `<title>` | Format: `[Page Name] — চমক ফিশ ফিড | Best Padma Agro Feeds` |
| `description` | 140–160 chars, Bengali or English, includes target keyword |
| `og:image` | 1200×630px branded image (unique per major page) |
| `og:type` | `website` for all pages |
| `canonical` | Always set to avoid duplicate content |
| `robots` | `index, follow` for all public pages |
| `hreflang` | `bn` (Bengali) and `en` (English) when bilingual toggle is active |
| Structured Data | `Organization` schema on homepage; `Product` schema on product pages |


***

## 7. Performance Rules

```
- All images must use Next.js `<Image />` — **no raw `<img>` tags**
```

- Images uploaded to `/public/images/` must be **max 200KB** (compress before upload)
- No unused CSS — Tailwind's `purge` is enabled in production by default
- Google Fonts loaded via `next/font` — **not** via `<link>` tag in HTML
- Third-party scripts (GA4, Tawk.to) loaded with `next/script` using `strategy="lazyOnload"`
- Framer Motion animations: use `whileInView` with `once: true` — never loop on scroll

***

## 8. Code Quality Rules

| Rule | Detail |
| :-- | :-- |
| Language | TypeScript only — no `.js` files in `src/` |
| Components | Functional components only — no class components |
| Naming | PascalCase for components; camelCase for functions/variables |
| CSS | Tailwind utility classes only — no inline styles except dynamic values |
| Props | Always type props with TypeScript interfaces |
| Data | All product/dealer data lives in `src/data/` — never hardcoded in JSX |
| Forms | All form submissions handled via EmailJS — no direct API keys in frontend |
| Env vars | All secrets in `.env.local` — never committed to Git |
| Commits | Conventional commits: `feat:`, `fix:`, `style:`, `chore:` |


***

## 9. Environment Variables

```bash
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_CONTACT=your_template_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_DEALER=your_dealer_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_MAPS_KEY=your_maps_key
NEXT_PUBLIC_WHATSAPP_NUMBER=8801741973426
```


***

## 10. Deployment Rules

| Stage | Branch | Action |
| :-- | :-- | :-- |
| Development | `dev` | Local `pnpm dev` on `localhost:3000` |
| Staging | `staging` | Auto-deploy to Vercel preview URL |
| Production | `main` | Auto-deploy to live domain on push |

- **Never push directly to `main`** — always merge via Pull Request
- Vercel environment variables set separately for Production vs Preview
- Run `pnpm build` locally before merging to confirm zero build errors

***

This document is now ready to paste directly into your GitHub repo as `TECH_RULES.md` or hand to your developer as the definitive implementation guide. The next step would be generating the **React component boilerplate** — let me know if you want that.

