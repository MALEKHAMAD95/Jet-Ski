# GTA Jet Ski Rentals — Official Website

Next.js + TypeScript + Tailwind CSS website for GTA Jet Ski Rentals — premium Sea-Doo jet ski rentals in Toronto, Mississauga & Scarborough.

## Quick Start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production
```

## Project Structure

```
app/
├── layout.tsx              # Root layout + SEO metadata + Schema markup
├── page.tsx                # Home page
├── pricing/page.tsx        # Pricing page
├── locations/page.tsx      # Locations page
├── about/page.tsx          # About page
├── faq/page.tsx            # FAQ page (with FAQ Schema)
├── contact/page.tsx        # Booking / Contact page
├── sitemap.ts              # Auto-generates sitemap.xml
├── robots.ts               # Auto-generates robots.txt
├── icon.svg                # Favicon
├── globals.css             # Tailwind + custom styles
└── lib/config.ts           # Site-wide config (phone, address, prices, etc.)

components/
├── Navbar.tsx              # Top navigation
├── Footer.tsx              # Footer with contact info
├── Hero.tsx                # Hero section
├── Features.tsx            # 6 features grid
├── PricingSection.tsx      # 3 pricing tiers
├── LocationsSection.tsx    # 3 GTA locations
├── HowItWorks.tsx          # 3-step process
├── Gallery.tsx             # Image gallery
├── CTASection.tsx          # Call-to-action banner
├── BookingForm.tsx         # WhatsApp booking form
├── FAQItem.tsx             # Accordion item
└── WhatsAppFloat.tsx       # Floating WhatsApp button

public/
├── images/                 # All site images
└── site.webmanifest        # PWA manifest
```

## SEO Features Built-In

- ✅ **JSON-LD Schema** (LocalBusiness, Organization, FAQ, Service, Offer)
- ✅ **Dynamic Meta Tags** per page (title, description, OpenGraph, Twitter)
- ✅ **sitemap.xml** auto-generated
- ✅ **robots.txt** auto-generated
- ✅ **Mobile-first responsive** design
- ✅ **Next.js Image** optimization (WebP/AVIF)
- ✅ **Static prerendering** for all pages (super fast)
- ✅ **Semantic HTML** (h1, h2, alt tags, ARIA labels)
- ✅ **Canonical URLs** on every page

## Configuration

Edit `app/lib/config.ts` to update:
- Phone numbers
- Email
- Pricing
- Service areas
- Social media links
- Address

## Deployment

See **[DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md)** for complete step-by-step deployment instructions including:
- Vercel deployment
- Domain setup
- Google Business Profile
- Google Search Console
- SEO checklist

## Before Going Live

1. ⚠️ Replace `REPLACE_WITH_GOOGLE_VERIFICATION_CODE` in `app/layout.tsx` with your Google Search Console verification code
2. ⚠️ Update `siteConfig.url` in `app/lib/config.ts` once you have your domain
3. ⚠️ Add real logo to `public/logo.png` (512x512)
4. ⚠️ Add OG image `public/og-image.jpg` (1200x630)
5. ⚠️ Add favicon files: `public/favicon.ico`, `public/apple-touch-icon.png`
6. ⚠️ Add manifest icons: `public/icon-192.png`, `public/icon-512.png`

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Fonts:** Inter + Bebas Neue (Google Fonts)

## Contact

- Phone: +1 (416) 420-8228
- Phone: 416-877-5017
- WhatsApp: +1 416-877-5017
- Instagram: @gta_jetski_rentals1
