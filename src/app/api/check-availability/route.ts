import { NextResponse } from 'next/server'
import { BookingType } from '@/lib/db/schema'

export async function POST(request: Request) {
  try {
    const { date } = await request.json()
    const checkDate = new Date(date)

    // Create a new request to get bookings
    const bookingsRequest = new Request('/api/bookings', {
      method: 'GET',
      headers: {
        'date': checkDate.toISOString()
      }
    })

    // Get existing bookings for this date from your database
    const response = await fetch(bookingsRequest)
    if (!response.ok) {
      throw new Error('Failed to fetch bookings')
    }
    const existingBookings = await response.json()

    const availableSlots: BookingType[] = []

    // If no bookings exist for this date, all slots are available
    if (!existingBookings || existingBookings.length === 0) {
      availableSlots.push('full_day', 'half_day_am', 'half_day_pm')
      return NextResponse.json({ available: true, availableSlots })
    }

    // Check if there's a full day booking
    const hasFullDay = existingBookings.some((booking: any) => booking.tripType === 'full_day')
    if (hasFullDay) {
      return NextResponse.json({ available: false, message: 'This date is fully booked.' })
    }

    // Check half day bookings
    const hasAM = existingBookings.some((booking: any) => booking.tripType === 'half_day_am')
    const hasPM = existingBookings.some((booking: any) => booking.tripType === 'half_day_pm')

    // If neither half day is booked, full day is still available
    if (!hasAM && !hasPM) {
      availableSlots.push('full_day', 'half_day_am', 'half_day_pm')
    } else {
      // If AM is available
      if (!hasAM) availableSlots.push('half_day_am')
      // If PM is available
      if (!hasPM) availableSlots.push('half_day_pm')
    }

    return NextResponse.json({ 
      available: availableSlots.length > 0,
      availableSlots,
      message: availableSlots.length === 0 ? 'This date is fully booked.' : undefined
    })

  } catch (error) {
    console.error('Error checking availability:', error)
    return NextResponse.json(
      { error: 'Error checking availability' },
      { status: 500 }
    )
  }
}
