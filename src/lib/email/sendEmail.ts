import nodemailer from 'nodemailer'
import { Booking, TRIP_TIMES } from '../db/schema'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendBookingConfirmation(booking: Booking) {
  const tripTime = TRIP_TIMES[booking.type]
  
  // Send to customer
  await transporter.sendMail({
    from: '"OFF the Dock Charters" <info@offthedockcharters.com>',
    to: booking.email,
    subject: 'Booking Confirmation - OFF the Dock Charters',
    html: `
      <h1>Thank you for your booking!</h1>
      <p>Dear ${booking.name},</p>
      <p>We're looking forward to seeing you for a fantastic fishing trip!</p>
      <h2>Booking Details:</h2>
      <ul>
        <li>Date: ${new Date(booking.date).toLocaleDateString()}</li>
        <li>Time: ${tripTime.start} - ${tripTime.end}</li>
        <li>Trip Type: ${booking.type.replace(/_/g, ' ').toUpperCase()}</li>
      </ul>
      <p>If you need to make any changes to your booking, please contact us at:</p>
      <p>Phone: (941) 564-5504<br>Email: info@offthedockcharters.com</p>
    `,
  })

  // Send to captain
  await transporter.sendMail({
    from: '"OFF the Dock Charters Website" <info@offthedockcharters.com>',
    to: 'info@offthedockcharters.com',
    subject: 'New Booking Received',
    html: `
      <h1>New Booking Received</h1>
      <h2>Customer Details:</h2>
      <ul>
        <li>Name: ${booking.name}</li>
        <li>Email: ${booking.email}</li>
        <li>Phone: ${booking.phone}</li>
      </ul>
      <h2>Booking Details:</h2>
      <ul>
        <li>Date: ${new Date(booking.date).toLocaleDateString()}</li>
        <li>Time: ${tripTime.start} - ${tripTime.end}</li>
        <li>Trip Type: ${booking.type.replace(/_/g, ' ').toUpperCase()}</li>
      </ul>
      ${booking.message ? `<h2>Message:</h2><p>${booking.message}</p>` : ''}
    `,
  })
}
