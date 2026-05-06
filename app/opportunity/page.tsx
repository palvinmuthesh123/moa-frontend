import Link from 'next/link';

export default function OpportunityPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-mall-dark to-black text-white pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/?skipIntro=1" className="text-mall-gold text-sm tracking-widest uppercase hover:text-mall-accent transition-colors">
          Back to Deck
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4">The MOA Opportunity</h1>
        <p className="text-gray-300 text-lg max-w-3xl mb-10">
          Mall of America combines destination-scale footfall, premium tenant mix, and year-round programming.
          This page provides an executive snapshot for brand decision-makers.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { title: '40M+', value: 'Annual visitors', note: 'One of the highest-traffic retail destinations in North America.' },
            { title: '500+', value: 'Retail brands', note: 'Cross-category ecosystem from luxury to family entertainment.' },
            { title: '5.6M', value: 'Square feet', note: 'Scale for flagship, activation, and experiential formats.' },
          ].map((item) => (
            <article key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h2 className="text-3xl font-bold text-mall-gold mb-2">{item.title}</h2>
              <p className="font-semibold mb-2">{item.value}</p>
              <p className="text-gray-400 text-sm">{item.note}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
