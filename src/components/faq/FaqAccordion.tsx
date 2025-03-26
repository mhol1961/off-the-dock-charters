'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

interface FaqItem {
  question: string
  answer: string | string[]
}

const faqData: FaqItem[] = [
  {
    question: "What should I bring on the fishing charter?",
    answer: [
      "We recommend wearing clothing appropriate for the weather—typically hot and sunny. Suggested items include:",
      "• Sunglasses (preferably polarized)",
      "• Sunscreen (reef-safe if possible)",
      "• Hats for sun protection",
      "• Soft-soled, non-marking shoes",
      "• Lunch or snacks (for full-day trips)",
      "• Drinks (water, sports drinks, or non-glass containers)",
      "• Cooler (if you plan to take fish home—leave it in your car until the trip is over)",
      "• Camera or phone for capturing your catch",
      "• A big smile and excitement for a great day on the water!"
    ]
  },
  {
    question: "Do I need a fishing license?",
    answer: "No, we've got you covered! The fishing license is included in your trip."
  },
  {
    question: "Where do we meet, and what time?",
    answer: "The Captain will contact you the day before your trip to confirm the meeting location and start time."
  },
  {
    question: "Can fishing charters be canceled due to weather?",
    answer: "Yes, but Florida's weather is typically on our side. Safety is our top priority, and the Captain will determine if the trip needs to be rescheduled due to high winds, heavy rain, or lightning. If weather forces a cancellation, we will work with you to reschedule."
  },
  {
    question: "Is seasickness a concern?",
    answer: "While inshore fishing typically involves calm waters, some people may still be prone to motion sickness. If you're concerned, consider taking an over-the-counter motion sickness medication before the trip."
  },
  {
    question: "Will you clean the fish we catch?",
    answer: "Yes! Fish cleaning is included, so you'll leave with filleted and bagged fish, ready to cook."
  },
  {
    question: "I've never fished from a boat before. Do I need experience?",
    answer: "Not at all! No experience is required—we take care of everything. Whether you're a beginner or a seasoned angler, we'll tailor the trip to your skill level and make sure you have a fantastic time on the water."
  },
  {
    question: "What kind of fish will we catch?",
    answer: "We typically target snook, trout, redfish, flounder, pompano, mangrove snapper, sheepshead, Spanish mackerel, and more!"
  },
  {
    question: "Can I bring alcohol?",
    answer: "Yes, you're welcome to bring beer or canned alcoholic beverages, but please avoid glass containers."
  },
  {
    question: "Are kids allowed on the trip?",
    answer: "Absolutely! We love introducing young anglers to fishing. Inshore trips are perfect for kids since the waters are calm and there's plenty of action to keep them entertained."
  },
  {
    question: "Is there a restroom on the boat?",
    answer: "No, there is no onboard restroom, but we are always within 10-20 minutes of a dock with facilities."
  },
  {
    question: "Do you provide all fishing gear and bait?",
    answer: "Yes! We provide top-quality rods, reels, tackle, and live bait—everything you need for a successful trip."
  }
]

function FaqItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string | string[]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className="ml-6 flex-shrink-0 text-yellow-500">
          {isOpen ? <FiMinus size={24} /> : <FiPlus size={24} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-300 space-y-2">
              {Array.isArray(answer) ? (
                answer.map((line, index) => (
                  <p key={index} className={index === 0 ? "mb-4" : "ml-4"}>
                    {line}
                  </p>
                ))
              ) : (
                <p>{answer}</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about your fishing charter experience
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
