<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Generate Design Document

A Design Document translates the PRD's requirements into visual and interactive specifications. This involves selecting an inspirational design from platforms such as Dribbble or Mobbin and then using that inspiration to guide the creation of a detailed design document by sharing the link to gemini and asking it to make a design doc based on that. This document typically includes wireframes, mockups, and user interface (UI) specifications.

Here is the complete **Design Document** for the Chamak Fish Feed website, with curated Dribbble/Mobbin inspiration links and full UI specifications ready to paste into Figma or hand to your developer.[^1][^2][^3]

***

# Design Document (DD)

## Chamak Fish Feed — Official Website

**Version:** 1.0 | **Date:** February 2026 | **Based on PRD v1.0**

***

## 1. Design Inspiration References

Use these links to brief Gemini or guide your Figma work:[^2][^3][^1]


| Source | Link | What to use from it |
| :-- | :-- | :-- |
| Dribbble — Agriculture Web | https://dribbble.com/search/agriculture-website-design | Hero sections, product card layouts, section spacing |
| Dribbble — Aquaculture | https://dribbble.com/search/aquaculture | Color palette, icon styles, nature-inspired layouts |
| Dribbble — Fishery | https://dribbble.com/tags/fishery | Fish brand visual identity, trust-building UI patterns |
| Mobbin — Food \& Agriculture | https://mobbin.com/browse/web/screens | Real-world product page patterns, CTA placement |
| Land-book Gallery | https://land-book.com | Full landing page references for premium agro brands |

> **Gemini Prompt to generate your design doc from inspiration:**
> *"Here is the link to a website design I find inspiring: [paste Dribbble/Mobbin link]. Based on this visual style, generate a detailed UI Design Document for a fish feed company website called 'Chamak Fish Feed' in Bangladesh. The brand colors are Navy \#1A2433, Teal \#2A8A8A, Background \#F8FAFA, Gold \#FFB703. The font is Poppins. The site has these pages: Homepage, About, Products, Why Chamak, Dealer Network, Contact."*

***

## 2. Design Principles

- **Light \& Airy:** Soft white `#F8FAFA` backgrounds with generous whitespace — never crowded
- **Trust First:** Dark navy headings and rounded cards signal reliability to farmers
- **Mobile First:** Design for 375px screen width first, expand to 1280px desktop
- **Bengali Readability:** Body font minimum 16px, line height 1.7 for Bangla text
- **Icon-led:** Use solid, rounded icons in Teal — never thin-line or outline-only

***

## 3. Grid \& Spacing System

| Element | Value |
| :-- | :-- |
| Desktop container max-width | 1200px |
| Mobile container padding | 16px each side |
| Section vertical spacing | 80px (desktop) / 48px (mobile) |
| Card inner padding | 24px |
| Grid columns (desktop) | 12-column grid |
| Grid columns (mobile) | 4-column grid |
| Border radius (cards/buttons) | 12px |
| Border radius (inputs) | 8px |


***

## 4. Typography System

| Type | Font | Weight | Size (desktop) | Size (mobile) | Color |
| :-- | :-- | :-- | :-- | :-- | :-- |
| H1 Hero | Poppins | 700 Bold | 52px | 32px | `#1A2433` |
| H2 Section title | Poppins | 700 Bold | 36px | 26px | `#1A2433` |
| H3 Card title | Poppins | 600 SemiBold | 22px | 18px | `#1A2433` |
| Body (Bengali) | Poppins / Hind Siliguri | 400 Regular | 16px | 15px | `#3D4F5C` |
| Body (English) | Poppins | 400 Regular | 16px | 15px | `#3D4F5C` |
| Caption / Label | Poppins | 500 Medium | 13px | 12px | `#2A8A8A` |
| Button text | Poppins | 600 SemiBold | 15px | 14px | White / `#1A2433` |


***

## 5. Component Library

### 5.1 Buttons

| Type | Background | Text | Border | Use |
| :-- | :-- | :-- | :-- | :-- |
| Primary CTA | `#FFB703` Gold | `#1A2433` Navy | None | "অর্ডার করুন", "Dealer হন" |
| Secondary CTA | `#2A8A8A` Teal | White | None | "পণ্য দেখুন", "আরও জানুন" |
| Outline | Transparent | `#1A2433` | 2px Navy | "Download Spec Sheet" |
| WhatsApp Sticky | `#25D366` Green | White | None | Floating WhatsApp button |

### 5.2 Cards

**Product Spec Card:**

```
┌─────────────────────────────┐
│  [Fish icon / product image]│  ← 160px height, object-fit cover
│  Product Name (H3)          │
│  Species: Tilapia / Carp    │
│  ─────────────────────────  │
│  Protein: 30%  Fat: 5%      │  ← Teal accent numbers
│  Pellet: 3mm   Pack: 25kg   │
│  [Primary CTA Button]       │
└─────────────────────────────┘
```

**Why Chamak Icon Card:**

```
┌─────────────────┐
│   [Icon 48px]   │  ← Teal solid icon
│   Benefit Title │  ← H3
│   Short desc    │  ← Body, 2 lines max
└─────────────────┘
```


### 5.3 Navigation Bar

- **Desktop:** Logo left → Nav links center → "01741973426" + WhatsApp button right
- **Mobile:** Logo left → Hamburger menu right (slide-in drawer)
- Background: White `#FFFFFF` with subtle bottom shadow
- Active link: Teal underline `#2A8A8A`
- Sticky on scroll: Yes, with slight blur backdrop


### 5.4 Footer

