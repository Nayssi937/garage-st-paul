import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { fontPlayfair, fontInter } from '@/lib/fonts';
import { autoDealerJsonLd, buildMetadata, SITE_CONFIG } from '@/lib/seo';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = buildMetadata({
  title: SITE_CONFIG.tagline,
  description: SITE_CONFIG.description,
  path: '/',
});

export const viewport: Viewport = {
  themeColor: '#0E1A2B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CH" className={`${fontPlayfair.variable} ${fontInter.variable}`}>
      <body className="min-h-screen bg-cream-200 font-sans text-ink-700 antialiased">
        <Script id="ld-autodealer" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(autoDealerJsonLd())}
        </Script>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-navy-700 focus:px-4 focus:py-2 focus:text-cream-100"
        >
          Aller au contenu
        </a>
        <Navbar />
        <main id="main-content" className="relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
