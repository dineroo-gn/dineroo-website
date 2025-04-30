'use client'

import { GOOGLE_PLAY_URL, APP_STORE_URL } from '@/utils/urls'

export default function HeroSection() {
  return (
    <section className="relative text-center py-20 bg-orange-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/food-bg.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Livrez vos repas en Guinée, rapidement et facilement !
        </h1>
        <p className="text-lg mb-8 text-gray-600 max-w-xl">
          Commandez vos plats préférés et faites-vous livrer en quelques minutes avec Dineroo.
        </p>
        <div className="space-x-4">
          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Télécharger sur Android
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-3 rounded-lg font-semibold"
          >
            Télécharger sur iOS
          </a>
        </div>
      </div>
    </section>
  )
}
