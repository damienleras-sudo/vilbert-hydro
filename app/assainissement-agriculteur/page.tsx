import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assainissement Agricole Picardie — Vidange Fosse, Curage | Vilbert Hydro",
  description:
    "Assainissement pour exploitations agricoles en Picardie : vidange fosses et cuves, curage réseaux d'exploitation, maintenance postes de relevage agricoles, conformité réglementaire. ☎ 03 22 91 72 01",
  alternates: { canonical: "https://vilbert-hydro.fr/assainissement-agriculteur" },
};

export default function AssainissementAgriculteurPage() {
  const faqItems = [
    {
      q: "Quelles sont les obligations d'assainissement pour une exploitation agricole ?",
      a: "Les exploitations agricoles sont soumises à différentes réglementations selon leur nature et leur taille (ICPE, règlement sanitaire départemental). Les fosses septiques des logements de l'exploitation doivent être vidangées par un prestataire agréé avec remise du BSMD. Les cuves et réseaux d'eaux de lavage doivent être entretenus pour prévenir la pollution des sols et des nappes.",
    },
    {
      q: "Vilbert Hydro intervient-il sur des cuves et fosses de grande capacité ?",
      a: "Oui. Nos camions vidangeurs haute capacité permettent de traiter des fosses et cuves de grand volume, courantes en milieu agricole. Nous adaptons notre matériel selon les contraintes d'accès propres aux exploitations.",
    },
    {
      q: "Puis-je bénéficier d'un contrat de maintenance pour mon exploitation ?",
      a: "Oui. Vilbert Hydro propose des contrats de maintenance sur mesure pour les agriculteurs : vidanges planifiées, curage des réseaux, entretien des postes de relevage. Un contrat annuel vous permet d'anticiper les coûts et de bénéficier d'une priorité d'intervention en cas d'urgence.",
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
            Exploitations agricoles
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Assainissement pour Exploitations Agricoles
            <span className="block text-[#f5b800] mt-1">en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Vidange fosses et cuves · Curage réseaux · Postes de relevage · Conformité
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention en Picardie — Somme (80), Oise (60), Aisne (02). Matériel adapté au milieu agricole.
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
            L&apos;assainissement agricole en Picardie
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Les exploitations agricoles génèrent des eaux usées spécifiques : eaux de lavage des bâtiments d&apos;élevage et du matériel, effluents de fromagerie ou de cave, eaux domestiques des logements d&apos;exploitation. La gestion de ces effluents est encadrée par la réglementation (règlement sanitaire départemental, ICPE selon les seuils).
            </p>
            <p>
              Vilbert Hydro intervient sur toutes les problématiques d&apos;assainissement agricole en Picardie : vidange de fosses septiques et toutes eaux, aspiration de cuves d&apos;effluents, curage des réseaux d&apos;exploitation, entretien et dépannage des postes de relevage. Notre matériel est adapté aux <strong>accès difficiles</strong> et aux grands volumes.
            </p>
            <p>
              Chaque vidange donne lieu à la remise d&apos;un <strong>BSMD</strong> (Bordereau de Suivi des Matières de Vidange) lorsque des matières sont transportées, attestant de la conformité du traitement et de l&apos;acheminement vers les filières agréées.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Nos prestations pour les agriculteurs</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🚛",
                titre: "Vidange fosses et cuves",
                desc: "Vidange de fosses septiques, fosses toutes eaux et cuves d'effluents agricoles. Matériel haute capacité, accès aux zones difficiles, BSMD systématique.",
              },
              {
                icon: "💧",
                titre: "Curage réseaux d'exploitation",
                desc: "Hydrocurage haute pression des réseaux d'eaux usées de lavage, bâtiments d'élevage, fromageries, caves. Élimination des dépôts et obstructions.",
              },
              {
                icon: "⚙️",
                titre: "Postes de relevage agricoles",
                desc: "Entretien préventif et curatif des postes de relevage : pompes, flotteurs, armoires électriques. Dépannage d'urgence 24h/24.",
              },
              {
                icon: "🔍",
                titre: "Inspection télévisée",
                desc: "Diagnostic caméra des canalisations enterrées pour détecter obstructions, fissures et déformations avant travaux.",
              },
              {
                icon: "📋",
                titre: "Conformité réglementaire",
                desc: "Nos interventions sont documentées et traçables. BSMD remis pour chaque vidange, rapports d'intervention disponibles pour les contrôles.",
              },
              {
                icon: "📆",
                titre: "Contrat de maintenance",
                desc: "Programme annuel sur mesure pour votre exploitation. Anticipez les pannes, bénéficiez de tarifs préférentiels et d'une priorité d'intervention.",
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

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Agriculteurs</h2>
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
            Besoin d&apos;assainissement pour votre exploitation ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Contactez Vilbert Hydro — intervention en Picardie
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
