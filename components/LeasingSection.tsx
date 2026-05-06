'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Coffee, Crown, Store, Zap } from 'lucide-react';
import Link from 'next/link';

const paths = [
  {
    icon: <Crown className="w-7 h-7" />,
    label: 'Luxury',
    tagline: 'Prime Wing Placement',
    description:
      'Anchor our luxury corridor beside international maisons. Prime corner units, floor-to-ceiling glass frontage, private client entrances. Typical lease: 5–15 years.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=2400&q=95&auto=format&fit=crop',
    sqft: '1,500–6,000',
    traffic: '18M targeted',
    cta: 'Luxury Inquiry',
    href: '/luxury-inquiry',
    color: 'from-yellow-500/20',
  },
  {
    icon: <Store className="w-7 h-7" />,
    label: 'Retail',
    tagline: 'High-Volume Storefront',
    description:
      'Inline, endcap, and anchor opportunities across 4 levels. Custom build-out support, co-marketing, and exclusive category rights available.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2400&q=95&auto=format&fit=crop',
    sqft: '500–15,000',
    traffic: '40M general',
    cta: 'Retail Inquiry',
    href: '/leasing-options',
    color: 'from-blue-500/10',
  },
  {
    icon: <Coffee className="w-7 h-7" />,
    label: 'F&B',
    tagline: 'Food & Beverage Concepts',
    description:
      'From quick-service kiosks to full-service restaurant pads. Exclusive concepts welcome. Below-market entry rates for anchor F&B brands with proven concepts.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2400&q=95&auto=format&fit=crop',
    sqft: '200–8,000',
    traffic: '65+ seats',
    cta: 'F&B Inquiry',
    href: '/contact-us',
    color: 'from-orange-500/10',
  },
  {
    icon: <Zap className="w-7 h-7" />,
    label: 'Pop-up',
    tagline: 'Short-Term Activation',
    description:
      'Test, launch, or activate with flexible 1–12 month terms. Turn-key kiosks, inline suites, and dedicated activation zones. Ideal for DTC brands going physical.',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2018_Mall_of_America_01.jpg',
    sqft: '50–2,000',
    traffic: 'Prime corridors',
    cta: 'Pop-up Inquiry',
    href: '/contact-us',
    color: 'from-purple-500/10',
  },
];

export default function LeasingSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="leasing" ref={ref} className="relative py-24 bg-gradient-to-b from-mall-dark to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-mall-gold/10 border border-mall-gold/20 px-4 py-2 rounded-full mb-4">
            <Building2 className="w-4 h-4 text-mall-gold" />
            <span className="text-mall-gold text-xs font-bold tracking-widest uppercase">Leasing Paths</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Find Your Space at MOA</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Every brand has a home at Mall of America. Tailored leasing structures by category,
            with dedicated leasing advisors for each segment.
          </p>
        </motion.div>

        {/* Category Cards — Full Width Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {paths.map((path, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => { window.location.href = path.href; }}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  window.location.href = path.href;
                }
              }}
              role="button"
              tabIndex={0}
            >
              {/* Background Image */}
              <div className="h-56">
                <img
                  src={path.image}
                  alt={path.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${path.color} via-black/60 to-black/80`} />
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-mall-gold">{path.icon}</div>
                  <span className="text-mall-gold text-xs font-bold uppercase tracking-widest">{path.label}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{path.tagline}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{path.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 text-xs text-gray-400">
                    <span>📐 {path.sqft} sq ft</span>
                    <span>👥 {path.traffic}</span>
                  </div>
                  <Link
                    href={path.href}
                    className="px-4 py-2 bg-mall-gold text-black text-xs font-bold rounded-lg hover:bg-mall-accent transition-colors shrink-0"
                  >
                    {path.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leasing Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">The Leasing Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', label: 'Initial Inquiry', desc: 'Contact our leasing team with your category and size needs.' },
              { step: '02', label: 'Site Tour', desc: 'Walk available spaces with a dedicated leasing advisor.' },
              { step: '03', label: 'Proposal', desc: 'Receive a tailored LOI with terms, incentives, and build-out support.' },
              { step: '04', label: 'Grand Opening', desc: 'Full marketing and PR support for your MOA launch.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="text-4xl font-bold text-mall-gold/30 mb-2">{s.step}</div>
                <div className="text-sm font-semibold mb-1">{s.label}</div>
                <div className="text-gray-500 text-xs">{s.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
