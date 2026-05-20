'use client';

import { motion } from 'framer-motion';
import { Phone, ClipboardCheck, Waves, type LucideIcon } from 'lucide-react';

interface Step {
  num: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Call or Book Online',
    desc: 'Reach us via phone, WhatsApp, or our booking form. Same-day bookings welcome.',
    Icon: Phone,
  },
  {
    num: '02',
    title: 'Arrive & Sign Up',
    desc: 'Bring valid ID and the CA$500 refundable deposit. We provide the safety briefing & temporary license.',
    Icon: ClipboardCheck,
  },
  {
    num: '03',
    title: 'Gear Up & Ride',
    desc: 'Suit up with life jacket and safety gear. Hit the water and feel the thrill of Sea-Doo power.',
    Icon: Waves,
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-[#F0FAFF]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
            How It Works
          </p>
          <h2 className="heading-lg text-sky-900 mb-4">
            3 Steps to <span className="text-gradient-gold">Ride</span>
          </h2>
          <p className="text-sky-600 text-lg max-w-2xl mx-auto">
            From booking to riding — your jet ski adventure is just minutes away.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="hidden md:block absolute top-12 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent origin-left"
          />

          {steps.map(({ num, title, desc, Icon }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center"
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="inline-flex w-24 h-24 rounded-full bg-gradient-gold items-center justify-center mb-6 mx-auto shadow-xl shadow-brand-gold/30 relative z-10"
              >
                <Icon className="w-10 h-10 text-white" strokeWidth={2} />
              </motion.div>
              <span className="block text-5xl font-black text-gradient-gold mb-3">{num}</span>
              <h3 className="text-xl font-bold uppercase text-sky-900 mb-3">{title}</h3>
              <p className="text-sky-600 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
