'use client'

import { useRouter } from 'next/navigation'
import { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import PhoneInputField from './common/PhoneInputField'
import PinInputField from './common/PinInputField'
import FileUploadInput from './common/FileUploadInput'
import AppButton from './common/AppButton'

export default function DriverSignupForm() {
  const [formData, setFormData] = useState({
    phone: '+224',
    pin: '',
  })

  const [identityFile, setIdentityFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const router = useRouter()

  const isGuineanPhone = (phone: string) => /^\+2246\d{8}$/.test(phone)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isGuineanPhone(formData.phone)) {
      toast.error('Numéro invalide. Format attendu : +2246XXXXXXX')
      return
    }

    if (!/^\d{4}$/.test(formData.pin)) {
      toast.error('Code PIN invalide. Il doit contenir 4 chiffres.')
      return
    }

    if (!identityFile) {
      toast.error("Veuillez téléverser une pièce d'identité (PDF ou image).")
      return
    }

    const formPayload = new FormData()
    formPayload.append('phone', formData.phone)
    formPayload.append('pin', formData.pin)
    formPayload.append('identityFile', identityFile)

    toast.success('Votre demande a été envoyée 🎉')

    setFormData({ phone: '+224', pin: '' })
    setIdentityFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ''

    router.push(`/confirmation?phone=${encodeURIComponent(formData.phone)}&role=driver`)
  }

  return (
    <section id="driver-signup-form" className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Formulaire d&apos;inscription livreur
        </h2>
        <p className="text-md text-gray-600 text-center mb-6">
          Rejoignez la révolution de la livraison en Guinée et gagnez de l’argent à votre rythme !
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
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

          <FileUploadInput
            label="Pièce d'identité"
            name="identityFile"
            onChange={setIdentityFile}
            required
            inputRef={fileInputRef}
          />

          <AppButton type="submit">Soumettre ma demande</AppButton>
        </form>
      </div>
    </section>
  )
}
