'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Star, CreditCard } from 'lucide-react';
import { siteConfig } from '@/app/lib/config';
import { formatCAD } from '@/app/lib/format';
import { FloatingBubbles } from './FloatingBubbles';

const plans = [
  {
    name: '30 Minutes',
    price: siteConfig.pricing.halfHour,
    duration: '30 min ride',
    features: [
      'Full safety briefing',
      'Life jacket included',
      'Sea-Doo Jet Ski',
      'Quick adrenaline rush',
    ],
    cta: 'Book 30 min',
    popular: false,
  },
  {
    name: '1 Hour',
    price: siteConfig.pricing.hourly,
    duration: 'Full hour ride',
    features: [
      'Full safety briefing',
      'Life jacket included',
      'Sea-Doo Jet Ski',
      'Best value for explorers',
      'Time to enjoy the views',
    ],
    cta: 'Book 1 Hour',
    popular: true,
  },
  {
    name: 'Custom',
    price: 'Call',
    duration: 'Group / Multi-hour',
    features: [
      'Group bookings welcome',
      'Multi-hour discounts',
      'Birthday party packages',
      'Special event rates',
    ],
    cta: 'Contact Us',
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding bg-[#F0FAFF] relative overflow-hidden">
      <FloatingBubbles count={14} />
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-10 w-72 h-72 bg-brand-gold rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 right-10 w-96 h-96 bg-brand-blue rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [-1.5, 1.5, -1.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="flex justify-center mb-6"
          >
            <Image
              src="/images/ylaahabeylogo.png"
              alt="Yalla Habibi"
              width={619}
              height={403}
              className="w-40 sm:w-48 md:w-56 h-auto drop-shadow-xl"
            />
          </motion.div>
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
            Transparent Pricing
          </p>
          <h2 className="heading-lg text-sky-900 mb-4">
            Simple <span className="text-gradient-gold">Pricing</span>
          </h2>
          <p className="text-sky-600 text-lg max-w-2xl mx-auto">
            No hidden fees. Pay only for the time you ride. Refundable deposit of {formatCAD(siteConfig.pricing.deposit)} required.
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
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative rounded-3xl p-8 transition-shadow duration-300 ${
                plan.popular
                  ? 'bg-gradient-gold text-white shadow-2xl shadow-brand-gold/40'
                  : 'bg-white border border-sky-100 shadow-md hover:border-brand-gold/40 hover:shadow-xl hover:shadow-brand-gold/10'
              }`}
            >
              {plan.popular && (
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1 bg-white text-brand-gold text-xs font-bold uppercase rounded-full border border-brand-gold shadow-md"
                >
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </motion.span>
              )}

              <h3 className={`text-2xl font-black uppercase mb-2 ${plan.popular ? 'text-white' : 'text-sky-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm uppercase tracking-wider mb-6 ${plan.popular ? 'text-white/70' : 'text-sky-500'}`}>
                {plan.duration}
              </p>

              <div className="mb-6 flex items-baseline gap-2">
                {typeof plan.price === 'number' ? (
                  <>
                    <span className={`text-5xl lg:text-6xl font-black ${plan.popular ? 'text-white' : 'text-gradient-gold'}`}>
                      {formatCAD(plan.price)}
                    </span>
                    <span className={`text-base font-semibold ${plan.popular ? 'text-white/70' : 'text-sky-500'}`}>CAD</span>
                  </>
                ) : (
                  <span className={`text-4xl lg:text-5xl font-black ${plan.popular ? 'text-white' : 'text-gradient-gold'}`}>
                    {plan.price}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className={`flex items-start gap-2 text-sm ${plan.popular ? 'text-white/90' : 'text-sky-700'}`}>
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-brand-gold'}`} strokeWidth={3} />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block w-full text-center px-6 py-3 rounded-full font-bold uppercase tracking-wider transition-transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-white text-brand-gold-dark hover:bg-sky-50 shadow-lg'
                    : 'bg-gradient-gold text-white hover:shadow-lg hover:shadow-brand-gold/30'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto bg-white border border-brand-gold/30 rounded-2xl p-6 text-center shadow-sm"
        >
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-xs mb-2">
            Daily Rentals
          </p>
          <p className="text-sky-700 leading-relaxed">
            Daily rentals are also available for cottages, weekend getaways, vacations, and special occasions. Enjoy the freedom of having your jet ski for the entire day.
          </p>
        </motion.div>

        <div className="mt-8 text-center text-sky-500 text-sm flex items-center justify-center gap-2">
          <CreditCard className="w-4 h-4" />
          Valid ID & {formatCAD(siteConfig.pricing.deposit)} CAD refundable deposit required at pickup
        </div>
      </div>
    </section>
  );
}
