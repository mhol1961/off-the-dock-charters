'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCompass, FaArrowLeft, FaArrowRight, FaExpand, FaCompress, FaPlay, FaPause } from 'react-icons/fa'
import LoadingSpinner from '../ui/LoadingSpinner'

interface TourPoint {
  id: string
  title: string
  description: string
  image: string
  hotspots: Hotspot[]
}

interface Hotspot {
  x: number
  y: number
  targetId: string
  label: string
}

const tourPoints: TourPoint[] = [
  {
    id: 'boat-front',
    title: 'Boat Front Deck',
    description: 'The spacious front casting deck provides ample room for anglers to cast and fight fish. High-quality non-slip surface ensures safety even when wet.',
    image: '/images/OTD_Meet_the_Captain.png', // This would be a 360° image in production
    hotspots: [
      { x: 75, y: 60, targetId: 'boat-console', label: 'View Console' },
      { x: 25, y: 70, targetId: 'boat-storage', label: 'View Storage' }
    ]
  },
  {
    id: 'boat-console',
    title: 'Center Console',
    description: 'The helm features state-of-the-art electronics including GPS, fish finder, and marine radio. Everything is within easy reach for Captain Chandler.',
    image: '/images/Guy_shark_gallery.png', // This would be a 360° image in production
    hotspots: [
      { x: 30, y: 65, targetId: 'boat-front', label: 'View Front Deck' },
      { x: 70, y: 65, targetId: 'boat-rear', label: 'View Rear Deck' }
    ]
  },
  {
    id: 'boat-rear',
    title: 'Rear Fishing Deck',
    description: 'The rear deck provides comfortable seating and additional fishing space. The powerful outboard engine ensures quick travel to the best fishing spots.',
    image: '/images/About_the_boat.png', // This would be a 360° image in production
    hotspots: [
      { x: 40, y: 60, targetId: 'boat-console', label: 'View Console' },
      { x: 80, y: 70, targetId: 'boat-storage', label: 'View Storage' }
    ]
  },
  {
    id: 'boat-storage',
    title: 'Storage & Equipment',
    description: 'Multiple storage compartments keep gear organized and secure. Live wells maintain bait in prime condition, and rod holders keep your equipment ready for action.',
    image: '/images/Lady_Snook_gallery.png', // This would be a 360° image in production
    hotspots: [
      { x: 20, y: 65, targetId: 'boat-front', label: 'View Front Deck' },
      { x: 80, y: 65, targetId: 'boat-rear', label: 'View Rear Deck' }
    ]
  }
]

