export default function FindUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Find Us
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Discover where to find fresh Mendo Grass microgreens at farmers markets, stores, and restaurants near you.
            </p>
          </div>
        </div>
      </div>

      {/* Farmers Markets */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Farmers&apos; Markets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">🏛️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ukiah Saturday Market</h3>
                  <div className="space-y-1 text-gray-600">
                    <p><strong>When:</strong> Saturdays, 8:30 AM - 12:00 PM</p>
                    <p><strong>Season:</strong> Year-round</p>
                    <p><strong>Location:</strong> School & Clay Streets, Ukiah</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Our main market location! Find us at our regular booth with the full selection of fresh microgreens and wheatgrass.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">🌞</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mendocino Sunday Market</h3>
                  <div className="space-y-1 text-gray-600">
                    <p><strong>When:</strong> Sundays, 10:00 AM - 2:00 PM</p>
                    <p><strong>Season:</strong> May through October</p>
                    <p><strong>Location:</strong> Mendocino Village</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">
                    Seasonal market in beautiful coastal Mendocino. Limited selection but always fresh!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stores */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Stores and Grocers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🛒</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Harvest Market</h3>
                <p className="text-gray-600 text-sm mb-3">
                  171 Boatyard Dr, Fort Bragg, CA 95437
                </p>
                <p className="text-xs text-gray-500">
                  Full selection in the produce section
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🌿</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mariposa Market</h3>
                <p className="text-gray-600 text-sm mb-3">
                  1013 Ford St, Ukiah, CA 95482
                </p>
                <p className="text-xs text-gray-500">
                  Organic microgreens and wheatgrass
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🏪</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mendocino Market</h3>
                <p className="text-gray-600 text-sm mb-3">
                  45051 Ukiah St, Mendocino, CA 95460
                </p>
                <p className="text-xs text-gray-500">
                  Seasonal availability
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🥬</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Redwood Valley Market</h3>
                <p className="text-gray-600 text-sm mb-3">
                  7940 N State St, Redwood Valley, CA 95470
                </p>
                <p className="text-xs text-gray-500">
                  Weekly deliveries Tuesday & Friday
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🌾</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Good Life Grocery</h3>
                <p className="text-gray-600 text-sm mb-3">
                  485 S State St, Ukiah, CA 95482
                </p>
                <p className="text-xs text-gray-500">
                  Fresh microgreens in refrigerated section
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🏬</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Point Arena Market</h3>
                <p className="text-gray-600 text-sm mb-3">
                  185 Main St, Point Arena, CA 95468
                </p>
                <p className="text-xs text-gray-500">
                  Limited selection, call ahead
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Restaurants */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Restaurants and Cafes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">🍽️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Patrona Restaurant</h3>
                  <p className="text-gray-600 text-sm mb-2">130 W Standley St, Ukiah, CA 95482</p>
                  <p className="text-xs text-gray-500">
                    Features our microgreens in seasonal salads and garnishes
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">☕</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fieldbrook Cafe</h3>
                  <p className="text-gray-600 text-sm mb-2">123 Farm Rd, Ukiah, CA 95482</p>
                  <p className="text-xs text-gray-500">
                    Uses our wheatgrass for fresh juices and smoothies
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">🥗</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Earthly Delights</h3>
                  <p className="text-gray-600 text-sm mb-2">456 Organic Ave, Fort Bragg, CA 95437</p>
                  <p className="text-xs text-gray-500">
                    Farm-to-table restaurant featuring our full microgreen selection
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl">🌮</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Coastal Kitchen</h3>
                  <p className="text-gray-600 text-sm mb-2">789 Ocean View Dr, Mendocino, CA 95460</p>
                  <p className="text-xs text-gray-500">
                    Seasonal menu with local microgreens as garnish and in specialty dishes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-green-50 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Home Delivery Available</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Can&apos;t make it to the market or store? We offer convenient home delivery 
              throughout Mendocino County. Subscribe to our weekly delivery service and 
              never run out of fresh microgreens.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-2xl">📦</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Fresh Packaging</h3>
                <p className="text-sm text-gray-600">
                  Carefully packed to maintain freshness during delivery
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-2xl">🚚</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Reliable Service</h3>
                <p className="text-sm text-gray-600">
                  Weekly deliveries on your preferred day
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-2xl">🌱</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Always Fresh</h3>
                <p className="text-sm text-gray-600">
                  Harvested the same day as delivery
                </p>
              </div>
            </div>
            <a
              href="/subscriptions"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Start Home Delivery
            </a>
          </div>
        </div>

        {/* Contact for New Locations */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Want Us at Your Location?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Are you a store owner or restaurant chef interested in carrying our fresh microgreens? 
            We&apos;d love to partner with you to bring premium local produce to your customers.
          </p>
          <a
            href="/contact"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Contact Us for Wholesale
          </a>
        </div>
      </div>
    </div>
  )
}
