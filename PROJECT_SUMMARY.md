# GTA Jet Ski Rentals — Project Summary

> Next.js 16 production website for **GTA Jet Ski Rentals** (Toronto, Canada).
> Built with TypeScript, Tailwind CSS, Framer Motion, and full SEO optimization.

---

## Live Dev Server

```bash
npx next dev --port 3005
# Open: http://localhost:3005
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.6 (App Router, Static Export) |
| Language | TypeScript 5.6 |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Smooth Scroll | Lenis 1.3 |
| Map | React Leaflet 5 + CartoDB Dark Matter tiles |
| Date Picker | React Datepicker 9 |
| Font | Inter + Bebas Neue (Google Fonts) |
| Hosting Target | Vercel (free tier) |

---

## Project Structure

```
Jet Ski Website/
├── app/
│   ├── layout.tsx              # Root layout — SEO, JSON-LD schemas, Loader, SmoothScroll, CustomCursor
│   ├── page.tsx                # Home page (/)
│   ├── globals.css             # Tailwind + custom CSS + dark datepicker theme
│   ├── about/page.tsx          # About page
│   ├── contact/page.tsx        # Contact/Book page
│   ├── faq/page.tsx            # FAQ page
│   ├── locations/page.tsx      # Locations page + custom map
│   ├── pricing/page.tsx        # Pricing page
│   ├── sitemap.ts              # Auto-generated sitemap.xml
│   ├── robots.ts               # Auto-generated robots.txt
│   └── lib/
│       ├── config.ts           # All site-wide settings (phone, price, address, etc.)
│       └── format.ts           # CAD currency formatter (Intl.NumberFormat)
│
├── components/
│   ├── — LAYOUT —
│   ├── Navbar.tsx              # Sticky navbar with logo, mobile menu (AnimatePresence)
│   ├── Footer.tsx              # Footer with logo, links, Instagram/Facebook SVG icons
│   ├── WhatsAppFloat.tsx       # Floating WhatsApp button (pulsing ring + tooltip)
│   ├── PageTransition.tsx      # Framer Motion page transitions (AnimatePresence + usePathname)
│   ├── Loader.tsx              # Site preloader — gold rings + logo, shows once per session
│   ├── SmoothScroll.tsx        # Lenis smooth scroll provider
│   ├── CustomCursor.tsx        # Gold dot + ring cursor (hides on touch devices)
│   │
│   ├── — HOME PAGE SECTIONS —
│   ├── Hero.tsx                # Full hero with logo zoom, animated headline, stat cards
│   ├── HeroBackground.tsx      # Video (mainVedio.mp4) → image fallback on end
│   ├── SpecsSection.tsx        # "210 Kmh | 100% Safety | Smooth Ride" with CountUp
│   ├── Features.tsx            # 6 feature cards with Lucide icons + stagger animation
│   ├── PricingSection.tsx      # 3 pricing plans (CAD) with hover effects
│   ├── LocationsSection.tsx    # 3 location preview cards
│   ├── HowItWorks.tsx          # Step-by-step booking process
│   ├── Gallery.tsx             # Photo gallery grid
│   ├── MapsSection.tsx         # Google Maps iframe embed
│   ├── CTASection.tsx          # Bottom CTA with Book Now + WhatsApp + Call buttons
│   │
│   ├── — CONTACT PAGE —
│   ├── ContactHero.tsx         # Animated hero with floating blobs
│   ├── ContactCards.tsx        # 3 contact cards (Call/WhatsApp/Email) with stagger
│   ├── ContactFormHeader.tsx   # Animated form section title
│   ├── ContactInfoStrip.tsx    # Hours / Address / Service Areas strip
│   ├── BookingForm.tsx         # Full booking form → sends via WhatsApp
│   │
│   ├── — FAQ PAGE —
│   ├── FAQHero.tsx             # Animated hero with floating shapes
│   ├── FAQList.tsx             # Stagger wrapper for FAQ items
│   ├── FAQItem.tsx             # Accordion with Plus→X animation
│   │
│   ├── — LOCATIONS PAGE —
│   ├── LocationsMap.tsx        # React Leaflet map — black + gold themed, 3 markers
│   │
│   └── — UTILITIES —
│       ├── AnimateOnScroll.tsx # Reusable scroll-reveal wrapper (up/down/left/right/zoom)
│       └── CountUp.tsx         # Animated number counter (useMotionValue + useInView)
│
├── public/
│   └── images/
│       ├── logo.png
│       ├── logo with description.png
│       ├── mainVedio.mp4
│       ├── IMGL0900.jpg
│       ├── 25_jet_ski_sblp_header_2100x1045_f_domestic.jpg
│       ├── 25_jet_ski_sblp_slides_1440x1000_f_domestic_slide_2.jpg
│       ├── 25_jet_ski_sblp_slides_1440x1000_f_domestic_slide_3.jpg
│       └── jetski_sblp_panel1_2.jpg
│
├── tailwind.config.ts          # Custom colors, fonts, gradients, animations
├── package.json
└── PROJECT_SUMMARY.md          # This file
```

---

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero video, specs, features, pricing, locations, gallery, map, CTA |
| `/pricing` | Pricing | Plans, what's included, deposit & terms |
| `/locations` | Locations | 3 location details + custom black/gold interactive map |
| `/about` | About | Story, values, stats (Safety / Fleet / Customer Focus) |
| `/faq` | FAQ | 12 accordion Q&A with JSON-LD schema |
| `/contact` | Contact | Call / WhatsApp / Email cards + booking form |
| `/sitemap.xml` | SEO | Auto-generated from `app/sitemap.ts` |
| `/robots.txt` | SEO | Auto-generated from `app/robots.ts` |

---

## Site Configuration (`app/lib/config.ts`)

```ts
export const siteConfig = {
  name: 'GTA Jet Ski Rentals',
  url: 'https://gtajetski.ca',
  phone: '+1-416-420-8228',
  phoneSecondary: '+1-416-877-5017',
  whatsapp: '+14168775017',
  email: 'info@gtajetski.ca',
  address: {
    street: '41 Northumberland St',
    city: 'Toronto',
    region: 'ON',
    postalCode: 'M6H 1R2',
    country: 'CA',
  },
  geo: { latitude: 43.6386494, longitude: -79.3898225 },
  pricing: { hourly: 130, halfHour: 75, deposit: 500, currency: 'CAD' },
  hours: { season: 'May - October', daily: '9:00 AM - 8:00 PM' },
  social: {
    instagram: 'https://www.instagram.com/gta_jetski_rentals1/',
    facebook: 'https://www.facebook.com/share/1BFbCyntNV/',
  },
};
```

> To update any phone number, price, address, or social link — **only edit this file**, all pages update automatically.

---

## Key Features Built

### Animations
- **Page transitions** — fade + slide between routes via `AnimatePresence` + `usePathname`
- **Scroll-reveal** — every section animates in as it enters the viewport
- **Stagger effects** — cards/items animate one after another with delay
- **Hero sequence** — logo zoom → badge → headline → CTA → stat cards (full choreography)
- **CountUp numbers** — animated counters in SpecsSection and About page
- **Hover effects** — lift, scale, glow on cards and buttons

### Custom Cursor
- Gold inner dot (fast, precise) + gold outer ring (spring lag)
- Ring grows + brightens on hover over any link/button
- Ring shrinks on click
- Auto-disabled on touch/mobile devices

### Smooth Scroll (Lenis)
- Duration: 1.4s with exponential easing
- Wheel multiplier 0.9, touch multiplier 1.5
- Runs via `requestAnimationFrame` loop

### Site Preloader
- Shows only once per session (stored in `sessionStorage`)
- Gold orbital rings + counter-rotating inner ring
- Logo pulse animation with "GTA Jet Ski" text + shimmer line
- Smooth fade-out after 2.2 seconds
- Locks body scroll while visible

### Black & Gold Map (Locations page)
- CartoDB Dark Matter tiles (free, no API key needed)
- CSS filter: `sepia + hue-rotate + saturate` for gold tint on roads/labels
- 3 custom SVG gold pin markers (Toronto, Mississauga, Scarborough)
- Click any marker → dark popup with location name + "Book Here" button
- Gold corner accent borders around the map container

### Booking Form
- Date picker with full dark/gold theme (react-datepicker)
- Past dates are disabled (minDate = today)
- On submit → opens WhatsApp with pre-filled message (name, phone, location, date, duration, notes)
- Success state with gold confirmation card

### WhatsApp Float Button
- Animate-ping pulsing ring
- Gold glow shadow
- Hover tooltip "Chat on WhatsApp"
- Slides in with spring animation on page load (1.2s delay)

### SEO
- `<title>` and `<meta description>` on every page
- `alternates.canonical` on every page
- Open Graph + Twitter Card tags
- JSON-LD schemas: `LocalBusiness`, `Organization`, `FAQPage`, `OfferCatalog`, `GeoCoordinates`
- `sitemap.xml` auto-generated with all routes + priorities
- `robots.txt` auto-generated pointing to sitemap
- `areaServed` + `openingHoursSpecification` in LocalBusiness schema

---

## Brand Design System

### Colors
| Token | Hex | Usage |
|---|---|---|
| `brand-black` | `#0A0A0A` | Page background |
| `brand-gold` | `#F5C518` | Primary accent, CTAs |
| `brand-gold-light` | `#FFD700` | Hover states |
| `brand-gold-dark` | `#C9A227` | Gradient end |
| `brand-blue` | `#1A2980` | Hero/section backgrounds |
| `brand-ocean` | `#0A4D8C` | Ocean gradient |

