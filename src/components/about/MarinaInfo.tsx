'use client'

import { motion } from 'framer-motion'

export default function MarinaInfo() {
  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-8">Convenient Pickup Locations</h2>
          <div className="prose prose-lg prose-invert space-y-8">
            <p>
              We offer pickup from multiple convenient boat ramps throughout the Bradenton and Anna Maria Island area. 
              Choose the location that works best for you when booking your charter.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="bg-black/50 p-4 rounded-lg border border-yellow-600/30">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Kingfish Ramp</h3>
                <p className="text-gray-300">752 Manatee Avenue, Holmes Beach, FL 34217</p>
              </div>
              
              <div className="bg-black/50 p-4 rounded-lg border border-yellow-600/30">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Warners Bayou</h3>
                <p className="text-gray-300">5800 Riverview Blvd, Bradenton, FL 34209</p>
              </div>
              
              <div className="bg-black/50 p-4 rounded-lg border border-yellow-600/30">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Florida Public Ramp</h3>
                <p className="text-gray-300">6001 Marina Dr, Holmes Beach, FL 34217</p>
              </div>
              
              <div className="bg-black/50 p-4 rounded-lg border border-yellow-600/30">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Riverside</h3>
                <p className="text-gray-300">805 Riverside Dr, Palmetto, FL 34221</p>
              </div>
              
              <div className="bg-black/50 p-4 rounded-lg border border-yellow-600/30 md:col-span-2">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">Coquina Bayside</h3>
                <p className="text-gray-300">1507 Gulf Dr S, Bradenton Beach, FL 34217</p>
              </div>
            </div>
            
            <p>
              All locations provide easy access to our prime inshore fishing waters. Simply let us know your preferred pickup location when booking, and we'll coordinate the details with you.
            </p>
            
            <p>
              Each location is conveniently located near the beautiful white sandy beaches that 
              Manatee County has to offer. Anna Maria Island, Holmes Beach, Bradenton Beach, Longboat 
              Key, St Armand's Circle, & Siesta Key Beach are all wonderful places to explore and see 
              why so many people love the west coast of Florida!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
