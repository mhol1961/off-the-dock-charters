'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaWater, FaWind, FaTemperatureHigh, FaSun, FaMoon, FaCloudSun, FaCloudMoon, FaCloud, FaCloudRain, FaCloudShowersHeavy, FaBolt, FaSnowflake } from 'react-icons/fa'
import LoadingSpinner from '../ui/LoadingSpinner'

interface WeatherData {
  temperature: number
  condition: string
  windSpeed: number
  windDirection: string
  tideStatus: string
  icon: string
  feelsLike: number
  humidity: number
  pressure: number
  visibility: number
  sunrise: string
  sunset: string
  moonPhase: string
  uvIndex: number
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // This is a mock implementation - in a real app, you would fetch from a weather API
    // like OpenWeatherMap, Weather API, or similar
    const fetchWeatherData = () => {
      setLoading(true)
      
      // Simulate API call with timeout
      setTimeout(() => {
        // Mock data - in production this would come from a real API
        const mockWeatherData: WeatherData = {
          temperature: 82,
          condition: 'Partly Cloudy',
          windSpeed: 8,
          windDirection: 'SE',
          tideStatus: 'Incoming • High tide at 2:45 PM',
          icon: 'cloud-sun',
          feelsLike: 85,
          humidity: 65,
          pressure: 1012,
          visibility: 10,
          sunrise: '6:45 AM',
          sunset: '8:15 PM',
          moonPhase: 'Waxing Gibbous',
          uvIndex: 7
        }
        
        setWeather(mockWeatherData)
        setLoading(false)
      }, 1500)
    }
    
    fetchWeatherData()
  }, [])
  
  const getWeatherIcon = (iconCode: string) => {
    switch(iconCode) {
      case 'clear-day':
        return <FaSun className="text-yellow-400 text-3xl" />
      case 'clear-night':
        return <FaMoon className="text-gray-300 text-3xl" />
      case 'cloud-sun':
        return <FaCloudSun className="text-yellow-300 text-3xl" />
      case 'cloud-moon':
        return <FaCloudMoon className="text-gray-300 text-3xl" />
      case 'clouds':
        return <FaCloud className="text-gray-400 text-3xl" />
      case 'rain':
        return <FaCloudRain className="text-blue-300 text-3xl" />
      case 'heavy-rain':
        return <FaCloudShowersHeavy className="text-blue-400 text-3xl" />
      case 'thunderstorm':
        return <FaBolt className="text-yellow-300 text-3xl" />
      case 'snow':
        return <FaSnowflake className="text-blue-200 text-3xl" />
      default:
        return <FaSun className="text-yellow-400 text-3xl" />
    }
  }

  if (loading) {
    return (
      <div className="bg-black/70 rounded-2xl p-6 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 h-full flex flex-col items-center justify-center min-h-[200px]">
        <LoadingSpinner size="medium" color="primary" />
        <p className="text-gray-400 mt-4">Loading fishing conditions...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-black/70 rounded-2xl p-6 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 h-full flex flex-col items-center justify-center min-h-[200px]">
        <p className="text-red-400">Unable to load weather data</p>
      </div>
    )
  }

  if (!weather) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black/70 rounded-2xl p-6 shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.25)] transition-all duration-300"
    >
      <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
        <span className="mr-2">Bradenton Fishing Conditions</span>
        {getWeatherIcon(weather.icon)}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div>
          <div className="flex items-center mb-4">
            <FaTemperatureHigh className="text-yellow-500 mr-3 text-xl" />
            <div>
              <p className="text-3xl font-bold text-white">{weather.temperature}°F</p>
              <p className="text-sm text-gray-400">Feels like {weather.feelsLike}°F • {weather.condition}</p>
            </div>
          </div>
          
          <div className="flex items-center mb-4">
            <FaWind className="text-yellow-500 mr-3 text-xl" />
            <div>
              <p className="text-lg font-medium text-white">{weather.windSpeed} mph {weather.windDirection}</p>
              <p className="text-sm text-gray-400">Wind speed and direction</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <FaWater className="text-yellow-500 mr-3 text-xl" />
            <div>
              <p className="text-lg font-medium text-white">{weather.tideStatus}</p>
              <p className="text-sm text-gray-400">Current tide information</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black/40 p-3 rounded-lg">
              <p className="text-xs text-gray-400">Humidity</p>
              <p className="text-lg font-medium text-white">{weather.humidity}%</p>
            </div>
            <div className="bg-black/40 p-3 rounded-lg">
              <p className="text-xs text-gray-400">UV Index</p>
              <p className="text-lg font-medium text-white">{weather.uvIndex} ({weather.uvIndex > 5 ? 'High' : 'Moderate'})</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black/40 p-3 rounded-lg">
              <p className="text-xs text-gray-400">Sunrise</p>
              <p className="text-lg font-medium text-white">{weather.sunrise}</p>
            </div>
            <div className="bg-black/40 p-3 rounded-lg">
              <p className="text-xs text-gray-400">Sunset</p>
              <p className="text-lg font-medium text-white">{weather.sunset}</p>
            </div>
          </div>
          
          <div className="bg-black/40 p-3 rounded-lg">
            <p className="text-xs text-gray-400">Moon Phase</p>
            <p className="text-lg font-medium text-white">{weather.moonPhase}</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-700/50">
        <p className="text-sm text-gray-400">
          <span className="text-yellow-500 font-medium">Fishing Forecast:</span> Current conditions suggest good activity for snook and redfish around mangroves and oyster bars. Incoming tide will improve feeding patterns.
        </p>
      </div>
    </motion.div>
  )
}
