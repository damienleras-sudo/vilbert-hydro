import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nos Services — Débouchage, Curage, Vidange Fosse Septique",
  description:
    "Vilbert Hydro : débouchage canalisations, curage et hydrocurage, inspection télévisée, vidange fosse septique, entretien bacs à graisses. Services pour particuliers et professionnels en Hauts-de-France.",
  alternates: { canonical: "https://vilbert-hydro.vercel.app/services" },
};

const services = [
  {
    id: "debouchage",
    icon: "🚿",
    titre: "Débouchage de canalisations",
    sousTitre: "Intervention rapide 24h/24",
    desc: "Nos techniciens interviennent pour déboucher vos canalisations, que vous soyez particulier ou professionnel. Évier, lavabo, douche, WC, canalisation principale — nous traitons tous les types de bouchons.",
    details: [
      "Débouchage d'évier, lavabo, baignoire, douche",
      "Débouchage de WC et toilettes",
      "Débouchage de canalisation principale",
      "Traitement des bouchons récalcitrants",
      "Urgences 24h/24 · 7j/7",
    ],
    clienteles: "Particuliers, résidences, restaurants, hôtels",
    img: "/20221028_083531.jpg",
    imgAlt: "Intervention débouchage canalisation en zone résidentielle - Vilbert Hydro",
  },
  {
    id: "curage",
    icon: "💧",
    titre: "Curage & Hydrocurage haute pression",
    sousTitre: "Nettoyage complet de vos réseaux",
    desc: "L'hydrocurage est la technique la plus efficace pour nettoyer en profondeur vos canalisations. Un jet d'eau à très haute pression élimine les dépôts, les graisses incrustées, les racines et tous les résidus.",
    details: [
      "Hydrocurage haute pression (jusqu'à 200 bars)",
      "Curage de réseaux privatifs et collectifs",
      "Nettoyage préventif et curatif",
      "Extraction et évacuation des matières",
      "Camions hydrocureurs disponibles rapidement",
    ],
    clienteles: "Particuliers, syndics, collectivités, industries",
    img: "/HYDROCURAGE-dessin.png",
    imgAlt: "Schéma hydrocurage de canalisation - camion hydrocureur",
  },
  {
    id: "inspection",
    icon: "📷",
    titre: "Inspection télévisée de canalisations",
    sousTitre: "Diagnostic précis par caméra robotisée",
    desc: "Nous introduisons une caméra haute résolution dans vos canalisations pour établir un diagnostic précis. Cette technique permet de localiser avec exactitude les anomalies sans travaux destructifs.",
    details: [
      "Caméra robotisée haute résolution",
      "Enregistrement vidéo de l'inspection",
      "Rapport écrit avec images et recommandations",
      "Localisation précise des anomalies",
      "Idéal avant achat immobilier ou travaux",
    ],
    clienteles: "Particuliers, notaires, syndics, communes",
    img: "/photo d'intervention  entretien et remise en fonction d'un puisard.jpg",
    imgAlt: "Entretien et remise en fonction d'un puisard - inspection Vilbert Hydro",
  },
  {
    id: "vidange",
    icon: "🏠",
    titre: "Vidange fosse septique & fosses toutes eaux",
    sousTitre: "Conformité réglementaire garantie",
    desc: "La vidange régulière de votre fosse septique est une obligation légale. Nos camions vidangeurs aspirent intégralement les boues et les acheminent vers des filières agréées. Bordereau de suivi remis à chaque intervention.",
    details: [
      "Vidange de fosses septiques et fosses toutes eaux",
      "Vidange de débourbeurs et bacs de décantation",
      "Bordereau de suivi des matières de vidange fourni",
      "Transport vers filières de traitement agréées",
      "Conformité SPANC",
    ],
    clienteles: "Particuliers en zone rurale, campings, industries",
    img: "/poste de relevage  après entretien de maintenance 1.jpg",
    imgAlt: "Poste de relevage après entretien de maintenance - Vilbert Hydro",
  },
  {
    id: "restauration",
    icon: "🍽️",
    titre: "Entretien bacs à graisses & réseaux restauration",
    sousTitre: "Conformité pour les établissements de restauration",
    desc: "Restaurants, bouchers, traiteurs, boulangeries : le bac à graisses est obligatoire et son entretien est réglementé. Vilbert Hydro propose des contrats de maintenance adaptés à vos volumes et votre activité.",
    details: [
      "Vidange et nettoyage de bacs à graisses",
      "Curage des réseaux d'eaux usées de cuisine",
      "Contrats de maintenance régulière",
      "Rapport d'intervention pour vos archives",
      "Urgences et dépannage rapide",
    ],
    clienteles: "Restaurants, métiers de bouche, cantines, hôtels",
    img: "/entretien bac dégraisseur.jpg",
    imgAlt: "Entretien bac dégraisseur restaurant - Vilbert Hydro",
  },
  {
    id: "industriel",
    icon: "🏭",
    titre: "Assainissement industriel",
    sousTitre: "Solutions sur mesure pour les sites industriels",
    desc: "Les sites industriels ont des besoins spécifiques en matière de gestion des eaux usées. Vilbert Hydro intervient pour le curage de réseaux complexes, la vidange de bacs et cuves, et les dépollutions.",
    details: [
      "Curage de réseaux industriels complexes",
      "Vidange de bacs, cuves et décanteurs",
      "Nettoyage haute pression de surfaces",
      "Gestion des effluents industriels",
      "Interventions en toute sécurité",
    ],
    clienteles: "Usines, entrepôts, zones industrielles, collectivités",
    img: "/20221028_111003.jpg",
    imgAlt: "Intervention Vilbert Hydro sur site industriel - assainissement",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1b4f8c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Nos Services</h1>
          <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-6" />
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Du débouchage d&apos;urgence à l&apos;entretien préventif, Vilbert Hydro vous propose
            une gamme complète de services d&apos;assainissement pour particuliers et professionnels.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322917201"
              className="bg-[#f5b800] text-gray-900 font-bold px-8 py-3 rounded hover:bg-[#ffd44d] transition-colors"
            >
              📞 03 22 91 72 01
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-[#1b4f8c] transition-colors"
            >
              Devis gratuit →
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-5xl mb-4">{s.icon}</div>
                <h2 className="text-2xl md:text-3xl font-black text-[#1b4f8c] mb-1">{s.titre}</h2>
                <p className="text-[#f5b800] font-bold text-sm mb-4">{s.sousTitre}</p>
                <div className="w-12 h-1 bg-[#f5b800] mb-5" />
                <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>
                <Link
                  href="/contact"
                  className="inline-block bg-[#1b4f8c] text-white font-bold px-6 py-3 rounded hover:bg-[#0f2942] transition-colors"
                >
                  Demander un devis →
                </Link>
              </div>
              <div className={`space-y-4 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                {s.img && (
                  <div className="relative rounded-2xl overflow-hidden h-52">
                    <Image
                      src={s.img}
                      alt={s.imgAlt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#1b4f8c]/10" />
                  </div>
                )}
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4">Ce que comprend ce service :</h3>
                  <ul className="space-y-3 mb-5">
                    {s.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-gray-700 text-sm">
                        <span className="text-[#f5b800] font-black mt-0.5">✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-400 uppercase tracking-wide font-bold mb-1">
                      Clientèles concernées
                    </p>
                    <p className="text-gray-600 text-sm">{s.clienteles}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Besoin d&apos;un de nos services ?
          </h2>
          <p className="text-gray-700 mb-8">
            Appelez-nous ou remplissez notre formulaire pour un devis gratuit sous 24h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322917201"
              className="bg-gray-900 text-white font-bold px-8 py-4 rounded text-lg hover:bg-gray-800 transition-colors"
            >
              📞 03 22 91 72 01
            </a>
            <Link
              href="/contact"
              className="bg-white text-gray-900 font-bold px-8 py-4 rounded text-lg hover:bg-gray-100 transition-colors border border-gray-200"
            >
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
