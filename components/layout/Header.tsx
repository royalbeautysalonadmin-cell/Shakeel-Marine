'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/components/shared/LangProvider';

export function Header() {
  const { isArabic, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'glass-nav border-b border-white/5 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
          <div className="flex flex-col">
            <span className="text-white font-heading font-bold text-lg sm:text-xl tracking-wide">SHAKEEL</span>
            <span className="text-ocean text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase -mt-1">MARINE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {mainNavigation.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={() => item.children && handleMouseLeave()}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-4 py-2 text-sm text-white/80 hover:text-white transition-colors font-medium"
              >
                {item.label}
                {item.children && (
                  <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', openDropdown === item.label && 'rotate-180')} />
                )}
              </Link>

              {item.children && (
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-navy-deep/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl shadow-black/40 py-2 min-w-[240px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Right Side — Language + CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-white/70 hover:text-white transition-colors font-medium rounded-lg hover:bg-white/5"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {isArabic ? 'English' : 'عربي'}
          </button>
          <Button href="/request-a-quote" size="sm" variant="primary">
            {isArabic ? 'احصل على عرض' : 'Get a Quote'}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-10 p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-navy-deep z-40 lg:hidden overflow-y-auto"
            >
              <nav className="flex flex-col pt-24 px-8 pb-8 gap-1" aria-label="Mobile navigation">
                {mainNavigation.map((item) => (
                  <div key={item.href}>
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full py-4 text-lg text-white/90 font-medium border-b border-white/5"
                        >
                          {item.label}
                          <ChevronDown className={cn('w-5 h-5 transition-transform', mobileExpanded === item.label && 'rotate-180')} />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-3 text-base text-white/60 hover:text-white transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-4 text-lg text-white/90 font-medium border-b border-white/5 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="mt-6 flex flex-col gap-3">
                  <button
                    onClick={() => { toggle(); setMobileOpen(false); }}
                    className="flex items-center justify-center gap-2 py-3 text-lg text-white/80 font-medium border border-white/10 rounded-lg hover:bg-white/5 transition-all"
                  >
                    <Globe className="w-5 h-5" />
                    {isArabic ? 'English' : 'عربي'}
                  </button>
                  <Button href="/request-a-quote" size="lg" variant="primary" className="w-full">
                    {isArabic ? 'احصل على عرض' : 'Get a Quote'}
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
