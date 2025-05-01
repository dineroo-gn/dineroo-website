'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '+224',
    message: '',
  })

  const isGuineanPhone = (phone: string) => /^\+2246[0-9]{8}$/.test(phone)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      toast.error('Veuillez entrer un numéro de téléphone valide (+2246XXXXXXX).')
      return
    }

    console.log('Form data:', formData)
    toast.success('Message envoyé avec succès ! 🎉')

    setFormData({ name: '', phone: '+224', message: '' })
  }

  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Contactez-nous</h1>
        <p className="text-center text-gray-600 mb-12">
          Une question ? Une suggestion ? Remplissez le formulaire ci-dessous, nous vous répondrons rapidement.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-700" htmlFor="name">Nom</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700" htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+2246XXXXXXX"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
              dir="ltr"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  )
}
