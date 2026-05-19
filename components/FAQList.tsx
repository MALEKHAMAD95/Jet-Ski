'use client';

import { motion } from 'framer-motion';
import { FAQItem } from './FAQItem';

interface Props {
  faqs: { q: string; a: string }[];
}

export function FAQList({ faqs }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.05 }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
      className="space-y-4"
    >
      {faqs.map((faq) => (
        <motion.div
          key={faq.q}
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <FAQItem question={faq.q} answer={faq.a} />
        </motion.div>
      ))}
    </motion.div>
  );
}
