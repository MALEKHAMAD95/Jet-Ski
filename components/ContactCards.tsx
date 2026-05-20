'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { siteConfig } from '@/app/lib/config';

const cards = [
  {
    Icon: Phone,
    title: 'Call Us',
    primary: siteConfig.phone,
    secondary: siteConfig.phoneSecondary,
    cta: 'Tap to call',
    href: `tel:${siteConfig.phone}`,
    primaryColor: 'text-brand-gold',
    iconBg: 'bg-gradient-gold',
    iconColor: 'text-white',
    borderColor: 'border-brand-gold/30 hover:border-brand-gold',
  },
  {
    Icon: MessageCircle,
    title: 'WhatsApp',
    primary: 'Quick chat',
    secondary: '+1 416-877-5017',
    cta: 'Tap to chat',
    href: `https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I'd%20like%20to%20book%20a%20jet%20ski%20rental.`,
    external: true,
    primaryColor: 'text-[#25D366]',
    iconBg: 'bg-[#25D366]',
    iconColor: 'text-white',
    borderColor: 'border-[#25D366]/40 hover:border-[#25D366]',
  },
  {
    Icon: Mail,
    title: 'Email',
    primary: siteConfig.email,
    secondary: 'Response within 24h',
    cta: 'Tap to email',
    href: `mailto:${siteConfig.email}`,
    primaryColor: 'text-brand-blue',
    iconBg: 'bg-gradient-ocean',
    iconColor: 'text-white',
    borderColor: 'border-brand-blue/30 hover:border-brand-blue',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ContactCards() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
    >
      {cards.map(({ Icon, title, primary, secondary, cta, href, external, primaryColor, iconBg, iconColor, borderColor }) => (
        <motion.a
          key={title}
          variants={item}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          whileHover={{ y: -8, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className={`bg-white border ${borderColor} rounded-3xl p-8 text-center transition-all shadow-md hover:shadow-xl`}
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
            className={`w-16 h-16 rounded-2xl ${iconBg} flex items-center justify-center mx-auto mb-4 shadow-lg`}
          >
            <Icon className={`w-8 h-8 ${iconColor}`} strokeWidth={2.2} />
          </motion.div>
          <h2 className="text-xl font-black uppercase text-sky-900 mb-2">{title}</h2>
          <p className={`${primaryColor} text-lg font-semibold mb-1`}>{primary}</p>
          <p className="text-sky-500 text-sm">{secondary}</p>
          <p className="mt-4 text-xs text-sky-400 uppercase tracking-wider">{cta}</p>
        </motion.a>
      ))}
    </motion.div>
  );
}
