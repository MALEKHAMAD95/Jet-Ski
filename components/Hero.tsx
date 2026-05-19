'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Rocket, Phone, ChevronDown, Waves } from 'lucide-react';
import { siteConfig } from '@/app/lib/config';
import { formatCAD } from '@/app/lib/format';
import { HeroBackground } from './HeroBackground';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HeroBackground />

      <div className="container-custom relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/images/logo with description.png"
            alt="Spark Jet Ski Rentals Toronto"
            width={320}
            height={400}
            priority
            className="w-44 sm:w-56 md:w-64 lg:w-72 h-auto drop-shadow-2xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-brand-gold/20 border border-brand-gold/40 rounded-full text-brand-gold text-xs sm:text-sm font-semibold uppercase tracking-widest backdrop-blur-sm"
        >
          <Waves className="w-4 h-4" /> Toronto&apos;s Premium Jet Ski Rentals
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="heading-xl text-white text-shadow-lg mb-6"
        >
          Feel The Water,
          <br />
          <motion.span
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="text-gradient-gold text-shadow-gold inline-block"
            style={{ backgroundSize: '200% auto' }}
          >
            Live The Thrill
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-4 text-shadow-lg"
        >
          Premium Sea-Doo Jet Ski Rentals in Toronto, Mississauga & Scarborough
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="text-base sm:text-lg text-brand-gold font-semibold mb-10 uppercase tracking-wider"
        >
          ✓ No License Needed &nbsp; ✓ No Experience Required &nbsp; ✓ Full Safety Gear
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" className="btn-primary">
              <Rocket className="w-5 h-5" /> Book Now
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={`tel:${siteConfig.phone}`} className="btn-secondary">
              <Phone className="w-5 h-5" /> Call {siteConfig.phone}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 1.3 } },
          }}
          className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto"
        >
          {[
            { val: formatCAD(siteConfig.pricing.hourly), lbl: 'Per Hour' },
            { val: formatCAD(siteConfig.pricing.halfHour), lbl: '30 Minutes' },
            { val: '3', lbl: 'GTA Locations' },
          ].map((stat) => (
            <motion.div
              key={stat.lbl}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="bg-black/50 backdrop-blur-md border border-brand-gold/30 rounded-2xl px-3 sm:px-6 py-4 hover:border-brand-gold transition-colors"
            >
              <p className="text-2xl sm:text-4xl font-black text-gradient-gold mb-1">{stat.val}</p>
              <p className="text-[10px] sm:text-xs text-white/80 uppercase tracking-wider">{stat.lbl}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-white/70"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
