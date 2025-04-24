'use client'

import { motion } from 'framer-motion'
import SpeciesGallery from '@/components/species/SpeciesGallery'

export default function SpeciesPage() {
  return (
    <main>
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-[0_2px_4px_rgba(213,150,51,0.3)]">
              Florida Inshore Fish Species
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Discover the incredible variety of fish species you can encounter on your charter with Off The Dock Charters. 
              Our local waters are home to some of the most sought-after game fish in Florida.
            </p>
          </motion.div>
          
          <SpeciesGallery />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 p-8 rounded-2xl bg-black/70 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.25)] transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Our Conservation Commitment</h2>
            <p className="text-gray-300 mb-4">
              At Off The Dock Charters, we're committed to sustainable fishing practices and the preservation of our marine ecosystems. 
              We adhere to all regulations regarding size and bag limits, and practice catch-and-release for certain species to ensure 
              their populations remain healthy for future generations.
            </p>
            <p className="text-gray-300 mb-4">
              During your charter, Captain Chandler will educate you about the importance of conservation and demonstrate proper 
              catch-and-release techniques when applicable. We believe that responsible angling practices are essential to 
              maintaining the health and vitality of our local waters.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-black/50 p-6 rounded-xl border border-yellow-600/30 shadow-lg hover:shadow-xl hover:shadow-yellow-900/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Sustainable Practices</h3>
                <ul className="text-gray-300 space-y-2 list-disc pl-5">
                  <li>Using circle hooks to reduce fish mortality</li>
                  <li>Proper handling techniques to minimize stress</li>
                  <li>Quick and efficient release methods</li>
                  <li>Adherence to seasonal closures and size limits</li>
                </ul>
              </div>
              <div className="bg-black/50 p-6 rounded-xl border border-yellow-600/30 shadow-lg hover:shadow-xl hover:shadow-yellow-900/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">How You Can Help</h3>
                <ul className="text-gray-300 space-y-2 list-disc pl-5">
                  <li>Learn proper fish handling techniques</li>
                  <li>Understand regulations for different species</li>
                  <li>Support local conservation organizations</li>
                  <li>Report tagged fish when caught</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
