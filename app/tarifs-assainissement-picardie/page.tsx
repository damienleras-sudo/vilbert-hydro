import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarifs Assainissement Picardie 2025 — Débouchage, Vidange, Curage — Vilbert Hydro",
  description:
    "Tous les tarifs assainissement en Picardie 2025 : débouchage 150-350€, vidange fosse 280-600€, hydrocurage 200-700€, inspection caméra 180-350€. Devis gratuit Vilbert Hydro.",
  alternates: { canonical: "https://vilbert-hydro.fr/tarifs-assainissement-picardie" },
};

export default function TarifsAssainissementPicardiePage() {
  const faqItems = [
    {
      q: "Les prix affichés sont-ils TTC ?",
      a: "Oui, tous nos tarifs indicatifs s'entendent TTC, TVA 20% incluse. Le devis définitif qui vous est remis avant toute intervention précise le montant exact TTC.",
    },
    {
      q: "Y a-t-il des frais de déplacement en sus ?",
      a: "Non. Le déplacement est systématiquement inclus dans le devis. Aucun frais caché n'est ajouté après l'intervention.",
    },
    {
      q: "Le tarif est-il majoré la nuit ou le week-end ?",
      a: "Non. Nous appliquons une tarification identique en semaine, le week-end et la nuit. Nous vous communiquons un devis avant toute intervention, y compris en urgence.",
    },
    {
      q: "Peut-on obtenir un devis écrit avant intervention ?",
      a: "Oui, systématiquement. Avant chaque intervention, nous établissons un devis écrit que vous validez. Aucun travail n'est engagé sans votre accord explicite.",
    },
    {
      q: "Quels moyens de paiement acceptez-vous ?",
      a: "Nous acceptons le chèque bancaire classique, le virement bancaire et la carte bancaire. Nous n'acceptons pas les chèques CESU.",
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
              { "@type": "ListItem", position: 2, name: "Tarifs Assainissement Picardie 2025", item: "https://vilbert-hydro.fr/tarifs-assainissement-picardie" },
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
            Tarification transparente 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Tarifs Assainissement en Picardie 2025
            <span className="block text-[#f5b800] mt-1">Grille Complète</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Débouchage · Vidange · Hydrocurage · Inspection caméra · Dégazage
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Devis <strong className="text-white">GRATUIT</strong> avant intervention · Déplacement inclus · Tarif identique nuit et week-end
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
              Demander un devis gratuit
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* INTRO */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "Devis GRATUIT", detail: "Avant toute intervention" },
              { label: "Déplacement inclus", detail: "Dans le devis" },
              { label: "Tarif identique", detail: "Nuit, week-end, jours fériés" },
              { label: "TVA 20% incluse", detail: "Prix TTC dans tous les devis" },
            ].map((item) => (
              <div key={item.label} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="font-black text-[#1b4f8c] text-sm">{item.label}</p>
                <p className="text-gray-500 text-xs mt-1">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABLEAU 1 — Débouchage */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Débouchage canalisation</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1b4f8c] text-white">
                  <th className="px-4 py-3 text-left font-black">Type d&apos;intervention</th>
                  <th className="px-4 py-3 text-right font-black">Tarif indicatif TTC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Débouchage simple (ventouse / furet manuel)", "150 – 250 €"],
                  ["Débouchage profond (furet motorisé)", "200 – 350 €"],
                  ["Hydrocurage 10 m linéaires", "200 – 350 €"],
                  ["Hydrocurage réseau complet 50 m", "400 – 700 €"],
                  ["Inspection caméra (diagnostic visuel)", "180 – 350 €"],
                  ["Nuit / week-end / jours fériés (urgence)", "Tarif identique — devis avant intervention"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row[0]}</td>
                    <td className="px-4 py-3 font-black text-[#1b4f8c] text-right border-b border-gray-100 whitespace-nowrap">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <Link href="/debouchage-canalisation" className="text-sm text-[#1b4f8c] font-bold hover:underline">→ En savoir plus sur le débouchage canalisation</Link>
          </div>
        </div>
      </section>

      {/* TABLEAU 2 — Vidange fosse */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Vidange fosse septique</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1b4f8c] text-white">
                  <th className="px-4 py-3 text-left font-black">Volume de la fosse</th>
                  <th className="px-4 py-3 text-right font-black">Tarif indicatif TTC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Fosse 3 000 L (maison 1–4 personnes)", "280 – 380 €"],
                  ["Fosse 4 000 L (maison 4–6 personnes)", "320 – 420 €"],
                  ["Fosse 5 000 L (maison 5–8 personnes)", "350 – 450 €"],
                  ["Fosse > 5 000 L", "Sur devis"],
                  ["BSMD + déplacement", "Inclus dans le tarif"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row[0]}</td>
                    <td className={`px-4 py-3 text-right border-b border-gray-100 whitespace-nowrap ${row[1] === "Inclus dans le tarif" ? "text-green-700 font-bold" : "font-black text-[#1b4f8c]"}`}>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <Link href="/vidange-fosse-septique" className="text-sm text-[#1b4f8c] font-bold hover:underline">→ En savoir plus sur la vidange fosse septique</Link>
          </div>
        </div>
      </section>

      {/* TABLEAU 3 — Nettoyage et voirie */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Nettoyage et voirie</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1b4f8c] text-white">
                  <th className="px-4 py-3 text-left font-black">Prestation</th>
                  <th className="px-4 py-3 text-right font-black">Tarif indicatif TTC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Nettoyage bac à graisses / séparateur hydrocarbures", "300 – 600 €"],
                  ["Nettoyage haute pression sol (demi-journée)", "400 – 700 €"],
                  ["Balayage voirie (demi-journée)", "350 – 600 €"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row[0]}</td>
                    <td className="px-4 py-3 font-black text-[#1b4f8c] text-right border-b border-gray-100 whitespace-nowrap">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TABLEAU 4 — Services spécialisés */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Services spécialisés</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1b4f8c] text-white">
                  <th className="px-4 py-3 text-left font-black">Prestation</th>
                  <th className="px-4 py-3 text-right font-black">Tarif indicatif TTC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Dégazage cuve fioul domestique 1 000 – 2 000 L", "600 – 900 €"],
                  ["Dégazage + démantèlement cuve", "800 – 1 500 €"],
                  ["Sous-produits animaux (collecte)", "Sur devis"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{row[0]}</td>
                    <td className="px-4 py-3 font-black text-[#1b4f8c] text-right border-b border-gray-100 whitespace-nowrap">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION — Ce qui est inclus */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Ce qui est TOUJOURS inclus dans nos devis</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🚛", label: "Déplacement", detail: "Inclus dans le devis, aucun frais ajouté" },
              { icon: "📋", label: "Devis avant intervention", detail: "Établi gratuitement, validé par vous" },
              { icon: "📄", label: "Rapport d&apos;intervention", detail: "Document écrit remis après chaque prestation" },
              { icon: "📑", label: "BSMD (vidange)", detail: "Bordereau de Suivi des Matières de Vidange officiel" },
              { icon: "💰", label: "TVA 20% incluse", detail: "Prix TTC dans tous les devis, pas de surprise" },
              { icon: "⏱️", label: "Pas de majoration cachée", detail: "Tarif identique nuit, week-end et jours fériés" },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl p-5 flex gap-4 items-start">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-black text-[#f5b800] text-sm" dangerouslySetInnerHTML={{ __html: item.label }} />
                  <p className="text-blue-100 text-xs mt-1" dangerouslySetInnerHTML={{ __html: item.detail }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — Facteurs influençant le prix */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Facteurs influençant le prix final</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                titre: "Accessibilité du site",
                texte: "Un accès difficile (terrain en pente, portail étroit, distance entre la voirie et la fosse) peut nécessiter un équipement spécifique et influer sur la durée d'intervention.",
              },
              {
                titre: "Volume à traiter",
                texte: "Plus la fosse est grande ou le réseau étendu, plus le temps d'intervention est long et le volume de matières à traiter important.",
              },
              {
                titre: "Distance de transport des matières",
                texte: "Pour la vidange, les matières doivent être acheminées vers une station de traitement agréée. La distance peut influer sur le coût global.",
              },
              {
                titre: "Complexité technique",
                texte: "Certaines situations requièrent du matériel spécialisé : caméra robotique, pompe de relevage, pression augmentée. La complexité est évaluée lors du devis.",
              },
              {
                titre: "Urgence",
                texte: "Les interventions d'urgence sont prioritaires dans notre planning mais ne font PAS l'objet d'une majoration tarifaire. Le devis est établi avant toute intervention.",
              },
              {
                titre: "Type d'installation",
                texte: "Une micro-station d'épuration ou un poste de relevage nécessitent un savoir-faire spécifique et peuvent impliquer des tarifs différents d'une fosse classique.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-gray-50 rounded-xl border border-gray-100 p-5">
                <h3 className="font-black text-[#1b4f8c] text-sm mb-2">{item.titre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION — Comment obtenir un devis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Comment obtenir un devis précis ?</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="space-y-4">
            {[
              {
                num: "1",
                titre: "Appelez-nous ou écrivez-nous",
                desc: "Contactez Vilbert Hydro au 03 22 91 72 01 ou via notre formulaire de contact. Décrivez votre situation : type de prestation, localisation, urgence.",
              },
              {
                num: "2",
                titre: "Devis gratuit sous 24h",
                desc: "Nous vous envoyons un devis détaillé, gratuit, avec le montant TTC total incluant déplacement et toutes les prestations.",
              },
              {
                num: "3",
                titre: "Validation et intervention",
                desc: "Dès validation de votre devis, nous planifions l'intervention à vos disponibilités. Rapport d'intervention et BSMD (si vidange) remis à l'issue.",
              },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-5 bg-white rounded-xl border border-gray-200 p-5">
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

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Tarifs assainissement</h2>
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

      {/* CTA */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Devis gratuit pour votre intervention
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Vilbert Hydro — Tarification transparente en Picardie
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg mb-4"
          >
            📞 03 22 91 72 01
          </a>
          <p className="text-gray-600 text-sm">Devis sous 24h · Déplacement inclus · Pas de frais cachés</p>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4">Pages utiles</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Débouchage canalisation", href: "/debouchage-canalisation" },
              { label: "Vidange fosse septique", href: "/vidange-fosse-septique" },
              { label: "Guide fosse septique", href: "/guide-fosse-septique" },
              { label: "Guide assainissement Picardie", href: "/guide-assainissement-picardie" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact", href: "/contact" },
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
