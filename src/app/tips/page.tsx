'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaLightbulb, FaFish, FaWater, FaCalendarAlt } from 'react-icons/fa'

export default function TipsPage() {
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
              Fishing Tips & Techniques
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Whether you're a beginner or an experienced angler, these professional tips from Captain Chandler will 
              help you improve your fishing skills and increase your chances of success on the water.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-yellow-900/30 border border-yellow-700/30"
            >
              <Image
                src="/images/OTD_Meet_the_Captain.png.jpg"
                alt="Captain Chandler Brown fishing"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Pro Tips from Captain Chandler</h2>
              <p className="text-gray-300 mb-4">
                With years of experience fishing the waters of Bradenton and Tampa Bay, Captain Chandler has developed 
                techniques and strategies that consistently produce results. Here, he shares some of his most valuable 
                insights to help you become a better angler.
              </p>
              <p className="text-gray-300">
                Remember that fishing is both an art and a science. While these tips will help improve your chances, 
                adaptability and patience remain key to success on the water.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-black/70 rounded-2xl p-6 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.25)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <FaLightbulb className="text-yellow-500 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-white">General Fishing Tips</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <p className="text-gray-300"><strong className="text-white">Match the hatch:</strong> Use bait that resembles what the fish are naturally feeding on in the area. Pay attention to the size, color, and movement of local baitfish.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <p className="text-gray-300"><strong className="text-white">Fish the tides:</strong> Understand that fish movement is heavily influenced by tidal flow. Moving water concentrates bait and creates feeding opportunities.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <p className="text-gray-300"><strong className="text-white">Dawn and dusk advantage:</strong> The first and last hours of daylight often provide the best fishing opportunities as many species are most active during these transition periods.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                  <p className="text-gray-300"><strong className="text-white">Stay quiet:</strong> Fish can sense vibrations through the water. Minimize noise and movement in the boat, especially in shallow water.</p>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black/70 rounded-2xl p-6 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.25)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <FaFish className="text-yellow-500 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-white">Species-Specific Techniques</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <p className="text-gray-300"><strong className="text-white">Snook:</strong> Focus on structure like mangroves, docks, and bridge pilings. Use live bait like pilchards or whitebait, or lures that mimic their natural prey.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <p className="text-gray-300"><strong className="text-white">Redfish:</strong> Look for "tailing" redfish in shallow water during high tides. Gold spoons and soft plastics in natural colors are extremely effective.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <p className="text-gray-300"><strong className="text-white">Spotted Seatrout:</strong> Fish over seagrass flats with popping corks and shrimp or soft plastic jigs. Early morning topwater action can be spectacular.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                  <p className="text-gray-300"><strong className="text-white">Tarpon:</strong> Use heavier tackle and be prepared for long runs and aerial displays. Patience is key—wait for the fish to turn before setting the hook.</p>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-black/70 rounded-2xl p-6 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.25)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <FaWater className="text-yellow-500 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-white">Reading the Water</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <p className="text-gray-300"><strong className="text-white">Look for movement:</strong> Birds diving, bait fish jumping, or ripples on the surface often indicate feeding activity below.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <p className="text-gray-300"><strong className="text-white">Find the edges:</strong> Fish often congregate along transitions—where deep water meets shallow, where current flows against structure, or where different bottom types meet.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <p className="text-gray-300"><strong className="text-white">Water clarity matters:</strong> In clear water, use more natural presentations and lighter line. In murky water, use lures with more vibration and flash.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                  <p className="text-gray-300"><strong className="text-white">Follow the current:</strong> Fish typically face into the current to feed, so position your boat and present your bait accordingly.</p>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-black/70 rounded-2xl p-6 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.25)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-yellow-500 text-3xl mr-4" />
                <h3 className="text-2xl font-bold text-white">Seasonal Strategies</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <p className="text-gray-300"><strong className="text-white">Spring:</strong> As waters warm, fish become more active. Focus on shallow flats and areas where baitfish are congregating.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <p className="text-gray-300"><strong className="text-white">Summer:</strong> Fish early mornings and evenings to avoid the heat. Look for fish in deeper, cooler waters during the middle of the day.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <p className="text-gray-300"><strong className="text-white">Fall:</strong> Fish feed heavily to prepare for winter. Cooling water temperatures trigger increased activity and baitfish migrations.</p>
                </li>
                <li className="flex items-start">
                  <span className="bg-yellow-600 rounded-full w-6 h-6 flex items-center justify-center text-black font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                  <p className="text-gray-300"><strong className="text-white">Winter:</strong> Fish move to deeper channels and holes. Slower presentations and patience are key as metabolism slows in cooler water.</p>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Ready to Put These Tips into Practice?</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              The best way to improve your fishing skills is with hands-on experience alongside a professional guide. 
              Book a charter with Captain Chandler and learn these techniques firsthand while enjoying a day on the water.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#D59633] text-black px-8 py-4 rounded-lg font-medium hover:bg-[#c08629] transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Book Your Charter Today
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
