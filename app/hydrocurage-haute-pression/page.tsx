import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hydrocurage Haute Pression Picardie — Curage Réseau · Somme · Oise · Aisne — 03 22 91 72 01",
  description:
    "Vilbert Hydro : hydrocurage haute pression en Picardie. Jet 100–200 bars, lance rotative 360°, nettoyage réseau complet. Résidentiel, copropriété, restaurant, industriel. Somme (80), Oise (60), Aisne (02). Devis gratuit.",
  alternates: { canonical: "https://vilbert-hydro.fr/hydrocurage-haute-pression" },
};

export default function HydrocurageHautePression() {
  const faqItems = [
    {
      q: "Quelle pression d'eau est utilisée lors d'un hydrocurage ?",
      a: "Nos camions hydrocureurs travaillent entre 100 et 200 bars selon la nature des dépôts et le type de canalisation. La lance rotative 360° assure un nettoyage complet de toute la circonférence du tuyau.",
    },
    {
      q: "À quelle fréquence est-il conseillé de faire un hydrocurage préventif ?",
      a: "Pour un réseau résidentiel, un entretien tous les 2 à 3 ans est recommandé. Pour un restaurant ou une cuisine professionnelle (bac à graisses), un curage semestriel ou annuel est préconisé selon le volume d'activité.",
    },
    {
      q: "Quelle différence entre curage et débouchage ?",
      a: "Le débouchage vise à éliminer un bouchon ponctuel. L'hydrocurage est un nettoyage complet du réseau : il élimine non seulement les obstructions mais aussi les dépôts en paroi, prévenant ainsi les récidives et les odeurs.",
    },
    {
      q: "L'hydrocurage est-il compatible avec les canalisations en PVC ?",
      a: "Oui, à condition d'adapter la pression. Nos techniciens évaluent le matériau (PVC, fonte, béton, grès) avant chaque intervention et ajustent le débit et la pression pour ne pas endommager les canalisations.",
    },
    {
      q: "Combien de temps dure une intervention d'hydrocurage ?",
      a: "Pour un réseau résidentiel standard (50 à 80 m), l'intervention dure généralement entre 1h30 et 3h. Pour un réseau industriel ou une copropriété, comptez une demi-journée à une journée complète.",
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
              { "@type": "ListItem", position: 2, name: "Hydrocurage Haute Pression", item: "https://vilbert-hydro.fr/hydrocurage-haute-pression" },
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
            200 bars · Lance rotative 360°
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Hydrocurage Haute Pression
            <span className="block text-[#f5b800] mt-1">en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Nettoyage complet de vos canalisations — résidentiel, copropriété, restaurant, industrie
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention en Picardie : Somme (80), Oise (60), Aisne (02). Urgences 24h/24.
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

      {/* PRINCIPE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Comment fonctionne l&apos;hydrocurage ?</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              L&apos;hydrocurage haute pression consiste à propulser un jet d&apos;eau à <strong>100 à 200 bars</strong> dans la canalisation à l&apos;aide d&apos;une lance équipée de buses rotatives. Contrairement au furet mécanique qui perfore le bouchon, le jet d&apos;eau nettoie <strong>360° de la paroi</strong> sur toute la longueur du réseau, éliminant les dépôts accrochés à la surface intérieure.
            </p>
            <p>
              La lance rotative progresse dans le tuyau en projetant l&apos;eau vers l&apos;arrière, ce qui la propulse automatiquement vers l&apos;avant. Les matières décollées sont ensuite évacuées avec le flux et récupérées par aspiration simultanée si nécessaire (camion combiné hydrocurage/aspiration).
            </p>
          </div>
        </div>
      </section>

      {/* QUAND UTILISER */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Quand recourir à l&apos;hydrocurage ?</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { emoji: "🍖", titre: "Graisses accumulées", desc: "Restaurants, cuisines collectives : les graisses forment des bouchons solides en paroi impossible à éliminer autrement." },
              { emoji: "💧", titre: "Dépôts calcaires", desc: "Le calcaire réduit progressivement la section utile des tuyaux jusqu'à l'obstruction totale." },
              { emoji: "🟤", titre: "Boues et limons", desc: "Boues compactées dans les collecteurs enterrés, souvent dues à une mauvaise pente." },
              { emoji: "🔄", titre: "Bouchons récidivants", desc: "Un bouchon qui revient chaque mois indique des dépôts persistants en paroi : l'hydrocurage traite la cause." },
              { emoji: "🌿", titre: "Intrusions racinaires", desc: "Couplé à l'inspection caméra, l'hydrocurage découpe et évacue les racines pénétrées dans le réseau." },
              { emoji: "🛡️", titre: "Entretien préventif", desc: "Un hydrocurage annuel ou bisannuel évite les urgences et prolonge la durée de vie de vos canalisations." },
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

      {/* TYPES DE RÉSEAUX */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">Tous types de réseaux</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { emoji: "🏠", label: "Résidentiel" },
              { emoji: "🏢", label: "Copropriété" },
              { emoji: "🍽️", label: "Restaurant" },
              { emoji: "🏭", label: "Industriel" },
              { emoji: "🌾", label: "Agricole" },
            ].map((t) => (
              <div key={t.label} className="bg-white/10 rounded-2xl p-5 text-center">
                <div className="text-4xl mb-3">{t.emoji}</div>
                <p className="font-black text-[#f5b800]">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABLEAU COMPARATIF */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Hydrocurage vs furet motorisé</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#1b4f8c] text-white">
                <tr>
                  <th className="text-left p-4 font-black">Critère</th>
                  <th className="text-center p-4 font-black">Furet motorisé</th>
                  <th className="text-center p-4 font-black">Hydrocurage HP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { critere: "Débouchage ponctuel", furet: "✅", hydro: "✅" },
                  { critere: "Nettoyage parois 360°", furet: "❌", hydro: "✅" },
                  { critere: "Élimination graisses en paroi", furet: "⚠️ partiel", hydro: "✅" },
                  { critere: "Coupe de racines", furet: "⚠️ partiel", hydro: "✅" },
                  { critere: "Réseau long (> 20 m)", furet: "⚠️ limité", hydro: "✅" },
                  { critere: "Prévention récidives", furet: "❌", hydro: "✅" },
                  { critere: "Tarif", furet: "💲 bas", hydro: "💲💲 moyen" },
                ].map((row, i) => (
                  <tr key={row.critere} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-gray-700 font-medium">{row.critere}</td>
                    <td className="p-4 text-center">{row.furet}</td>
                    <td className="p-4 text-center font-bold text-[#1b4f8c]">{row.hydro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-16 bg-white">
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
                  { prestation: "Hydrocurage 10 m linéaires", prix: "200 – 350 €" },
                  { prestation: "Réseau complet 50 m", prix: "400 – 700 €" },
                  { prestation: "Curage bac à graisses", prix: "300 – 500 €" },
                  { prestation: "Hydrocurage réseau copropriété", prix: "Sur devis" },
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
            Tarifs HT. Majoration nuit/week-end/jours fériés. Devis définitif fourni sur place.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Hydrocurage haute pression</h2>
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

      {/* CTA FINAL */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Besoin d&apos;un hydrocurage en Picardie ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Devis gratuit — Intervention rapide — Tous types de réseaux
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
              { label: "Débouchage canalisation", href: "/debouchage-canalisation" },
              { label: "Inspection télévisée", href: "/inspection-televisee" },
              { label: "Vidange fosse septique", href: "/vidange-fosse-septique" },
              { label: "Tous nos services", href: "/services" },
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
