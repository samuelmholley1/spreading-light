'use client'

import Image from "next/image";
import { useState } from 'react';

const restaurantsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Mendo Grass Restaurant Microgreens Subscription',
  description: 'Weekly subscription service for fresh organic microgreens for restaurants and food service professionals',
  brand: {
    '@type': 'Brand',
    name: 'Mendo Grass',
  },
  offers: {
    '@type': 'Offer',
    name: 'Microgreens 8oz Weekly (Restaurant)',
    price: '22.50',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    deliveryMethod: 'https://schema.org/OnSitePickup',
    areaServed: 'Mendocino County, CA'
  }
}

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantsJsonLd) }}
      />
      
      {/* Header Section */}
      <section className="text-center mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Restaurant & Food Service Microgreens
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Premium Microgreens Grown-to-Order for Chefs and Culinary Professionals
          </p>
          <p className="text-md text-gray-700 max-w-2xl mx-auto">
            Prices for our fresh microgreens range from <strong>$20 - $35 per pound</strong>. We happily accept orders of <strong>1/4 pound or more per variety</strong>; $20 minimum per order.
          </p>
        </div>
      </section>

      {/* Available Varieties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Available Varieties</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Currently Growing - Single Varieties */}
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
              <h3 className="text-xl font-bold text-green-700 mb-3">Currently Growing</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Pea Shoots</strong> - Sweet, tender, vitamin-packed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Sunflower</strong> - Nutty, crunchy, protein-rich</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Radish</strong> - Spicy, vibrant, liver-supporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Buckwheat</strong> - Mild, fresh, versatile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Nasturtium</strong> - Peppery, floral, elegant garnish</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Leek</strong> - Mild onion flavor, delicate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Cilantro</strong> - Fresh, herbaceous, aromatic</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Wheatgrass</strong> - Live trays for juicing</span>
                </li>
              </ul>
            </div>

            {/* Garden Mix */}
            <div className="bg-green-50 rounded-lg p-6 border-2 border-green-300">
              <h3 className="text-xl font-bold text-green-700 mb-3">Chef&apos;s Blend</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-bold text-gray-900 mb-1">Emerald Fire Mix</p>
                  <p className="text-sm">Pea Shoots + Radish</p>
                  <p className="text-xs text-gray-600 mt-1 italic">Sweet meets spicy - a balanced, vibrant blend</p>
                </div>
              </div>
            </div>

            {/* Ordering Info */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-600 mb-3">How to Order</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>
                  <strong>Lead Time:</strong> Please give us 2-3 weeks notice (one harvest cycle) depending on variety.
                </p>
                <p>
                  <strong>Standing Orders:</strong> We strongly encourage chefs to set up standing orders to reduce food waste and ensure consistent supply.
                </p>
                <p>
                  <strong>Minimum:</strong> $20 per order
                </p>
                <p>
                  <strong>Quantity:</strong> 1/4 lb or more per variety
                </p>
              </div>
            </div>
          </div>

          {/* Available Upon Request */}
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Interested in Other Varieties?</h3>
            <p className="text-center text-gray-700 mb-4">
              We&apos;re always happy to grow additional varieties based on your culinary needs. Currently exploring:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700 mb-6">
              <div>• Broccoli</div>
              <div>• Arugula</div>
              <div>• Kohlrabi</div>
              <div>• Kale</div>
              <div>• Purple Goddess Mix</div>
              <div>• And more!</div>
            </div>
            <p className="text-center text-gray-700 font-semibold">
              Let us know what you need - we&apos;re flexible and love working with creative chefs.
            </p>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Tell us a little bit about how we can best serve you.
            </p>
            <a 
              href="#restaurant-form" 
              className="inline-block bg-green-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Benefits for Restaurants */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Restaurants Choose Mendo Grass</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Grown to Order</h3>
              <p className="text-gray-700">
                We text you weekly to confirm your order. No waste, just fresh greens when you need them.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Reliable Delivery</h3>
              <p className="text-gray-700">
                Consistent weekly delivery to your restaurant or pickup at local farmers markets.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Quality</h3>
              <p className="text-gray-700">
                Sun-grown, certified organic microgreens with vibrant flavor and nutrition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Path CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600">Choose the option that works best for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Option 1: Contact Us First */}
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-green-400 transition-all">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Let&apos;s Talk First</h3>
                <p className="text-gray-600 mb-6">
                  Have questions? Want a custom quote? We&apos;re here to help plan the perfect subscription for your kitchen.
                </p>
              </div>
              <div className="space-y-4">
                <a 
                  href="mailto:adam@mendograss.com" 
                  className="block w-full bg-green-600 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-green-700 transition-colors"
                >
                  Email Us
                </a>
                <a 
                  href="tel:7073919659" 
                  className="block w-full bg-white border-2 border-green-600 text-green-600 py-2 px-4 rounded-lg text-center font-semibold hover:bg-green-50 transition-colors"
                >
                  Call (707) 391-9659
                </a>
                <p className="text-sm text-gray-500 text-center">We typically respond within 1-2 business days</p>
              </div>
            </div>

            {/* Option 2: Sign Up Now */}
            <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200 hover:border-green-400 transition-all">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Sign Up Now</h3>
                <p className="text-gray-600 mb-6">
                  Know what you need? Start your subscription below and we&apos;ll confirm your first delivery date.
                </p>
              </div>
              <div className="space-y-4">
                <a 
                  href="#subscription-form" 
                  className="block w-full bg-green-600 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-green-700 transition-colors"
                >
                  View Product Menu
                </a>
                <p className="text-sm text-gray-500 text-center">$30 per tray<br/>First delivery in ~3 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Subscription Form */}
      <section id="subscription-form" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fall Menu</h2>
              <p className="text-lg text-gray-600 mb-2">
                We deliver our certified-organic, grown-to-order microgreens to your restaurant weekly!
              </p>
              <p className="text-gray-600 mb-6">
                Our greens are harvested within 24 hours of delivery to guarantee peak freshness.
              </p>
              <div className="inline-block bg-green-50 border-2 border-green-600 rounded-lg px-6 py-3">
                <p className="text-2xl font-bold text-green-700">$30 per tray</p>
                <p className="text-sm text-gray-600">Sold by the tray • Product variability accepted</p>
              </div>
            </div>

            {/* Product Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Crop</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900"># of Clamshells</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Weight/Clamshell</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Pea Shoots</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">4</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3 oz</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Sunflower</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">4</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3 oz</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Emerald Fire Mix</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">4</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3 oz</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Chef&apos;s Blend</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">2.5 oz</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Radish</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">2.5 oz</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Buckwheat</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3 oz</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Leek</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">2</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">1.5 oz</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Cilantro</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">2</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">1.5 oz</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Nasturtium</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">2</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">1.5 oz</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Custom Mix Builder */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🎨 Create Your Custom Mix</h3>
                <p className="text-gray-700">
                  Want a custom blend tailored to your menu? We can create a signature mix just for your restaurant.
                </p>
              </div>
              <div className="text-center">
                <a 
                  href="mailto:adam@mendograss.com?subject=Custom%20Mix%20Request" 
                  className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Request Custom Mix
                </a>
              </div>
            </div>

            {/* Bulk Pricing */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">💼 Interested in Buying in Bulk?</h3>
              <p className="text-gray-700 mb-4">
                Let us know and we&apos;ll work out a custom quote for higher volume orders.
              </p>
              <a 
                href="mailto:adam@mendograss.com?subject=Bulk%20Pricing%20Inquiry" 
                className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Us for Bulk Pricing
              </a>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              Note: Different products provide different yields per tray. When you buy by the tray, you accept product variability.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howitworks" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">How It Works for Chefs</h2>
          <p className="text-center text-lg text-gray-700 mb-8">
            Simple ordering for busy kitchens
          </p>
          
          <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-12 max-w-3xl mx-auto">
            <p className="text-orange-900">
              <strong>New Partnerships:</strong> We typically plan new restaurant accounts about 3 weeks in advance to ensure perfect harvest timing. 
              Contact us now to secure your spot for upcoming weekly deliveries!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/micros_multicolor.jpg"
                  alt="Order via text"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Order via Text</h3>
              <p className="text-gray-700">
                We text you weekly before we grow. Confirm your order, adjust quantities, or skip – it&apos;s that easy. Direct line to our farm.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/greenhouse_purple.jpg"
                  alt="We grow fresh"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">We Grow Fresh</h3>
              <p className="text-gray-700">
                Your greens are grown to order under the California sun. Harvested the morning of delivery for unbeatable peak freshness.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/mendograss_tote.jpg"
                  alt="Delivered weekly"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Delivered Weekly</h3>
              <p className="text-gray-700">
                Choose delivery to your restaurant or pickup at one of our local farmers markets. Consistent timing you can count on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Chefs Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Chefs Partner with Mendo Grass</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Peak Flavor</h3>
              <p className="text-gray-700 text-sm">
                Harvested same-day for delivery. The vibrant flavor and texture far surpass distributor options – your diners will notice.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Specialty Varieties</h3>
              <p className="text-gray-700 text-sm">
                We grow heirloom and specialty microgreens you can&apos;t find elsewhere. Unique ingredients for distinguished menus.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Local Story</h3>
              <p className="text-gray-700 text-sm">
                Feature &ldquo;Mendo Grass&rdquo; on your menu. Diners love knowing their food supports Mendocino County farmers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Personal Support</h3>
              <p className="text-gray-700 text-sm">
                Direct communication with our farm team. Special requests? Custom growing? Let&apos;s collaborate on your seasonal menu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Chefs Are Saying</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-green-600 text-2xl mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-4 italic">
                The quality and freshness of Mendo Grass microgreens are outstanding. They arrive vibrant and full of flavor – exactly what we need to elevate our farm-to-table menu.
              </p>
              <p className="text-gray-900 font-semibold">— Executive Chef, Healdsburg Bistro</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="text-green-600 text-2xl mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-4 italic">
                Working with Mendo Grass has been fantastic. Reliable weekly deliveries, beautiful greens, and Adam is always responsive. It&apos;s like having a farm partner in your kitchen.
              </p>
              <p className="text-gray-900 font-semibold">— Chef/Owner, Sonoma County Restaurant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pickup & Delivery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Pickup & Delivery Options</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Local delivery available in Ukiah, Healdsburg, & Sebastopol, or pickup at farmers markets
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Saturday Pickup</h3>
              <p className="text-gray-700">
                Healdsburg Farmers Market<br />
                Santa Rosa Farmers Market<br />
                Ukiah Farmers Market
              </p>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">Sunday Pickup</h3>
              <p className="text-gray-700">
                Sebastopol Farmers Market
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Elevate Your Menu?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join leading restaurants in Mendocino and Sonoma counties
          </p>
          <a
            href="#subscription-form"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Start Your Subscription
          </a>
        </div>
      </section>
    </div>
  );
}

