'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Music2, LayoutGrid, Mic2, Users } from 'lucide-react';
import Link from 'next/link';

const venues = [
  {
    icon: <Music2 className="w-8 h-8" />,
    name: 'Rotunda Stage',
    type: 'LIVE PERFORMANCE',
    sqft: '12,000',
    capacity: '1,200',
    description:
      'The heart of MOA. A purpose-built stage in our iconic glass-domed rotunda — perfect for concerts, album releases, award shows, and broadcast events.',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=2400&q=95&auto=format&fit=crop',
    features: ['Stage + full AV rig', 'Broadcast-ready lighting', 'Green room & backstage', 'Standing or seated config'],
  },
  {
    icon: <LayoutGrid className="w-8 h-8" />,
    name: 'Expo & Convention Hall',
    type: 'EXPOSITION CENTER',
    sqft: '75,000',
    capacity: '10,000',
    description:
      'MOA&rsquo;s exposition-scale floor space can host auto shows, trade expos, consumer events, and major brand launches — all inside America&rsquo;s most visited destination.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=2400&q=95&auto=format&fit=crop',
    features: ['75K sq ft divisible floor', 'Loading dock access', 'Fiber & power grid', 'On-site catering & services'],
  },
  {
    icon: <Mic2 className="w-8 h-8" />,
    name: 'Starjacks Comedy & Lounge',
    type: 'PERFORMING ARTS',
    sqft: '4,500',
    capacity: '400',
    description:
      'Intimate performing arts venue for comedy showcases, spoken word, private performances, and branded content capture in a full theatrical setting.',
    image: 'https://images.unsplash.com/photo-1560732488-6b0df240254a?w=2400&q=95&auto=format&fit=crop',
    features: ['Theatrical stage & fly system', 'Premium acoustic treatment', 'Full bar & hospitality', 'Streaming-ready studio setup'],
  },
  {
    icon: <Users className="w-8 h-8" />,
    name: 'Corporate Suites & Boardrooms',
    type: 'CORPORATE & MEETINGS',
    sqft: '8,000',
    capacity: '500',
    description:
      'Premium meeting, boardroom, and corporate retreat spaces for teams up to 500. Catering, AV, and concierge services included.',
    image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=2400&q=95&auto=format&fit=crop',
    features: ['Executive boardrooms', 'Breakout rooms & lounges', 'Full AV & presentation tech', 'On-site event planner'],
  },
];

export default function VenueSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="venues" ref={ref} className="relative py-24 bg-mall-dark overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-mall-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-mall-gold/10 border border-mall-gold/20 px-4 py-2 rounded-full mb-4">
            <Music2 className="w-4 h-4 text-mall-gold" />
            <span className="text-mall-gold text-xs font-bold tracking-widest uppercase">Venue Modules</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            World-Class <span className="text-mall-gold">Venues</span> Inside MOA
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            From intimate performing-arts stages to 75,000-sq-ft exposition halls — MOA hosts events
            at every scale, with built-in audiences of millions.
          </p>
        </motion.div>

        {/* Venue Grid */}
        <div className="space-y-8">
          {venues.map((venue, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 + i * 0.12 }}
              className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-last' : ''}`}
            >
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold text-mall-gold bg-black/60 border border-mall-gold/30 px-3 py-1 rounded-full">
                    {venue.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white/5 p-8 flex flex-col justify-center">
                <div className="text-mall-gold mb-3">{venue.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{venue.name}</h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed" dangerouslySetInnerHTML={{ __html: venue.description }} />

                {/* Specs */}
                <div className="flex gap-6 mb-5">
                  <div>
                    <div className="text-xl font-bold text-mall-gold">{venue.sqft}</div>
                    <div className="text-gray-500 text-xs">sq ft</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-mall-gold">{venue.capacity}</div>
                    <div className="text-gray-500 text-xs">capacity</div>
                  </div>
                </div>

                {/* Features */}
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {venue.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="w-1.5 h-1.5 bg-mall-gold rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/venue-inquiry" className="cta-button inline-block text-center text-sm">
                  Inquire About Availability
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
