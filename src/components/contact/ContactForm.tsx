'use client'

import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { motion, AnimatePresence } from 'framer-motion'
import StripePaymentForm from '../payment/StripePaymentForm'
import { BookingType, TRIP_TIMES } from '@/lib/db/schema'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with public key
emailjs.init("CgnI5iIAEcc3lvY1r")

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    tripType: '' as BookingType,
  })
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [showPayment, setShowPayment] = useState(false)
  const [bookingError, setBookingError] = useState('')
  const [availableSlots, setAvailableSlots] = useState<BookingType[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isInquiryOnly, setIsInquiryOnly] = useState(false)

  const handleDateChange = async (date: Date | null) => {
    setSelectedDate(date)
    setBookingError('')
    if (date) {
      setAvailableSlots(['full_day', 'half_day_am', 'half_day_pm'])
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (name === 'tripType') {
      setBookingError('')
    }
  }

  const sendEmails = async () => {
    if (!selectedDate || !formData.name || !formData.email || !formData.phone || !formData.tripType) {
      throw new Error('Please fill in all required fields')
    }

    const tripTime = TRIP_TIMES[formData.tripType as BookingType]
    const dateString = selectedDate?.toLocaleDateString()
    const title = `${formData.tripType.replace(/_/g, ' ').toUpperCase()} - ${dateString}`
    
    try {
      // Send notification email to business (Contact Us template)
      await emailjs.send(
        "service_qgjgy2a",
        "template_sjoypbf",
        {
          to_name: "Captain Chandler",
          to_email: "mrodbudlife@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          date: dateString,
          trip_type: formData.tripType.replace(/_/g, ' ').toUpperCase(),
          message: formData.message || 'No message provided',
          reply_to: formData.email,
          subject: title
        },
        "CgnI5iIAEcc3lvY1r"
      )

      // Send confirmation email to customer (Auto-Reply template)
      await emailjs.send(
        "service_qgjgy2a",
        "template_icoc9q9",
        {
          to_name: formData.name,
          to_email: formData.email,
          from_name: "OFF the Dock Charters",
          from_email: "mrodbudlife@gmail.com",
          phone: formData.phone,
          date: dateString,
          trip_type: formData.tripType.replace(/_/g, ' ').toUpperCase(),
          message: formData.message || 'No message provided',
          reply_to: "mrodbudlife@gmail.com",
          subject: "We've received your message"
        },
        "CgnI5iIAEcc3lvY1r"
      )

      return true
    } catch (error: any) {
      console.error('Detailed error sending emails:', error?.text || error?.message || error)
      throw new Error(error?.text || 'Failed to send confirmation emails. Please try again.')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    if (!selectedDate || !formData.tripType) {
      setBookingError('Please select both a date and trip type.')
      setIsSubmitting(false)
      return
    }

    if (isInquiryOnly) {
      try {
        await sendEmails()
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          tripType: '' as BookingType,
        })
        setSelectedDate(null)
        setIsInquiryOnly(false)
        alert('Thank you for your inquiry! We will contact you shortly. Please note that your preferred date is not reserved until a deposit is paid.')
      } catch (error: any) {
        alert(error.message)
      } finally {
        setIsSubmitting(false)
      }
    } else {
      setShowPayment(true)
      setIsSubmitting(false)
    }
  }

  const handleClosePayment = () => {
    setShowPayment(false)
  }

  const handlePaymentSuccess = async () => {
    setIsSubmitting(true)
    try {
      // Save booking
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: selectedDate?.toISOString(),
        })
      })

      if (response.ok) {
        // Send confirmation emails
        await sendEmails()
        
        // Show success message
        setShowPayment(false)
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          tripType: '' as BookingType,
        })
        setSelectedDate(null)
        alert('Thank you for your business! We look forward to seeing you for a fantastic trip. A confirmation email has been sent to your inbox.')
      } else {
        throw new Error('Failed to save booking')
      }
    } catch (error) {
      console.error('Error processing booking:', error)
      alert('There was an error processing your booking. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            required
          />
        </div>

        <div className="relative">
          <label htmlFor="date" className="block text-sm font-medium mb-2">
            Preferred Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
            placeholderText="Select a date"
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            popperPlacement="bottom-start"
            popperModifiers={[
              {
                name: "offset",
                options: {
                  offset: [0, 10]
                }
              }
            ]}
          />
        </div>

        {selectedDate && (
          <div>
            <label htmlFor="tripType" className="block text-sm font-medium mb-2">
              Trip Type
            </label>
            <select
              id="tripType"
              name="tripType"
              value={formData.tripType}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
              required
            >
              <option value="">Select a trip type</option>
              <option value="full_day">Full Day (7:00 AM - 3:00 PM)</option>
              <option value="half_day_am">Half Day - Morning (7:00 AM - 11:00 AM)</option>
              <option value="half_day_pm">Half Day - Afternoon (1:00 PM - 5:00 PM)</option>
            </select>
          </div>
        )}

        {bookingError && (
          <p className="text-red-500">{bookingError}</p>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
          />
        </div>

        <div className="flex items-center space-x-2 mt-4">
          <input
            type="checkbox"
            id="inquiryOnly"
            checked={isInquiryOnly}
            onChange={(e) => setIsInquiryOnly(e.target.checked)}
            className="rounded border-gray-700 bg-gray-800 text-yellow-400 focus:ring-yellow-400"
          />
          <label htmlFor="inquiryOnly" className="text-sm">
            Submit as inquiry only (no deposit required, but date is not reserved)
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-yellow-400 text-black px-6 py-3 rounded font-medium hover:bg-yellow-500 transition-colors disabled:opacity-50"
        >
          {isSubmitting ? 'Processing...' : isInquiryOnly ? 'Submit Inquiry' : 'Book Now ($50 deposit)'}
        </button>

        {!isInquiryOnly && (
          <p className="text-sm text-gray-400 text-center">
            A $50 deposit is required to secure your booking date and time.
          </p>
        )}
        {isInquiryOnly && (
          <p className="text-sm text-gray-400 text-center">
            Note: Your preferred date and time are not reserved until a deposit is paid.
          </p>
        )}
      </form>

      <AnimatePresence>
        {showPayment && !isInquiryOnly && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          >
            <div className="bg-gray-900 p-8 rounded-lg max-w-md w-full">
              <StripePaymentForm
                onClose={handleClosePayment}
                onSuccess={handlePaymentSuccess}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
