'use client';

import { useEffect, useState, useRef } from 'react';
import { useLang } from '@/components/shared/LangProvider';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white">
      {count}{suffix}
    </div>
  );
}

export function StatsSection() {
  const { isArabic } = useLang();
  const stats = [
    { target: 30, suffix: '+', label: isArabic ? 'سنوات من الخبرة' : 'Years of Experience' },
    { target: 500, suffix: '+', label: isArabic ? 'مشروع مُنجز' : 'Projects Completed' },
    { target: 100, suffix: '%', label: isArabic ? 'رضا العملاء' : 'Customer Satisfaction' },
    { target: 15, suffix: '+', label: isArabic ? 'أنواع الخدمات' : 'Service Categories' },
  ];

  return (
    <section className="py-16 bg-navy-deep relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(14,116,144,0.15),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              <p className="mt-2 text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
