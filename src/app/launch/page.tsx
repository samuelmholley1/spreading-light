import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Greenhouse Launch Event | Mendo Grass',
  description: 'Join us for the groundbreaking and ribbon cutting ceremony of our new greenhouse facility. An exclusive B2B networking event for food industry professionals.',
  keywords: 'greenhouse launch, ribbon cutting, groundbreaking, B2B networking, microgreens, food industry professionals, chefs, school districts',
};

export default function LaunchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat py-24"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/wheatgrass_background.jpg')"
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-6">
            <span className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              EXCLUSIVE B2B EVENT
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Greenhouse Launch Event
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Join food industry professionals for the groundbreaking and ribbon cutting of our new state-of-the-art greenhouse facility
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-green-300 mb-2">📅 Date</h3>
              <p className="text-gray-200">Monday, October 27, 2025</p>
            </div>
            <div>
              <h3 className="font-semibold text-green-300 mb-2">🕰️ Time</h3>
              <p className="text-gray-200">5:00 PM - 8:00 PM</p>
            </div>
            <div>
              <h3 className="font-semibold text-green-300 mb-2">📍 Location</h3>
              <p className="text-gray-200">Mendo Grass Greenhouse</p>
              <p className="text-gray-200">Mendocino County, CA</p>
            </div>
            <div>
              <h3 className="font-semibold text-green-300 mb-2">🍷 Refreshments</h3>
              <p className="text-gray-200">Wine, craft beer, and</p>
              <p className="text-gray-200">gourmet hors d&apos;oeuvres</p>
            </div>
          </div>
        </div>
      </div>

      {/* Who Should Attend */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Should Attend</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This exclusive event is designed for food industry professionals interested in premium microgreen partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Executive Chefs and Restaurateurs</h3>
              <p className="text-gray-600 mb-4">
                Restaurant owners, head chefs, and culinary directors seeking premium microgreens for elevated dishes.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Bring 1-3 colleagues interested in sourcing
              </div>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏫</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">School Food Service Directors</h3>
              <p className="text-gray-600 mb-4">
                Educational food service leaders focused on nutrition programs and farm-to-school initiatives.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Perfect for district-level decision makers
              </div>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Food Distributors and Retailers</h3>
              <p className="text-gray-600 mb-4">
                Wholesale buyers, grocery chains, and specialty food distributors looking for premium local products.
              </p>
              <div className="text-sm text-green-600 font-medium">
                Explore partnership opportunities
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event Highlights */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Event Highlights</h2>
            <p className="text-xl text-gray-600">
              More than just a ribbon cutting - this is your opportunity to explore premium microgreen partnerships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">🏢</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Facility Tour</h3>
              <p className="text-gray-600 text-sm">See our state-of-the-art growing systems and quality control processes</p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">🥗</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Product Tasting</h3>
              <p className="text-gray-600 text-sm">Sample our full range of microgreens and specialty products</p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">💼</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Partnership Discussions</h3>
              <p className="text-gray-600 text-sm">Explore wholesale pricing, custom programs, and delivery options</p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-xl">🤝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Industry Networking</h3>
              <p className="text-gray-600 text-sm">Connect with other food professionals and industry leaders</p>
            </div>
          </div>
        </div>
      </div>

      {/* RSVP Form */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Reserve Your Spot</h2>
            <p className="text-xl text-gray-600">
              Limited space available. Priority given to food industry professionals.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="e.g., Executive Chef, Food Service Director"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization/Restaurant *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="e.g., Mendocino Bistro, MUSD"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="">Select your industry</option>
                    <option value="restaurant">Restaurant/Food Service</option>
                    <option value="school">School District/Educational</option>
                    <option value="grocery">Grocery/Retail</option>
                    <option value="catering">Catering Company</option>
                    <option value="healthcare">Healthcare/Senior Living</option>
                    <option value="corporate">Corporate Food Service</option>
                    <option value="distributor">Food Distributor</option>
                    <option value="other">Other Food Industry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="monthlyVolume" className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Monthly Volume
                  </label>
                  <select
                    id="monthlyVolume"
                    name="monthlyVolume"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select volume range</option>
                    <option value="small">1-5 lbs (Small restaurant/café)</option>
                    <option value="medium">6-20 lbs (Mid-size establishment)</option>
                    <option value="large">21-50 lbs (Large restaurant/chain)</option>
                    <option value="xlarge">50+ lbs (School district/major operation)</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Interests (Check all that apply)
                </label>
                <div className="grid md:grid-cols-2 gap-3 mt-2">
                  <label className="flex items-center">
                    <input type="checkbox" name="interests" value="microgreens" className="mr-2 text-green-600" />
                    Fresh microgreen varieties
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="interests" value="wheatgrass" className="mr-2 text-green-600" />
                    Wheatgrass for juice programs
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="interests" value="pesto" className="mr-2 text-green-600" />
                    Pea shoot pesto products
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="interests" value="custom" className="mr-2 text-green-600" />
                    Custom growing programs
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="interests" value="pricing" className="mr-2 text-green-600" />
                    Wholesale pricing tiers
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" name="interests" value="delivery" className="mr-2 text-green-600" />
                    Delivery/logistics solutions
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Attendees *
                </label>
                <select
                  id="guestCount"
                  name="guestCount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select number of attendees</option>
                  <option value="1">Just myself</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                  <option value="5">5+ people (please specify in comments)</option>
                </select>
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Comments or Specific Interests
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={4}
                  placeholder="Tell us about your specific needs, questions, or what you'd like to discuss..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">What to Expect</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Facility tour and growing process demonstration</li>
                  <li>• Product tasting and quality showcase</li>
                  <li>• Wholesale pricing and partnership discussions</li>
                  <li>• Networking with other food industry professionals</li>
                  <li>• Q&A session with our growing team</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 px-6 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Reserve My Spot - October 27th
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to receive event updates via email and SMS. 
                We respect your privacy and won&apos;t share your information.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Contact & Questions */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Questions About the Event?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help with any questions about the launch event or partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/wholesale"
              className="inline-block border-2 border-green-600 text-green-400 px-8 py-3 rounded-md font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              View Wholesale Catalog
            </a>
          </div>

          <div className="mt-12 text-gray-400">
            <p className="mb-2">
              <strong>Event Coordinator:</strong> adam@mendograss.com
            </p>
            <p>
              <strong>Phone:</strong> (707) 555-0123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
