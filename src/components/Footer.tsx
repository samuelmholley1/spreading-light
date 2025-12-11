export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us Section */}
          <div id="contact">
            <h3 className="text-lg font-semibold mb-4 text-green-400">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                1321 Sirah Ct.<br />
                Ukiah, CA 95482
              </p>
              <p>
                <a 
                  href="mailto:adam@mendograss.com"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  adam@mendograss.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:(707) 391-9659"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  (707) 391-9659
                </a>
              </p>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Markets Section */}
          <div id="findus">
            <h3 className="text-lg font-semibold mb-4 text-green-400">Markets</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-white">Saturdays</h4>
                <p className="text-gray-300 text-sm">
                  Healdsburg Farmers Market<br />
                  Ukiah Farmers Market
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white">Sundays</h4>
                <p className="text-gray-300 text-sm">
                  Sebastopol Farmers Market
                </p>
              </div>
            </div>
          </div>

          {/* Current Clients Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Current Clients</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-white">Grocers</h4>
                <p className="text-gray-300 text-sm">
                  Ukiah Natural Foods Co-op<br />
                  Mariposa Market
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white">Restaurants</h4>
                <p className="text-gray-300 text-sm">
                  Acorn Cafe<br />
                  Aroma de Cafe<br />
                  Black Oak Coffee Roasters<br />
                  Brew<br />
                  Cousteaux<br />
                  Dry Creek Kitchen<br />
                  Goldfinch<br />
                  Mama&apos;s Cafe<br />
                  Namaste Cafe<br />
                  Pizzando<br />
                  Troubadour<br />
                  Ukiah Brewing Company
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white">School Districts</h4>
                <p className="text-gray-300 text-sm">
                  Kelseyville Unified School District<br />
                  <span className="text-gray-400 italic">And coming to others soon</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Mendo Grass. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a 
                href="/privacy" 
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="/terms" 
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Terms of Service
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="/accessibility" 
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Accessibility
              </a>
              <span className="text-gray-600">•</span>
              <a 
                href="mailto:adam@mendograss.com?subject=Do%20Not%20Sell%20My%20Information" 
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                Do Not Sell My Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
