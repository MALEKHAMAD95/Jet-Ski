'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader only on first visit per session
    const hasVisited = sessionStorage.getItem('gta-jetski-loaded');
    if (hasVisited) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      sessionStorage.setItem('gta-jetski-loaded', '1');
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-brand-black"
        >
          {/* animated gradient backdrop */}
          <motion.div
            className="absolute inset-0 bg-gradient-ocean opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1.2 }}
          />

          {/* gold orbital ring */}
          <motion.div
            className="absolute"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-transparent border-t-brand-gold border-r-brand-gold/40" />
          </motion.div>

          {/* counter-rotating inner ring */}
          <motion.div
            className="absolute"
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-transparent border-b-brand-gold/70 border-l-brand-gold/30" />
          </motion.div>

          {/* logo + brand */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 mb-4"
            >
              <Image
                src="/images/logo.png"
                alt="GTA Jet Ski"
                fill
                priority
                sizes="96px"
                className="object-contain drop-shadow-[0_0_24px_rgba(245,197,24,0.55)]"
              />
            </motion.div>

            <motion.p
              className="text-brand-gold font-display text-xl sm:text-2xl tracking-[0.4em] uppercase"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              GTA Jet Ski
            </motion.p>

            <motion.div
              className="mt-4 h-px w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            />

            <motion.p
              className="mt-3 text-white/60 text-xs uppercase tracking-widest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              Loading the experience…
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
