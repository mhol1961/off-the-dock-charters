'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import emailjs from '@emailjs/browser'

// Initialize EmailJS with public key
emailjs.init("CgnI5iIAEcc3lvY1r")

const BOAT_RAMPS = [
  'Kingfish - 752 Manatee Avenue, Holmes Beach, FL 34217',
  'Warners Bayou - 5800 Riverview Blvd, Bradenton, FL 34209', 
  'Florida Public - 6001 Marina Dr, Holmes Beach, FL 34217',
  'Riverside - 805 Riverside Dr, Palmetto, FL 34221',
  'Coquina Bayside - 1507 Gulf Dr S, Bradenton Beach, FL 34217'
]

const TRIP_TYPES = [
  'Fishing',
  'Sightseeing', 
  'Sunset Cruise',
  'Other'
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    numberOfGuests: 1,
    tripType: '',
    otherTripType: '',
    boatRamp: '',
    specialRequests: ''
  })
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [agreeToPolicies, setAgreeToPolicies] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'numberOfGuests' ? parseInt(value) || 1 : value
    }))
  }

  const sendEmail = async () => {
    if (!selectedDate || !formData.fullName || !formData.email || !formData.phone || !agreeToPolicies) {
      throw new Error('Please fill in all required fields and agree to policies')
    }

    const dateString = selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    const finalTripType = formData.tripType === 'Other' ? formData.otherTripType : formData.tripType

    try {
      // Send notification email to captain
      await emailjs.send(
        "service_qgjgy2a",
        "template_sjoypbf",
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          date: dateString,
          guests: formData.numberOfGuests,
          trip_type: finalTripType,
          boat_ramp: formData.boatRamp,
          special_requests: formData.specialRequests || 'None specified',
          message: `New charter booking request from ${formData.fullName} for ${dateString}. Trip type: ${finalTripType}. Guests: ${formData.numberOfGuests}. Pickup: ${formData.boatRamp}. Contact: ${formData.phone} or ${formData.email}. Special requests: ${formData.specialRequests || 'None specified'}`
        },
        "CgnI5iIAEcc3lvY1r"
      )

      // Send confirmation email to customer
      await emailjs.send(
        "service_qgjgy2a", 
        "template_icoc9q9",
        {
          to_name: formData.fullName,
          to_email: formData.email,
          from_name: "Off The Dock Charters",
          phone: formData.phone,
          date: dateString,
          guests: formData.numberOfGuests,
          trip_type: finalTripType,
          boat_ramp: formData.boatRamp,
          special_requests: formData.specialRequests || 'None specified',
          message: `Thank you for your charter booking request! Captain Chandler will contact you at ${formData.phone} within 24 hours to confirm your ${finalTripType} trip on ${dateString} for ${formData.numberOfGuests} guests. Pickup location: ${formData.boatRamp}. A $150 deposit will secure your booking. Questions? Call (941) 448-5656.`
        },
        "CgnI5iIAEcc3lvY1r"
      )

      return true
    } catch (error: any) {
      console.error('Error sending emails:', error?.text || error?.message || error)
      throw new Error(error?.text || 'Failed to send booking request. Please try again.')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      await sendEmail()
      
      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        numberOfGuests: 1,
        tripType: '',
        otherTripType: '',
        boatRamp: '',
        specialRequests: ''
      })
      setSelectedDate(null)
      setAgreeToPolicies(false)
      
      setSubmitMessage('Thank you for your booking request! We will contact you shortly to confirm availability and details.')
    } catch (error: any) {
      setSubmitMessage(`Error: ${error.message}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 p-8 rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Contact and Booking Form</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-white"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-white"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-white"
            required
          />
        </div>

        {/* Requested Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-2">
            Requested Date *
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={setSelectedDate}
            minDate={new Date()}
            maxDate={new Date(new Date().setFullYear(new Date().getFullYear() + 1))}
            placeholderText="Select a date"
            className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-white"
            popperPlacement="bottom-start"
            required
          />
        </div>

        {/* Number of Guests */}
        <div>
          <label htmlFor="numberOfGuests" className="block text-sm font-medium mb-2">
            Number of Guests (max 6) *
          </label>
          <select
            id="numberOfGuests"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-white"
            required
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        {/* Type of Trip */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Type of Trip *
          </label>
          <div className="space-y-2">
            {TRIP_TYPES.map(type => (
              <label key={type} className="flex items-center">
                <input
                  type="radio"
                  name="tripType"
                  value={type}
                  checked={formData.tripType === type}
                  onChange={handleInputChange}
                  className="mr-3 text-yellow-400 bg-gray-800 border-gray-700 focus:ring-yellow-400"
                  required
                />
                <span className="text-white">{type}</span>
              </label>
            ))}
          </div>
          
          {formData.tripType === 'Other' && (
            <input
              type="text"
              name="otherTripType"
              placeholder="Please specify..."
              value={formData.otherTripType}
              onChange={handleInputChange}
              className="w-full mt-3 px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-white"
              required
            />
          )}
        </div>

        {/* Boat Ramp */}
        <div>
          <label htmlFor="boatRamp" className="block text-sm font-medium mb-2">
            Boat ramp you would like to be picked up at *
          </label>
          <select
            id="boatRamp"
            name="boatRamp"
            value={formData.boatRamp}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-white"
            required
          >
            <option value="">Select a boat ramp</option>
            {BOAT_RAMPS.map(ramp => (
              <option key={ramp} value={ramp}>{ramp}</option>
            ))}
          </select>
        </div>

        {/* Special Requests */}
        <div>
          <label htmlFor="specialRequests" className="block text-sm font-medium mb-2">
            Special Requests
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-700 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-white"
            placeholder="Any special requests or additional information..."
          />
        </div>

        {/* Policies & Agreement */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-600">
          <h3 className="text-xl font-bold mb-4 text-yellow-400">Policies & Agreement</h3>
          
          <div className="space-y-4 text-sm text-gray-300">
            <div>
              <h4 className="font-semibold text-white mb-2">1. Deposits & Payment</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>A deposit of $150 is required to secure your booking. All deposits must be made by credit card only</li>
                <li>Final balance is due the day of the trip</li>
                <li>The final balance can be paid by cash, card, Venmo, Zelle, or Apple Pay</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">2. Cancellations</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Cancellations made 7 or more days before the trip: Deposit refunded in full</li>
                <li>Cancellations made less than 7 days before the trip: Deposit is non-refundable</li>
                <li>No-shows will be charged the full trip amount</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">3. Weather Policy</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>The captain reserves the right to cancel or reschedule due to unsafe weather conditions</li>
                <li>If the captain cancels, clients may reschedule or receive a full refund of deposit</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">4. Safety & Conduct</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>All passengers must follow safety instructions given by the captain and crew</li>
                <li>Life jackets are provided and must be worn when instructed</li>
                <li>No illegal substances or excessive alcohol consumption allowed on board</li>
                <li>The captain reserves the right to end a trip early if unsafe or inappropriate behavior occurs, with no refund</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">5. Liability</h4>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>By agreeing below, the client acknowledges that boating and fishing involve inherent risks</li>
                <li>The client agrees that the captain and crew are not liable for injuries, loss, or damage to personal property</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-700 rounded-lg">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={agreeToPolicies}
                onChange={(e) => setAgreeToPolicies(e.target.checked)}
                className="mt-1 text-yellow-400 bg-gray-800 border-gray-600 focus:ring-yellow-400 focus:ring-2"
                required
              />
              <span className="text-sm text-white">
                <strong>I have read, understood, and agree to the policies listed above.</strong> I acknowledge that this serves as my electronic signature and agreement to these terms and conditions.
              </span>
            </label>
          </div>
        </div>

        {/* Submit Message */}
        {submitMessage && (
          <div className={`p-4 rounded-lg ${submitMessage.startsWith('Error') ? 'bg-red-900/30 text-red-300 border border-red-700' : 'bg-green-900/30 text-green-300 border border-green-700'}`}>
            {submitMessage}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || !agreeToPolicies}
          className="w-full bg-yellow-400 text-black px-6 py-4 rounded-lg font-medium hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Booking Request ($150 Deposit Required)'}
        </button>

        <p className="text-sm text-gray-400 text-center">
          * Required fields. We will contact you to confirm availability and discuss details.
        </p>
      </form>
    </motion.div>
  )
}