'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.22], [0, -90]);
  const heroRotateX = useTransform(scrollYProgress, [0, 0.22], [0, 8]);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          disablePictureInPicture
        >
          <source src="https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Hero Content */}
      <motion.div
        style={{ y: heroY, rotateX: heroRotateX }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 w-full text-center depth-stage"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-mall-gold/15 border border-mall-gold/30 px-5 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-mall-gold rounded-full animate-pulse" />
          <span className="text-mall-gold text-xs font-bold tracking-widest uppercase">Bloomington, Minnesota</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold text-white leading-tight mb-4"
        >
          America&rsquo;s&nbsp;
          <span className="text-mall-gold">Greatest</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-5xl md:text-7xl font-light text-white/90 mb-8"
        >
          Retail Destination
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed"
        >
          40 million annual visitors. 500+ world-class brands. Unlimited opportunity.
          <br />
          <span className="text-mall-gold font-medium">Your brand belongs here.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/opportunity" className="cta-button text-base px-10 py-4">
            Explore The Opportunity
          </Link>
          <Link
            href="/leasing-options"
            className="px-10 py-4 border-2 border-white/40 text-white font-semibold rounded-lg hover:border-mall-gold hover:text-mall-gold transition-all duration-300 text-base"
          >
            View Leasing Options
          </Link>
        </motion.div>

        {/* Hero Stats Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { number: '5.6M', label: 'Sq. Feet' },
            { number: '40M+', label: 'Visitors/Year' },
            { number: '500+', label: 'Brands' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-mall-gold">{stat.number}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-mall-gold to-transparent"
        />
      </motion.div>
    </section>
  );
}
