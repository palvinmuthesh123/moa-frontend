import Link from 'next/link';

export default function LeasingOptionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-mall-dark to-black text-white pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/?skipIntro=1" className="text-mall-gold text-sm tracking-widest uppercase hover:text-mall-accent transition-colors">
          Back to Deck
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4">Leasing Options</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-10">
          Select the format that matches your rollout strategy. Our leasing team will tailor terms by category, footprint, and timeline.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: 'Luxury Wing', detail: 'Prime placements and concierge-level environment.', href: '/luxury-inquiry' },
            { title: 'Mainline Retail', detail: 'High-volume storefronts across key corridors.', href: '/contact-us' },
            { title: 'Food & Beverage', detail: 'Quick-service to premium dining opportunities.', href: '/contact-us' },
            { title: 'Pop-up Activations', detail: 'Short-term, high-impact launches and campaigns.', href: '/contact-us' },
          ].map((item) => (
            <article key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{item.detail}</p>
              <Link href={item.href} className="cta-button inline-block text-sm">
                Continue
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
