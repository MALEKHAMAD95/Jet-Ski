'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/app/lib/config';

export function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hi!%20I'd%20like%20to%20book%20a%20jet%20ski%20rental.`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 group"
    >
      {/* Pulsing rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 blur-md" />

      {/* Button */}
      <span className="relative flex w-14 h-14 sm:w-16 sm:h-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl shadow-[#25D366]/40 group-hover:bg-[#1FBE5C] transition-colors">
        <svg viewBox="0 0 32 32" className="w-7 h-7 sm:w-8 sm:h-8" fill="white" aria-hidden="true">
          <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.804 2.722.804.395 0 1.176-.345 1.477-.7.187-.245.43-.5.43-.832 0-.043 0-.114-.014-.171-.13-.231-3.156-1.473-3.273-1.473-.067-.057-.155-.085-.215-.085zM16.45 25.74H16.44c-1.795-.001-3.555-.483-5.097-1.394l-.366-.218-3.793.995 1.013-3.703-.239-.382c-1.002-1.598-1.532-3.448-1.531-5.353.002-5.535 4.504-10.035 10.04-10.035 2.683.001 5.205 1.046 7.103 2.945a9.967 9.967 0 0 1 2.94 7.097c-.003 5.536-4.504 10.036-10.036 10.036m8.54-18.572A11.815 11.815 0 0 0 16.45 3.71c-6.554 0-11.89 5.335-11.892 11.892a11.86 11.86 0 0 0 1.588 5.945L4.444 28.29l6.884-1.805a11.881 11.881 0 0 0 5.682 1.448h.006c6.553 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.484-8.413"/>
        </svg>
      </span>

      {/* Tooltip on hover */}
      <span className="hidden sm:block absolute right-full top-1/2 -translate-y-1/2 mr-4 whitespace-nowrap px-4 py-2 bg-black/90 border border-[#25D366]/30 text-white text-sm font-semibold rounded-full opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
