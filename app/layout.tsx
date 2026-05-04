import type { Metadata } from 'next';
import { Fraunces } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.tagline} | Quality Glass & Design of The Upstate`,
    template: '%s | Quality Glass & Design of The Upstate',
  },
  description: siteConfig.description,
  keywords: [
    'frameless shower doors Greenville',
    'shower glass installation Upstate SC',
    'custom shower enclosures Greenville',
    'glass installer Greer Simpsonville',
    'window glass replacement Greenville',
    'CRL Hydroslide installer South Carolina',
    'glass railings Greenville',
    'custom mirrors Upstate',
  ],
  authors: [{ name: 'Connor Sell' }],
  creator: 'Quality Glass & Design of The Upstate',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.tagline,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.tagline,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans bg-bone text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
