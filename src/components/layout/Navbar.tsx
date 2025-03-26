'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/Logo_OTD_Charters.png"
            alt="Off The Dock Charters"
            width={105}
            height={105}
            className="object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-x-8">
          <Link 
            href="/" 
            className={`text-white hover:text-yellow-400 transition-colors ${pathname === '/' ? 'text-yellow-400' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`text-white hover:text-yellow-400 transition-colors ${pathname === '/about' ? 'text-yellow-400' : ''}`}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`text-white hover:text-yellow-400 transition-colors ${pathname === '/services' ? 'text-yellow-400' : ''}`}
          >
            Services
          </Link>
          <Link 
            href="/packages" 
            className={`text-white hover:text-yellow-400 transition-colors ${pathname === '/packages' ? 'text-yellow-400' : ''}`}
          >
            Packages
          </Link>
          <Link 
            href="/gallery" 
            className={`text-white hover:text-yellow-400 transition-colors ${pathname === '/gallery' ? 'text-yellow-400' : ''}`}
          >
            Gallery
          </Link>
          <Link 
            href="/testimonials" 
            className={`text-white hover:text-yellow-400 transition-colors ${pathname === '/testimonials' ? 'text-yellow-400' : ''}`}
          >
            Testimonials
          </Link>
          <Link 
            href="/contact" 
            className={`text-white hover:text-yellow-400 transition-colors ${pathname === '/contact' ? 'text-yellow-400' : ''}`}
          >
            Contact
          </Link>
          <Link 
            href="/contact" 
            className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
