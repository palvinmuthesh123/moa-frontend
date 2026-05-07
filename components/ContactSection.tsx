'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import ActionModal from '@/components/ActionModal';

export default function ContactSection() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const apiBase = process.env.NEXT_PUBLIC_API_URL || 'https://moa-backend-meq8.onrender.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiryType: 'leasing',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback('');

    try {
      const response = await fetch(`${apiBase}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit inquiry');
      }

      setFeedback('Thank you. Our team will contact you shortly.');
      setShowModal(true);
      setFormData({ name: '', email: '', company: '', inquiryType: 'leasing', message: '' });
    } catch (error) {
      setFeedback('Unable to submit right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="section-container py-20 bg-mall-dark">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Partner With Us?</h2>
           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             Whether you&rsquo;re a retailer, sponsor, or event partner, let&rsquo;s discuss how MOA can drive your success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="text-mall-gold w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+16126831600" className="text-gray-400 hover:text-mall-gold transition-colors">
                    +1 (612) 683-1600
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="text-mall-gold w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:sales@mallofamerica.com" className="text-gray-400 hover:text-mall-gold transition-colors">
                    sales@mallofamerica.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-mall-gold w-6 h-6 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">
                    5000 Center Drive<br />
                    Bloomington, MN 55425<br />
                    USA
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 pt-8 border-t border-white/10"
            >
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { label: 'Instagram', href: 'https://www.instagram.com/mallofamerica/' },
                  { label: 'X', href: 'https://x.com/mallofamerica' },
                  { label: 'Facebook', href: 'https://www.facebook.com/mallofamerica/' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-mall-gold transition-colors"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-mall-gold transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-mall-gold transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Company</label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-mall-gold transition-colors"
                placeholder="Your company"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Inquiry Type</label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-mall-gold transition-colors"
              >
                <option value="leasing">Retail Leasing</option>
                <option value="sponsorship">Sponsorship / Brand Partnership</option>
                <option value="events">Event Booking</option>
                <option value="venue">Venue Availability</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-mall-gold transition-colors resize-none"
                placeholder="Tell us about your opportunity..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full cta-button"
            >
              {isSubmitting ? 'Sending...' : 'Send Inquiry'}
            </motion.button>
            {feedback ? <p className="text-sm text-gray-300">{feedback}</p> : null}
          </motion.form>
        </div>
      </div>
      <ActionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Inquiry Submitted"
        message="Thank you. Our team has received your request and will contact you shortly."
      />
    </section>
  );
}
