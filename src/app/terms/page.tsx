'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <main>
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 text-white premium-heading gold-text">
              Terms of Service
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Last Updated: April 24, 2025
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 premium-card backlit-shadow p-8 rounded-2xl"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-gray-300">
                These Terms of Service constitute a legally binding agreement made between you and Off The Dock Charters ("we," "us," or "our"), concerning your access to and use of our website and charter fishing services.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Booking and Cancellation Policy</h2>
              <p className="text-gray-300 mb-4">
                <strong>Reservations:</strong> All charter bookings require a deposit to secure your date. The remaining balance is due on the day of the charter.
              </p>
              <p className="text-gray-300 mb-4">
                <strong>Cancellations:</strong> We understand that plans can change. Our cancellation policy is as follows:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Cancellations made 14 or more days before your charter date will receive a full refund of your deposit.</li>
                <li>Cancellations made 7-13 days before your charter date will receive a 50% refund of your deposit.</li>
                <li>Cancellations made less than 7 days before your charter date will not receive a refund of your deposit.</li>
              </ul>
              <p className="text-gray-300 mt-4">
                <strong>Weather Cancellations:</strong> If we need to cancel due to unsafe weather conditions, we will reschedule your trip or provide a full refund at your discretion.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Safety and Conduct</h2>
              <p className="text-gray-300 mb-4">
                Safety is our top priority. All clients must:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Follow all instructions from the captain and crew</li>
                <li>Wear life jackets when required</li>
                <li>Refrain from excessive alcohol consumption</li>
                <li>Behave in a manner that does not endanger themselves or others</li>
              </ul>
              <p className="text-gray-300 mt-4">
                We reserve the right to terminate a charter, without refund, if a client's behavior is deemed unsafe or disruptive.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Liability Waiver</h2>
              <p className="text-gray-300">
                By booking a charter with us, you acknowledge that fishing and boating activities involve inherent risks. You agree to assume all risks and release Off The Dock Charters, its captain, and crew from liability for any injuries, accidents, or damages that may occur during your charter, except in cases of gross negligence.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Fishing Licenses and Regulations</h2>
              <p className="text-gray-300">
                All fishing activities will be conducted in compliance with Florida fishing regulations. Our charter includes fishing licenses for all anglers. You agree to comply with all bag limits, size restrictions, and other fishing regulations as explained by your captain.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Photo and Video Release</h2>
              <p className="text-gray-300">
                We may take photos or videos during your charter for promotional purposes. By booking with us, you grant Off The Dock Charters permission to use images or videos that include you for marketing, social media, and website content, unless you specifically request otherwise.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Gift Certificates</h2>
              <p className="text-gray-300">
                Gift certificates are non-refundable but are transferable. They must be used within one year of the purchase date unless otherwise specified.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-300">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes indicates your acceptance of the new terms.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-gray-300">
                <p>Off The Dock Charters</p>
                <p>Bradenton, Florida</p>
                <p>Email: info@offthedockcharters.com</p>
                <p>Phone: (941) 564-5504</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              href="/contact"
              className="inline-block bg-[#D59633] text-black px-8 py-4 rounded-lg font-medium hover:bg-[#c08629] hover:scale-105 hover:shadow-lg hover:shadow-yellow-900/30 transition-all duration-300 transform"
            >
              Contact Us With Questions
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
