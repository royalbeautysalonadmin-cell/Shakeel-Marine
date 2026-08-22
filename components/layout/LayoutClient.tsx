'use client';

import { SiteHeader } from '@/components/layout/SiteHeader';
import { Footer } from '@/components/layout/Footer';
import { MobileActionBar } from '@/components/layout/MobileActionBar';
import { FloatingActions } from '@/components/shared/FloatingActions';
import { BackToTop } from '@/components/shared/BackToTop';
import { LangProvider } from '@/components/shared/LangProvider';

export function LayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileActionBar />
      <FloatingActions />
      <BackToTop />
    </LangProvider>
  );
}
