'use client'

import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { products } from '@/data/products';

export default function Home() {
  const [formStatus, setFormStatus] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const featuredProducts = products.filter(p => p.featured);

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
          to: 'hello@spreadinglight.com',
          subject: 'New Newsletter Subscription',
          text: New newsletter subscription from: ,
          html: 
            <h2>New Newsletter Subscription</h2>
            <p><strong>Email:</strong> </p>
            <p>Subscribed from: Homepage Newsletter Form</p>
          ,
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
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1f36]">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.7), rgba(26, 31, 54, 0.8)), url('/hero-bleach-art.jpg')"
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center">
          <div className="mb-12 bleach-effect">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#ffb685] to-[#d4a574] bg-clip-text text-transparent leading-tight mb-6">
              Spreading Light
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#f5f5dc] mb-8">
              Custom Bleach Art T-Shirts
            </h2>
            <p className="text-xl md:text-2xl text-[#d4a574] leading-relaxed max-w-3xl mx-auto">
              Unique wearable art created through the transformative power of bleach on navy and black canvases
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/shop" className="btn-primary text-lg px-8 py-4 inline-block">
              Shop the Collection
            </Link>
            <Link href="/custom" className="btn-secondary text-lg px-8 py-4 inline-block">
              Request Custom Design
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-[#ffb685]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#ffb685] mb-4">
              Featured Designs
            </h2>
            <p className="text-xl text-[#f5f5dc] max-w-2xl mx-auto">
              Each piece is carefully crafted with bleach art techniques, making every shirt truly one-of-a-kind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card group">
                <div className="relative h-80 overflow-hidden bg-[#2d3748]">
                  <div className="absolute inset-0 flex items-center justify-center text-[#ffb685] text-lg">
                    Product Image Placeholder
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#ffb685] mb-2 group-hover:text-[#d4a574] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[#f5f5dc] mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#ffd700]">
                      
                    </span>
                    <Link href={/shop/} className="btn-primary text-sm px-6 py-2">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop" className="btn-secondary text-lg px-8 py-4 inline-block">
              View All Designs
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-[#1a1f36]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#ffb685] mb-4">
              The Art of Bleach
            </h2>
            <p className="text-xl text-[#f5f5dc] max-w-2xl mx-auto">
              Our unique process transforms ordinary shirts into wearable art
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center text-4xl font-bold text-[#0a0a0a]">
                1
              </div>
              <h3 className="text-2xl font-bold text-[#ffb685] mb-3">Select Design</h3>
              <p className="text-[#f5f5dc]">
                Choose from our collection or request a custom design tailored to your vision
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center text-4xl font-bold text-[#0a0a0a]">
                2
              </div>
              <h3 className="text-2xl font-bold text-[#ffb685] mb-3">Bleach Application</h3>
              <p className="text-[#f5f5dc]">
                Expert bleach art technique creates stunning patterns in pastel orange or vibrant tan
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center text-4xl font-bold text-[#0a0a0a]">
                3
              </div>
              <h3 className="text-2xl font-bold text-[#ffb685] mb-3">Delivered to You</h3>
              <p className="text-[#f5f5dc]">
                Your unique piece arrives ready to wear and spread light wherever you go
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ffb685] mb-6">
            Stay in the Light
          </h2>
          <p className="text-xl text-[#f5f5dc] mb-8">
            Subscribe for new design drops, exclusive offers, and bleach art inspiration
          </p>

          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg bg-[#2d3748] border-2 border-[#ffb685] text-[#f5f5dc] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary px-8 py-4 whitespace-nowrap disabled:opacity-50"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {formStatus === 'success' && (
            <p className="mt-4 text-green-400 font-semibold">
               Successfully subscribed! Check your email.
            </p>
          )}
          {formStatus === 'error' && (
            <p className="mt-4 text-red-400 font-semibold">
               Something went wrong. Please try again.
            </p>
          )}
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-20 px-4 bg-[#1a1f36]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#ffb685] mb-4">
              Design Categories
            </h2>
            <p className="text-xl text-[#f5f5dc]">
              Explore our diverse collection of bleach art themes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/shop?category=pop-culture" className="group product-card h-64 flex items-center justify-center text-center p-6 hover:scale-105 transition-transform">
              <div>
                <h3 className="text-2xl font-bold text-[#ffb685] mb-2 group-hover:text-[#d4a574]">
                  Pop Culture
                </h3>
                <p className="text-[#f5f5dc]">Movies, TV & Gaming</p>
              </div>
            </Link>

            <Link href="/shop?category=cannabis-nature" className="group product-card h-64 flex items-center justify-center text-center p-6 hover:scale-105 transition-transform">
              <div>
                <h3 className="text-2xl font-bold text-[#ffb685] mb-2 group-hover:text-[#d4a574]">
                  Cannabis & Nature
                </h3>
                <p className="text-[#f5f5dc]">Botanical Art</p>
              </div>
            </Link>

            <Link href="/shop?category=abstract" className="group product-card h-64 flex items-center justify-center text-center p-6 hover:scale-105 transition-transform">
              <div>
                <h3 className="text-2xl font-bold text-[#ffb685] mb-2 group-hover:text-[#d4a574]">
                  Abstract Art
                </h3>
                <p className="text-[#f5f5dc]">Unique Expressions</p>
              </div>
            </Link>

            <Link href="/custom" className="group product-card h-64 flex items-center justify-center text-center p-6 hover:scale-105 transition-transform bg-gradient-to-br from-[#ffb685]/20 to-[#d4a574]/20">
              <div>
                <h3 className="text-2xl font-bold text-[#ffd700] mb-2">
                  Custom Orders
                </h3>
                <p className="text-[#f5f5dc]">Your Vision, Our Art</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
