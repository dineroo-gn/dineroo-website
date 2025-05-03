'use client'

import { InputHTMLAttributes } from 'react'

type TextInputFieldProps = {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
} & InputHTMLAttributes<HTMLInputElement>

export default function TextInputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  type = 'text',
  ...props
}: TextInputFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 border rounded-lg text-gray-800"
        {...props}
      />
    </div>
  )
}
