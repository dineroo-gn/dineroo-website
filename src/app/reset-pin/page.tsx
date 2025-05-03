'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import PhoneInputField from '@/components/common/PhoneInputField'
import PinInputField from '@/components/common/PinInputField'
import AppButton from '@/components/common/AppButton'

export default function ResetPinPage() {
  const router = useRouter()
  const [step, setStep] = useState<'phone' | 'pin'>('phone')
  const [phone, setPhone] = useState('+224')
  const [pin, setPin] = useState('')
  const [confirmPin, setConfirmPin] = useState('')

  const isGuineanPhone = (value: string) => /^\+2246\d{8}$/.test(value)
  const isValidPin = (value: string) => /^\d{4}$/.test(value)

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isGuineanPhone(phone)) {
      toast.error('Numéro invalide. Format attendu : +2246XXXXXXX')
      return
    }

    // TODO: Vérifier que le numéro existe via API
    setStep('pin')
  }

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isValidPin(pin) || !isValidPin(confirmPin)) {
      toast.error('Le code PIN doit contenir exactement 4 chiffres.')
      return
    }

    if (pin !== confirmPin) {
      toast.error('Les deux codes PIN ne correspondent pas.')
      return
    }

    // TODO: Envoyer le nouveau PIN via l’API
    toast.success('Votre nouveau code PIN a été enregistré ✅')

    setTimeout(() => {
      router.push('/restaurant/login')
    }, 1000)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Réinitialiser votre code PIN</h1>
          <p className="text-gray-600 text-sm">
            {step === 'phone'
              ? 'Entrez votre numéro pour vérifier votre identité.'
              : 'Choisissez un nouveau code PIN à 4 chiffres.'}
          </p>
        </div>

        {step === 'phone' ? (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <PhoneInputField
              value={phone}
              onChange={(value) => setPhone(value)}
              required
            />
            <AppButton type="submit">Continuer</AppButton>
          </form>
        ) : (
          <form onSubmit={handlePinSubmit} className="space-y-4">
            <PinInputField
              label="Nouveau code PIN"
              value={pin}
              onChange={(value) => setPin(value)}
              required
            />
            <PinInputField
              label="Retaper le code PIN"
              value={confirmPin}
              onChange={(value) => setConfirmPin(value)}
              required
            />
            <AppButton type="submit">Enregistrer le nouveau PIN</AppButton>

            <div className="text-center text-sm text-gray-500 mt-4">
              <Link href="/restaurant/login" className="text-orange-600 underline">
                Retour à la connexion
              </Link>
            </div>
          </form>
        )}
      </div>
    </main>
  )
}
