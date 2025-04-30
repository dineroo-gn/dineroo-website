'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

export default function RestaurantSignupForm() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    restaurantName: '',
    ownerName: '',
    phone: '+224',
    address: '',
    cuisineType: '',
  })
  const [idFile, setIdFile] = useState<File | null>(null)
  const idInputRef = useRef<HTMLInputElement | null>(null)

  const isGuineanPhone = (phone: string) => /^\+2246[0-9]{8}$/.test(phone)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === 'phone') {
      if (!value.startsWith('+224')) return
      const digitsOnly = value.slice(4).replace(/\D/g, '').slice(0, 9)
      setFormData({ ...formData, phone: '+224' + digitsOnly })
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
    if (!idFile) {
      toast.error("Veuillez téléverser votre pièce (PDF ou image).")
      return
    }

    const formPayload = new FormData()
    Object.entries(formData).forEach(([key, value]) => formPayload.append(key, value))
    formPayload.append('idFile', idFile)

    console.log('Payload prêt à être envoyé :', formPayload)
    toast.success('Votre demande a été envoyée 🎉')

    setFormData({
      restaurantName: '',
      ownerName: '',
      phone: '+224',
      address: '',
      cuisineType: '',
    })
    setIdFile(null)
    idInputRef.current!.value = ''

    router.push(`/confirmation?phone=${encodeURIComponent(formData.phone)}&role=partner`)
  }

  return (
    <section className="bg-white py-16 px-4" id="partner-signup-form">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Formulaire d&apos;inscription restaurant partenaire
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input name="restaurantName" placeholder="Nom du restaurant" value={formData.restaurantName} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg text-gray-800" />
          <input name="ownerName" placeholder="Nom du responsable" value={formData.ownerName} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg text-gray-800" />
          <input name="phone" placeholder="+2246XXXXXXX" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg text-gray-800" />
          <input name="address" placeholder="Adresse complète" value={formData.address} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg text-gray-800" />
          <input name="cuisineType" placeholder="Type de cuisine (ex: Guinéenne, Pizza...)" value={formData.cuisineType} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg text-gray-800" />

          <div>
            <label className="block mb-2 font-medium text-gray-700">Pièce d&apos;identité du responsable</label>
            <input type="file" ref={idInputRef} accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => setIdFile(e.target.files?.[0] || null)} className="w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600" />
          </div>

          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300">
            Soumettre ma demande
          </button>
        </form>
      </div>
    </section>
  )
}
