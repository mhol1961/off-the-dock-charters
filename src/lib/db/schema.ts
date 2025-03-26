export type BookingType = 'half_day_am' | 'half_day_pm' | 'full_day'

export interface Booking {
  id: string
  name: string
  email: string
  phone: string
  date: string // ISO date string
  type: BookingType
  message?: string
  createdAt: string
}

export const TRIP_TIMES = {
  half_day_am: {
    start: '7:00 AM',
    end: '11:00 AM'
  },
  half_day_pm: {
    start: '1:00 PM',
    end: '5:00 PM'
  },
  full_day: {
    start: '7:00 AM',
    end: '3:00 PM'
  }
}
