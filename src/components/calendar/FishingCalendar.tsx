'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFish, FaCalendarAlt } from 'react-icons/fa'

interface FishActivity {
  species: string
  jan: number
  feb: number
  mar: number
  apr: number
  may: number
  jun: number
  jul: number
  aug: number
  sep: number
  oct: number
  nov: number
  dec: number
  color: string
}

const fishingCalendar: FishActivity[] = [
  {
    species: 'Snook',
    jan: 1, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, 
    jul: 5, aug: 4, sep: 4, oct: 3, nov: 2, dec: 1,
    color: 'bg-yellow-500'
  },
  {
    species: 'Redfish',
    jan: 3, feb: 3, mar: 3, apr: 4, may: 4, jun: 4, 
    jul: 4, aug: 4, sep: 5, oct: 5, nov: 4, dec: 3,
    color: 'bg-red-500'
  },
  {
    species: 'Spotted Seatrout',
    jan: 3, feb: 3, mar: 4, apr: 5, may: 4, jun: 3, 
    jul: 3, aug: 3, sep: 4, oct: 5, nov: 4, dec: 3,
    color: 'bg-green-500'
  },
  {
    species: 'Tarpon',
    jan: 0, feb: 0, mar: 1, apr: 2, may: 4, jun: 5, 
    jul: 5, aug: 4, sep: 3, oct: 2, nov: 1, dec: 0,
    color: 'bg-blue-500'
  },
  {
    species: 'Mangrove Snapper',
    jan: 2, feb: 2, mar: 3, apr: 3, may: 4, jun: 5, 
    jul: 5, aug: 5, sep: 4, oct: 3, nov: 3, dec: 2,
    color: 'bg-orange-500'
  },
  {
    species: 'Jack Crevalle',
    jan: 3, feb: 3, mar: 3, apr: 4, may: 4, jun: 4, 
    jul: 4, aug: 4, sep: 4, oct: 4, nov: 3, dec: 3,
    color: 'bg-purple-500'
  },
  {
    species: 'Sheepshead',
    jan: 5, feb: 5, mar: 4, apr: 3, may: 2, jun: 1, 
    jul: 1, aug: 1, sep: 2, oct: 3, nov: 4, dec: 5,
    color: 'bg-gray-500'
  },
  {
    species: 'Flounder',
    jan: 2, feb: 2, mar: 2, apr: 3, may: 3, jun: 3, 
    jul: 3, aug: 3, sep: 4, oct: 5, nov: 4, dec: 3,
    color: 'bg-amber-500'
  }
]

const months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

const activityLevels = [
  { level: 0, label: 'Not Available', color: 'bg-gray-800' },
  { level: 1, label: 'Poor', color: 'bg-gray-700' },
  { level: 2, label: 'Fair', color: 'bg-gray-600' },
  { level: 3, label: 'Good', color: 'bg-gray-500' },
  { level: 4, label: 'Very Good', color: 'bg-gray-400' },
  { level: 5, label: 'Excellent', color: 'bg-gray-300' }
]

