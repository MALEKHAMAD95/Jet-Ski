import type { Metadata } from 'next';
import { MapPin, Phone, Check } from 'lucide-react';
import { LocationsSection } from '@/components/LocationsSection';
import { CTASection } from '@/components/CTASection';
import { LocationsMap } from '@/components/LocationsMap';
import { siteConfig } from '../lib/config';

export const metadata: Metadata = {
  title: 'Jet Ski Rental Locations | Toronto, Mississauga, Scarborough',
  description:
    'Spark Jet Ski operates from 3 prime locations: Toronto (Humber Bay area), Mississauga (Port Credit), and Scarborough (Bluffers Park). Pick your closest spot.',
  alternates: { canonical: '/locations' },
};

const locations = [
  {
    name: 'Toronto',
    area: 'Humber Bay / Lakeshore',
    desc: 'Our central Toronto location gives you direct access to Lake Ontario with stunning views of the CN Tower and the city skyline. Perfect for downtown visitors and tourists looking for a quick getaway on the water.',
    highlights: [
      'Direct Lake Ontario access',
      'CN Tower & skyline views',
      'Close to downtown',
      'Easy parking',
    ],
    nearby: 'Closest to: Downtown Toronto, Etobicoke, North York',
  },
  {
    name: 'Mississauga',
    area: 'Port Credit / Lakeshore West',
    desc: 'Our Mississauga launch is perfect for west-end residents and families. Smooth waters and calmer bays make it ideal for first-time riders, family outings, and those who prefer relaxed cruising.',
    highlights: [
      'Family-friendly waters',
      'Beginner-friendly conditions',
      'Beautiful western Lake Ontario',
      'Plenty of parking',
    ],
    nearby: 'Closest to: Mississauga, Oakville, Brampton, Etobicoke',
  },
  {
    name: 'Scarborough',
    area: 'Bluffers Park / Scarborough Bluffs',
    desc: 'Ride along Toronto’s most iconic natural landmark — the Scarborough Bluffs. Towering cliffs and crystal-blue waters make this location an absolute must for thrill seekers and adventure photographers.',
    highlights: [
      'Iconic Bluffs cliffs views',
      'Adventure routes',
      'Scenic photo opportunities',
      'Open water riding',
    ],
    nearby: 'Closest to: Scarborough, East York, Pickering',
  },
];

export default function LocationsPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-gradient-ocean overflow-hidden">
        <div className="container-custom text-center relative z-10">
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
            Our Locations
          </p>
          <h1 className="heading-xl text-white mb-6">
            Three GTA <span className="text-gradient-gold">Launch Points</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
            Whether you&apos;re in the heart of Toronto, west in Mississauga, or east in Scarborough — we&apos;ve got a launch point near you.
          </p>
        </div>
      </section>

      <LocationsSection />

      {/* Custom black & gold map */}
      <section className="section-padding bg-brand-black">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-3">
              Find Us
            </p>
            <h2 className="heading-lg text-white mb-4">
              Our <span className="text-gradient-gold">Launch Points</span>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Click any marker to see details and book at that location.
            </p>
          </div>
          <LocationsMap />
        </div>
      </section>

      <section className="section-padding bg-brand-black">
        <div className="container-custom">
          <div className="space-y-16">
            {locations.map((loc, i) => (
              <div
                key={loc.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <p className="inline-flex items-center gap-2 text-brand-gold font-semibold uppercase tracking-widest text-sm mb-3">
                    <MapPin className="w-4 h-4" /> {loc.area}
                  </p>
                  <h2 className="heading-md text-white mb-4">
                    Jet Ski Rental in <span className="text-gradient-gold">{loc.name}</span>
                  </h2>
                  <p className="text-white/80 leading-relaxed mb-6 text-lg">{loc.desc}</p>

                  <ul className="space-y-2 mb-6">
                    {loc.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-white/90">
                        <Check className="w-4 h-4 mt-1 text-brand-gold flex-shrink-0" strokeWidth={3} /> {h}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-white/60 italic mb-6">{loc.nearby}</p>

                  <div className="flex gap-3">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-black font-bold text-sm uppercase rounded-full hover:scale-105 transition-transform"
                    >
                      <Phone className="w-4 h-4" /> Book in {loc.name}
                    </a>
                  </div>
                </div>

                <div className={`relative aspect-video rounded-3xl overflow-hidden ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-ocean opacity-90" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-20 h-20 text-brand-gold mx-auto mb-4" strokeWidth={1.5} />
                      <p className="text-4xl font-black text-brand-gold uppercase">{loc.name}</p>
                      <p className="text-white/80 mt-2">{loc.area}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
