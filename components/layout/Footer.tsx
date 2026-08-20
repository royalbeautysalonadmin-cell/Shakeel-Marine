'use client';

import Link from 'next/link';
import { Anchor, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig, getWhatsAppUrl, whatsappMessages, phoneNumbers } from '@/lib/site-config';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { footerQuickLinks, footerServiceLinks } from '@/data/navigation';
import { useLang } from '@/components/shared/LangProvider';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-navy-deep text-white/70" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex flex-col mb-5">
              <span className="text-white font-heading font-bold text-xl tracking-wide">SHAKEEL</span>
              <span className="text-ocean text-[10px] font-semibold tracking-[0.25em] uppercase -mt-1">MARINE</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">{t.footer.description}</p>
            <div className="flex items-center gap-2 mt-5 text-ocean">
              <Anchor className="w-4 h-4" />
              <span className="text-xs uppercase tracking-widest font-medium">{t.footer.craftsmanship}</span>
            </div>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">{t.footer.services}</h3>
            <ul className="space-y-3">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-5">{t.footer.contact}</h3>
            <ul className="space-y-4">
              {phoneNumbers.map((p) => (
                <li key={p.value}>
                  <a href={p.href} className="flex items-start gap-3 text-sm hover:text-white transition-colors">
                    <Phone className="w-4 h-4 mt-0.5 text-ocean shrink-0" />
                    {p.value}
                  </a>
                </li>
              ))}
              <li>
                <a href={getWhatsAppUrl(whatsappMessages.general)} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-sm hover:text-white transition-colors">
                  <WhatsAppIcon className="w-4 h-4 mt-0.5 text-ocean shrink-0" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-3 text-sm hover:text-white transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 text-ocean shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-ocean shrink-0" />
                  {siteConfig.address}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Shakeel Marine. {t.footer.copyright}</p>
          <div className="flex items-center gap-6 text-xs text-white/40">
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">{t.footer.privacy}</Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-xs text-white/30">
            Developed by{' '}
            <a
              href="https://www.orbitrixsolutions.com"
              target="_blank"
              rel="noopener noreferrer dofollow"
              className="text-ocean/60 hover:text-ocean transition-colors"
            >
              Orbitrix Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
