'use client'

import { useRef } from 'react'
import clsx from 'clsx'

interface OtpInputFieldProps {
  length?: number
  value: string
  onChange: (value: string) => void
  hasError?: boolean
}

export default function OtpInputField({
  length = 6,
  value,
  onChange,
  hasError = false,
}: OtpInputFieldProps) {
  const inputsRef = useRef<HTMLInputElement[]>([])

  const handleChange = (index: number, digit: string) => {
    if (!/^\d?$/.test(digit)) return

    const newValue = value.split('')
    newValue[index] = digit
    const joined = newValue.join('').padEnd(length, '')

    onChange(joined)

    if (digit && index < length - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex justify-center gap-2">
        {Array.from({ length }).map((_, i) => (
          <input
            key={i}
            ref={(el) => {
              if (el) inputsRef.current[i] = el
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[i] || ''}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            className={clsx(
              'w-12 h-12 text-center text-xl border rounded-lg focus:outline-none',
              hasError
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:ring-orange-500 focus:ring-2'
            )}
          />
        ))}
      </div>
      {hasError && (
        <p className="text-sm text-red-600 mt-1">Code de vérification invalide.</p>
      )}
    </div>
  )
}
