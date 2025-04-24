import { Metadata } from 'next'
import FaqAccordion from '@/components/faq/FaqAccordion'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Fishing Charter FAQs | Off The Dock Charters | Bradenton, FL',
  description: 'Find answers to common questions about our Bradenton fishing charters. Learn what to bring, fishing license requirements, weather policies, and more.',
  keywords: 'fishing charter FAQ, Bradenton fishing questions, fishing trip preparation, fishing license Florida, inshore fishing guide FAQ',
  alternates: {
    canonical: 'https://offthedockcharters.com/faq',
  },
}

export default function FaqPage() {
  return (
    <main>
      <FaqAccordion />
      
      {/* Structured FAQ data for rich snippets */}
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What should I bring on the fishing charter?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend wearing clothing appropriate for the weather—typically hot and sunny. Suggested items include: sunglasses (preferably polarized), sunscreen (reef-safe if possible), hats for sun protection, soft-soled non-marking shoes, lunch or snacks (for full-day trips), drinks (water, sports drinks, or non-glass containers), and a camera or phone for capturing your catch."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need a fishing license?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, we've got you covered! The fishing license is included in your trip."
            }
          },
          {
            "@type": "Question",
            "name": "Where do we meet, and what time?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Captain will contact you the day before your trip to confirm the meeting location and start time. We typically depart from Marsh Harbor Marina in Palmetto, FL."
            }
          },
          {
            "@type": "Question",
            "name": "Can fishing charters be canceled due to weather?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, but Florida's weather is typically on our side. Safety is our top priority, and the Captain will determine if the trip needs to be rescheduled due to high winds, heavy rain, or lightning. If weather forces a cancellation, we will work with you to reschedule."
            }
          },
          {
            "@type": "Question",
            "name": "Will you clean the fish we catch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Fish cleaning is included, so you'll leave with filleted and bagged fish, ready to cook."
            }
          },
          {
            "@type": "Question",
            "name": "I've never fished from a boat before. Do I need experience?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Not at all! No experience is required—we take care of everything. Whether you're a beginner or a seasoned angler, we'll tailor the trip to your skill level and make sure you have a fantastic time on the water."
            }
          }
        ]
      })}} />
    </main>
  )
}
