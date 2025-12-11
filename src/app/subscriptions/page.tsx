'use client'

import Image from "next/image";
import { useState } from 'react';

// Note: Metadata export not available in client components, handled in layout
const subscriptionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Mendo Grass Microgreens Subscription',
  description: 'Weekly subscription service for fresh organic microgreens and wheatgrass',
  brand: {
    '@type': 'Brand',
    name: 'Mendo Grass',
  },
  aggregateOffer: {
    '@type': 'AggregateOffer',
    lowPrice: '17.50',
    highPrice: '22.50',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    offerCount: 3
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Microgreens 5oz Weekly',
      price: '17.50',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      deliveryMethod: 'https://schema.org/OnSitePickup',
      areaServed: 'Mendocino County, CA'
    },
    {
      '@type': 'Offer',
      name: 'Microgreens 8oz Weekly',
      price: '22.50',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      deliveryMethod: 'https://schema.org/OnSitePickup',
      areaServed: 'Mendocino County, CA'
    },
    {
      '@type': 'Offer',
      name: 'Wheatgrass Live Tray Weekly',
      price: '20.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      deliveryMethod: 'https://schema.org/OnSitePickup',
      areaServed: 'Mendocino County, CA'
    },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does weekly ordering work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We'll text you when we're getting ready to grow your greens. Add-on extras to your order, or 'skip' by 9pm that day to opt out of that week's share, at no charge."
      }
    },
    {
      '@type': 'Question', 
      name: 'Where do you deliver?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We offer local delivery throughout Ukiah, Healdsburg, & Sebastopol. Alternatively, you can opt to pickup your share at your local farmers' market."
      }
    },
    {
      '@type': 'Question',
      name: 'Can I customize my subscription?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! You can choose your preferred size, frequency, and delivery method. You can also add weekly extras like our signature pea shoot pesto.'
      }
    },
    {
      '@type': 'Question',
      name: 'What payment methods do you accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept all major credit cards and debit cards. Payment is processed securely and automatically for each delivery.'
      }
    }
  ]
}

