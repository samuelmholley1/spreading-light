import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Organic Microgreens Farm',
  description: 'Learn about Mendo Grass, our sustainable growing practices, and our mission to provide premium organic microgreens in Mendocino County. USDA Certified Organic since our founding.',
  openGraph: {
    title: 'About Mendo Grass - Organic Microgreens Farm',
    description: 'Sustainable organic microgreens farming in Mendocino County. Learn about our mission, values, and USDA certification.',
    images: ['/arden_micros.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'Store'],
  name: 'Mendo Grass',
  url: 'https://mendograss.com',
  logo: 'https://mendograss.com/logo_colored.jpg',
  description: 'Premium organic microgreens and wheatgrass farm in Mendocino County, California',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Organic Way',
    addressLocality: 'Ukiah',
    addressRegion: 'CA',
    postalCode: '95482',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '39.1507',
    longitude: '-123.2077'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-707-555-0123',
    contactType: 'customer service',
    email: 'adam@mendograss.com',
    availableLanguage: 'English'
  },
  openingHours: [
    'Mo-Fr 08:00-17:00',
    'Sa 09:00-15:00'
  ],
  paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
  currenciesAccepted: 'USD',
  priceRange: '$15-$50',
  areaServed: [
    {
      '@type': 'City',
      name: 'Ukiah',
      containedInPlace: {
        '@type': 'State',
        name: 'California'
      }
    },
    {
      '@type': 'City', 
      name: 'Healdsburg',
      containedInPlace: {
        '@type': 'State',
        name: 'California'
      }
    },
    {
      '@type': 'City',
      name: 'Sebastopol', 
      containedInPlace: {
        '@type': 'State',
        name: 'California'
      }
    }
  ],
  sameAs: [
    'https://facebook.com/mendograss',
    'https://instagram.com/mendograss',
  ],
  foundingDate: '2020',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Organic Microgreens & Wheatgrass',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Organic Microgreens',
          category: 'Fresh Produce',
          brand: {
            '@type': 'Brand',
            name: 'Mendo Grass'
          }
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: 'Organic Wheatgrass',
          category: 'Fresh Produce',
          brand: {
            '@type': 'Brand',
            name: 'Mendo Grass'
          }
        },
      },
    ],
  },
  makesOffer: {
    '@type': 'Offer',
    name: 'Weekly CSA Subscription',
    description: 'Fresh organic microgreens delivered weekly',
    price: '17.50',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-green-50 to-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              About Mendo Grass
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
              Growing premium microgreens and wheatgrass in Mendocino County since our founding
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/greenhouse_purple.jpg"
              alt="Mendo Grass greenhouse and growing operation"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="text-lg text-gray-700">
              Mendo Grass sprouted from a passion for growing the most nutrient-dense, 
              flavorful microgreens possible. Located in the heart of Mendocino County, 
              we&apos;ve been cultivating premium microgreens and wheatgrass using sustainable, 
              sun-grown methods.
            </p>
            <p className="text-lg text-gray-700">
              Our commitment to quality means every tray is carefully tended from seed 
              to harvest. We believe that great food starts with great soil, clean water, 
              and plenty of California sunshine.
            </p>
            <p className="text-lg text-gray-700">
              From our farm to your table, we&apos;re dedicated to providing fresh, 
              locally-grown nutrition that supports our community&apos;s health and wellness.
            </p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Mission and Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainable Growing</h3>
              <p className="text-gray-600">
                We use environmentally responsible growing practices that protect our soil and water for future generations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Every microgreen is grown with care and harvested at peak nutrition to deliver maximum flavor and health benefits.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community First</h3>
              <p className="text-gray-600">
                We&apos;re proud to serve our local community with fresh, nutritious greens while supporting local businesses.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 bg-green-50 rounded-2xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Certified Organic</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We&apos;re proud to be certified organic, ensuring that our microgreens and wheatgrass 
              are grown without synthetic pesticides, herbicides, or fertilizers. This certification 
              represents our commitment to your health and environmental stewardship.
            </p>
            <div className="mt-8">
              <span className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">
                USDA Certified Organic
              </span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience Fresh?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of health-conscious families and taste the difference that 
            sun-grown, locally-harvested microgreens can make.
          </p>
          <a
            href="/subscriptions"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Start Your Subscription
          </a>
        </div>
      </div>
    </div>
  )
}
