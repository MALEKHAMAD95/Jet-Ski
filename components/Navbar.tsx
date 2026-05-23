'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { siteConfig } from '@/app/lib/config';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/locations', label: 'Locations' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-sky-100'
          : 'bg-gradient-to-b from-sky-900/50 via-sky-900/20 to-transparent'
      }`}
    >
      <nav
        className="container-custom flex items-center justify-between py-4"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center group" aria-label="Spark Jet Ski Rentals - Home">
          <Image
            src="/images/logo.png"
            alt="Spark Jet Ski Rentals"
            width={200}
            height={92}
            priority
            className="h-12 sm:h-14 w-auto group-hover:scale-105 transition-transform"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  scrolled
                    ? 'text-sky-700 hover:text-brand-gold'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
              scrolled ? 'text-sky-700 hover:text-brand-gold' : 'text-white hover:text-white/80'
            }`}
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" />
            {siteConfig.phone}
          </a>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-gradient-gold text-white font-bold text-sm uppercase rounded-full hover:scale-105 transition-transform shadow-md hover:shadow-brand-gold/30"
          >
            Book Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-sky-800' : 'text-white'}`}
          aria-label="Toggle menu"
          aria-expanded={open ? 'true' : 'false'}
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t border-sky-100 overflow-hidden shadow-lg"
          >
            <ul className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-base font-semibold uppercase tracking-wide text-white hover:text-brand-gold"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-4 border-t border-sky-100">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 py-2 text-base font-semibold text-brand-gold"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
