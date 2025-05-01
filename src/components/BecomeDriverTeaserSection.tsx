'use client'

import { FaBiking } from 'react-icons/fa'
import BecomeCTAButton from './common/BecomeCTAButton'

export default function BecomeDriverTeaserSection() {
  return (
    <section className="bg-orange-100 py-16 px-4 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <FaBiking className="text-orange-500 text-6xl mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Gagne de l’argent en livrant dans ta ville
        </h2>
        <p className="text-gray-700 mb-6">
          Rejoins notre équipe de livreurs et choisis quand et où tu travailles. Commence dès aujourd’hui !
        </p>
        <BecomeCTAButton href="/become-a-driver" label="Devenir livreur" variant="driver" />
      </div>
    </section>
  )
}
