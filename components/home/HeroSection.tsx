'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Anchor, Shield, Palette } from 'lucide-react';

const trustItems = [
  { icon: Anchor, label: 'Custom Made' },
  { icon: Shield, label: 'Professional Installation' },
  { icon: Palette, label: 'Marine-Suitable Materials' },
];

function OceanWaves() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-[150px] z-[1] overflow-hidden pointer-events-none">
      {/* Soft fade on the top edge so the water blends in and never covers content */}
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-navy-deep to-transparent" />

      {/* Deep wave — slow flow */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[120px] animate-[waveflow_14s_linear_infinite]"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,55 C180,25 540,95 720,55 C900,25 1260,95 1440,55 L1440,120 L0,120 Z"
          fill="#0E7490"
          fillOpacity="0.18"
        />
      </svg>

      {/* Mid wave — offset flow */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[90px] animate-[waveflow_9s_linear_infinite]"
        viewBox="0 0 1440 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,42 C180,8 540,76 720,42 C900,8 1260,76 1440,42 L1440,90 L0,90 Z"
          fill="#155E75"
          fillOpacity="0.35"
        />
      </svg>

      {/* Front wave — visible crest with highlight */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] h-[55px] animate-[waveflow_6s_linear_infinite]"
        viewBox="0 0 1440 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,26 C180,4 540,48 720,26 C900,4 1260,48 1440,26 L1440,55 L0,55 Z"
          fill="#0E7490"
          fillOpacity="0.55"
        />
        <path
          d="M0,26 C180,4 540,48 720,26 C900,4 1260,48 1440,26"
          stroke="#3BA6C7"
          strokeOpacity="0.6"
          strokeWidth="2"
          fill="none"
        />
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
      {Array.from({ length: 20 }).map((_, i) => (
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

function LightRays() {
  return (
    <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
      <div
        className="absolute -top-1/4 right-1/4 w-[600px] h-[800px] rotate-12"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(14,116,144,0.35) 0%, transparent 65%)',
          animation: 'lightRay 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute -top-1/4 right-1/3 w-[400px] h-[600px] rotate-6 opacity-70"
        style={{
          background:
            'radial-gradient(ellipse at top, rgba(198,161,91,0.25) 0%, transparent 65%)',
          animation: 'lightRay 10s ease-in-out infinite reverse',
        }}
      />
    </div>
  );
}

export function HeroSection() {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current && videoLoaded) {
      videoRef.current.playbackRate = 0.7;
    }
  }, [videoLoaded]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Video Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        {/* Fallback image poster (visible while video loads) */}
        <Image
          src="/images/sections/hero-ocean.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className={`object-cover ${videoLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-1000`}
        />

        {/* Video background — lazy-loaded after hero is visible */}
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
            poster="/images/sections/hero-ocean.jpg"
          >
            <source src="/videos/hero-jetski.mp4" type="video/mp4" />
          </video>
        )}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-navy-deep/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/70 via-navy-deep/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-transparent to-navy-deep/90" />

        {/* Animated radial accents */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(14,116,144,0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(198,161,91,0.06),transparent_50%)]" />
      </motion.div>

      {/* Animated marine elements */}
      <OceanWaves />
      <FloatingParticles />
      <LightRays />

      {/* Subtle grid */}
      <div className="absolute inset-0 z-[2] opacity-[0.02] bg-[length:80px_80px] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]" />

      {/* Content */}
      <motion.div style={{ y: contentY, opacity }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-gradient-to-r from-ocean to-transparent" />
              <span className="text-ocean text-xs font-semibold uppercase tracking-[0.25em]">
                Marine Upholstery &bull; Kuwait
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-white font-heading font-bold leading-[1.05]"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Premium Marine
              <br />
              Upholstery &amp; Custom
              <br />
              <span className="relative inline-block">
                <span className="text-ocean">Covers</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
                  className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-ocean to-sand origin-left"
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 text-white/60 text-lg md:text-xl max-w-xl leading-relaxed"
            >
              Custom jet ski seats, boat &amp; ship upholstery, marine seating
              and canopy covers — professionally crafted and installed in Kuwait.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Button href="/request-a-quote" variant="primary" size="lg">
                Request a Quote
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-16 flex flex-wrap gap-8"
            >
              {trustItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                    <item.icon className="w-4 h-4 text-ocean" />
                  </div>
                  <span className="text-white/50 text-sm font-medium">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.2em]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-ocean" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/30 to-transparent z-10" />
    </section>
  );
}
