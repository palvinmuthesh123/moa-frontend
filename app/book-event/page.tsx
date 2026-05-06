"use client";

import Link from 'next/link';
import { useState } from 'react';
import ActionModal from '@/components/ActionModal';

export default function BookEventPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-mall-dark to-black text-white pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/?skipIntro=1" className="text-mall-gold text-sm tracking-widest uppercase hover:text-mall-accent transition-colors">
          Back to Deck
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4">Book Your Event at MOA</h1>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl">
          Share your event concept and preferred schedule. Our events team will respond with venue options, pricing, and activation support.
        </p>

        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <form className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-1">
              <label htmlFor="company" className="block text-sm text-gray-300 mb-2">Company / Organization</label>
              <input id="company" name="company" className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 focus:outline-none focus:border-mall-gold" placeholder="Your company" />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="name" className="block text-sm text-gray-300 mb-2">Contact Name</label>
              <input id="name" name="name" className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 focus:outline-none focus:border-mall-gold" placeholder="Full name" />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Work Email</label>
              <input id="email" name="email" type="email" className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 focus:outline-none focus:border-mall-gold" placeholder="name@company.com" />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="date" className="block text-sm text-gray-300 mb-2">Preferred Event Date</label>
              <input id="date" name="date" type="date" className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 focus:outline-none focus:border-mall-gold" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="eventType" className="block text-sm text-gray-300 mb-2">Event Type</label>
              <select id="eventType" name="eventType" className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 focus:outline-none focus:border-mall-gold">
                <option>Brand Activation</option>
                <option>Concert / Performance</option>
                <option>Corporate Event</option>
                <option>Pop-up Experience</option>
                <option>Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm text-gray-300 mb-2">Event Brief</label>
              <textarea id="message" name="message" rows={5} className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 focus:outline-none focus:border-mall-gold" placeholder="Tell us audience size, goals, footprint, and technical needs." />
            </div>
            <div className="md:col-span-2">
              <button type="button" className="cta-button" onClick={() => setOpen(true)}>
                Submit Booking Request
              </button>
            </div>
          </form>
        </section>
      </div>
      <ActionModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Event Booking Submitted"
        message="Your booking request is in our queue. Our events team will contact you with next steps."
      />
    </main>
  );
}
