import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Balayage Voirie & Chantiers Picardie — Camion Balayeur Aspirateur — Vilbert Hydro 03 22 91 72 01",
  description:
    "Vilbert Hydro : balayage, nettoyage et aspiration de voiries, routes, chantiers et plateformes en Picardie. Camion balayeur-aspirateur. Somme (80), Oise (60), Aisne (02).",
  alternates: { canonical: "https://vilbert-hydro.fr/balayage-voirie" },
};

export default function BalayageVoirie() {
  const faqItems = [
    {
      q: "Quelle différence entre balayage et nettoyage haute pression ?",
      a: "Le balayage est une opération sèche : les déchets solides et les poussières sont balayés mécaniquement et aspirés. Le nettoyage haute pression utilise de l'eau sous pression pour décoller et éliminer les salissures incrustées. Les deux techniques sont complémentaires et souvent combinées sur les chantiers.",
    },
    {
      q: "Intervenez-vous en dehors des heures ouvrées ?",
      a: "Oui. Pour les voiries en activité, les zones commerciales ou les chantiers en milieu urbain, nous pouvons intervenir tôt le matin ou en soirée afin de ne pas gêner la circulation et les activités du site.",
    },
    {
      q: "Balayage après chantier BTP : quelles traces élimine-t-on ?",
      a: "Notre camion balayeur-aspirateur élimine les poussières de béton et de meulage, les sables et gravats fins, le ciment séché en surface, les éclats de matériaux, et les peintures au sol détachées. Le résultat est immédiat et conforme aux exigences de réception de chantier.",
    },
    {
      q: "Gérez-vous les déchets collectés ?",
      a: "Oui. Les déchets collectés sont triés et acheminés vers des filières agréées. Lorsque les déchets présentent un classement particulier (hydrocarbures, matériaux spéciaux), TrackDéchets est utilisé pour assurer la traçabilité.",
    },
    {
      q: "Pouvez-vous cumuler balayage et nettoyage haute pression le même jour ?",
      a: "Oui, cette combinaison est très fréquente sur les chantiers. Le balayage-aspiration élimine d'abord les déchets solides, puis le nettoyage haute pression traite les taches et les salissures incrustées. Les deux opérations peuvent être réalisées en une seule journée d'intervention.",
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
              { "@type": "ListItem", position: 2, name: "Balayage Voirie", item: "https://vilbert-hydro.fr/balayage-voirie" },
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
            Camion balayeur-aspirateur · Résultat impeccable
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Balayage de Voiries, Routes
            <span className="block text-[#f5b800] mt-1">et Chantiers en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Balayage mécanique + aspiration simultanée + nettoyage par eau — aucun résidu dans l&apos;atmosphère
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

      {/* NOTRE CAMION BALAYEUR */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Notre camion balayeur-aspirateur</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Notre camion balayeur combine trois actions simultanées : <strong>balayage mécanique</strong> par brosses rotatives, <strong>aspiration haute puissance</strong> des débris et poussières, et <strong>nettoyage par eau</strong> pour les salissures adhérentes. Le résultat : la surface est balayée, nettoyée ET aspirée en une seule passe.
            </p>
            <p>
              Contrairement au balayage manuel ou à la souffleuse, <strong>aucun résidu n&apos;est rejeté dans l&apos;atmosphère</strong>. Idéal pour les environnements sensibles : chantiers proches d&apos;habitations, zones commerciales en activité, abords d&apos;hôpitaux ou d&apos;établissements scolaires.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji: "🔄", label: "Balayage mécanique", desc: "Brosses rotatives pour décoller et rassembler les déchets" },
              { emoji: "💨", label: "Aspiration simultanée", desc: "Tous les débris aspirés — zéro rejet atmosphérique" },
              { emoji: "💧", label: "Nettoyage par eau", desc: "Rinçage intégré pour les salissures tenaces" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-gray-100 p-5 text-center">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <p className="font-black text-[#1b4f8c] text-sm mb-1">{item.label}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOMAINES D'INTERVENTION */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Domaines d&apos;intervention</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                emoji: "🛣️",
                titre: "Routes et voiries communales",
                desc: "Remise en état après travaux de voirie, entretien régulier des routes et trottoirs pour les collectivités.",
              },
              {
                emoji: "🏗️",
                titre: "Chantiers BTP",
                desc: "Nettoyage avant réception, élimination de gravats fins, sables, ciment séché et poussières de chantier.",
              },
              {
                emoji: "🏭",
                titre: "Plateformes industrielles et logistiques",
                desc: "Poussières, granulats, déchets d'exploitation. Entretien régulier des zones de circulation interne.",
              },
              {
                emoji: "🚗",
                titre: "Parkings extérieurs",
                desc: "Sables, feuilles, gravier, déjections d'oiseaux, déchets divers. Entretien ponctuel ou contractuel.",
              },
              {
                emoji: "🌾",
                titre: "Cours agricoles et silos",
                desc: "Résidus de récolte, grains épars, paille, poussières. Nettoyage après campagne agricole.",
              },
              {
                emoji: "🏢",
                titre: "Zones commerciales et ZA",
                desc: "Entretien régulier de l'image de marque. Contrats de maintenance adaptés à vos horaires d'activité.",
              },
            ].map((c) => (
              <div key={c.titre} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{c.emoji}</div>
                <h3 className="font-black text-[#1b4f8c] text-sm mb-2">{c.titre}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BALAYAGE VS MANUEL */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3">Balayage mécanique vs manuel</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/20">
            <table className="w-full text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="text-left p-4 font-black">Critère</th>
                  <th className="text-center p-4 font-black">Manuel</th>
                  <th className="text-center p-4 font-black text-[#f5b800]">Camion balayeur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  { critere: "Efficacité surface", manuel: "⚠️ lente", meca: "✅ rapide" },
                  { critere: "Aspiration poussières", manuel: "❌", meca: "✅" },
                  { critere: "Grandes surfaces", manuel: "❌", meca: "✅" },
                  { critere: "Qualité air préservée", manuel: "❌", meca: "✅" },
                  { critere: "Coût global", manuel: "💲💲 élevé", meca: "💲 compétitif" },
                ].map((row, i) => (
                  <tr key={row.critere} className={i % 2 === 0 ? "bg-white/5" : ""}>
                    <td className="p-4 text-blue-100">{row.critere}</td>
                    <td className="p-4 text-center">{row.manuel}</td>
                    <td className="p-4 text-center font-bold text-[#f5b800]">{row.meca}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FRÉQUENCES ET CONTRATS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Fréquences et contrats d&apos;entretien</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji: "🗓️", label: "Intervention ponctuelle", desc: "Après chantier, événement ou besoin spécifique. Délai rapide." },
              { emoji: "📆", label: "Contrat mensuel", desc: "Zones commerciales, parkings : entretien régulier et planifié." },
              { emoji: "🔄", label: "Contrat trimestriel", desc: "Voiries communales, plateformes industrielles : maintenance saisonnière." },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-gray-100 p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <p className="font-black text-[#1b4f8c] text-sm mb-1">{item.label}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENVIRONNEMENT */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Notre engagement environnemental</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="space-y-3">
            {[
              { emoji: "🌬️", desc: "Poussières 100% aspirées — aucun rejet de particules fines dans l'atmosphère." },
              { emoji: "♻️", desc: "Déchets collectés triés et acheminés vers des filières de traitement agréées." },
              { emoji: "💻", desc: "TrackDéchets utilisé pour les déchets classifiés — traçabilité numérique garantie." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-gray-50 rounded-xl border border-gray-100 p-4">
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
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
            <p className="text-gray-500 text-sm">Devis gratuit et sans engagement. Tarif à la journée, demi-journée ou au linéaire.</p>
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
                  { prestation: "Forfait demi-journée (camion + opérateur)", prix: "500 – 800 €" },
                  { prestation: "Forfait journée complète", prix: "900 – 1 400 €" },
                  { prestation: "Au linéaire voirie (ml)", prix: "Sur devis" },
                  { prestation: "Contrat d'entretien régulier", prix: "Sur devis" },
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
            Tarifs HT. Déplacement selon zone. Devis définitif fourni après description du chantier.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Balayage voirie et chantiers</h2>
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
            Balayage de voirie ou chantier en Picardie ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Devis gratuit — Intervention rapide — Déchets tracés
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
              { label: "Nettoyage haute pression sol", href: "/nettoyage-haute-pression-sol" },
              { label: "Hydrocurage haute pression", href: "/hydrocurage-haute-pression" },
              { label: "Contact", href: "/contact" },
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
