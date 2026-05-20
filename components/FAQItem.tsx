'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="bg-white border border-sky-100 rounded-2xl overflow-hidden hover:border-brand-gold/40 hover:shadow-md hover:shadow-brand-gold/10 transition-all"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left p-6 flex items-center justify-between gap-4"
        aria-expanded={open ? 'true' : 'false'}
      >
        <h3 className="text-base sm:text-lg font-bold text-sky-900">{question}</h3>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-brand-gold"
        >
          <Plus className="w-6 h-6" strokeWidth={2.5} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sky-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
