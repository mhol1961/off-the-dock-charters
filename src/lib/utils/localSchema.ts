export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://offthedockcharters.com/#business",
    "name": "Off The Dock Charters",
    "alternateName": "OTD Charters",
    "description": "Premier inshore fishing charters in Bradenton, Anna Maria Island, and Tampa Bay. Specializing in guided fishing trips for snook, redfish, trout, and tarpon with experienced Captain Chandler Brown.",
    "url": "https://offthedockcharters.com",
    "telephone": "+1-941-567-8901",
    "email": "info@offthedockcharters.com",
    "image": [
      "https://offthedockcharters.com/images/Logo_OTD_Charters.png",
      "https://offthedockcharters.com/images/captain-chandler-brown.jpg",
      "https://offthedockcharters.com/images/Two_guys_Redfish_gallery.png"
    ],
    "logo": "https://offthedockcharters.com/images/Logo_OTD_Charters.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bradenton Marina",
      "addressLocality": "Bradenton",
      "addressRegion": "FL",
      "postalCode": "34205",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 27.4989,
      "longitude": -82.5748
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Bradenton",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "City", 
        "name": "Anna Maria Island",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      },
      {
        "@type": "Place",
        "name": "Tampa Bay"
      },
      {
        "@type": "City",
        "name": "Sarasota",
        "containedInPlace": {
          "@type": "State",
          "name": "Florida"
        }
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "06:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Venmo, Zelle",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fishing Charter Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Half Day Inshore Fishing Charter",
            "description": "4-hour guided inshore fishing trip targeting snook, redfish, trout, and other species"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Full Day Fishing Charter",
            "description": "8-hour comprehensive fishing experience with multiple fishing locations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Family Fishing Trip",
            "description": "Kid-friendly fishing charter perfect for families and beginners"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Chandler Brown",
      "jobTitle": "Captain and Fishing Guide",
      "description": "Experienced fishing guide specializing in inshore fishing in Tampa Bay and surrounding waters"
    },
    "sameAs": [
      "https://www.facebook.com/offthedockcharters",
      "https://www.instagram.com/offthedockcharters"
    ]
  };
};

export const generateServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://offthedockcharters.com/#service",
    "name": "Inshore Fishing Charter Services",
    "description": "Professional guided fishing charters in Bradenton, Anna Maria Island, and Tampa Bay waters. Expert instruction for all skill levels targeting snook, redfish, trout, tarpon, and other inshore species.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://offthedockcharters.com/#business"
    },
    "areaServed": [
      "Bradenton, FL",
      "Anna Maria Island, FL", 
      "Tampa Bay, FL",
      "Sarasota, FL"
    ],
    "serviceType": "Fishing Charter",
    "category": "Recreation",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Charter Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Half Day Charter",
          "description": "4-hour inshore fishing experience",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "name": "Full Day Charter",
          "description": "8-hour comprehensive fishing adventure",
          "priceCurrency": "USD"
        }
      ]
    }
  };
};

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://offthedockcharters.com/#organization",
    "name": "Off The Dock Charters",
    "alternateName": "OTD Charters",
    "url": "https://offthedockcharters.com",
    "logo": "https://offthedockcharters.com/images/Logo_OTD_Charters.png",
    "image": "https://offthedockcharters.com/images/Logo_OTD_Charters.png",
    "description": "Premier fishing charter service in Bradenton, Florida, offering guided inshore fishing trips with Captain Chandler Brown.",
    "telephone": "+1-941-567-8901",
    "email": "info@offthedockcharters.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bradenton Marina",
      "addressLocality": "Bradenton", 
      "addressRegion": "FL",
      "postalCode": "34205",
      "addressCountry": "US"
    },
    "founder": {
      "@type": "Person",
      "name": "Chandler Brown"
    },
    "sameAs": [
      "https://www.facebook.com/offthedockcharters",
      "https://www.instagram.com/offthedockcharters"
    ]
  };
};
