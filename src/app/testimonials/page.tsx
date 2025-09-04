'use client'

import TestimonialGrid from '@/components/testimonials/TestimonialGrid'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

export default function TestimonialsPage() {
  return (
    <main>
      {/* Hero Section with Featured Testimonial */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-500 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-yellow-600 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white premium-heading gold-text">
              What Our Clients Say
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our happy customers have to say about their fishing adventures with Off The Dock Charters.
            </p>
          </motion.div>
          
          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-20 max-w-4xl mx-auto"
          >
            <div className="premium-card backlit-shadow p-8 md:p-10 relative">
              <div className="absolute -top-6 -left-6 text-6xl text-yellow-500 opacity-50">
                <FaQuoteLeft />
              </div>
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-40 h-40 flex-shrink-0">
                  <Image
                    src="/images/ManWithRedfish4.jpeg"
                    alt="Featured testimonial"
                    fill
                    className="rounded-full object-cover border-4 border-yellow-600/50 shadow-xl"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex space-x-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-2xl" />
                    ))}
                  </div>
                  
                  <p className="text-xl text-gray-200 italic mb-6">
                    "Captain Chandler was a great guide, very knowledgeable and genuinely loves fishing. His passion really shows through in how he helps everyone on the boat have a great time. We caught more fish than we expected and created memories that will last a lifetime!"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-2xl text-white">Gary</h3>
                      <p className="text-gray-400">January 30, 2025</p>
                    </div>
                    <div className="text-yellow-500 font-medium">
                      Verified Charter
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonial Grid */}
      <TestimonialGrid />
    </main>
  )
}
