<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Generate Todo Markdown File ([todo.md](http://todo.md))

Once the PRD, Design Document, and Tech Rules are finalized and placed in the project's source folder, the next step is to generate a [todo.md](http://todo.md) file. This file, created by the vibe coder after analyzing the three foundational documents, will break down the project into manageable, feature-specific tasks. This approach ensures that development progresses systematically, tackling one feature at a time.

Here is the complete `todo.md` file based on the PRD, Design Document, and Tech Rules. Copy this directly into your project root.

***

```markdown
# todo.md — Chamak Fish Feed Website
**Project:** Best Padma Agro Feeds — Chamak Fish Feed Official Website
**Stack:** Next.js 14 (Static Export) + Tailwind CSS + TypeScript + Cloudflare Pages
**Ref docs:** PRD v1.0 | DD v1.0 | TECH_RULES v1.0
**Last updated:** February 2026

---

## PHASE 0 — Project Setup
- [ ] Initialize Next.js 14 project with TypeScript
      `pnpx create-next-app@latest chamak-fish-feed --typescript --tailwind --app`
- [ ] Configure `output: 'export'` in `next.config.ts` for Cloudflare Pages
- [ ] Install dependencies:
      `pnpm add framer-motion lucide-react next-seo emailjs-browser`
      `pnpm add -D @types/node`
- [ ] Install and initialize shadcn/ui
      `pnpx shadcn-ui@latest init`
- [ ] Set up Google Fonts (Poppins + Hind Siliguri) via `next/font`
- [ ] Configure Tailwind brand colors in `tailwind.config.ts`
      (navy #1A2433, teal #2A8A8A, gold #FFB703, softbg #F8FAFA, bodygray #3D4F5C)
- [ ] Set up `.env.local` with all environment variables
      (EmailJS keys, GA4 ID, Google Maps key, WhatsApp number)
- [ ] Create `globals.css` with CSS custom properties and Tailwind base
- [ ] Set up GitHub repo and connect to Cloudflare Pages
- [ ] Configure Cloudflare Pages build settings:
      Build command: `pnpm build`
      Output directory: `out`
- [ ] Add environment variables to Cloudflare Pages dashboard
      (Production + Preview separately)
- [ ] Create folder structure as defined in TECH_RULES.md

---

## PHASE 1 — Data Layer
- [ ] Create `src/data/siteConfig.ts`
      (site name, phone 01741973426, WhatsApp number, address BN+EN, social links)
- [ ] Create `src/data/products.ts`
      Define `ProductSpec` TypeScript interface
      Add all 5 products:
      - [ ] Chamak Carp Grower (Sinking, 3.5mm, 25kg)
      - [ ] Chamak Floating Feed Oil Coated (Tilapia 30% / Pangas 28% / Carp 23%, 25kg)
      - [ ] Biotech Nursery / Carp Care (Mash, 36% protein, 20kg)
      - [ ] Biotech Floating Grower (Tilapia/Carp/Pangas, 3mm–4mm, 20kg)
      - [ ] Biotech Carp Grower Premium (24%) + Economy (22%) (25kg)
- [ ] Create `src/data/dealers.ts`
      Add all known Rajshahi dealers with name, location, phone

---

## PHASE 2 — Layout Components
- [ ] Build `Navbar.tsx`
      - [ ] Logo (left) + Nav links (center) + Phone + WhatsApp CTA (right)
      - [ ] Mobile hamburger menu with slide-in drawer
      - [ ] Sticky on scroll with backdrop blur
      - [ ] Active link indicator (teal underline)
      - [ ] Bilingual label support (BN/EN)
- [ ] Build `Footer.tsx`
      - [ ] 3-column desktop / stacked mobile layout
      - [ ] Col 1: Logo + tagline + social icons
      - [ ] Col 2: Quick navigation links
      - [ ] Col 3: Contact info + address (Bengali)
      - [ ] Bottom bar: Copyright + Best Padma Agro Feeds credit
      - [ ] Navy `#1A2433` background
- [ ] Build `WhatsAppFAB.tsx`
      - [ ] Sticky floating button bottom-right
      - [ ] Green `#25D366` background, 56px circle
      - [ ] Links to `https://wa.me/8801741973426`
      - [ ] Visible on all pages
- [ ] Wrap all pages in root `layout.tsx` with Navbar + Footer + WhatsAppFAB

---

## PHASE 3 — Homepage Sections
- [ ] Build `HeroSection.tsx`
      - [ ] Full-width background image (clear pond + fish)
      - [ ] H1: "চমক ফিশ ফিড" + subtitle
      - [ ] Primary CTA button (Gold): "আমাদের পণ্য দেখুন"
      - [ ] Secondary CTA button (Teal): "Dealer হন"
      - [ ] Framer Motion fade-in on load
- [ ] Build `StatsBar.tsx`
      - [ ] 3 animated count-up numbers (2 brands, 5 products, phone)
      - [ ] Navy background, white text
- [ ] Build `FeaturedProducts.tsx`
      - [ ] Show 3 featured product cards (horizontal scroll on mobile)
      - [ ] "সব পণ্য দেখুন" link to /products
- [ ] Build `WhyChamak.tsx`
      - [ ] 4 icon cards: Oil Coated | Low FCR | Fresh Stock | Local Made
      - [ ] Teal solid Lucide icons, 48px
      - [ ] Framer Motion stagger animation on scroll
- [ ] Build `AboutSnapshot.tsx`
      - [ ] Image left (factory photo) + text right (2–3 lines about company)
      - [ ] Link to /about page
- [ ] Build `Testimonial.tsx`
      - [ ] Farmer quote card with photo placeholder
      - [ ] Teal left border accent
- [ ] Build `CTAStrip.tsx`
      - [ ] Full-width Teal background
      - [ ] "আজই যোগাযোগ করুন: 01741973426" + WhatsApp button
- [ ] Assemble all sections in `app/page.tsx` (Homepage)

---

## PHASE 4 — Products Page
- [ ] Build `BrandTabSwitcher.tsx`
      - [ ] Two tabs: "চমক ফিশ ফিড" | "বায়োটেক ফিশ ফিড"
      - [ ] Active tab: Navy background, white text
      - [ ] Inactive tab: outline style
- [ ] Build `ProductCard.tsx`
      - [ ] Product image (160px height, object-fit cover)
      - [ ] Product name (H3), species badge
      - [ ] Nutrition table: Protein, Fat, Moisture, Fiber
      - [ ] Pellet size + Pack size info
      - [ ] CTA button: "অর্ডার করুন / Inquire"
- [ ] Build `ProductGrid.tsx`
      - [ ] 2-col desktop / 1-col mobile grid
      - [ ] Filters by brand using tab switcher
- [ ] Build `PDFDownloadStrip.tsx`
      - [ ] "সম্পূর্ণ পণ্য তালিকা ডাউনলোড করুন" button
      - [ ] Links to `/public/chamak-product-catalog.pdf`
- [ ] Assemble in `app/products/page.tsx`

---

## PHASE 5 — About Page
- [ ] Build `app/about/page.tsx`
      - [ ] Company story section (origin: Chini Patti, Rajshahi)
      - [ ] Founder profile card: মো. খায়রুল বাশার (photo + bio)
      - [ ] Factory section: Inam Feed Mill, Dhopapara, Puthia (photo + address)
      - [ ] Mission & Vision two-column card
      - [ ] Brand timeline component (founding → growth → future)

---

## PHASE 6 — Why Chamak Page
- [ ] Build `app/why-chamak/page.tsx`
      - [ ] Oil-coated floating feed benefit section
      - [ ] FCR explanation with visual/icon
      - [ ] Zero wastage + environment-friendly section
      - [ ] Local production = fresh stock section
      - [ ] Each section: icon + H3 title + 2–3 lines body text

---

## PHASE 7 — Dealer Network Page
- [ ] Build `DealerCard.tsx`
      - [ ] Dealer name, location (upazila/district), phone number
      - [ ] "Call Now" button linking to `tel:` number
- [ ] Build `app/dealers/page.tsx`
      - [ ] Page header + intro text
      - [ ] Dealer list from `src/data/dealers.ts`
      - [ ] Google Maps embed (Rajshahi office location)
      - [ ] Dealer inquiry form (Name, Location, Phone, Message)

---

## PHASE 8 — Contact Page
- [ ] Build `ContactForm.tsx`
      - [ ] Fields: Name, Phone, Subject, Message
      - [ ] Submit via EmailJS (contact template)
      - [ ] Success/error toast notification (shadcn/ui Toast)
      - [ ] Loading state on submit button
- [ ] Build `DealerInquiryForm.tsx`
      - [ ] Fields: Name, Shop Name, Location, Phone, Message
      - [ ] Submit via EmailJS (dealer template)
- [ ] Build `app/contact/page.tsx`
      - [ ] Two-column: ContactForm left | Info Panel right
      - [ ] Info panel: phone, address (BN), factory address, Google Maps embed
      - [ ] WhatsApp direct link button

---

## PHASE 9 — SEO & Meta
- [ ] Install and configure `next-seo`
- [ ] Create `src/lib/seo.ts` with default SEO config
- [ ] Add unique `<NextSeo>` tags to every page:
      - [ ] Homepage (Bengali keywords: ভাসমান ফিশ ফিড, কার্প ফিড)
      - [ ] Products page
      - [ ] About page
      - [ ] Why Chamak page
      - [ ] Dealers page
      - [ ] Contact page
- [ ] Add `Organization` JSON-LD structured data to Homepage
- [ ] Add `Product` JSON-LD structured data to Products page
- [ ] Generate `sitemap.xml` (use `next-sitemap` package)
- [ ] Create `robots.txt` (allow all, point to sitemap)
- [ ] Add OG image (1200×630px) to `/public/og-image.jpg`
- [ ] Set favicon (32×32) and Apple touch icon (180×180)

---

## PHASE 10 — Analytics & Performance
- [ ] Install Google Analytics 4 via `next/script` (`strategy="lazyOnload"`)
- [ ] Set up Google Search Console and submit sitemap
- [ ] Verify all images use Next.js `<Image />` — no raw `<img>` tags
- [ ] Compress all images to under 200KB before adding to `/public`
- [ ] Test Google Fonts loaded via `next/font` (not `<link>` tag)
- [ ] Run Lighthouse audit — target scores:
      - [ ] Performance: 90+
      - [ ] SEO: 100
      - [ ] Accessibility: 90+
      - [ ] Best Practices: 90+

---

## PHASE 11 — QA & Launch
- [ ] Test all pages on mobile (375px) — Samsung Galaxy / iPhone SE
- [ ] Test all pages on desktop (1280px+)
- [ ] Test bilingual content rendering (Bengali text, no overflow/clipping)
- [ ] Test all forms (ContactForm + DealerInquiryForm) — verify emails received
- [ ] Test WhatsApp FAB on mobile — confirm opens WhatsApp correctly
- [ ] Test all CTAs and internal links (no broken links)
- [ ] Test Google Maps embed loads on Contact + Dealers pages
- [ ] Verify Cloudflare Pages production deployment is live
- [ ] Connect custom domain (chamakfishfeed.com.bd or similar)
- [ ] Verify SSL certificate is active (HTTPS)
- [ ] Submit sitemap to Google Search Console
- [ ] Final Lighthouse audit on live production URL

---

## PHASE 12 — Phase 2 (Post-Launch)
- [ ] Blog / Farmer Tips module (MDX-based)
      - [ ] Bengali article: "তেলাপিয়া চাষে সঠিক খাদ্য ব্যবস্থাপনা"
      - [ ] Bengali article: "কার্প মাছের দ্রুত বৃদ্ধিতে ডুবন্ত ফিডের ভূমিকা"
- [ ] Tawk.to live chat integration
- [ ] Dealer login portal (separate phase)
- [ ] SMS notification on form submission (BD SMS gateway)
- [ ] Bengali language toggle (full i18n with `next-intl`)

---

## Notes
- Work on ONE task at a time — do not start next task until current is complete
- Commit after each completed component: `feat: add ProductCard component`
- Never hardcode product/dealer data in JSX — always import from `src/data/`
- Test on real mobile device (not just browser DevTools) before marking mobile tasks done
- WhatsApp number format for links: `8801741973426` (country code, no `+`)
```


***

This `todo.md` is structured so that a **vibe coder or AI coding tool** (Cursor, Windsurf, GitHub Copilot) can read it top-to-bottom and tackle one checkbox at a time without ambiguity. Paste it directly into your project root alongside `PRD.md`, `DESIGN.md`, and `TECH_RULES.md` and you are ready to start building.

