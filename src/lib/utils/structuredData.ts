export const generateCharterServiceSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'TourService',
    name: 'Off The Dock Charters',
    description: 'Premier inshore fishing charters in Bradenton, Florida with Captain Chandler Brown.',
    provider: {
      '@type': 'Person',
      name: 'Captain Chandler Brown',
      jobTitle: 'Fishing Charter Captain'
    },
    areaServed: {
      '@type': 'City',
      name: 'Bradenton',
      state: 'Florida'
    },
    serviceType: 'Fishing Charter',
    offers: [
      {
        '@type': 'Offer',
        name: 'Half Day Trip',
        description: '4-hour inshore fishing trip',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '400.00',
          priceCurrency: 'USD'
        }
      },
      {
        '@type': 'Offer',
        name: 'Full Day Trip',
        description: '8-hour inshore fishing trip',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '700.00',
          priceCurrency: 'USD'
        }
      }
    ]
  }
}

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Off The Dock Charters',
    image: '/images/Logo_OTD_Charters.png',
    '@id': 'https://offthedockcharters.com',
    url: 'https://offthedockcharters.com',
    telephone: '+1-123-456-7890',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'TBD',
      addressLocality: 'Bradenton',
      addressRegion: 'FL',
      postalCode: 'TBD',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.4989,
      longitude: -82.5748
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: 'sunrise',
      closes: 'sunset'
    }
  }
}
