'use client'

import dynamic from 'next/dynamic'

const GalleryGrid = dynamic(() => import('@/components/gallery/GalleryGrid'), {
  ssr: false
})

export default function GalleryContent() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative py-24 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Inshore Fishing Gallery
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto mb-12">
            Experience the thrill of inshore fishing in Bradenton through our gallery of memorable catches. 
            From trophy snook to monster redfish, these photos showcase the incredible fishing opportunities 
            in our local waters.
          </p>
          
          {/* Gallery Grid */}
          <GalleryGrid />

          {/* SEO Text */}
          <div className="mt-16 prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-white mb-6">
              Bradenton's Premier Inshore Fishing Experience
            </h2>
            <p className="text-gray-300">
              Our gallery showcases the incredible inshore fishing opportunities available in Bradenton, Florida. 
              Each photo represents a memorable moment on the water with Off The Dock Charters. From the 
              backcountry mangroves to the grass flats of Tampa Bay, we target various species including snook, 
              redfish, trout, and the mighty silver king - tarpon.
            </p>
            <p className="text-gray-300">
              Captain Chandler Brown's expertise in local waters ensures that whether you're a beginner or an 
              experienced angler, you'll have the best chance at landing your dream catch. These photos are just 
              a glimpse of what you can experience on your next fishing adventure with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
