import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Off The Dock Charters | Inshore Fishing in Bradenton, FL',
  description: 'Premier inshore fishing charters in Bradenton, Florida with Captain Chandler Brown. Experience world-class fishing for redfish, snook, trout, and tarpon.',
  keywords: 'fishing charter, inshore fishing, Bradenton fishing, Florida fishing guide, Captain Chandler Brown',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
