export type BookingStatus = 'pending' | 'confirmed' | 'cancelled'
export type PaymentStatus = 'pending' | 'paid' | 'refunded' | 'failed'
export type TripType = 'half-day' | 'full-day' | 'custom'

export interface Booking {
  id: string
  user_id: string
  date: string
  time_slot: string
  party_size: number
  trip_type: TripType
  status: BookingStatus
  payment_status: PaymentStatus
  created_at: string
}

export interface Availability {
  id: string
  date: string
  available_slots: {
    morning: boolean
    afternoon: boolean
    fullday: boolean
  }
  updated_at: string
}

export interface Payment {
  id: string
  booking_id: string
  amount: number
  stripe_payment_id: string
  status: PaymentStatus
  created_at: string
}

export interface Database {
  public: {
    Tables: {
      bookings: {
        Row: Booking
        Insert: Omit<Booking, 'id' | 'created_at'>
        Update: Partial<Omit<Booking, 'id' | 'created_at'>>
      }
      availability: {
        Row: Availability
        Insert: Omit<Availability, 'id' | 'updated_at'>
        Update: Partial<Omit<Availability, 'id' | 'updated_at'>>
      }
      payments: {
        Row: Payment
        Insert: Omit<Payment, 'id' | 'created_at'>
        Update: Partial<Omit<Payment, 'id' | 'created_at'>>
      }
    }
  }
}
