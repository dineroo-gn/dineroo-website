'use client'

import React from 'react'

interface PinInputFieldProps {
  value: string
  onChange: (value: string) => void
  required?: boolean
}

export default function PinInputField({ value, onChange, required }: PinInputFieldProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 4)
    onChange(digitsOnly)
  }

  return (
    <div>
      <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
        Code PIN (4 chiffres)
      </label>
      <input
        type="password"
        id="pin"
        inputMode="numeric"
        pattern="\d{4}"
        maxLength={4}
        placeholder="••••"
        value={value}
        onChange={handleInputChange}
        required={required}
        className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
      />
    </div>
  )
}
