'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: envoyer vers backend plus tard
    console.log('Form data:', formData)

    toast.success('Message envoyé avec succès ! 🎉')

    // reset form
    setFormData({ name: '', email: '', message: '' })
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
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500"
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
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-500"
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
