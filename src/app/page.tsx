import { Metadata } from 'next'
import HomeContent from '@/components/home/HomeContent'

export const metadata: Metadata = {
  title: 'Off The Dock Charters | Inshore Fishing Guide in Bradenton, FL',
  description: 'Experience premier inshore fishing in Bradenton, Florida with Captain Chandler Brown. Book your charter today for redfish, snook, trout, and tarpon fishing.',
}

export default function Home() {
  return <HomeContent />
}
