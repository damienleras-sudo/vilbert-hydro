import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vidange Fosse Septique Picardie — Agréé Vidangeur · Somme · Oise · Aisne — 03 22 91 72 01",
  description: "Vilbert Hydro, agréé vidangeur préfectoral : vidange fosse septique en Picardie (Somme 80, Oise 60, Aisne 02). Obligation légale, BSMD, conformité SPANC. Urgences 24h/24. Devis gratuit. ☎ 03 22 91 72 01",
  alternates: { canonical: "https://vilbert-hydro.vercel.app/vidange-fosse-septique" },
  keywords: ["vidange fosse septique", "vidange fosse septique Picardie", "vidange fosse septique Somme", "vidange fosse septique Amiens", "vidange fosse septique Compiègne", "vidange fosse septique Beauvais", "agréé vidangeur", "BSMD", "SPANC", "fosse toutes eaux", "assainissement non collectif", "ANC"],
};

export default function VidangeFosseSeptiquePage() {
  const faqItems = [
    {
      q: "À quelle fréquence dois-je vidanger ma fosse septique ?",
      a: "Tous les 4 ans minimum selon l'arrêté de 2009, mais le SPANC de votre commune peut imposer une fréquence plus courte selon la taille de votre installation et le nombre d'occupants.",
    },
    {
      q: "Qu'est-ce que le BSMD ?",
      a: "Le Bordereau de Suivi des Matières de vidange est un document officiel attestant que la vidange a été réalisée par un prestataire agréé et que les matières ont été acheminées vers une filière de traitement conforme. Il vous est remis à chaque intervention.",
    },
    {
      q: "Mon prestataire doit-il être agréé ?",
      a: "Oui, obligatoirement. L'arrêté du 7 septembre 2009 impose que la vidange soit réalisée par une entreprise disposant d'un agrément préfectoral. Vilbert Hydro est agréé vidangeur.",
    },
    {
      q: "Quelle différence entre fosse septique et fosse toutes eaux ?",
      a: "La fosse septique ne reçoit que les eaux-vannes (WC), tandis que la fosse toutes eaux reçoit l'ensemble des eaux usées domestiques (WC, lavabos, cuisine, salle de bain). Depuis 1992, la fosse toutes eaux est la norme pour les nouvelles installations. Vilbert Hydro intervient sur les deux types.",
    },
    {
      q: "Que se passe-t-il si je ne vidange pas ?",
      a: "En l'absence de vidange régulière, la fosse se sature entraînant des odeurs, des refoulements et un risque de pollution des nappes phréatiques. Le SPANC peut infliger des sanctions et, lors d'une vente immobilière, une fosse non entretenue peut bloquer la transaction ou entraîner une dépréciation du bien.",
    },
  ];

  return (
    <>
      {/* SECTION 1 — HERO */}
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
            Agréé vidangeur préfectoral
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Vidange Fosse Septique en Picardie
            <span className="block text-[#f5b800] mt-1">Agréé Vidangeur</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Agrément préfectoral · Bordereau BSMD · Conformité SPANC garantie
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention en Picardie : Somme (80), Oise (60), Aisne (02). Urgences 24h/24.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322917201"
              className="bg-[#f5b800] text-gray-900 font-black px-10 py-4 rounded text-xl hover:bg-[#ffd44d] transition-colors shadow-lg"
            >
              📞 03 22 91 72 01
            </a>
            <Link
              href="/services#vidange"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded text-base hover:bg-white hover:text-[#1b4f8c] transition-colors"
            >
              Découvrir nos tarifs
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* SECTION 2 — OBLIGATION LÉGALE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">
            Vidanger sa fosse septique : une obligation légale
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              L&apos;<strong>arrêté du 7 septembre 2009</strong> relatif aux modalités de l&apos;assainissement non collectif (ANC) impose la vidange régulière de votre fosse septique. La fréquence minimale est de <strong>tous les 4 ans</strong>, mais le SPANC (Service Public d&apos;Assainissement Non Collectif) de votre commune peut exiger une fréquence plus courte selon la taille de l&apos;installation et le nombre d&apos;occupants du foyer.
            </p>
            <p>
              En cas de non-conformité, les risques sont multiples : sanctions administratives du SPANC, pollution des nappes phréatiques et des cours d&apos;eau, et <strong>blocage lors d&apos;une vente immobilière</strong>. Depuis 2011, un diagnostic de l&apos;assainissement non collectif est obligatoire à la vente d&apos;un bien immobilier.
            </p>
            <p>
              La loi impose également que la vidange soit réalisée par un <strong>prestataire agréé</strong> disposant d&apos;un agrément préfectoral pour la collecte et le transport des matières de vidange. À chaque intervention, Vilbert Hydro vous remet un <strong>Bordereau de Suivi des Matières de Vidange (BSMD)</strong>, document officiel attestant de la conformité de l&apos;opération.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — POURQUOI VILBERT HYDRO */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">
              Pourquoi choisir Vilbert Hydro ?
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📋",
                titre: "Agrément vidangeur préfectoral",
                desc: "Vilbert Hydro détient l'agrément préfectoral obligatoire pour la vidange et le transport des matières de vidange (arrêté du 7 sept. 2009).",
              },
              {
                icon: "📄",
                titre: "BSMD remis systématiquement",
                desc: "Le Bordereau de Suivi des Matières de Vidange vous est remis à chaque intervention. Conservez-le précieusement pour le SPANC et lors d'une vente.",
              },
              {
                icon: "🚛",
                titre: "Camions vidangeurs équipés",
                desc: "Notre flotte de camions vidangeurs haute capacité assure une aspiration intégrale des boues et leur acheminement vers des filières agréées.",
              },
              {
                icon: "🏅",
                titre: "30 ans d'expérience",
                desc: "Filiale du Groupe Vilbert, nous intervenons en Picardie depuis plus de 30 ans pour tous types de fosses : septiques, toutes eaux, micro-stations.",
              },
            ].map((c) => (
              <div key={c.titre} className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{c.icon}</div>
                <h3 className="font-black text-[#1b4f8c] text-sm mb-2">{c.titre}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — DÉROULEMENT */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">Comment se déroule une vidange ?</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="space-y-4">
            {[
              {
                num: "1",
                titre: "Prise de rendez-vous",
                desc: "Appelez le 03 22 91 72 01 ou écrivez-nous. Nous convenons d'un créneau adapté à vos disponibilités.",
              },
              {
                num: "2",
                titre: "Intervention sur site",
                desc: "Nos techniciens se déplacent avec le camion vidangeur équipé. Accès à la fosse vérifié et sécurisé.",
              },
              {
                num: "3",
                titre: "Aspiration intégrale des boues",
                desc: "Le camion aspire l'intégralité des boues, des flottants et des eaux de la fosse. Contrôle visuel de l'état de la fosse.",
              },
              {
                num: "4",
                titre: "Transport vers filière agréée",
                desc: "Les matières de vidange sont acheminées vers une station de traitement agréée, dans le respect de la réglementation.",
              },
              {
                num: "5",
                titre: "Remise du BSMD",
                desc: "Vous recevez le Bordereau de Suivi des Matières de Vidange, document officiel à conserver pour le SPANC et les actes notariaux.",
              },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-5 bg-white/10 rounded-xl p-5">
                <div className="flex-shrink-0 w-10 h-10 bg-[#f5b800] text-gray-900 rounded-full flex items-center justify-center font-black text-lg">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-black text-[#f5b800] mb-1">{step.titre}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — ZONES */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">
              Vidange fosse septique en Picardie
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto">
              Basés à Camon (Somme), nous intervenons dans toute la Picardie et les départements limitrophes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-black text-[#1b4f8c] mb-4 flex items-center gap-2">
                <span className="bg-[#1b4f8c] text-white text-xs font-bold px-2 py-0.5 rounded">80</span>
                Somme
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {["Amiens", "Abbeville", "Péronne", "Albert", "Montdidier", "Doullens", "Camon", "Et tout le département"].map((v) => (
                  <li key={v} className="flex items-center gap-2">
                    <span className="text-[#1b4f8c] font-black text-xs">✓</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-black text-[#1b4f8c] mb-4 flex items-center gap-2">
                <span className="bg-[#1b4f8c] text-white text-xs font-bold px-2 py-0.5 rounded">60</span>
                Oise
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {["Compiègne", "Beauvais", "Noyon", "Senlis", "Et environs"].map((v) => (
                  <li key={v} className="flex items-center gap-2">
                    <span className="text-[#1b4f8c] font-black text-xs">✓</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-black text-[#1b4f8c] mb-4 flex items-center gap-2">
                <span className="bg-[#1b4f8c] text-white text-xs font-bold px-2 py-0.5 rounded">02</span>
                Aisne
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                {["Saint-Quentin", "Soissons", "Laon", "Et environs"].map((v) => (
                  <li key={v} className="flex items-center gap-2">
                    <span className="text-[#1b4f8c] font-black text-xs">✓</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">
              FAQ — Vidange fosse septique
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-black text-[#1b4f8c] mb-3 text-sm md:text-base">
                  {item.q}
                </h3>
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

      {/* SECTION 7 — CTA FINAL */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Besoin d&apos;une vidange de fosse septique ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Contactez Vilbert Hydro — agréé vidangeur en Picardie
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg mb-4"
          >
            📞 03 22 91 72 01
          </a>
          <p className="text-gray-600 text-sm">Devis gratuit · Intervention rapide · BSMD systématique</p>
        </div>
      </section>

      {/* SECTION 8 — LIENS VILLES SEO */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4">
            Débouchage et assainissement — toutes nos villes
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Débouchage Amiens", slug: "amiens" },
              { label: "Débouchage Abbeville", slug: "abbeville" },
              { label: "Débouchage Péronne", slug: "peronne" },
              { label: "Débouchage Albert", slug: "albert" },
              { label: "Débouchage Montdidier", slug: "montdidier" },
              { label: "Débouchage Doullens", slug: "doullens" },
              { label: "Débouchage Arras", slug: "arras" },
              { label: "Débouchage Compiègne", slug: "compiegne" },
              { label: "Débouchage Beauvais", slug: "beauvais" },
              { label: "Débouchage Saint-Quentin", slug: "saint-quentin" },
            ].map((v) => (
              <Link
                key={v.slug}
                href={`/debouchage-${v.slug}`}
                className="text-xs text-[#1b4f8c] hover:underline border border-[#1b4f8c]/20 px-3 py-1.5 rounded-full"
              >
                {v.label}
              </Link>
            ))}
            <Link
              href="/services"
              className="text-xs text-[#1b4f8c] hover:underline border border-[#1b4f8c]/20 px-3 py-1.5 rounded-full font-bold"
            >
              Tous nos services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
