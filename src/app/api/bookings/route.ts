import { NextResponse } from 'next/server'
import { BookingType } from '@/lib/db/schema'

// This is a temporary in-memory storage for bookings
// In a real application, this would be replaced with a database
const bookings: any[] = []

export async function GET(request: Request) {
  try {
    const date = request.headers.get('date')
    if (!date) {
      return NextResponse.json(
        { error: 'Date is required' },
        { status: 400 }
      )
    }

    const dateBookings = bookings.filter(booking => 
      new Date(booking.date).toDateString() === new Date(date).toDateString()
    )

    return NextResponse.json(dateBookings)
  } catch (error) {
    console.error('Error fetching bookings:', error)
    return NextResponse.json(
      { error: 'Error fetching bookings' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const booking = await request.json()
    
    // Add the booking to our temporary storage
    bookings.push({
      ...booking,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error creating booking:', error)
    return NextResponse.json(
      { error: 'Error creating booking' },
      { status: 500 }
    )
  }
}
