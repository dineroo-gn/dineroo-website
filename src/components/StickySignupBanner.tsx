'use client'

export default function StickySignupBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">Vous souhaitez devenir livreur ?</span>
        <a
          href="#driver-signup-form"
          className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200"
        >
          S’inscrire maintenant
        </a>
      </div>
    </div>
  )
}
