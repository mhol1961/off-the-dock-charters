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
          <h2 className="text-4xl font-bold text-white mb-8">Where the Fishing Trips Start</h2>
          <div className="prose prose-lg prose-invert space-y-8">
            <p>
              <a 
                href="https://www.google.com/maps/@27.5172007,-82.6228962,13.25z?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                Blenker Boatworks & Marina
              </a>{' '}
              is conveniently located at the mouth of the beautiful Manatee River at channel markers 7 & 8. 
              It is within walking distance of the historical DeSoto National Memorial Park. They offer a 
              full service marina featuring: Boca Bait Company, with a large assortment of fishing tackle, 
              live bait, beer, soda & snacks. They sell recreational ethanol free fuel. On-site boat & 
              yacht sales, engine repairs, fishing charters, and do it yourself boat repairs. The marina 
              has 42 wet slips that can accommodate up to a 51' vessel, and plenty of dry storage area. 
              They have a 35 ton Travel Lift that can accommodate up to a 17' beam.
            </p>
            <p>
            </p>
            <p>
              The Marina is just a short drive or boat ride to the beautiful white sandy beaches that 
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
