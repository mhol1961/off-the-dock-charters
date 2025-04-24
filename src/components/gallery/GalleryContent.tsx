'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

const GalleryGrid = dynamic(() => import('@/components/gallery/GalleryGrid'), {
  ssr: false
})

export default function GalleryContent() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-500 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-yellow-600 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center premium-heading gold-text">
            Inshore Fishing Gallery
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-16">
            Experience the thrill of inshore fishing in Bradenton through our gallery of memorable catches. 
            Click on any image to view in full screen.
          </p>
          
          {/* Gallery Grid */}
          <GalleryGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-4xl">
          <div className="premium-card backlit-shadow p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 premium-heading">
              Share Your Adventure
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Had a great time fishing with us? Share your photos on social media and tag us 
              @OffTheDockCharters or use #BradentonFishing to be featured in our gallery!
            </p>
            <div className="flex justify-center">
              <Link 
                href="/contact" 
                className="premium-button flex items-center gap-2"
              >
                Book Your Next Adventure
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
