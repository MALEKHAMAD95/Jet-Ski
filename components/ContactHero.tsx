'use client';

import { motion } from 'framer-motion';

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-12 bg-gradient-ocean overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-10 -left-20 w-72 h-72 bg-brand-gold/20 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 -right-20 w-96 h-96 bg-brand-blue-light/30 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-custom text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4"
        >
          Book Now
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="heading-xl text-white mb-6"
        >
          Let&apos;s Get You On{' '}
          <motion.span
            className="text-gradient-gold inline-block"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ backgroundSize: '200% 100%' }}
          >
            The Water
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
        >
          Three easy ways to book your jet ski adventure. Same-day availability — call us now!
        </motion.p>
      </div>
    </section>
  );
}
