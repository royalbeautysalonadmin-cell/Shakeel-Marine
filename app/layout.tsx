import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import { LayoutClient } from '@/components/layout/LayoutClient';
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
    default: `${siteConfig.name} | #1 Marine Upholstery, Jet Ski Seats & Canopy Covers in Kuwait`,
    template: `%s`,
  },
  description: 'Shakeel Marine is Kuwait\'s leading marine upholstery specialist. Custom jet ski seat covers, boat covers, canopy covers, ship covers and marine accessories. 30+ years experience. Free consultation.',
  keywords: [
    'marine upholstery kuwait',
    'jet ski seat covers kuwait',
    'boat covers kuwait',
    'canopy covers kuwait',
    'marine seats kuwait',
    'jet ski custom seats',
    'ship covers kuwait',
    'marine upholstery services',
    'custom boat seats',
    'jet ski floor mat kit',
    'marine upholstery near me',
    'best marine upholstery kuwait',
    'jet ski seat repair kuwait',
    'boat canopy installation kuwait',
    'marine fabric kuwait',
    'custom jet ski accessories kuwait',
    'boat interior upholstery kuwait',
    'marine seat covers kuwait',
    'jet ski upholstery kuwait',
    'marine upholstery specialist kuwait',
  ],
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | #1 Marine Upholstery, Jet Ski Seats & Canopy Covers in Kuwait`,
    description: 'Shakeel Marine is Kuwait\'s leading marine upholstery specialist. Custom jet ski seat covers, boat covers, canopy covers, ship covers and marine accessories.',
    images: [{ url: `${siteConfig.url}${siteConfig.ogImage}`, width: 1200, height: 630, alt: `${siteConfig.name} marine upholstery in Kuwait` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | #1 Marine Upholstery, Jet Ski Seats & Canopy Covers in Kuwait`,
    description: 'Shakeel Marine is Kuwait\'s leading marine upholstery specialist. Custom jet ski seat covers, boat covers, canopy covers, ship covers.',
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
