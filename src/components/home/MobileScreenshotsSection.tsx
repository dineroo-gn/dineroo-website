'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function MobileScreenshotsSection() {
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = 100
    }
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Découvrez l’application Dineroo</h2>
        <p className="text-gray-600 mb-10">
          Une app simple, rapide et pensée pour les besoins des utilisateurs en Guinée 🇬🇳
        </p>

        {/* Carousel mobile / inline layout desktop */}
        <div
          ref={carouselRef}
          className="flex md:flex-wrap md:justify-center md:items-end gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide"
        >
          {['orders', 'restaurants', 'cart'].map((img, i) => (
            <div
              key={i}
              className={`flex-shrink-0 snap-center transition-transform duration-300 ${
                i === 1 ? 'md:scale-110 md:z-10' : 'md:opacity-90'
              }`}
            >
              <div className="relative bg-black rounded-[2.5rem] p-2 w-[200px] h-[410px] shadow-xl">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-b-2xl z-20"></div>

                {/* Screen */}
                <div className="bg-white rounded-[2rem] overflow-hidden w-full h-full">
                  <Image
                    src={`/screens/${img}.jpeg`}
                    alt={`Capture ${img}`}
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
      </div>
    </section>
  )
}
