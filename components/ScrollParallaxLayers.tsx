'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollParallaxLayers() {
  const { scrollYProgress } = useScroll();

  const yA = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotateA = useTransform(scrollYProgress, [0, 1], [0, 24]);
  const rotateB = useTransform(scrollYProgress, [0, 1], [0, -18]);

  return (
    <div className="fixed inset-0 z-[24] pointer-events-none overflow-hidden mix-blend-screen" aria-hidden="true">
      <motion.div
        style={{ y: yA, rotate: rotateA }}
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-br from-mall-gold/18 to-transparent blur-3xl"
      />
      <motion.div
        style={{ y: yB, rotate: rotateB }}
        className="absolute top-[22%] right-[-7rem] w-[26rem] h-[26rem] rounded-full bg-gradient-to-br from-mall-accent/15 to-transparent blur-3xl"
      />
      <motion.div
        style={{ y: yA }}
        className="absolute bottom-[-9rem] left-[26%] w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-white/8 to-transparent blur-3xl"
      />
    </div>
  );
}
