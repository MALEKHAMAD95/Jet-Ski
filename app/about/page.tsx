import type { Metadata } from 'next';
import Image from 'next/image';
import { ShieldCheck, Anchor, Star } from 'lucide-react';
import { CTASection } from '@/components/CTASection';
import { formatCAD } from '../lib/format';
import { siteConfig } from '../lib/config';

export const metadata: Metadata = {
  title: 'About GTA Jet Ski Rentals | Toronto&apos;s Premium Jet Ski Service',
  description:
    'Learn about GTA Jet Ski — Toronto&apos;s premium Sea-Doo rental service. Our story, our fleet, our commitment to safety and unforgettable experiences.',
  alternates: { canonical: '/about' },
};

const values = [
  {
    Icon: ShieldCheck,
    title: 'Safety First',
    desc: 'Every rental includes a thorough safety briefing, Coast Guard approved life jackets, and complete safety gear.',
  },
  {
    Icon: Anchor,
    title: 'Premium Fleet',
    desc: 'We operate the latest Sea-Doo jet skis — properly maintained, regularly serviced, and ready for adventure.',
  },
  {
    Icon: Star,
    title: 'Customer Focus',
    desc: 'From booking to return, our team is here to make your experience smooth, fun, and unforgettable.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/25_jet_ski_sblp_header_2100x1045_f_domestic.jpg"
            alt="GTA Jet Ski Toronto rental"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container-custom text-center relative z-10">
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
            About Us
          </p>
          <h1 className="heading-xl text-white mb-6">
            Toronto&apos;s <span className="text-gradient-gold">Jet Ski Experts</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Bringing premium water adventures to the GTA, one ride at a time.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gradient-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
                Our Story
              </p>
              <h2 className="heading-lg text-white mb-6">
                Born from a Love of <span className="text-gradient-gold">The Water</span>
              </h2>
              <p className="text-white/80 leading-relaxed mb-4 text-lg">
                GTA Jet Ski Rentals started with a simple idea: make the joy of jet skiing accessible to everyone in Greater Toronto. No complicated licenses, no hidden fees, no hassle.
              </p>
              <p className="text-white/80 leading-relaxed mb-4 text-lg">
                Today we operate from three prime GTA locations — Toronto, Mississauga, and Scarborough — offering a fleet of premium Sea-Doo jet skis to thousands of riders each season.
              </p>
              <p className="text-white/80 leading-relaxed text-lg">
                Whether you&apos;re a first-time rider, a thrill seeker, or planning the perfect group outing, our team makes sure your time on the water is safe, smooth, and unforgettable.
              </p>
            </div>

            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/images/IMGL0900.jpg"
                alt="GTA Jet Ski rental experience"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-brand-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
              Our Values
            </p>
            <h2 className="heading-lg text-white mb-4">
              What We <span className="text-gradient-gold">Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-black/60 border border-white/10 rounded-3xl p-8 text-center hover:border-brand-gold/60 transition-all">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-gold flex items-center justify-center">
                  <Icon className="w-8 h-8 text-black" strokeWidth={2.2} />
                </div>
                <h3 className="text-xl font-bold uppercase text-white mb-3">{title}</h3>
                <p className="text-white/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-ocean">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-5xl lg:text-6xl font-black text-gradient-gold mb-2">3</p>
              <p className="text-white uppercase text-sm tracking-wider">GTA Locations</p>
            </div>
            <div>
              <p className="text-5xl lg:text-6xl font-black text-gradient-gold mb-2">100%</p>
              <p className="text-white uppercase text-sm tracking-wider">Safety Approved</p>
            </div>
            <div>
              <p className="text-5xl lg:text-6xl font-black text-gradient-gold mb-2">{formatCAD(siteConfig.pricing.hourly)}</p>
              <p className="text-white uppercase text-sm tracking-wider">Per Hour</p>
            </div>
            <div>
              <p className="text-5xl lg:text-6xl font-black text-gradient-gold mb-2">0</p>
              <p className="text-white uppercase text-sm tracking-wider">License Required</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
