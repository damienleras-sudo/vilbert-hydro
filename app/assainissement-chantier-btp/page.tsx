import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assainissement & Nettoyage Chantiers BTP Picardie — Vilbert Hydro 03 22 91 72 01",
  description:
    "Vilbert Hydro : nettoyage haute pression, balayage et assainissement sur chantiers BTP en Picardie. Avant réception, pendant travaux. Devis gratuit. Somme (80).",
  alternates: { canonical: "https://vilbert-hydro.fr/assainissement-chantier-btp" },
};

export default function AssainissementChantierBTPPage() {
  const faqItems = [
    {
      q: "Fournissez-vous un procès-verbal de nettoyage pour la réception de chantier ?",
      a: "Oui. Nous remettons un document écrit attestant la réalisation et la conformité du nettoyage. Ce procès-verbal est indispensable lors de la réception de chantier par le maître d'ouvrage (MOA) ou le maître d'œuvre (MOE).",
    },
    {
      q: "Intervenez-vous en dehors des heures ouvrées ?",
      a: "Oui. Nous pouvons intervenir tôt le matin, en soirée ou le week-end pour s'adapter aux contraintes du chantier, notamment pour le nettoyage avant réception ou pour ne pas gêner les autres corps de métier en journée.",
    },
    {
      q: "Pouvez-vous travailler avec des eaux usées de chantier ?",
      a: "Oui. Nous récupérons les eaux usées générées lors du nettoyage haute pression (laitance de béton, eaux de rinçage chargées) et les orientons vers une filière de traitement agréée. Aucun rejet direct au réseau sans autorisation.",
    },
    {
      q: "Quel est votre délai de mobilisation sur chantier ?",
      a: "En général 24 à 72 heures selon l'urgence et la disponibilité du matériel. Pour les réceptions de chantier avec date imposée, prenez contact dès que possible pour réserver le créneau.",
    },
    {
      q: "Comment établissez-vous le devis pour un chantier BTP ?",
      a: "Nous établissons le devis selon la surface à traiter, la nature des salissures (béton, ciment, boues, enrobé), l'accessibilité et la durée prévisionnelle. Facturation possible au m², à la journée ou en forfait selon le type d'intervention.",
    },
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://vilbert-hydro.fr" },
      { "@type": "ListItem", position: 2, name: "Chantiers BTP", item: "https://vilbert-hydro.fr/assainissement-chantier-btp" },
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
            Avant réception · Pendant travaux · Déplacement inclus
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Assainissement et Nettoyage
            <span className="block text-[#f5b800] mt-1">de Chantiers BTP en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Nettoyage HP · Balayage · Curage réseaux · PV de nettoyage
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention en Picardie — Somme (80), Oise (60), Aisne (02). Devis gratuit sous 24h.
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

      {/* BESOINS CHANTIER */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">
            Les besoins sur chantier BTP
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              La <strong>réception de chantier</strong> est conditionnée par la propreté des ouvrages et des abords. Le maître d&apos;ouvrage (MOA) exige généralement un <strong>nettoyage complet</strong> avant la remise des clés : béton, ciment et boues de forage éliminés, voirie environnante propre, réseaux vérifiés.
            </p>
            <p>
              Pendant les travaux, la <strong>gestion des eaux usées</strong> de chantier, le balayage régulier de la voirie et la vidange des bases-vie sont autant d&apos;obligations réglementaires et contractuelles. Vilbert Hydro intervient à toutes les phases du chantier, du gros œuvre à la livraison.
            </p>
          </div>
        </div>
      </section>

      {/* INTERVENTIONS BTP */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Nos interventions BTP</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "💦", titre: "Nettoyage haute pression", desc: "200 bars pour éliminer béton durci, ciment, boues de forage, enrobé. Récupération des eaux souillées incluse, filière agréée." },
              { icon: "🧹", titre: "Balayage-aspiration", desc: "Balayage avant et après travaux : gravats fins, sable, poussières. Voirie propre autour du chantier, avant réception ou livraison." },
              { icon: "🚽", titre: "Vidange bacs et WC de chantier", desc: "Vidange des bacs WC chimiques et sanitaires de base-vie. BSMD remis, filière de traitement agréée." },
              { icon: "🔧", titre: "Curage réseaux nouvellement posés", desc: "Nettoyage des canalisations avant mise en service pour éliminer les résidus de chantier (gravats, ciment, sable)." },
              { icon: "📹", titre: "Inspection télévisée réseaux", desc: "Contrôle par caméra robotisée des réseaux eaux usées/pluviales à la réception. Rapport vidéo et compte-rendu écrit remis." },
              { icon: "📋", titre: "PV de nettoyage", desc: "Document écrit attestant le nettoyage réalisé. Indispensable pour la réception de chantier par MOA ou MOE." },
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

      {/* COMBINAISON */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3">Combinaison balayage + nettoyage HP</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { step: "1", titre: "Balayage-aspiration", desc: "Élimination des résidus secs : gravats, sable, poussières. Voirie propre avant intervention HP." },
              { step: "2", titre: "Nettoyage haute pression", desc: "Décollement et rinçage des salissures tenaces : béton, ciment, traces d'enrobé, boues." },
              { step: "3", titre: "Récupération eaux usées", desc: "Aspiration des eaux de rinçage chargées, transport et traitement en filière agréée." },
            ].map((e) => (
              <div key={e.step} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-black text-[#f5b800] mb-3">{e.step}</div>
                <h3 className="font-black text-white mb-2 text-sm">{e.titre}</h3>
                <p className="text-blue-100 text-xs leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-blue-200 text-sm mt-6">
            Les deux prestations peuvent être réalisées le même jour avec nos équipes combinées.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Chantiers BTP</h2>
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
            Nettoyage de chantier avant réception ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Contactez Vilbert Hydro — devis rapide, PV de nettoyage remis
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
            <Link href="/nettoyage-haute-pression-sol" className="text-gray-800 font-semibold hover:underline">Nettoyage HP sol →</Link>
            <Link href="/balayage-voirie" className="text-gray-800 font-semibold hover:underline">Balayage voirie →</Link>
            <Link href="/inspection-televisee" className="text-gray-800 font-semibold hover:underline">Inspection télévisée →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
