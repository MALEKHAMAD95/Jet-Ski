'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, Phone, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/app/lib/config';

export function CTASection() {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-summer" />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_60%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="container-custom relative z-10 text-center"
      >
        <p className="text-white/90 font-semibold uppercase tracking-widest text-sm mb-4">
          Ready to Ride?
        </p>
        <h2 className="heading-lg text-white mb-6 text-shadow-lg">
          Book Your Adventure <span className="text-white font-black underline decoration-white/40 underline-offset-4">Today</span>
        </h2>
        <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Don&apos;t miss the wave! Summer is short — secure your jet ski rental in Toronto, Mississauga or Scarborough now.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-gold font-bold text-base sm:text-lg rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 uppercase tracking-wider">
              <Rocket className="w-5 h-5" /> Book Now
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-base sm:text-lg rounded-full hover:bg-white hover:text-brand-gold transition-all duration-300 uppercase tracking-wider">
              <Phone className="w-5 h-5" /> {siteConfig.phone}
            </a>
          </motion.div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold text-base sm:text-lg rounded-full uppercase tracking-wider shadow-lg"
          >
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
