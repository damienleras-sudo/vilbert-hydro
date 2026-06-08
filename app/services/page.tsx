import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Nos Services — Débouchage, Curage, Vidange, Poste de Relevage — Somme (80)",
  description:
    "Vilbert Hydro : débouchage canalisations, curage et hydrocurage, inspection télévisée, vidange fosse septique, entretien bacs à graisses, maintenance postes de relevage, électromécanique. Somme (80), Hauts-de-France. Agréé vidangeur · CATEC · Habilitation électrique.",
  alternates: { canonical: "https://vilbert-hydro.vercel.app/services" },
};

const services = [
  {
    id: "debouchage",
    icon: "🚿",
    titre: "Débouchage de canalisations",
    sousTitre: "Intervention rapide — Urgences 24h/24 7j/7",
    desc: "Nos techniciens interviennent pour déboucher vos canalisations, que vous soyez particulier, professionnel ou syndic de copropriété. Évier, lavabo, douche, WC, canalisation principale — nous traitons tous les types de bouchons en Somme et Hauts-de-France.",
    details: [
      "Débouchage d'évier, lavabo, baignoire, douche",
      "Débouchage de WC et toilettes",
      "Débouchage de canalisation principale",
      "Traitement des bouchons récalcitrants (racines, calcaire, graisses)",
      "Urgences 24h/24 · 7j/7 · WE et jours fériés",
    ],
    clienteles: "Particuliers, syndicats de copropriété, restaurants, hôtels, collectivités",
    img: "/20221028_083531.jpg",
    imgAlt: "Intervention débouchage canalisation - Vilbert Hydro Somme",
  },
  {
    id: "curage",
    icon: "💧",
    titre: "Curage & Hydrocurage haute pression",
    sousTitre: "Nettoyage complet de vos réseaux",
    desc: "L'hydrocurage est la technique la plus efficace pour nettoyer en profondeur vos canalisations. Un jet d'eau à très haute pression élimine les dépôts, les graisses incrustées, les racines et tous les résidus. Intervention pour réseaux privatifs et collectifs.",
    details: [
      "Hydrocurage haute pression (jusqu'à 200 bars)",
      "Curage de réseaux privatifs et collectifs",
      "Nettoyage préventif et curatif",
      "Extraction et évacuation des matières",
      "Contrats de maintenance réseau",
      "Camions hydrocureurs disponibles rapidement",
    ],
    clienteles: "Particuliers, syndicats de copropriété, agriculteurs, collectivités, industries",
    img: "/HYDROCURAGE-dessin.png",
    imgAlt: "Hydrocurage de canalisation — camion hydrocureur Vilbert Hydro",
  },
  {
    id: "inspection",
    icon: "📷",
    titre: "Inspection télévisée de canalisations",
    sousTitre: "Diagnostic précis par caméra robotisée",
    desc: "Nous introduisons une caméra haute résolution dans vos canalisations pour établir un diagnostic précis. Cette technique permet de localiser avec exactitude les anomalies (fissures, racines, effondrement) sans travaux destructifs. Idéal avant achat immobilier.",
    details: [
      "Caméra robotisée haute résolution",
      "Enregistrement vidéo et photos de l'inspection",
      "Rapport écrit complet avec recommandations",
      "Localisation précise des anomalies",
      "Idéal avant achat immobilier ou rénovation",
      "Recherche de fuites et infiltrations",
    ],
    clienteles: "Particuliers, notaires, syndics de copropriété, communes, promoteurs",
    img: "/intervention-puisard.jpg",
    imgAlt: "Inspection et entretien puisard — Vilbert Hydro",
  },
  {
    id: "vidange",
    icon: "🏠",
    titre: "Vidange fosse septique & fosses toutes eaux",
    sousTitre: "Agréé vidangeur — Conformité réglementaire garantie",
    desc: "La vidange régulière de votre fosse septique est une obligation légale (tous les 4 ans). Nos camions vidangeurs agréés aspirent intégralement les boues et les acheminent vers des filières de traitement agréées. Bordereau de suivi des matières de vidange (BSMD) remis à chaque intervention.",
    details: [
      "Vidange de fosses septiques et fosses toutes eaux",
      "Vidange de débourbeurs et bacs de décantation",
      "Bordereau de suivi des matières de vidange (BSMD)",
      "Transport vers filières de traitement agréées",
      "Conformité SPANC — vérification optionnelle",
      "Secteur agricole : fosses et lagunes",
    ],
    clienteles: "Particuliers, agriculteurs, campings, zones rurales, industries",
    img: "/poste-relevage-maintenance.jpg",
    imgAlt: "Poste de relevage après entretien de maintenance — Vilbert Hydro",
  },
  {
    id: "relevage",
    icon: "⚙️",
    titre: "Maintenance postes de relevage",
    sousTitre: "Entretien préventif & dépannage urgent 24h/24",
    desc: "Un poste de relevage en panne peut provoquer des débordements immédiats. Vilbert Hydro assure la maintenance préventive et curative de vos postes de relevage eaux usées : vérification des pompes, flotteurs, armoires électriques, nettoyage des cuves. Personnel habilité électrique.",
    details: [
      "Inspection et diagnostic du poste de relevage",
      "Nettoyage et dégraissage de la cuve",
      "Vérification et remplacement de pompes",
      "Contrôle des flotteurs et sondes de niveau",
      "Maintenance des armoires de commande électrique",
      "Dépannage urgent 24h/24 — 7j/7",
      "Contrats de maintenance préventive",
    ],
    clienteles: "Syndicats de copropriété, collectivités, zones pavillonnaires, industries, agriculteurs",
    img: "/poste-relevage-maintenance.jpg",
    imgAlt: "Maintenance poste de relevage eaux usées — Vilbert Hydro",
  },
  {
    id: "electromecanique",
    icon: "⚡",
    titre: "Électromécanique assainissement",
    sousTitre: "Personnel habilité N1/N2 & habilitation électrique",
    desc: "Vilbert Hydro dispose d'une équipe électromécanique habilité pour la maintenance et le dépannage des équipements d'assainissement : pompes de relevage, variateurs de fréquence, armoires de commande, télégestion. Agents habilités CATEC, N1/N2 et habilitation électrique.",
    details: [
      "Maintenance et remplacement de pompes submersibles",
      "Maintenance d'armoires électriques de commande",
      "Réglage et maintenance de variateurs de fréquence",
      "Installation et paramétrage de télégestion",
      "Personnel habilité CATEC — N1 & N2",
      "Habilitation électrique B1, B1V, BR",
      "Interventions en espaces confinés",
    ],
    clienteles: "Collectivités, syndicats de copropriété, industries, zones industrielles",
    img: "/poste-relevage-maintenance.jpg",
    imgAlt: "Électromécanique assainissement — maintenance pompe relevage Vilbert Hydro",
  },
  {
    id: "restauration",
    icon: "🍽️",
    titre: "Entretien bacs à graisses & réseaux restauration",
    sousTitre: "Conformité pour les établissements de restauration",
    desc: "Restaurants, bouchers, traiteurs, boulangeries : le bac à graisses est obligatoire et son entretien est réglementé. Vilbert Hydro propose des contrats de maintenance adaptés à vos volumes et votre activité. Aucune surprise, rapport d'intervention à chaque passage.",
    details: [
      "Vidange et nettoyage de bacs à graisses",
      "Curage des réseaux d'eaux usées de cuisine",
      "Contrats de maintenance régulière",
      "Rapport d'intervention pour vos archives et contrôles",
      "Urgences et dépannage rapide",
      "Conformité réglementaire garantie",
    ],
    clienteles: "Restaurants, métiers de bouche, cantines scolaires, hôtels, traiteurs",
    img: "/entretien-bac-degraisseur.jpg",
    imgAlt: "Entretien bac dégraisseur restaurant — Vilbert Hydro",
  },
  {
    id: "industriel",
    icon: "🏭",
    titre: "Assainissement industriel",
    sousTitre: "Solutions sur mesure pour sites industriels",
    desc: "Les sites industriels ont des besoins spécifiques en matière de gestion des eaux usées. Vilbert Hydro intervient pour le curage de réseaux complexes, la vidange de bacs et cuves, les séparateurs d'hydrocarbures, et les interventions en espaces confinés (agents CATEC habilités).",
    details: [
      "Curage de réseaux industriels complexes",
      "Vidange de bacs, cuves et décanteurs industriels",
      "Nettoyage séparateurs d'hydrocarbures",
      "Nettoyage haute pression de surfaces industrielles",
      "Interventions en espaces confinés — agents CATEC",
      "Gestion et traçabilité des effluents industriels",
    ],
    clienteles: "Usines, entrepôts logistiques, zones industrielles, garages, collectivités",
    img: "/20221028_111003.jpg",
    imgAlt: "Intervention assainissement industriel — Vilbert Hydro",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-red-600 text-white py-2 text-center text-sm font-bold">
        🚨 Urgences 24h/24 — 7j/7 — Week-ends et jours fériés —{" "}
        <a href="tel:0322917201" className="underline">03 22 91 72 01</a>
      </section>

      <section className="bg-[#1b4f8c] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Nos Services d&apos;Assainissement</h1>
          <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-6" />
          <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-4">
            Du débouchage d&apos;urgence à la maintenance électromécanique — Vilbert Hydro,
            entreprise agréée et certifiée en Somme et Hauts-de-France.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm mb-8">
            {["Agréé vidangeur", "CATEC habilité", "Habilitation N1/N2", "Habilitation électrique"].map((c) => (
              <span key={c} className="bg-[#f5b800] text-gray-900 font-bold px-3 py-1 rounded">
                ✓ {c}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322917201"
              className="bg-[#f5b800] text-gray-900 font-bold px-8 py-3 rounded hover:bg-[#ffd44d] transition-colors"
            >
              📞 03 22 91 72 01
            </a>
            <a
              href="mailto:hydro@groupe-vilbert.fr"
              className="border-2 border-white text-white font-bold px-8 py-3 rounded hover:bg-white hover:text-[#1b4f8c] transition-colors"
            >
              ✉️ hydro@groupe-vilbert.fr
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start`}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-5xl mb-3">{s.icon}</div>
                <h2 className="text-2xl md:text-3xl font-black text-[#1b4f8c] mb-1">{s.titre}</h2>
                <p className="text-red-600 font-bold text-sm mb-4">⚡ {s.sousTitre}</p>
                <div className="w-12 h-1 bg-[#f5b800] mb-5" />
                <p className="text-gray-600 mb-6 leading-relaxed">{s.desc}</p>
                <div className="flex gap-3">
                  <a
                    href="tel:0322917201"
                    className="inline-block bg-[#f5b800] text-gray-900 font-bold px-5 py-2.5 rounded hover:bg-[#ffd44d] transition-colors text-sm"
                  >
                    📞 03 22 91 72 01
                  </a>
                  <a
                    href="mailto:hydro@groupe-vilbert.fr"
                    className="inline-block border border-[#1b4f8c] text-[#1b4f8c] font-bold px-5 py-2.5 rounded hover:bg-[#1b4f8c] hover:text-white transition-colors text-sm"
                  >
                    ✉️ Devis par email
                  </a>
                </div>
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

      {/* CERTIFICATIONS */}
      <section className="py-12 bg-[#1b4f8c] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black mb-2">Certifications & Habilitations</h2>
            <div className="w-12 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📋", label: "Agrément vidangeur", sub: "Arrêté du 7 sept. 2009" },
              { icon: "🦺", label: "Agents CATEC", sub: "Espaces confinés" },
              { icon: "⚠️", label: "Habilitation N1 & N2", sub: "Travaux espaces confinés" },
              { icon: "⚡", label: "Habilitation électrique", sub: "B1, B1V, BR" },
            ].map((c) => (
              <div key={c.label} className="bg-white/10 rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">{c.icon}</div>
                <p className="font-black text-sm text-[#f5b800]">{c.label}</p>
                <p className="text-blue-300 text-xs mt-1">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Besoin d&apos;un de nos services ?
          </h2>
          <p className="text-gray-700 mb-8">
            Appelez-nous directement ou écrivez-nous. Devis gratuit. Intervention rapide en Somme et Hauts-de-France.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322917201"
              className="bg-gray-900 text-white font-bold px-8 py-4 rounded text-lg hover:bg-gray-800 transition-colors"
            >
              📞 03 22 91 72 01
            </a>
            <a
              href="mailto:hydro@groupe-vilbert.fr"
              className="bg-white text-gray-900 font-bold px-8 py-4 rounded text-lg hover:bg-gray-100 transition-colors border border-gray-200"
            >
              ✉️ hydro@groupe-vilbert.fr
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