### Gradients
```css
bg-gradient-gold   /* 135deg: gold → light gold → dark gold */
bg-gradient-ocean  /* 135deg: ocean → navy */
bg-gradient-dark   /* 180deg: black → dark gray */
```

### Typography
- **Body**: Inter (Google Fonts, variable: `--font-inter`)
- **Display/Headings**: Bebas Neue (Google Fonts, variable: `--font-bebas`)

### Utility Classes
```css
.container-custom   /* max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 */
.section-padding    /* py-16 sm:py-20 lg:py-28 */
.btn-primary        /* gold gradient, rounded-full, uppercase, hover:scale */
.btn-secondary      /* transparent, gold border, hover:fill */
.heading-xl         /* 4xl → 7xl, black, uppercase */
.heading-lg         /* 3xl → 5xl, black, uppercase */
.heading-md         /* 2xl → 4xl, black, uppercase */
.text-gradient-gold /* bg-gradient-gold + bg-clip-text + text-transparent */
```

---

## Dependencies

### Production
```json
"framer-motion": "^12.39.0",
"leaflet": "^1.9.4",
"lenis": "^1.3.23",
"lucide-react": "^1.16.0",
"next": "^16.2.6",
"react": "^19.2.6",
"react-datepicker": "^9.1.0",
"react-leaflet": "^5.0.0"
```

