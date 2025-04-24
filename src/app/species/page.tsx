import { Metadata } from 'next'
import SpeciesContent from '@/components/species/SpeciesContent'

export const metadata: Metadata = {
  title: 'Florida Inshore Fish Species | Off The Dock Charters | Bradenton, FL',
  description: 'Discover the variety of inshore fish species you can catch in Bradenton and Anna Maria Island waters. Target snook, redfish, trout, tarpon, and more on your fishing charter.',
  keywords: 'Florida inshore fish, Bradenton fishing species, snook fishing, redfish, spotted seatrout, tarpon fishing, mangrove snapper, jack crevalle, inshore fishing guide',
  alternates: {
    canonical: 'https://offthedockcharters.com/species',
  },
}

export default function SpeciesPage() {
  return <SpeciesContent />;
}
