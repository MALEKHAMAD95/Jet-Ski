'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, Calendar } from 'lucide-react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { siteConfig } from '@/app/lib/config';
import { formatCAD } from '@/app/lib/format';

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const location = formData.get('location') as string;
    const duration = formData.get('duration') as string;
    const message = formData.get('message') as string;

    const dateStr = selectedDate
      ? selectedDate.toLocaleDateString('en-CA', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : 'Not selected';

    const text = encodeURIComponent(
      `Hi! I'd like to book a jet ski rental.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Location: ${location}\n` +
        `Preferred Date: ${dateStr}\n` +
        `Duration: ${duration}\n` +
        `Notes: ${message || 'None'}`
    );

    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-gold rounded-3xl p-10 text-center text-black"
      >
        <CheckCircle2 className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-2xl font-black uppercase mb-3">Booking Sent!</h3>
        <p className="text-lg mb-6">
          Your message was sent via WhatsApp. We&apos;ll respond shortly to confirm your booking.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setSelectedDate(null);
          }}
          className="px-6 py-3 bg-black text-brand-gold font-bold uppercase rounded-full hover:bg-gray-900 transition-colors"
        >
          Send Another
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="bg-black/60 border border-white/10 rounded-3xl p-6 sm:p-8 space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wider">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30 transition-all"
            placeholder="John Smith"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wider">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30 transition-all"
            placeholder="+1 (416) 000-0000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wider">
            Location *
          </label>
          <select
            id="location"
            name="location"
            required
            defaultValue=""
            className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30 transition-all"
          >
            <option value="" disabled>Choose location</option>
            <option value="Toronto">Toronto</option>
            <option value="Mississauga">Mississauga</option>
            <option value="Scarborough">Scarborough</option>
          </select>
        </div>

        <div>
          <label htmlFor="duration" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wider">
            Duration *
          </label>
          <select
            id="duration"
            name="duration"
            required
            defaultValue=""
            className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30 transition-all"
          >
            <option value="" disabled>Choose duration</option>
            <option value={`30 minutes - ${formatCAD(siteConfig.pricing.halfHour)} CAD`}>30 minutes - {formatCAD(siteConfig.pricing.halfHour)} CAD</option>
            <option value={`1 hour - ${formatCAD(siteConfig.pricing.hourly)} CAD`}>1 hour - {formatCAD(siteConfig.pricing.hourly)} CAD</option>
            <option value="2 hours - call for pricing">2 hours - call for pricing</option>
            <option value="Group / Event">Group / Event</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wider">
          Preferred Date *
        </label>
        <div className="relative">
          <DatePicker
            id="date"
            name="date"
            selected={selectedDate}
            onChange={(d: Date | null) => setSelectedDate(d)}
            minDate={new Date()}
            placeholderText="Select a date"
            dateFormat="EEEE, MMMM d, yyyy"
            required
            wrapperClassName="w-full"
            className="w-full bg-black/60 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30 transition-all cursor-pointer"
            calendarClassName="gta-datepicker"
            popperPlacement="bottom-start"
          />
          <Calendar className="w-5 h-5 text-brand-gold absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-white mb-2 uppercase tracking-wider">
          Additional Notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full bg-black/60 border border-white/20 rounded-xl px-4 py-3 text-white focus:border-brand-gold focus:outline-none focus:ring-2 focus:ring-brand-gold/30 transition-all resize-none"
          placeholder="Number of people, special requests, questions..."
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        <MessageCircle className="w-5 h-5" /> Send Booking via WhatsApp
      </button>

      <p className="text-xs text-white/50 text-center">
        By submitting, you&apos;ll be redirected to WhatsApp to complete your booking with our team.
      </p>
    </motion.form>
  );
}
