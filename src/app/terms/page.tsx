export const metadata = {
  title: 'Terms of Service | Mendo Grass',
  description: 'Terms of Service for Mendo Grass - Please read these terms before using our services or making a purchase.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-8">Last Updated: October 23, 2025</p>

        <div className="prose prose-gray max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using the Mendo Grass website (mendograss.com) or purchasing our products, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <p className="text-gray-700 mb-4">
              Mendo Grass provides certified organic microgreens and wheatgrass through:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Home delivery subscription services (B2C)</li>
              <li>Restaurant and food service partnerships (B2B)</li>
              <li>School district partnerships (B2B)</li>
              <li>Farmers market sales</li>
              <li>Retail partnerships with local grocers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Orders and Subscriptions</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1 Product Availability</h3>
            <p className="text-gray-700 mb-4">
              All products are grown-to-order and subject to availability. We reserve the right to limit quantities or discontinue products at any time.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2 Lead Times</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Home Delivery:</strong> First delivery within 1-2 weeks of order</li>
              <li><strong>B2B Partnerships:</strong> Approximately 3 weeks lead time for new accounts</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.3 Subscription Services</h3>
            <p className="text-gray-700 mb-4">
              Subscriptions renew automatically at the selected frequency (weekly, bi-weekly, or monthly). You may pause, skip, or cancel your subscription at any time with no penalties.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">3.4 Order Modifications</h3>
            <p className="text-gray-700 mb-4">
              To modify or skip an upcoming order, please contact us before we begin growing your order. We typically reach out via text or email for weekly confirmation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Pricing and Payment</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">4.1 Pricing</h3>
            <p className="text-gray-700 mb-4">
              All prices are in USD and subject to change without notice. Current pricing:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Home Delivery: $13.50 per 4oz weekly</li>
              <li>Restaurants/Schools: $30.00 per tray</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">4.2 Payment Terms</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li><strong>Home Delivery:</strong> Payment due at time of order or recurring billing</li>
              <li><strong>Schools:</strong> Net 15 payment terms available</li>
              <li><strong>Restaurants:</strong> Payment terms negotiable on case-by-case basis</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">4.3 Failed Payments</h3>
            <p className="text-gray-700 mb-4">
              If a payment fails, we will attempt to contact you. Subscriptions may be paused until payment is received.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Delivery and Pickup</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">5.1 Delivery Areas</h3>
            <p className="text-gray-700 mb-4">
              We currently deliver to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Ukiah, CA</li>
              <li>Healdsburg, CA</li>
              <li>Sebastopol, CA</li>
              <li>Mendocino County (for B2B accounts)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">5.2 Pickup Options</h3>
            <p className="text-gray-700 mb-4">
              Pickup is available at our farmers market locations (see website for current schedule).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">5.3 Delivery Risk</h3>
            <p className="text-gray-700 mb-4">
              Risk of loss and title for products pass to you upon delivery. We are not responsible for products left unattended after delivery.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Product Quality and Freshness</h2>
            <p className="text-gray-700 mb-4">
              Our products are harvested within 24 hours of delivery. We guarantee fresh, certified organic microgreens and wheatgrass.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">6.1 Product Variability</h3>
            <p className="text-gray-700 mb-4">
              For tray-based orders (B2B), different products provide different yields per tray. By purchasing, you accept this natural product variability.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">6.2 Quality Issues</h3>
            <p className="text-gray-700 mb-4">
              If you receive damaged or unsatisfactory products, please contact us within 24 hours of delivery. We will work with you to resolve the issue through replacement or refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cancellation and Refund Policy</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">7.1 Subscription Cancellation</h3>
            <p className="text-gray-700 mb-4">
              You may cancel your subscription at any time with no cancellation fees. Cancel by contacting us at <a href="mailto:adam@mendograss.com" className="text-green-600 hover:underline">adam@mendograss.com</a> or <a href="tel:7073919659" className="text-green-600 hover:underline">(707) 391-9659</a>.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">7.2 Refunds</h3>
            <p className="text-gray-700 mb-4">
              Due to the perishable nature of our products, we do not offer refunds except in cases of:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Product quality issues (reported within 24 hours)</li>
              <li>Non-delivery or failed delivery attempts</li>
              <li>Billing errors</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on this website, including text, images, logos, and designs, is the property of Mendo Grass and protected by copyright and trademark laws. You may not use our content without written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              To the fullest extent permitted by law, Mendo Grass shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or products. Our total liability shall not exceed the amount you paid for the products in question.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
            <p className="text-gray-700 mb-4">
              You agree to indemnify and hold Mendo Grass harmless from any claims, damages, or expenses arising from your violation of these Terms of Service or your use of our products.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms of Service are governed by the laws of the State of California. Any disputes shall be resolved in the courts of Mendocino County, California.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-900 font-semibold mb-2">Mendo Grass</p>
              <p className="text-gray-700">1321 Sirah Ct.</p>
              <p className="text-gray-700">Ukiah, CA 95482</p>
              <p className="text-gray-700 mt-2">
                Email: <a href="mailto:adam@mendograss.com" className="text-green-600 hover:underline">adam@mendograss.com</a>
              </p>
              <p className="text-gray-700">
                Phone: <a href="tel:7073919659" className="text-green-600 hover:underline">(707) 391-9659</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
