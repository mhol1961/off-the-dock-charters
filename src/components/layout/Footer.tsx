import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="nav-bg mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-heading font-bold text-[#D59633] mb-4">
              <Link href="/" className="text-[#D59633] hover:text-[#c08629] font-bold text-xl focus:outline-none focus:ring-2 focus:ring-[#D59633]" aria-label="Off The Dock Charters Home">
                Off The Dock Charters
              </Link>
            </h3>
            <p className="text-gray-300">Premier inshore fishing charters in Bradenton, Florida.</p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link 
                href="/about" 
                className={`text-accent hover:text-accent-hover transition-colors px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D59633] hover:bg-white/10 ${
                  '/about' === '/about' ? 'font-semibold' : ''
                }`}
              >
                About Us
              </Link></li>
              <li><Link 
                href="/faq" 
                className={`text-accent hover:text-accent-hover transition-colors ${
                  '/faq' === '/faq' ? 'font-semibold' : ''
                }`}
              >
                FAQs
              </Link></li>
              <li><Link 
                href="/gallery" 
                className={`text-accent hover:text-accent-hover transition-colors ${
                  '/gallery' === '/gallery' ? 'font-semibold' : ''
                }`}
              >
                Gallery
              </Link></li>
              <li><Link 
                href="/contact" 
                className={`text-accent hover:text-accent-hover transition-colors ${
                  '/contact' === '/contact' ? 'font-semibold' : ''
                }`}
              >
                Contact
              </Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>Bradenton, Florida</li>
              <li><a href="tel:+1234567890" className="text-accent hover:text-accent-hover transition-colors">Phone: (123) 456-7890</a></li>
              <li><a href="mailto:info@offthedockcharters.com" className="text-accent hover:text-accent-hover transition-colors">info@offthedockcharters.com</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/chandllerbrown?igsh=YzgyN2ViajNmMWRu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D59633] hover:bg-white/10" aria-label="Follow us on Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            {new Date().getFullYear()} Off The Dock Charters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
