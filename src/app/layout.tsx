import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ui/ScrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Off The Dock Charters',
  description: 'Inshore fishing charters in Bradenton, Florida with Captain Chandler Brown',
  openGraph: {
    title: 'Off The Dock Charters',
    description: 'Inshore fishing charters in Bradenton, Florida with Captain Chandler Brown',
    url: 'https://offthedockcharters.com',
    siteName: 'Off The Dock Charters',
    images: [
      {
        url: 'https://offthedockcharters.com/images/Logo_OTD_Charters.png',
        width: 400,
        height: 400,
        alt: 'Off The Dock Charters Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@offthedockcharters',
    title: 'Off The Dock Charters',
    description: 'Inshore fishing charters in Bradenton, Florida with Captain Chandler Brown',
    images: ['https://offthedockcharters.com/images/Logo_OTD_Charters.png'],
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
