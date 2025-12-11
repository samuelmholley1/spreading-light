import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import CookieConsent from "@/components/CookieConsent";

const crimsonText = Crimson_Text({
  weight: "400",
  variable: "--font-crimson",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mendograss.com'),
  title: {
    default: 'Mendo Grass - Fresh Organic Microgreens | Mendocino County Farm',
    template: '%s | Mendo Grass'
  },
  description: 'Premium organic microgreens and wheatgrass from Mendocino County, California. Fresh, locally grown greens for restaurants, schools, and health-conscious consumers.',
  keywords: 'microgreens, wheatgrass, organic, Mendocino County, California, farm fresh, restaurants, wholesale, pea shoots, radish microgreens, farm to table, sustainable agriculture',
  authors: [{ name: 'Mendo Grass Farm' }],
  creator: 'Mendo Grass',
  publisher: 'Mendo Grass',
  category: 'Agriculture',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mendograss.com',
    title: 'Mendo Grass - Fresh Organic Microgreens',
    description: 'Premium organic microgreens and wheatgrass from Mendocino County, California.',
    siteName: 'Mendo Grass',
    images: [
      {
        url: '/wheatgrass_background.jpg',
        width: 1200,
        height: 630,
        alt: 'Mendo Grass - Fresh Organic Microgreens',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mendo Grass - Premium Organic Microgreens & Wheatgrass',
    description: 'Fresh, sun-grown organic microgreens and wheatgrass delivered weekly in Mendocino County.',
    images: ['/wheatgrass_background.jpg'],
    creator: '@mendograss',
    site: '@mendograss',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://mendograss.com',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <meta name="google-site-verification" content={process.env.GOOGLE_SITE_VERIFICATION} />
        <link rel="canonical" href="https://mendograss.com" />
      </head>
      <body
        className={`${crimsonText.variable} antialiased`}
      >
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-green-600 focus:text-white focus:rounded focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        
        {/* Google Tag Manager */}
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </body>
    </html>
  );
}
