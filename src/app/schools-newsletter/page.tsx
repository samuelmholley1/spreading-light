import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schools Newsletter | Mendo Grass',
  description: 'Educational newsletters for schools about microgreens, nutrition, and healthy eating programs.',
  keywords: 'schools newsletter, microgreens education, nutrition programs, healthy eating, school gardens',
};

const schoolsNewsletters = [
  {
    date: '2025-08-30',
    title: 'Back to School: Starting a Microgreens Program',
    excerpt: 'Everything you need to know about implementing microgreens in your school curriculum and cafeteria.',
    slug: '2025-08-30-back-to-school-microgreens'
  },
  {
    date: '2025-08-23',
    title: 'Summer Growing Tips for School Gardens',
    excerpt: 'How to maintain your school garden during summer break and prepare for fall planting.',
    slug: '2025-08-23-summer-growing-tips'
  },
  {
    date: '2025-08-16',
    title: 'Nutrition Education Through Microgreens',
    excerpt: 'Engaging lesson plans that combine science, nutrition, and hands-on growing experiences.',
    slug: '2025-08-16-nutrition-education'
  }
];

export default function SchoolsNewsletterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Schools Newsletter</h1>
          <p className="text-xl text-green-100">
            Educational resources, curriculum ideas, and program guides for integrating microgreens into school environments.
          </p>
        </div>
      </div>

      {/* Newsletter Archive */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Subscribe Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Schools Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Get monthly newsletters with curriculum ideas, nutrition education resources, and program implementation guides.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="School email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Newsletter Archive */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Newsletter Archive</h2>
        
        <div className="space-y-8">
          {schoolsNewsletters.map((newsletter) => (
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
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    Schools
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-600">
                  <a href={`/schools-newsletter/${newsletter.slug}`}>
                    {newsletter.title}
                  </a>
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {newsletter.excerpt}
                </p>
                
                <a
                  href={`/schools-newsletter/${newsletter.slug}`}
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

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-lg text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Want to Start a School Program?</h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            We help schools implement microgreens programs with curriculum support, growing guides, and ongoing assistance.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us About School Programs
          </a>
        </div>
      </div>
    </div>
  );
}
