import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assainissement Industriel Picardie — Séparateur HC · Nettoyage Industriel · Déchets — Vilbert Hydro",
  description:
    "Vilbert Hydro : assainissement industriel en Picardie. Séparateur hydrocarbures, nettoyage haute pression, dégazage cuves, TrackDéchets. Somme (80), Oise (60), Aisne (02).",
  alternates: { canonical: "https://vilbert-hydro.fr/assainissement-industrie" },
};

export default function AssainissementIndustriePage() {
  const faqItems = [
    {
      q: "TrackDéchets est-il obligatoire pour mon site industriel ?",
      a: "Oui. Depuis le 1er janvier 2022, la loi AGEC rend obligatoire l'utilisation de TrackDéchets pour le suivi des déchets dangereux. Vilbert Hydro est inscrit sur la plateforme et émet les bordereaux dématérialisés pour chaque enlèvement.",
    },
    {
      q: "Intervenez-vous sur des sites ICPE ?",
      a: "Oui. Nos équipes interviennent régulièrement sur des installations classées pour la protection de l'environnement (ICPE). Nous appliquons les protocoles de sécurité requis (plan de prévention, permis de feu si nécessaire, habilitations ATEX/CATEC).",
    },
    {
      q: "Proposez-vous des contrats de maintenance industrielle ?",
      a: "Oui. Nous proposons des contrats de maintenance avec SLA (délai d'intervention garanti), planning d'interventions préventives, rapport annuel de conformité et interlocuteur dédié. Ces contrats sont adaptés aux contraintes de continuité d'exploitation.",
    },
    {
      q: "Agréments ADR : que couvrent-ils ?",
      a: "Nos agréments ADR couvrent le transport de matières dangereuses des classes 3 (liquides inflammables, hydrocarbures) et 9 (matières et objets dangereux divers). Nos véhicules et conducteurs sont certifiés pour le transport de ces déchets vers les filières d'élimination agréées.",
    },
    {
      q: "Fournissez-vous les BSD (bordereaux de suivi des déchets) ?",
      a: "Oui. Pour chaque enlèvement de déchets dangereux, nous établissons le bordereau de suivi des déchets (BSD) conforme à la réglementation. Depuis 2022, ces bordereaux sont dématérialisés via TrackDéchets. Une copie vous est transmise pour vos dossiers DREAL.",
    },
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://vilbert-hydro.fr" },
      { "@type": "ListItem", position: 2, name: "Industrie", item: "https://vilbert-hydro.fr/assainissement-industrie" },
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
            TrackDéchets · Agréments ADR · Rapport de conformité
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Assainissement Industriel en Picardie
            <span className="block text-[#f5b800] mt-1">Entreprises &amp; Sites Industriels</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Séparateur hydrocarbures · Dégazage cuves · Nettoyage HP · TrackDéchets
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention en Picardie — Somme (80), Oise (60), Aisne (02). Contrats de maintenance industrielle.
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

      {/* CONTRAINTES INDUSTRIELLES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">
            Vos contraintes industrielles : réglementation et continuité
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Les sites industriels sont soumis à des réglementations strictes : conformité <strong>ICPE</strong>, contrôles <strong>DREAL</strong>, traçabilité des déchets dangereux via <strong>TrackDéchets</strong> (obligatoire depuis la loi AGEC 2022). Toute défaillance peut entraîner des sanctions, des arrêts de production et des pénalités environnementales.
            </p>
            <p>
              Vilbert Hydro est votre partenaire industriel en Picardie : <strong>agréments ADR</strong> pour le transport de matières dangereuses, habilitations CATEC pour les espaces confinés, et maîtrise complète des procédures de traçabilité réglementaire. Nous garantissons la <strong>continuité d&apos;exploitation</strong> grâce à nos interventions planifiées et à notre astreinte d&apos;urgence.
            </p>
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Nos prestations industrielles</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⛽", titre: "Séparateur hydrocarbures", desc: "Entretien et vidange selon norme EN 858. Fréquence 1 à 4 interventions par an selon l'activité. BSD et rapport de conformité remis." },
              { icon: "💦", titre: "Nettoyage HP plateformes", desc: "Nettoyage haute pression (200 bars) des plateformes logistiques et zones de stockage. Récupération et traitement des eaux pluviales souillées." },
              { icon: "🔥", titre: "Dégazage cuves fioul/HC", desc: "Dégazage et nettoyage de cuves d'hydrocarbures selon procédures ADR et ATEX. Certificat de dégazage remis après intervention." },
              { icon: "🔧", titre: "Curage réseaux & bacs de rétention", desc: "Hydrocurage des réseaux industriels et nettoyage des bacs de rétention. Récupération des effluents et filière d'élimination agréée." },
              { icon: "🚛", titre: "Vidange fosses & bacs toutes eaux", desc: "Vidange des fosses industrielles et bacs de décantation. TrackDéchets, ADR, BSD conformes à la réglementation." },
              { icon: "🧹", titre: "Balayage plateformes logistiques", desc: "Balayage-aspiration des plateformes, cours et voiries industrielles. Élimination des poussières, sables et résidus de production." },
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

      {/* AGRÉMENTS */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">Nos agréments pour l&apos;industrie</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🚚", titre: "ADR", desc: "Transport de matières dangereuses classes 3 et 9 (hydrocarbures, déchets dangereux)." },
              { icon: "📱", titre: "TrackDéchets", desc: "Plateforme dématérialisée pour le suivi des déchets dangereux. BSD numériques conformes loi AGEC 2022." },
              { icon: "⚡", titre: "Habilitation électrique N1/N2", desc: "Interventions en environnement électrique basse et haute tension sur sites industriels." },
              { icon: "🏭", titre: "CATEC espaces confinés", desc: "Certification pour les travaux en espaces confinés (cuves, regards, fosses, galeries)." },
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

      {/* CONTRAT DE MAINTENANCE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Contrat de maintenance industriel</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "📅", titre: "Interventions planifiées", desc: "Programme d'entretien annuel adapté à votre site : fréquences, équipements, contraintes de production." },
              { icon: "📊", titre: "Rapport annuel de conformité", desc: "Synthèse des interventions, résultats d'analyses, recommandations. Document remis pour vos dossiers DREAL." },
              { icon: "🚨", titre: "Priorité urgences", desc: "SLA garanti pour les urgences. Astreinte 24h/24 pour vos installations critiques." },
              { icon: "👤", titre: "Interlocuteur dédié", desc: "Un technicien référent connaît votre site, vos équipements et vos contraintes spécifiques." },
            ].map((e) => (
              <div key={e.titre} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow flex gap-4">
                <div className="text-3xl flex-shrink-0">{e.icon}</div>
                <div>
                  <h3 className="font-black text-[#1b4f8c] mb-2 text-sm">{e.titre}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-black text-[#1b4f8c] mb-4">Zones industrielles couvertes</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="flex flex-wrap gap-3">
            {["ZI Amiens Nord", "ZI Longueau", "ZI Rivery", "ZI Abbeville", "Saint-Quentin", "Compiègne", "Beauvais"].map((z) => (
              <span key={z} className="bg-[#1b4f8c] text-white text-xs font-bold px-4 py-2 rounded-full">{z}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Industrie</h2>
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
            Assainissement industriel ou contrat de maintenance ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Contactez Vilbert Hydro — devis gratuit, interlocuteur dédié en Picardie
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
            <Link href="/separateur-hydrocarbures" className="text-gray-800 font-semibold hover:underline">Séparateur hydrocarbures →</Link>
            <Link href="/degazage-cuve-fioul" className="text-gray-800 font-semibold hover:underline">Dégazage cuve fioul →</Link>
            <Link href="/nettoyage-haute-pression-sol" className="text-gray-800 font-semibold hover:underline">Nettoyage HP sol →</Link>
            <Link href="/contrat-maintenance" className="text-gray-800 font-semibold hover:underline">Contrat maintenance →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
