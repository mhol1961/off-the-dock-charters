'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 text-white premium-heading gold-text">
              Privacy Policy
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Last Updated: April 24, 2025
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8 premium-card backlit-shadow p-8 rounded-2xl"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300">
                Off The Dock Charters ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or book our charter services.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p className="text-gray-300 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Book a charter or request information</li>
                <li>Sign up for our newsletter</li>
                <li>Contact us through our website</li>
                <li>Purchase a gift certificate</li>
              </ul>
              <p className="text-gray-300 mt-4">
                This information may include your name, email address, phone number, mailing address, and payment information.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 mb-4">
                We may use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Providing and managing the services you request</li>
                <li>Communicating with you about your booking or inquiry</li>
                <li>Sending you marketing communications (if you've opted in)</li>
                <li>Improving our website and services</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-300">
                We may use cookies and similar tracking technologies to collect information about your browsing activities. You can set your browser to refuse all or some browser cookies, but this may prevent some parts of our website from functioning properly.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Disclosure</h2>
              <p className="text-gray-300">
                We do not sell, trade, or otherwise transfer your personal information to outside parties except as necessary to provide our services (such as payment processors) or as required by law.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300">
                We implement reasonable security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300">
                Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us using the information provided below.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 text-gray-300">
                <p>Off The Dock Charters</p>
                <p>Bradenton, Florida</p>
                <p>Email: info@offthedockcharters.com</p>
                <p>Phone: (941) 564-5504</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              href="/contact"
              className="inline-block bg-[#D59633] text-black px-8 py-4 rounded-lg font-medium hover:bg-[#c08629] hover:scale-105 hover:shadow-lg hover:shadow-yellow-900/30 transition-all duration-300 transform"
            >
              Contact Us With Questions
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
