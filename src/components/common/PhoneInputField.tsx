'use client'

import React from 'react'

interface PhoneInputFieldProps {
  value: string
  onChange: (value: string) => void
  required?: boolean
}

export default function PhoneInputField({
  value,
  onChange,
  required = false,
}: PhoneInputFieldProps) {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    if (!input.startsWith('+224')) return

    const digitsOnly = input.slice(4).replace(/\D/g, '').slice(0, 9)
    const formatted = '+224' + digitsOnly
    onChange(formatted)
  }

  return (
    <div>
      <label className="block mb-2 font-medium text-gray-700">Numéro de téléphone</label>
      <input
        type="tel"
        name="phone"
        value={value}
        onChange={handlePhoneChange}
        required={required}
        placeholder="+2246XXXXXXX"
        className="w-full px-4 py-3 border rounded-lg shadow-sm text-gray-800"
        dir="ltr"
      />
    </div>
  )
}
