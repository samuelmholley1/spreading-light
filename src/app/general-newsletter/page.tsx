import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'General Newsletter | Mendo Grass',
  description: 'General newsletters about microgreens, nutrition, growing tips, and healthy living for everyone.',
  keywords: 'microgreens newsletter, nutrition tips, healthy eating, growing guides, wellness',
};

const generalNewsletters = [
  {
    date: '2025-08-30',
    title: 'Your Complete Guide to Growing Microgreens at Home',
    excerpt: 'Everything you need to start growing nutrient-dense microgreens in your kitchen, from setup to harvest.',
    slug: '2025-08-30-complete-growing-guide'
  },
  {
    date: '2025-08-23',
    title: 'The Science Behind Microgreen Nutrition',
    excerpt: 'Recent studies show microgreens contain up to 40x more nutrients than mature vegetables. Here&apos;s what you need to know.',
    slug: '2025-08-23-nutrition-science'
  },
  {
    date: '2025-08-16',
    title: 'Microgreens in Your Daily Diet: 5 Easy Ways',
    excerpt: 'Simple, delicious ways to incorporate microgreens into breakfast, lunch, dinner, and snacks.',
    slug: '2025-08-16-daily-diet-tips'
  }
];

export default function GeneralNewsletterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">General Newsletter</h1>
          <p className="text-xl text-green-100">
            Discover the world of microgreens with growing tips, nutrition insights, and delicious recipe ideas.
          </p>
        </div>
      </div>

      {/* Newsletter Archive */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Subscribe Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get weekly newsletters with growing tips, nutrition insights, recipes, and exclusive subscriber offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-md hover:from-green-700 hover:to-blue-700 transition-all font-semibold"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            Join 1,000+ microgreens enthusiasts. Unsubscribe anytime.
          </p>
        </div>

        {/* Newsletter Archive */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Newsletter Archive</h2>
        
        <div className="space-y-8">
          {generalNewsletters.map((newsletter) => (
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
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    General
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-600">
                  <a href={`/general-newsletter/${newsletter.slug}`}>
                    {newsletter.title}
                  </a>
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {newsletter.excerpt}
                </p>
                
                <a
                  href={`/general-newsletter/${newsletter.slug}`}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
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

        {/* Features Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-green-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Growing Guides</h3>
            <p className="text-gray-600">Step-by-step instructions for growing microgreens at home, from beginner to advanced techniques.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Nutrition Insights</h3>
            <p className="text-gray-600">Latest research on microgreen nutrition and how these superfoods can boost your health.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="text-purple-600 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Recipe Ideas</h3>
            <p className="text-gray-600">Creative and delicious ways to use microgreens in your daily meals and special occasions.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Microgreens Journey?</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Whether you want to grow your own or enjoy fresh microgreens delivered to your door, we&apos;re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/subscriptions"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Subscription
            </a>
            <a
              href="/about"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
