'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import BecomeCTAButton from '../common/BecomeCTAButton'

export default function PartnerLogosCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const speed = 0.5

    const animate = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += speed
      }
      requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [])

  const logos = Array.from({ length: 10 }, (_, i) => `/partners/${i + 1}.jpg`)

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-6 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Nos restaurants partenaires</h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-12 items-center overflow-x-auto scroll-smooth px-4 scrollbar-hide"
      >
        {[...logos, ...logos].map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[180px] h-[100px] flex items-center justify-center bg-white"
          >
            <Image
              src={src}
              alt={`Logo partenaire ${i + 1}`}
              width={160}
              height={80}
              className="object-contain"
              unoptimized
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <BecomeCTAButton href="/become-a-partner" label="Devenir partenaire" />
      </div>
    </section>
  )
}
