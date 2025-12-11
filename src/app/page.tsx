'use client'

import { useState } from 'react'
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    design: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'hello@spreadinglight.com',
          subject: `New Order Inquiry from ${formData.name}`,
          text: `Name: ${formData.name}\nEmail: ${formData.email}\nDesign Interest: ${formData.design}\nMessage: ${formData.message}`,
          html: `
            <h2>New Order Inquiry</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Design Interest:</strong> ${formData.design}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          `,
        }),
      })

      if (response.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', design: '', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setFormStatus(''), 5000)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-[#0a0a0a] via-[#1a1f36] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12 bleach-effect">
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-[#ffb685] via-[#d4a574] to-[#ffb685] bg-clip-text text-transparent leading-tight mb-6 animate-pulse">
              Spreading Light
            </h1>
            <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-[#ffb685] to-transparent mb-8"></div>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#f5f5dc] mb-6">
              Custom Bleach Art T-Shirts
            </h2>
            <p className="text-xl md:text-2xl text-[#d4a574] leading-relaxed max-w-3xl mx-auto">
              Unique wearable art on navy & black shirts<br/>
              <span className="text-[#ffb685]">Pastel orange & vibrant tan designs</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a href="#designs" className="btn-primary text-lg px-10 py-4 inline-block">
              View Designs
            </a>
            <a href="#order" className="btn-secondary text-lg px-10 py-4 inline-block">
              Place Order
            </a>
          </div>

          <div className="text-[#d4a574] text-sm">
            Starting at $28.99  Free shipping over $50
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-[#ffb685]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Design Showcase Section */}
      <section id="designs" className="py-24 px-4 bg-[#1a1f36]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#ffb685] mb-6">
              Design Collections
            </h2>
            <p className="text-xl text-[#f5f5dc] max-w-2xl mx-auto">
              Each piece is handcrafted through bleach art techniques, making every shirt one-of-a-kind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Pop Culture */}
            <div className="product-card group text-center p-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#0a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#ffb685] mb-3">Pop Culture</h3>
              <p className="text-[#f5f5dc] mb-4">
                Star Wars, movies, gaming characters
              </p>
              <p className="text-sm text-[#d4a574]">
                Example: Darth Vader vs Darth Maul
              </p>
            </div>

            {/* Cannabis & Nature */}
            <div className="product-card group text-center p-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#0a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#ffb685] mb-3">Cannabis & Nature</h3>
              <p className="text-[#f5f5dc] mb-4">
                Pot leaves, botanical designs, natural art
              </p>
              <p className="text-sm text-[#d4a574]">
                Example: Mandala leaf patterns
              </p>
            </div>

            {/* Abstract */}
            <div className="product-card group text-center p-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center">
                <svg className="w-12 h-12 text-[#0a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#ffb685] mb-3">Abstract Art</h3>
              <p className="text-[#f5f5dc] mb-4">
                Cosmic bursts, galaxy effects, unique patterns
              </p>
              <p className="text-sm text-[#d4a574]">
                Each shirt is truly unique
              </p>
            </div>
          </div>

          {/* Shirt Options */}
          <div className="bg-[#2d3748] rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-[#ffb685] mb-6 text-center">Available Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-[#d4a574] mb-3">Shirt Colors</h4>
                <ul className="space-y-2 text-[#f5f5dc]">
                  <li className="flex items-center">
                    <span className="w-4 h-4 rounded-full bg-[#1a1f36] border-2 border-[#ffb685] mr-3"></span>
                    Navy Blue
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 rounded-full bg-black border-2 border-[#ffb685] mr-3"></span>
                    Black
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#d4a574] mb-3">Bleach Colors</h4>
                <ul className="space-y-2 text-[#f5f5dc]">
                  <li className="flex items-center">
                    <span className="w-4 h-4 rounded-full bg-[#ffb685] mr-3"></span>
                    Pastel Orange
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 rounded-full bg-[#d4a574] mr-3"></span>
                    Vibrant Tan
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-[#d4a574] mb-3">Sizes Available</h4>
              <p className="text-[#f5f5dc]">S  M  L  XL  2XL  3XL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] to-[#1a1f36]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#ffb685] mb-12">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="product-card p-8">
              <h3 className="text-2xl font-bold text-[#d4a574] mb-4">Standard Designs</h3>
              <div className="text-5xl font-bold text-[#ffd700] mb-4">$28.99</div>
              <p className="text-[#f5f5dc] mb-6">Choose from our existing designs</p>
              <ul className="text-left text-[#f5f5dc] space-y-2 mb-6">
                <li> Pop culture characters</li>
                <li> Cannabis/nature themes</li>
                <li> Abstract patterns</li>
                <li> All sizes available</li>
              </ul>
            </div>
            <div className="product-card p-8 border-2 border-[#ffb685]">
              <h3 className="text-2xl font-bold text-[#ffb685] mb-4">Custom Designs</h3>
              <div className="text-5xl font-bold text-[#ffd700] mb-4">$34.99</div>
              <p className="text-[#f5f5dc] mb-6">Your vision, our artistry</p>
              <ul className="text-left text-[#f5f5dc] space-y-2 mb-6">
                <li> Fully custom design</li>
                <li> Your idea or concept</li>
                <li> Professional execution</li>
                <li> Truly one-of-a-kind</li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-[#d4a574] text-lg">
            Free shipping on orders over $50  2-3 week turnaround
          </p>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order" className="py-24 px-4 bg-[#1a1f36]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-[#ffb685] mb-6">Place Your Order</h2>
            <p className="text-xl text-[#f5f5dc]">
              Fill out the form below and we'll get back to you with payment details and timeline
            </p>
          </div>

          <form onSubmit={handleSubmit} className="product-card p-8 space-y-6">
            <div>
              <label className="block text-[#ffb685] font-semibold mb-2">Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-[#2d3748] border-2 border-[#ffb685] text-[#f5f5dc] focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-[#ffb685] font-semibold mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-[#2d3748] border-2 border-[#ffb685] text-[#f5f5dc] focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-[#ffb685] font-semibold mb-2">Design Interest *</label>
              <select
                required
                value={formData.design}
                onChange={(e) => setFormData({...formData, design: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-[#2d3748] border-2 border-[#ffb685] text-[#f5f5dc] focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
              >
                <option value="">Select a design type...</option>
                <option value="pop-culture">Pop Culture Design</option>
                <option value="cannabis-nature">Cannabis/Nature Design</option>
                <option value="abstract">Abstract Art</option>
                <option value="custom">Custom Design (describe below)</option>
              </select>
            </div>

            <div>
              <label className="block text-[#ffb685] font-semibold mb-2">Message / Design Details *</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[#2d3748] border-2 border-[#ffb685] text-[#f5f5dc] focus:outline-none focus:ring-2 focus:ring-[#d4a574]"
                placeholder="Tell us about your design idea, size preference, shirt color, etc..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-4 text-lg disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Submit Order Inquiry'}
            </button>

            {formStatus === 'success' && (
              <p className="text-center text-green-400 font-semibold">
                 Order inquiry sent! We'll contact you within 24 hours.
              </p>
            )}
            {formStatus === 'error' && (
              <p className="text-center text-red-400 font-semibold">
                 Something went wrong. Please email us directly at hello@spreadinglight.com
              </p>
            )}
          </form>
        </div>
      </section>

      {/* About/Process Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-[#1a1f36] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#ffb685] mb-6">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center text-3xl font-bold text-[#0a0a0a]">
                1
              </div>
              <h3 className="text-xl font-bold text-[#ffb685] mb-3">Submit Order</h3>
              <p className="text-[#f5f5dc]">Fill out the form with your design preferences</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center text-3xl font-bold text-[#0a0a0a]">
                2
              </div>
              <h3 className="text-xl font-bold text-[#ffb685] mb-3">Get Quote</h3>
              <p className="text-[#f5f5dc]">Receive payment link and timeline via email</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center text-3xl font-bold text-[#0a0a0a]">
                3
              </div>
              <h3 className="text-xl font-bold text-[#ffb685] mb-3">We Create</h3>
              <p className="text-[#f5f5dc]">Your shirt is crafted with bleach art magic</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center text-3xl font-bold text-[#0a0a0a]">
                4
              </div>
              <h3 className="text-xl font-bold text-[#ffb685] mb-3">Shipped</h3>
              <p className="text-[#f5f5dc]">Unique wearable art delivered to your door</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
