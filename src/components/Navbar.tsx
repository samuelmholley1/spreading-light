'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-[#0a0a0a] border-b-2 border-[#ffb685] shadow-lg z-50 backdrop-blur-sm bg-opacity-95" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMenu} className="text-2xl font-bold bg-gradient-to-r from-[#ffb685] to-[#d4a574] bg-clip-text text-transparent hover:from-[#d4a574] hover:to-[#ffb685] transition-all">
              Spreading Light
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a
                href="#designs"
                className="text-[#f5f5dc] hover:text-[#ffb685] px-3 py-2 text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                Designs
              </a>
              <a
                href="#order"
                className="text-[#f5f5dc] hover:text-[#ffb685] px-3 py-2 text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                Order
              </a>
              <Link
                href="/contact"
                className="text-[#f5f5dc] hover:text-[#ffb685] px-3 py-2 text-sm font-medium transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <a
                href="#order"
                className="btn-primary px-6 py-2 text-sm"
                onClick={closeMenu}
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#ffb685] hover:text-[#d4a574] hover:bg-[#1a1f36] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ffb685]"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-[#1a1f36] border-t-2 border-[#ffb685]`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#designs"
            className="text-[#f5f5dc] hover:bg-[#2d3748] hover:text-[#ffb685] block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={closeMenu}
          >
            Designs
          </a>
          <a
            href="#order"
            className="text-[#f5f5dc] hover:bg-[#2d3748] hover:text-[#ffb685] block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={closeMenu}
          >
            Order
          </a>
          <Link
            href="/contact"
            className="text-[#f5f5dc] hover:bg-[#2d3748] hover:text-[#ffb685] block px-3 py-2 rounded-md text-base font-medium transition-colors"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <a
            href="#order"
            className="btn-primary block text-center mt-4 mx-3 py-2"
            onClick={closeMenu}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
