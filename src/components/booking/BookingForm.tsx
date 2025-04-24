'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { supabase } from '@/lib/supabase/client'
import StripePaymentForm from '../payment/StripePaymentForm'

interface BookedSlot {
  date: string
  time: string
}

const timeSlots = [
  '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM',
  '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'
]

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([])
  const [showPayment, setShowPayment] = useState(false)

  useEffect(() => {
    fetchBookedSlots()
  }, [])

  const fetchBookedSlots = async () => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('date, time_slot')
      
      if (data) {
        setBookedSlots(data.map(slot => ({
          date: slot.date,
          time: slot.time_slot
        })))
      }
      
      if (error) {
        console.error('Error fetching booked slots:', error)
      }
    } catch (err) {
      console.error('Failed to fetch booked slots:', err)
      // Continue with empty booked slots
    }
  }

  const isTimeSlotAvailable = (date: Date, time: string) => {
    const dateStr = date.toISOString().split('T')[0]
    return !bookedSlots.some(slot => 
      slot.date === dateStr && slot.time === time
    )
  }

  const getAvailableTimeSlots = (date: Date) => {
    return timeSlots.filter(time => isTimeSlotAvailable(date, time))
  }

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date)
    setSelectedTime('')
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setShowPayment(true)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-black/80 p-6 rounded-lg border border-yellow-400">
      <h2 className="text-2xl font-bold mb-6">Book Your Charter</h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Select Date</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateSelect}
          minDate={new Date()}
          className="w-full bg-black border border-yellow-400 rounded px-3 py-2 text-white"
          dateFormat="MMMM d, yyyy"
          placeholderText="Click to select a date"
        />
      </div>

      {selectedDate && (
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Select Time</label>
          <div className="grid grid-cols-2 gap-2">
            {getAvailableTimeSlots(selectedDate).map((time) => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`p-2 rounded text-sm ${
                  selectedTime === time
                    ? 'bg-yellow-400 text-black'
                    : 'bg-black border border-yellow-400 text-white hover:bg-yellow-400/20'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedDate && selectedTime && (
        <div className="mt-6">
          <p className="text-sm text-gray-400 mb-4">
            A $50 deposit is required to secure your booking.
          </p>
          <button
            onClick={handleContinue}
            className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-yellow-500 transition-colors"
          >
            Continue to Payment
          </button>
        </div>
      )}

      <AnimatePresence>
        {showPayment && (
          <StripePaymentForm
            onClose={() => setShowPayment(false)}
            onSuccess={async () => {
              // Save booking to database
              const { error } = await supabase
                .from('bookings')
                .insert({
                  date: selectedDate?.toISOString().split('T')[0],
                  time_slot: selectedTime,
                  status: 'confirmed',
                  payment_status: 'paid'
                })
              
              if (!error) {
                await fetchBookedSlots()
                setShowPayment(false)
                setSelectedDate(null)
                setSelectedTime('')
              }
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
