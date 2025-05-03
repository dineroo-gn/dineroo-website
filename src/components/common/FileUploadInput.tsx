'use client'

import { RefObject } from 'react'

type FileUploadInputProps = {
  label: string
  name: string
  onChange: (file: File | null) => void
  required?: boolean
  inputRef?: RefObject<HTMLInputElement | null>
}

export default function FileUploadInput({
  label,
  name,
  onChange,
  required = false,
  inputRef,
}: FileUploadInputProps) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 font-medium text-gray-700">
        {label} (PDF ou image)
      </label>
      <input
        ref={inputRef}
        type="file"
        name={name}
        id={name}
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) => onChange(e.target.files?.[0] || null)}
        required={required}
        className="block w-full text-sm text-gray-700
          file:border file:border-gray-300 file:rounded 
          file:px-4 file:py-2 file:bg-white file:text-gray-700 
          hover:file:bg-gray-100 file:cursor-pointer cursor-pointer"
      />
    </div>
  )
}
