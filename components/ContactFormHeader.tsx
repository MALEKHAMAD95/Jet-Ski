'use client';

import { motion } from 'framer-motion';

export function ContactFormHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10"
    >
      <h2 className="heading-md text-sky-900 mb-3">
        Or Send Us a <span className="text-gradient-gold">Message</span>
      </h2>
      <p className="text-sky-600">
        Fill out the form below — we&apos;ll get back to you within 24 hours.
      </p>
    </motion.div>
  );
}