export default function Subscriptions() {
  return (
    <div className="min-h-screen py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(subscriptionsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Header Section */}
      <section className="text-center mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Subscribe to Access Weekly, Grown-to-Order Microgreens & Wheatgrass
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Join Our CSA and Get Fresh, Locally-Grown Microgreens Delivered Weekly
          </p>
        </div>
      </section>

      {/* Interactive Subscription Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Personalize Your Farm Membership</h2>
              <p className="text-lg text-gray-600">Mendo Grass Subscription Plans</p>
            </div>

            <SubscriptionForm />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="howitworks" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
          <p className="text-center text-lg text-gray-700 mb-12">
            Sun-grown to order for weekly pickup or delivery
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/micros_multicolor.jpg"
                  alt="Select a size"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Select a Size</h3>
              <p className="text-gray-700">
                Choose from two sizes of microgreens (perfect for 2 - 4 people) or a flat tray of wheatgrass for your weekly juicing.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/mendograss_tote.jpg"
                  alt="Subscribe"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Subscribe</h3>
              <p className="text-gray-700">
                Select your pickup or delivery address and enter payment once. Your first delivery arrives within 1-2 weeks, then weekly after that.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/arden_micros.jpg"
                  alt="Skip when needed"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skip When Needed</h3>
              <p className="text-gray-700">
                We&apos;ll send you a text weekly before we grow – add on items or skip any week, for any reason, at no charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Weekly Greens</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mendo Magic Blends */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-green-700 mb-3">Mendo Magic Mix</h3>
              <p className="text-gray-700 mb-4">
                Our signature curated blend of the freshest, most flavorful microgreens. A rotating selection that changes with the seasons, always delivering peak nutrition and taste.
              </p>
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Basic (5oz):</span> Feeds 1-2 people | $20.00/week</p>
                <p><span className="font-semibold">Medium (8oz):</span> Feeds 2-3 people | $30.00/week</p>
                <p><span className="font-semibold">Family (16oz):</span> Feeds 3-4 people | $40.00/week</p>
              </div>
            </div>

            {/* Contact CTA for Specific Varieties */}
            <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
              <h3 className="text-2xl font-bold text-green-700 mb-3">Specific Varieties Available</h3>
              <p className="text-gray-700 mb-4">
                Looking for specific microgreen varieties like Pea Shoots, Broccoli, Radish, or others? We grow a wide selection of individual varieties to meet your needs.
              </p>
              <p className="text-gray-700 mb-6">
                Our varieties include sweet and tender Pea Shoots, sulforaphane-rich Broccoli microgreens, spicy Radish, and more. Each variety offers unique flavors and nutritional benefits.
              </p>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-md"
                >
                  Contact Us for Variety Information
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Benefits */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Families Love Mendo Grass</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Farm-to-Table Freshness</h3>
              <p className="text-gray-700">
                Harvested just 1-2 days before delivery for maximum flavor and nutrition. You can taste the difference that sun-grown, locally-grown makes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supporting Local</h3>
              <p className="text-gray-700">
                Your dollars stay in Mendocino County, supporting sustainable agriculture and our farm family. Feel good about where your food comes from.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">No Commitment Needed</h3>
              <p className="text-gray-700">
                Skip any week, swap items you don&apos;t want, or pause your subscription anytime. We make it easy and flexible for your family&apos;s needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Community Says</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-green-600 text-2xl mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-4 italic">
                I love opening the boxes every week and seeing what&apos;s in there. The microgreens are so fresh and vibrant – nothing like what you get in the store. Feels like such a treat!
              </p>
              <p className="text-gray-900 font-semibold">— Sarah M., Ukiah</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-green-600 text-2xl mb-4">&ldquo;</div>
              <p className="text-gray-700 mb-4 italic">
                Best decision we made this year! Supporting a local farm and getting the most nutritious greens delivered to our door. Our kids actually ask for the microgreens now!
              </p>
              <p className="text-gray-900 font-semibold">— James & Lisa T., Healdsburg</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pickup & Delivery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Pickup & Delivery</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            Choose between local delivery (Ukiah, Healdsburg, & Sebastopol) or convenient pickup at your favorite farmers markets.
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How does weekly ordering work?</h3>
              <p className="text-gray-700">
                We&apos;ll text you when we&apos;re getting ready to grow your greens. Add-on extras to your order, or &quot;skip&quot; by 9pm that day to opt out of that week&apos;s share, at no charge.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Where do you deliver?</h3>
              <p className="text-gray-700">
                We offer local delivery throughout Ukiah, Healdsburg, & Sebastopol. Alternatively, you can opt to pickup your share at your local farmers&apos; market.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Can I customize my subscription?</h3>
              <p className="text-gray-700">
                Yes! You can choose your preferred size, frequency, and delivery method. You can also add weekly extras like our signature pea shoot pesto.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What payment methods do you accept?</h3>
              <p className="text-gray-700">
                We accept all major credit cards and debit cards. Payment is processed securely and automatically for each delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Get your greens</h2>
          <p className="text-xl text-green-100 mb-8">
            Join today for a fresh and flexible way to enjoy your weekly greens.
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

// Interactive Subscription Form Component
function SubscriptionForm() {
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof plans>('mendo-magic-basic');
  const [frequency, setFrequency] = useState('weekly');
  const [paymentPlan, setPaymentPlan] = useState('weekly');
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');

  const plans = {
    'mendo-magic-basic': { name: 'Mendo Magic Basic', price: 20.00, size: '5oz', feeds: '1-2 people', description: 'A curated blend of microgreens', stripeUrl: 'https://buy.stripe.com/3cI3cu87A9nt91c4e73ks01' },
    'mendo-magic-medium': { name: 'Mendo Magic Medium', price: 30.00, size: '8oz', feeds: '2-3 people', description: 'A curated blend of microgreens', stripeUrl: undefined },
    'mendo-magic-family': { name: 'Mendo Magic Family', price: 40.00, size: '16oz', feeds: '3-4 people', description: 'A curated blend of microgreens', stripeUrl: undefined },
  };

  const getSubtotal = () => {
    const basePrice = plans[selectedPlan].price;
    if (paymentPlan === 'monthly') {
      return basePrice * 4;
    }
    return basePrice;
  };

  return (
    <div id="subscription-form" className="space-y-8">
      {/* Plan Selection */}
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-4">Choose Your Weekly Greens:</label>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(plans).map(([key, plan]) => (
            <div
              key={key}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                selectedPlan === key 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-200 hover:border-green-300'
              }`}
              onClick={() => setSelectedPlan(key as keyof typeof plans)}
            >
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-green-600 font-bold text-lg mb-1">${plan.price.toFixed(2)}/{plan.size}</p>
                <p className="text-sm text-gray-600 mb-2">{plan.feeds}</p>
                <p className="text-xs text-gray-500">{plan.description}</p>
              </div>
            </div>
          ))}
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
        
        <button 
          onClick={() => {
            const plan = plans[selectedPlan];
            if (plan.stripeUrl && frequency === 'weekly') {
              window.location.href = plan.stripeUrl;
            } else {
              alert('Checkout coming soon! Please contact us at adam@mendograss.com to set up your subscription.');
            }
          }}
          className="w-full bg-green-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Continue to Checkout
        </button>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          Secure checkout powered by Stripe
        </p>
      </div>
    </div>
  );
}
