'use client';

import { motion, AnimatePresence } from 'framer-motion';

type ActionModalProps = {
  readonly isOpen: boolean;
  readonly title: string;
  readonly message: string;
  readonly confirmLabel?: string;
  readonly onClose: () => void;
};

export default function ActionModal({
  isOpen,
  title,
  message,
  confirmLabel = 'Close',
  onClose,
}: ActionModalProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[300] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="relative w-full max-w-xl rounded-2xl border border-mall-gold/30 bg-mall-dark p-6 md:p-8 shadow-2xl"
            role="dialog"
            aria-modal="true"
          >
            <h3 className="text-2xl font-bold mb-3">{title}</h3>
            <p className="text-gray-300 mb-6">{message}</p>
            <button className="cta-button" onClick={onClose}>
              {confirmLabel}
            </button>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
