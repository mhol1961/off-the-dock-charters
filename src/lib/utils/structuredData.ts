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
        name: '4 Hour Trip',
        description: '4-hour inshore fishing trip (1-4 people)',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '600.00',
          priceCurrency: 'USD'
        }
      },
      {
        '@type': 'Offer',
        name: '6 Hour Trip',
        description: '6-hour inshore fishing trip (1-4 people)',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '800.00',
          priceCurrency: 'USD'
        }
      },
      {
        '@type': 'Offer',
        name: '8 Hour Trip',
        description: '8-hour inshore fishing trip (1-4 people)',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '1000.00',
          priceCurrency: 'USD'
        }
      },
      {
        '@type': 'Offer',
        name: 'Sunset Cruise',
        description: '2-hour sunset cruise',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '200.00',
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
    telephone: '+1-941-448-5656',
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