### Dev
```json
"typescript": "^5.6.3",
"tailwindcss": "^3.4.15",
"@types/leaflet": "^1.9.21",
"@types/react-datepicker": "^6.2.0"
```

---

## Scripts

```bash
npm run dev      # Start dev server (default port 3000)
npm run build    # Production build — all 11 routes static
npm run start    # Serve production build
npm run lint     # ESLint check

# Run on specific port:
npx next dev --port 3005
```

---

## Deployment (Vercel — Recommended)

1. Push project to GitHub
2. Go to [vercel.com](https://vercel.com) → "New Project" → import repo
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** — done in ~60 seconds
5. Connect custom domain `gtajetski.ca` in Vercel dashboard

### After Deploy
- Submit sitemap to **Google Search Console**: `https://gtajetski.ca/sitemap.xml`
- Create **Google Business Profile** at [business.google.com](https://business.google.com)
  - Category: Boat Rental
  - Add all 3 locations
  - Upload photos from `public/images/`
- Replace `REPLACE_WITH_GOOGLE_VERIFICATION_CODE` in `app/layout.tsx` with real code from Search Console

---

## Important Notes

- **Currency**: All prices use `formatCAD()` from `app/lib/format.ts` — outputs `CA$130` format via `Intl.NumberFormat('en-CA')`
- **WhatsApp**: Form submits open `wa.me/+14168775017` with pre-filled text
- **Loader**: Uses `sessionStorage` key `gta-jetski-loaded` — clears on new session. To force re-show: `sessionStorage.removeItem('gta-jetski-loaded')` in browser console
- **Custom Cursor**: Hidden on mobile/touch (`pointer: coarse` media query)
- **Map tiles**: CartoDB Dark Matter — free, no API key, no usage limits for normal traffic
- **Video Hero**: Plays `mainVedio.mp4` once, then crossfades to static image `25_jet_ski_sblp_header_2100x1045_f_domestic.jpg`
- **Default cursor hidden**: `*, *::before, *::after { cursor: none !important; }` in globals.css

---

*Built with Next.js 16 + TypeScript + Tailwind CSS + Framer Motion*
*Domain target: gtajetski.ca | Season: May–October | Hours: 9AM–8PM daily*
