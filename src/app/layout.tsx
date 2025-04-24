import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://offthedockcharters.com'),
  title: {
    default: 'Off The Dock Charters | Premium Fishing Charters in Bradenton, FL',
    template: '%s | Off The Dock Charters'
  },
  description: 'Premier inshore fishing charters in Bradenton & Anna Maria Island with Captain Chandler Brown. Specializing in snook, redfish, trout, and tarpon fishing trips.',
  keywords: 'fishing charters, Bradenton fishing guide, inshore fishing, Florida fishing charters, snook fishing, redfish, tarpon, family fishing trips',
  openGraph: {
    title: 'Off The Dock Charters | Premium Fishing Charters in Bradenton, FL',
    description: 'Premier inshore fishing charters in Bradenton & Anna Maria Island with Captain Chandler Brown. Specializing in snook, redfish, trout, and tarpon fishing trips.',
    url: 'https://offthedockcharters.com',
    siteName: 'Off The Dock Charters',
    images: [
      {
        url: 'https://offthedockcharters.com/images/Two_guys_Redfish_gallery.png',
        width: 1200,
        height: 630,
        alt: 'Successful fishing charter with Off The Dock Charters in Bradenton, Florida',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@offthedockcharters',
    title: 'Off The Dock Charters | Premium Fishing Charters in Bradenton, FL',
    description: 'Premier inshore fishing charters in Bradenton & Anna Maria Island with Captain Chandler Brown. Book your adventure today!',
    images: ['https://offthedockcharters.com/images/Two_guys_Redfish_gallery.png'],
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
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gradient-to-b from-gray-950 via-black to-gray-950 relative`}>
        {/* Subtle animated gradient overlay */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(50,50,50,0.05),transparent_70%)] pointer-events-none z-0"></div>
        
        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
