import type { Metadata, Viewport } from 'next';
import { Outfit, Anton } from 'next/font/google';
import { siteConfig } from './lib/config';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { PageTransition } from '@/components/PageTransition';
import { SmoothScroll } from '@/components/SmoothScroll';
import { CustomCursor } from '@/components/CustomCursor';
import { Loader } from '@/components/Loader';
import { ScrollProgress } from '@/components/ScrollProgress';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas',
});

export const viewport: Viewport = {
  themeColor: '#F0F9FF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Jet Ski Rentals Toronto | Spark Jet Ski — $130/hr | No License Needed',
    template: '%s | Spark Jet Ski Rentals',
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: 'Sports & Recreation',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Jet Ski Rentals Toronto | Spark Jet Ski — $130/hr',
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'Spark Jet Ski Rentals - Toronto, Mississauga, Scarborough',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jet Ski Rentals Toronto | Spark Jet Ski — $130/hr',
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_VERIFICATION_CODE',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}#business`,
  name: siteConfig.name,
  alternateName: 'Toronto Jet Ski Rentals',
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image: [
    `${siteConfig.url}/images/IMGL0900.jpg`,
    `${siteConfig.url}/images/25_jet_ski_sblp_header_2100x1045_f_domestic.jpg`,
  ],
  logo: `${siteConfig.url}/logo.png`,
  priceRange: '$$',
  currenciesAccepted: 'CAD',
  paymentAccepted: 'Cash, Credit Card, Debit Card, E-Transfer',
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude,
  },
  areaServed: siteConfig.serviceAreas.map((area) => ({
    '@type': 'City',
    name: area,
  })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '20:00',
      validFrom: '2026-05-01',
      validThrough: '2026-10-31',
    },
  ],
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Jet Ski Rental Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '1 Hour Jet Ski Rental',
          description: 'Full hour Sea-Doo jet ski rental with life jacket & safety gear',
        },
        price: siteConfig.pricing.hourly,
        priceCurrency: 'CAD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '30 Minute Jet Ski Rental',
          description: '30 minute Sea-Doo jet ski rental with full safety gear',
        },
        price: siteConfig.pricing.halfHour,
        priceCurrency: 'CAD',
      },
    ],
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'reservations',
      areaServed: 'CA',
      availableLanguage: ['English', 'Arabic'],
    },
    {
      '@type': 'ContactPoint',
      telephone: siteConfig.phoneSecondary,
      contactType: 'customer service',
      areaServed: 'CA',
    },
  ],
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${anton.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-[#F0F9FF] text-sky-900 cursor-none">
        <Loader />
        <ScrollProgress />
        <SmoothScroll />
        <CustomCursor />
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
