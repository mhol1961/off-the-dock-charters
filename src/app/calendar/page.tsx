'use client'

import { motion } from 'framer-motion'
import FishingCalendar from '@/components/calendar/FishingCalendar'
import Link from 'next/link'

export default function CalendarPage() {
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
              Seasonal Fishing Calendar
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Plan your fishing trip with our interactive calendar that shows the best times to target specific species in the Bradenton area.
              This tool helps you maximize your chances of success based on seasonal patterns.
            </p>
          </motion.div>
          
          <FishingCalendar />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-black/70 rounded-2xl p-6 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.25)] hover:-translate-y-1 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Understanding Seasonal Patterns</h2>
              <p className="text-gray-300 mb-4">
                Fish behavior and location change throughout the year based on water temperature, bait movements, and spawning cycles. 
                Our calendar reflects these patterns to help you plan your trip around the species you most want to target.
              </p>
              <p className="text-gray-300">
                While fish can be caught year-round in Florida, understanding these seasonal patterns can significantly improve your chances 
                of success. Captain Chandler stays current on local conditions and adapts his strategies accordingly.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black/70 rounded-2xl p-6 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.25)] hover:-translate-y-1 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Local Knowledge Advantage</h2>
              <p className="text-gray-300 mb-4">
                While this calendar provides general guidance, nothing beats the real-time knowledge of a local guide. 
                Captain Chandler's lifetime of experience fishing these waters means he knows exactly where to find fish 
                regardless of the season.
              </p>
              <p className="text-gray-300">
                Weather patterns, water conditions, and many other factors can affect fishing on any given day. 
                Book a charter with Captain Chandler to benefit from his expertise and local insights.
              </p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Ready to Plan Your Fishing Adventure?</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              Use this calendar as a guide, then book your charter with Captain Chandler to experience the best fishing Bradenton has to offer.
              Whether you're targeting a specific species or just want to catch what's biting best, we'll create a memorable day on the water.
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
