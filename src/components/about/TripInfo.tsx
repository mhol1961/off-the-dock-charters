'use client'

import { motion } from 'framer-motion'
import { FaFish, FaTools, FaRestroom, FaCalendarAlt, FaClock } from 'react-icons/fa'
import { BsFillCheckCircleFill, BsXCircleFill } from 'react-icons/bs'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

function InfoCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-gray-900 p-6 rounded-lg shadow-lg"
    >
      <div className="text-accent mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </motion.div>
  )
}

function AmenityList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <BsFillCheckCircleFill className="text-accent mr-2" />
          {item}
        </li>
      ))}
    </ul>
  )
}

function NotAvailableList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-gray-300">
          <BsXCircleFill className="text-red-500 mr-2" />
          {item}
        </li>
      ))}
    </ul>
  )
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
            title="Trip Duration"
            content="Choose from 4, 6, or 8-hour trips to suit your schedule and fishing goals."
          />
          
          <InfoCard
            icon={<FaClock className="w-8 h-8" />}
            title="Start Times"
            content="We offer flexible start times to target the best fishing conditions. Early morning and late afternoon trips are available."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <motion.div
            variants={fadeInUp}
            className="bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">What's Included</h3>
            <AmenityList
              items={[
                'All fishing licenses',
                'Quality rods and reels',
                'Live bait and tackle',
                'Ice for your catch',
                'Bottled water',
                'Professional instruction',
                'Fish cleaning and packaging',
              ]}
            />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">What to Bring</h3>
            <AmenityList
              items={[
                'Sunscreen',
                'Sunglasses',
                'Hat or visor',
                'Weather-appropriate clothing',
                'Non-marking shoes',
                'Camera or phone for photos',
                'Food and drinks',
              ]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
