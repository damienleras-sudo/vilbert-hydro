import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contrat de Maintenance Assainissement Picardie — Vilbert Hydro",
  description:
    "Contrats de maintenance assainissement pour copropriétés, restaurants, industries et agriculteurs en Picardie. 3 formules : Essentiel, Pro, Premium. Priorité d'intervention, tarifs préférentiels, traçabilité. ☎ 03 22 91 72 01",
  alternates: { canonical: "https://vilbert-hydro.vercel.app/contrat-maintenance" },
};

const formules = [
  {
    nom: "Essentiel",
    cible: "Fosse septique & ANC",
    couleur: "border-gray-300",
    badge: "bg-gray-100 text-gray-700",
    inclus: [
      "1 vidange de fosse par an",
      "Remise du BSMD",
      "Rapport d'intervention",
      "Tarif préférentiel garanti",
      "Rappel annuel automatique",
    ],
    desc: "Idéal pour les particuliers, propriétaires bailleurs et petites structures disposant d'une fosse septique ou toutes eaux.",
  },
  {
    nom: "Pro",
    cible: "Poste de relevage & réseaux",
    couleur: "border-[#1b4f8c]",
    badge: "bg-[#1b4f8c] text-white",
    inclus: [
      "Maintenance préventive poste de relevage (2x/an)",
      "Curage préventif réseau (1x/an)",
      "Contrôle pompes, flotteurs, armoires",
      "Rapport d'intervention détaillé",
      "Priorité d'intervention urgences",
      "Tarifs préférentiels",
    ],
    desc: "Pour les copropriétés, restaurants, petites industries et bâtiments tertiaires équipés de postes de relevage et de réseaux collectifs.",
  },
  {
    nom: "Premium",
    cible: "Assainissement complet",
    couleur: "border-[#f5b800]",
    badge: "bg-[#f5b800] text-gray-900",
    inclus: [
      "Vidange fosse incluse",
      "Maintenance poste de relevage (4x/an)",
      "Curage réseau (2x/an)",
      "Inspection télévisée annuelle",
      "Rapport annuel consolidé",
      "Astreinte prioritaire 24h/24",
      "Tarifs préférentiels maximum",
    ],
    desc: "La formule complète pour les grandes copropriétés, restaurants à fort volume, industries et exploitations agricoles avec équipements multiples.",
  },
];

const avantages = [
  {
    icon: "⚡",
    titre: "Priorité d'intervention",
    desc: "En cas d'urgence, nos clients sous contrat sont traités en priorité, y compris la nuit, les week-ends et les jours fériés.",
  },
  {
    icon: "💰",
    titre: "Tarifs préférentiels",
    desc: "Les contrats de maintenance ouvrent droit à des tarifs réduits sur l'ensemble des prestations Vilbert Hydro.",
  },
  {
    icon: "📄",
    titre: "Traçabilité complète",
    desc: "Rapport écrit après chaque intervention, BSMD systématique pour les vidanges. Dossier complet disponible pour vos contrôles.",
  },
  {
    icon: "📊",
    titre: "Rapport annuel",
    desc: "Bilan annuel des interventions réalisées, état des équipements, recommandations. Idéal pour les assemblées générales de copropriété.",
  },
];

const cibles = [
  { label: "Copropriétés", href: "/assainissement-copropriete", icon: "🏢" },
  { label: "Restaurants", href: "/assainissement-restaurant", icon: "🍽️" },
  { label: "Industries", href: "/services", icon: "🏭" },
  { label: "Agriculteurs", href: "/assainissement-agriculteur", icon: "🌾" },
];

export default function ContratMaintenancePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#1b4f8c] text-white py-16 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-6 tracking-widest">
            Maintenance préventive
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Contrats de Maintenance
            <span className="block text-[#f5b800] mt-1">Assainissement</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            3 formules adaptées à vos équipements · Priorité d&apos;intervention · Traçabilité totale
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Copropriétés · Restaurants · Industries · Agriculteurs — Picardie (80, 60, 02)
          </p>
          <a
            href="mailto:hydro@groupe-vilbert.fr?subject=Demande devis contrat maintenance"
            className="inline-block bg-[#f5b800] text-gray-900 font-black px-10 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg"
          >
            Demander un devis contrat
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* FORMULES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Nos 3 formules de maintenance</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              Chaque contrat est établi sur mesure après audit de vos équipements. Contactez-nous pour un devis personnalisé.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formules.map((f) => (
              <div key={f.nom} className={`bg-white rounded-2xl border-2 ${f.couleur} p-8 flex flex-col hover:shadow-lg transition-shadow`}>
                <div className={`inline-block self-start text-xs font-bold uppercase px-3 py-1 rounded mb-2 ${f.badge}`}>
                  {f.nom}
                </div>
                <p className="text-[#1b4f8c] font-black text-lg mb-2">{f.cible}</p>
                <p className="text-gray-500 text-xs mb-6 leading-relaxed">{f.desc}</p>
                <ul className="space-y-2 flex-1">
                  {f.inclus.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#1b4f8c] font-black text-xs mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="mailto:hydro@groupe-vilbert.fr?subject=Demande devis contrat maintenance"
                  className="mt-8 block text-center bg-[#1b4f8c] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#163e70] transition-colors text-sm"
                >
                  Demander un devis
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Avantages du contrat de maintenance</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((a) => (
              <div key={a.titre} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="font-black text-[#1b4f8c] text-sm mb-2">{a.titre}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIBLES */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3">Qui est concerné ?</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-blue-200 text-sm max-w-xl mx-auto">
              Nos contrats s&apos;adressent à tous les professionnels ayant des équipements d&apos;assainissement à entretenir régulièrement.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cibles.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl mb-2">{c.icon}</div>
                <p className="font-black text-sm">{c.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Demander un devis contrat de maintenance
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Vilbert Hydro — votre partenaire assainissement en Picardie
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322917201"
              className="inline-block bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg"
            >
              📞 03 22 91 72 01
            </a>
            <a
              href="mailto:hydro@groupe-vilbert.fr?subject=Demande devis contrat maintenance"
              className="inline-block border-2 border-gray-900 text-gray-900 font-black px-8 py-5 rounded-xl text-base hover:bg-gray-900 hover:text-white transition-colors"
            >
              ✉ hydro@groupe-vilbert.fr
            </a>
          </div>
          <p className="text-gray-600 text-sm mt-4">Devis gratuit · Sans engagement · Réponse sous 24h</p>
        </div>
      </section>
    </>
  );
}
