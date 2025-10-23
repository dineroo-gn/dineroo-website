'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-orange-500">Dineroo</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link
            href="/become-a-driver"
            className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition"
          >
            Devenir livreur
          </Link>
          <Link
            href="/become-a-partner"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
          >
            Devenir partenaire
          </Link>
          <Link
            href="/contact"
            className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-lg transition"
          >
            Contactez-Nous
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Ouvrir le menu mobile"
        >
          {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link
            href="/become-a-driver"
            className="block bg-black text-white px-4 py-2 rounded-lg transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Devenir livreur
          </Link>
          <Link
            href="/become-a-partner"
            className="block bg-orange-500 text-white px-4 py-2 rounded-lg transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Devenir partenaire
          </Link>
          <Link
            href="/contact"
            className="block border border-orange-500 text-orange-500 px-4 py-2 rounded-lg transition"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contactez-Nous
          </Link>
        </div>
      )}
    </header>
  )
}
