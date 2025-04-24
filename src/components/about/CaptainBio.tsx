'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CaptainBio() {
  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl shadow-yellow-900/30 border border-yellow-700/30"
          >
            <Image
              src="/images/OTD_Meet_the_Captain.png"
              alt="Captain Chandler Brown"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 p-8 rounded-2xl bg-black/60 shadow-2xl shadow-yellow-900/20 border border-yellow-700/20 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.25)] transition-all duration-300"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Meet Captain Chandler Brown
            </h1>
            <div className="prose prose-lg prose-invert">
              <p className="text-gray-300">
                Born and raised in Bradenton, Captain Chandler Brown has spent his life mastering the 
                waters of Tampa Bay and Sarasota Bay. His deep-rooted connection to these waters began 
                in his childhood, where he developed an intimate understanding of the local marine ecosystem.
              </p>
              <p className="text-gray-300">
                With years of experience navigating these waters, Captain Chandler possesses an uncanny 
                ability to track seasonal fish movements and predict where different species are biting. 
                His expertise isn't just about finding fish – it's about understanding their habits, 
                patterns, and the environmental factors that influence their behavior throughout the year.
              </p>
              <p className="text-gray-300">
                As your guide, Captain Chandler combines his local knowledge with a passion for sharing 
                the thrill of inshore fishing, ensuring each trip is both educational and exciting.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
