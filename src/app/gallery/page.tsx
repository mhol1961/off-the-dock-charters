import { Metadata } from 'next'
import GalleryContent from '@/components/gallery/GalleryContent'

export const metadata: Metadata = {
  title: 'Fishing Charter Gallery | Off The Dock Charters | Bradenton, FL',
  description: 'View our gallery of successful inshore fishing charters in Bradenton, Florida. See trophy catches of snook, redfish, trout, and tarpon from our guided fishing trips.',
  keywords: 'fishing charter gallery, Bradenton fishing photos, inshore fishing pictures, Florida fishing catches, snook fishing, redfish catches, tarpon fishing photos, fishing guide gallery'
}

export default function GalleryPage() {
  return <GalleryContent />
}
