import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guide Complet Fosse Septique 2025 — Entretien, Vidange, Réglementation — Vilbert Hydro Picardie",
  description:
    "Tout savoir sur la fosse septique en 2025 : fonctionnement, entretien, vidange obligatoire, réglementation SPANC, coûts, micro-station. Guide expert Vilbert Hydro.",
  alternates: { canonical: "https://vilbert-hydro.fr/guide-fosse-septique" },
};

export default function GuideFosseSeptiquePage() {
  const faqItems = [
    {
      q: "Quelle différence entre fosse septique et fosse toutes eaux ?",
      a: "La fosse septique stricte (avant 1992) ne reçoit que les eaux-vannes (WC). La fosse toutes eaux reçoit l'ensemble des eaux usées domestiques (WC, lavabos, cuisine, salle de bain). Depuis 1992, seule la fosse toutes eaux est autorisée pour les nouvelles installations.",
    },
    {
      q: "À quelle fréquence vidanger une fosse septique ?",
      a: "L'arrêté du 7 septembre 2009 impose une vidange au moins tous les 4 ans. Pour une famille nombreuse (5 personnes et plus), une fréquence de 2 à 3 ans est recommandée pour éviter la saturation et préserver l'épandage.",
    },
    {
      q: "Qu'est-ce que le BSMD ?",
      a: "Le Bordereau de Suivi des Matières de Vidange est un document officiel obligatoire remis par le vidangeur agréé. Il atteste que les matières ont été acheminées vers une filière de traitement conforme. Il doit être conservé et présenté au SPANC et lors d'une vente immobilière.",
    },
    {
      q: "Mon voisin peut-il se plaindre de ma fosse septique ?",
      a: "Oui. Si votre fosse génère des nuisances olfactives, des débordements ou des risques sanitaires, votre voisin peut saisir la mairie ou le SPANC. Celui-ci peut diligenter un contrôle et vous imposer des travaux de mise en conformité.",
    },
    {
      q: "Peut-on vendre sa maison sans vider la fosse ?",
      a: "Oui, la vidange n'est pas obligatoire avant la vente. En revanche, un diagnostic ANC (assainissement non collectif) de moins de 3 ans est obligatoire (article L.271-4 du CCH). En cas de non-conformité, l'acquéreur dispose d'un an pour réaliser les travaux.",
    },
    {
      q: "Quels sont les risques d'une fosse non-vidangée ?",
      a: "Une fosse saturée provoque des odeurs tenaces, des remontées d'effluents dans les canalisations ou dans le jardin, et la dégradation du système d'épandage. Des sanctions administratives (mise en demeure, amende jusqu'à 75 000 €) peuvent être prononcées par le SPANC.",
    },
    {
      q: "La fosse septique peut-elle polluer ma nappe phréatique ?",
      a: "Oui, si la fosse est mal entretenue, fissurée ou si l'épandage est saturé. Les effluents non traités s'infiltrent dans le sol et peuvent contaminer la nappe phréatique. Une vidange régulière et un contrôle de l'étanchéité préviennent ce risque.",
    },
    {
      q: "Qu'est-ce que l'assainissement non collectif (ANC) ?",
      a: "L'ANC désigne tout système individuel de traitement des eaux usées domestiques non raccordé au réseau d'égout public. Il comprend la fosse (toutes eaux ou septique), le prétraitement et le dispositif d'épandage ou de traitement (filtre compact, micro-station). Il est contrôlé par le SPANC de la commune.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://vilbert-hydro.fr" },
              { "@type": "ListItem", position: 2, name: "Guide Fosse Septique 2025", item: "https://vilbert-hydro.fr/guide-fosse-septique" },
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
            Guide expert 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Guide Complet Fosse Septique 2025
            <span className="block text-[#f5b800] mt-1">Tout ce que vous devez savoir</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Fonctionnement · Réglementation · Vidange · Coûts · Alternatives
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Guide rédigé par les experts de Vilbert Hydro, 30 ans d&apos;expérience en assainissement non collectif en Picardie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322917201"
              className="bg-[#f5b800] text-gray-900 font-black px-10 py-4 rounded text-xl hover:bg-[#ffd44d] transition-colors shadow-lg"
            >
              📞 03 22 91 72 01
            </a>
            <Link
              href="/vidange-fosse-septique"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded text-base hover:bg-white hover:text-[#1b4f8c] transition-colors"
            >
              Service vidange →
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* SECTION 1 — Qu'est-ce qu'une fosse septique */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Qu&apos;est-ce qu&apos;une fosse septique ?</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Une <strong>fosse septique</strong> est une cuve étanche enterrée qui reçoit les eaux usées domestiques et les traite par décantation et digestion anaérobique (sans oxygène). Elle constitue le premier maillon du système d&apos;assainissement non collectif (ANC), avant le dispositif d&apos;épandage.
            </p>
            <p>
              On distingue deux types principaux :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Fosse septique stricte</strong> (avant 1992) : ne reçoit que les eaux-vannes (eaux des WC). Les eaux ménagères (cuisine, salle de bain) doivent être traitées séparément.
              </li>
              <li>
                <strong>Fosse toutes eaux</strong> (norme depuis 1992) : reçoit l&apos;intégralité des eaux usées domestiques (WC + eaux ménagères). Obligatoire pour toute installation ou réhabilitation depuis cette date.
              </li>
            </ul>
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mt-4">
              <p className="font-black text-[#1b4f8c] mb-3">Fonctionnement schématique</p>
              <div className="flex flex-wrap items-center gap-2 text-sm text-gray-700 font-medium">
                <span className="bg-white border border-gray-200 px-3 py-2 rounded-lg">Alimentation eaux usées</span>
                <span className="text-[#1b4f8c]">→</span>
                <span className="bg-white border border-gray-200 px-3 py-2 rounded-lg">Compartiment 1 — Décantation</span>
                <span className="text-[#1b4f8c]">→</span>
                <span className="bg-white border border-gray-200 px-3 py-2 rounded-lg">Compartiment 2 — Digestion anaérobique</span>
                <span className="text-[#1b4f8c]">→</span>
                <span className="bg-white border border-gray-200 px-3 py-2 rounded-lg">Sortie vers épandage</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Durée de vie estimée :</strong> béton armé : 30–50 ans · PEHD (polyéthylène haute densité) : 30–50 ans · Polyester : 20–30 ans. Une fosse fissurée ou affaissée doit être remplacée sans délai pour éviter la pollution du sol.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Réglementation 2025 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Réglementation 2025</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                titre: "Arrêté du 7 septembre 2009",
                texte: "Texte de référence de l'ANC : obligation de vidange tous les 4 ans minimum, réalisée par un vidangeur agréé préfectoral. Le BSMD doit être remis à l'occupant.",
              },
              {
                titre: "Contrôle SPANC",
                texte: "Le Service Public d'Assainissement Non Collectif contrôle votre installation tous les 8 à 10 ans. Il vérifie le bon fonctionnement et la conformité. Des frais de contrôle (50–150 €) sont facturés.",
              },
              {
                titre: "Vente immobilière",
                texte: "L'article L.271-4 du Code de la Construction oblige le vendeur à annexer un diagnostic ANC de moins de 3 ans au compromis de vente. En cas de non-conformité, l'acquéreur a 1 an pour réaliser les travaux.",
              },
              {
                titre: "Sanctions non-conformité",
                texte: "En cas de non-conformité grave (risque sanitaire, pollution), le SPANC adresse une mise en demeure. Si les travaux ne sont pas réalisés dans le délai imparti (1 an), une amende jusqu'à 75 000 € peut être prononcée.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-black text-[#1b4f8c] mb-2 text-sm md:text-base">{item.titre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Dimensionnement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Volumes et dimensionnement</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <p className="text-gray-600 mb-6">Le volume de la fosse est fixé selon la surface habitable et le nombre d&apos;occupants. Un sous-dimensionnement accélère la saturation et contraint à des vidanges plus fréquentes.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1b4f8c] text-white">
                  <th className="px-4 py-3 text-left font-black">Surface habitable</th>
                  <th className="px-4 py-3 text-left font-black">Nb de pièces</th>
                  <th className="px-4 py-3 text-left font-black">Nb d&apos;occupants</th>
                  <th className="px-4 py-3 text-left font-black">Volume fosse recommandé</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Jusqu&apos;à 100 m²", "1 à 4 pièces", "1 à 4 personnes", "3 000 litres"],
                  ["100 – 150 m²", "4 à 6 pièces", "4 à 6 personnes", "4 000 litres"],
                  ["150 – 200 m²", "6 à 8 pièces", "5 à 8 personnes", "5 000 litres"],
                  ["+ 200 m²", "+ 8 pièces", "+ 8 personnes", "6 000 litres ou plus"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-3 text-gray-700 border-b border-gray-100" dangerouslySetInnerHTML={{ __html: cell }} />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Entretien et vidange */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Entretien et vidange de la fosse septique</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-black text-[#f5b800] mb-3 text-lg">Fréquence et bonnes pratiques</h3>
              <ul className="space-y-2 text-blue-100 text-sm leading-relaxed">
                <li className="flex gap-2"><span className="text-[#f5b800] font-black mt-0.5">✓</span> Vidange tous les 4 ans minimum (légal) — 2 à 3 ans pour familles nombreuses</li>
                <li className="flex gap-2"><span className="text-[#f5b800] font-black mt-0.5">✓</span> BSMD remis après chaque vidange — à conserver impérativement</li>
                <li className="flex gap-2"><span className="text-[#f5b800] font-black mt-0.5">✓</span> Ne jamais utiliser de produits antibactériens dans les toilettes (tuent les bactéries de digestion)</li>
                <li className="flex gap-2"><span className="text-[#f5b800] font-black mt-0.5">✓</span> Inspecter visuellement la zone d&apos;épandage 1 à 2 fois par an</li>
              </ul>
              <h3 className="font-black text-[#f5b800] mb-3 text-lg mt-6">Signes d&apos;alerte</h3>
              <ul className="space-y-2 text-blue-100 text-sm leading-relaxed">
                <li className="flex gap-2"><span className="text-red-400 font-black mt-0.5">!</span> Odeurs persistantes autour de la fosse ou dans la maison</li>
                <li className="flex gap-2"><span className="text-red-400 font-black mt-0.5">!</span> Remontées d&apos;effluents dans les canalisations ou à la surface</li>
                <li className="flex gap-2"><span className="text-red-400 font-black mt-0.5">!</span> Ralentissement important de l&apos;évacuation</li>
                <li className="flex gap-2"><span className="text-red-400 font-black mt-0.5">!</span> Décoloration ou taches verdâtres inhabituelles sur le gazon au-dessus de l&apos;épandage</li>
              </ul>
            </div>
            <div>
              <h3 className="font-black text-[#f5b800] mb-3 text-lg">Ce qu&apos;il ne faut JAMAIS jeter</h3>
              <div className="space-y-2">
                {[
                  ["Lingettes humides", "Même « biodégradables », elles obstruent les canalisations et perturbent la fosse"],
                  ["Huiles de cuisson", "Forment une pellicule imperméable qui bloque la digestion anaérobique"],
                  ["Médicaments", "Détruisent la flore bactérienne indispensable au fonctionnement de la fosse"],
                  ["Produits chimiques", "Eau de Javel, acide, déboucheurs chimiques — détruisent les bactéries de digestion"],
                  ["Déchets solides", "Coton-tiges, préservatifs, protections hygiéniques — causent des obstructions graves"],
                ].map(([item, detail]) => (
                  <div key={item} className="bg-white/10 rounded-lg px-4 py-3">
                    <p className="font-black text-sm text-red-300">{item}</p>
                    <p className="text-blue-200 text-xs mt-0.5">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Alternatives */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Alternatives à la fosse septique</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <p className="text-gray-600 mb-6">Selon la nature du sol, la surface disponible et les contraintes réglementaires, plusieurs systèmes ANC sont possibles :</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1b4f8c] text-white">
                  <th className="px-3 py-3 text-left font-black">Système</th>
                  <th className="px-3 py-3 text-left font-black">Coût installation</th>
                  <th className="px-3 py-3 text-left font-black">Entretien / an</th>
                  <th className="px-3 py-3 text-left font-black">Électricité</th>
                  <th className="px-3 py-3 text-left font-black">Contraintes terrain</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Fosse toutes eaux + épandage", "3 000 – 8 000 €", "Vidange 280–450 €/4 ans", "Aucune", "Surface > 200 m², sol perméable"],
                  ["Micro-station d'épuration", "4 000 – 10 000 €", "300 – 600 €/an", "Oui (100–200 kWh/an)", "Faible emprise, sols argileux OK"],
                  ["Filtre compact", "2 500 – 6 000 €", "Vidange 280–450 €/4 ans", "Aucune", "Surface réduite, sols peu perméables"],
                  ["Tertre filtrant", "5 000 – 12 000 €", "Vidange 280–450 €/4 ans", "Pompe de relevage", "Sol imperméable, nappe haute"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    {row.map((cell, j) => (
                      <td key={j} className={`px-3 py-3 border-b border-gray-100 ${j === 0 ? "font-black text-[#1b4f8c]" : "text-gray-700"}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Coûts 2025 */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Coûts 2025 en Picardie</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Vidange fosse 3 000 L", prix: "280 – 380 €" },
              { label: "Vidange fosse 5 000 L", prix: "350 – 450 €" },
              { label: "Installation filtre compact", prix: "2 500 – 6 000 €" },
              { label: "Installation micro-station", prix: "4 000 – 10 000 €" },
              { label: "Réhabilitation fosse non-conforme", prix: "2 000 – 5 000 €" },
              { label: "Diagnostic ANC (SPANC)", prix: "50 – 150 €" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center bg-gray-50 rounded-xl px-5 py-4 border border-gray-100">
                <span className="text-gray-700 text-sm font-medium">{item.label}</span>
                <span className="font-black text-[#1b4f8c] text-sm whitespace-nowrap ml-4">{item.prix}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">Tarifs indicatifs TTC, déplacement inclus. Devis gratuit et personnalisé sur demande.</p>
          <div className="mt-6">
            <Link
              href="/tarifs-assainissement-picardie"
              className="inline-block bg-[#1b4f8c] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#163f70] transition-colors text-sm"
            >
              Voir la grille tarifaire complète →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Fosse septique</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
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

      {/* CTA */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Besoin de vider votre fosse septique ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Vilbert Hydro — agréé vidangeur préfectoral en Picardie depuis 30 ans
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg mb-4"
          >
            📞 03 22 91 72 01
          </a>
          <p className="text-gray-600 text-sm">Devis gratuit · BSMD systématique · Intervention rapide</p>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4">Pages utiles</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Vidange fosse septique", href: "/vidange-fosse-septique" },
              { label: "Inspection télévisée", href: "/inspection-televisee" },
              { label: "Tarifs assainissement", href: "/tarifs-assainissement-picardie" },
              { label: "Guide assainissement Picardie", href: "/guide-assainissement-picardie" },
              { label: "FAQ", href: "/faq" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-xs text-[#1b4f8c] hover:underline border border-[#1b4f8c]/20 px-3 py-1.5 rounded-full">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
