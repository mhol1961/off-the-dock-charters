'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaAnchor, FaFish, FaCompass, FaShip, FaRuler, FaWater, FaInfoCircle, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

// Define the sections of the boat experience
interface ExperienceSection {
  id: string
  title: string
  description: string
  image: string
  features: {
    icon: JSX.Element
    title: string
    description: string
  }[]
}

const experienceSections: ExperienceSection[] = [
  {
    id: 'boat',
    title: 'The Boat',
    description: 'Our 24-foot bay boat is specially designed for inshore fishing in the shallow waters around Bradenton. With a shallow draft and wide beam, it provides a stable and comfortable platform for anglers of all experience levels.',
    image: '/images/boat_deck.jpg',
    features: [
      {
        icon: <FaShip className="text-yellow-500 text-2xl" />,
        title: '24-foot Bay Boat',
        description: 'Spacious deck with plenty of room for multiple anglers to cast and fight fish comfortably.'
      },
      {
        icon: <FaCompass className="text-yellow-500 text-2xl" />,
        title: 'State-of-the-art Electronics',
        description: 'GPS, fish finder, and marine radio to locate fish and ensure safety on the water.'
      },
      {
        icon: <FaRuler className="text-yellow-500 text-2xl" />,
        title: 'Shallow Draft Design',
        description: 'Allows access to skinny water flats and backwater areas where the big fish hide.'
      },
      {
        icon: <FaAnchor className="text-yellow-500 text-2xl" />,
        title: 'Power Pole Anchoring',
        description: 'Silent anchoring system to hold position without disturbing fish.'
      }
    ]
  },
  {
    id: 'fishing-spots',
    title: 'Prime Fishing Locations',
    description: 'Captain Chandler knows the local waters like the back of his hand. From mangrove shorelines to grass flats and deep channels, we\'ll take you to the best spots based on tides, weather, and seasonal fish movements.',
    image: '/images/fishing_spots.jpg',
    features: [
      {
        icon: <FaWater className="text-yellow-500 text-2xl" />,
        title: 'Grass Flats',
        description: 'Shallow areas with seagrass that attract baitfish and predators like trout and redfish.'
      },
      {
        icon: <FaWater className="text-yellow-500 text-2xl" />,
        title: 'Mangrove Shorelines',
        description: 'Perfect habitat for snook, redfish, and juvenile tarpon hiding among the roots.'
      },
      {
        icon: <FaWater className="text-yellow-500 text-2xl" />,
        title: 'Passes & Channels',
        description: 'Deeper water where larger predators like tarpon and cobia patrol for food.'
      },
      {
        icon: <FaWater className="text-yellow-500 text-2xl" />,
        title: 'Docks & Structure',
        description: 'Artificial habitats that provide shade and protection for various species.'
      }
    ]
  },
  {
    id: 'equipment',
    title: 'Premium Fishing Gear',
    description: 'We provide all the high-quality fishing equipment you need for a successful day on the water. From light tackle for trout to heavy gear for tarpon, we\'ve got you covered.',
    image: '/images/fishing_gear.jpg',
    features: [
      {
        icon: <FaFish className="text-yellow-500 text-2xl" />,
        title: 'Premium Rods & Reels',
        description: 'High-quality gear from top brands, properly maintained for smooth operation.'
      },
      {
        icon: <FaFish className="text-yellow-500 text-2xl" />,
        title: 'Live & Artificial Bait',
        description: 'Fresh live bait and a selection of proven artificial lures for local species.'
      },
      {
        icon: <FaFish className="text-yellow-500 text-2xl" />,
        title: 'Specialized Tackle',
        description: 'Species-specific tackle setups to maximize your chances of success.'
      },
      {
        icon: <FaFish className="text-yellow-500 text-2xl" />,
        title: 'Safety Equipment',
        description: 'Life jackets, first aid kit, and all required safety gear for peace of mind.'
      }
    ]
  },
  {
    id: 'experience',
    title: 'The Complete Experience',
    description: 'A day with Off The Dock Charters is more than just fishing—it\'s an immersive experience in the natural beauty of Florida\'s Gulf Coast. Learn about local ecology, improve your fishing skills, and create lasting memories.',
    image: '/images/fishing_experience.jpg',
    features: [
      {
        icon: <FaInfoCircle className="text-yellow-500 text-2xl" />,
        title: 'Expert Guidance',
        description: 'Captain Chandler shares local knowledge, fishing tips, and stories throughout your trip.'
      },
      {
        icon: <FaInfoCircle className="text-yellow-500 text-2xl" />,
        title: 'Wildlife Viewing',
        description: 'Spot dolphins, manatees, ospreys, and other local wildlife during your charter.'
      },
      {
        icon: <FaInfoCircle className="text-yellow-500 text-2xl" />,
        title: 'Photography',
        description: 'We\'ll capture your memorable catches so you can share your success stories.'
      },
      {
        icon: <FaInfoCircle className="text-yellow-500 text-2xl" />,
        title: 'Conservation',
        description: 'Learn about sustainable fishing practices and local conservation efforts.'
      }
    ]
  }
]

