'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaFish, FaCalendarAlt, FaRuler, FaInfoCircle } from 'react-icons/fa'

interface FishSpecies {
  id: string
  name: string
  scientificName: string
  image: string
  description: string
  seasonality: string
  techniques: string
  averageSize: string
  regulations: string
}

const fishSpecies: FishSpecies[] = [
  {
    id: 'snook',
    name: 'Snook',
    scientificName: 'Centropomus undecimalis',
    image: '/images/Guy_Snook_gallery.png',
    description: 'Snook are one of Florida\'s most sought-after inshore game fish, known for their explosive strikes and acrobatic fights. They have a distinctive lateral line and protruding lower jaw.',
    seasonality: 'Best fishing is spring through fall, with peak activity during summer spawning season. Winter fishing can be productive in warmer, deeper waters.',
    techniques: 'Live bait such as pilchards, pinfish, and shrimp work well. Artificial lures like soft plastics, jerkbaits, and topwater plugs are also effective when worked around mangroves, docks, and other structures.',
    averageSize: '5-15 pounds, with trophy specimens exceeding 30 pounds.',
    regulations: 'Seasonal closures apply. Slot limit typically 28-33 inches. Check current regulations before your trip.'
  },
  {
    id: 'redfish',
    name: 'Redfish (Red Drum)',
    scientificName: 'Sciaenops ocellatus',
    image: '/images/Two_guys_Redfish_gallery.png',
    description: 'Redfish are identified by their copper-bronze coloration and characteristic black spot on the tail. They\'re known for their strong, steady fights and are a favorite among anglers.',
    seasonality: 'Available year-round, with fall being prime time when they school up in larger numbers.',
    techniques: 'Sight fishing in shallow water is popular. Live bait like pinfish, mullet, and shrimp are effective. Gold spoons, soft plastics, and topwater lures also produce well.',
    averageSize: '3-12 pounds inshore, with bull reds exceeding 30 pounds.',
    regulations: 'Slot limit typically 18-27 inches. Daily bag limits apply.'
  },
  {
    id: 'trout',
    name: 'Spotted Seatrout',
    scientificName: 'Cynoscion nebulosus',
    image: '/images/Young_Girl_Trout_gallery.png',
    description: 'Spotted seatrout are distinguished by their silvery color with black spots on their back and tail. They have prominent canine teeth and are a staple of inshore fishing.',
    seasonality: 'Available year-round, with spring and fall offering the best fishing opportunities.',
    techniques: 'Live shrimp under a popping cork is a classic approach. Soft plastic jigs, topwater plugs at dawn/dusk, and suspending lures are all effective.',
    averageSize: '1-3 pounds, with gator trout exceeding 5 pounds.',
    regulations: 'Slot limit typically 15-19 inches. Seasonal closures may apply.'
  },
  {
    id: 'tarpon',
    name: 'Tarpon',
    scientificName: 'Megalops atlanticus',
    image: '/images/Two_guys_big_tarpon_gallery.png',
    description: 'Known as the "Silver King," tarpon are prized for their spectacular aerial displays and challenging fights. These prehistoric fish have large, silver scales and can grow to massive sizes.',
    seasonality: 'Prime season is late spring through summer when they migrate along the coast.',
    techniques: 'Live bait such as crabs, pinfish, and mullet. Fly fishing is popular, as are artificial lures like swimbaits and DOA Baitbusters.',
    averageSize: '60-100 pounds, with trophy fish exceeding 200 pounds.',
    regulations: 'Tarpon over 40 inches must remain in the water. Tarpon tag required for possession. Primarily a catch-and-release fishery.'
  },
  {
    id: 'snapper',
    name: 'Mangrove Snapper',
    scientificName: 'Lutjanus griseus',
    image: '/images/Man_Large_mangrove_snapper_gallery.png',
    description: 'Mangrove snapper are known for their reddish-brown color, canine teeth, and wary nature. They\'re excellent table fare and provide a good challenge for anglers.',
    seasonality: 'Available year-round, with summer offering the best fishing as they gather to spawn.',
    techniques: 'Light tackle with live shrimp, small pinfish, or pilchards. Fluorocarbon leaders are essential due to their sharp eyesight.',
    averageSize: '1-3 pounds inshore, with larger specimens found near offshore structures.',
    regulations: 'Minimum size typically 10 inches. Bag limits apply.'
  },
  {
    id: 'jack',
    name: 'Jack Crevalle',
    scientificName: 'Caranx hippos',
    image: '/images/Lady_large_jack_gallery.png',
    description: 'Jack crevalle are powerful, aggressive predators known for their stamina and fighting ability. They have a deep body with a yellow-tinted tail and a black spot on their gill cover.',
    seasonality: 'Available year-round, often found in schools pursuing baitfish.',
    techniques: 'Fast-moving lures like spoons and topwater plugs. Live bait such as pinfish and threadfin herring are also effective.',
    averageSize: '3-10 pounds inshore, with specimens exceeding 20 pounds.',
    regulations: 'No bag or size limits, but primarily a catch-and-release species due to their strong flavor.'
  }
]

