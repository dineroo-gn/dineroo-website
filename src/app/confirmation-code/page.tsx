'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function ConfirmPhonePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const phone = searchParams.get('phone') || ''

  const [code, setCode] = useState('')
  const [error, setError] = useState(false)

  const validateCode = (code: string) => {
    if (code === '1234') {
      router.push('/confirmation-livreur')
    } else {
      toast.error("Code incorrect. Veuillez réessayer.")
      setError(true)
    }
  }

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '')
    if (value.length <= 4) {
      setCode(value)
      setError(false)
      if (value.length === 4) {
        validateCode(value)
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Vérification du numéro</h1>
        <p className="text-gray-600 mb-6">
          Un code à 4 chiffres a été envoyé par SMS au <strong>{phone}</strong>
        </p>
        <div className="space-y-4">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={code}
            onChange={handleCodeChange}
            placeholder="1234"
            className={`w-full px-4 py-3 border rounded-lg shadow-sm text-center tracking-widest text-2xl text-gray-800 ${
              error ? 'border-red-500' : ''
            }`}
          />
          <p className="text-sm text-gray-500">Vous serez redirigé automatiquement après validation.</p>
        </div>
      </div>
    </section>
  )
}
