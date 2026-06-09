import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Débouchage & Assainissement Somme — 03 22 91 72 01",
  description:
    "Contactez Vilbert Hydro pour toute demande de débouchage, curage, vidange fosse septique ou maintenance poste de relevage. Urgences 24h/24 7j/7 au 03 22 91 72 01. hydro@groupe-vilbert.fr",
  alternates: { canonical: "https://vilbert-hydro.vercel.app/contact" },
};

const zonesSomme = [
  "Amiens (80000)", "Abbeville (80100)", "Péronne (80200)", "Albert (80300)",
  "Montdidier (80500)", "Doullens (80600)", "Corbie", "Breteuil",
  "Ham", "Roye", "Nesle", "Moreuil",
];

const autresZones = [
  "Arras (62)", "Lens (62)", "Saint-Quentin (02)", "Compiègne (60)",
  "Beauvais (60)", "Noyon (60)", "Soissons (02)", "Laon (02)",
  "Douai (59)", "Valenciennes (59)",
];

const certifications = [
  {
    icon: "📋",
    titre: "Agrément vidangeur",
    desc: "Agrément préfectoral pour la collecte, le transport et le traitement des matières de vidange (arrêté du 7 septembre 2009). Bordereau de suivi fourni à chaque intervention.",
  },
  {
    icon: "🦺",
    titre: "Agents habilités CATEC",
    desc: "Certificat d'Aptitude aux Travaux en Espaces Confinés. Nos techniciens sont formés et habilités pour les interventions dans les regards, fosses, réseaux et cuves.",
  },
  {
    icon: "⚠️",
    titre: "Habilitation N1 & N2",
    desc: "Habilitations N1 (opérateur) et N2 (surveillant) pour les travaux en espaces confinés. Conformité totale avec la réglementation en vigueur.",
  },
  {
    icon: "⚡",
    titre: "Habilitation électrique",
    desc: "Personnel habilité pour les interventions électromécaniques : maintenance de pompes, armoires de commande et postes de relevage.",
  },
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://vilbert-hydro.vercel.app" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://vilbert-hydro.vercel.app/contact" }
        ]
      }) }} />
      {/* HERO URGENCE */}
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-black text-lg md:text-2xl tracking-wide">
            🚨 URGENCES 24h/24 — 7j/7 — Week-ends et jours fériés inclus
          </p>
        </div>
      </section>

      <section className="bg-[#1b4f8c] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contactez Vilbert Hydro</h1>
          <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-6" />
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Appelez-nous directement ou écrivez-nous — nos équipes sont disponibles <strong>24h/24 et 7j/7</strong>.
          </p>
        </div>
      </section>

      {/* CONTACT PRINCIPAL */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* TÉLÉPHONE */}
            <a
              href="tel:0322917201"
              className="group bg-[#1b4f8c] rounded-2xl p-8 text-white text-center hover:bg-[#0f2942] transition-colors shadow-lg"
            >
              <div className="text-5xl mb-4">📞</div>
              <p className="text-blue-200 text-sm uppercase tracking-widest mb-2">Appelez-nous directement</p>
              <p className="text-4xl font-black text-white group-hover:text-[#f5b800] transition-colors">
                03 22 91 72 01
              </p>
              <div className="mt-4 border-t border-blue-700 pt-4">
                <p className="text-[#f5b800] font-bold text-lg">🚨 Urgences 24h/24 · 7j/7</p>
                <p className="text-blue-300 text-sm mt-1">Réponse immédiate — même le week-end</p>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:hydro@groupe-vilbert.fr"
              className="group bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-200 shadow"
            >
              <div className="text-5xl mb-4">✉️</div>
              <p className="text-gray-500 text-sm uppercase tracking-widest mb-2">Écrivez-nous</p>
              <p className="text-xl font-black text-[#1b4f8c] group-hover:underline break-all">
                hydro@groupe-vilbert.fr
              </p>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="text-gray-600 text-sm">Devis, contrats de maintenance, questions</p>
                <p className="text-gray-500 text-xs mt-1">Réponse sous 24h ouvrées</p>
              </div>
            </a>
          </div>

          {/* INFORMATIONS COMPLÉMENTAIRES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-black text-[#1b4f8c] mb-3 text-lg">🕐 Disponibilité</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="text-green-500 font-black">✓</span> Lundi – Vendredi : 24h/24</li>
                <li className="flex items-center gap-2"><span className="text-green-500 font-black">✓</span> Samedi : 24h/24</li>
                <li className="flex items-center gap-2"><span className="text-green-500 font-black">✓</span> Dimanche : 24h/24</li>
                <li className="flex items-center gap-2"><span className="text-green-500 font-black">✓</span> Jours fériés : 24h/24</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-black text-[#1b4f8c] mb-3 text-lg">💶 Tarification</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="text-[#f5b800] font-black">★</span> Devis gratuit et sans engagement</li>
                <li className="flex items-center gap-2"><span className="text-[#f5b800] font-black">★</span> Tarif fixé avant intervention</li>
                <li className="flex items-center gap-2"><span className="text-[#f5b800] font-black">★</span> Pas de supplément week-end</li>
                <li className="flex items-center gap-2"><span className="text-[#f5b800] font-black">★</span> Rapport d&apos;intervention fourni</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-black text-[#1b4f8c] mb-3 text-lg">👥 Nous intervenons pour</h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li>🏘️ Particuliers</li>
                <li>🏢 Syndicats de copropriété</li>
                <li>🍽️ Restaurants &amp; métiers de bouche</li>
                <li>🌾 Agriculteurs</li>
                <li>🏭 Industries &amp; sites industriels</li>
                <li>🏛️ Collectivités &amp; mairies</li>
              </ul>
            </div>
          </div>

          {/* ZONES D'INTERVENTION */}
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm mb-8">
            <h2 className="text-2xl font-black text-[#1b4f8c] mb-2">Zone d&apos;intervention</h2>
            <div className="w-12 h-1 bg-[#f5b800] mb-5" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-[#1b4f8c] text-white text-xs font-bold px-2 py-0.5 rounded">PRIORITAIRE</span>
                  Somme (80)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {zonesSomme.map((v) => (
                    <span key={v} className="bg-blue-50 text-[#1b4f8c] border border-blue-200 text-xs px-3 py-1.5 rounded-full font-medium">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Autres départements</h3>
                <div className="flex flex-wrap gap-2">
                  {autresZones.map((v) => (
                    <span key={v} className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
                      {v}
                    </span>
                  ))}
                  <span className="text-xs text-gray-400 self-center italic">+ toute la région</span>
                </div>
              </div>
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="bg-[#1b4f8c] rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-black mb-2">Nos certifications & habilitations</h2>
            <div className="w-12 h-1 bg-[#f5b800] mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {certifications.map((c) => (
                <div key={c.titre} className="bg-white/10 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <h3 className="font-black text-[#f5b800] mb-1 text-sm">{c.titre}</h3>
                      <p className="text-blue-100 text-xs leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#f5b800] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">
            Une urgence ? N&apos;attendez pas.
          </h2>
          <p className="text-gray-700 mb-6">
            Nos techniciens interviennent en Picardie (Somme, Oise, Aisne) et dans toute la région 24h sur 24.
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg"
          >
            📞 03 22 91 72 01
          </a>
          <p className="text-gray-600 text-sm mt-3">Ou écrivez-nous : hydro@groupe-vilbert.fr</p>
        </div>
      </section>

      {/* LIENS VILLES */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-5">
            Débouchage et assainissement — Villes desservies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Débouchage Amiens", slug: "amiens" },
              { label: "Débouchage Abbeville", slug: "abbeville" },
              { label: "Débouchage Péronne", slug: "peronne" },
              { label: "Débouchage Albert", slug: "albert" },
              { label: "Débouchage Montdidier", slug: "montdidier" },
              { label: "Débouchage Doullens", slug: "doullens" },
              { label: "Débouchage Arras", slug: "arras" },
              { label: "Débouchage Lens", slug: "lens" },
            ].map((v) => (
              <Link
                key={v.slug}
                href={`/debouchage-${v.slug}`}
                className="text-xs text-[#1b4f8c] hover:underline border border-[#1b4f8c]/20 px-3 py-1.5 rounded-full"
              >
                {v.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
