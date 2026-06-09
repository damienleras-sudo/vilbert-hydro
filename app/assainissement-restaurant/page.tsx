import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assainissement Restaurant & Métiers de Bouche — Bac à Graisses Picardie | Vilbert Hydro",
  description:
    "Entretien bac à graisses, curage réseau cuisine, vidange fosse pour restaurants et métiers de bouche en Picardie. Obligation ICPE, fréquence légale, BSMD. Contrat annuel. ☎ 03 22 91 72 01",
  alternates: { canonical: "https://vilbert-hydro.vercel.app/assainissement-restaurant" },
};

export default function AssainissementRestaurantPage() {
  const faqItems = [
    {
      q: "Quelle est la fréquence légale d'entretien d'un bac à graisses ?",
      a: "Il n'existe pas de fréquence unique fixée par la loi, mais les règlements d'assainissement des collectivités imposent généralement un entretien dès que le bac atteint 50 % de remplissage en matières grasses. En pratique, pour un restaurant en activité normale, cela correspond à un entretien tous les 1 à 3 mois. Vilbert Hydro établit le calendrier adapté à votre établissement.",
    },
    {
      q: "Un restaurant est-il soumis à la réglementation ICPE ?",
      a: "Les restaurants dont la capacité d'accueil dépasse certains seuils (en général 500 couverts par jour) sont classés ICPE (Installation Classée pour la Protection de l'Environnement). Dans tous les cas, tout établissement de restauration est soumis aux règlements sanitaires et au règlement d'assainissement local, qui imposent un entretien régulier du bac à graisses.",
    },
    {
      q: "Vilbert Hydro fournit-il un justificatif d'entretien pour les contrôles ?",
      a: "Oui. À chaque intervention, nous remettons un bon d'intervention détaillé. Pour les vidanges de matières, le BSMD (Bordereau de Suivi des Matières de Vidange) est établi. Ces documents sont indispensables lors des contrôles des services de l'assainissement ou lors d'une inspection sanitaire.",
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
            Restaurants &amp; Métiers de Bouche
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Assainissement pour Restaurants
            <span className="block text-[#f5b800] mt-1">et Métiers de Bouche en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Bac à graisses · Curage réseau cuisine · Vidange fosse · BSMD
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention en Picardie — Somme (80), Oise (60), Aisne (02). Contrats annuels disponibles.
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
            L&apos;assainissement des restaurateurs : une obligation réglementaire
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Tout établissement de restauration est tenu de disposer d&apos;un <strong>bac à graisses</strong> (ou séparateur de graisses) conforme, régulièrement entretenu. L&apos;accumulation de graisses dans les réseaux d&apos;assainissement entraîne des bouchons, des odeurs et des risques de non-conformité sanctionnés par les services de l&apos;assainissement communal.
            </p>
            <p>
              Les établissements soumis à la <strong>réglementation ICPE</strong> (Installations Classées pour la Protection de l&apos;Environnement) doivent justifier d&apos;un entretien régulier et documenté. Vilbert Hydro vous accompagne avec des <strong>contrats de maintenance annuels</strong> incluant la traçabilité complète des interventions.
            </p>
            <p>
              Chaque vidange de bac à graisses donne lieu à la remise d&apos;un <strong>BSMD</strong> (Bordereau de Suivi des Matières de Vidange), document officiel indispensable lors des contrôles sanitaires et des inspections de l&apos;assainissement.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Nos prestations pour les restaurateurs</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🍳",
                titre: "Entretien bac à graisses",
                desc: "Vidange, nettoyage et remise en état du bac à graisses ou séparateur de graisses. BSMD systématique. Fréquence adaptée à votre activité.",
              },
              {
                icon: "💧",
                titre: "Curage réseau cuisine",
                desc: "Hydrocurage haute pression des canalisations grasses sous cuisine et plonge. Élimination des dépôts de graisses et de résidus alimentaires.",
              },
              {
                icon: "🚛",
                titre: "Vidange fosse septique",
                desc: "Si votre établissement est équipé d'une fosse non collective : vidange agréée avec remise du BSMD conforme aux exigences SPANC.",
              },
              {
                icon: "📋",
                titre: "Contrat annuel",
                desc: "Programme d'entretien planifié sur l'année. Tarifs préférentiels, rapport après chaque visite, priorité en cas d'urgence.",
              },
              {
                icon: "📄",
                titre: "Documents conformes",
                desc: "Bon d'intervention et BSMD à chaque passage. Dossier traçabilité complet pour vos contrôles sanitaires et inspections.",
              },
              {
                icon: "🚨",
                titre: "Urgences 24h/24",
                desc: "Bouchon en cuisine, fosse pleine en plein service : intervenons en urgence, y compris le soir et le week-end.",
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
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Restaurateurs</h2>
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
            Entretien bac à graisses ou contrat annuel ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Contactez Vilbert Hydro — intervention rapide en Picardie
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
