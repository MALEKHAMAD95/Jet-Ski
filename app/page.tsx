import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';

export const dynamic = 'force-static';
export const revalidate = false;
import { SpecsSection } from '@/components/SpecsSection';
import { Features } from '@/components/Features';
import { PricingSection } from '@/components/PricingSection';
import { LocationsSection } from '@/components/LocationsSection';
import { HowItWorks } from '@/components/HowItWorks';
import { Gallery } from '@/components/Gallery';
import { MapsSection } from '@/components/MapsSection';
import { CTASection } from '@/components/CTASection';
import { siteConfig } from './lib/config';

export const metadata: Metadata = {
  title: 'Jet Ski Rentals Toronto | GTA Jet Ski — $130/hr | No License Needed',
  description:
    'Toronto’s top jet ski rentals. Sea-Doo Jet Ski in Toronto, Mississauga & Scarborough. $130/hr | No license needed | Same-day booking. Call (416) 420-8228.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Jet Ski Rentals Toronto | GTA Jet Ski — $130/hr',
    description: 'Sea-Doo jet ski rentals across the GTA. Book today!',
    url: siteConfig.url,
    images: ['/images/IMGL0900.jpg'],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a license to rent a jet ski in Toronto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No license needed! We provide a temporary Rental Safety Checklist approved by Transport Canada that lets you ride legally.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to rent a jet ski in Toronto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our rates are CA$130 per hour or CA$75 for 30 minutes (Canadian Dollars). A refundable CA$500 deposit is required at pickup.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum age to rent a jet ski?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The minimum age is 16 years old according to Ontario law. Valid government-issued ID is required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do you operate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We rent jet skis in Toronto, Mississauga, and Scarborough — covering most of the GTA.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the $500 deposit refundable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! The CA$500 deposit is fully refundable when the jet ski is returned in good condition.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <SpecsSection />
      <Features />
      <PricingSection />
      <LocationsSection />
      <HowItWorks />
      <Gallery />
      <MapsSection />
      <CTASection />
    </>
  );
}
