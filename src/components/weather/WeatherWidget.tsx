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
    const fetchWeatherData = async () => {
      setLoading(true)
      setError(null)
      
      try {
        // Bradenton, FL coordinates
        const lat = 27.4989
        const lon = -82.5748
        
        // Using OpenWeatherMap API - you'll need to add your API key to environment variables
        const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || 'demo_key'
        
        if (API_KEY === 'demo_key') {
          // Fallback to realistic mock data when no API key is provided
          const mockWeatherData: WeatherData = {
            temperature: Math.round(75 + Math.random() * 15), // 75-90°F range
            condition: ['Sunny', 'Partly Cloudy', 'Cloudy', 'Light Rain'][Math.floor(Math.random() * 4)],
            windSpeed: Math.round(5 + Math.random() * 10), // 5-15 mph
            windDirection: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][Math.floor(Math.random() * 8)],
            tideStatus: 'Incoming • High tide at 2:45 PM',
            icon: 'cloud-sun',
            feelsLike: Math.round(77 + Math.random() * 15),
            humidity: Math.round(60 + Math.random() * 25),
            pressure: Math.round(1008 + Math.random() * 8),
            visibility: Math.round(8 + Math.random() * 4),
            sunrise: '6:45 AM',
            sunset: '8:15 PM',
            moonPhase: 'Waxing Gibbous',
            uvIndex: Math.round(3 + Math.random() * 6)
          }
          
          setWeather(mockWeatherData)
          setLoading(false)
          return
        }
        
        // Fetch current weather
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
        )
        
        if (!weatherResponse.ok) {
          throw new Error('Weather data unavailable')
        }
        
        const weatherData = await weatherResponse.json()
        
        // Convert wind direction from degrees to cardinal direction
        const getWindDirection = (degrees: number) => {
          const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
          return directions[Math.round(degrees / 22.5) % 16]
        }
        
        // Map OpenWeather icons to our icon system
        const mapWeatherIcon = (iconCode: string) => {
          const iconMap: { [key: string]: string } = {
            '01d': 'clear-day',
            '01n': 'clear-night',
            '02d': 'cloud-sun',
            '02n': 'cloud-moon',
            '03d': 'clouds',
            '03n': 'clouds',
            '04d': 'clouds',
            '04n': 'clouds',
            '09d': 'heavy-rain',
            '09n': 'heavy-rain',
            '10d': 'rain',
            '10n': 'rain',
            '11d': 'thunderstorm',
            '11n': 'thunderstorm',
            '13d': 'snow',
            '13n': 'snow'
          }
          return iconMap[iconCode] || 'clear-day'
        }
        
        // Format time from Unix timestamp
        const formatTime = (timestamp: number) => {
          return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          })
        }
        
        // Calculate moon phase (simplified)
        const getMoonPhase = () => {
          const phases = ['New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent']
          const now = new Date()
          const dayOfMonth = now.getDate()
          const phaseIndex = Math.floor((dayOfMonth / 29.5) * 8) % 8
          return phases[phaseIndex]
        }
        
        const processedWeatherData: WeatherData = {
          temperature: Math.round(weatherData.main.temp),
          condition: weatherData.weather[0].description.replace(/\b\w/g, (l: string) => l.toUpperCase()),
          windSpeed: Math.round(weatherData.wind.speed),
          windDirection: getWindDirection(weatherData.wind.deg),
          tideStatus: 'Incoming • High tide at 2:45 PM', // This would need a separate tide API
          icon: mapWeatherIcon(weatherData.weather[0].icon),
          feelsLike: Math.round(weatherData.main.feels_like),
          humidity: weatherData.main.humidity,
          pressure: Math.round(weatherData.main.pressure * 0.02953), // Convert hPa to inHg
          visibility: Math.round(weatherData.visibility / 1609.34), // Convert meters to miles
          sunrise: formatTime(weatherData.sys.sunrise),
          sunset: formatTime(weatherData.sys.sunset),
          moonPhase: getMoonPhase(),
          uvIndex: 5 // UV index would need a separate API call
        }
        
        setWeather(processedWeatherData)
        setLoading(false)
        
      } catch (err) {
        console.error('Error fetching weather data:', err)
        setError('Unable to load current weather conditions')
        setLoading(false)
      }
    }
    
    fetchWeatherData()
    
    // Refresh weather data every 10 minutes
    const interval = setInterval(fetchWeatherData, 10 * 60 * 1000)
    
    return () => clearInterval(interval)
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
