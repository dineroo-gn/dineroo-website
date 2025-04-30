'use client'

import Image from 'next/image'

type StoreBadgeProps = {
  href: string
  src: string
  alt?: string
  width?: number
  height?: number
}

export default function StoreBadge({
  href,
  src,
  alt = 'Télécharger l’application',
  width = 170,
  height = 50,
}: StoreBadgeProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="relative" style={{ width, height }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          priority
        />
      </div>
    </a>
  )
}
