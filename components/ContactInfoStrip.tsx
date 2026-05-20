'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Globe } from 'lucide-react';
import { siteConfig } from '@/app/lib/config';

const items = [
  {
    Icon: Clock,
    label: 'Hours',
    line1: siteConfig.hours.daily,
    line2: siteConfig.hours.season,
  },
  {
    Icon: MapPin,
    label: 'Office',
    line1: siteConfig.address.street,
    line2: `${siteConfig.address.city}, ${siteConfig.address.region} ${siteConfig.address.postalCode}`,
  },
  {
    Icon: Globe,
    label: 'Service Areas',
    line1: 'Toronto • Mississauga',
    line2: 'Scarborough • GTA',
  },
];

export function ContactInfoStrip() {
  return (
    <section className="py-12 bg-[#F0FAFF]">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          {items.map(({ Icon, label, line1, line2 }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <Icon className="w-6 h-6 text-brand-gold mb-2" />
              </motion.div>
              <p className="text-brand-gold uppercase text-xs tracking-widest mb-2">{label}</p>
              <p className="text-sky-900 font-semibold">{line1}</p>
              <p className="text-sky-500 text-sm">{line2}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
