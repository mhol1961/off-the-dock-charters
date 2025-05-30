'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { generateCharterServiceSchema, generateLocalBusinessSchema } from '@/lib/utils/structuredData'

const blogPosts = [
  {
    slug: 'seasonal-fishing-bradenton',
    title: 'Following the Fish: Why the Best Bradenton Charters Move with the Seasons',
    excerpt: 'Discover why top Bradenton fishing charters adapt their locations seasonally. Learn how Off The Dock Charters follows fish migration patterns for better catches.',
    image: '/images/Hero_Image_1.png',
    date: 'May 30, 2025',
    readTime: '8 min read',
    tags: ['Bradenton Fishing', 'Seasonal Fishing', 'Anna Maria Island', 'Fishing Charters', 'Inshore Fishing']
  },
  {
    slug: 'manatee-river-fishing-guide',
    title: 'Manatee River Fishing: Hidden Gem for Snook, Redfish & Tarpon',
    excerpt: 'Discover why the Manatee River is one of our favorite spots for targeting trophy fish in Bradenton waters.',
    image: '/images/Guy_Snook_gallery.png',
    date: 'Coming Soon',
    readTime: '6 min read',
    tags: ['Manatee River', 'Snook', 'Redfish', 'Tarpon']
  },
  {
    slug: 'bradenton-fishing-calendar',
    title: 'Bradenton Fishing Guide: Year-Round Calendar for Inshore Species',
    excerpt: 'Complete monthly breakdown of what to catch around Bradenton throughout the year.',
    image: '/images/fishing_spots.jpg',
    date: 'Coming Soon',
    readTime: '10 min read',
    tags: ['Fishing Calendar', 'Inshore Species', 'Monthly Guide']
  }
]

export default function BlogPage() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              generateCharterServiceSchema(),
              generateLocalBusinessSchema(),
              {
                '@type': 'Blog',
                '@id': 'https://offthedockcharters.com/blog',
                'url': 'https://offthedockcharters.com/blog',
                'name': 'Off The Dock Charters Fishing Blog',
                'description': 'Expert fishing tips, seasonal guides, and local knowledge for Bradenton, Anna Maria Island, and Sarasota Bay fishing.',
                'publisher': {
                  '@type': 'Organization',
                  'name': 'Off The Dock Charters',
                  'url': 'https://offthedockcharters.com'
                }
              }
            ]
          })
        }}
      />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fishing <span className="text-[#D59633]">Blog</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Expert fishing tips, seasonal guides, and local knowledge from Captain Chandler Brown. 
              Learn the secrets of successful fishing in Bradenton, Anna Maria Island, and Sarasota Bay.
            </p>
          </motion.div>

          {/* Featured Article */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D59633] text-black px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blogPosts[0].tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{blogPosts[0].date}</span>
                      <span className="mx-2">•</span>
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                    <Link
                      href={`/blog/${blogPosts[0].slug}`}
                      className="bg-[#D59633] hover:bg-[#c08629] text-black font-medium px-6 py-2 rounded-md transition-colors"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <div key={post.slug} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    {post.date === 'Coming Soon' && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      {post.date !== 'Coming Soon' ? (
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-[#D59633] hover:text-[#c08629] font-medium transition-colors"
                        >
                          Read More →
                        </Link>
                      ) : (
                        <span className="text-gray-500">Coming Soon</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 bg-gradient-to-r from-[#D59633] to-[#c08629] rounded-lg p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-black mb-4">
              Stay Updated with Fishing Tips & Reports
            </h3>
            <p className="text-black/80 mb-6 max-w-2xl mx-auto">
              Get the latest fishing reports, seasonal tips, and exclusive charter offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
