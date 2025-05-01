'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isDriverPage = pathname === '/become-a-driver'
  const isPartnerPage = pathname === '/become-a-partner'
  const isFormPage = isDriverPage || isPartnerPage

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-orange-500">Dineroo</span>
        </Link>

        {!isFormPage && (
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
              href="/login"
              className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-lg transition"
            >
              Connexion
            </Link>
          </nav>
        )}

        {isDriverPage && (
          <Link
            href="#driver-signup-form"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            S’inscrire comme livreur
          </Link>
        )}

        {isPartnerPage && (
          <Link
            href="#partner-signup-form"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            S’inscrire comme restaurant
          </Link>
        )}
      </div>
    </header>
  )
}
