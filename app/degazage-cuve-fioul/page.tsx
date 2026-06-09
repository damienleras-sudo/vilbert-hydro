import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dégazage & Démantèlement Cuve Fioul Picardie — Agrément ADR · Habilitation — Vilbert Hydro 03 22 91 72 01",
  description:
    "Vilbert Hydro : dégazage, nettoyage, pompage et démantèlement de cuves à fioul hors service en Picardie. Agrément ADR, agents habilités, TrackDéchets. Somme (80), Oise (60), Aisne (02).",
  alternates: { canonical: "https://vilbert-hydro.fr/degazage-cuve-fioul" },
};

export default function DegazageCuveFioul() {
  const faqItems = [
    {
      q: "Est-il obligatoire de dégazer une cuve à fioul hors service ?",
      a: "Oui. L'arrêté du 1er juillet 2004 relatif aux réservoirs de liquides inflammables impose la neutralisation de toute cuve mise hors service : pompage des résidus, inertage (remplissage sable ou eau) ou démantèlement. Le non-respect engage la responsabilité du propriétaire.",
    },
    {
      q: "Qu'est-ce que l'agrément ADR ?",
      a: "L'agrément ADR (Accord européen relatif au transport international des marchandises Dangereuses par Route, directive 94/55/CE) autorise le transport de matières dangereuses, dont les hydrocarbures résiduels issus du pompage des cuves. Vilbert Hydro dispose de cet agrément.",
    },
    {
      q: "Faut-il déclarer les travaux en mairie ?",
      a: "Cela dépend de la profondeur de la cuve et de la nature des travaux. Pour une cuve enterrée de grande capacité, une déclaration préalable peut être nécessaire. Nous vous guidons dans les démarches administratives.",
    },
    {
      q: "Cuve enterrée : peut-on la laisser en place ?",
      a: "Oui, à condition qu'elle soit inertée (remplie de sable ou d'eau propre après dégazage complet). Une attestation de neutralisation doit être établie et conservée pour l'assurance et les éventuelles transactions immobilières.",
    },
    {
      q: "TrackDéchets : qu'est-ce que c'est ?",
      a: "TrackDéchets est la plateforme numérique nationale rendue obligatoire par la loi AGEC (2021) pour la traçabilité des déchets dangereux. Elle remplace les bordereaux papier et garantit une traçabilité de bout en bout depuis la collecte jusqu'au traitement final.",
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
              { "@type": "ListItem", position: 2, name: "Dégazage Cuve Fioul", item: "https://vilbert-hydro.fr/degazage-cuve-fioul" },
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
            Agrément ADR · Agents habilités · TrackDéchets
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Dégazage et Démantèlement de
            <span className="block text-[#f5b800] mt-1">Cuves à Fioul en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Pompage, nettoyage, neutralisation et évacuation — cuves domestiques, agricoles et industrielles
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

      {/* POURQUOI DÉGAZER */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Pourquoi dégazer une cuve hors service ?</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Toute cuve à fioul mise hors service est soumise à l&apos;<strong>arrêté du 1er juillet 2004</strong> et au code de l&apos;environnement. Le propriétaire a l&apos;obligation de procéder à sa neutralisation, qu&apos;il s&apos;agisse d&apos;une cuve enterrée ou aérienne.
            </p>
            <p>
              Une cuve abandonnée sans neutralisation présente des risques majeurs : <strong>explosion des vapeurs résiduelles</strong> (les vapeurs d&apos;hydrocarbures sont plus dangereuses que le fioul liquide), <strong>pollution des sols et des nappes phréatiques</strong> en cas de fuite, et <strong>responsabilité civile et pénale du propriétaire</strong> engagée en cas d&apos;incident.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { emoji: "💥", label: "Risque explosion", desc: "Vapeurs résiduelles inflammables même dans une cuve « vide »" },
              { emoji: "☠️", label: "Pollution sol", desc: "Contamination nappe phréatique, responsabilité propriétaire" },
              { emoji: "⚖️", label: "Obligation légale", desc: "Arrêté 01/07/2004 — inertage ou démantèlement obligatoire" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
                <div className="text-3xl mb-2">{item.emoji}</div>
                <p className="font-black text-[#1b4f8c] text-sm mb-1">{item.label}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCÉDURE EN 5 ÉTAPES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Notre procédure en 5 étapes</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="space-y-4">
            {[
              { num: "01", titre: "Pompage des hydrocarbures résiduels", desc: "Aspiration complète des résidus de fioul présents dans la cuve, quelle que soit la quantité." },
              { num: "02", titre: "Nettoyage haute pression intérieur", desc: "Curage et nettoyage des parois intérieures pour éliminer les boues, dépôts et résidus encrassés." },
              { num: "03", titre: "Dégazage et neutralisation", desc: "Inertage de la cuve par remplissage de sable ou d'eau propre, ou dégazage complet avant démantèlement." },
              { num: "04", titre: "Découpe et évacuation (si démantèlement)", desc: "Découpe de la cuve sur place et évacuation des déchets métalliques ou plastiques vers les filières appropriées." },
              { num: "05", titre: "Traitement en filière agréée + TrackDéchets", desc: "Tous les déchets dangereux sont tracés sur TrackDéchets. Bordereau de Suivi des Déchets (BSD) remis systématiquement." },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 bg-gray-50 rounded-xl border border-gray-100 p-5">
                <div className="flex-shrink-0 w-12 h-12 bg-[#1b4f8c] text-white rounded-xl flex items-center justify-center font-black text-lg">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-black text-[#1b4f8c] mb-1">{step.titre}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HABILITATIONS */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">Nos habilitations et agréments</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                emoji: "🚛",
                titre: "Agrément ADR",
                desc: "Transport de marchandises dangereuses (directive 94/55/CE, accord ADR). Obligatoire pour le transport des hydrocarbures résiduels pompés.",
              },
              {
                emoji: "⚡",
                titre: "Agents formés ATEX",
                desc: "Nos intervenants sont formés aux risques d'environnement explosif (ATEX). Protocoles de sécurité stricts avant toute ouverture de cuve.",
              },
              {
                emoji: "💻",
                titre: "TrackDéchets",
                desc: "Traçabilité numérique obligatoire des déchets dangereux (loi AGEC). Chaque mouvement est enregistré de la collecte au traitement final.",
              },
              {
                emoji: "📋",
                titre: "Bordereau BSD",
                desc: "Bordereau de Suivi des Déchets remis systématiquement. Document officiel prouvant la bonne élimination des déchets dangereux.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white/10 rounded-2xl p-6">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-black text-[#f5b800] mb-2">{item.titre}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES DE CUVES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Types de cuves traitées</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { emoji: "🏠", label: "Enterrée acier" },
              { emoji: "🧴", label: "Aérienne plastique" },
              { emoji: "🚜", label: "Agricole" },
              { emoji: "🏭", label: "Industrielle" },
              { emoji: "🏡", label: "Domestique" },
            ].map((t) => (
              <div key={t.label} className="bg-white rounded-2xl p-5 text-center border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{t.emoji}</div>
                <p className="font-black text-[#1b4f8c] text-sm">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APRÈS DÉGAZAGE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Que faire après le dégazage ?</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <p className="text-gray-700 leading-relaxed mb-4">
            À l&apos;issue de l&apos;intervention, nous vous remettons une <strong>attestation de neutralisation</strong>. Ce document est indispensable pour :
          </p>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li className="flex items-start gap-2"><span className="text-[#f5b800] font-black">✓</span><span>Votre dossier assurance habitation ou multirisques</span></li>
            <li className="flex items-start gap-2"><span className="text-[#f5b800] font-black">✓</span><span>La vente immobilière (le notaire peut l&apos;exiger)</span></li>
            <li className="flex items-start gap-2"><span className="text-[#f5b800] font-black">✓</span><span>Tout contrôle administratif ou environnemental</span></li>
          </ul>
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
                  { prestation: "Cuve domestique 1 000 – 2 000 L (inertage)", prix: "600 – 900 € TTC" },
                  { prestation: "Cuve domestique 2 000 – 5 000 L (inertage)", prix: "900 – 1 200 € TTC" },
                  { prestation: "Démantèlement cuve aérienne", prix: "800 – 1 500 € TTC" },
                  { prestation: "Cuve enterrée (démantèlement)", prix: "Sur devis" },
                  { prestation: "Cuve industrielle / agricole", prix: "Sur devis" },
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
            Tarifs selon volume, accessibilité et options. Devis définitif fourni après visite ou description précise.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Dégazage cuve à fioul</h2>
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
            Dégazage de cuve à fioul en Picardie ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Agrément ADR — TrackDéchets — Attestation de neutralisation
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
              { label: "Séparateur hydrocarbures", href: "/separateur-hydrocarbures" },
              { label: "Nettoyage haute pression sol", href: "/nettoyage-haute-pression-sol" },
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
