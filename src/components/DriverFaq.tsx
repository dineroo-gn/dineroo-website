'use client'

import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
  {
    question: "Quels sont les prérequis pour devenir livreur ?",
    answer: "Avoir un smartphone, un moyen de transport (vélo, moto) et une pièce d'identité valide.",
  },
  {
    question: "Comment suis-je payé ?",
    answer: "Vous êtes payé à chaque livraison, avec des virements hebdomadaires ou journaliers selon la région.",
  },
  {
    question: "Puis-je choisir mes horaires ?",
    answer: "Oui, vous êtes libre de vous connecter et livrer quand vous le souhaitez.",
  },
  {
    question: "Dois-je avoir une assurance ?",
    answer: "Oui, une assurance responsabilité civile est fortement recommandée, et parfois obligatoire selon les zones.",
  },
  {
    question: "Est-ce que je peux livrer à pied ?",
    answer: "Oui, dans certaines zones urbaines très denses, la livraison à pied est possible si vous êtes rapide et efficace.",
  },
  {
    question: "Que faire si un client ne répond pas ?",
    answer: "Vous pouvez contacter le support via l’application après avoir tenté d’appeler le client à plusieurs reprises.",
  },
]

export default function DriverFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Foire aux questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg shadow-sm">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-800 font-medium"
              >
                {faq.question}
                <FaChevronDown className={`transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
