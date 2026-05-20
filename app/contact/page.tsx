import type { Metadata } from 'next';
import { BookingForm } from '@/components/BookingForm';
import { ContactCards } from '@/components/ContactCards';
import { ContactHero } from '@/components/ContactHero';
import { ContactInfoStrip } from '@/components/ContactInfoStrip';
import { ContactFormHeader } from '@/components/ContactFormHeader';

export const metadata: Metadata = {
  title: 'Book Now | Contact Spark Jet Ski Rentals Toronto',
  description:
    'Book your jet ski rental in Toronto, Mississauga or Scarborough. Call +1 (416) 420-8228, WhatsApp, or fill out our quick booking form. Same-day available.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="section-padding bg-gradient-to-b from-white to-[#E0F7FA]">
        <div className="container-custom">
          <ContactCards />

          <div className="max-w-2xl mx-auto">
            <ContactFormHeader />
            <BookingForm />
          </div>
        </div>
      </section>

      <ContactInfoStrip />
    </>
  );
}
