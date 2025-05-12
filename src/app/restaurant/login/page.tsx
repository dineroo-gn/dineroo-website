'use client'

import { useState } from 'react'
import Link from 'next/link'
import PhoneInputField from '@/components/common/PhoneInputField'
import PinInputField from '@/components/common/PinInputField'
import { toast } from 'react-toastify'
import AppButton from '@/components/common/AppButton'

export default function RestaurantLoginPage() {
  const [formData, setFormData] = useState({
    phone: '+224',
    pin: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!/^\+2246\d{8}$/.test(formData.phone)) {
      toast.error('Numéro invalide. Format attendu : +2246XXXXXXX')
      return
    }

    if (!/^\d{4}$/.test(formData.pin)) {
      toast.error('Code PIN invalide. Il doit contenir 4 chiffres.')
      return
    }

    console.log('Login form submitted:', formData)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Connexion Partenaire</h1>
          <p className="text-gray-600 text-sm">
            Accédez à votre espace pour gérer vos plats, commandes et horaires.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <PhoneInputField
            value={formData.phone}
            onChange={(phone: string) => setFormData({ ...formData, phone })}
            required
          />

          <PinInputField
            value={formData.pin}
            onChange={(pin: string) => setFormData({ ...formData, pin })}
            required
          />

          <div className="text-right text-sm">
            <Link href="/reset-pin" className="text-orange-600 underline">
              Code PIN oublié ?
            </Link>
          </div>

          <AppButton type="submit">Se connecter</AppButton>
        </form>

        <div className="text-center text-sm text-gray-500">
          Vous n’êtes pas encore partenaire ?{' '}
          <Link href="/become-a-partner" className="text-orange-600 underline">
            Rejoignez-nous
          </Link>
        </div>
      </div>
    </main>
  )
}
