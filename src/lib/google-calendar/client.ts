export interface GoogleCalendarEvent {
  id: string
  start: {
    dateTime: string
    timeZone: string
  }
  end: {
    dateTime: string
    timeZone: string
  }
  summary: string
  status: string
}

const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID
const API_KEY = process.env.GOOGLE_CALENDAR_API_KEY

export async function getCalendarEvents(timeMin: string, timeMax: string) {
  if (!CALENDAR_ID || !API_KEY) {
    throw new Error('Missing Google Calendar configuration')
  }

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
    CALENDAR_ID
  )}/events?key=${API_KEY}&timeMin=${encodeURIComponent(
    timeMin
  )}&timeMax=${encodeURIComponent(timeMax)}&singleEvents=true&orderBy=startTime`

  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Failed to fetch calendar events')
    }
    const data = await response.json()
    return data.items as GoogleCalendarEvent[]
  } catch (error) {
    console.error('Error fetching calendar events:', error)
    return []
  }
}

export function isTimeSlotAvailable(
  events: GoogleCalendarEvent[],
  date: Date,
  timeSlot: 'morning' | 'afternoon' | 'fullday'
): boolean {
  const timeSlotRanges = {
    morning: { start: 6, end: 12 },
    afternoon: { start: 13, end: 19 },
    fullday: { start: 6, end: 19 }
  }

  const range = timeSlotRanges[timeSlot]
  const startTime = new Date(date)
  startTime.setHours(range.start, 0, 0, 0)
  const endTime = new Date(date)
  endTime.setHours(range.end, 0, 0, 0)

  return !events.some(event => {
    const eventStart = new Date(event.start.dateTime)
    const eventEnd = new Date(event.end.dateTime)
    return (
      (eventStart >= startTime && eventStart < endTime) ||
      (eventEnd > startTime && eventEnd <= endTime) ||
      (eventStart <= startTime && eventEnd >= endTime)
    )
  })
}
