'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { media } from '@/lib/media';
import { Anchor, Shield, Palette } from 'lucide-react';

const trustItems = [
  { icon: Anchor, label: 'Custom Made' },
  { icon: Shield, label: 'Professional Installation' },
  { icon: Palette, label: 'Marine-Suitable Materials' },
];

function OceanWaves() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[150px] z-[1] overflow-hidden pointer-events-none">
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-navy-deep to-transparent" />
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[120px] animate-[waveflow_14s_linear_infinite]"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0,55 C180,25 540,95 720,55 C900,25 1260,95 1440,55 L1440,120 L0,120 Z" fill="#0E7490" fillOpacity="0.18" />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[90px] animate-[waveflow_9s_linear_infinite]"
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0,42 C180,8 540,76 720,42 C900,8 1260,76 1440,42 L1440,90 L0,90 Z" fill="#155E75" fillOpacity="0.35" />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[55px] animate-[waveflow_6s_linear_infinite]"
        viewBox="0 0 1440 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path d="M0,26 C180,4 540,48 720,26 C900,4 1260,48 1440,26 L1440,55 L0,55 Z" fill="#0E7490" fillOpacity="0.55" />
        <path d="M0,26 C180,4 540,48 720,26 C900,4 1260,48 1440,26" stroke="#3BA6C7" strokeOpacity="0.6" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}

function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/5"
          style={{
            width: `${pseudoRandom(i * 7 + 1) * 4 + 1}px`,
            height: `${pseudoRandom(i * 13 + 3) * 4 + 1}px`,
            left: `${pseudoRandom(i * 5 + 2) * 100}%`,
            top: `${pseudoRandom(i * 11 + 4) * 100}%`,
            animation: `float ${pseudoRandom(i * 9 + 6) * 6 + 4}s ease-in-out infinite`,
            animationDelay: `${pseudoRandom(i * 17 + 8) * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => setShouldLoadVideo(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  useEffect(() => {
    if (videoRef.current && videoLoaded) {
      videoRef.current.playbackRate = 0.7;
    }
  }, [videoLoaded]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Background — poster image always visible, video only on desktop */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image
          src={media.images.sections.heroOcean}
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
        />

        {shouldLoadVideo && (
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            onLoadedData={() => setVideoLoaded(true)}
            poster={media.images.sections.heroOcean}
          >
            <source src={media.videos.heroJetski} type="video/mp4" />
          </video>
        )}

        <div className="absolute inset-0 bg-navy-deep/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 via-navy-deep/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.2),transparent_60%)]" />
      </motion.div>

      {/* Animated elements — hidden on mobile for performance */}
      {!isMobile && (
        <>
          <OceanWaves />
          <FloatingParticles />
        </>
      )}

      {/* Content */}
      <motion.div style={{ y: contentY, opacity }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-4 sm:mb-6"
            >
              <div className="h-px w-12 bg-gradient-to-r from-ocean to-transparent" />
              <span className="text-ocean text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em]">
                Marine Upholstery &bull; Kuwait
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-white font-heading font-bold leading-[1.05]"
            >
              <span className="text-[2.2rem] sm:text-[2.5rem] lg:text-[clamp(3rem,6vw,5rem)]">Premium Marine</span>
              <br />
              <span className="text-[2.2rem] sm:text-[2.5rem] lg:text-[clamp(3rem,6vw,5rem)]">Upholstery &amp; Custom</span>
              <br />
              <span className="relative inline-block">
                <span className="text-ocean text-[2.2rem] sm:text-[2.5rem] lg:text-[clamp(3rem,6vw,5rem)]">Covers</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
                  className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-[2px] sm:h-[3px] bg-gradient-to-r from-ocean to-sand origin-left"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6 sm:mt-8 text-white/60 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Custom jet ski seats, boat &amp; ship upholstery, marine seating
              and canopy covers — professionally crafted and installed in Kuwait.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <Button href="/request-a-quote" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-12 sm:mt-16 flex flex-wrap gap-6 sm:gap-8"
            >
              {trustItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-ocean" />
                  </div>
                  <span className="text-white/50 text-xs sm:text-sm font-medium">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator — desktop only */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="text-white/30 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-ocean" />
          </motion.div>
        </motion.div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/30 to-transparent z-10" />
    </section>
  );
}
