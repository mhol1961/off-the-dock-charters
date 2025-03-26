'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import DatePicker from 'react-datepicker'
import { format, addDays, isBefore, startOfDay } from 'date-fns'
import { supabase } from '@/lib/supabase/client'
import type { Availability } from '@/lib/supabase/types'
import { getCalendarEvents, isTimeSlotAvailable } from '@/lib/google-calendar/client'
import type { GoogleCalendarEvent } from '@/lib/google-calendar/client'
import "react-datepicker/dist/react-datepicker.css"

interface CalendarProps {
  selectedDate: Date | null
  onDateSelect: (date: Date) => void
  onContinueToPayment: () => void
}

export default function Calendar({ selectedDate, onDateSelect, onContinueToPayment }: CalendarProps) {
  const [availableDates, setAvailableDates] = useState<Availability[]>([])
  const [calendarEvents, setCalendarEvents] = useState<GoogleCalendarEvent[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [showDepositMessage, setShowDepositMessage] = useState(false)

  useEffect(() => {
    const fetchAvailability = async () => {
      setIsLoading(true)
      const startDate = new Date()
      const endDate = addDays(startDate, 90)

      // Fetch Google Calendar events
      const events = await getCalendarEvents(
        startDate.toISOString(),
        endDate.toISOString()
      )
      setCalendarEvents(events)

      // Fetch Supabase availability
      const { data, error } = await supabase
        .from('availability')
        .select('*')
        .gte('date', format(startDate, 'yyyy-MM-dd'))
        .lte('date', format(endDate, 'yyyy-MM-dd'))
        .not('blocked', 'eq', true)

      if (error) {
        console.error('Error fetching availability:', error)
      } else {
        setAvailableDates(data || [])
      }
      setIsLoading(false)
    }

    fetchAvailability()
  }, [])

  const isDateAvailable = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd')
    const availability = availableDates.find(a => a.date === dateStr)
    
    if (!availability) return false
    
    const slots = availability.available_slots
    const hasAvailableSlot = Object.entries(slots).some(([slot, isAvailable]) => {
      if (!isAvailable) return false
      return isTimeSlotAvailable(calendarEvents, date, slot as any)
    })

    return hasAvailableSlot
  }

  const handleDateSelect = (date: Date) => {
    onDateSelect(date)
    setShowDepositMessage(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <DatePicker
        selected={selectedDate}
        onChange={handleDateSelect}
        inline
        minDate={new Date()}
        maxDate={addDays(new Date(), 90)}
        filterDate={date => 
          !isBefore(startOfDay(date), startOfDay(new Date())) && isDateAvailable(date)
        }
        className="w-full"
        calendarClassName="!bg-black !border-yellow-600 !text-white w-full"
        dayClassName={date => 
          `!text-white hover:!bg-yellow-600/20 
          ${isDateAvailable(date) ? '!bg-transparent' : '!bg-gray-800 !text-gray-600'}`
        }
        monthClassName={() => '!text-white'}
        weekDayClassName={() => '!text-yellow-600'}
        previousMonthButtonLabel={
          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        }
        nextMonthButtonLabel={
          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        }
      />

      {isLoading && (
        <div className="text-center mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-600 mx-auto"></div>
        </div>
      )}

      {showDepositMessage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-6 bg-black border border-yellow-600 rounded-lg text-center"
        >
          <p className="text-white mb-4">Advanced reservations require a $50 deposit.</p>
          <button
            onClick={onContinueToPayment}
            className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Continue to Checkout
          </button>
        </motion.div>
      )}
    </motion.div>
  )
}
