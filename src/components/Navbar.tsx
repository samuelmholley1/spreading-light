'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/logo_colored.jpg"
                alt="Mendo Grass logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/about"
                className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors"
                style={{ fontFamily: 'var(--font-bobby)' }}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/find-us"
                className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors"
                style={{ fontFamily: 'var(--font-bobby)' }}
                onClick={closeMenu}
              >
                Find Us
              </Link>
              <Link
                href="/contact"
                className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors"
                style={{ fontFamily: 'var(--font-bobby)' }}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                href="/subscriptions"
                className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors"
                style={{ fontFamily: 'var(--font-bobby)' }}
                onClick={closeMenu}
              >
                Shop
              </Link>
              <Link
                href="/restaurants"
                className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors"
                style={{ fontFamily: 'var(--font-bobby)' }}
                onClick={closeMenu}
              >
                Restaurants
              </Link>
              <Link
                href="/schools"
                className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors"
                style={{ fontFamily: 'var(--font-bobby)' }}
                onClick={closeMenu}
              >
                Schools
              </Link>
              <div className="relative group">
                <button 
                  className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                  style={{ fontFamily: 'var(--font-bobby)' }}
                  aria-haspopup="true"
                  aria-expanded="false"
                  aria-label="Newsletter menu"
                >
                  Newsletter
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50" role="menu">
                  <div className="py-2">
                    <Link
                      href="/general-newsletter"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                      onClick={closeMenu}
                    >
                      General Newsletter
                    </Link>
                    <Link
                      href="/schools-newsletter"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                      onClick={closeMenu}
                    >
                      Schools Newsletter
                    </Link>
                    <Link
                      href="/restaurants-newsletter"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700"
                      onClick={closeMenu}
                    >
                      Restaurants Newsletter
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/wholesale"
                className="text-green-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors"
                style={{ fontFamily: 'var(--font-bobby)' }}
                onClick={closeMenu}
              >
                Wholesale
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-expanded={isMenuOpen}
              aria-label="Toggle main menu"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                  }`}
                ></span>
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                href="/about"
                className="text-green-700 hover:text-green-800 block px-3 py-2 text-base font-medium transition-colors"
                style={{ fontFamily: 'var(--font-bobby)' }}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/find-us"
                className="text-green-700 hover:text-green-800 block px-3 py-2 text-base font-medium transition-colors"
                style={{ fontFamily: 'var(--font-bobby)' }}
                onClick={closeMenu}
              >
                Find Us
              </Link>
              <Link
                href="/contact"
                className="text-green-700 hover:text-green-800 block px-3 py-2 text-base font-medium transition-colors"
                style={{ fontFamily: 'var(--font-bobby)' }}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                href="/subscriptions"
                className="text-green-700 hover:text-green-800 block px-3 py-2 text-base font-medium transition-colors"
                style={{ fontFamily: 'var(--font-bobby)' }}
                onClick={closeMenu}
              >
                Shop
              </Link>
              <Link
                href="/restaurants"
                className="text-green-700 hover:text-green-800 block px-3 py-2 text-base font-medium transition-colors"
                style={{ fontFamily: 'var(--font-bobby)' }}
                onClick={closeMenu}
              >
                Restaurants
              </Link>
              <Link
                href="/schools"
                className="text-green-700 hover:text-green-800 block px-3 py-2 text-base font-medium transition-colors"
                style={{ fontFamily: 'var(--font-bobby)' }}
                onClick={closeMenu}
              >
                Schools
              </Link>
              <div className="px-3">
                <div className="text-green-700 py-2 text-base font-medium" style={{ fontFamily: 'var(--font-bobby)' }}>Newsletter</div>
                <div className="pl-4 space-y-1">
                  <Link
                    href="/general-newsletter"
                    className="text-gray-600 hover:text-green-700 block py-2 text-sm transition-colors"
                    onClick={closeMenu}
                  >
                    General Newsletter
                  </Link>
                  <Link
                    href="/schools-newsletter"
                    className="text-gray-600 hover:text-green-700 block py-2 text-sm transition-colors"
                    onClick={closeMenu}
                  >
                    Schools Newsletter
                  </Link>
                  <Link
                    href="/restaurants-newsletter"
                    className="text-gray-600 hover:text-green-700 block py-2 text-sm transition-colors"
                    onClick={closeMenu}
                  >
                    Restaurants Newsletter
                  </Link>
                </div>
              </div>
              <Link
                href="/wholesale"
                className="text-green-700 hover:text-green-800 block px-3 py-2 text-base font-medium transition-colors"
                style={{ fontFamily: 'var(--font-bobby)' }}
                onClick={closeMenu}
              >
                Wholesale
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
