import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Footer } from '@/components/layout/Footer';
import { MobileActionBar } from '@/components/layout/MobileActionBar';
import { WhatsAppFloating } from '@/components/shared/WhatsAppButton';
import { siteConfig } from '@/lib/site-config';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Marine Upholstery & Custom Covers in Kuwait`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Marine Upholstery & Custom Covers in Kuwait`,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | Marine Upholstery & Custom Covers in Kuwait`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
