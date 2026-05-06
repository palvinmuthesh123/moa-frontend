'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Users, Store, Globe2, TrendingUp, Star } from 'lucide-react';

export default function PropertyOverview() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const stats = [
    {
      icon: <MapPin className="w-7 h-7" />,
      number: '5.6M',
      label: 'Square Feet',
      description: "America's largest retail complex",
    },
    {
      icon: <Users className="w-7 h-7" />,
      number: '40M+',
      label: 'Annual Visitors',
      description: 'From 50 states & 50+ countries',
    },
    {
      icon: <Store className="w-7 h-7" />,
      number: '500+',
      label: 'Brands & Attractions',
      description: 'Luxury to lifestyle — all under one roof',
    },
    {
      icon: <Globe2 className="w-7 h-7" />,
      number: '10th',
      label: 'Most Visited Place in USA',
      description: 'Ahead of Disneyland & Grand Canyon',
    },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      number: '$2B+',
      label: 'Annual Sales Revenue',
      description: 'Consistent revenue generation',
    },
    {
      icon: <Star className="w-7 h-7" />,
      number: '4.5hrs',
      label: 'Avg. Dwell Time',
      description: 'Highest in North American retail',
    },
  ];

  const demographics = [
    { label: 'Women 25–44', pct: 38 },
    { label: 'Families w/ Children', pct: 29 },
    { label: 'HHI $75K+', pct: 62 },
    { label: 'Out-of-State Visitors', pct: 43 },
    { label: 'International Travel', pct: 12 },
    { label: 'Millennials & Gen Z', pct: 54 },
  ];

  return (
    <section id="why" ref={ref} className="relative py-24 bg-mall-dark">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-mall-gold/10 border border-mall-gold/20 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-mall-gold" />
            <span className="text-mall-gold text-xs font-bold tracking-widest uppercase">Why This Property</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Why The Mall of America?
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            More than a shopping center — MOA is America&rsquo;s most-visited tourist attraction, a media platform,
            and the highest-density retail opportunity in North America.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="stat-card text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-mall-gold mb-3 flex justify-center group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-1 text-mall-gold">{stat.number}</div>
              <div className="text-sm md:text-base font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-500 text-xs">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Demographics + Location side-by-side */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Demographics Data Viz */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Visitor Demographics</h3>
            <p className="text-gray-400 mb-8 text-sm">
              Data-driven audience insight — premium reach for premium brands.
            </p>
            <div className="space-y-5">
              {demographics.map((d, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300">{d.label}</span>
                    <span className="text-sm text-mall-gold font-semibold">{d.pct}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${d.pct}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
                      className="h-2 rounded-full bg-gradient-to-r from-mall-gold to-mall-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Location & Regional Reach */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative rounded-2xl overflow-hidden h-72 mb-6">
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=2400&q=95&auto=format&fit=crop"
                alt="Mall of America interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <div className="text-white font-bold text-lg">Bloomington, MN</div>
                <div className="text-gray-300 text-sm">5 min from MSP International Airport</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Drive-Market', value: '20M' },
                { label: 'Fly-In Visitors', value: '4M+' },
                { label: 'Regional States', value: '12' },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-mall-gold">{item.value}</div>
                  <div className="text-gray-400 text-xs mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
