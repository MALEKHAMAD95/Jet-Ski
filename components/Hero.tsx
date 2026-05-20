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
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/20 border border-white/40 rounded-full text-white text-xs sm:text-sm font-semibold uppercase tracking-widest backdrop-blur-sm"
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
            className="bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent text-shadow-gold inline-block"
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
          className="text-base sm:text-lg text-cyan-200 font-semibold mb-10 uppercase tracking-wider text-shadow-lg"
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
              className="bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl px-3 sm:px-6 py-4 hover:border-white/60 hover:bg-white/20 transition-all"
            >
              <p className="text-2xl sm:text-4xl font-black text-white mb-1 text-shadow-lg">{stat.val}</p>
              <p className="text-[10px] sm:text-xs text-white/80 uppercase tracking-wider">{stat.lbl}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center text-white/80"
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <ChevronDown className="w-6 h-6" />
      </motion.div>

      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 z-[5] pointer-events-none">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px] sm:h-[120px]">
          <motion.path
            initial={{ d: 'M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z' }}
            animate={{
              d: [
                'M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z',
                'M0,40 C240,80 480,40 720,80 C960,40 1200,80 1440,40 L1440,120 L0,120 Z',
                'M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            fill="#F0F9FF"
            opacity="0.35"
          />
          <motion.path
            initial={{ d: 'M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z' }}
            animate={{
              d: [
                'M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z',
                'M0,70 C240,110 480,50 720,90 C960,50 1200,90 1440,70 L1440,120 L0,120 Z',
                'M0,80 C240,120 480,40 720,80 C960,120 1200,40 1440,80 L1440,120 L0,120 Z',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            fill="#F0F9FF"
            opacity="0.65"
          />
          <motion.path
            initial={{ d: 'M0,100 C240,120 480,80 720,100 C960,120 1200,80 1440,100 L1440,120 L0,120 Z' }}
            animate={{
              d: [
                'M0,100 C240,120 480,80 720,100 C960,120 1200,80 1440,100 L1440,120 L0,120 Z',
                'M0,90 C240,110 480,90 720,110 C960,90 1200,110 1440,90 L1440,120 L0,120 Z',
                'M0,100 C240,120 480,80 720,100 C960,120 1200,80 1440,100 L1440,120 L0,120 Z',
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            fill="#F0F9FF"
          />
        </svg>
      </div>
    </section>
  );
}
