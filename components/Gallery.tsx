'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  {
    src: '/images/IMGL0900.jpg',
    alt: 'Woman riding Yamaha jet ski on Lake Ontario - Spark Jet Ski Toronto',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: '/images/25_jet_ski_sblp_slides_1440x1000_f_domestic_slide_2.jpg',
    alt: 'Single rider Sea-Doo jet ski - Toronto rental experience',
    span: '',
  },
  {
    src: '/images/25_jet_ski_sblp_slides_1440x1000_f_domestic_slide_3.jpg',
    alt: 'Jet ski on Lake Ontario - Scarborough Bluffs rental',
    span: '',
  },
  {
    src: '/images/25_jet_ski_sblp_header_2100x1045_f_domestic.jpg',
    alt: 'Couple jet ski rental - Toronto Mississauga waters',
    span: 'md:col-span-2',
  },
  {
    src: '/images/jetski_sblp_panel1_2.jpg',
    alt: 'Premium jet skis fleet - Spark Jet Ski Rentals',
    span: '',
  },
  {
    src: '/images/logo with description.png',
    alt: 'Spark Jet Ski Rentals - Official Logo Toronto',
    span: '',
  },
];

export function Gallery() {
  return (
    <section className="section-padding bg-gradient-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-brand-gold font-semibold uppercase tracking-widest text-sm mb-4">
            Gallery
          </p>
          <h2 className="heading-lg text-white mb-4">
            Real Riders, <span className="text-gradient-gold">Real Thrills</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            See the Spark Jet Ski experience — premium Sea-Doo rides on Lake Ontario.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] md:auto-rows-[240px] gap-3 sm:gap-4"
        >
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                loading={i < 2 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
