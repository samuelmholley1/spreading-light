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
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 bg-gradient-to-b from-[#0a0a0a] via-[#1a1f36] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16 bleach-effect space-y-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-[#ffb685] via-[#d4a574] to-[#ffb685] bg-clip-text text-transparent leading-[0.9] tracking-tighter mb-8">
              SPREADING<br/>LIGHT
            </h1>
            <div className="h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-[#ffb685] to-transparent"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#f5f5dc] tracking-wide uppercase">
              Custom Bleach Art
            </h2>
            <p className="text-lg md:text-xl text-[#d4a574] leading-relaxed max-w-2xl mx-auto font-light">
              Wearable art for the culture. Hand-crafted bleach designs on premium tees.<br/>
              <span className="text-[#ffb685] font-medium">Each piece is one of one.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <a href="#designs" className="btn-primary text-base px-12 py-4 inline-block font-semibold uppercase tracking-wider">
              Shop Designs
            </a>
            <a href="#order" className="btn-secondary text-base px-12 py-4 inline-block font-semibold uppercase tracking-wider">
              Custom Order
            </a>
          </div>

          <div className="text-[#d4a574] text-xs uppercase tracking-widest">
            From $28.99 • Free Shipping $50+
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-[#ffb685]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Design Showcase Section */}
      <section id="designs" className="py-32 px-6 md:px-8 bg-[#1a1f36]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#ffb685] tracking-tight uppercase">
              Collections
            </h2>
            <p className="text-lg md:text-xl text-[#f5f5dc] max-w-2xl mx-auto font-light leading-relaxed">
              Hand-crafted bleach art. Zero mass production.<br/>Every shirt is completely unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-20">
            {/* Pop Culture */}
            <div className="product-card group text-left p-6">
              <div className="w-10 h-10 mb-5 rounded bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#0a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-lg font-black text-[#ffb685] mb-2 uppercase tracking-tight">Pop Culture</h3>
              <p className="text-sm text-[#f5f5dc] mb-2 font-light leading-relaxed">
                Star Wars, movies, gaming icons
              </p>
              <p className="text-xs text-[#d4a574] uppercase tracking-wider">
                Vader • Maul • More
              </p>
            </div>

            {/* Cannabis & Nature */}
            <div className="product-card group text-left p-6">
              <div className="w-10 h-10 mb-5 rounded bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#0a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-black text-[#ffb685] mb-2 uppercase tracking-tight">Cannabis & Nature</h3>
              <p className="text-sm text-[#f5f5dc] mb-2 font-light leading-relaxed">
                Botanical designs, leaf art, natural vibes
              </p>
              <p className="text-xs text-[#d4a574] uppercase tracking-wider">
                Mandala Patterns
              </p>
            </div>

            {/* Abstract */}
            <div className="product-card group text-left p-6">
              <div className="w-10 h-10 mb-5 rounded bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#0a0a0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-black text-[#ffb685] mb-2 uppercase tracking-tight">Abstract Art</h3>
              <p className="text-sm text-[#f5f5dc] mb-2 font-light leading-relaxed">
                Cosmic bursts, galaxy effects, pure chaos
              </p>
              <p className="text-xs text-[#d4a574] uppercase tracking-wider">
                One of One
              </p>
            </div>
          </div>

          {/* Shirt Options */}
          <div className="bg-[#0a0a0a] border border-[#ffb685]/20 rounded-xl p-10 md:p-12 max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-black text-[#ffb685] mb-10 uppercase tracking-tight">Specs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <h4 className="text-sm font-bold text-[#ffb685] mb-4 uppercase tracking-widest">Base Colors</h4>
                <ul className="space-y-3 text-[#f5f5dc] font-light">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded bg-[#1a1f36] border border-[#ffb685]/40"></span>
                    Navy Blue
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded bg-black border border-[#ffb685]/40"></span>
                    Black
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#ffb685] mb-4 uppercase tracking-widest">Bleach Tones</h4>
                <ul className="space-y-3 text-[#f5f5dc] font-light">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded bg-[#ffb685]"></span>
                    Pastel Orange
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded bg-[#d4a574]"></span>
                    Vibrant Tan
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#ffb685] mb-4 uppercase tracking-widest">Sizing</h4>
                <div className="flex flex-wrap gap-2">
                  {['S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
                    <span key={size} className="px-3 py-1.5 bg-[#1a1f36] text-[#f5f5dc] rounded text-sm font-medium">{size}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-6 md:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#1a1f36]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-[#ffb685] mb-20 text-center uppercase tracking-tight">Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="product-card p-10 md:p-12">
              <div className="mb-8">
                <h3 className="text-lg font-black text-[#d4a574] mb-3 uppercase tracking-wider">Standard</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-6xl font-black text-[#ffb685]">$28</span>
                  <span className="text-2xl text-[#d4a574]">.99</span>
                </div>
                <p className="text-[#f5f5dc] font-light text-sm">Pre-designed bleach art</p>
              </div>
              <ul className="text-[#f5f5dc] space-y-3 mb-8 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb685] mt-1">→</span>
                  <span>Pop culture characters</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb685] mt-1">→</span>
                  <span>Cannabis & nature themes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb685] mt-1">→</span>
                  <span>Abstract patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb685] mt-1">→</span>
                  <span>All sizes S-3XL</span>
                </li>
              </ul>
            </div>
            <div className="product-card p-10 md:p-12 border-2 border-[#ffb685] relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#ffb685] text-[#0a0a0a] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                Popular
              </div>
              <div className="mb-8">
                <h3 className="text-lg font-black text-[#ffb685] mb-3 uppercase tracking-wider">Custom</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-6xl font-black text-[#ffb685]">$34</span>
                  <span className="text-2xl text-[#d4a574]">.99</span>
                </div>
                <p className="text-[#f5f5dc] font-light text-sm">Your vision, our execution</p>
              </div>
              <ul className="text-[#f5f5dc] space-y-3 mb-8 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb685] mt-1">→</span>
                  <span>100% custom design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb685] mt-1">→</span>
                  <span>Your concept or idea</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb685] mt-1">→</span>
                  <span>Pro bleach art execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ffb685] mt-1">→</span>
                  <span>Truly one of one</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-12 text-center text-[#d4a574] text-sm uppercase tracking-widest">
            Free Shipping $50+ • 2-3 Week Turnaround
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
      <section className="py-32 px-6 md:px-8 bg-gradient-to-b from-[#1a1f36] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#ffb685] uppercase tracking-tight">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center text-2xl font-black text-[#0a0a0a]">
                1
              </div>
              <h3 className="text-base font-black text-[#ffb685] mb-2 uppercase tracking-tight">Submit</h3>
              <p className="text-sm text-[#f5f5dc] font-light">Fill out the form with your design preferences</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center text-2xl font-black text-[#0a0a0a]">
                2
              </div>
              <h3 className="text-base font-black text-[#ffb685] mb-2 uppercase tracking-tight">Quote</h3>
              <p className="text-sm text-[#f5f5dc] font-light">Receive payment link and timeline via email</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center text-2xl font-black text-[#0a0a0a]">
                3
              </div>
              <h3 className="text-base font-black text-[#ffb685] mb-2 uppercase tracking-tight">Create</h3>
              <p className="text-sm text-[#f5f5dc] font-light">Your shirt is crafted with bleach art magic</p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#ffb685] to-[#d4a574] flex items-center justify-center text-2xl font-black text-[#0a0a0a]">
                4
              </div>
              <h3 className="text-base font-black text-[#ffb685] mb-2 uppercase tracking-tight">Ship</h3>
              <p className="text-sm text-[#f5f5dc] font-light">Unique wearable art delivered to your door</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
