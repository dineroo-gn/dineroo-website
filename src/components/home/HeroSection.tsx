'use client'

import StoreBadge from '@/components/common/StoreBadge'
import { GOOGLE_PLAY_URL, APP_STORE_URL } from '@/utils/urls'

export default function HeroSection() {
  return (
    <section className="relative text-center py-40 bg-orange-100 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/food-bg.jpg')] bg-cover bg-center opacity-25"></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Livrez vos repas en Guinée, rapidement et facilement !
        </h1>
        <p className="text-lg mb-8 text-gray-600 max-w-xl">
          Commandez vos plats préférés et faites-vous livrer en quelques minutes avec Dineroo.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <StoreBadge
            href={GOOGLE_PLAY_URL}
            src="/assets/stores/google-play-badge.png"
            alt="Disponible sur Google Play"
          />
          <StoreBadge
            href={APP_STORE_URL}
            src="/assets/stores/app-store-badge.png"
            alt="Disponible sur App Store"
          />
        </div>
      </div>
    </section>
  )
}
