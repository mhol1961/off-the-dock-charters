'use client'

import { motion } from 'framer-motion'

interface StripePaymentFormProps {
  onClose: () => void
  onSuccess: () => void
}

export default function StripePaymentForm({ onClose, onSuccess }: StripePaymentFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-black border border-yellow-600 rounded-lg p-6 w-full max-w-md relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">Secure Reservation</h2>
        
        <div className="space-y-4 mb-6">
          <div className="bg-gray-900 p-4 rounded-lg">
            <p className="text-gray-400">Deposit Amount</p>
            <p className="text-2xl font-bold text-yellow-600">$50.00</p>
          </div>

          {/* Card Details */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Expiration
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onSuccess}
            className="w-full py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Pay $50 Deposit
          </button>
          <p className="text-sm text-gray-400 text-center">
            Your card will be charged immediately. This deposit is non-refundable.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
