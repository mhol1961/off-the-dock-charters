'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import DatePicker from 'react-datepicker'
import { motion } from 'framer-motion'
import { BookingFormData, bookingFormSchema } from '@/lib/types/booking'
import "react-datepicker/dist/react-datepicker.css"

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      tripType: 'half-day',
      partySize: 1,
    },
  })

  const selectedDate = watch('date')

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    try {
      // TODO: Implement actual form submission
      console.log('Form data:', data)
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
      setSubmitSuccess(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const inputClasses = "w-full bg-background-light border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
  const labelClasses = "block text-sm font-medium text-gray-300 mb-1"
  const errorClasses = "text-red-500 text-sm mt-1"

  if (submitSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <h3 className="text-2xl font-bold text-primary mb-4">Booking Request Sent!</h3>
        <p className="text-gray-300">
          Thank you for your booking request. We will contact you shortly to confirm your charter.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial="hidden"
      animate="visible"
      variants={formAnimation}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className={labelClasses}>First Name</label>
          <input
            type="text"
            id="firstName"
            {...register('firstName')}
            className={inputClasses}
          />
          {errors.firstName && (
            <p className={errorClasses}>{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className={labelClasses}>Last Name</label>
          <input
            type="text"
            id="lastName"
            {...register('lastName')}
            className={inputClasses}
          />
          {errors.lastName && (
            <p className={errorClasses}>{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className={labelClasses}>Email</label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={inputClasses}
          />
          {errors.email && (
            <p className={errorClasses}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>Phone</label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className={inputClasses}
          />
          {errors.phone && (
            <p className={errorClasses}>{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className={labelClasses}>Preferred Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setValue('date', date as Date)}
            className={inputClasses}
            minDate={new Date()}
            placeholderText="Select a date"
            dateFormat="MMMM d, yyyy"
          />
          {errors.date && (
            <p className={errorClasses}>{errors.date.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="tripType" className={labelClasses}>Trip Type</label>
          <select
            id="tripType"
            {...register('tripType')}
            className={inputClasses}
          >
            <option value="half-day">Half Day (4 Hours)</option>
            <option value="full-day">Full Day (8 Hours)</option>
            <option value="custom">Custom Trip</option>
          </select>
          {errors.tripType && (
            <p className={errorClasses}>{errors.tripType.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="partySize" className={labelClasses}>Party Size</label>
        <input
          type="number"
          id="partySize"
          {...register('partySize', { valueAsNumber: true })}
          min="1"
          max="6"
          className={inputClasses}
        />
        {errors.partySize && (
          <p className={errorClasses}>{errors.partySize.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>Additional Information</label>
        <textarea
          id="message"
          {...register('message')}
          rows={4}
          className={inputClasses}
          placeholder="Any special requests or questions?"
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? 'Sending...' : 'Book Your Charter'}
      </motion.button>
    </motion.form>
  )
}
