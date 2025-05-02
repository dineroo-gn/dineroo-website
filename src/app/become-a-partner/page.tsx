'use client'

import { FaUtensils, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa'
import Link from 'next/link'
import RestaurantSignupForm from '@/components/restaurant/RestaurantSignupForm'

export default function BecomeAPartnerPage() {
  return (
    <>
      <section className="bg-white pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Rejoignez Dineroo en tant que restaurant</h1>
          <p className="text-lg text-gray-600 mb-10">
            Augmentez vos ventes et touchez plus de clients grâce à notre plateforme de livraison en Guinée 🇬🇳
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div className="flex flex-col items-center">
              <FaUtensils className="text-orange-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Plus de visibilité</h3>
              <p className="text-gray-600">Vos plats visibles auprès de milliers d’utilisateurs dans votre ville.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaMapMarkerAlt className="text-orange-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Commandes simplifiées</h3>
              <p className="text-gray-600">Recevez les commandes directement via l’application partenaire.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaMoneyBillWave className="text-orange-500 text-5xl mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Paiements rapides</h3>
              <p className="text-gray-600">Suivez vos ventes et recevez vos paiements en toute simplicité.</p>
            </div>
          </div>

          <Link href="/contact">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition duration-300">
              Une question ? Contactez-nous
            </button>
          </Link>
        </div>
      </section>

      <RestaurantSignupForm />
    </>
  )
}
