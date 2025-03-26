'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'
import { supabase } from '@/lib/supabase/client'
import type { Availability } from '@/lib/supabase/types'

interface TimeSlotPickerProps {
  selectedDate: Date
  onSlotSelect: (slot: string) => void
  selectedSlot: string | null
}

export default function TimeSlotPicker({ 
  selectedDate, 
  onSlotSelect, 
  selectedSlot 
}: TimeSlotPickerProps) {
  const [availability, setAvailability] = useState<Availability | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchAvailability = async () => {
      setIsLoading(true)
      const dateStr = format(selectedDate, 'yyyy-MM-dd')

      const { data, error } = await supabase
        .from('availability')
        .select('*')
        .eq('date', dateStr)
        .single()

      if (error) {
        console.error('Error fetching availability:', error)
      } else {
        setAvailability(data)
      }
      setIsLoading(false)
    }

    if (selectedDate) {
      fetchAvailability()
    }
  }, [selectedDate])

  const slots = [
    { id: 'morning', label: 'Morning (6 AM - 12 PM)', available: availability?.available_slots.morning },
    { id: 'afternoon', label: 'Afternoon (1 PM - 7 PM)', available: availability?.available_slots.afternoon },
    { id: 'fullday', label: 'Full Day (6 AM - 7 PM)', available: availability?.available_slots.fullday }
  ]

  if (isLoading) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold text-gray-300 mb-4">Available Time Slots</h3>
      <div className="grid gap-4">
        {slots.map((slot) => (
          <motion.button
            key={slot.id}
            onClick={() => slot.available && onSlotSelect(slot.id)}
            className={`
              p-4 rounded-lg text-left transition-all duration-200
              ${slot.available 
                ? 'bg-background-light hover:bg-primary/10 cursor-pointer' 
                : 'bg-gray-800 cursor-not-allowed opacity-50'
              }
              ${selectedSlot === slot.id ? 'ring-2 ring-primary' : ''}
            `}
            whileHover={slot.available ? { scale: 1.02 } : {}}
            whileTap={slot.available ? { scale: 0.98 } : {}}
            disabled={!slot.available}
          >
            <div className="flex items-center justify-between">
              <span className="text-gray-300">{slot.label}</span>
              {slot.available ? (
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}
