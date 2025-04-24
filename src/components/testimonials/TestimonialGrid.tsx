'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaQuoteLeft, FaStar, FaCheckCircle } from 'react-icons/fa'

interface Testimonial {
  name: string
  date: string
  review: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    name: "Gary",
    date: "January 30, 2025",
    review: "Captain Chandler was a great guide, very knowledgeable and genuinely loves fishing. His passion really shows through in how he helps everyone on the boat have a great time.",
    image: "/images/Guy_Cobia_gallery.png"
  },
  {
    name: "Bill",
    date: "December 30, 2024",
    review: "Captain Chandler was great to fish with. We had my 3 year old son, my 70 year old father and my 14 year old nephew on the boat. Everyone had a blast and got a fish on a day that was not ideal conditions for fishing. Highly recommend and plan to use him and Alex again in the future.",
    image: "/images/Guy_shark_gallery.png"
  },
  {
    name: "Sarah",
    date: "November 15, 2024",
    review: "What an amazing experience! Captain Chandler knew exactly where to find the fish. We caught more than we expected and learned so much about the local waters. Can't wait to book another trip!",
    image: "/images/Lady_large_jack_gallery.png"
  },
  {
    name: "Michael",
    date: "October 22, 2024",
    review: "First time fishing in Florida and couldn't have asked for a better guide. Captain Chandler's knowledge of the area is impressive, and his patience with beginners made the experience enjoyable for everyone.",
    image: "/images/Teenager_with_Trout_gallery.png"
  },
  {
    name: "Jennifer",
    date: "September 5, 2024",
    review: "Took my kids out for their first fishing experience and it was perfect! Captain Chandler was great with the children, teaching them techniques and making sure they had fun. We caught plenty of fish and made memories that will last a lifetime.",
    image: "/images/Lady_Snook_gallery.png"
  },
  {
    name: "Robert",
    date: "August 18, 2024",
    review: "As an experienced angler, I appreciate guides who know their stuff. Captain Chandler exceeded my expectations. His knowledge of the local species and fishing spots is outstanding. Had a great day on the water!",
    image: "/images/Guy_Snook_gallery.png"
  },
  {
    name: "Lisa",
    date: "July 3, 2024",
    review: "Perfect family activity! The boat was clean and comfortable, and Captain Chandler made sure everyone was safe and having fun. We caught several different species and learned a lot about the local marine life.",
    image: "/images/Young_Girl_Trout_gallery.png"
  },
  {
    name: "David",
    date: "June 15, 2024",
    review: "Second time out with Captain Chandler and it was even better than the first! His ability to find fish is incredible, and his easy-going personality makes for a great day on the water. Highly recommended!",
    image: "/images/Man_Large_mangrove_snapper_gallery.png"
  },
  {
    name: "Emma",
    date: "May 28, 2024",
    review: "What a fantastic experience! The weather wasn't perfect but Captain Chandler knew exactly where to take us to find fish. His local knowledge and friendly attitude made this trip memorable. Will definitely book again!",
    image: "/images/Girl_Permit_gallery.png"
  },
  {
    name: "James",
    date: "April 12, 2024",
    review: "Outstanding charter experience! Captain Chandler's expertise and friendly demeanor made our fishing trip exceptional. The equipment was top-notch and his knowledge of the local waters is impressive. Can't wait to come back!",
    image: "/images/Two_guys_big_tarpon_gallery.png"
  }
]

export default function TestimonialGrid() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4 text-white premium-heading">
          More Success Stories
        </h2>
        <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -5, boxShadow: '0 10px 40px rgba(213, 150, 51, 0.2)' }}
              className="premium-card h-full flex flex-col backlit-shadow"
            >
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center z-10 shadow-lg">
                <FaQuoteLeft className="text-black text-xl" />
              </div>
              
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-yellow-500">
                  <path d="M95.8,0v100H0V95.8C53,95.8,95.8,53,95.8,0z"></path>
                </svg>
              </div>
              
              {/* Content */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={`Testimonial from ${testimonial.name}`}
                    width={100}
                    height={100}
                    className="rounded-full object-cover border-2 border-yellow-600 shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-black rounded-full flex items-center justify-center border-2 border-yellow-500">
                    <FaCheckCircle className="text-yellow-500 text-xs" />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.date}</p>
                  <div className="flex space-x-1 text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <p className="text-gray-300 flex-grow italic">"{testimonial.review}"</p>
              </div>
              
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-yellow-900/20">
                <span className="text-xs text-yellow-500 font-medium">Verified Charter</span>
                <div className="flex space-x-1">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500 opacity-60"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500 opacity-30"></span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
