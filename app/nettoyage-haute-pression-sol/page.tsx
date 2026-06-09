import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nettoyage Haute Pression Sol & Surfaces Picardie — Récupération Eaux Pluviales — Vilbert Hydro",
  description:
    "Vilbert Hydro : nettoyage haute pression de sols, plateformes, chantiers et voiries en Picardie. Camions avec réserves d'eau intégrées rechargées par eaux pluviales. Somme 80.",
  alternates: { canonical: "https://vilbert-hydro.fr/nettoyage-haute-pression-sol" },
};

export default function NettoyageHautePressionSol() {
  const faqItems = [
    {
      q: "Peut-on nettoyer des surfaces après chantier ?",
      a: "Oui, c'est l'une de nos spécialités BTP. Nous intervenons sur béton, enrobé, gravillons et éliminons les résidus de ciment, boues de chantier et salissures liées aux travaux, quelle que soit la surface.",
    },
    {
      q: "Gérez-vous les eaux usées après nettoyage ?",
      a: "Oui. Les eaux de nettoyage chargées sont récupérées et acheminées vers une filière de traitement agréée. Nous ne rejetons pas les eaux usées dans les réseaux pluviaux sans traitement préalable.",
    },
    {
      q: "Intervenez-vous sur parkings avec hydrocarbures ?",
      a: "Oui. Pour les surfaces présentant des hydrocarbures (huiles, carburants), nous pouvons déployer un séparateur portable pour traiter les eaux avant rejet, conformément à la réglementation.",
    },
    {
      q: "Quel est le délai d'intervention ?",
      a: "Selon notre disponibilité et la nature du chantier, nous intervenons généralement sous 24 à 72 heures pour les demandes urgentes. Contactez-nous pour connaître nos disponibilités actuelles.",
    },
    {
      q: "Y a-t-il une surface minimum pour intervenir ?",
      a: "Non, il n'y a pas de surface minimum imposée. Nous adaptons notre devis à chaque situation, qu'il s'agisse d'une petite cour ou d'une grande plateforme industrielle.",
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
              { "@type": "ListItem", position: 2, name: "Nettoyage Haute Pression Sol", item: "https://vilbert-hydro.fr/nettoyage-haute-pression-sol" },
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
            Éco-responsable · Récupération eaux pluviales
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Nettoyage Haute Pression de Sols
            <span className="block text-[#f5b800] mt-1">et Surfaces en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Chantiers BTP, plateformes industrielles, voiries, parkings, cours agricoles — résultat professionnel garanti
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

      {/* NOS ÉQUIPEMENTS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Nos équipements haute pression</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Nos camions haute pression sont équipés de <strong>réserves d&apos;eau intégrées</strong> d&apos;une capacité adaptée aux chantiers les plus exigeants. Pression de travail jusqu&apos;à <strong>200 bars</strong>, débit ajustable selon le type de surface et les salissures à traiter.
            </p>
            <p>
              Notre flotte inclut des <strong>rampes rotatives</strong> pour les grandes surfaces planes et des lances manuelles pour les zones d&apos;accès difficile.
            </p>
          </div>
          <div className="mt-8 bg-[#1b4f8c] text-white rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🌧️</div>
              <div>
                <h3 className="font-black text-[#f5b800] mb-2">Point clé : récupération d&apos;eaux pluviales</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Nos camions sont rechargés en priorité par <strong className="text-white">récupération d&apos;eaux pluviales</strong>. Cette démarche éco-responsable documentée réduit significativement notre consommation en eau potable et s&apos;inscrit dans notre engagement environnemental global.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SURFACES TRAITÉES */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Types de surfaces traitées</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                emoji: "🏗️",
                titre: "Chantiers BTP",
                desc: "Sol béton, enrobé, gravillons. Élimination de résidus de ciment, boues de chantier et salissures liées aux travaux de construction.",
              },
              {
                emoji: "🏭",
                titre: "Plateformes industrielles",
                desc: "Huiles, graisses, déchets d'exploitation. Nettoyage en profondeur des sols d'entrepôts, ateliers de production et zones de stockage.",
              },
              {
                emoji: "🛣️",
                titre: "Voiries communales",
                desc: "Salissures, mousses, peintures effacées, remise en état après travaux de voirie. Intervention sur commande des collectivités.",
              },
              {
                emoji: "🚗",
                titre: "Parkings & aires de service",
                desc: "Hydrocarbures, peintures au sol dégradées, marquages. Traitement des taches d'huile et de carburant avec gestion des eaux.",
              },
              {
                emoji: "🌾",
                titre: "Cours de ferme & installations agricoles",
                desc: "Déjections animales, boues, algues, résidus de récolte. Nettoyage des cours, aires de traite, fumières et zones de stockage.",
              },
              {
                emoji: "🏢",
                titre: "Cours et espaces collectifs",
                desc: "Copropriétés, zones industrielles, zones commerciales. Entretien régulier ou ponctuel selon vos besoins.",
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

      {/* DÉMARCHE ÉCO-RESPONSABLE */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3">Notre démarche éco-responsable</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🌧️",
                titre: "Récupération eaux pluviales",
                desc: "Nos réserves sont rechargées en priorité par récupération d'eaux pluviales, réduisant la consommation d'eau potable.",
              },
              {
                emoji: "♻️",
                titre: "Traitement des eaux usées",
                desc: "Les eaux de nettoyage chargées sont collectées et acheminées vers des filières de traitement agréées. Zéro rejet non conforme.",
              },
              {
                emoji: "🌿",
                titre: "Sans produits chimiques agressifs",
                desc: "Par défaut, nous n'utilisons pas de détergents chimiques agressifs. La pression de l'eau suffit dans la grande majorité des cas.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-black text-[#f5b800] mb-2">{item.titre}</h3>
                <p className="text-blue-100 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
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
                  { prestation: "Nettoyage au m² (surfaces simples)", prix: "2 – 6 € / m²" },
                  { prestation: "Forfait demi-journée", prix: "400 – 700 €" },
                  { prestation: "Forfait journée complète", prix: "700 – 1 200 €" },
                  { prestation: "Chantier BTP (devis surface)", prix: "Sur devis" },
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
            Tarifs HT. Devis définitif fourni après visite ou description précise du chantier.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Nettoyage haute pression sol</h2>
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
            Besoin d&apos;un nettoyage haute pression en Picardie ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Devis gratuit — Intervention rapide — Démarche éco-responsable
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
              { label: "Séparateur hydrocarbures", href: "/separateur-hydrocarbures" },
              { label: "Balayage voirie", href: "/balayage-voirie" },
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
