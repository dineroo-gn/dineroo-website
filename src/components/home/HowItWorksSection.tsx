'use client'

import { FaMobileAlt, FaMotorcycle, FaUtensils } from 'react-icons/fa'

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Comment ça marche ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <FaMobileAlt className="text-orange-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">1. Commandez</h3>
            <p className="text-gray-600">Choisissez vos plats préférés sur l&apos;app Dineroo.</p>
          </div>
          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <FaMotorcycle className="text-orange-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">2. Livraison rapide</h3>
            <p className="text-gray-600">Nos livreurs récupèrent votre commande immédiatement.</p>
          </div>
          <div className="flex flex-col items-center hover:scale-105 transition-transform duration-300">
            <FaUtensils className="text-orange-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">3. Dégustez</h3>
            <p className="text-gray-600">Recevez votre plat chaud, directement chez vous.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
