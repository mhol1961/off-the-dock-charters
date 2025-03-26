'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/contact/ContactForm'
import Script from 'next/script'
import { generateCharterServiceSchema, generateLocalBusinessSchema } from '@/lib/utils/structuredData'

export default function ContactPage() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              generateCharterServiceSchema(),
              generateLocalBusinessSchema()
            ]
          })
        }}
      />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-2">Book Your Charter</h1>
            <p className="text-gray-400 mb-8">
              Ready for an unforgettable fishing experience? Fill out the form below to request your charter booking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg h-fit">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Captain</h3>
                  <p className="text-gray-300">Chandler Brown</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone</h3>
                  <a href="tel:9415645504" className="text-yellow-400 hover:text-yellow-500">
                    (941) 564-5504
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <a href="mailto:info@offthedockcharters.com" className="text-yellow-400 hover:text-yellow-500">
                    info@offthedockcharters.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Hours</h3>
                  <p className="text-gray-300">Available 7 days a week<br />7:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
