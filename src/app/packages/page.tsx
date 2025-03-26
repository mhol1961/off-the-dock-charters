'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const pricingData = [
  { people: 1, hours4: 550, hours6: 750, hours8: 900 },
  { people: 2, hours4: 550, hours6: 750, hours8: 900 },
  { people: 3, hours4: 600, hours6: 800, hours8: 950 },
  { people: 4, hours4: 650, hours6: 850, hours8: 1000 },
  { people: 5, hours4: 700, hours6: 900, hours8: 1050 },
  { people: 6, hours4: 750, hours6: 950, hours8: 1100 },
]

export default function PackagesPage() {
  return (
    <div className="container-custom py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-heading font-bold mb-4">Charter Packages</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Choose the perfect package for your fishing adventure. All packages include professional guidance,
          fishing equipment, and an unforgettable experience on the waters of Bradenton.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative aspect-square w-full max-w-md mx-auto"
        >
          <Image
            src="/images/Logo_OTD_Charters.png"
            alt="Off The Dock Charters Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="overflow-x-auto bg-background-light rounded-lg p-1"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-background">
                <th className="px-3 py-3 text-left text-sm">Size</th>
                <th className="px-3 py-3 text-center text-sm">4 Hrs</th>
                <th className="px-3 py-3 text-center text-sm">6 Hrs</th>
                <th className="px-3 py-3 text-center text-sm">8 Hrs</th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, index) => (
                <motion.tr
                  key={row.people}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-gray-700 hover:bg-background-light/50 transition-colors"
                >
                  <td className="px-3 py-2 text-sm">
                    <span className="font-semibold">{row.people}</span>{' '}
                    {row.people === 1 ? 'Person' : 'People'}
                  </td>
                  <td className="px-3 py-2 text-center text-sm">${row.hours4}</td>
                  <td className="px-3 py-2 text-center text-sm">${row.hours6}</td>
                  <td className="px-3 py-2 text-center text-sm">${row.hours8}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 space-y-6 max-w-6xl mx-auto"
      >
        <div className="bg-background-light p-6 rounded-lg">
          <h2 className="text-2xl font-heading font-bold mb-4 text-primary">Booking Information</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>$50 deposit required to secure your booking</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Remaining balance due on the day of the trip</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>All equipment and licenses included</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="btn-primary inline-block"
          >
            Book Your Charter Now
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
