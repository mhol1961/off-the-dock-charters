'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const heroImages = [
  {
    src: '/images/Hero_Image_1.png',
    alt: 'Inshore fishing charter in Bradenton - Professional guide service'
  },
  {
    src: '/images/Hero_Image_2.png',
    alt: 'Florida fishing charter - Expert local fishing guide'
  },
  {
    src: '/images/Fishing_area_hero3.png',
    alt: 'Bradenton fishing area - Local fishing spots'
  }
]

export default function HeroSlider() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen">
      {/* Hero Images */}
      {heroImages.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text readability */}
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white drop-shadow-lg">
            Off The Dock Charters
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
            Premier Inshore Fishing in{' '}
            <span className="text-white">
              Bradenton, Florida
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-lg max-w-2xl mx-auto">
            Experience world-class fishing with Captain Chandler Brown. Target
            redfish, snook, trout, and tarpon in the beautiful waters of the Gulf
            Coast.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#D59633] text-black px-8 py-4 rounded-lg font-medium hover:bg-[#D59633] transition-colors text-lg"
          >
            Book Your Charter Now
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImage ? 'bg-[#D59633]' : 'bg-white/50'
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>
    </div>
  )
}
