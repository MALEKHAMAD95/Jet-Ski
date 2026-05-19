'use client';

import { motion } from 'framer-motion';
import { MapPin, ParkingCircle, Clock, Phone, Navigation } from 'lucide-react';
import { siteConfig } from '@/app/lib/config';

export function MapsSection() {
  const lat = siteConfig.geo.latitude;
  const lng = siteConfig.geo.longitude;
  const mapsUrl = siteConfig.mapsUrl;
  const embedSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <section id="location" className="relative section-padding bg-brand-black overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
            Find Us
          </p>
          <h2 className="heading-lg text-white mb-4">
            Visit Our <span className="text-gradient-gold">Toronto Launch</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Located right on the Toronto waterfront — easy access, plenty of parking, ready to ride.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] lg:aspect-auto rounded-3xl overflow-hidden border-2 border-brand-gold/30 shadow-2xl shadow-brand-gold/20 group"
          >
            <iframe
              src={embedSrc}
              title="GTA Jet Ski Toronto Location Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[400px] grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
              allowFullScreen
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-brand-gold/20 rounded-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-black/80 to-slate-900/80 backdrop-blur-md border border-brand-gold/30 rounded-3xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 shadow-lg">
                <MapPin className="w-7 h-7 text-black" strokeWidth={2.2} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 uppercase">Toronto Launch</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Our main pickup location on the Toronto waterfront. We also operate from Mississauga and Scarborough.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-white/80">
                  <ParkingCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span>Free parking available</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <Clock className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span>Open daily 9 AM – 8 PM (May – Oct)</span>
                </li>
                <li className="flex items-start gap-3 text-white/80">
                  <Phone className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-brand-gold">
                    {siteConfig.phone}
                  </a>
                </li>
              </ul>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              <Navigation className="w-5 h-5" /> Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
