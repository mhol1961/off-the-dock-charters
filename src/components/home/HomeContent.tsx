'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'

const HeroSlider = dynamic(() => import('@/components/hero/HeroSlider'), {
  ssr: false,
})

export default function HomeContent() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <HeroSlider />

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
            <div className="bg-black/50 p-6 rounded-lg border border-yellow-600">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Food, Snacks & Drinks</h3>
              <p className="text-gray-300">
                A cooler with ice is available onboard for your perishables. To maximize space and maintain comfort, 
                please leave personal coolers in your vehicle or at the dock.
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg border border-yellow-600">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Sunscreen</h3>
              <p className="text-gray-300">
                Protect yourself from the Florida sun with a good, reef-safe sunscreen.
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg border border-yellow-600">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Hat & Sunglasses</h3>
              <p className="text-gray-300">
                A wide-brim hat and polarized sunglasses will help reduce glare and keep you cool.
              </p>
            </div>

            <div className="bg-black/50 p-6 rounded-lg border border-yellow-600">
              <h3 className="text-xl font-semibold text-yellow-400 mb-4">Proper Footwear</h3>
              <p className="text-gray-300">
                Non-slip sandals, flip-flops, or dock shoes are recommended for safety and comfort.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-black/50 rounded-lg border border-yellow-600">
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

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready for an Amazing Fishing Experience?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Book your inshore fishing charter today and create lasting memories on the beautiful waters of Bradenton, Florida.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg font-medium hover:bg-yellow-500 transition-colors text-lg"
          >
            Book Your Charter
          </Link>
        </div>
      </section>
    </main>
  )
}
