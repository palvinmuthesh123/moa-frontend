'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BarChart3, Megaphone, Handshake } from 'lucide-react';
import Link from 'next/link';

const tiers = [
  {
    name: 'Presenting Sponsor',
    price: 'From $500K',
    color: 'from-yellow-500/20 to-yellow-600/5',
    border: 'border-yellow-500/40',
    badge: 'bg-yellow-500 text-black',
    highlights: [
      'Naming rights on main atrium events',
      'Year-round digital billboard network',
      'Dedicated brand zone (2,000 sq ft)',
      'VIP hospitality suite access',
      'Ambassador & influencer program',
      'Guaranteed 40M+ annual impressions',
    ],
  },
  {
    name: 'Category Sponsor',
    price: 'From $150K',
    color: 'from-mall-gold/20 to-mall-gold/5',
    border: 'border-mall-gold/40',
    badge: 'bg-mall-gold text-black',
    highlights: [
      'Exclusive category ownership (no competitors)',
      'Pop-up activation space (500 sq ft)',
      'In-mall digital display rotation',
      'Co-branded event integrations',
      'Social media amplification',
      'Quarterly performance reports',
    ],
  },
  {
    name: 'Event Partner',
    price: 'From $25K',
    color: 'from-white/10 to-white/5',
    border: 'border-white/20',
    badge: 'bg-white/20 text-white',
    highlights: [
      'Event-specific branding & signage',
      'On-site sampling & activation',
      'Digital content package',
      'Guest list & VIP access',
      'Post-event analytics report',
      'PR & press inclusion',
    ],
  },
];

const audienceData = [
  { label: 'Annual Foot Traffic', value: '40M+', icon: <BarChart3 className="w-5 h-5" /> },
  { label: 'Avg. Dwell Time', value: '4.5 hrs', icon: <Award className="w-5 h-5" /> },
  { label: 'Social Media Reach', value: '8M+', icon: <Megaphone className="w-5 h-5" /> },
  { label: 'Brand Partners Active', value: '120+', icon: <Handshake className="w-5 h-5" /> },
];

export default function SponsorshipSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="sponsorship" ref={ref} className="relative py-24 bg-black overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-mall-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-mall-gold/10 border border-mall-gold/20 px-4 py-2 rounded-full mb-4">
            <Handshake className="w-4 h-4 text-mall-gold" />
            <span className="text-mall-gold text-xs font-bold tracking-widest uppercase">Sponsorship & Partnerships</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Partner With America&rsquo;s&nbsp;
            <span className="text-mall-gold">Most Visited</span> Destination
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            MOA is a media platform as much as a mall. Over 40 million annual visitors means
            unrivaled brand visibility, audience data, and activation opportunity under one roof.
          </p>
        </motion.div>

        {/* Audience Data */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {audienceData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-mall-gold/30 transition-colors"
            >
              <div className="text-mall-gold flex justify-center mb-2">{item.icon}</div>
              <div className="text-3xl font-bold text-mall-gold mb-1">{item.value}</div>
              <div className="text-gray-400 text-xs">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Tiers */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className={`relative bg-gradient-to-b ${tier.color} border ${tier.border} rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300`}
            >
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${tier.badge} mb-4 inline-block`}>
                {tier.name}
              </span>
              <div className="text-2xl font-bold text-white mb-5">{tier.price}</div>
              <ul className="space-y-3">
                {tier.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-mall-gold mt-0.5">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
              <Link
                href="/partnership-deck"
                className="mt-7 block text-center py-3 border border-mall-gold/40 text-mall-gold rounded-lg hover:bg-mall-gold hover:text-black transition-all duration-300 text-sm font-semibold"
              >
                Request Partnership Deck
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Activation examples */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">Recent Activation Partners</p>
          <div className="relative h-64 rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=2800&q=95&auto=format&fit=crop"
              alt="Brand activation at Mall of America"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
              <div className="ml-10">
                <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">Case Study</div>
                <h3 className="text-2xl font-bold mb-2">Live Nation × MOA</h3>
                <p className="text-gray-300 text-sm max-w-sm">
                  200+ concerts per year, 500K+ attendees, 3x retail lift on event days.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
