'use client';

import { motion } from 'framer-motion';
import {
  Gauge,
  LifeBuoy,
  MapPin,
  ShieldCheck,
  Users,
  CalendarCheck,
  type LucideIcon,
} from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    Icon: Gauge,
    title: 'High Speed Experience',
    desc: 'Powerful Sea-Doo jet skis built for thrill seekers and adrenaline lovers.',
  },
  {
    Icon: LifeBuoy,
    title: 'Life Jackets Provided',
    desc: 'Coast Guard approved life jackets for every rider — sized to fit perfectly.',
  },
  {
    Icon: MapPin,
    title: 'Top Toronto Locations',
    desc: 'Choose between Toronto, Mississauga, or Scarborough — closest to you.',
  },
  {
    Icon: ShieldCheck,
    title: 'Full Safety Gear',
    desc: 'Complete safety kit included: whistle, rope, signaling devices & briefing.',
  },
  {
    Icon: Users,
    title: 'No Experience Needed',
    desc: 'Full instruction provided. No license required — we handle the paperwork.',
  },
  {
    Icon: CalendarCheck,
    title: 'Easy Booking',
    desc: 'Valid ID and CA$500 refundable deposit. Same-day bookings available.',
  },
];

export function Features() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
            Why Choose Us
          </p>
          <h2 className="heading-lg text-sky-900 mb-4">
            Why <span className="text-gradient-gold">Spark Jet Ski</span>
          </h2>
          <p className="text-sky-600 text-lg max-w-2xl mx-auto">
            Toronto&apos;s top-rated jet ski rental service with everything you need for an unforgettable day on Lake Ontario.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white border border-sky-100 shadow-md rounded-2xl p-8 hover:border-brand-gold/40 hover:shadow-xl hover:shadow-brand-gold/10 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-5 shadow-lg shadow-brand-gold/30"
              >
                <Icon className="w-8 h-8 text-white" strokeWidth={2.2} />
              </motion.div>
              <h3 className="text-xl font-bold uppercase tracking-wide text-sky-900 mb-3">
                {title}
              </h3>
              <p className="text-sky-600 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
