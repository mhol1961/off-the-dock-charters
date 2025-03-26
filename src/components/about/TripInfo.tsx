'use client'

import { motion } from 'framer-motion'
import { FaFish, FaTools, FaRestroom, FaCalendarAlt, FaClock } from 'react-icons/fa'
import { BsFillCheckCircleFill, BsXCircleFill } from 'react-icons/bs'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function TripInfo() {
  return (
    <section className="bg-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">About Your Trip</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join us for an exciting inshore fishing adventure in the beautiful waters of Tampa Bay and 
            Sarasota Bay. We'll explore shallow grass flats, mangrove shorelines, and oyster bars in 
            search of some of the most sought-after inshore species.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Key Information Cards */}
          <InfoCard
            icon={<FaFish className="w-8 h-8" />}
            title="Targeted Species"
            content="Our primary catches include snook, trout, and redfish, plus flounder, pompano, mangrove snapper, sheepshead, Spanish mackerel, bluefish, gag grouper, ladyfish, and jack crevalle."
          />
          
          <InfoCard
            icon={<FaTools className="w-8 h-8" />}
            title="Tackle & Bait"
            content="We use light tackle and provide live bait for an authentic and action-packed fishing experience."
          />
          
          <InfoCard
            icon={<FaRestroom className="w-8 h-8" />}
            title="Convenience & Comfort"
            content="Fishing inshore means we are always within 10-20 minutes of a restroom, making this a great option for all ages and experience levels."
          />
          
          <InfoCard
            icon={<FaCalendarAlt className="w-8 h-8" />}
            title="Best Times to Fish"
            content="Some of the best inshore fishing happens in the spring and fall, when fish are actively feeding during seasonal transitions."
          />
          
          <InfoCard
            icon={<FaClock className="w-8 h-8" />}
            title="Trip Duration"
            content="Full-day (8-hour) trips are only available in the morning."
          />
        </div>

        {/* Amenities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8">What's Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AmenityList
              items={[
                "Inshore, Nearshore, Flats fishing",
                "All skill levels welcome",
                "All rods, reels, and tackle included",
                "Fish cleaning service",
                "BYOB (no glass containers)",
                "Bluetooth music system",
                "Live bait included",
                "Weather protection",
                "Kid-friendly experience",
                "Flexible cancellation"
              ]}
            />
          </div>
        </motion.div>

        {/* Not Available Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Not Available</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <NotAvailableList
              items={[
                "No onboard bathroom facilities",
                "Not suitable for those with disabilities"
              ]}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function InfoCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.6 }}
      className="bg-gray-900 p-6 rounded-lg"
    >
      <div className="text-yellow-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </motion.div>
  )
}

function AmenityList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center space-x-3 text-gray-300"
        >
          <BsFillCheckCircleFill className="text-green-500 flex-shrink-0" />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}

function NotAvailableList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center space-x-3 text-gray-300"
        >
          <BsXCircleFill className="text-red-500 flex-shrink-0" />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  )
}