export default function BoatExperience() {
  const [activeSection, setActiveSection] = useState(0)
  
  const nextSection = () => {
    setActiveSection((prev) => (prev === experienceSections.length - 1 ? 0 : prev + 1))
  }
  
  const prevSection = () => {
    setActiveSection((prev) => (prev === 0 ? experienceSections.length - 1 : prev - 1))
  }
  
  const goToSection = (index: number) => {
    setActiveSection(index)
  }
  
  return (
    <div className="w-full bg-black">
      {/* Interactive Boat Experience Viewer */}
      <div className="relative w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[70vh] md:h-[80vh]"
          >
            <Image
              src={experienceSections[activeSection].image}
              alt={experienceSections[activeSection].title}
              fill
              className="object-cover"
              priority
            />
            
            {/* Overlay with content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 md:p-12">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 premium-heading gold-text">
                  {experienceSections[activeSection].title}
                </h2>
                <p className="text-lg text-gray-200 mb-8">
                  {experienceSections[activeSection].description}
                </p>
              </motion.div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSection}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-yellow-600/80 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
              aria-label="Previous section"
            >
              <FaArrowLeft className="text-white text-xl" />
            </button>
            
            <button
              onClick={nextSection}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-yellow-600/80 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 z-10"
              aria-label="Next section"
            >
              <FaArrowRight className="text-white text-xl" />
            </button>
          </motion.div>
        </AnimatePresence>
        
        {/* Section Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
          {experienceSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => goToSection(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeSection === index ? 'bg-yellow-500 w-12' : 'bg-white/50 hover:bg-white'
              }`}
              aria-label={`Go to ${section.title}`}
            />
          ))}
        </div>
      </div>
      
      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experienceSections[activeSection].features.map((feature, index) => (
            <motion.div
              key={`${experienceSections[activeSection].id}-feature-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="premium-card backlit-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* What to Bring Section */}
      <div className="container mx-auto px-4 py-12 mb-8">
        <div className="premium-card backlit-shadow p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 premium-heading text-center">
            What to Bring on Your Charter
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-yellow-500 text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Weather Protection</h4>
                <p className="text-gray-300">Sunscreen, hat, polarized sunglasses, and light, breathable clothing. A light rain jacket is also recommended.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 text-yellow-500 text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Food & Drinks</h4>
                <p className="text-gray-300">Water, snacks, and any beverages you'd like. We recommend bringing a small cooler with ice.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 text-yellow-500 text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Camera</h4>
                <p className="text-gray-300">For capturing your memorable catches and beautiful scenery. Waterproof cases are recommended.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="mt-1 text-yellow-500 text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Footwear</h4>
                <p className="text-gray-300">Non-marking, non-slip shoes. Boat shoes or athletic shoes with light-colored soles are ideal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
