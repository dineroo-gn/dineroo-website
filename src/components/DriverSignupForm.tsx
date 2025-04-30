'use client'

import { useRouter } from 'next/navigation'
import { useState, useRef } from 'react'
import { toast } from 'react-toastify'

export default function DriverSignupForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '+224',
  })

  const [identityFile, setIdentityFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const router = useRouter()

  const isGuineanPhone = (phone: string) => {
    const pattern = /^\+2246[0-9]{8}$/
    return pattern.test(phone)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === 'phone') {
      if (!value.startsWith('+224')) return
      const digitsOnly = value.slice(4).replace(/\D/g, '').slice(0, 9)
      const formatted = '+224' + digitsOnly
      setFormData({ ...formData, phone: formatted })
      return
    }

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!isGuineanPhone(formData.phone)) {
      toast.error('Veuillez entrer un numéro de téléphone guinéen valide (+2246XXXXXXX).')
      return
    }

    if (!identityFile) {
      toast.error("Veuillez téléverser une pièce d'identité (PDF ou image).")
      return
    }

    const formPayload = new FormData()
    formPayload.append('fullName', formData.fullName)
    formPayload.append('phone', formData.phone)
    formPayload.append('identityFile', identityFile)

    console.log('Payload prêt à être envoyé :', formPayload)
    toast.success('Votre demande a été envoyée 🎉')

    setFormData({ fullName: '', phone: '+224' })
    setIdentityFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ''

    router.push(`/confirmation?phone=${encodeURIComponent(formData.phone)}&role=driver`)
  }

  return (
    <section id="driver-signup-form" className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Formulaire d&apos;inscription livreur
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">Nom complet</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Ex : Mamadou Diallo"
              className="w-full px-4 py-3 border rounded-lg shadow-sm text-gray-800"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Numéro de téléphone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+2246XXXXXXX"
              className="w-full px-4 py-3 border rounded-lg shadow-sm text-gray-800"
              dir="ltr"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Fichier de pièce d&apos;identité (PDF ou image)
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) setIdentityFile(file)
              }}
              required
              className="w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Soumettre ma demande
          </button>
        </form>
      </div>
    </section>
  )
}
