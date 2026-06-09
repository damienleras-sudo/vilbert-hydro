import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assainissement Collectivités & Mairies Picardie — Vilbert Hydro 03 22 91 72 01",
  description:
    "Vilbert Hydro : curage réseaux, vidange fosses, balayage voirie et nettoyage pour collectivités et mairies en Picardie. Marchés publics. Somme (80), Oise (60), Aisne (02).",
  alternates: { canonical: "https://vilbert-hydro.fr/assainissement-collectivite" },
};

export default function AssainissementCollectivitePage() {
  const faqItems = [
    {
      q: "Travaillez-vous dans le cadre de marchés publics ?",
      a: "Oui. Vilbert Hydro a l'habitude d'intervenir pour des collectivités dans le cadre de marchés publics. Nous fournissons un devis détaillé, un rapport d'intervention après chaque prestation et une facturation conforme aux exigences de la comptabilité publique.",
    },
    {
      q: "Fournissez-vous des rapports d'intervention ?",
      a: "Oui. Un rapport détaillé est remis après chaque intervention : nature de la prestation réalisée, linéaires traités ou surfaces balayées, anomalies constatées et recommandations éventuelles. Ce document peut être joint aux comptes rendus de conseil municipal.",
    },
    {
      q: "Pouvez-vous intervenir sur un réseau d'eaux pluviales ?",
      a: "Oui. Nous intervenons aussi bien sur les réseaux d'eaux usées que sur les réseaux d'eaux pluviales communaux : curage, hydrocurage et inspection télévisée. La distinction entre les deux réseaux est prise en compte dans les procédures et la destination des matières extraites.",
    },
    {
      q: "Quel est votre délai d'intervention en cas de réseau bouché ?",
      a: "Pour les urgences sur le réseau d'assainissement communal en Somme (80), nous intervenons en moins de 2 heures. Pour les autres départements de Picardie (Oise 60, Aisne 02), le délai est de 2 à 4 heures selon la distance.",
    },
    {
      q: "Proposez-vous un contrat annuel pour les collectivités ?",
      a: "Oui. Nous établissons des contrats pluriannuels avec un planning d'intervention défini, des tarifs négociés et stables, et une priorité d'intervention en cas d'urgence. Ce type de contrat facilite la gestion budgétaire de la commune.",
    },
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://vilbert-hydro.fr" },
      { "@type": "ListItem", position: 2, name: "Collectivités", item: "https://vilbert-hydro.fr/assainissement-collectivite" },
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
            Marchés publics · Rapport d&apos;intervention · Picardie
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Assainissement et Propreté
            <span className="block text-[#f5b800] mt-1">pour Collectivités &amp; Mairies en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Curage réseaux · Balayage voirie · Vidange fosses · Marchés publics
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention en Picardie — Somme (80), Oise (60), Aisne (02). 30 ans d&apos;expérience.
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

      {/* MISSION */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">
            Vilbert Hydro, votre partenaire local depuis 30 ans
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Les collectivités ont l&apos;obligation légale de <strong>maintenir les réseaux d&apos;eaux usées</strong>, les voiries communales et les espaces publics dans un état de propreté et de fonctionnement conformes. Réseaux bouchés, voiries souillées, fosses plaines : ces situations impactent directement les administrés et engagent la responsabilité de la commune.
            </p>
            <p>
              Vilbert Hydro intervient pour les <strong>mairies, communautés de communes et syndicats intercommunaux</strong> de Picardie depuis 30 ans. Nous sommes habitués aux contraintes des marchés publics : devis détaillé, rapport d&apos;intervention, facturation conforme, traçabilité complète des déchets.
            </p>
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Nos prestations collectivités</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔧", titre: "Curage et hydrocurage réseaux", desc: "Curage 100-200 bars des réseaux communaux d'eaux usées et pluviales. Décolmatage, nettoyage regards, élimination des dépôts." },
              { icon: "🧹", titre: "Balayage voiries et espaces publics", desc: "Balayage-aspiration des rues, places, parkings et voiries communales. Avant ou après événements, marchés, foires." },
              { icon: "💦", titre: "Nettoyage haute pression", desc: "Nettoyage HP après événements, marchés ou foires. Mobilier urbain, sols, trottoirs et espaces piétonniers." },
              { icon: "🚛", titre: "Vidange fosses septiques", desc: "Vidange des fosses des habitations communales et locaux. Agrément vidangeur, BSMD systématique, conformité SPANC." },
              { icon: "📹", titre: "Inspection télévisée réseaux", desc: "Contrôle par caméra des réseaux eaux usées et pluviales. Rapport vidéo et cartographie des anomalies." },
              { icon: "⚙️", titre: "Entretien postes de relevage", desc: "Maintenance préventive et curative des postes de relevage communaux. Astreinte 24h/24 pour les urgences." },
            ].map((s) => (
              <div key={s.titre} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-black text-[#1b4f8c] mb-2 text-sm">{s.titre}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARCHÉS PUBLICS */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">Marchés publics &amp; contrats pluriannuels</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📄", titre: "Devis détaillé", desc: "Chiffrage complet par ligne de prestation, utilisable pour la procédure de marché ou le bon de commande." },
              { icon: "📊", titre: "Rapport d'intervention", desc: "Compte-rendu écrit après chaque prestation. Joignable aux comptes-rendus de conseil municipal." },
              { icon: "🧾", titre: "Facturation conforme", desc: "Factures conformes aux exigences de la comptabilité publique, incluant SIRET, références marché et service fait." },
              { icon: "📅", titre: "Contrat pluriannuel", desc: "Planning d'entretien défini à l'avance, tarifs stables et interlocuteur dédié sur la durée du contrat." },
            ].map((e) => (
              <div key={e.titre} className="bg-white/10 rounded-2xl p-6 text-center border border-white/20">
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
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Collectivités &amp; Mairies</h2>
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
            Votre commune a besoin d&apos;un prestataire d&apos;assainissement ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Contactez Vilbert Hydro — devis marché public, contrat pluriannuel
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
            <Link href="/hydrocurage-haute-pression" className="text-gray-800 font-semibold hover:underline">Hydrocurage →</Link>
            <Link href="/balayage-voirie" className="text-gray-800 font-semibold hover:underline">Balayage voirie →</Link>
            <Link href="/inspection-televisee" className="text-gray-800 font-semibold hover:underline">Inspection télévisée →</Link>
            <Link href="/contrat-maintenance" className="text-gray-800 font-semibold hover:underline">Contrat maintenance →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
