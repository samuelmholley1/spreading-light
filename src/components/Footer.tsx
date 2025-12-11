import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t-2 border-[#ffb685] text-[#f5f5dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ffb685] to-[#d4a574] bg-clip-text text-transparent mb-4">
              Spreading Light
            </h3>
            <p className="text-[#d4a574] mb-4">
              Custom bleach art t-shirts crafted with passion. Each piece is unique, spreading light through wearable art.
            </p>
            <p className="text-sm text-[#d4a574]">
              Navy & black shirts<br/>
              Pastel orange & vibrant tan designs
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#ffb685] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#designs" className="text-[#f5f5dc] hover:text-[#ffb685] transition-colors">
                  View Designs
                </a>
              </li>
              <li>
                <a href="#order" className="text-[#f5f5dc] hover:text-[#ffb685] transition-colors">
                  Place Order
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-[#f5f5dc] hover:text-[#ffb685] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-[#f5f5dc] hover:text-[#ffb685] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#f5f5dc] hover:text-[#ffb685] transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-[#ffb685] mb-4">Get in Touch</h4>
            <ul className="space-y-2">
              <li className="text-[#f5f5dc]">
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@spreadinglight.com" className="hover:text-[#ffb685] transition-colors">
                  hello@spreadinglight.com
                </a>
              </li>
              <li className="text-[#f5f5dc]">
                <strong>Response Time:</strong> Within 24 hours
              </li>
              <li className="text-[#f5f5dc]">
                <strong>Turnaround:</strong> 2-3 weeks
              </li>
            </ul>
            
            {/* Social Links Placeholder */}
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-[#ffb685] hover:text-[#d4a574] transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#1a1f36] text-center text-[#d4a574] text-sm">
          <p>&copy; {new Date().getFullYear()} Spreading Light. All rights reserved.</p>
          <p className="mt-2">Handcrafted bleach art  Each shirt is unique  Made with love</p>
        </div>
      </div>
    </footer>
  )
}
