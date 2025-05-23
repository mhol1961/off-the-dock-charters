import Link from 'next/link'
import Image from 'next/image'
import { FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCreditCard, FaFish, FaCalendarAlt, FaAnchor } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="nav-bg mt-auto">
      <div className="container mx-auto px-4 py-12">
        {/* Logo and brief description */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-12">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <Link href="/" className="inline-block mb-6" aria-label="Off The Dock Charters Home">
                <Image 
                  src="/images/Logo_OTD_Charters.png" 
                  alt="Off The Dock Charters Logo" 
                  width={200}
                  height={85}
                  className="object-contain"
                  priority
                />
              </Link>
              <p className="text-gray-300 max-w-md">Premier inshore fishing charters in Bradenton, Florida. Experience world-class fishing with Captain Chandler Brown.</p>
              <div className="mt-4 flex space-x-4 justify-center md:justify-start">
                <a
                  href="https://www.instagram.com/chandllerbrown?igsh=YzgyN2ViajNmMWRu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#D59633] transition-colors p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D59633] hover:bg-white/10" 
                  aria-label="Follow us on Instagram"
                >
                  <FaInstagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-black/40 p-6 rounded-xl border border-yellow-600/20 backlit-shadow">
            <h3 className="text-xl font-bold text-[#D59633] mb-4">Book Your Charter</h3>
            <div className="flex items-center mb-3">
              <FaPhone className="text-[#D59633] mr-3" />
              <a href="tel:+19415645504" className="text-white hover:text-[#D59633] transition-colors">(941) 564-5504</a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-[#D59633] mr-3" />
              <a href="mailto:info@offthedockcharters.com" className="text-white hover:text-[#D59633] transition-colors">info@offthedockcharters.com</a>
            </div>
            <div className="mt-4">
              <Link 
                href="/contact"
                className="inline-block bg-[#D59633] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#c08629] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Main footer links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About & Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#D59633]">About Us</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#D59633] transition-colors flex items-center">
                  <span className="mr-2">›</span> About The Captain
                </Link>
              </li>
              <li>
                <Link href="/tour" className="text-gray-300 hover:text-[#D59633] transition-colors flex items-center">
                  <span className="mr-2">›</span> Boat & Fishing Experience
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-[#D59633] transition-colors flex items-center">
                  <span className="mr-2">›</span> Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-[#D59633] transition-colors flex items-center">
                  <span className="mr-2">›</span> Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[#D59633] transition-colors flex items-center">
                  <span className="mr-2">›</span> Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Fishing Information */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#D59633]">Fishing Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/species" className="text-gray-300 hover:text-[#D59633] transition-colors flex items-center">
                  <span className="mr-2">›</span> Fish Species
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="text-gray-300 hover:text-[#D59633] transition-colors flex items-center">
                  <span className="mr-2">›</span> Fishing Calendar
                </Link>
              </li>
              <li>
                <Link href="/tips" className="text-gray-300 hover:text-[#D59633] transition-colors flex items-center">
                  <span className="mr-2">›</span> Fishing Tips
                </Link>
              </li>
              <li>
                <Link href="/conservation" className="text-gray-300 hover:text-[#D59633] transition-colors flex items-center">
                  <span className="mr-2">›</span> Conservation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#D59633]">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-[#D59633] transition-colors flex items-center">
                  <span className="mr-2">›</span> Charter Packages
                </Link>
              </li>
              <li>
                <Link href="/gift" className="text-gray-300 hover:text-[#D59633] transition-colors flex items-center">
                  <span className="mr-2">›</span> Gift Certificates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#D59633] transition-colors flex items-center">
                  <span className="mr-2">›</span> Book a Charter
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Location */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#D59633]">Location</h4>
            <div className="text-gray-300 mb-4 flex items-start">
              <FaMapMarkerAlt className="text-[#D59633] mr-2 mt-1 flex-shrink-0" />
              <span>Marsh Harbor Marina<br />4103 13th Street Ct W, Palmetto, FL 34221</span>
            </div>
            <div className="rounded-lg overflow-hidden h-32 relative border border-gray-700 backlit-shadow">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.4023331092476!2d-82.5662553!3d27.5889498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c3400c0b2a8a6d%3A0x4e0f9c1e9a7c7d3a!2sMarsh%20Harbor%20Marina!5e0!3m2!1sen!2sus!4v1714073591830!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Marsh Harbor Marina Map"
                className="opacity-80"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
              <a 
                href="https://www.google.com/maps/place/Marsh+Harbor+Marina/@27.5889498,-82.5662553,17z/" 
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/70 text-white hover:text-[#D59633] px-3 py-1 rounded text-sm transition-colors border border-gray-700 hover:border-[#D59633]/50 z-10"
              >
                View Full Map
              </a>
            </div>
          </div>
        </div>

        {/* Payment methods and bottom links */}
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-sm font-semibold text-gray-400 mb-3">Payment Methods Accepted</h4>
              <div className="flex space-x-4 text-gray-500">
                <FaCreditCard className="h-6 w-6" title="Credit Card" />
                <span className="text-sm mt-1">Visa, MasterCard, Discover, American Express</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-[#D59633] transition-colors">Home</Link>
              <Link href="/contact" className="hover:text-[#D59633] transition-colors">Contact</Link>
              <Link href="/packages" className="hover:text-[#D59633] transition-colors">Packages</Link>
              <Link href="/about" className="hover:text-[#D59633] transition-colors">About</Link>
              <Link href="/privacy" className="hover:text-[#D59633] transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-[#D59633] transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-4 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Off The Dock Charters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
