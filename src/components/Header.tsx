'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isDriverPage = pathname === '/become-a-driver'

  return (
    <header className="sticky top-0 z-50 bg-white shadow border-b">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-orange-500">
          Dineroo
        </Link>

        {!isDriverPage && (
          <nav className="space-x-6 text-orange-500 hover:text-orange-600 hidden md:block">
            <Link href="/become-a-driver">Devenir livreur</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        )}

        {isDriverPage && (
          <Link
            href="#driver-signup-form"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
          >
            S’inscrire maintenant
          </Link>
        )}
      </div>
    </header>
  )
}
