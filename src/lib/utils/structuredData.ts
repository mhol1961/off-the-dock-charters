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
    telephone: '+1-941-564-5504',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4103 13th Street Ct W',
      addressLocality: 'Palmetto',
      addressRegion: 'FL',
      postalCode: '34221',
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.5889498,
      longitude: -82.5662553
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