// Restaurant Subscription Form Component (8oz only)
function RestaurantSubscriptionForm() {
  const [frequency, setFrequency] = useState('weekly');
  const [paymentPlan, setPaymentPlan] = useState('weekly');
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');

  const basePrice = 22.50; // 8oz only

  const getSubtotal = () => {
    if (paymentPlan === 'monthly') {
      return basePrice * 4;
    }
    return basePrice;
  };

  return (
    <div id="subscription-form" className="space-y-8">
      {/* Plan Display (8oz only) */}
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-4">Subscription Plan:</label>
        <div className="border-2 border-green-500 bg-green-50 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900">Microgreens 8oz</h3>
            <p className="text-gray-600 mb-2">Perfect for professional kitchens</p>
            <p className="text-green-600 font-bold text-2xl">${basePrice}/week</p>
          </div>
        </div>
      </div>

      {/* Frequency */}
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-4">Frequency:</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              frequency === 'weekly' 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => setFrequency('weekly')}
          >
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Weekly</h3>
              <p className="text-sm text-gray-600">Every week</p>
            </div>
          </div>
          <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              frequency === 'biweekly' 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => setFrequency('biweekly')}
          >
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Bi-weekly</h3>
              <p className="text-sm text-gray-600">Every other week</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Plan */}
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-4">Payment plan:</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              paymentPlan === 'weekly' 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => setPaymentPlan('weekly')}
          >
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Pay Weekly</h3>
              <p className="text-sm text-gray-600">Charged each delivery</p>
            </div>
          </div>
          <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              paymentPlan === 'monthly' 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => setPaymentPlan('monthly')}
          >
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">Pay Monthly</h3>
              <p className="text-sm text-gray-600">Charged monthly</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pickup or Delivery */}
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-4">Pickup or delivery?</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              deliveryMethod === 'delivery' 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => setDeliveryMethod('delivery')}
          >
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">🚚 Delivery</h3>
              <p className="text-sm text-gray-600">Ukiah, Healdsburg, Sebastopol</p>
            </div>
          </div>
          <div
            className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
              deliveryMethod === 'pickup' 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-200 hover:border-green-300'
            }`}
            onClick={() => setDeliveryMethod('pickup')}
          >
            <div className="text-center">
              <h3 className="font-semibold text-gray-900">📍 Pickup</h3>
              <p className="text-sm text-gray-600">Farmers markets</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtotal and Continue */}
      <div className="border-t pt-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold text-gray-900">Subtotal</span>
          <span className="text-2xl font-bold text-green-600">
            ${getSubtotal().toFixed(2)}
            {paymentPlan === 'monthly' ? '/month' : '/week'}
          </span>
        </div>
        
        <button className="w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
          Continue to Checkout
        </button>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          Questions? Contact us at adam@mendograss.com
        </p>
      </div>
    </div>
  );
}
