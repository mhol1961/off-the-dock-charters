'use client'

import { motion } from 'framer-motion'
import BookingForm from '@/components/booking/BookingForm'

export default function BookPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mb-2">Book Your Charter</h1>
        <p className="text-gray-400 text-center mb-8">
          Select your preferred date and time, and secure your booking with a $50 deposit.
        </p>
        
        <BookingForm />
      </motion.div>
    </div>
  )
}
