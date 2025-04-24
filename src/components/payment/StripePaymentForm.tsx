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
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-black/80 border border-yellow-600 rounded-2xl p-8 w-full max-w-md relative shadow-2xl shadow-yellow-900/30"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 rounded-full p-1"
          aria-label="Close payment form"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-white mb-2">Secure Reservation</h2>
        <p className="text-yellow-500 text-sm mb-6">Payment processing in testing mode - bank integration pending</p>
        
        <div className="space-y-6 mb-6">
          <div className="bg-black/60 p-6 rounded-xl border border-yellow-600/30 shadow-lg hover:shadow-xl hover:shadow-yellow-900/20 transition-all duration-300">
            <p className="text-gray-400 text-sm">Deposit Amount</p>
            <p className="text-3xl font-bold text-yellow-500 drop-shadow-[0_1px_2px_rgba(213,150,51,0.5)]">$50.00</p>
          </div>

          {/* Card Details */}
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-600/50 focus:border-yellow-600 focus:outline-none transition-all duration-200 hover:border-gray-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Expiration
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-600/50 focus:border-yellow-600 focus:outline-none transition-all duration-200 hover:border-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-600/50 focus:border-yellow-600 focus:outline-none transition-all duration-200 hover:border-gray-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onSuccess}
            className="w-full py-4 bg-yellow-600 text-white rounded-xl font-medium shadow-lg hover:bg-yellow-700 hover:shadow-xl hover:shadow-yellow-900/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 transform"
          >
            Pay $50 Deposit
          </button>
          <p className="text-sm text-gray-400 text-center">
            Your card will be charged immediately. This deposit is non-refundable.
          </p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p className="text-xs text-gray-400">Secure 256-bit SSL encrypted payment</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