- 3-column layout (desktop) / stacked (mobile)
- Col 1: Logo + tagline + social icons
- Col 2: Quick links (Home, Products, About, Contact)
- Col 3: Contact info + address (Bengali)
- Bottom bar: Copyright + "Best Padma Agro Feeds" credit
- Background: Navy `#1A2433`, text: White

***

## 6. Page-by-Page Wireframes

### 6.1 Homepage

```
┌──────────────────────────────────┐
│         NAVBAR (sticky)          │
├──────────────────────────────────┤
│  HERO SECTION                    │
│  [Full-width image: clear pond   │
│   + healthy fish]                │
│  H1: চমক ফিশ ফিড                │
│  Sub: মাছ চাষির বিশ্বস্ত সঙ্গী  │
│  [Primary CTA]  [Secondary CTA]  │
├──────────────────────────────────┤
│  STATS BAR (3 numbers)           │
│  ২টি ব্র্যান্ড | ৫টি পণ্য | ...  │
├──────────────────────────────────┤
│  FEATURED PRODUCTS (3 cards)     │
│  [Card] [Card] [Card]            │
│  + "সব পণ্য দেখুন" button        │
├──────────────────────────────────┤
│  WHY CHAMAK (4 icon cards)       │
│  Oil Coated | Low FCR | Fresh    │
│  Stock | Local Made              │
├──────────────────────────────────┤
│  ABOUT SNAPSHOT                  │
│  Image left | Text right         │
│  (Factory photo: Inam Feed Mill) │
├──────────────────────────────────┤
│  FARMER TESTIMONIAL              │
│  Quote card + farmer photo       │
├──────────────────────────────────┤
│  CTA STRIP (full-width teal bg)  │
│  "আজই যোগাযোগ করুন: 01741973426"│
├──────────────────────────────────┤
│           FOOTER                 │
└──────────────────────────────────┘
```


### 6.2 Products Page

```
┌──────────────────────────────────┐
│  Page Header (Navy bg, H2)       │
│  Tab Switcher: [চমক] [বায়োটেক]  │
├──────────────────────────────────┤
│  Product Grid (2-col desktop,    │
│  1-col mobile)                   │
│  [Spec Card] [Spec Card]         │
│  [Spec Card] [Spec Card]         │
├──────────────────────────────────┤
│  PDF Download Strip              │
│  "সম্পূর্ণ পণ্য তালিকা ডাউনলোড" │
└──────────────────────────────────┘
```


### 6.3 Contact Page

```
┌──────────────────────────────────┐
│  Page Header                     │
├──────────────────────────────────┤
│  [Contact Form]  [Info Panel]    │
│   Name                Phone      │
│   Phone              Address     │
│   Message            Map Embed   │
│   [Send Button]                  │
└──────────────────────────────────┘
```


***

## 7. Mobile-Specific Specs

- Hamburger: 3-line icon, 24px, opens full-screen drawer (Navy background, white text)
- Sticky WhatsApp FAB: Bottom-right, 56px circle, `#25D366`
- Product cards: Full-width stacked, swipeable horizontal scroll for featured products on homepage
- CTA buttons: Full-width on mobile (100% container width)
- Font size: Never below 14px on mobile

***

## 8. Asset Checklist (Before Dev Handoff)

- [ ] Logo files: SVG (Navy), SVG (White), PNG (transparent) — 1x and 2x
- [ ] Favicon: 32×32px and 180×180px (Apple touch icon)
- [ ] Hero image: 1440×800px (desktop), 768×500px (tablet), 375×400px (mobile)
- [ ] Factory photo: Inam Feed Mill, Dhopapara, Puthia
- [ ] Product bag photos: Chamak Carp Grower, Chamak Floating, Biotech bags
- [ ] Founder photo: মো. খায়রুল বাশার
- [ ] Icons: 6–8 solid rounded icons (fish, pellet, leaf, shield, phone, location)
- [ ] OG Image: 1200×630px branded image for social sharing

***

## 9. Figma File Structure (Recommended)

```
📁 Chamak Fish Feed — Design
  ├── 🎨 Styles (Colors, Typography, Shadows)
  ├── 🧩 Components (Buttons, Cards, Nav, Footer)
  ├── 📱 Mobile Screens (375px)
  │     ├── Homepage
  │     ├── Products
  │     ├── About
  │     └── Contact
  └── 🖥️ Desktop Screens (1280px)
        ├── Homepage
        ├── Products
        ├── About
        └── Contact
```


***

This Design Document is ready to hand to your Figma designer or paste directly into a Gemini/AI design tool for screen generation. Let me know if you want me to write the **React component structure** or the **Tailwind CSS config** based on this design system.
<span style="display:none">[^10][^11][^12][^13][^14][^15][^16][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://dribbble.com/search/agriculture-website-design

[^2]: https://www.webdesignawards.io/tools/mobbin

[^3]: https://dribbble.com/search/aquaculture

[^4]: work.company

[^5]: https://dribbble.com/tags/fish-farming

[^6]: https://dribbble.com/tags/agriculture

[^7]: https://dribbble.com/search/web-fish

[^8]: https://dribbble.com/tags/fishery

[^9]: https://www.reddit.com/r/webdesign/comments/1i3go8q/25_best_ui_design_inspiration_websites_for_2025/

[^10]: https://dribbble.com/tags/fish-website

[^11]: https://www.youtube.com/watch?v=u6quiPYzFtI

[^12]: https://www.youtube.com/watch?v=McWyEtbf7eI

[^13]: https://fountn.design/resource/mobbin/

[^14]: https://land-book.com

[^15]: https://toolfolio.io/blog/inspiration-library-for-mobile-app-web-design

[^16]: https://www.gooddesign.tools/tools/dribbble

