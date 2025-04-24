'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

interface NavLink {
  href: string
  label: string
  children?: NavLink[]
}

const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { 
    href: '#', 
    label: 'Fishing Info',
    children: [
      { href: '/species', label: 'Fish Species' },
      { href: '/calendar', label: 'Fishing Calendar' },
      { href: '/tips', label: 'Fishing Tips' },
      { href: '/conservation', label: 'Conservation' },
    ] 
  },
  { href: '/packages', label: 'Packages' },
  { 
    href: '#', 
    label: 'Experience',
    children: [
      { href: '/tour', label: 'Boat & Fishing Experience' },
      { href: '/gallery', label: 'Photo Gallery' },
      { href: '/testimonials', label: 'Testimonials' },
    ] 
  },
  { href: '/gift', label: 'Gift Certificates' },
  { href: '/faq', label: 'FAQs' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})

  const handleClickOutside = (event: MouseEvent) => {
    if (openDropdown && !dropdownRefs.current[openDropdown]?.contains(event.target as Node)) {
      setOpenDropdown(null)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openDropdown])

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href) && href !== '#'
  }

  const isChildActive = (children?: NavLink[]) => {
    if (!children) return false
    return children.some(child => isActive(child.href))
  }

  const renderDesktopLink = (link: NavLink) => {
    if (link.children) {
      return (
        <div 
          key={link.label} 
          className="relative" 
          ref={(el) => { dropdownRefs.current[link.label] = el }}
        >
          <button
            onClick={() => toggleDropdown(link.label)}
            className={`flex items-center text-white hover:text-[#D59633] transition-colors px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D59633] hover:bg-white/10 ${isChildActive(link.children) ? 'text-[#D59633] font-medium' : ''}`}
            aria-expanded={openDropdown === link.label}
          >
            {link.label}
            {openDropdown === link.label ? (
              <FaChevronUp className="ml-1 h-3 w-3" />
            ) : (
              <FaChevronDown className="ml-1 h-3 w-3" />
            )}
          </button>
          {openDropdown === link.label && (
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-black/95 border border-[#D59633]/30 overflow-hidden z-50">
              <div className="py-1">
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`block px-4 py-2 text-sm ${isActive(child.href) ? 'bg-[#D59633]/20 text-[#D59633] font-medium' : 'text-white hover:bg-black hover:text-[#D59633]'} transition-colors`}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        className={`text-white hover:text-[#D59633] transition-colors px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D59633] hover:bg-white/10 ${isActive(link.href) ? 'text-[#D59633] font-medium' : ''}`}
      >
        {link.label}
      </Link>
    )
  }

  const renderMobileLink = (link: NavLink, depth = 0) => {
    if (link.children) {
      return (
        <div key={link.label} className="w-full">
          <button
            onClick={() => toggleDropdown(link.label)}
            className={`flex items-center justify-between w-full text-left text-white hover:text-[#D59633] transition-colors px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D59633] hover:bg-white/10 ${isChildActive(link.children) ? 'text-[#D59633] font-medium' : ''}`}
            style={{ paddingLeft: `${depth * 12 + 16}px` }}
          >
            {link.label}
            {openDropdown === link.label ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openDropdown === link.label && (
            <div className="border-l-2 border-[#D59633]/30 ml-4">
              {link.children.map((child) => renderMobileLink(child, depth + 1))}
            </div>
          )}
        </div>
      )
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        className={`block w-full text-white hover:text-[#D59633] transition-colors px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D59633] hover:bg-white/10 ${isActive(link.href) ? 'text-[#D59633] font-medium' : ''}`}
        style={{ paddingLeft: `${depth * 12 + 16}px` }}
        onClick={() => setIsMenuOpen(false)}
      >
        {link.label}
      </Link>
    )
  }

  return (
    <nav className="bg-black/90 py-2 px-4 md:px-8 sticky top-0 z-50 shadow-xl shadow-black/30 border-b border-[#D59633]/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative">
            <Image
              src="/images/Logo_OTD_Charters.png"
              alt="Off The Dock Charters Logo"
              width={160}  /* Increased size for better visibility */
              height={160}
              className="object-contain py-1"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map(renderDesktopLink)}
          
          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="ml-2 bg-[#D59633] hover:bg-[#c08629] text-black font-medium px-4 py-2 rounded-md transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D59633] flex items-center"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-[#D59633] p-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-black/95 rounded-lg border border-[#D59633]/20 shadow-xl overflow-hidden">
          <div className="flex flex-col py-2">
            {navLinks.map(link => renderMobileLink(link))}
          </div>
        </div>
      )}
    </nav>
  )
}
