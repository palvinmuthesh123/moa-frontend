'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Wine } from 'lucide-react';

export default function DiningSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const venues = [
    {
      name: 'Fine Dining',
      description: 'Upscale restaurant concepts drawing destination diners and high-spend shoppers.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=2400&q=95&auto=format&fit=crop',
      tag: '15+ Concepts',
    },
    {
      name: 'Lifestyle & Lounge',
      description: 'Cocktail bars, rooftop lounges, and experiential social dining venues.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2400&q=95&auto=format&fit=crop',
      tag: '30+ Venues',
    },
    {
      name: 'Global & Casual',
      description: 'From sushi and ramen to Mexican street food — 20+ global casual concepts.',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=2400&q=95&auto=format&fit=crop',
      tag: '20+ Cuisines',
    },
  ];

  return (
    <section id="dining" ref={ref} className="section-container py-20 bg-gradient-to-b from-black to-mall-dark">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-mall-gold/10 px-4 py-2 rounded-full mb-4">
            <Wine className="w-4 h-4 text-mall-gold" />
            <span className="text-mall-gold text-sm font-semibold">CULINARY DESTINATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Dining & Lifestyle</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             MOA&rsquo;s dining portfolio drives foot traffic and dwell time, creating opportunities for F&B operators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-64 mb-4 overflow-hidden rounded-lg">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{venue.name}</h3>
                <span className="text-xs text-mall-gold border border-mall-gold/30 px-2 py-1 rounded-full">{venue.tag}</span>
              </div>
              <p className="text-gray-400 text-sm">{venue.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-r from-mall-gold/10 to-mall-accent/5 rounded-lg p-8 border border-mall-gold/20"
        >
          <h3 className="text-2xl font-bold mb-4">Why Dining Matters</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-mall-gold mb-2">4.5hrs</div>
              <p className="text-gray-300">Average dwell time with dining options</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-mall-gold mb-2">$150M+</div>
              <p className="text-gray-300">Annual dining revenue at MOA</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-mall-gold mb-2">65+</div>
              <p className="text-gray-300">Dining & beverage concepts</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
