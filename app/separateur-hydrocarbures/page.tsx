import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entretien Séparateur Hydrocarbures & Bac Dégraisseur Picardie — Obligation Légale — Vilbert Hydro",
  description:
    "Vilbert Hydro : entretien réglementaire séparateurs hydrocarbures et bacs dégraisseurs en Picardie. Vidange, nettoyage, rapport de conformité. Somme (80). 03 22 91 72 01.",
  alternates: { canonical: "https://vilbert-hydro.fr/separateur-hydrocarbures" },
};

export default function SeparateurHydrocarbures() {
  const faqItems = [
    {
      q: "Quelle fréquence d'entretien pour un séparateur hydrocarbures ?",
      a: "La norme EN 858-1 et l'arrêté du 2 février 1998 imposent un entretien de 1 à 4 fois par an selon le débit nominal de l'installation. En pratique, la plupart des garages et stations-service sont soumis à 2 entretiens annuels minimum.",
    },
    {
      q: "Qui est concerné par l'obligation d'entretien ?",
      a: "Toute installation classée ICPE disposant d'un séparateur hydrocarbures : garages automobiles, stations-service, parkings couverts, entrepôts de véhicules, centres de lavage, zones industrielles avec rejets d'eaux pluviales contaminées.",
    },
    {
      q: "Quelle différence entre séparateur hydrocarbures et bac à graisses ?",
      a: "Le séparateur hydrocarbures (norme EN 858) retient les huiles minérales, carburants et produits pétroliers. Le bac à graisses (ou dégraisseur) est conçu pour les graisses et huiles alimentaires dans les restaurants et cuisines professionnelles. Deux dispositifs différents pour deux types de pollution distincts.",
    },
    {
      q: "Que contient le rapport de visite ?",
      a: "Le rapport de visite comprend : le relevé des niveaux d'hydrocarbures et de boues, le constat de l'état du dispositif (obturateur, flotteur, alarme), les recommandations de maintenance, et la conformité à la norme EN 858-1. Ce document doit être conservé 5 ans.",
    },
    {
      q: "TrackDéchets est-il utilisé pour les séparateurs ?",
      a: "Oui. Les hydrocarbures pompés dans les séparateurs sont des déchets dangereux tracés sur la plateforme TrackDéchets. Nous vous remettons le bordereau de suivi numérique lors de chaque intervention.",
    },
  ];

  return (
    <>
      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://vilbert-hydro.fr" },
              { "@type": "ListItem", position: 2, name: "Séparateur Hydrocarbures", item: "https://vilbert-hydro.fr/separateur-hydrocarbures" },
            ],
          }),
        }}
      />

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
            Entretien réglementaire · Rapport de conformité
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Entretien Séparateur Hydrocarbures
            <span className="block text-[#f5b800] mt-1">et Bac Dégraisseur en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Vidange, nettoyage, vérification, rapport de conformité — obligation réglementaire satisfaite
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention en Picardie : Somme (80), Oise (60), Aisne (02).
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322917201"
              className="bg-[#f5b800] text-gray-900 font-black px-10 py-4 rounded text-xl hover:bg-[#ffd44d] transition-colors shadow-lg"
            >
              📞 03 22 91 72 01
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded text-base hover:bg-white hover:text-[#1b4f8c] transition-colors"
            >
              Devis gratuit
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* QU'EST-CE QU'UN SÉPARATEUR */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Qu&apos;est-ce qu&apos;un séparateur hydrocarbures ?</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Un séparateur hydrocarbures est un dispositif de prétraitement des eaux pluviales et de ruissellement. Son rôle est de <strong>retenir les hydrocarbures</strong> (huiles, carburants, lubrifiants) par décantation et flottation avant tout rejet dans le réseau d&apos;eaux pluviales ou dans le milieu naturel.
            </p>
            <p>
              Il est obligatoire partout où des hydrocarbures peuvent contaminer les eaux de ruissellement : <strong>garages, stations-service, parkings couverts, entrepôts, laveries automobiles, zones industrielles</strong>. Il est dimensionné et installé selon la <strong>norme EN 858-1</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* OBLIGATION LÉGALE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Obligation légale d&apos;entretien</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="bg-[#1b4f8c] text-white rounded-2xl p-6 mb-6">
            <p className="text-blue-100 text-sm leading-relaxed">
              L&apos;<strong className="text-white">arrêté du 2 février 1998</strong> relatif aux ICPE impose l&apos;entretien régulier des séparateurs hydrocarbures. La fréquence est de <strong className="text-[#f5b800]">1 à 4 fois par an</strong> selon le débit nominal de l&apos;installation. Le rapport d&apos;entretien doit être <strong className="text-white">conservé 5 ans</strong> et présenté en cas de contrôle.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji: "📅", label: "1 à 4 fois/an", desc: "Fréquence obligatoire selon débit et norme EN 858-1" },
              { emoji: "📋", label: "5 ans d'archives", desc: "Rapports d'intervention à conserver pour contrôle DREAL" },
              { emoji: "✅", label: "Rapport de conformité", desc: "Document officiel remis après chaque entretien" },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl border border-gray-100 p-5 text-center">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <p className="font-black text-[#1b4f8c] text-sm mb-1">{item.label}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTRE PRESTATION */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3">Notre prestation d&apos;entretien</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { emoji: "🛢️", titre: "Pompage hydrocarbures flottants", desc: "Aspiration de la couche d'hydrocarbures en surface du séparateur." },
              { emoji: "🧹", titre: "Curage fond (boues)", desc: "Vidange et évacuation des boues et matières décantées au fond de la cuve." },
              { emoji: "🚿", titre: "Nettoyage de la cuve", desc: "Rinçage haute pression de l'intégralité du volume de l'installation." },
              { emoji: "🔧", titre: "Vérification obturateur", desc: "Contrôle du clapet d'obturation automatique, flotteur et alarme de niveau." },
              { emoji: "📄", titre: "Rapport de visite", desc: "Document de conformité norme EN 858-1 remis à l'issue de l'intervention." },
              { emoji: "💻", titre: "TrackDéchets", desc: "Traçabilité numérique des hydrocarbures et boues pompés vers filières agréées." },
            ].map((item) => (
              <div key={item.titre} className="bg-white/10 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-black text-[#f5b800] mb-1 text-sm">{item.titre}</h3>
                    <p className="text-blue-100 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAC DÉGRAISSEUR */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Bac dégraisseur / bac à graisses</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <p className="text-gray-700 leading-relaxed mb-4">
            La même logique réglementaire s&apos;applique aux <strong>bacs à graisses</strong> des établissements de restauration, cantines, hôtels et traiteurs. Ces dispositifs retiennent les graisses et huiles alimentaires avant rejet dans les réseaux d&apos;assainissement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji: "🍽️", label: "Restaurants & cantines" },
              { emoji: "🏨", label: "Hôtels & traiteurs" },
              { emoji: "🏫", label: "Cuisines collectives" },
            ].map((t) => (
              <div key={t.label} className="bg-white rounded-xl border border-gray-100 p-5 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-2">{t.emoji}</div>
                <p className="font-black text-[#1b4f8c] text-sm">{t.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Fréquence recommandée : <strong>tous les 3 à 6 mois</strong> selon le volume de l&apos;installation et l&apos;activité de l&apos;établissement.
          </p>
        </div>
      </section>

      {/* CONSÉQUENCES NON-RESPECT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Conséquences du non-respect</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { emoji: "📮", titre: "Mise en demeure DREAL", desc: "Injonction administrative de mise en conformité immédiate." },
              { emoji: "💰", titre: "Amende jusqu'à 75 000 €", desc: "Sanction pénale pour non-respect de la réglementation ICPE." },
              { emoji: "🏗️", titre: "Blocage permis de construire", desc: "Les dossiers de permis peuvent être bloqués en cas de non-conformité environnementale." },
              { emoji: "🚫", titre: "Fermeture administrative", desc: "Pour les restaurants : fermeture administrative possible par les services d'hygiène." },
            ].map((item) => (
              <div key={item.titre} className="flex gap-4 bg-red-50 rounded-xl border border-red-100 p-5">
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <h3 className="font-black text-red-700 mb-1 text-sm">{item.titre}</h3>
                  <p className="text-red-600 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Tarifs indicatifs</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-500 text-sm">Devis gratuit et sans engagement avant toute intervention.</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#1b4f8c] text-white">
                <tr>
                  <th className="text-left p-4 font-black">Prestation</th>
                  <th className="text-right p-4 font-black">Fourchette de prix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { prestation: "Entretien séparateur standard (+ rapport)", prix: "250 – 450 €" },
                  { prestation: "Entretien séparateur grande capacité (+ rapport)", prix: "450 – 600 €" },
                  { prestation: "Entretien bac à graisses restaurant", prix: "200 – 400 €" },
                  { prestation: "Contrat entretien annuel (2 passages)", prix: "Sur devis" },
                ].map((row, i) => (
                  <tr key={row.prestation} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-gray-700">{row.prestation}</td>
                    <td className="p-4 text-right font-bold text-[#1b4f8c]">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Tarifs HT. Rapport de conformité inclus. Déplacement selon zone.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Séparateur hydrocarbures</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-black text-[#1b4f8c] mb-3 text-sm md:text-base">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Entretien de séparateur hydrocarbures en Picardie ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Rapport de conformité — TrackDéchets — Obligation réglementaire satisfaite
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg mb-4"
          >
            📞 03 22 91 72 01
          </a>
          <p className="text-gray-600 text-sm">Somme · Oise · Aisne · Picardie</p>
        </div>
      </section>

      {/* LIENS INTERNES */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4">
            Nos autres services
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Dégazage cuve à fioul", href: "/degazage-cuve-fioul" },
              { label: "Assainissement restaurant", href: "/assainissement-restaurant" },
              { label: "Hydrocurage haute pression", href: "/hydrocurage-haute-pression" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-[#1b4f8c] hover:underline border border-[#1b4f8c]/20 px-3 py-1.5 rounded-full"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
