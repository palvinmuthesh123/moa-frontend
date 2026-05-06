"use client";

import Link from 'next/link';
import { useState } from 'react';
import ActionModal from '@/components/ActionModal';

export default function LuxuryInquiryPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-mall-dark to-black text-white pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/?skipIntro=1" className="text-mall-gold text-sm tracking-widest uppercase hover:text-mall-accent transition-colors">
          Back to Deck
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4">Luxury Spaces Inquiry</h1>
        <p className="text-gray-300 text-lg mb-10 max-w-2xl">
          Explore premium unit opportunities in MOA&rsquo;s luxury corridor. Share your brand profile to receive tailored placement options.
        </p>

        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
          <form className="grid gap-5 md:grid-cols-2">
            <div className="md:col-span-1">
              <label htmlFor="brand" className="block text-sm text-gray-300 mb-2">Brand Name</label>
              <input id="brand" name="brand" className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 focus:outline-none focus:border-mall-gold" placeholder="Brand name" />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="contact" className="block text-sm text-gray-300 mb-2">Primary Contact</label>
              <input id="contact" name="contact" className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 focus:outline-none focus:border-mall-gold" placeholder="Full name" />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Business Email</label>
              <input id="email" name="email" type="email" className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 focus:outline-none focus:border-mall-gold" placeholder="name@brand.com" />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="sqft" className="block text-sm text-gray-300 mb-2">Preferred Size (sq ft)</label>
              <input id="sqft" name="sqft" className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 focus:outline-none focus:border-mall-gold" placeholder="e.g. 2500" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="timeline" className="block text-sm text-gray-300 mb-2">Opening Timeline</label>
              <select id="timeline" name="timeline" className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 focus:outline-none focus:border-mall-gold">
                <option>0-3 months</option>
                <option>3-6 months</option>
                <option>6-12 months</option>
                <option>12+ months</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="details" className="block text-sm text-gray-300 mb-2">Brand & Space Requirements</label>
              <textarea id="details" name="details" rows={5} className="w-full rounded-lg bg-black/40 border border-white/15 px-4 py-3 focus:outline-none focus:border-mall-gold" placeholder="Share category, target audience, preferred wing, and fit-out requirements." />
            </div>
            <div className="md:col-span-2">
              <button type="button" className="cta-button" onClick={() => setOpen(true)}>
                Submit Luxury Inquiry
              </button>
            </div>
          </form>
        </section>
      </div>
      <ActionModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Luxury Inquiry Submitted"
        message="Thank you. Our luxury leasing advisor will contact you with curated space options."
      />
    </main>
  );
}
