'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

const galleryImages: GalleryImage[] = [
  {
    src: '/images/Boy_Tarpon_Gallery.png',
    alt: 'Young angler with a trophy tarpon catch',
    width: 800,
    height: 600
  },
  {
    src: '/images/Family_catch_trout_gallery.png',
    alt: 'Family celebrating their trout catch',
    width: 800,
    height: 600
  },
  {
    src: '/images/Father_sons_Sheephead.png',
    alt: 'Father and sons with a sheepshead catch',
    width: 800,
    height: 600
  },
  {
    src: '/images/Girl_Permit_gallery.png',
    alt: 'Young girl with a permit catch',
    width: 800,
    height: 600
  },
  {
    src: '/images/Guy_Cobia_gallery.png',
    alt: 'Angler with a trophy cobia',
    width: 800,
    height: 600
  },
  {
    src: '/images/Guy_Snook_gallery.png',
    alt: 'Angler with a large snook',
    width: 800,
    height: 600
  },
  {
    src: '/images/Guy_bent_rod_gallery.png',
    alt: 'Exciting moment fighting a fish',
    width: 800,
    height: 600
  },
  {
    src: '/images/Guy_cobia2_gallery.png',
    alt: 'Another great cobia catch',
    width: 800,
    height: 600
  },
  {
    src: '/images/Guy_shark_gallery.png',
    alt: 'Angler with a shark catch',
    width: 800,
    height: 600
  },
  {
    src: '/images/Lady_Snook_gallery.png',
    alt: 'Lady angler with a beautiful snook',
    width: 800,
    height: 600
  },
  {
    src: '/images/LAdy_large_jack_gallery.png',
    alt: 'Lady angler with a large jack',
    width: 800,
    height: 600
  },
  {
    src: '/images/Man_LArge_mangrove_snapper_gallery.png',
    alt: 'Angler with a trophy mangrove snapper',
    width: 800,
    height: 600
  },
  {
    src: '/images/Teenager_with_Trout_gallery.png',
    alt: 'Teenager with a nice trout catch',
    width: 800,
    height: 600
  },
  {
    src: '/images/man-with-redfish-may2025.jpeg',
    alt: 'Angler with a beautiful redfish catch',
    width: 800,
    height: 600
  },
  {
    src: '/images/ManWithRedfish2.jpeg',
    alt: 'Angler displaying a trophy redfish',
    width: 800,
    height: 600
  },
  {
    src: '/images/two-reeling-nice-catch.png',
    alt: 'Angler with a beautiful copper redfish',
    width: 800,
    height: 600
  },
  {
    src: '/images/ManWithRedfish4.jpeg',
    alt: 'Angler showing off a large redfish catch',
    width: 800,
    height: 600
  },
  {
    src: '/images/YoungGirlRedfish.jpeg',
    alt: 'Young girl with her redfish catch',
    width: 800,
    height: 600
  },
  {
    src: '/images/TwoMenRedfish.jpeg',
    alt: 'Two anglers with their redfish catches',
    width: 800,
    height: 600
  },
  {
    src: '/images/ChandlerRedfish.jpeg',
    alt: 'Captain Chandler with a trophy redfish',
    width: 800,
    height: 600
  },
  {
    src: '/images/Two_guys_Redfish_gallery.png',
    alt: 'Two anglers with a redfish catch',
    width: 800,
    height: 600
  },
  {
    src: '/images/Two_guys_big_tarpon_gallery.png',
    alt: 'Two anglers with a massive tarpon',
    width: 800,
    height: 600
  },
  {
    src: '/images/Young_Girl_TRout_gallery.png',
    alt: 'Young girl with her trout catch',
    width: 800,
    height: 600
  },
  {
    src: '/images/Young_boy_redfish_gallery.png',
    alt: 'Young boy with a redfish catch',
    width: 800,
    height: 600
  }
]

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image)
    setSelectedIndex(index)
    // We'll handle overflow in useEffect instead
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setSelectedIndex(-1)
    // We'll handle overflow in useEffect instead
  }
  
  // Use useEffect to properly manage body overflow
  useEffect(() => {
    if (selectedImage) {
      // Prevent body scrolling when lightbox is open
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scrolling when lightbox is closed
      document.body.style.overflow = 'auto'
    }
    
    // Cleanup function to ensure body scrolling is restored
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [selectedImage])

  // Navigate to previous image
  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex > 0) {
      setSelectedImage(galleryImages[selectedIndex - 1])
      setSelectedIndex(selectedIndex - 1)
    } else {
      // Loop to the last image if at the beginning
      setSelectedImage(galleryImages[galleryImages.length - 1])
      setSelectedIndex(galleryImages.length - 1)
    }
  }

  // Navigate to next image
  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex < galleryImages.length - 1) {
      setSelectedImage(galleryImages[selectedIndex + 1])
      setSelectedIndex(selectedIndex + 1)
    } else {
      // Loop to the first image if at the end
      setSelectedImage(galleryImages[0])
      setSelectedIndex(0)
    }
  }

  // Prevent event propagation to parent when clicking on the image in lightbox
  const handleLightboxImageClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg shadow-lg"
            onClick={() => openLightbox(image, index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-sm font-medium truncate">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Breadcrumb Navigation */}
          <div className="absolute top-6 left-6 z-20 flex items-center">
            <button 
              onClick={closeLightbox}
              className="flex items-center gap-2 bg-black/50 hover:bg-yellow-600/80 px-4 py-2 rounded-lg text-white transition-colors duration-300"
              aria-label="Return to gallery"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              <span>Back to Gallery</span>
            </button>
            <div className="text-white/70 px-4">
              {selectedIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Main Image Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full h-[80vh] max-h-[80vh]"
            onClick={handleLightboxImageClick}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
              quality={90}
            />
          </motion.div>
          
          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-yellow-600/80 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 z-20"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-yellow-600/80 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 z-20"
            onClick={goToNext}
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Caption */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-white text-lg px-4 py-2 bg-black/50 inline-block rounded-lg">
              {selectedImage.alt}
            </p>
          </div>
          
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white bg-black/50 w-12 h-12 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      )}
    </>
  )
}
