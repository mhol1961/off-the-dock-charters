'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import BoatExperience from '@/components/experience/BoatExperience'
import { FaAnchor, FaShip, FaCompass } from 'react-icons/fa'

export default function ExperiencePage() {
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
            <h1 className="text-4xl font-bold mb-4 text-white premium-heading gold-text">
              Boat & Fishing Experience
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Explore our premium fishing charter experience and get a feel for what makes Off The Dock Charters special. 
              From our custom bay boat to the prime fishing locations, discover everything you need to know before booking.
            </p>
          </motion.div>
          
          <BoatExperience />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Ready to Experience It in Person?</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              While this virtual tour gives you a glimpse of what to expect, nothing compares to the real experience
              of being on the water with Captain Chandler. Book your charter today and create memories that will last a lifetime.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#D59633] text-black px-8 py-4 rounded-lg font-medium hover:bg-[#c08629] hover:scale-105 hover:shadow-lg hover:shadow-yellow-900/30 transition-all duration-300 transform"
            >
              Book Your Charter
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