export default function VirtualTour() {
  const [currentPointId, setCurrentPointId] = useState(tourPoints[0].id)
  const [isLoading, setIsLoading] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [rotationDegree, setRotationDegree] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [autoRotate, setAutoRotate] = useState(false)
  const tourRef = useRef<HTMLDivElement>(null)
  const imageContainerRef = useRef<HTMLDivElement>(null)
  
  const currentPoint = tourPoints.find(point => point.id === currentPointId) || tourPoints[0]
  
  useEffect(() => {
    // Simulate loading of 360° images
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [currentPointId])

  // Auto-rotation effect
  useEffect(() => {
    let animationId: number
    
    if (autoRotate && !isDragging && !isLoading) {
      const animate = () => {
        setRotationDegree(prev => (prev + 0.2) % 360)
        animationId = requestAnimationFrame(animate)
      }
      
      animationId = requestAnimationFrame(animate)
    }
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [autoRotate, isDragging, isLoading])
  
  const handleHotspotClick = (targetId: string) => {
    setIsLoading(true)
    setCurrentPointId(targetId)
    setRotationDegree(0)
  }
  
  const handleNextPoint = () => {
    const currentIndex = tourPoints.findIndex(point => point.id === currentPointId)
    const nextIndex = (currentIndex + 1) % tourPoints.length
    setIsLoading(true)
    setCurrentPointId(tourPoints[nextIndex].id)
    setRotationDegree(0)
  }
  
  const handlePrevPoint = () => {
    const currentIndex = tourPoints.findIndex(point => point.id === currentPointId)
    const prevIndex = (currentIndex - 1 + tourPoints.length) % tourPoints.length
    setIsLoading(true)
    setCurrentPointId(tourPoints[prevIndex].id)
    setRotationDegree(0)
  }
  
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (tourRef.current?.requestFullscreen) {
        tourRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }
  
  const toggleAutoRotate = () => {
    setAutoRotate(prev => !prev)
  }
  
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isLoading) return
    setIsDragging(true)
    setStartX(e.clientX)
    setAutoRotate(false)
  }
  
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isLoading) return
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setAutoRotate(false)
  }
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || isLoading) return
    const deltaX = e.clientX - startX
    setRotationDegree(prev => (prev + deltaX * 0.5) % 360)
    setStartX(e.clientX)
  }
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || isLoading) return
    const deltaX = e.touches[0].clientX - startX
    setRotationDegree(prev => (prev + deltaX * 0.5) % 360)
    setStartX(e.touches[0].clientX)
  }
  
  const handleDragEnd = () => {
    setIsDragging(false)
  }
  
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [])

  return (
    <motion.div
      ref={tourRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black/70 rounded-2xl overflow-hidden shadow-2xl shadow-yellow-900/30 border border-yellow-700/20 hover:shadow-[0_8px_32px_0_rgba(213,150,51,0.25)] transition-all duration-300"
    >
      <div className="relative h-[500px] md:h-[600px] w-full">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20">
            <LoadingSpinner size="large" color="primary" />
          </div>
        ) : null}
        
        <div 
          ref={imageContainerRef}
          className="absolute inset-0 overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
        >
          <div 
            className="absolute inset-0 transition-transform duration-100 ease-out"
            style={{ transform: `perspective(1000px) rotateY(${rotationDegree}deg)` }}
          >
            <Image
              src={currentPoint.image}
              alt={currentPoint.title}
              fill
              className="object-cover transition-opacity duration-500"
              style={{ opacity: isLoading ? 0.3 : 1 }}
              priority
            />
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          {/* Drag instruction overlay */}
          {!isLoading && !isDragging && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="bg-black/50 text-white px-4 py-2 rounded-full text-sm animate-pulse">
                Drag to rotate view
              </div>
            </div>
          )}
          
          {/* Hotspots */}
          {!isLoading && currentPoint.hotspots.map((hotspot, index) => (
            <motion.button
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 + (index * 0.1), type: 'spring' }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ 
                left: `${hotspot.x}%`, 
                top: `${hotspot.y}%`,
                transform: `translate(-50%, -50%) rotateY(${-rotationDegree}deg)` // Counter-rotate to keep hotspots facing forward
              }}
              onClick={() => handleHotspotClick(hotspot.targetId)}
            >
              <div className="relative group">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black shadow-lg cursor-pointer hover:scale-110 transition-transform">
                  <FaCompass className="text-lg" />
                </div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-black/80 text-white text-sm py-1 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {hotspot.label}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
        
        {/* Tour controls */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="bg-black/60 p-4 rounded-lg border border-yellow-600/30 shadow-lg transform hover:scale-[1.02] hover:shadow-yellow-900/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">{currentPoint.title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{currentPoint.description}</p>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={toggleAutoRotate}
                className={`w-10 h-10 rounded-full ${autoRotate ? 'bg-yellow-600 text-black' : 'bg-black/60 text-white'} border border-yellow-600/30 flex items-center justify-center hover:bg-yellow-700 hover:text-white transition-colors`}
                aria-label={autoRotate ? "Stop auto-rotation" : "Start auto-rotation"}
              >
                {autoRotate ? <FaPause className="h-5 w-5" /> : <FaPlay className="h-5 w-5" />}
              </button>
              <button
                onClick={handlePrevPoint}
                className="w-10 h-10 rounded-full bg-black/60 border border-yellow-600/30 flex items-center justify-center text-white hover:bg-black/80 hover:scale-110 transition-all"
                aria-label="Previous view"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNextPoint}
                className="w-10 h-10 rounded-full bg-black/60 border border-yellow-600/30 flex items-center justify-center text-white hover:bg-black/80 hover:scale-110 transition-all"
                aria-label="Next view"
              >
                <FaArrowRight />
              </button>
              <button
                onClick={toggleFullscreen}
                className="w-10 h-10 rounded-full bg-black/60 border border-yellow-600/30 flex items-center justify-center text-white hover:bg-black/80 hover:scale-110 transition-all"
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
              >
                {isFullscreen ? <FaCompress /> : <FaExpand />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tour navigation thumbnails */}
      <div className="flex overflow-x-auto p-4 gap-4 bg-black/80 border-t border-yellow-600/20">
        {tourPoints.map((point) => (
          <button
            key={point.id}
            onClick={() => handleHotspotClick(point.id)}
            className={`flex-shrink-0 relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${currentPointId === point.id ? 'border-yellow-500 scale-110 shadow-lg shadow-yellow-900/30' : 'border-transparent opacity-70 hover:opacity-100'}`}
          >
            <Image 
              src={point.image} 
              alt={point.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="text-xs font-medium text-white">{point.title.split(' ')[0]}</span>
            </div>
          </button>
        ))}
      </div>
    </motion.div>
  )
}
