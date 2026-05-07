'use client';

import Link from 'next/link';
import { MouseEvent, useRef, useState } from 'react';

export default function VenueInquiryPage() {
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = setTimeout(() => {
      setShowToast(false);
    }, 2800);
  };

  const handleSubmitClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.form?.reset();
    triggerToast('Venue inquiry submitted. Our venue team will contact you shortly.');
  };

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
            <button
              type="button"
              className="cta-button"
              onClick={handleSubmitClick}
            >
              Submit Venue Inquiry
            </button>
          </form>
        </section>
      </div>
      {showToast ? (
        <div className="fixed top-20 right-4 z-[220] w-[calc(100%-2rem)] max-w-sm rounded-lg border border-mall-gold/40 bg-black/90 px-4 py-3 text-sm text-white shadow-2xl backdrop-blur-md md:w-auto md:right-6">
          {toastMessage}
        </div>
      ) : null}
    </main>
  );
}
