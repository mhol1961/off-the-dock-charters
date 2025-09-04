'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface BoatSpec {
  label: string
  value: string
}

const boatSpecs: BoatSpec[] = [
  { label: 'Boat Type', value: 'Center Console' },
  { label: 'Boat Manufacturer', value: 'T-Craft Boatworks' },
  { label: 'Year Built', value: '2020' },
  { label: 'Boat Length', value: '24\'' },
  { label: 'Boat Restroom', value: 'No' },
  { label: 'Engine Manufacturer', value: 'Yamaha' },
  { label: 'Total Horsepower', value: '250' },
  { label: 'Number of Engines', value: '1' }
]

const additionalAmenities = [
  'T top with spotting tower (provides shade as well)',
  'GPS',
  'Live bait wells',
  'Cushioned seats',
  'Ice chest',
  'Fish finder',
  'Wireless trolling motor'
]

export default function BoatInfo() {
  return (
    <section className="bg-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          About Your Boat
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] w-full max-w-2xl mx-auto"
          >
            <Image
              src="/images/About_the_boat.png"
              alt="Charter Boat"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {boatSpecs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-900 p-4 rounded-lg"
                >
                  <h3 className="text-gray-400 text-sm mb-1">{spec.label}</h3>
                  <p className="text-white text-lg font-semibold">{spec.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Additional Amenities</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {additionalAmenities.map((amenity, index) => (
                  <motion.li
                    key={amenity}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <svg className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {amenity}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
