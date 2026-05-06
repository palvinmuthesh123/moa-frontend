'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function LuxurySection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="luxury" ref={ref} className="section-container py-20 bg-mall-dark">
      <div className="section-content">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="h-96 md:h-full bg-gradient-to-br from-mall-gold/20 to-mall-accent/10 rounded-lg overflow-hidden min-h-96"
          >
            <img
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=2400&q=95&auto=format&fit=crop"
              alt="Luxury Shopping Experience"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 bg-mall-gold/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-mall-gold" />
              <span className="text-mall-gold text-sm font-semibold">ELEVATED EXPERIENCE</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">Luxury at Its Finest</h2>

            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              MOA&rsquo;s Luxury Wing is the Midwest&rsquo;s premier high-end retail environment.
              With an affluent, design-conscious customer base and an average spend of $340+&nbsp;per visit,
              our curated luxury corridor delivers ROI that no standalone flagship can match.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { stat: '$340+', label: 'Avg. luxury spend per visit' },
                { stat: '62%', label: 'Shoppers with HHI $75K+' },
                { stat: '18M', label: 'Targeted luxury impressions/yr' },
                { stat: '95%', label: 'Brand partner retention rate' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-mall-gold/10 border border-mall-gold/20 rounded-lg p-4"
                >
                  <div className="text-2xl font-bold text-mall-gold">{item.stat}</div>
                  <div className="text-gray-400 text-xs mt-1">{item.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3 mb-8">
              {[
                'Dedicated luxury concierge & white-glove services',
                'Prime corner and anchor locations with maximum visibility',
                'VIP private shopping events & after-hours access',
                '24/7 dedicated security and venue management',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-mall-gold rounded-full shrink-0" />
                  <span className="text-gray-300 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link href="/luxury-inquiry" className="cta-button inline-block">
                Inquire About Luxury Spaces
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
