'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Mic, Users } from 'lucide-react';
import Link from 'next/link';

export default function EventsSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const eventTypes = [
    {
      icon: <Mic className="w-8 h-8" />,
      title: 'Concerts & Live Events',
      description: 'Host world-class performances and activations',
      capacity: '10K+',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Brand Activations',
      description: 'Immersive brand experiences and product launches',
      capacity: '5K+',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Corporate Events',
      description: 'Conferences, expos, and meetings',
      capacity: '15K+',
    },
  ];

  return (
    <section id="events" ref={ref} className="section-container py-20 bg-gradient-to-b from-black to-mall-dark">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Events & Platform</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            MOA as a global platform for events, activations, and experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="stat-card flex flex-col"
            >
              <div className="text-mall-gold mb-4">{event.icon}</div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-gray-400 flex-grow mb-4">{event.description}</p>
              <div className="text-2xl font-bold text-mall-gold">Cap: {event.capacity}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6">Proven Success</h3>
            <div className="space-y-4">
              {[
                { stat: '150+', label: 'Annual events hosted' },
                { stat: '5M+', label: 'Event attendees per year' },
                { stat: '100%', label: 'Venue utilization rate' },
                { stat: '$500M+', label: 'Economic impact from events' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="text-3xl font-bold text-mall-gold">{item.stat}</div>
                  <div className="text-gray-300">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-96 rounded-lg overflow-hidden relative"
          >
            <iframe
              className="absolute w-[177.77vh] min-w-full h-[56.25vw] min-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              src="https://www.youtube.com/embed/dkqLjkoCZRA?autoplay=1&mute=1&loop=1&controls=0&playlist=dkqLjkoCZRA&modestbranding=1&iv_load_policy=3"
              title="Mall of America events highlight reel"
              allow="autoplay; encrypted-media"
              loading="lazy"
              style={{ border: 'none' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/20" />
            <div className="absolute bottom-4 left-4">
              <div className="text-xs tracking-widest uppercase text-mall-gold font-semibold">Live Highlights</div>
              <div className="text-white font-semibold">Concerts, Activations, and Brand Moments</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link href="/book-event" className="cta-button">
            Book Your Event
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
