'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Star, CreditCard } from 'lucide-react';
import { siteConfig } from '@/app/lib/config';
import { formatCAD } from '@/app/lib/format';

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
    <section id="pricing" className="section-padding bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
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
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
            Transparent Pricing
          </p>
          <h2 className="heading-lg text-white mb-4">
            Simple <span className="text-gradient-gold">Pricing</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
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
                  ? 'bg-gradient-gold text-black shadow-2xl shadow-brand-gold/30'
                  : 'bg-black/60 backdrop-blur-sm border border-white/10 text-white hover:border-brand-gold/40'
              }`}
            >
              {plan.popular && (
                <motion.span
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1 bg-brand-black text-brand-gold text-xs font-bold uppercase rounded-full border border-brand-gold"
                >
                  <Star className="w-3 h-3 fill-current" /> Most Popular
                </motion.span>
              )}

              <h3 className={`text-2xl font-black uppercase mb-2 ${plan.popular ? 'text-black' : 'text-white'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm uppercase tracking-wider mb-6 ${plan.popular ? 'text-black/70' : 'text-white/60'}`}>
                {plan.duration}
              </p>

              <div className="mb-6 flex items-baseline gap-2">
                {typeof plan.price === 'number' ? (
                  <>
                    <span className={`text-5xl lg:text-6xl font-black ${plan.popular ? 'text-black' : 'text-gradient-gold'}`}>
                      {formatCAD(plan.price)}
                    </span>
                    <span className={`text-base font-semibold ${plan.popular ? 'text-black/70' : 'text-white/60'}`}>CAD</span>
                  </>
                ) : (
                  <span className={`text-4xl lg:text-5xl font-black ${plan.popular ? 'text-black' : 'text-gradient-gold'}`}>
                    {plan.price}
                  </span>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className={`flex items-start gap-2 text-sm ${plan.popular ? 'text-black/90' : 'text-white/80'}`}>
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-black' : 'text-brand-gold'}`} strokeWidth={3} />
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block w-full text-center px-6 py-3 rounded-full font-bold uppercase tracking-wider transition-transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-black text-brand-gold hover:bg-gray-900'
                    : 'bg-gradient-gold text-black'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center text-white/60 text-sm flex items-center justify-center gap-2">
          <CreditCard className="w-4 h-4" />
          Valid ID & {formatCAD(siteConfig.pricing.deposit)} CAD refundable deposit required at pickup
        </div>
      </div>
    </section>
  );
}
