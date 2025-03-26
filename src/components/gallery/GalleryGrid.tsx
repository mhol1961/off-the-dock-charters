'use client'

import { useState } from 'react'
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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-square cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 rounded-lg" />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full aspect-auto"
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </motion.div>
          <button
            className="absolute top-4 right-4 text-white text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </motion.div>
      )}
    </>
  )
}
