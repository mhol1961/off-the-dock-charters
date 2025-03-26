import { z } from 'zod'

export const bookingFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  date: z.date({
    required_error: 'Please select a date',
    invalid_type_error: 'Invalid date',
  }),
  tripType: z.enum(['half-day', 'full-day', 'custom'], {
    required_error: 'Please select a trip type',
  }),
  partySize: z.number().min(1, 'Party size must be at least 1').max(6, 'Maximum party size is 6'),
  message: z.string().optional(),
})

export type BookingFormData = z.infer<typeof bookingFormSchema>