export default function SpeciesGallery() {
  const [selectedSpecies, setSelectedSpecies] = useState<FishSpecies | null>(null)
  const [activeTab, setActiveTab] = useState<string>('description')

  const handleSpeciesClick = (species: FishSpecies) => {
    setSelectedSpecies(species)
    setActiveTab('description')
  }

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {fishSpecies.map((species) => (
          <motion.div
            key={species.id}
            whileHover={{ scale: 1.05, y: -8, boxShadow: '0 15px 30px rgba(213, 150, 51, 0.3)' }}
            transition={{ duration: 0.3 }}
            className={`relative cursor-pointer overflow-hidden rounded-xl shadow-lg backlit-shadow border-2 ${
              selectedSpecies?.id === species.id ? 'border-yellow-500' : 'border-gray-800'
            }`}
            onClick={() => handleSpeciesClick(species)}
          >
            <div className="aspect-square relative">
              <Image
                src={species.image}
                alt={species.name}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-2">
                <h3 className="text-white font-bold text-center w-full text-sm md:text-base">
                  {species.name}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedSpecies && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-black/70 rounded-2xl p-6 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 mb-8 premium-card backlit-shadow"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 relative aspect-square md:aspect-auto rounded-xl overflow-hidden shadow-lg backlit-shadow">
              <div className="absolute inset-0 border-2 border-yellow-600/30 rounded-xl z-10 pointer-events-none" />
              <Image
                src={selectedSpecies.image}
                alt={selectedSpecies.name}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-1/4 z-10" />
              <div className="absolute bottom-3 left-3 z-10 px-3 py-1 bg-black/70 rounded-lg border border-yellow-600/30 text-xs text-yellow-400 font-medium">
                {selectedSpecies.name}
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-bold text-white">{selectedSpecies.name}</h2>
                  <p className="text-yellow-400 italic">{selectedSpecies.scientificName}</p>
                </div>
              </div>
              
              <div className="flex border-b border-gray-700 mb-4">
                <button
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === 'description' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('description')}
                >
                  <FaInfoCircle className="inline mr-2" />
                  Description
                </button>
                <button
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === 'seasonality' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('seasonality')}
                >
                  <FaCalendarAlt className="inline mr-2" />
                  Seasonality
                </button>
                <button
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === 'techniques' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('techniques')}
                >
                  <FaFish className="inline mr-2" />
                  Techniques
                </button>
                <button
                  className={`px-4 py-2 font-medium text-sm ${
                    activeTab === 'regulations' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-400 hover:text-white'
                  }`}
                  onClick={() => setActiveTab('regulations')}
                >
                  <FaRuler className="inline mr-2" />
                  Size & Regulations
                </button>
              </div>
              
              <div className="text-gray-300">
                {activeTab === 'description' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-black/40 rounded-xl border border-gray-700/50 shadow-inner backlit-shadow"
                  >
                    <p>{selectedSpecies.description}</p>
                  </motion.div>
                )}
                
                {activeTab === 'seasonality' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-black/40 rounded-xl border border-gray-700/50 shadow-inner backlit-shadow"
                  >
                    <p>{selectedSpecies.seasonality}</p>
                  </motion.div>
                )}
                
                {activeTab === 'techniques' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-black/40 rounded-xl border border-gray-700/50 shadow-inner backlit-shadow"
                  >
                    <p>{selectedSpecies.techniques}</p>
                  </motion.div>
                )}
                
                {activeTab === 'regulations' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 bg-black/40 rounded-xl border border-gray-700/50 shadow-inner backlit-shadow"
                  >
                    <p className="mb-2"><strong className="text-yellow-400">Average Size:</strong> {selectedSpecies.averageSize}</p>
                    <p><strong className="text-yellow-400">Regulations:</strong> {selectedSpecies.regulations}</p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      {!selectedSpecies && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center p-8 bg-black/50 rounded-xl border border-yellow-600/30 premium-card backlit-shadow"
        >
          <div className="relative">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-black/80 rounded-full flex items-center justify-center border-2 border-yellow-500 shadow-lg shadow-yellow-500/30">
              <FaFish className="text-yellow-400 text-4xl" />
            </div>
          </div>
          <p className="text-gray-300 mt-10">Select a fish species above to view detailed information about<br />seasonal patterns, fishing techniques, and regulations</p>
          <div className="mt-4 flex justify-center gap-2">
            {fishSpecies.map((species) => (
              <motion.div 
                key={species.id}
                whileHover={{ scale: 1.2 }}
                className="w-3 h-3 rounded-full bg-gray-700 hover:bg-yellow-500 cursor-pointer"
                onClick={() => handleSpeciesClick(species)}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
