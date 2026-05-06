'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type IntroGatewayProps = {
  readonly children: React.ReactNode;
};

type Phase = 'intro' | 'story' | 'done';

export default function IntroGateway({ children }: IntroGatewayProps) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [showEnter, setShowEnter] = useState(false);
  const [shutterActive, setShutterActive] = useState(false);
  const [introVideoSrc, setIntroVideoSrc] = useState(
    'https://videos.pexels.com/video-files/3255275/3255275-hd_1920_1080_25fps.mp4',
  );
  const [storyVideoSrc, setStoryVideoSrc] = useState(
    'https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4',
  );
  const shutterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const skipFromQuery = params.get('skipIntro') === '1';
    const introSeen = window.sessionStorage.getItem('moa-intro-seen') === '1';

    if (skipFromQuery || introSeen) {
      setPhase('done');
      setShowEnter(true);
      if (skipFromQuery) {
        params.delete('skipIntro');
        const next = params.toString();
        const cleaned = `${window.location.pathname}${next ? `?${next}` : ''}${window.location.hash}`;
        window.history.replaceState({}, '', cleaned);
      }
    }
  }, []);

  useEffect(() => {
    const timer = globalThis.setTimeout(() => setShowEnter(true), 3500);
    return () => globalThis.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === 'done') {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [phase]);

  useEffect(() => {
    return () => {
      if (shutterTimerRef.current) {
        globalThis.clearTimeout(shutterTimerRef.current);
      }
    };
  }, []);

  const completeIntro = () => {
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('moa-intro-seen', '1');
    }
    setPhase('done');
  };

  const handleEnter = () => {
    setShutterActive(true);
    if (shutterTimerRef.current) {
      globalThis.clearTimeout(shutterTimerRef.current);
    }

    shutterTimerRef.current = globalThis.setTimeout(() => {
      setPhase('story');
      globalThis.setTimeout(() => setShutterActive(false), 280);
    }, 420);
  };

  if (phase === 'done') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97, rotateX: 6 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 1300 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black text-white overflow-hidden">
      <AnimatePresence>
        {shutterActive ? (
          <motion.div
            key="shutter"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 z-[120] pointer-events-none"
          >
            <motion.div
              initial={{ height: '0%' }}
              animate={{ height: '52%' }}
              transition={{ duration: 0.28, ease: [0.77, 0, 0.175, 1] }}
              className="absolute top-0 left-0 right-0 bg-black"
            />
            <motion.div
              initial={{ height: '0%' }}
              animate={{ height: '52%' }}
              transition={{ duration: 0.28, ease: [0.77, 0, 0.175, 1] }}
              className="absolute bottom-0 left-0 right-0 bg-black"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-mall-gold/70 blur-[1px]" />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {phase === 'intro' ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-full isolate"
          >
            <video
              className="absolute inset-0 z-0 h-full w-full object-cover pointer-events-none select-none"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              disablePictureInPicture
              onError={() => {
                setIntroVideoSrc('https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4');
              }}
            >
              <source
                src={introVideoSrc}
                type="video/mp4"
              />
            </video>
            <div className="absolute z-10 inset-0 bg-black/25 pointer-events-none" />

            <div className="absolute z-30 inset-x-0 bottom-10 flex justify-center px-4">
              <AnimatePresence>
                {showEnter ? (
                  <motion.button
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.45 }}
                    onClick={handleEnter}
                    className="px-10 py-4 border border-mall-gold text-mall-gold text-sm tracking-[0.2em] uppercase rounded-full hover:bg-mall-gold hover:text-black transition-all"
                  >
                    Enter
                  </motion.button>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="story"
            initial={{ opacity: 0, rotateY: 4, scale: 0.985 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-full isolate"
          >
            <video
              className="absolute inset-0 z-0 h-full w-full object-cover pointer-events-auto select-none"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              controls
              disablePictureInPicture
              onError={() => {
                setStoryVideoSrc('https://media.w3.org/2010/05/sintel/trailer.mp4');
              }}
            >
              <source src={storyVideoSrc} type="video/mp4" />
            </video>
            <div className="absolute z-10 inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/30 pointer-events-none" />

            <div className="absolute z-30 top-6 right-6 pointer-events-auto">
              <button
                onClick={completeIntro}
                className="px-5 py-2 border border-white/40 text-white text-xs tracking-widest uppercase rounded-full hover:bg-white hover:text-black transition-all"
              >
                Skip Intro
              </button>
            </div>

            <div className="absolute z-30 inset-x-0 bottom-10 flex justify-center px-4 pointer-events-auto">
              <button
                onClick={completeIntro}
                className="px-10 py-4 bg-mall-gold text-black text-sm font-semibold tracking-[0.15em] uppercase rounded-full hover:bg-mall-accent transition-all"
              >
                Continue to Deck
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
