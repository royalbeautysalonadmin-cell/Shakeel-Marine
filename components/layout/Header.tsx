'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { useLang } from '@/components/shared/LangProvider';

export function Header() {
  const { isArabic, toggle } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('[data-nav-item]')) {
        setOpenDropdown(null);
      }
    };
    if (openDropdown) {
      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    }
  }, [openDropdown]);

  // Close dropdown on escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenDropdown(null);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const handleNavClick = useCallback(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'glass-nav border-b border-white/5 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-2" onClick={handleNavClick}>
          <div className="flex flex-col">
            <span className="text-white font-heading font-bold text-lg sm:text-xl tracking-wide">SHAKEEL</span>
            <span className="text-ocean text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase -mt-1">MARINE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {mainNavigation.map((item) => {
            const hasDropdown = !!item.children;
            const isOpen = openDropdown === item.label;

            return (
              <div
                key={item.href}
                data-nav-item
                className="relative"
              >
                {hasDropdown ? (
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 text-sm transition-colors font-medium',
                      isOpen ? 'text-white' : 'text-white/80 hover:text-white'
                    )}
                  >
                    {item.label}
                    <ChevronDown className={cn('w-3.5 h-3.5 transition-transform duration-200', isOpen && 'rotate-180')} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={handleNavClick}
                    className="flex items-center gap-1 px-4 py-2 text-sm text-white/80 hover:text-white transition-colors font-medium"
                  >
                    {item.label}
                  </Link>
                )}

                {hasDropdown && isOpen && item.children && (
                  <div
                    className="absolute top-full left-0 pt-1 z-50"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                  >
                    <div className="bg-navy-deep/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl shadow-black/40 py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={handleNavClick}
                          className="block px-5 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-white/70 hover:text-white transition-colors font-medium rounded-lg hover:bg-white/5"
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
          onClick={() => { setMobileOpen(!mobileOpen); setOpenDropdown(null); }}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="fixed inset-0 bg-navy-deep z-40 lg:hidden overflow-y-auto">
            <nav className="flex flex-col pt-24 px-8 pb-8" aria-label="Mobile navigation">
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
                      {mobileExpanded === item.label && (
                        <div className="pl-4 py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={handleNavClick}
                              className="block py-3 text-base text-white/60 hover:text-white transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={handleNavClick}
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
          </div>
        )}
      </div>
    </header>
  );
}
