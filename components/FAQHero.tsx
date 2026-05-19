'use client';

import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

export function FAQHero() {
  return (
    <section className="relative pt-32 pb-12 bg-gradient-ocean overflow-hidden">
      {/* Floating animated shapes */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 border-2 border-brand-gold/30 rounded-2xl"
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <motion.div
        className="absolute bottom-10 right-16 w-20 h-20 border-2 border-brand-gold/30 rounded-full"
        animate={{ rotate: -360, x: [0, 15, 0] }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
          x: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
      />
      <motion.div
        className="absolute top-40 right-1/4 w-12 h-12 bg-brand-gold/10 rounded-full blur-2xl"
        animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-gold mb-6 shadow-2xl shadow-brand-gold/30"
        >
          <HelpCircle className="w-9 h-9 text-black" strokeWidth={2.2} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4"
        >
          FAQ
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="heading-xl text-white mb-6"
        >
          Got{' '}
          <motion.span
            className="text-gradient-gold inline-block"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ backgroundSize: '200% 100%' }}
          >
            Questions?
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
        >
          Everything you need to know about renting a jet ski in Toronto.
        </motion.p>
      </div>
    </section>
  );
}
