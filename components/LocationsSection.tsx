'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Check } from 'lucide-react';

const locations = [
  {
    name: 'Toronto',
    desc: 'Cruise past CN Tower views on Lake Ontario from our central Toronto launch',
    highlights: ['Lake Ontario views', 'Downtown access', 'Humber Bay nearby'],
    color: 'from-sky-400 to-blue-500',
  },
  {
    name: 'Mississauga',
    desc: 'Smooth waters perfect for first-time riders and family experiences',
    highlights: ['Family friendly', 'Lake Ontario shores', 'Easy access'],
    color: 'from-cyan-400 to-teal-500',
  },
  {
    name: 'Scarborough',
    desc: 'Ride along the iconic Scarborough Bluffs cliffs for unforgettable scenery',
    highlights: ['Scenic Bluffs views', 'Adventure routes', 'Open waters'],
    color: 'from-teal-400 to-emerald-500',
  },
];

export function LocationsSection() {
  return (
    <section id="locations" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
            Three Locations
          </p>
          <h2 className="heading-lg text-sky-900 mb-4">
            Ride Across The <span className="text-gradient-gold">GTA</span>
          </h2>
          <p className="text-sky-600 text-lg max-w-2xl mx-auto">
            We operate from three prime locations across Greater Toronto. Choose what&apos;s closest to you.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {locations.map((loc) => (
            <motion.div
              key={loc.name}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 40 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl border border-sky-100 shadow-lg hover:border-brand-gold/40 hover:shadow-xl hover:shadow-brand-gold/10 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${loc.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />

              <div className="relative z-10 p-8 min-h-[320px] flex flex-col bg-white/60 backdrop-blur-sm">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: [0, -15, 15, 0] }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-4 shadow-lg shadow-brand-gold/30"
                >
                  <MapPin className="w-7 h-7 text-white" strokeWidth={2.2} />
                </motion.div>
                <h3 className="text-3xl font-black uppercase text-sky-900 mb-3">{loc.name}</h3>
                <p className="text-sky-600 mb-5 flex-grow">{loc.desc}</p>

                <ul className="space-y-1 mb-6">
                  {loc.highlights.map((h) => (
                    <li key={h} className="text-sm text-brand-gold flex items-center gap-2 font-semibold">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} /> {h}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-brand-gold font-semibold uppercase tracking-wider text-sm hover:gap-3 transition-all group/link"
                >
                  Book in {loc.name}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
