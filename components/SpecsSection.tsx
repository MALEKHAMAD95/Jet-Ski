'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CountUp } from './CountUp';

const specs = [
  { label: 'High Speed', value: null, text: 'High Speed Experience', color: 'text-cyan-400' },
  { label: 'Safety', value: 100, suffix: '%', color: 'text-white' },
  { label: 'Smooth Ride', value: null, text: 'Smooth Ride', color: 'text-white' },
  { label: 'Well Customized', value: null, text: 'Well Customized', color: 'text-white' },
];

export function SpecsSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/25_jet_ski_sblp_slides_1440x1000_f_domestic_slide_2.jpg"
          alt="Jet ski background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/85 via-cyan-800/70 to-sky-700/40" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0 relative">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative text-center ${
                    i < specs.length - 1 ? 'lg:after:content-[""] lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:-translate-y-1/2 lg:after:rotate-12 lg:after:w-px lg:after:h-16 lg:after:bg-white/30' : ''
                  }`}
                >
                  {spec.value !== null ? (
                    <p className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${spec.color}`}>
                      <CountUp end={spec.value} suffix={spec.suffix} duration={2.5} />
                      {' '}
                      <span className="text-base sm:text-lg text-white/80 font-normal">
                        {spec.label}
                      </span>
                    </p>
                  ) : (
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                      {spec.text}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <p className="text-xl sm:text-2xl text-white text-center sm:text-left">
                Get the best offer to{' '}
                <span className="text-brand-gold font-bold">rent your JET SKI</span> with us
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 whitespace-nowrap"
              >
                Book Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative w-[420px] h-[320px]"
          >
            <Image
              src="/images/25_jet_ski_sblp_slides_1440x1000_f_domestic_slide_3.jpg"
              alt="Premium Sea-Doo jet ski"
              fill
              sizes="420px"
              className="object-cover rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
