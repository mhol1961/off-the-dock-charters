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
    image: '/images/snook_species.jpg',
    description: 'Snook are golden yellow fish with a distinctive black lateral line running from behind the gills to the tail. They have a sloping forehead and protruding lower jaw, making them easily identifiable.',
    seasonality: 'Best fishing is during warmer months from April through October. They move to deeper water during cooler months.',
    techniques: 'Live bait like pilchards, pinfish, and shrimp work well. Artificial lures such as jigs, plugs, and soft plastics are effective around structure.',
    averageSize: '5-15 pounds, with trophy fish reaching 20+ pounds.',
    regulations: 'Slot limit 28-33 inches. Closed season December-January and June-August. One fish per person per day.'
  },
  {
    id: 'redfish',
    name: 'Redfish (Red Drum)',
    scientificName: 'Sciaenops ocellatus',
    image: '/images/redfish_species.jpg',
    description: 'Redfish are identified by their copper-bronze coloration and characteristic black spot near the tail. They\'re known for their strong, steady fights and are a favorite among anglers.',
    seasonality: 'Available year-round, with fall being prime time when they school up in larger numbers.',
    techniques: 'Sight fishing in shallow water is popular. Live bait like pinfish, mullet, and shrimp are effective. Gold spoons, soft plastics, and topwater lures also produce well.',
    averageSize: '3-12 pounds inshore, with bull reds exceeding 30 pounds.',
    regulations: 'Slot limit typically 18-27 inches. Daily bag limits apply.'
  },
  {
    id: 'spotted-seatrout',
    name: 'Spotted Seatrout',
    scientificName: 'Cynoscion nebulosus',
    image: '/images/spotted_seatrout_species.jpg',
    description: 'Spotted seatrout are silver-bodied fish with distinctive black spots scattered across their sides and fins. They have two prominent canine teeth and are excellent table fare.',
    seasonality: 'Year-round species with best action in spring and fall. Summer fishing is good in deeper grass flats.',
    techniques: 'Live shrimp under popping cork is classic. Soft plastic jigs, topwater plugs, and suspend baits work well over grass flats.',
    averageSize: '1-3 pounds, with trophy fish over 5 pounds.',
    regulations: 'Slot limit 15-20 inches. One fish over 20 inches allowed. Daily bag limit varies by season.'
  },
  {
    id: 'tarpon',
    name: 'Tarpon',
    scientificName: 'Megalops atlanticus',
    image: '/images/tarpon_species.jpg',
    description: 'Known as the "Silver King," tarpon are prized for their spectacular aerial displays and challenging fights. These prehistoric fish have large, silver scales and can grow to massive sizes.',
    seasonality: 'Prime season is late spring through summer when they migrate along the coast.',
    techniques: 'Live bait such as crabs, pinfish, and mullet. Fly fishing is popular, as are artificial lures like swimbaits and DOA Baitbusters.',
    averageSize: '60-100 pounds, with trophy fish exceeding 200 pounds.',
    regulations: 'Tarpon over 40 inches must remain in the water. Tarpon tag required for possession. Primarily a catch-and-release fishery.'
  },
  {
    id: 'mangrove-snapper',
    name: 'Mangrove Snapper',
    scientificName: 'Lutjanus griseus',
    image: '/images/mangrove_snapper_species.jpg',
    description: 'Mangrove snapper are excellent eating fish with reddish coloration and yellow fins. They\'re found around structure and are known for their wariness and excellent eyesight.',
    seasonality: 'Available year-round, with best fishing during warmer months when they move into shallow water.',
    techniques: 'Live or dead shrimp, small pinfish, and cut bait. Light tackle and stealth are important as they\'re easily spooked.',
    averageSize: '1-3 pounds, with larger fish around deeper structure.',
    regulations: 'Minimum size 10 inches. Daily bag limit 5 per person. Check current regulations for seasons.'
  },
  {
    id: 'jack-crevalle',
    name: 'Jack Crevalle',
    scientificName: 'Caranx hippos',
    image: '/images/jack_crevalle_species.jpg',
    description: 'Jack crevalle are powerful, deep-bodied fish with incredible fighting ability. They\'re silver with a yellowish tint and known for their aggressive nature and strong runs.',
    seasonality: 'Year-round species with peak activity during warmer months. Often found in large schools.',
    techniques: 'Topwater plugs, jigs, and live bait work well. They\'re aggressive feeders and will hit a variety of lures and baits.',
    averageSize: '3-8 pounds, with larger specimens reaching 15+ pounds.',
    regulations: 'No minimum size or bag limit. Primarily caught as sport fish.'
  },
  {
    id: 'sheepshead',
    name: 'Sheepshead',
    scientificName: 'Archosargus probatocephalus',
    image: '/images/sheepshead_species.jpg',
    description: 'Sheepshead are easily recognized by their distinctive black vertical stripes on a silver body. They have human-like teeth adapted for crushing shellfish and are excellent table fare.',
    seasonality: 'Best fishing is during cooler months from November through April when they move inshore to spawn.',
    techniques: 'Fiddler crabs, shrimp, and oysters are top baits. Fish around structure like docks, bridges, and oyster bars with light tackle.',
    averageSize: '2-5 pounds, with trophy fish reaching 8+ pounds.',
    regulations: 'Minimum size 12 inches. Daily bag limit 8 per person. Check for seasonal closures.'
  },
  {
    id: 'flounder',
    name: 'Southern Flounder',
    scientificName: 'Paralichthys lethostigma',
    image: '/images/flounder_species.jpg',
    description: 'Southern flounder are flatfish that lie on the bottom with both eyes on one side of their head. They\'re masters of camouflage and excellent table fare.',
    seasonality: 'Fall is prime time when they move toward passes and inlets. Spring fishing can also be productive.',
    techniques: 'Live shrimp, mud minnows, and small jigs bounced along the bottom. Drift fishing over sandy areas is effective.',
    averageSize: '1-3 pounds, with trophy fish reaching 5+ pounds.',
    regulations: 'Minimum size 12 inches. Daily bag limit 5 per person. Check for seasonal closures during spawning.'
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
            <div className="aspect-[4/3] relative">
              <Image
                src={species.image}
                alt={species.name}
                fill
                unoptimized
                className="object-contain bg-gray-900 rounded-lg"
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
