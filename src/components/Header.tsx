'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold text-orange-500">Dineroo</div>
      <nav className="space-x-6 text-orange-500 hover:text-orange-600">
        <Link href="/">Accueil</Link>
        <Link href="#how-it-works" scroll={true}>
          Comment ça marche
        </Link>
        <Link href="/become-a-driver">Devenir livreur</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
