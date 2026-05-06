'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Gamepad2, Music, Zap } from 'lucide-react';

export default function EntertainmentSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const attractions = [
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Nickelodeon Universe',
      description: "North America's largest indoor theme park — 7 acres, 27 rides, zero weather concerns.",
      visitors: '2M+',
      image: 'https://images.unsplash.com/photo-1562016600-ece13e8ba570?w=2400&q=95&auto=format&fit=crop',
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: 'SEA LIFE Aquarium',
      description: 'Over 10,000 sea creatures across 14 themed zones — a family anchor experience.',
      visitors: '1M+',
      image: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=2400&q=95&auto=format&fit=crop',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Live Nation Venue',
      description: 'Indoor concert and entertainment venue hosting 200+ shows per year.',
      visitors: '500K+',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=2400&q=95&auto=format&fit=crop',
    },
  ];

  return (
    <section id="entertainment" ref={ref} className="section-container py-20 bg-mall-dark">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Entertainment & Attractions</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            MOA is not just retail - it's a complete destination with world-class entertainment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {attractions.map((attraction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="h-72">
                <img src={attraction.image} alt={attraction.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-mall-gold mb-2">{attraction.icon}</div>
                <h3 className="text-lg font-bold mb-1">{attraction.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{attraction.description}</p>
                <div className="text-2xl font-bold text-mall-gold">{attraction.visitors} <span className="text-sm font-normal text-gray-400">annual visitors</span></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative h-80 rounded-2xl overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?w=2800&q=95&auto=format&fit=crop"
            alt="Nickelodeon Universe roller coaster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex items-center">
            <div className="ml-10">
              <div className="text-mall-gold text-xs uppercase tracking-widest mb-2 font-semibold">Anchor Differentiator</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-3">Nickelodeon Universe</h3>
              <p className="text-gray-200 max-w-md text-sm">
                The only indoor theme park of its scale in North America. Keeps families on-property
                for 6+ hours — driving unmatched dwell time and secondary spend.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
