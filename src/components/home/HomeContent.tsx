'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import WeatherWidget from '@/components/weather/WeatherWidget'

const HeroSlider = dynamic(() => import('@/components/hero/HeroSlider'), {
  ssr: false,
})

export default function HomeContent() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSlider />

      {/* Weather Widget Section */}
      <section className="py-10 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <WeatherWidget />
        </div>
      </section>

      {/* What to Bring Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            What to Bring for Your Fishing Charter with{' '}
            <span className="text-yellow-400">Capt. Chandler Brown</span>
          </h2>
          <p className="text-gray-300 mb-8 text-center">
            To ensure a comfortable and enjoyable inshore fishing experience, we recommend bringing a few essential items. 
            The list below will help you prepare based on the duration of your trip and the day's weather conditions.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/70 p-6 rounded-2xl border border-yellow-600 shadow-2xl shadow-yellow-900/30 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.35)] hover:-translate-y-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#D59633]">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Food, Snacks & Drinks</h3>
              <p className="text-gray-300">
                A cooler with ice is available onboard for your perishables. To maximize space and maintain comfort, 
                please leave personal coolers in your vehicle or at the dock.
              </p>
            </div>

            <div className="bg-black/70 p-6 rounded-2xl border border-yellow-600 shadow-2xl shadow-yellow-900/30 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.35)] hover:-translate-y-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#D59633]">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Sunscreen</h3>
              <p className="text-gray-300">
                Protect yourself from the Florida sun with a good, reef-safe sunscreen.
              </p>
            </div>

            <div className="bg-black/70 p-6 rounded-2xl border border-yellow-600 shadow-2xl shadow-yellow-900/30 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.35)] hover:-translate-y-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#D59633]">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Hat & Sunglasses</h3>
              <p className="text-gray-300">
                A wide-brim hat and polarized sunglasses will help reduce glare and keep you cool.
              </p>
            </div>

            <div className="bg-black/70 p-6 rounded-2xl border border-yellow-600 shadow-2xl shadow-yellow-900/30 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.35)] hover:-translate-y-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#D59633]">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Proper Footwear</h3>
              <p className="text-gray-300">
                Non-slip sandals, flip-flops, or dock shoes are recommended for safety and comfort.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-black/70 rounded-2xl border border-yellow-600 shadow-2xl shadow-yellow-900/30 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.35)] hover:-translate-y-1 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#D59633]">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Weather-Appropriate Clothing</h3>
            <p className="text-gray-300">
              Check the forecast and bring a light jacket or rain gear if necessary.
            </p>
          </div>

          <p className="text-center text-xl text-yellow-400 mt-8">
            With these essentials packed, you're all set for an unforgettable day on the water with Off The Dock Charters! 🎣🌊
          </p>
        </div>
      </section>

      {/* Featured Catches Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_2px_4px_rgba(213,150,51,0.3)]">
              Recent Featured Catches
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Take a look at some of the amazing catches our clients have reeled in on recent charters.
              You could be next!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { image: '/images/chandler_tarpon.jpeg', species: 'Tarpon', location: 'Manatee River', date: 'Recent Charter' },
              { image: '/images/ManWithRedfish1.jpeg', species: 'Redfish', location: 'Tampa Bay', date: 'Recent Charter' },
              { image: '/images/TwoMenRedfish.jpeg', species: 'Redfish', location: 'Sarasota Bay', date: 'Recent Charter' }
            ].map((catch_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative h-80 overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={catch_.image}
                    alt={`${catch_.species} caught in ${catch_.location}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-xl font-bold text-yellow-400">{catch_.species}</h3>
                    <p className="text-sm">{catch_.location} • {catch_.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-block px-6 py-3 border border-yellow-600 text-yellow-500 rounded-lg hover:bg-yellow-600/10 hover:text-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-900/20"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* More Amazing Catches Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_2px_4px_rgba(213,150,51,0.3)]">
              More Amazing Catches
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Every charter is different, and every catch tells a story. Check out more of our clients' success!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { image: '/images/two-reeling-nice-catch.png', title: 'Double Hookup!', description: 'Two anglers fighting fish at the same time' },
              { image: '/images/chan_nice_redfish.jpeg', title: 'Captain\'s Catch', description: 'Captain Chandler with a beautiful redfish' },
              { image: '/images/client_nice_red3.jpeg', title: 'Trophy Redfish', description: 'Another satisfied client with their catch' },
              { image: '/images/ManWithRedfish4.png', title: 'Perfect Day', description: 'Making memories on the water' }
            ].map((catch_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative h-64 overflow-hidden rounded-xl shadow-lg bg-black/70 border border-yellow-600/20 hover:border-yellow-500/50 transition-all duration-300">
                  <Image
                    src={catch_.image}
                    alt={catch_.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-bold text-yellow-400 mb-1">{catch_.title}</h3>
                    <p className="text-sm text-gray-300">{catch_.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="inline-block px-6 py-3 border border-yellow-600 text-yellow-500 rounded-lg hover:bg-yellow-600/10 hover:text-yellow-400 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-900/20"
            >
              See All Catches in Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center rounded-2xl shadow-2xl shadow-yellow-900/30 bg-black/60 p-10 border border-yellow-700 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.35)] hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for an Amazing Fishing Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your inshore fishing charter today and create lasting memories on the beautiful waters of Bradenton, Florida.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#D59633] text-black px-8 py-4 rounded-lg font-medium hover:bg-[#c08629] hover:scale-105 hover:shadow-lg hover:shadow-yellow-900/30 transition-all duration-300 transform"
          >
            Book Your Charter
          </Link>
        </div>
      </section>
    </div>
  )
}
