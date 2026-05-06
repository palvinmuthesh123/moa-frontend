'use client';

import Link from 'next/link';
import { useState } from 'react';
import ActionModal from '@/components/ActionModal';

export default function VenueInquiryPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-mall-dark to-black text-white pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/?skipIntro=1" className="text-mall-gold text-sm tracking-widest uppercase hover:text-mall-accent transition-colors">
          Back to Deck
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4">Venue Availability Inquiry</h1>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl">Tell us your audience size, setup requirements, and preferred dates.</p>
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <form className="grid gap-5">
            <input className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3" placeholder="Organization" />
            <input className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3" placeholder="Contact person" />
            <input type="email" className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3" placeholder="Email" />
            <textarea rows={5} className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3" placeholder="Event details" />
            <button type="button" className="cta-button" onClick={() => setOpen(true)}>
              Submit Venue Inquiry
            </button>
          </form>
        </section>
      </div>
      <ActionModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Venue Inquiry Submitted"
        message="Your request has been recorded. Our venue team will contact you shortly."
      />
    </main>
  );
}
