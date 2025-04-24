import { Metadata } from 'next'
import HomeContent from '@/components/home/HomeContent'

export const metadata: Metadata = {
  title: 'Off The Dock Charters | Inshore Fishing Charters Bradenton & Anna Maria Island, FL',
  description: 'Book premier inshore fishing charters in Bradenton & Anna Maria Island with Captain Chandler Brown. Catch snook, redfish, tarpon & more! Family-friendly trips available.',
  keywords: 'fishing charters Bradenton, inshore fishing Florida, Anna Maria Island fishing guide, snook fishing, redfish charters, tarpon fishing, family fishing trips, Bradenton fishing guide',
}

export default function Home() {
  return <HomeContent />
}
