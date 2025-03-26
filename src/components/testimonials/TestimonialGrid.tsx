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
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-6">
            What Our Customers Say
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Read about the experiences of our valued customers and their memorable fishing adventures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-80">
                <Image
                  src={testimonial.image}
                  alt={`Fishing trip with ${testimonial.name}`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                      <span className="flex items-center text-green-400 text-sm">
                        <FaCheckCircle className="mr-1" />
                        Verified
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{testimonial.date}</p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-gray-700 text-3xl absolute -left-2 -top-2" />
                  <p className="text-gray-300 pl-6 pt-2">{testimonial.review}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
