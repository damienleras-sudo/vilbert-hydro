import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assainissement Copropriété Picardie — Curage, Vidange, Relevage | Vilbert Hydro",
  description:
    "Vilbert Hydro, spécialiste assainissement pour syndicats de copropriété en Picardie. Curage réseaux collectifs, vidange fosses, maintenance postes de relevage, contrat annuel, BSMD. ☎ 03 22 91 72 01",
  alternates: { canonical: "https://vilbert-hydro.fr/assainissement-copropriete" },
};

export default function AssainissementCopropietePage() {
  const faqItems = [
    {
      q: "Qui est responsable de l'assainissement dans une copropriété ?",
      a: "Le syndicat de copropriété, représenté par le syndic, est responsable de l'entretien et de la conformité des équipements d'assainissement collectifs : réseaux d'eaux usées, fosses septiques ou toutes eaux communes, postes de relevage. Un contrat de maintenance avec un prestataire agréé est vivement conseillé.",
    },
    {
      q: "À quelle fréquence faut-il curer les réseaux d'une copropriété ?",
      a: "La fréquence dépend du nombre de logements, du type de réseau et de la nature des rejets. En règle générale, un curage préventif annuel est recommandé pour les copropriétés de plus de 20 lots. Vilbert Hydro établit un programme de maintenance sur mesure après diagnostic.",
    },
    {
      q: "Vilbert Hydro propose-t-il un contrat de maintenance pour les copropriétés ?",
      a: "Oui. Nous proposons des contrats annuels incluant curage préventif des réseaux, vidange des fosses, maintenance des postes de relevage et rapport d'intervention écrit. Le contrat offre une tarification préférentielle et une priorité d'intervention en cas d'urgence.",
    },
  ];

  return (
    <>
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
            Syndicats de copropriété
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Assainissement pour Syndicats de Copropriété
            <span className="block text-[#f5b800] mt-1">en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Curage réseaux collectifs · Vidange fosses · Relevage · Contrats annuels
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention dans toute la Picardie : Somme (80), Oise (60), Aisne (02). Urgences 24h/24.
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

      {/* INTRO */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">
            Vilbert Hydro, partenaire des syndics de copropriété
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              La gestion de l&apos;assainissement en copropriété est une responsabilité collective qui incombe au syndic. Réseaux d&apos;eaux usées bouchés, fosses septiques à vidanger, postes de relevage en panne : Vilbert Hydro intervient pour toutes les problématiques d&apos;assainissement des immeubles et résidences en Picardie.
            </p>
            <p>
              Grâce à notre <strong>agrément vidangeur préfectoral</strong> et à nos équipes formées CATEC (travaux en espaces confinés), nous prenons en charge l&apos;intégralité de vos besoins : du curage préventif à l&apos;urgence nocturne, en passant par la maintenance contractuelle de vos postes de relevage.
            </p>
            <p>
              Chaque intervention donne lieu à un <strong>rapport écrit et à la remise du BSMD</strong> lorsque des matières de vidange sont transportées, garantissant la traçabilité exigée par les règlements de copropriété et les organismes de contrôle.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Nos prestations pour les copropriétés</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🔧",
                titre: "Curage des réseaux collectifs",
                desc: "Hydrocurage haute pression des canalisations d'eaux usées et pluviales de la résidence. Décolmatage, nettoyage des regards, débouchage curatif et préventif.",
              },
              {
                icon: "🚛",
                titre: "Vidange de fosses",
                desc: "Vidange des fosses septiques et fosses toutes eaux collectives. Agrément préfectoral, BSMD systématique, conformité SPANC garantie.",
              },
              {
                icon: "⚙️",
                titre: "Maintenance postes de relevage",
                desc: "Entretien préventif et curatif des postes de relevage (pompes, flotteurs, armoires de commande, variateurs). Intervention d'urgence 24h/24.",
              },
              {
                icon: "📹",
                titre: "Inspection télévisée",
                desc: "Diagnostic par caméra robotisée des réseaux enterrés. Localisation précise des obstructions, fissures et déformations. Rapport vidéo remis.",
              },
              {
                icon: "📋",
                titre: "Devis annuel",
                desc: "Contrat de maintenance adapté au nombre de lots, à la nature des équipements et à la fréquence d'intervention. Tarifs préférentiels contractuels.",
              },
              {
                icon: "🚨",
                titre: "Urgences 24h/24",
                desc: "Refoulement, panne de relevage, fosse pleine : nos équipes interviennent nuit et jour, week-ends et jours fériés inclus.",
              },
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

      {/* ENGAGEMENTS */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">Nos engagements pour les syndics</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📝", titre: "Rapport d'intervention", desc: "Compte-rendu écrit après chaque intervention, transmissible aux copropriétaires et aux assemblées générales." },
              { icon: "💰", titre: "Facturation claire", desc: "Devis préalable, facturation détaillée, pas de frais cachés. Tarifs contractuels stables sur la durée." },
              { icon: "📆", titre: "Contrat annuel", desc: "Programme de maintenance planifié : curage, vidange, contrôles. Vous anticipez les dépenses et évitez les urgences coûteuses." },
              { icon: "⚡", titre: "Réactivité", desc: "Priorité d'intervention pour nos clients sous contrat. Astreinte 24h/24 pour les urgences." },
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
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Syndics de copropriété</h2>
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
            Un projet d&apos;assainissement pour votre copropriété ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Contactez Vilbert Hydro pour un devis contrat de maintenance
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
          <div className="mt-4 flex justify-center gap-4 text-sm">
            <Link href="/services" className="text-gray-800 font-semibold hover:underline">Nos services →</Link>
            <Link href="/contrat-maintenance" className="text-gray-800 font-semibold hover:underline">Contrats maintenance →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
