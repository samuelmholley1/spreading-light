import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Complete Guide to Growing Microgreens at Home | Mendo Grass Newsletter',
  description: 'Everything you need to start growing nutrient-dense microgreens in your kitchen, from setup to harvest.',
  keywords: 'microgreens growing guide, home growing, kitchen gardening, microgreens setup',
};

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-sm text-green-200 mb-2">GENERAL NEWSLETTER • AUGUST 30, 2025</div>
            <h1 className="text-4xl font-bold mb-4">Your Complete Guide to Growing Microgreens at Home</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Everything you need to start growing nutrient-dense microgreens in your kitchen, from setup to harvest.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8 lg:p-12">
            {/* Intro */}
            <div className="text-lg text-gray-700 leading-relaxed mb-8">
              <p className="mb-6">
                Welcome to this week&apos;s newsletter! Today we&apos;re diving deep into everything you need to know about growing microgreens at home. Whether you&apos;re a complete beginner or looking to improve your technique, this guide has you covered.
              </p>
            </div>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started: Your First Setup</h2>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Pro Tip</h3>
                <p className="text-green-700">Start with just 2-3 varieties to learn the basics before expanding your operation.</p>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Equipment</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><strong>Growing trays:</strong> 10x20 inch trays with drainage holes</li>
                <li><strong>Growing medium:</strong> Coconut coir, hemp mats, or paper towels</li>
                <li><strong>Seeds:</strong> Start with easy varieties like radish, pea shoots, or sunflower</li>
                <li><strong>Water spray bottle:</strong> For gentle misting</li>
                <li><strong>Weight for blackout:</strong> Another tray or books work perfectly</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Step-by-Step Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Prepare Your Growing Medium</h4>
                    <p className="text-gray-700">Soak coconut coir or place hemp mat in your tray. The medium should be moist but not waterlogged.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sow Your Seeds</h4>
                    <p className="text-gray-700">Spread seeds evenly across the surface. Aim for good coverage without overcrowding.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Blackout Period</h4>
                    <p className="text-gray-700">Cover with another tray and add weight. Keep in dark for 2-4 days depending on variety.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Introduce Light</h4>
                    <p className="text-gray-700">Once sprouted, remove cover and place under grow lights or in bright indirect sunlight.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Harvest</h4>
                    <p className="text-gray-700">Cut just above the growing medium when first true leaves appear (7-14 days).</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Overwatering</h3>
                  <p className="text-red-700">Too much water leads to mold and poor germination. Keep moist, not soaked.</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Poor Air Circulation</h3>
                  <p className="text-red-700">Stagnant air promotes disease. Ensure good ventilation around your growing area.</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Harvesting Too Late</h3>
                  <p className="text-red-700">Microgreens become bitter and tough if left too long. Harvest at the right stage.</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Using Old Seeds</h3>
                  <p className="text-red-700">Fresh, high-quality seeds are essential for good germination rates.</p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Varieties for Beginners</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">🌱 Radish Microgreens</h3>
                  <p className="text-gray-700 mb-3">Fast-growing, spicy, and virtually foolproof. Ready in 5-7 days.</p>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Growing time:</span> 5-7 days • 
                    <span className="font-medium ml-2">Flavor:</span> Spicy, peppery • 
                    <span className="font-medium ml-2">Difficulty:</span> Very Easy
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">🌱 Pea Shoots</h3>
                  <p className="text-gray-700 mb-3">Sweet, crunchy, and high-yield. Perfect for salads and stir-fries.</p>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Growing time:</span> 10-14 days • 
                    <span className="font-medium ml-2">Flavor:</span> Sweet, crisp • 
                    <span className="font-medium ml-2">Difficulty:</span> Easy
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">🌱 Sunflower Microgreens</h3>
                  <p className="text-gray-700 mb-3">Nutty flavor, substantial texture, and packed with nutrients.</p>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Growing time:</span> 7-10 days • 
                    <span className="font-medium ml-2">Flavor:</span> Nutty, crunchy • 
                    <span className="font-medium ml-2">Difficulty:</span> Easy
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg text-white p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Growing?</h3>
              <p className="text-green-100 mb-6">
                Want fresh microgreens delivered while you perfect your growing skills? We&apos;ve got you covered.
              </p>
              <a
                href="/subscriptions"
                className="inline-block bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Subscription
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <a
            href="/general-newsletter"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Newsletter Archive
          </a>
          
          <div className="text-sm text-gray-500">
            Published August 30, 2025
          </div>
        </div>
      </article>
    </div>
  );
}
