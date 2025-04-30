'use client'

import Link from 'next/link'
import { FaMoneyBillWave, FaClock, FaMapMarkedAlt } from 'react-icons/fa'
import DriverFaq from '@/components/DriverFaq'
import DriverSignupForm from '@/components/DriverSignupForm'
import StickySignupBanner from '@/components/StickySignupBanner'

export default function BecomeADriverPage() {
  return (
    <>
      <StickySignupBanner />

      <section className="bg-white pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Pourquoi devenir livreur avec Dineroo ?</h1>
          <p className="text-lg text-gray-600 mb-10">
            Rejoignez la révolution de la livraison en Guinée et gagnez de l’argent à votre rythme !
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div className="flex flex-col items-center">
              <FaMoneyBillWave className="text-orange-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Revenus flexibles</h3>
              <p className="text-gray-600">Livrez quand vous voulez et gagnez à chaque course.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaClock className="text-orange-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Horaires libres</h3>
              <p className="text-gray-600">Choisissez vos plages de disponibilité librement.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaMapMarkedAlt className="text-orange-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Zone proche</h3>
              <p className="text-gray-600">Travaillez dans votre propre quartier ou ville.</p>
            </div>
          </div>

          <Link href="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition duration-300">
              Une question ? Contactez-nous
            </button>
          </Link>
        </div>
      </section>

      <DriverFaq />

      <DriverSignupForm />
    </>
  )
}
