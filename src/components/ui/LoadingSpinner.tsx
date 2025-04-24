'use client'

import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'white'
}

export default function LoadingSpinner({ 
  size = 'medium', 
  color = 'primary' 
}: LoadingSpinnerProps) {
  const sizeMap = {
    small: 'w-6 h-6',
    medium: 'w-10 h-10',
    large: 'w-16 h-16'
  }
  
  const colorMap = {
    primary: 'text-[#D59633]',
    white: 'text-white'
  }
  
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className={`${sizeMap[size]} ${colorMap[color]}`}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <motion.path
            d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="60 15"
            initial={{ pathLength: 0.2, opacity: 0.2 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              transition: { 
                pathLength: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                opacity: { duration: 0.2 }
              }
            }}
          />
          <motion.path
            d="M12 6V12L16 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              transition: { 
                pathLength: { duration: 1, delay: 0.5, repeat: Infinity, repeatDelay: 0.5, ease: "easeOut" },
                opacity: { duration: 0.2, delay: 0.5 }
              }
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}