export default function FishingCalendar() {
  const [selectedMonth, setSelectedMonth] = useState<number | null>(new Date().getMonth())
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null)
  
  const getActivityColor = (level: number) => {
    switch(level) {
      case 0: return 'bg-gray-800 border-gray-700'
      case 1: return 'bg-gray-700 border-gray-600'
      case 2: return 'bg-yellow-700/70 border-yellow-600'
      case 3: return 'bg-yellow-600/70 border-yellow-500'
      case 4: return 'bg-yellow-500/70 border-yellow-400'
      case 5: return 'bg-yellow-400/70 border-yellow-300'
      default: return 'bg-gray-800 border-gray-700'
    }
  }
  
  const getActivityLabel = (level: number) => {
    switch(level) {
      case 0: return 'Not Available'
      case 1: return 'Poor'
      case 2: return 'Fair'
      case 3: return 'Good'
      case 4: return 'Very Good'
      case 5: return 'Excellent'
      default: return 'Unknown'
    }
  }
  
  const getMonthActivity = (month: number) => {
    return fishingCalendar
      .filter(fish => selectedSpecies ? fish.species === selectedSpecies : true)
      .map(fish => {
        const monthValue = fish[months[month].toLowerCase() as keyof FishActivity] as number
        return {
          species: fish.species,
          activity: monthValue,
          color: fish.color
        }
      })
      .sort((a, b) => b.activity - a.activity)
  }
  
  const getBestSpeciesForMonth = (month: number) => {
    return fishingCalendar
      .map(fish => ({
        species: fish.species,
        activity: fish[months[month].toLowerCase() as keyof FishActivity] as number,
        color: fish.color
      }))
      .filter(fish => fish.activity >= 4)
      .sort((a, b) => b.activity - a.activity)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/70 rounded-2xl p-6 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.25)] transition-all duration-300"
    >
      <div className="flex items-center mb-6">
        <FaCalendarAlt className="text-yellow-500 text-2xl mr-3" />
        <h2 className="text-2xl font-bold text-white">Seasonal Fishing Calendar</h2>
      </div>
      
      <div className="mb-8">
        <p className="text-gray-300 mb-4">
          This interactive calendar shows the best times to target specific species in the Bradenton area. 
          Click on a month to see which fish are most active, or select a species to track its activity throughout the year.
        </p>
        
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-6">
          {months.map((month, index) => (
            <button
              key={month}
              onClick={() => setSelectedMonth(index)}
              className={`py-2 px-3 rounded-lg text-center transition-all duration-200 ${
                selectedMonth === index 
                  ? 'bg-yellow-600 text-white font-medium shadow-lg' 
                  : 'bg-black/50 text-gray-300 hover:bg-black/70 border border-gray-700'
              }`}
            >
              {month}
            </button>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedSpecies(null)}
            className={`py-1 px-3 rounded-lg text-sm transition-all duration-200 ${
              selectedSpecies === null 
                ? 'bg-yellow-600 text-white font-medium' 
                : 'bg-black/50 text-gray-300 hover:bg-black/70 border border-gray-700'
            }`}
          >
            All Species
          </button>
          
          {fishingCalendar.map(fish => (
            <button
              key={fish.species}
              onClick={() => setSelectedSpecies(fish.species)}
              className={`py-1 px-3 rounded-lg text-sm transition-all duration-200 flex items-center ${
                selectedSpecies === fish.species 
                  ? 'bg-yellow-600 text-white font-medium' 
                  : 'bg-black/50 text-gray-300 hover:bg-black/70 border border-gray-700'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${fish.color} mr-2`}></span>
              {fish.species}
            </button>
          ))}
        </div>
      </div>
      
      {selectedMonth !== null && (
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            {selectedSpecies 
              ? `${selectedSpecies} Activity by Month` 
              : `Fishing in ${months[selectedMonth]}`}
          </h3>
          
          {selectedSpecies ? (
            <div className="grid grid-cols-12 gap-1 mb-6">
              {months.map((month, index) => {
                const fish = fishingCalendar.find(f => f.species === selectedSpecies)
                if (!fish) return null
                
                const activity = fish[month.toLowerCase() as keyof FishActivity] as number
                
                return (
                  <div 
                    key={month} 
                    className={`h-16 rounded-lg ${getActivityColor(activity)} border flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 ${selectedMonth === index ? 'ring-2 ring-yellow-500' : ''}`}
                    onClick={() => setSelectedMonth(index)}
                  >
                    <span className="text-xs font-medium text-white">{month}</span>
                    <div className="w-full h-1 my-1 bg-black/20"></div>
                    <span className="text-xs text-white">{getActivityLabel(activity)}</span>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="space-y-3 mb-6">
              {getMonthActivity(selectedMonth).map(fish => (
                <div 
                  key={fish.species}
                  className="flex items-center bg-black/40 rounded-lg p-3 cursor-pointer hover:bg-black/60 transition-all duration-200"
                  onClick={() => setSelectedSpecies(fish.species)}
                >
                  <div className="flex-grow">
                    <div className="flex items-center">
                      <span className={`w-3 h-3 rounded-full ${fish.color} mr-2`}></span>
                      <span className="font-medium text-white">{fish.species}</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-lg text-xs font-medium text-white ${getActivityColor(fish.activity)}`}>
                    {getActivityLabel(fish.activity)}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="bg-black/40 rounded-xl p-4 border border-yellow-600/20">
            <h4 className="text-lg font-medium text-white mb-2 flex items-center">
              <FaFish className="text-yellow-500 mr-2" />
              Captain's Recommendation
            </h4>
            
            {selectedSpecies ? (
              <div>
                <p className="text-gray-300">
                  {(() => {
                    const fish = fishingCalendar.find(f => f.species === selectedSpecies)
                    if (!fish) return ''
                    
                    const currentMonthActivity = fish[months[selectedMonth!].toLowerCase() as keyof FishActivity] as number
                    
                    if (currentMonthActivity >= 4) {
                      return `This is a great time to target ${selectedSpecies}! They're very active during ${months[selectedMonth!]}.`
                    } else if (currentMonthActivity >= 3) {
                      return `${months[selectedMonth!]} offers good opportunities for catching ${selectedSpecies}.`
                    } else if (currentMonthActivity >= 2) {
                      return `${selectedSpecies} can be caught in ${months[selectedMonth!]}, but they're not at their peak activity.`
                    } else if (currentMonthActivity >= 1) {
                      return `${months[selectedMonth!]} is not the best time for ${selectedSpecies}, but they can still be caught with the right approach.`
                    } else {
                      return `${selectedSpecies} are typically not available during ${months[selectedMonth!]}.`
                    }
                  })()}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-gray-300 mb-3">
                  {getBestSpeciesForMonth(selectedMonth).length > 0 
                    ? `${months[selectedMonth]} is an excellent time to target:` 
                    : `${months[selectedMonth]} offers varied fishing opportunities, but no species are at peak activity.`}
                </p>
                
                {getBestSpeciesForMonth(selectedMonth).length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {getBestSpeciesForMonth(selectedMonth).map(fish => (
                      <span 
                        key={fish.species}
                        className="inline-flex items-center px-3 py-1 rounded-lg bg-black/60 border border-yellow-600/30 text-white text-sm cursor-pointer hover:bg-black/80 transition-all duration-200"
                        onClick={() => setSelectedSpecies(fish.species)}
                      >
                        <span className={`w-2 h-2 rounded-full ${fish.color} mr-2`}></span>
                        {fish.species}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  )
}
