import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Anchor,
  LifeBuoy,
  FileText,
  ShieldCheck,
  GraduationCap,
  Fuel,
  CreditCard,
  CalendarX,
  CloudRain,
  IdCard,
} from 'lucide-react';
import { PricingSection } from '@/components/PricingSection';
import { CTASection } from '@/components/CTASection';
import { siteConfig } from '../lib/config';
import { formatCAD } from '../lib/format';

export const metadata: Metadata = {
  title: 'Jet Ski Rental Prices Toronto | CA$130/hr - Spark Jet Ski',
  description:
    'Transparent jet ski rental pricing in Toronto. CA$130/hour or CA$75 for 30 minutes. CA$500 refundable deposit. No hidden fees, no license needed.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Jet Ski Rental Prices Toronto | CA$130/hr',
    description: 'Affordable jet ski rentals starting at CA$75. Book online now.',
  },
};

const includedItems = [
  { Icon: Anchor, label: 'Sea-Doo Jet Ski' },
  { Icon: LifeBuoy, label: 'Coast Guard Life Jacket' },
  { Icon: FileText, label: 'Temporary Rental License' },
  { Icon: ShieldCheck, label: 'Full Safety Gear' },
  { Icon: GraduationCap, label: 'Safety Briefing' },
  { Icon: Fuel, label: 'Full Tank of Fuel' },
];

const terms = [
  {
    Icon: CreditCard,
    bold: `${formatCAD(siteConfig.pricing.deposit)} refundable deposit`,
    rest: 'required at pickup (cash, credit card, or e-transfer accepted).',
  },
  {
    Icon: IdCard,
    bold: 'Valid government ID',
    rest: "mandatory — driver's license or passport.",
  },
  {
    Icon: ShieldCheck,
    bold: 'Minimum age 16',
    rest: 'per Ontario law. Riders under 18 require parental consent.',
  },
  {
    Icon: CalendarX,
    bold: 'Cancellation policy:',
    rest: 'Free cancellation up to 24 hours before booking. Same-day cancellations may incur a fee.',
  },
  {
    Icon: CloudRain,
    bold: 'Weather guarantee:',
    rest: 'Reschedule free of charge if weather conditions are unsafe.',
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-gradient-summer overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <p className="text-white/90 font-semibold uppercase tracking-widest text-sm mb-4">
            Pricing
          </p>
          <h1 className="heading-xl text-white mb-6 text-shadow-lg">
            Simple <span className="text-white font-black underline decoration-white/40 underline-offset-4">Pricing</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            One transparent rate in Canadian Dollars. No hidden fees. Everything you need to ride included.
          </p>
        </div>
      </section>

      <PricingSection />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-sky-900 mb-4">
              What&apos;s <span className="text-gradient-gold">Included</span>
            </h2>
            <p className="text-sky-600 text-lg max-w-2xl mx-auto">
              Every rental comes with everything you need to hit the water safely and confidently.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {includedItems.map(({ Icon, label }) => (
              <div
                key={label}
                className="bg-white border border-sky-100 shadow-md rounded-2xl p-6 text-center hover:border-brand-gold/40 hover:shadow-xl hover:shadow-brand-gold/10 transition-all"
              >
                <Icon className="w-10 h-10 mx-auto mb-3 text-brand-gold" strokeWidth={1.8} />
                <p className="text-sky-900 text-sm font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F0FAFF]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white border border-brand-gold/30 rounded-3xl p-8 lg:p-12 shadow-lg">
            <h2 className="heading-md text-sky-900 mb-6 text-center">
              Deposit & <span className="text-gradient-gold">Terms</span>
            </h2>
            <ul className="space-y-4 text-sky-700">
              {terms.map(({ Icon, bold, rest }) => (
                <li key={bold} className="flex gap-3">
                  <Icon className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-sky-900">{bold}</strong> {rest}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 text-center">
              <Link href="/faq" className="text-brand-gold hover:underline font-semibold uppercase tracking-wider text-sm">
                See full FAQ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
