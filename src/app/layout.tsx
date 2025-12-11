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
  metadataBase: new URL('https://spreadinglight.com'),
  title: {
    default: 'Spreading Light - Custom Bleach Art T-Shirts | Unique Designs',
    template: '%s | Spreading Light'
  },
  description: 'Shop custom bleach art t-shirts featuring unique designs on navy and black shirts. Pop culture, cannabis, and abstract art with pastel orange and vibrant tan bleach effects.',
  keywords: 'bleach art, t-shirts, custom shirts, bleach tie dye, pop culture tees, cannabis shirts, abstract art clothing, unique apparel, navy shirts, black tees, custom designs',
  authors: [{ name: 'Spreading Light' }],
  creator: 'Spreading Light',
  publisher: 'Spreading Light',
  category: 'Fashion & Apparel',
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
    url: 'https://spreadinglight.com',
    title: 'Spreading Light - Custom Bleach Art T-Shirts',
    description: 'Unique bleach art t-shirts with custom designs. Shop our collection of pop culture, cannabis, and abstract art on premium navy and black shirts.',
    siteName: 'Spreading Light',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Spreading Light - Custom Bleach Art T-Shirts',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spreading Light - Unique Bleach Art T-Shirts',
    description: 'Shop custom bleach art t-shirts with unique designs. Pop culture, cannabis, and abstract art on navy and black shirts.',
    images: ['/og-image.jpg'],
    creator: '@spreadinglight',
    site: '@spreadinglight',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://spreadinglight.com',
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
        <link rel="canonical" href="https://spreadinglight.com" />
      </head>
      <body
        className={`${crimsonText.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange-600 focus:text-black focus:rounded focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
        <CookieConsent />

        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}

        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
      </body>
    </html>
  );
}
