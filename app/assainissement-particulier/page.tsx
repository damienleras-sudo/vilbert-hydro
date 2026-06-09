import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assainissement & Débouchage pour Particuliers en Picardie — Vilbert Hydro 03 22 91 72 01",
  description:
    "Débouchage, vidange fosse septique, hydrocurage, inspection caméra pour les particuliers en Picardie. Urgences 24h/24. Agréé vidangeur. Somme (80), Oise (60), Aisne (02).",
  alternates: { canonical: "https://vilbert-hydro.fr/assainissement-particulier" },
};

export default function AssainissementParticulierPage() {
  const faqItems = [
    {
      q: "Intervient-on le soir et le week-end ?",
      a: "Oui. Vilbert Hydro assure une astreinte 24h/24, 7j/7. Nos interventions d'urgence le soir, la nuit et le week-end sont facturées sans majoration cachée : le tarif annoncé au téléphone est celui de la facture.",
    },
    {
      q: "Faut-il être propriétaire pour faire appel à Vilbert Hydro ?",
      a: "Non, les locataires peuvent aussi nous contacter. Pour des travaux engageant la structure ou les équipements de l'habitation (remplacement de canalisation, vidange de fosse), il est conseillé d'en informer le bailleur ou d'obtenir son accord préalable.",
    },
    {
      q: "Combien coûte un débouchage en urgence ?",
      a: "Le prix varie entre 150 € et 350 € selon la complexité de l'obstruction, la longueur de la canalisation et l'heure d'intervention. Un devis est systématiquement établi avant le démarrage des travaux.",
    },
    {
      q: "Comment préparer la venue du technicien ?",
      a: "Pour gagner du temps, dégagez l'accès aux regards de visite extérieurs et au regard de façade. Notez les signes observés (quelle pièce, depuis quand, odeurs, refoulements). Si vous connaissez le plan de votre réseau ou l'emplacement de la fosse, communiquez-le au technicien.",
    },
    {
      q: "Faut-il un BSMD pour une vidange de fosse chez un particulier ?",
      a: "Oui. Le Bordereau de Suivi des Matières de Vidange (BSMD) est un document réglementaire obligatoire pour toute vidange de fosse septique ou toutes eaux. Vilbert Hydro, agréé vidangeur préfectoral, le remet systématiquement après chaque intervention. Il peut vous être demandé par votre SPANC lors d'un contrôle.",
    },
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://vilbert-hydro.fr" },
      { "@type": "ListItem", position: 2, name: "Particuliers", item: "https://vilbert-hydro.fr/assainissement-particulier" },
    ],
  };

  return (
    <>
      {/* BREADCRUMB JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
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
            Urgences 24h/24 · Devis gratuit · Particuliers bienvenus
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Assainissement &amp; Débouchage
            <span className="block text-[#f5b800] mt-1">pour Particuliers en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Débouchage · Vidange fosse · Hydrocurage · Inspection caméra
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention en Picardie — Somme (80), Oise (60), Aisne (02). Agréé vidangeur préfectoral.
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-[#f5b800] text-gray-900 font-black px-10 py-4 rounded text-xl hover:bg-[#ffd44d] transition-colors shadow-lg"
          >
            📞 03 22 91 72 01
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* VOS BESOINS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Vos besoins au quotidien</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Particulier en Picardie, voici les situations les plus fréquentes pour lesquelles Vilbert Hydro intervient à votre domicile.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🚽", titre: "WC bouché ou qui déborde", desc: "Obstruction partielle ou totale, refoulement en cas de pluie ou d'usage intensif. Intervention rapide, souvent le jour même." },
              { icon: "🚿", titre: "Douche / évier qui se vide lentement", desc: "Accumulation de graisses, cheveux ou calcaire dans la canalisation. Débouchage mécanique ou hydrocurage selon la gravité." },
              { icon: "💧", titre: "Odeurs d'égout dans la maison", desc: "Siphon à sec, joint défaillant ou fosse pleine. Diagnostic sur place pour identifier la source exacte." },
              { icon: "🏡", titre: "Fosse septique à vidanger", desc: "Obligation légale tous les 4 ans au maximum. Vilbert Hydro, agréé vidangeur, remet le BSMD réglementaire après chaque vidange." },
              { icon: "📷", titre: "Diagnostic avant achat immobilier", desc: "Inspection télévisée des canalisations pour évaluer l'état du réseau avant signature. Rapport vidéo remis." },
              { icon: "🔔", titre: "Alarme fosse ou poste de relevage", desc: "Panne électrique, flotteur défaillant, pompe grillée. Astreinte 24h/24 pour dépanner votre installation de relevage." },
            ].map((s) => (
              <div key={s.titre} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-black text-[#1b4f8c] mb-2 text-sm">{s.titre}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Nos tarifs particuliers</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1b4f8c] text-white">
                  <th className="text-left px-4 py-3 font-black">Prestation</th>
                  <th className="text-left px-4 py-3 font-black">Fourchette indicative TTC</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { prestation: "Débouchage simple (méthode mécanique)", tarif: "150 – 250 €" },
                  { prestation: "Hydrocurage canalisation", tarif: "200 – 500 €" },
                  { prestation: "Vidange fosse septique 3 000 L", tarif: "280 – 380 €" },
                  { prestation: "Inspection télévisée (caméra)", tarif: "180 – 350 €" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 py-3 text-gray-800 font-medium">{row.prestation}</td>
                    <td className="px-4 py-3 text-[#1b4f8c] font-black">{row.tarif}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-4 text-center">
            Devis gratuit avant toute intervention. Tarifs variables selon complexité et accessibilité.
          </p>
        </div>
      </section>

      {/* POURQUOI VILBERT HYDRO */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">Pourquoi choisir Vilbert Hydro ?</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🏆", titre: "30 ans d'expérience", desc: "Créée en Picardie, Vilbert Hydro intervient depuis plus de 30 ans pour les particuliers, entreprises et collectivités de la région." },
              { icon: "📜", titre: "Agréé vidangeur préfectoral", desc: "Agrément officiel pour la vidange de fosses septiques. Le BSMD est remis systématiquement après chaque vidange." },
              { icon: "⚡", titre: "Intervention < 2h en urgence", desc: "Astreinte 24h/24 pour les situations urgentes. Nos équipes interviennent rapidement sur toute la Picardie." },
              { icon: "👷", titre: "Techniciens certifiés", desc: "Formations CATEC (espaces confinés), habilitations électriques. Professionnels qualifiés pour chaque type de prestation." },
              { icon: "📋", titre: "BSMD remis systématiquement", desc: "Document réglementaire remis après chaque vidange. Indispensable pour vos contrôles SPANC." },
              { icon: "💬", titre: "Devis gratuit", desc: "Estimation sans engagement avant tout démarrage. Tarif clair, pas de surprise à la facture." },
            ].map((e) => (
              <div key={e.titre} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">{e.icon}</div>
                <h3 className="font-black text-[#f5b800] mb-2 text-sm">{e.titre}</h3>
                <p className="text-blue-100 text-xs leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Particuliers</h2>
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
            Un problème d&apos;assainissement chez vous ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Contactez Vilbert Hydro — devis gratuit, intervention rapide en Picardie
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg mb-4"
          >
            📞 03 22 91 72 01
          </a>
          <p className="text-gray-700 mb-2 text-sm">
            ou par email :{" "}
            <a href="mailto:hydro@groupe-vilbert.fr" className="font-bold underline">
              hydro@groupe-vilbert.fr
            </a>
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/debouchage-canalisation" className="text-gray-800 font-semibold hover:underline">Débouchage canalisation →</Link>
            <Link href="/vidange-fosse-septique" className="text-gray-800 font-semibold hover:underline">Vidange fosse septique →</Link>
            <Link href="/inspection-televisee" className="text-gray-800 font-semibold hover:underline">Inspection télévisée →</Link>
            <Link href="/faq" className="text-gray-800 font-semibold hover:underline">FAQ →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
