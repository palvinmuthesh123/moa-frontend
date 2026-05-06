'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ShoppingBag, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function RetailSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const categories = [
    {
      title: 'Luxury & Premium',
      description: 'From Gucci to Louis Vuitton — host your flagship where 40M annual visitors shop.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=2400&q=95&auto=format&fit=crop',
      stat: '150+',
      sub: 'Premium Brands',
      href: '#luxury',
    },
    {
      title: 'Lifestyle & Fashion',
      description: 'Nike, Zara, H&M, Uniqlo — 200+ lifestyle & fashion brands in curated environments.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2018%20Mall%20of%20America%2001.jpg',
      stat: '200+',
      sub: 'Fashion Labels',
      href: '#leasing',
    },
    {
      title: 'Pop-ups & Activation',
      description: 'Flexible premium pop-up spaces with built-in audience and guaranteed visibility.',
      image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=2400&q=95&auto=format&fit=crop',
      stat: '40+',
      sub: 'Active Pop-ups',
      href: '#contact',
    },
  ];

  const brands = ['Nike', 'Zara', 'Apple', 'Gucci', 'H&M', 'Levi\'s', 'Coach', 'Lululemon', 'Uniqlo', 'Kate Spade'];

  return (
    <section id="retail" ref={ref} className="section-container py-20 bg-gradient-to-b from-mall-dark to-black">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-mall-gold/10 px-4 py-2 rounded-full mb-4">
            <ShoppingBag className="w-4 h-4 text-mall-gold" />
            <span className="text-mall-gold text-sm font-semibold">RETAIL EXCELLENCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Curated Retail Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From luxury flagships to emerging brands, MOA offers unmatched visibility and foot traffic
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.a
              key={index}
              href={category.href}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:from-black/70" />
                  <div className="absolute bottom-4 left-4">
                  <div className="text-3xl font-bold text-mall-gold">{category.stat}</div>
                  <div className="text-xs text-gray-300 font-medium">{category.sub}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-400 text-sm">{category.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Brand Showcase + Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-6">Home to the World&rsquo;s Best Brands</p>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {brands.map((brand) => (
              <span key={brand} className="px-5 py-2 border border-white/15 rounded-full text-sm text-gray-300 hover:border-mall-gold hover:text-mall-gold transition-colors cursor-default">
                {brand}
              </span>
            ))}
          </div>
          <div className="bg-gradient-to-r from-mall-gold/10 via-mall-gold/5 to-transparent rounded-2xl p-8 border border-mall-gold/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <TrendingUp className="text-mall-gold w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">Sales Performance</h3>
                  <p className="text-gray-400 text-sm">MOA retailers average $1,200+ per sq&nbsp;ft annually — well above the national retail benchmark of $325.</p>
                </div>
              </div>
              <Link href="/leasing-options" className="cta-button whitespace-nowrap shrink-0">
                Explore Leasing →
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
