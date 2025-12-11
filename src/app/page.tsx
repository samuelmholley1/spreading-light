'use client'

import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [formStatus, setFormStatus] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'adam@mendograss.com',
          subject: 'New Newsletter Subscription',
          text: `New newsletter subscription from: ${email}`,
          html: `
            <h2>New Newsletter Subscription</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p>Subscribed from: Homepage Newsletter Form</p>
          `,
        }),
      })

      if (response.ok) {
        setFormStatus('success')
        setEmail('')
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setFormStatus(''), 5000)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/wheatgrass_background.jpg')"
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          {/* Centered Headline at Top */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Growing Organic Green Goodness Under the California Sun
            </h1>
          </div>
          
          {/* Two Column Layout Below */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left side - Subheadline and Tagline */}
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-300 mb-4">
                Our Products
              </h2>
              <p className="text-lg md:text-xl text-green-100 leading-relaxed">
                Sun-grown microgreens and wheatgrass, harvested fresh and bursting with flavor—straight from our Mendocino County farm to your table.
              </p>
            </div>
            
            {/* Right side - Buttons (smaller) */}
            <div className="flex flex-col gap-3">
              <Link 
                href="/subscriptions"
                className="bg-green-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-green-700 transition-colors shadow-lg text-center"
              >
                Home Delivery
              </Link>
              <Link 
                href="/restaurants"
                className="bg-green-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-green-700 transition-colors shadow-lg text-center"
              >
                Restaurants
              </Link>
              <Link 
                href="/schools"
                className="bg-green-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-green-700 transition-colors shadow-lg text-center"
              >
                Schools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Premier Description */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto text-center px-4">
          <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-light">
            Mendo Grass is Northern California&apos;s premier organic microgreen and wheatgrass farm, 
            distributing to specialty food stores, restaurants, and school districts throughout Mendocino and Sonoma counties—plus 
            direct home delivery subscriptions and farmers&apos; markets.
          </p>
        </div>
      </section>

      {/* 9x Nutrients Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
            9x the Nutrients
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Up to nine times the nutrients and potent health benefits compared to mature greens.
          </p>
        </div>
      </section>

      {/* Sun-grown Description */}
      <section className="py-12 bg-green-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sun-Grown-to-Order Microgreens & Wheatgrass
          </h2>
          <p className="text-lg text-gray-700 italic">
            Delivering weekly to homes, workplaces, juice bars, health food stores, restaurants, and fitness centers.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Microgreens */}
            <div className="text-center group hover:scale-105 transform transition-all duration-300">
              <div className="mb-6">
                <Image
                  src="/micros_multicolor.jpg"
                  alt="Fresh colorful microgreens"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md mx-auto group-hover:shadow-lg transition-shadow"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Microgreens</h3>
              <p className="text-gray-700">
                Sun-grown, living greens. Combinations can include pea shoots, radish, sunflower, and buckwheat.
              </p>
            </div>

            {/* Wheatgrass */}
            <div className="text-center group hover:scale-105 transform transition-all duration-300">
              <div className="mb-6">
                <Image
                  src="/wheatgrass_shots.jpg"
                  alt="Fresh wheatgrass shots"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md mx-auto group-hover:shadow-lg transition-shadow"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wheatgrass</h3>
              <p className="text-gray-700">
                Sold in live trays for extra immunity boosting benefits. Harvest it fresh for your juicing pleasure!
              </p>
            </div>

            {/* PeaSto */}
            <div className="text-center group hover:scale-105 transform transition-all duration-300">
              <div className="mb-6">
                <Image
                  src="/peasto_4jars.jpg"
                  alt="PeaSto pea shoot pesto jars"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md mx-auto group-hover:shadow-lg transition-shadow"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">PeaSto</h3>
              <p className="text-gray-700">
                Our uber-nutritious take on pesto featuring our pea shoots. Available to add-on to any subscription.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Organic Banner */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Certified Organic, From Seed to Soil
          </h2>
          <p className="text-xl text-green-100">
            Rain-watered and sustainably grown year-round.
          </p>
        </div>
      </section>

      {/* Why Mendo Grass - Four Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Why Mendo Grass?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Truly Local */}
            <div className="bg-green-50 rounded-xl p-8 border-l-4 border-green-600">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🌲</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Truly Local!</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our farm is located right here in Redwood Valley, just minutes from Ukiah. We&apos;re rooted in Mendocino County soil, 
                    growing food for our neighbors and community. All our greens are grown, harvested, and packed on-site.
                  </p>
                </div>
              </div>
            </div>

            {/* Super Fresh */}
            <div className="bg-blue-50 rounded-xl p-8 border-l-4 border-blue-600">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Super Fresh!</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our microgreens are harvested-to-order and in your hands right away. We believe freshness is key—for taste and for health. 
                    Email us at <a href="mailto:adam@mendograss.com" className="text-blue-600 hover:underline">adam@mendograss.com</a> to 
                    start a procurement relationship!
                  </p>
                </div>
              </div>
            </div>

            {/* Educational Programming */}
            <div className="bg-yellow-50 rounded-xl p-8 border-l-4 border-yellow-600">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Educational Opportunities!</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We&apos;re planning to host school classes for hands-on ag-ed projects and farm field trips. 
                    Let kids know who grows their food! Contact us to learn more about future educational programming 
                    and partnership opportunities with local schools.
                  </p>
                </div>
              </div>
            </div>

            {/* Special Events */}
            <div className="bg-purple-50 rounded-xl p-8 border-l-4 border-purple-600">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🎉</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Special Events!</h3>
                  <p className="text-gray-700 leading-relaxed">
                    While our farm isn&apos;t open to the general public for daily visits, we host special events throughout the year. 
                    Sign up for our newsletter below to stay updated on farm tours, harvest events, and community gatherings!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Empowering health through sustainable superfoods
              </h2>
              <h3 className="text-2xl text-green-700 font-semibold mb-6 italic">
                Grass Rooted in Ukiah, California
              </h3>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Welcome to Mendo Grass, where we are on a mission to provide sustainable and organic superfoods to our community. Founded by Adam, Amanda, and our daughter, Arden, our family&apos;s journey began at the Solar Living Institute, where we discovered the incredible healing powers of wheatgrass. Inspired by its impact on a friend&apos;s health, we set out to create a farm dedicated to growing wheatgrass and microgreens.
                </p>
                
                <p>
                  Today, Mendo Grass thrives in the scenic valleys of southern Mendocino County, surrounded by oak woodlands and organic vineyards. Our commitment to sustainability is unwavering. We utilize renewable energy, harness the sun, and nourish our crops with rainwater. We exclusively use organic seeds and soil, ensuring the highest quality produce.
                </p>
                
                <p>
                  With love for the land and the food we grow, we provide fresh, nutrient-rich wheatgrass and microgreens to Mendocino and Sonoma counties. Our goal is simple: to bring immunity-boosting foods to your table and add a touch of sunshine to your life. Find us at your favorite local farmers market, or shop online to join us on this sustainable journey towards a healthier, happier future—one microgreen at a time.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Image
                src="/family_sunflowers.jpg"
                alt="Mendo Grass family with sunflowers"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Sign-up */}
      <section id="newsletter" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Recipes and Updates Every Month
          </h2>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
          </form>

          {/* Success/Error Messages */}
          {formStatus === 'success' && (
            <p className="mt-4 text-green-600 font-medium">
              ✓ Thank you for subscribing! Check your inbox for updates.
            </p>
          )}
          {formStatus === 'error' && (
            <p className="mt-4 text-red-600 font-medium">
              ✗ Oops! Something went wrong. Please try again.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
