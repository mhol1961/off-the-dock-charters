'use client'

import { motion } from 'framer-motion'
import GiftCertificate from '@/components/gift/GiftCertificate'
import Image from 'next/image'
import { FaGift, FaEnvelope, FaCalendarAlt, FaCheck } from 'react-icons/fa'

export default function GiftPage() {
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
              Gift Certificates
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Give the gift of an unforgettable fishing experience with Captain Chandler Brown.
              Our gift certificates are perfect for birthdays, holidays, or any special occasion.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">The Perfect Gift for Any Occasion</h2>
              <p className="text-gray-300 mb-6">
                Whether it's a birthday, anniversary, holiday, or corporate gift, a fishing charter with Captain Chandler 
                creates memories that will last a lifetime. Our gift certificates are customizable and can be sent directly 
                to the recipient on the date of your choosing.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center mt-1 mr-4">
                    <FaGift className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Customizable Amounts</h3>
                    <p className="text-gray-300">Choose from our suggested amounts or enter a custom value.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center mt-1 mr-4">
                    <FaEnvelope className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Digital Delivery</h3>
                    <p className="text-gray-300">Gift certificates are delivered via email to the recipient.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center mt-1 mr-4">
                    <FaCalendarAlt className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Schedule Delivery</h3>
                    <p className="text-gray-300">Choose when the gift certificate is delivered to the recipient.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center mt-1 mr-4">
                    <FaCheck className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Valid for One Year</h3>
                    <p className="text-gray-300">Recipients have one full year from the purchase date to redeem their gift.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-yellow-900/30 border border-yellow-700/30"
            >
              <div className="relative h-[500px]">
                <Image
                  src="/images/Two_guys_big_tarpon_gallery.png"
                  alt="Fishing gift experience"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <div className="bg-black/70 rounded-xl p-4 border border-yellow-600/30 inline-block">
                    <h3 className="text-xl font-bold text-yellow-500 mb-1">GIFT CERTIFICATE</h3>
                    <p className="text-white text-sm">The gift of adventure and memories</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <GiftCertificate />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 bg-black/70 rounded-2xl p-6 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-white mb-2">How do gift certificates work?</h3>
                <p className="text-gray-300">
                  After purchase, the gift certificate will be emailed to the recipient on your specified date. 
                  They can then contact us to book their charter using the certificate code provided in the email.
                </p>
              </div>
              
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-white mb-2">Can I purchase a gift certificate for a specific package?</h3>
                <p className="text-gray-300">
                  Yes! You can purchase a gift certificate for any of our standard packages, or for a custom amount 
                  that the recipient can apply toward their booking.
                </p>
              </div>
              
              <div className="border-b border-gray-700 pb-4">
                <h3 className="text-lg font-semibold text-white mb-2">How long are gift certificates valid?</h3>
                <p className="text-gray-300">
                  Gift certificates are valid for one year from the date of purchase. This gives the recipient 
                  plenty of time to schedule their fishing adventure.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Can I add a personal message?</h3>
                <p className="text-gray-300">
                  Absolutely! During the purchase process, you'll have the opportunity to add a personalized 
                  message that will be included with the gift certificate.
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-black/40 rounded-lg border border-yellow-600/20">
              <p className="text-sm text-yellow-500 text-center">
                Note: Gift certificate purchases are currently in testing mode. No actual charges will be processed at this time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
