'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import PhoneInputField from '../common/PhoneInputField'
import PinInputField from '../common/PinInputField'
import FileUploadInput from '../common/FileUploadInput'
import TextInputField from '../common/TextInputField'
import AppButton from '../common/AppButton'

export default function RestaurantSignupForm() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    phone: '+224',
    pin: '',
    confirmPin: '',
    address: '',
    cuisineType: '',
  })

  const [idFile, setIdFile] = useState<File | null>(null)
  const idInputRef = useRef<HTMLInputElement | null>(null)

  const isGuineanPhone = (phone: string) => /^\+2246[0-9]{8}$/.test(phone)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isGuineanPhone(formData.phone)) {
      toast.error('Veuillez entrer un numéro de téléphone guinéen valide (+2246XXXXXXX).')
      return
    }

    if (!/^\d{4}$/.test(formData.pin)) {
      toast.error('Code PIN invalide. Il doit contenir 4 chiffres.')
      return
    }

    if (formData.pin !== formData.confirmPin) {
      toast.error('Les deux codes PIN ne correspondent pas.')
      return
    }

    if (!idFile) {
      toast.error("Veuillez téléverser votre pièce (PDF ou image).")
      return
    }

    const formPayload = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'confirmPin') {
        formPayload.append(key, value)
      }
    })
    formPayload.append('idFile', idFile)

    toast.success('Votre demande a été envoyée 🎉')

    // TODO: Send data via API here if required

    router.push(`/verify-phone?phone=${encodeURIComponent(formData.phone)}&role=partner`)
  }

  return (
    <section className="bg-white py-16 px-4" id="partner-signup-form">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Formulaire d&apos;inscription restaurant partenaire
        </h2>
        <p className="text-md text-gray-600 text-center mb-6">
          Faites connaître vos plats et touchez plus de clients grâce à Dineroo.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <TextInputField
            label="Nom du restaurant"
            name="restaurantName"
            value={formData.restaurantName}
            onChange={handleChange}
            placeholder="Ex : Le Délice de Conakry"
            required
          />

          <TextInputField
            label="Adresse complète"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Ex : 10 Rue Niger, Kaloum, Conakry"
            required
          />

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

          <PinInputField
            label="Retaper le code PIN"
            value={formData.confirmPin}
            onChange={(pin: string) => setFormData({ ...formData, confirmPin: pin })}
            required
          />

          <TextInputField
            label="Nom du responsable"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            placeholder="Ex : Mamadou Sylla"
            required
          />

          <FileUploadInput
            label="Pièce d'identité du responsable"
            name="idFile"
            onChange={setIdFile}
            required
            inputRef={idInputRef}
          />

          <AppButton type="submit">Soumettre ma demande</AppButton>
        </form>
      </div>
    </section>
  )
}
