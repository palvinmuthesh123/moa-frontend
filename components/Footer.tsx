'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-mall-gold mb-4">MOA</h3>
            <p className="text-gray-400 text-sm">
               The world&rsquo;s largest shopping destination
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#why" className="hover:text-mall-gold transition-colors">Why MOA</a></li>
              <li><a href="#retail" className="hover:text-mall-gold transition-colors">Retail</a></li>
              <li><a href="#events" className="hover:text-mall-gold transition-colors">Events</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://www.mallofamerica.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-mall-gold transition-colors">Privacy Policy</a></li>
              <li><a href="https://www.mallofamerica.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-mall-gold transition-colors">Terms of Service</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-400">
              5000 Center Drive<br />
              Bloomington, MN 55425
            </p>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} The Mall of America. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
