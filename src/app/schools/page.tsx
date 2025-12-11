'use client'

import Image from "next/image";
import { useState } from 'react';

const schoolsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Mendo Grass School District Microgreens Subscription',
  description: 'Weekly subscription service for fresh organic microgreens for K-12 schools and cafeterias',
  brand: {
    '@type': 'Brand',
    name: 'Mendo Grass',
  },
  offers: {
    '@type': 'Offer',
    name: 'Microgreens 8oz Weekly (Schools)',
    price: '22.50',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    deliveryMethod: 'https://schema.org/OnSitePickup',
    areaServed: 'Mendocino County, CA'
  }
}

export default function SchoolsPage() {
  return (
    <div className="min-h-screen py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolsJsonLd) }}
      />
      
      {/* Header Section */}
      <section className="text-center mb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            K-12 School District Subscriptions
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Fresh, Nutritious Microgreens for School Cafeterias and Nutrition Programs
          </p>
        </div>
      </section>

      {/* Benefits for Schools */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Schools Choose Mendo Grass</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🥗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Student Nutrition</h3>
              <p className="text-gray-700">
                9x the nutrients of mature greens. Help students get the vitamins they need for learning and growth.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Value</h3>
              <p className="text-gray-700">
                Partner with local farms to teach students about sustainable agriculture and healthy eating.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Ordering</h3>
              <p className="text-gray-700">
                Order only what you need. Skip during breaks and holidays at no charge.
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
                  Need help with procurement paperwork? Have questions about volume or scheduling? We&apos;re here to help.
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
                  Ready to start? Begin your subscription below and we&apos;ll contact you to confirm delivery details and answer any questions.
                </p>
              </div>
              <div className="space-y-4">
                <a 
                  href="#subscription-form" 
                  className="block w-full bg-green-600 text-white py-2 px-4 rounded-lg text-center font-semibold hover:bg-green-700 transition-colors"
                >
                  View Product Menu
                </a>
                <p className="text-sm text-gray-500 text-center">$30 per tray<br/>Net 15 payment terms • First delivery in ~3 weeks</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our School Menu</h2>
              <p className="text-lg text-gray-600 mb-2">
                We deliver our certified-organic, grown-to-order microgreens to your school weekly!
              </p>
              <p className="text-gray-600 mb-6">
                Our greens are harvested within 24 hours of delivery to guarantee peak freshness for your students.
              </p>
              <div className="inline-block bg-green-50 border-2 border-green-600 rounded-lg px-6 py-3">
                <p className="text-2xl font-bold text-green-700">$30 per tray</p>
                <p className="text-sm text-gray-600">Sold by the tray • Net 15 payment terms</p>
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
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Buckwheat</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3 oz</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Crunchy Mix</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">4</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">3 oz</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-600 mb-6 text-center italic">
              *Crunchy Mix is a blend of Pea Shoots, Sunflower, and Buckwheat
            </p>

            {/* Custom Mix Builder */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">🎨 Create Your Custom Mix</h3>
                <p className="text-gray-700">
                  Want a custom blend with just 2 of the 3 varieties, or a different combination? We&apos;ll work with you to create the perfect mix for your cafeteria program.
                </p>
              </div>
              <div className="text-center">
                <a 
                  href="mailto:adam@mendograss.com?subject=Custom%20School%20Mix%20Request" 
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
                Multiple schools in your district? Need higher volumes? Let us know and we&apos;ll work out a custom quote.
              </p>
              <a 
                href="mailto:adam@mendograss.com?subject=School%20Bulk%20Pricing%20Inquiry" 
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
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">How It Works for Schools</h2>
          <p className="text-center text-lg text-gray-700 mb-8">
            Simple ordering designed for school schedules
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 max-w-3xl mx-auto">
            <p className="text-blue-900">
              <strong>Getting Started:</strong> We typically plan new school partnerships about 3 weeks in advance to coordinate crop harvests. 
              Reach out now to secure your start date for upcoming deliveries!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/micros_multicolor.jpg"
                  alt="Weekly confirmation"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Weekly Confirmation</h3>
              <p className="text-gray-700">
                We text your food service director weekly. Confirm quantities or skip during breaks – completely flexible.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/greenhouse_purple.jpg"
                  alt="Grown fresh"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Grown Fresh</h3>
              <p className="text-gray-700">
                Your microgreens are grown to order, ensuring maximum freshness, nutritional value, and food safety.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/mendograss_tote.jpg"
                  alt="Delivered on time"
                  width={80}
                  height={80}
                  className="mx-auto rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Delivered on Time</h3>
              <p className="text-gray-700">
                Reliable delivery to your school or district office, scheduled around your receiving hours and meal prep needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Quality You Can Trust</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🌱 Certified Organic</h3>
              <p className="text-gray-700">
                All our produce is organically grown without synthetic pesticides or fertilizers. USDA Certified Organic – certificates available upon request.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🥗 Food Safety</h3>
              <p className="text-gray-700">
                Harvested by hand, washed, and packed in our clean facility. Kept at proper cold temperatures from harvest to delivery.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🚚 Consistent Supply</h3>
              <p className="text-gray-700">
                We plan our growing schedule to meet your school&apos;s needs reliably, with backup plans to ensure you&apos;re never left short.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">💼 Easy Procurement</h3>
              <p className="text-gray-700">
                Net 15 payment terms available. We work within your district&apos;s procurement process and can provide any necessary paperwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Farm to School Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Farm to School Partnership</h2>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 mb-4">
              Mendo Grass is proud to support local schools in Mendocino and Sonoma counties. 
              Our microgreens program helps schools:
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>Meet nutritional requirements with locally-sourced produce</li>
              <li>Reduce food waste with grown-to-order subscriptions</li>
              <li>Support local agriculture and the regional economy</li>
              <li>Educate students about sustainable farming practices</li>
            </ul>
            <p className="text-gray-700">
              We work with school administrators to customize delivery schedules, quantities, 
              and payment terms that fit your district&apos;s needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Pickup & Delivery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Delivery Options</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            We offer flexible delivery to school sites in Ukiah, Healdsburg, and Sebastopol areas
          </p>
          
          <div className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto">
            <h3 className="font-bold text-gray-900 mb-4 text-center">Contact us to schedule:</h3>
            <div className="space-y-3 text-gray-700">
              <p>✓ Regular weekly deliveries to your school site</p>
              <p>✓ District-wide deliveries to multiple locations</p>
              <p>✓ Flexible timing to accommodate receiving hours</p>
              <p>✓ Special arrangements for summer programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-16 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Bring Fresh Greens to Your School?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join school districts throughout Mendocino County
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

// School Subscription Form Component (8oz only)
function SchoolSubscriptionForm() {
  const [frequency, setFrequency] = useState('weekly');
  const [paymentPlan, setPaymentPlan] = useState('monthly');

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
            <p className="text-gray-600 mb-2">Ideal for school cafeterias</p>
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
              <p className="text-sm text-gray-600">During school year</p>
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
              <p className="text-sm text-gray-600">Invoiced monthly (preferred)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Delivery Method */}
      <div>
        <label className="block text-lg font-semibold text-gray-900 mb-4">Delivery method:</label>
        <div className="border-2 border-green-500 bg-green-50 rounded-lg p-4">
          <div className="text-center">
            <h3 className="font-semibold text-gray-900">🚚 School Delivery</h3>
            <p className="text-sm text-gray-600">Delivered directly to your school or district office</p>
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
          Contact Us to Get Started
        </button>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          <strong>Let&apos;s talk!</strong> Contact us at <a href="mailto:adam@mendograss.com" className="text-green-600 hover:underline">adam@mendograss.com</a> or call <a href="tel:7073919659" className="text-green-600 hover:underline">(707) 391-9659</a>.<br/>
          We&apos;ll respond within 1-2 business days to discuss your school&apos;s needs.
        </p>
      </div>
    </div>
  );
}
