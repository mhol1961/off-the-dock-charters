import { createClient } from '@supabase/supabase-js'
import { Database } from './types'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export const getAvailableSlots = async (date: string) => {
  const { data, error } = await supabase
    .from('availability')
    .select('*')
    .eq('date', date)
    .single()

  if (error) {
    console.error('Error fetching availability:', error)
    return null
  }

  return data
}

export const createBooking = async (booking: Database['public']['Tables']['bookings']['Insert']) => {
  const { data, error } = await supabase
    .from('bookings')
    .insert(booking)
    .select()
    .single()

  if (error) {
    console.error('Error creating booking:', error)
    return null
  }

  return data
}

export const createPayment = async (payment: Database['public']['Tables']['payments']['Insert']) => {
  const { data, error } = await supabase
    .from('payments')
    .insert(payment)
    .select()
    .single()

  if (error) {
    console.error('Error creating payment:', error)
    return null
  }

  return data
}

export const updateBookingStatus = async (
  bookingId: string,
  status: Database['public']['Tables']['bookings']['Row']['status']
) => {
  const { data, error } = await supabase
    .from('bookings')
    .update({ status })
    .eq('id', bookingId)
    .select()
    .single()

  if (error) {
    console.error('Error updating booking status:', error)
    return null
  }

  return data
}
