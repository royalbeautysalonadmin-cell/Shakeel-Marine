'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Anchor, Globe } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { useLang } from '@/components/shared/LangProvider';
import { motion, AnimatePresence } from 'framer-motion';

export function SiteHeader() {
  const { t, toggle, isArabic } = useLang();
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const headerTop = announcementVisible ? 36 : 0;

  return (
    <>
      {/* Announcement Bar */}
      <AnimatePresence>
        {announcementVisible && (
          <motion.div
            initial={{ height: 36, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-navy-deep text-white/80 text-xs tracking-[0.15em] uppercase text-center py-2.5 px-4 sm:px-12 border-b border-white/5 z-50 overflow-hidden"
          >
            <span className="font-medium hidden sm:inline">
              Custom Marine Upholstery & Covers — Kuwait
            </span>
            <span className="font-medium sm:hidden">
              Marine Upholstery — Kuwait
            </span>
            <button
              onClick={() => setAnnouncementVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/40 hover:text-white/80 transition-colors"
              aria-label="Dismiss announcement"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header
        className={cn(
          'fixed left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'glass-nav border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        )}
        style={{ top: headerTop }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center gap-2 group"
            onClick={() => setMobileOpen(false)}
          >
            <div className="flex flex-col">
              <span className="text-white font-heading font-bold text-lg sm:text-xl tracking-wide">
                SHAKEEL
              </span>
              <span className="text-ocean text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase -mt-1">
                MARINE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {mainNavigation.map((item) => {
              const navKey = item.href === '/' ? 'home' : item.href === '/services' ? 'services' : item.href === '/gallery' ? 'gallery' : item.href === '/about' ? 'about' : item.href === '/contact' ? 'contact' : null;
              return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setServicesOpen(true)}
                onMouseLeave={() => item.children && setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-white/80 hover:text-white transition-colors font-medium"
                >
                  {navKey ? t.nav[navKey] : item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform duration-200',
                        servicesOpen && 'rotate-180'
                      )}
                    />
                  )}
                </Link>

                {item.children && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
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
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all font-medium"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              {isArabic ? 'EN' : 'عربي'}
            </button>
            <Button href="/request-a-quote" size="sm" variant="primary">
              {t.nav.quote}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10 p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-navy-deep z-40 lg:hidden"
              >
                <nav
                  className="flex flex-col pt-24 px-8 gap-1"
                  aria-label="Mobile navigation"
                >
                  {mainNavigation.map((item) => {
                    const navKey = item.href === '/' ? 'home' : item.href === '/services' ? 'services' : item.href === '/gallery' ? 'gallery' : item.href === '/about' ? 'about' : item.href === '/contact' ? 'contact' : null;
                    return (
                    <div key={item.href}>
                      {item.children ? (
                        <>
                          <button
                            onClick={() =>
                              setMobileServicesOpen(!mobileServicesOpen)
                            }
                            className="flex items-center justify-between w-full py-4 text-lg text-white/90 font-medium border-b border-white/5"
                          >
                            {navKey ? t.nav[navKey] : item.label}
                            <ChevronDown
                              className={cn(
                                'w-5 h-5 transition-transform',
                                mobileServicesOpen && 'rotate-180'
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileServicesOpen && (
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
                          {navKey ? t.nav[navKey] : item.label}
                        </Link>
                      )}
                    </div>
                    );
                  })}

                  <div className="mt-8 space-y-3">
                    <button
                      onClick={toggle}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-white/70 hover:text-white border border-white/10 hover:bg-white/5 transition-all font-medium"
                    >
                      <Globe className="w-4 h-4" />
                      {isArabic ? 'Switch to English' : '\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0639\u0631\u0628\u064a\u0629'}
                    </button>
                    <Button
                      href="/request-a-quote"
                      size="lg"
                      variant="primary"
                      className="w-full"
                    >
                      {t.nav.quote}
                    </Button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
