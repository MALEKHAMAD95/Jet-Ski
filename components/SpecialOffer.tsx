'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Phone, MessageCircle, Rocket } from 'lucide-react';
import { siteConfig } from '@/app/lib/config';
import { FloatingBubbles } from './FloatingBubbles';

export function SpecialOffer() {
  return (
    <section id="special-offer" className="relative section-padding overflow-hidden bg-gradient-to-br from-sky-950 via-sky-900 to-black">
      <FloatingBubbles count={20} />

      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 -left-20 w-96 h-96 bg-brand-gold rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 -right-20 w-96 h-96 bg-red-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/20 border border-brand-gold/50 rounded-full text-brand-gold text-xs sm:text-sm font-bold uppercase tracking-widest backdrop-blur-sm mb-4"
          >
            <Sparkles className="w-4 h-4" /> Limited-Time Offer
          </motion.span>
          <h2 className="heading-lg text-white mb-4 text-shadow-lg">
            Yalla <span className="text-gradient-gold">Habibi</span> — 2026 Season
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Don&apos;t miss the wave! Grab your spot for the 2026 jet ski season — special rates running now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40, rotate: -3 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 1, scale: 1.02 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-brand-gold via-red-500 to-brand-gold rounded-3xl blur-xl opacity-60 animate-pulse" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-gold/30 ring-2 ring-brand-gold/50">
              <Image
                src="/images/ylaahabey.png"
                alt="Yalla Habibi — 2026 Jet Ski Rentals Special Offer"
                width={1086}
                height={1448}
                className="w-full h-auto block"
                sizes="(min-width: 1024px) 28rem, 90vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight text-shadow-lg">
              Feel The <span className="text-gradient-gold">Speed</span>,
              <br />
              Live The Adventure.
            </h3>
            <ul className="space-y-3 mb-8 inline-block text-left">
              {[
                'Brand-new 2026 Sea-Doo Jet Skis',
                'Special offer pricing for early bookings',
                'No license required — full safety briefing included',
                'Toronto • Mississauga • Scarborough',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90 text-base sm:text-lg">
                  <span className="mt-1 w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className="btn-primary">
                  <Rocket className="w-5 h-5" /> Book Now
                </Link>
              </motion.div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold rounded-full uppercase tracking-wider shadow-lg"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full uppercase tracking-wider hover:bg-white hover:text-sky-900 transition-colors"
              >
                <Phone className="w-5 h-5" /> Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
