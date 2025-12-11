import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact Mendo Grass for questions about our organic microgreens, wholesale orders, or farm visits. Located in Ukiah, Mendocino County. Call (707) 555-0123.',
  openGraph: {
    title: 'Contact Mendo Grass - Organic Microgreens Farm',
    description: 'Get in touch with our organic microgreens farm in Mendocino County. Contact us for orders, questions, or farm visits.',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              We&apos;d love to hear from you! Get in touch with any questions about our products or services.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              {/* Address */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">📍</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Farm Location</h3>
                  <p className="text-gray-600">
                    123 Organic Way<br />
                    Mendocino County, CA 95482
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">✉️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <a 
                    href="mailto:adam@mendograss.com" 
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    adam@mendograss.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">📞</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <a 
                    href="tel:+1-707-555-0123" 
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    (707) 555-0123
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">🕒</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                  <div className="text-gray-600">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 3:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/mendograss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
                >
                  <span className="text-xl">📘</span>
                </a>
                <a
                  href="https://instagram.com/mendograss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-100 text-green-600 hover:bg-green-600 hover:text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors"
                >
                  <span className="text-xl">📷</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address <span className="text-red-600" aria-label="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select a topic</option>
                  <option value="subscription">Subscription Questions</option>
                  <option value="wholesale">Wholesale Inquiries</option>
                  <option value="delivery">Delivery Information</option>
                  <option value="product">Product Questions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-600" aria-label="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="marketingConsent"
                  name="marketingConsent"
                  className="mt-1 h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="marketingConsent" className="ml-3 text-sm text-gray-600">
                  I agree to receive marketing emails from Mendo Grass. You can unsubscribe at any time. 
                  See our{' '}
                  <a href="/privacy" className="text-green-600 hover:text-green-700 underline">
                    Privacy Policy
                  </a>
                  {' '}for details.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Visit Our Farm</h2>
          <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
            <p className="text-gray-600 text-lg">
              Interactive map coming soon - Located in beautiful Mendocino County
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How Fresh Are Your Microgreens?</h3>
              <p className="text-gray-600">
                Our microgreens are harvested the same day as delivery or pickup, ensuring maximum freshness and nutrition.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do You Offer Bulk Pricing?</h3>
              <p className="text-gray-600">
                Yes! We offer wholesale pricing for restaurants, stores, and large orders. Contact us for custom pricing.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What&apos;s Your Delivery Area?</h3>
              <p className="text-gray-600">
                We deliver throughout Mendocino County and surrounding areas. Contact us to confirm delivery to your location.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I Visit the Farm?</h3>
              <p className="text-gray-600">
                We love visitors! Please contact us to schedule a farm tour and learn about our growing process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
