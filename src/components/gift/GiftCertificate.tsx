'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGift, FaEnvelope, FaUser, FaDollarSign, FaCalendarAlt } from 'react-icons/fa'

interface GiftCertificateFormData {
  recipientName: string
  recipientEmail: string
  senderName: string
  senderEmail: string
  amount: string
  message: string
  deliveryDate: string
}

export default function GiftCertificate() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<GiftCertificateFormData>({
    recipientName: '',
    recipientEmail: '',
    senderName: '',
    senderEmail: '',
    amount: '300',
    message: '',
    deliveryDate: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleNextStep = () => {
    setStep(prev => prev + 1)
  }
  
  const handlePrevStep = () => {
    setStep(prev => prev - 1)
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }
  
  const predefinedAmounts = ['300', '500', '750', '1000']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/70 rounded-2xl overflow-hidden shadow-2xl shadow-yellow-900/30 border border-yellow-700/20"
    >
      {!isSubmitted ? (
        <div className="p-6 md:p-8">
          <div className="flex items-center mb-6">
            <FaGift className="text-yellow-500 text-2xl mr-3" />
            <h2 className="text-2xl font-bold text-white">Gift a Fishing Experience</h2>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map(i => (
                <div 
                  key={i} 
                  className="flex items-center"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= i ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-gray-300'
                  }`}>
                    {i}
                  </div>
                  {i < 3 && (
                    <div className={`w-full h-1 ${
                      step > i ? 'bg-yellow-500' : 'bg-gray-700'
                    }`} style={{ width: '100px' }}></div>
                  )}
                </div>
              ))}
            </div>
            
            <p className="text-center text-gray-300 text-sm">
              {step === 1 && 'Step 1: Choose Amount'}
              {step === 2 && 'Step 2: Recipient Information'}
              {step === 3 && 'Step 3: Your Information'}
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">Select Gift Amount</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                    {predefinedAmounts.map(amount => (
                      <button
                        key={amount}
                        type="button"
                        className={`py-3 px-4 rounded-lg border ${
                          formData.amount === amount 
                            ? 'bg-yellow-600 border-yellow-500 text-white' 
                            : 'bg-black/50 border-gray-700 text-gray-300 hover:bg-black/70'
                        } transition-colors text-center`}
                        onClick={() => setFormData(prev => ({ ...prev, amount }))}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaDollarSign className="text-gray-500" />
                    </div>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-600/50 focus:border-yellow-600 focus:outline-none transition-all duration-200"
                      placeholder="Custom amount"
                      min="100"
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Note: Gift certificates are valid for one year from purchase date.
                  </p>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">Personalized Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-black/60 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-600/50 focus:border-yellow-600 focus:outline-none transition-all duration-200"
                    placeholder="Add a personal message to the recipient..."
                    rows={4}
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="py-3 px-6 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}
            
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">Recipient's Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaUser className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      name="recipientName"
                      value={formData.recipientName}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-600/50 focus:border-yellow-600 focus:outline-none transition-all duration-200"
                      placeholder="Enter recipient's name"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">Recipient's Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaEnvelope className="text-gray-500" />
                    </div>
                    <input
                      type="email"
                      name="recipientEmail"
                      value={formData.recipientEmail}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-600/50 focus:border-yellow-600 focus:outline-none transition-all duration-200"
                      placeholder="Enter recipient's email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">Delivery Date</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaCalendarAlt className="text-gray-500" />
                    </div>
                    <input
                      type="date"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-600/50 focus:border-yellow-600 focus:outline-none transition-all duration-200"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    The gift certificate will be emailed to the recipient on this date.
                  </p>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="py-3 px-6 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="py-3 px-6 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}
            
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">Your Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaUser className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      name="senderName"
                      value={formData.senderName}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-600/50 focus:border-yellow-600 focus:outline-none transition-all duration-200"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-300 mb-2 font-medium">Your Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <FaEnvelope className="text-gray-500" />
                    </div>
                    <input
                      type="email"
                      name="senderEmail"
                      value={formData.senderEmail}
                      onChange={handleInputChange}
                      className="w-full bg-black/60 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-600/50 focus:border-yellow-600 focus:outline-none transition-all duration-200"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6 p-4 bg-black/40 rounded-lg border border-yellow-600/30">
                  <h3 className="font-medium text-white mb-2">Order Summary</h3>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Gift Amount:</span>
                    <span className="text-white">${formData.amount}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Recipient:</span>
                    <span className="text-white">{formData.recipientName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Delivery Date:</span>
                    <span className="text-white">{formData.deliveryDate}</span>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="py-3 px-6 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="py-3 px-6 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Purchase Gift Certificate'
                    )}
                  </button>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-400">
                    Note: Payment processing is currently in testing mode. No actual charges will be made.
                  </p>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      ) : (
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Gift Certificate Created!</h2>
          <p className="text-gray-300 mb-6">
            Thank you for your purchase. A confirmation email has been sent to your email address.
            The gift certificate will be delivered to {formData.recipientName} on {formData.deliveryDate}.
          </p>
          <div className="bg-black/40 rounded-xl p-6 border border-yellow-600/30 mb-6 max-w-md mx-auto">
            <div className="relative h-40 mb-4">
              <Image
                src="/images/Logo_OTD_Charters.png"
                alt="Off The Dock Charters Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="border-t border-b border-yellow-600/30 py-4 my-4">
              <h3 className="text-xl font-bold text-yellow-500 mb-1">GIFT CERTIFICATE</h3>
              <p className="text-white text-2xl font-bold">${formData.amount}</p>
              <p className="text-gray-400 text-sm">For: {formData.recipientName}</p>
            </div>
            <p className="text-sm text-gray-300 italic">
              {formData.message || "Enjoy an unforgettable fishing experience with Captain Chandler Brown!"}
            </p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false)
              setStep(1)
              setFormData({
                recipientName: '',
                recipientEmail: '',
                senderName: '',
                senderEmail: '',
                amount: '300',
                message: '',
                deliveryDate: ''
              })
            }}
            className="py-3 px-6 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Create Another Gift Certificate
          </button>
        </div>
      )}
    </motion.div>
  )
}
