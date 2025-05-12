'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { FaBiking, FaHandshake } from 'react-icons/fa'

type BecomeCTAButtonProps = {
  href: string
  label: string
  variant?: 'driver' | 'partner'
  className?: string
}

export default function BecomeCTAButton({
  href,
  label,
  variant = 'partner',
  className = '',
}: BecomeCTAButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-2 text-white font-semibold px-8 py-3 rounded-lg transition duration-300'

  const variantClasses = {
    driver: 'bg-black hover:bg-gray-900',
    partner: 'bg-orange-500 hover:bg-orange-600',
  }

  const icon =
    variant === 'driver' ? (
      <FaBiking className="text-lg" />
    ) : (
      <FaHandshake className="text-lg" />
    )

  return (
    <Link
      href={href}
      className={clsx(baseClasses, variantClasses[variant], className)}
    >
      {icon}
      {label}
    </Link>
  )
}
