'use client'

import Link from 'next/link'
import { FaCheckCircle, FaGooglePlay, FaApple } from 'react-icons/fa'
import { GOOGLE_PLAY_URL, APP_STORE_URL } from '@/utils/urls'

export default function DriverConfirmationPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="max-w-md w-full text-center">
        <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Merci pour votre inscription !</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Votre demande a bien été prise en compte ✅ <br />
          Vous recevrez une confirmation par SMS une fois qu’elle sera validée.
        </p>

        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-300 w-full text-center"
          >
            Retour à l&apos;accueil
          </Link>

          <a
            href={GOOGLE_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-300 w-full"
          >
            <FaGooglePlay className="text-lg" />
            Télécharger sur Android
          </a>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-300 w-full"
          >
            <FaApple className="text-lg" />
            Télécharger sur iOS
          </a>
        </div>
      </div>
    </section>
  )
}
