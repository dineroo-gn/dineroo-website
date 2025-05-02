'use client'

import Link from 'next/link'

interface BreadcrumbProps {
  items: { label: string; href?: string }[]
  isBottom?: boolean
}

export default function Breadcrumb({ items, isBottom = false }: BreadcrumbProps) {
  return (
    <nav className={`${isBottom ? 'mt-8' : 'mb-8'} text-sm text-gray-500`}>
      {items.map((item, index) => (
        <span key={index}>
          {item.href ? (
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-800">{item.label}</span>
          )}
          {index < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  )
}
