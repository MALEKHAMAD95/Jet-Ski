import type { Metadata } from 'next';
import { CTASection } from '@/components/CTASection';
import { FAQHero } from '@/components/FAQHero';
import { FAQList } from '@/components/FAQList';

export const metadata: Metadata = {
  title: 'FAQ — Jet Ski Rental Toronto Questions Answered | Spark Jet Ski',
  description:
    'Common questions about renting a jet ski in Toronto. License requirements, age limits, deposit info, cancellation policy, and more.',
  alternates: { canonical: '/faq' },
};

const faqs = [
  {
    q: 'Do I need a license to rent a jet ski in Toronto?',
    a: 'No license needed! We provide a temporary Rental Safety Checklist that is approved by Transport Canada — this gives you legal authority to operate the jet ski during your rental period.',
  },
  {
    q: 'How much does it cost to rent a jet ski?',
    a: 'Our rates are CA$130 per hour or CA$75 for 30 minutes (Canadian Dollars). A refundable deposit of CA$500 is required at pickup. No hidden fees, no surprises.',
  },
  {
    q: 'What is the minimum age requirement?',
    a: 'The minimum age is 16 years old per Ontario law. Riders under 18 require parental consent. Valid government-issued photo ID is mandatory.',
  },
  {
    q: 'Is the deposit refundable?',
    a: 'Yes — the full CA$500 deposit is refundable as long as the jet ski is returned in good condition without damage. Deposits are typically refunded same-day.',
  },
  {
    q: 'What is included with my rental?',
    a: 'Every rental includes: the Sea-Doo jet ski, a Coast Guard approved life jacket, full safety gear, a temporary rental license, a safety briefing, and a full tank of fuel.',
  },
  {
    q: 'Do I need prior experience?',
    a: 'Not at all! We provide a complete safety briefing before every rental and walk you through everything you need to know. Sea-Doo jet skis are user-friendly and easy to control.',
  },
  {
    q: 'Where do you operate?',
    a: 'We operate from three prime GTA locations: Toronto (Humber Bay area), Mississauga (Port Credit), and Scarborough (Bluffers Park / Scarborough Bluffs).',
  },
  {
    q: 'How do I book?',
    a: 'You can book three ways: call us at +1 (416) 420-8228, message us on WhatsApp at +1 416-877-5017, or fill out the form on our Contact page. Same-day bookings are welcome based on availability.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Free cancellation up to 24 hours before your booking. Same-day cancellations may be subject to a fee. If we cancel due to weather, you can reschedule or get a full refund.',
  },
  {
    q: 'What happens if the weather is bad?',
    a: 'Safety first — if weather conditions are unsafe (high winds, storms, etc.), we&apos;ll either reschedule your booking free of charge or provide a full refund.',
  },
  {
    q: 'Can I rent for groups or events?',
    a: 'Absolutely! We offer group bookings, birthday parties, corporate events, and special event rates. Call us to discuss custom packages.',
  },
  {
    q: 'What kind of jet skis do you have?',
    a: 'We operate premium Sea-Doo jet skis featuring intelligent brake & reverse (iBR), comfortable seating, and powerful performance — perfect for both beginners and experienced riders.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <FAQHero />

      <section className="section-padding bg-brand-black">
        <div className="container-custom max-w-4xl">
          <FAQList faqs={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
