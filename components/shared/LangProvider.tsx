'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import en from '@/lib/translations/en.json';
import ar from '@/lib/translations/ar.json';

type Lang = 'en' | 'ar';
type Translations = typeof en;

interface LangContextType {
  lang: Lang;
  t: Translations;
  toggle: () => void;
  isArabic: boolean;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  t: en,
  toggle: () => {},
  isArabic: false,
});

export function useLang() {
  return useContext(LangContext);
}

const translations: Record<Lang, Translations> = { en, ar };

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const toggle = useCallback(() => {
    setLang((prev) => {
      const next = prev === 'en' ? 'ar' : 'en';
      document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], toggle, isArabic: lang === 'ar' }}>
      {children}
    </LangContext.Provider>
  );
}
