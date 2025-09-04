'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaLeaf, FaFish, FaWater, FaHandHoldingWater } from 'react-icons/fa'

export default function ConservationPage() {
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
              Our Conservation Commitment
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              At Off The Dock Charters, we believe in fishing responsibly and preserving our marine ecosystems for future generations. 
              Learn about our conservation efforts and how you can help protect Florida's precious waterways.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-yellow-900/30 border border-yellow-700/30"
            >
              <Image
                src="/images/TwoMenRedfish.jpeg"
                alt="Catch and release fishing"
                fill
                className="object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 p-8 rounded-2xl bg-black/60 shadow-2xl shadow-yellow-900/20 border border-yellow-700/20 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.25)] transition-all duration-300"
            >
              <h2 className="text-3xl font-bold text-white">Sustainable Fishing Practices</h2>
              <p className="text-gray-300">
                Captain Chandler Brown is dedicated to sustainable fishing practices that minimize impact on our marine environment. 
                We strictly adhere to all fishing regulations, practice proper catch-and-release techniques, and educate our clients 
                about the importance of conservation.
              </p>
              <p className="text-gray-300">
                Our commitment extends beyond just following rules—we actively participate in local conservation efforts and stay 
                informed about the latest research and best practices in sustainable fishing.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: <FaFish className="text-yellow-500 text-3xl mb-4" />,
                title: "Catch & Release",
                description: "We practice and teach proper catch-and-release techniques to ensure fish survival. This includes using circle hooks when appropriate, minimizing handling time, and keeping fish in the water when possible."
              },
              {
                icon: <FaLeaf className="text-yellow-500 text-3xl mb-4" />,
                title: "Habitat Protection",
                description: "We navigate responsibly to protect seagrass beds and other sensitive habitats. Our shallow-draft boat minimizes impact on the environment while allowing access to prime fishing areas."
              },
              {
                icon: <FaWater className="text-yellow-500 text-3xl mb-4" />,
                title: "Clean Waters",
                description: "We never leave trash behind and participate in local waterway cleanup efforts. All fishing line and tackle are properly disposed of to prevent wildlife entanglement."
              },
              {
                icon: <FaHandHoldingWater className="text-yellow-500 text-3xl mb-4" />,
                title: "Education",
                description: "We educate our clients about marine conservation and the importance of protecting our fisheries. Understanding leads to appreciation, which fosters a conservation mindset."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="bg-black/70 rounded-2xl p-6 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.25)] hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-black/70 rounded-2xl p-8 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 mb-16"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Conservation Partners</h2>
            <p className="text-gray-300 mb-6">
              We're proud to support and work with these organizations dedicated to protecting Florida's marine ecosystems:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/50 p-6 rounded-xl border border-yellow-600/30 shadow-lg backlit-shadow hover:shadow-xl hover:shadow-yellow-900/30 hover:bg-black/70 hover:border-yellow-500/50 transition-all duration-300 text-center transform hover:-translate-y-1 group">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">Coastal Conservation Association</h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">Dedicated to conserving, promoting, and enhancing the present and future availability of coastal resources.</p>
                <a href="https://ccaflorida.org/" target="_blank" rel="noopener noreferrer" className="inline-block text-yellow-500 hover:text-yellow-300 text-sm group-hover:translate-x-1 transition-all duration-300">Learn More →</a>
              </div>
              <div className="bg-black/50 p-6 rounded-xl border border-yellow-600/30 shadow-lg backlit-shadow hover:shadow-xl hover:shadow-yellow-900/30 hover:bg-black/70 hover:border-yellow-500/50 transition-all duration-300 text-center transform hover:-translate-y-1 group">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">Bonefish & Tarpon Trust</h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">Working to conserve and restore bonefish, tarpon, and permit fisheries and habitats through research and education.</p>
                <a href="https://www.bonefishtarpontrust.org/" target="_blank" rel="noopener noreferrer" className="inline-block text-yellow-500 hover:text-yellow-300 text-sm group-hover:translate-x-1 transition-all duration-300">Learn More →</a>
              </div>
              <div className="bg-black/50 p-6 rounded-xl border border-yellow-600/30 shadow-lg backlit-shadow hover:shadow-xl hover:shadow-yellow-900/30 hover:bg-black/70 hover:border-yellow-500/50 transition-all duration-300 text-center transform hover:-translate-y-1 group">
                <h3 className="text-lg font-semibold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">Captains For Clean Water</h3>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">Fighting to restore and protect aquatic ecosystems for the use and enjoyment of all.</p>
                <a href="https://captainsforcleanwater.org/" target="_blank" rel="noopener noreferrer" className="inline-block text-yellow-500 hover:text-yellow-300 text-sm group-hover:translate-x-1 transition-all duration-300">Learn More →</a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Join Us in Protecting Our Waters</h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              When you fish with Off The Dock Charters, you're supporting sustainable fishing practices and marine conservation. 
              Book your charter today and experience the beauty of Florida's waters while helping to preserve them for future generations.
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
