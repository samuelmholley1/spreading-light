import Image from 'next/image'

export default function WholesalePage() {
  const microgreens = [
    {
      name: "Buckwheat Microgreens",
      image: "/micros_multicolor.jpg",
      prices: [
        { size: "3 oz", price: 5.00 },
        { size: "8 oz", price: 22.50 },
        { size: "10x20 Tray (Live)", price: 35.00 },
        { size: "16 oz", price: 40.00 }
      ]
    },
    {
      name: "Emerald Fire Micro Mix",
      image: "/arden_micros.jpg",
      prices: [
        { size: "3 oz", price: 5.00 },
        { size: "8 oz", price: 25.00 },
        { size: "16 oz", price: 42.50 }
      ]
    },
    {
      name: "Pea Shoots",
      image: "/peasto_4jars.jpg",
      prices: [
        { size: "3 oz", price: 4.00 },
        { size: "8 oz", price: 22.50 },
        { size: "10x20 Tray (Live)", price: 35.00 },
        { size: "16 oz", price: 40.00 }
      ]
    },
    {
      name: "Radish Microgreens",
      image: "/greens_and_grass.jpg",
      prices: [
        { size: "3 oz", price: 5.00 },
        { size: "8 oz", price: 22.50 },
        { size: "10x20 Tray (Live)", price: 35.00 },
        { size: "16 oz", price: 40.00 }
      ]
    },
    {
      name: "Summer Breeze Micro Mix",
      image: "/micros_multicolor.jpg",
      prices: [
        { size: "3 oz", price: 5.00 },
        { size: "8 oz", price: 25.00 },
        { size: "16 oz", price: 42.50 }
      ]
    },
    {
      name: "Sunflowers Microgreens",
      image: "/family_sunflowers.jpg",
      prices: [
        { size: "3 oz", price: 4.00 },
        { size: "8 oz", price: 22.50 },
        { size: "10x20 Tray (Live)", price: 35.00 },
        { size: "16 oz", price: 40.00 }
      ]
    }
  ]

  const wheatgrass = {
    name: "Wheatgrass",
    image: "/wheatgrass_shots.jpg",
    prices: [
      { size: "17x17 Flat", price: 20.00 }
    ]
  }

  const pantryItems = [
    {
      name: "Pea Shoot Pesto",
      image: "/peasto_4jars.jpg",
      prices: [
        { size: "6.5 oz", price: 12.00 },
        { size: "30 oz", price: 55.00 },
        { size: "6-pack", price: 65.00 },
        { size: "12-pack", price: 120.00 }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              Wholesale Catalog
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Premium microgreens, wheatgrass, and specialty products for restaurants, stores, and bulk buyers
            </p>
            <div className="mt-8 flex justify-center items-center space-x-4 text-sm text-gray-500">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                📍 Ukiah, CA
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                🌱 Certified Organic
              </span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
                🚚 Local Delivery Available
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Microgreens Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Microgreens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microgreens.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{product.name}</h3>
                  <div className="space-y-3">
                    {product.prices.map((price, priceIndex) => (
                      <div key={priceIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-600 text-sm font-medium">{price.size}</span>
                        <span className="text-green-600 font-bold">${price.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wheatgrass Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Wheatgrass</h2>
          <div className="max-w-md">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 bg-gray-50">
                <Image
                  src={wheatgrass.image}
                  alt={wheatgrass.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{wheatgrass.name}</h3>
                <div className="space-y-3">
                  {wheatgrass.prices.map((price, priceIndex) => (
                    <div key={priceIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-gray-600 text-sm font-medium">{price.size}</span>
                      <span className="text-green-600 font-bold">${price.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pantry Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Pantry</h2>
          <div className="max-w-md">
            {pantryItems.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{product.name}</h3>
                  <div className="space-y-3">
                    {product.prices.map((price, priceIndex) => (
                      <div key={priceIndex} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-600 text-sm font-medium">{price.size}</span>
                        <span className="text-green-600 font-bold">${price.price.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wholesale Information */}
        <div className="bg-green-50 rounded-2xl p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Wholesale Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">📦</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Minimum Orders</h3>
                <p className="text-gray-600">
                  $50 minimum for wholesale accounts<br />
                  Volume discounts available
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">🚚</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery Schedule</h3>
                <p className="text-gray-600">
                  Tuesday, Thursday, Friday<br />
                  Next-day delivery available
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">⏰</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Deadlines</h3>
                <p className="text-gray-600">
                  Orders due by 5 PM<br />
                  2 days before delivery
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Wholesale Terms</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• <strong>Payment Terms:</strong> Net 30 for established accounts, credit application required</li>
                <li>• <strong>Volume Discounts:</strong> 5% off orders over $200, 10% off orders over $500</li>
                <li>• <strong>Delivery Zones:</strong> Free delivery within 25 miles of Ukiah, delivery fees apply beyond</li>
                <li>• <strong>Product Freshness:</strong> All microgreens harvested same day as delivery</li>
                <li>• <strong>Organic Certification:</strong> USDA Certified Organic, certificates available upon request</li>
                <li>• <strong>Custom Growing:</strong> Special varieties available with advance notice</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact for Wholesale */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Order?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us to set up your wholesale account and start receiving fresh, 
            premium microgreens for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Contact for Wholesale Account
            </a>
            <a
              href="tel:+1-707-555-0123"
              className="inline-block bg-white text-green-600 border-2 border-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Call (707) 555-0123
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Business hours: Monday-Friday 8AM-5PM, Saturday 9AM-3PM
          </p>
        </div>
      </div>
    </div>
  )
}
