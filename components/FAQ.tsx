"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Intervenez-vous en urgence les week-ends et jours fériés ?",
    a: "Oui, Vilbert Hydro assure des interventions d'urgence 24h/24 et 7j/7, y compris les week-ends et jours fériés. Appelez le 03 22 91 72 01 pour une prise en charge immédiate.",
  },
  {
    q: "Quelle est la différence entre débouchage et curage ?",
    a: "Le débouchage traite un bouchon ponctuel dans une canalisation. Le curage (ou hydrocurage) est un nettoyage complet du réseau par projection d'eau à haute pression, qui élimine les dépôts et prévient les obstructions futures.",
  },
  {
    q: "À quelle fréquence doit-on vidanger sa fosse septique ?",
    a: "La réglementation impose une vidange tous les 4 ans minimum, mais en pratique nous recommandons tous les 2 à 3 ans selon la taille de votre fosse et le nombre d'occupants. Un contrat d'entretien régulier est possible.",
  },
  {
    q: "Intervenez-vous pour les restaurants et professionnels de la restauration ?",
    a: "Oui, nous sommes spécialisés dans l'entretien des bacs à graisses et des réseaux d'eaux usées pour la restauration. Nous proposons des contrats de maintenance réguliers conformes aux obligations légales pour les établissements de restauration.",
  },
  {
    q: "Quelles zones géographiques couvrez-vous ?",
    a: "Vilbert Hydro intervient dans toute la région Hauts-de-France : Somme, Pas-de-Calais, Oise, Aisne, Nord et Seine-Maritime. Nos équipes se déplacent rapidement sur Amiens, Abbeville, Arras, Lens, Saint-Quentin, Compiègne et toutes les communes environnantes.",
  },
  {
    q: "Comment se déroule une inspection télévisée ?",
    a: "Nous introduisons une caméra robotisée dans vos canalisations. Les images sont enregistrées et analysées pour détecter fissures, racines, effondrements ou décalages. Vous recevez un rapport complet avec les images et nos recommandations.",
  },
  {
    q: "Proposez-vous des devis gratuits ?",
    a: "Oui, tous nos devis sont gratuits et sans engagement. Contactez-nous par téléphone au 03 22 91 72 01 ou via notre formulaire en ligne, nous vous répondons dans les plus brefs délais.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-16 bg-white" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-[#1b4f8c] mb-3">
            Questions fréquentes
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-gray-900 pr-4">{f.q}</span>
                <span className="text-[#1b4f8c] font-black text-lg flex-shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
