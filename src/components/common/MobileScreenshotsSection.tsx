'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import StoreBadge from '@/components/common/StoreBadge'
import { GOOGLE_PLAY_URL, APP_STORE_URL } from '@/utils/urls'

type TypeVariant = 'customer' | 'driver' | 'partner'

interface MobileScreenshotsSectionProps {
  variant: TypeVariant
}

export default function MobileScreenshotsSection({ variant }: MobileScreenshotsSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 100
    }
  }, [])

  const content = {
    customer: {
      title: 'Découvrez l’application Dineroo',
      subtitle: 'Une app simple, rapide et pensée pour les besoins des utilisateurs en Guinée',
      images: ['orders.jpeg', 'restaurants.jpeg', 'cart.jpeg'],
      showBadges: false,
    },
    driver: {
      title: 'L’application Dineroo pour les livreurs',
      subtitle:
        'Gérez vos courses, vos gains et vos trajets en toute simplicité — tout est dans votre poche.',
      images: ['orders.jpeg', 'restaurants.jpeg', 'cart.jpeg'],
      showBadges: true,
    },
    partner: {
      title: 'L’application Dineroo pour les restaurants',
      subtitle:
        'Recevez, gérez et suivez vos commandes en temps réel depuis une interface claire et moderne.',
      images: ['orders.jpeg', 'restaurants.jpeg', 'cart.jpeg'],
      showBadges: true,
    },
  }[variant]

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{content.title}</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">{content.subtitle}</p>

        <div
          ref={carouselRef}
          className="flex md:flex-wrap md:justify-center md:items-end gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide mb-12"
        >
          {content.images.map((src, i) => (
            <div
              key={i}
              className={`flex-shrink-0 snap-center transition-transform duration-300 ${
                i === 1 ? 'md:scale-110 md:z-10' : 'md:opacity-90'
              }`}
            >
              <div className="relative bg-black rounded-[2.5rem] p-2 w-[200px] h-[410px] shadow-xl">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-b-2xl z-20"></div>

                <div className="bg-white rounded-[2rem] overflow-hidden w-full h-full">
                  <Image
                    src={`/screens/${variant}/${src}`}
                    alt={`Capture écran ${variant} ${i + 1}`}
                    width={200}
                    height={400}
                    className="object-cover w-full h-full"
                    priority={i === 1}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {content.showBadges && (
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-gray-700 text-lg font-medium">
              Téléchargez Dineroo dès maintenant
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
        )}
      </div>
    </section>
  )
}
