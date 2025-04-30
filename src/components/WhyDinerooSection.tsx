'use client'

import { FaClock, FaUtensils, FaShieldAlt } from 'react-icons/fa'

export default function WhyDinerooSection() {
  return (
    <section className="bg-orange-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Pourquoi choisir Dineroo ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <FaClock className="text-orange-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Livraison rapide</h3>
            <p className="text-gray-600 max-w-xs">Recevez votre commande en un temps record grâce à notre réseau de livreurs réactifs.</p>
          </div>
          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <FaUtensils className="text-orange-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Plats variés</h3>
            <p className="text-gray-600 max-w-xs">Choisissez parmi les meilleurs restaurants de votre ville, avec des plats pour tous les goûts.</p>
          </div>
          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <FaShieldAlt className="text-orange-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Paiement sécurisé</h3>
            <p className="text-gray-600 max-w-xs">Vos informations sont protégées et vos paiements 100% sécurisés.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
