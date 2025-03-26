import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Gold
          dark: '#B8860B',    // Dark Gold
          light: '#FFF8DC',   // Light Gold
        },
        background: {
          DEFAULT: '#000000', // Black
          light: '#1A1A1A',   // Light Black
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [],
}

export default config
