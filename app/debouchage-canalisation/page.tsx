import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Débouchage Canalisation Picardie — Urgences 24h/24 · Somme · Oise · Aisne — 03 22 91 72 01",
  description:
    "Vilbert Hydro : débouchage de canalisations en urgence en Picardie. Furet motorisé, hydrocurage, inspection caméra. Arrivée en moins de 2h. Somme (80), Oise (60), Aisne (02). Devis gratuit.",
  alternates: { canonical: "https://vilbert-hydro.fr/debouchage-canalisation" },
};

export default function DebouchageCanalisation() {
  const faqItems = [
    {
      q: "Quel est le délai d'intervention pour un débouchage d'urgence ?",
      a: "Vilbert Hydro s'engage à intervenir en moins de 2 heures sur l'ensemble de la Picardie (Somme, Oise, Aisne), 24h/24 et 7j/7, y compris les jours fériés.",
    },
    {
      q: "Les produits chimiques du commerce sont-ils efficaces pour déboucher une canalisation ?",
      a: "Les produits chimiques peuvent déboucher des bouchons légers mais abîment les joints et les canalisations PVC sur le long terme. Ils sont totalement inefficaces sur les bouchons de racines ou de corps étrangers. Un professionnel avec furet ou hydrocurage est toujours plus efficace et ne dégrade pas vos installations.",
    },
    {
      q: "Combien coûte un débouchage de canalisation ?",
      a: "Le tarif varie selon la nature et la profondeur du bouchon : débouchage simple 150–250 €, bouchon profond 200–350 €, hydrocurage complet 200–700 €. Un devis précis vous est fourni avant toute intervention.",
    },
    {
      q: "Intervenez-vous la nuit et le week-end ?",
      a: "Oui, notre service urgence fonctionne 24h/24 et 7j/7. Une majoration tarifaire s'applique pour les interventions de nuit (après 20h) et les dimanches/jours fériés.",
    },
    {
      q: "Y a-t-il une garantie sur le débouchage ?",
      a: "Oui, nous garantissons le résultat de notre intervention. Si le bouchon réapparaît dans les 48h suivant notre passage (hors nouvelle cause extérieure), nous revenons sans frais supplémentaires.",
    },
  ];

  const villes = [
    { label: "Amiens", slug: "amiens" },
    { label: "Abbeville", slug: "abbeville" },
    { label: "Péronne", slug: "peronne" },
    { label: "Albert", slug: "albert" },
    { label: "Montdidier", slug: "montdidier" },
    { label: "Doullens", slug: "doullens" },
    { label: "Corbie", slug: "corbie" },
    { label: "Roye", slug: "roye" },
    { label: "Ham", slug: "ham" },
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
              { "@type": "ListItem", position: 2, name: "Débouchage Canalisation", item: "https://vilbert-hydro.fr/debouchage-canalisation" },
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
            Intervention &lt; 2h
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Débouchage Canalisation en Picardie
            <span className="block text-[#f5b800] mt-1">Urgences 24h/24</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Furet motorisé · Hydrocurage 200 bars · Inspection caméra HD
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention en Picardie : Somme (80), Oise (60), Aisne (02). Arrivée en moins de 2h.
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

      {/* TYPES DE BOUCHONS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Types de bouchons traités</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {[
              { emoji: "🧴", titre: "Cheveux & savon", desc: "Accumulation dans les siphons de douche et lavabo, les plus fréquents." },
              { emoji: "🧻", titre: "Lingettes", desc: "Lingettes humides non solubles : premier piège des réseaux d'assainissement." },
              { emoji: "🍳", titre: "Graisses solidifiées", desc: "Huiles et graisses refroidies formant un bouchon imperméable en paroi." },
              { emoji: "🌿", titre: "Racines", desc: "Intrusions racinaires dans les canalisations vieillissantes ou fissurées." },
              { emoji: "🔩", titre: "Corps étrangers", desc: "Jouets, coton-tiges, objets tombés accidentellement dans les canalisations." },
              { emoji: "💧", titre: "Calcaire", desc: "Dépôts calcaires réduisant progressivement la section utile du tuyau." },
            ].map((c) => (
              <div key={c.titre} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="text-4xl mb-3">{c.emoji}</div>
                <h3 className="font-black text-[#1b4f8c] text-sm mb-2">{c.titre}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOS TECHNIQUES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Nos techniques de débouchage</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="space-y-4">
            {[
              { num: "1", titre: "Ventouse professionnelle", desc: "Première approche mécanique pour les bouchons accessibles proches des orifices." },
              { num: "2", titre: "Furet motorisé", desc: "Câble rotatif motorisé atteignant jusqu'à 30 m pour déloger les bouchons profonds dans les colonnes et collecteurs." },
              { num: "3", titre: "Hydrocurage 200 bars", desc: "Jet d'eau haute pression avec lance rotative 360° : nettoyage complet des parois sur toute la longueur de la canalisation. Efficace sur graisses, calcaire, boues et racines." },
              { num: "4", titre: "Inspection caméra HD", desc: "Après débouchage, une caméra robotisée inspecte la canalisation pour détecter fissures, décalages ou racines résiduelles et prévenir les récidives." },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-5 bg-blue-50 rounded-xl p-5 border border-blue-100">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1b4f8c] text-white rounded-full flex items-center justify-center font-black text-lg">
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

      {/* SIGNES D'ALERTE */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3">Quand appeler immédiatement ?</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {[
              "Refoulement d'eaux usées dans la douche ou la baignoire",
              "Odeurs de putréfaction persistantes dans la maison",
              "Plusieurs points d'eau bouchés simultanément",
              "Gargouillement dans les siphons lors du vidage",
              "Eau stagnante dans la cour ou le jardin",
              "Toilettes qui débordent malgré les tentatives de débouchage",
            ].map((s) => (
              <div key={s} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                <span className="text-[#f5b800] font-black mt-0.5">⚠</span>
                <p className="text-blue-100 text-sm">{s}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="tel:0322917201"
              className="inline-block bg-[#f5b800] text-gray-900 font-black px-10 py-4 rounded text-xl hover:bg-[#ffd44d] transition-colors shadow-lg"
            >
              📞 03 22 91 72 01 — Urgence 24h/24
            </a>
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
                  { prestation: "Débouchage simple (siphon, WC)", prix: "150 – 250 €" },
                  { prestation: "Bouchon profond (colonne, collecteur)", prix: "200 – 350 €" },
                  { prestation: "Hydrocurage haute pression", prix: "200 – 700 €" },
                  { prestation: "Inspection caméra HD", prix: "180 – 350 €" },
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

      {/* VILLES SOMME */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">
              Débouchage canalisation dans la Somme (80)
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {villes.map((v) => (
              <Link
                key={v.slug}
                href={`/debouchage-${v.slug}`}
                className="inline-flex items-center gap-2 bg-blue-50 hover:bg-[#1b4f8c] hover:text-white text-[#1b4f8c] text-sm font-bold px-4 py-2 rounded-full border border-blue-200 transition-colors"
              >
                📍 Débouchage {v.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Débouchage canalisation</h2>
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
            Canalisation bouchée ? Appelez maintenant
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Intervention en moins de 2h · Urgences 24h/24 · Devis gratuit
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
              { label: "Hydrocurage haute pression", href: "/hydrocurage-haute-pression" },
              { label: "Inspection télévisée", href: "/inspection-televisee" },
              { label: "Vidange fosse septique", href: "/vidange-fosse-septique" },
              { label: "FAQ", href: "/faq" },
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
