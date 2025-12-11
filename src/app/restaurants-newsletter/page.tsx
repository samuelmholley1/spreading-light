import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurants Newsletter | Mendo Grass',
  description: 'Professional newsletters for restaurant chefs and kitchen staff about microgreens, menu integration, and sourcing.',
  keywords: 'restaurant newsletter, chef resources, microgreens menu, professional kitchen, culinary trends',
};

const restaurantNewsletters = [
  {
    date: '2025-08-30',
    title: 'Fall Menu Integration: Seasonal Microgreens',
    excerpt: 'Discover which microgreens pair perfectly with autumn flavors and how to incorporate them into your fall menu.',
    slug: '2025-08-30-fall-menu-integration'
  },
  {
    date: '2025-08-23',
    title: 'Storage and Handling: Maximizing Shelf Life',
    excerpt: 'Professional tips for storing microgreens to maintain freshness, flavor, and presentation in your kitchen.',
    slug: '2025-08-23-storage-handling'
  },
  {
    date: '2025-08-16',
    title: 'Customer Education: Selling the Microgreens Story',
    excerpt: 'How to educate your customers about microgreens and create compelling menu descriptions that drive orders.',
    slug: '2025-08-16-customer-education'
  }
];

export default function RestaurantsNewsletterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Restaurants Newsletter</h1>
          <p className="text-xl text-orange-100">
            Professional insights, menu ideas, and industry trends for chefs and restaurant professionals.
          </p>
        </div>
      </div>

      {/* Newsletter Archive */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Subscribe Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Restaurant Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get bi-weekly newsletters with menu ideas, sourcing tips, and industry insights delivered to your inbox or via SMS.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email Signup */}
            <form className="space-y-4">
              <h3 className="font-semibold text-gray-900">Email Newsletter</h3>
              <input
                type="email"
                placeholder="Professional email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="w-full px-8 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors font-semibold"
              >
                Subscribe to Email
              </button>
            </form>

            {/* SMS Signup */}
            <form className="space-y-4">
              <h3 className="font-semibold text-gray-900">SMS Updates (Chefs Only)</h3>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
              <button
                type="submit"
                className="w-full px-8 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-semibold"
              >
                Subscribe to SMS
              </button>
              <p className="text-xs text-gray-500">
                SMS updates for time-sensitive availability and special chef offers
              </p>
            </form>
          </div>
        </div>

        {/* Newsletter Archive */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Newsletter Archive</h2>
        
        <div className="space-y-8">
          {restaurantNewsletters.map((newsletter) => (
            <article key={newsletter.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <time dateTime={newsletter.date}>
                    {new Date(newsletter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="mx-2">•</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-medium">
                    Restaurants
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-orange-600">
                  <a href={`/restaurants-newsletter/${newsletter.slug}`}>
                    {newsletter.title}
                  </a>
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {newsletter.excerpt}
                </p>
                
                <a
                  href={`/restaurants-newsletter/${newsletter.slug}`}
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
                >
                  Read full newsletter
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Elevate Your Menu?</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Partner with us for consistent, high-quality microgreens that will set your dishes apart from the competition.
          </p>
          <a
            href="/wholesale"
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            View Wholesale Options
          </a>
        </div>
      </div>
    </div>
  );
}
