export const siteConfig = {
  name: 'GTA Jet Ski Rentals',
  legalName: 'GTA Jet Ski Rentals',
  url: 'https://gtajetski.ca',
  description:
    'Premium Jet Ski rentals in Toronto, Mississauga & Scarborough. $130/hr | No license needed | Sea-Doo Jet Skis | Same-day booking available.',
  keywords: [
    'jet ski rental Toronto',
    'jet ski rental Mississauga',
    'jet ski rental Scarborough',
    'jet ski rental GTA',
    'Sea-Doo rental Toronto',
    'no license jet ski Toronto',
    'jet ski near me Toronto',
    'Toronto jet ski 2026',
    'watercraft rental Toronto',
    'water sports Toronto',
    'jet ski Humber Bay',
    'jet ski Lake Ontario',
    'rent jet ski Toronto cheap',
    'GTA Jet Ski',
  ],
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
  geo: {
    latitude: 43.6386494,
    longitude: -79.3898225,
  },
  mapsUrl: 'https://maps.app.goo.gl/xwgcdLx77oJpT5pR7',
  serviceAreas: ['Toronto', 'Mississauga', 'Scarborough', 'Etobicoke', 'North York'],
  pricing: {
    hourly: 130,
    halfHour: 75,
    deposit: 500,
    currency: 'CAD' as const,
    currencySymbol: 'CA$',
  },
  social: {
    instagram: 'https://www.instagram.com/gta_jetski_rentals1/',
    facebook: 'https://www.facebook.com/share/1BFbCyntNV/',
  },
  hours: {
    season: 'May - October',
    daily: '9:00 AM - 8:00 PM',
  },
  ogImage: '/og-image.jpg',
} as const;

export type SiteConfig = typeof siteConfig;
