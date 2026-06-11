import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guide Assainissement Picardie 2025 — Réglementation, Services, Zones — Vilbert Hydro",
  description:
    "Guide expert de l'assainissement en Picardie (Somme, Oise, Aisne) : réglementation locale, SPANC, services disponibles, prix, contacts utiles. Par Vilbert Hydro, 30 ans d'expérience.",
  alternates: { canonical: "https://vilbert-hydro.fr/guide-assainissement-picardie" },
};

export default function GuideAssainissementPicardieePage() {
  const faqItems = [
    {
      q: "Comment savoir si ma maison est en assainissement collectif ou non collectif ?",
      a: "Contactez votre mairie ou consultez le règlement d'assainissement de votre commune. Vous pouvez aussi vérifier si un réseau d'égout public passe devant votre propriété. En zone rurale picarde, la majorité des logements sont en assainissement non collectif (ANC).",
    },
    {
      q: "Quelles aides financières existent pour réhabiliter mon assainissement en Picardie ?",
      a: "L'Agence de l'Eau Seine-Normandie propose des subventions pour la réhabilitation des installations ANC non conformes, sous conditions de ressources. Certaines collectivités locales apportent également un complément. Renseignez-vous auprès de votre SPANC ou de la mairie.",
    },
    {
      q: "Le SPANC peut-il m'obliger à réhabiliter ma fosse ?",
      a: "Oui. Suite à un contrôle, le SPANC peut classer votre installation comme non conforme avec risque sanitaire ou environnemental. Dans ce cas, vous avez généralement 1 à 4 ans (selon la gravité) pour réaliser les travaux prescrits.",
    },
    {
      q: "Mon terrain en Picardie est argileux. Quel système ANC choisir ?",
      a: "Les sols argileux picards présentent une faible perméabilité incompatible avec un épandage classique. Une micro-station d'épuration ou un filtre compact avec rejet en surface (fossé, cours d'eau avec autorisation) sont généralement prescrits par le SPANC dans ces zones.",
    },
    {
      q: "Vilbert Hydro intervient-il dans toute la Picardie ?",
      a: "Oui. Vilbert Hydro, basé à Camon (Somme), couvre l'ensemble des trois départements picards : Somme (80), Oise (60) et Aisne (02), ainsi que les zones limitrophes. Nous intervenons pour la vidange, le débouchage, l'hydrocurage et l'inspection télévisée.",
    },
    {
      q: "Comment contacter le SPANC de ma commune en Picardie ?",
      a: "Le SPANC est généralement rattaché à la communauté de communes ou d'agglomération dont dépend votre commune. Commencez par contacter votre mairie qui vous orientera vers le bon interlocuteur. En Somme, vous pouvez aussi consulter le site du Conseil Départemental 80.",
    },
  ];

  const villes = [
    { ville: "Amiens", cp: "80000", dept: "80" },
    { ville: "Abbeville", cp: "80100", dept: "80" },
    { ville: "Albert", cp: "80300", dept: "80" },
    { ville: "Montdidier", cp: "80500", dept: "80" },
    { ville: "Péronne", cp: "80200", dept: "80" },
    { ville: "Doullens", cp: "80600", dept: "80" },
    { ville: "Compiègne", cp: "60200", dept: "60" },
    { ville: "Beauvais", cp: "60000", dept: "60" },
    { ville: "Noyon", cp: "60400", dept: "60" },
    { ville: "Senlis", cp: "60300", dept: "60" },
    { ville: "Creil", cp: "60100", dept: "60" },
    { ville: "Chantilly", cp: "60500", dept: "60" },
    { ville: "Saint-Quentin", cp: "02100", dept: "02" },
    { ville: "Soissons", cp: "02200", dept: "02" },
    { ville: "Laon", cp: "02000", dept: "02" },
    { ville: "Château-Thierry", cp: "02400", dept: "02" },
    { ville: "Hirson", cp: "02500", dept: "02" },
    { ville: "Vervins", cp: "02140", dept: "02" },
    { ville: "Guise", cp: "02120", dept: "02" },
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
              { "@type": "ListItem", position: 2, name: "Guide Assainissement Picardie 2025", item: "https://vilbert-hydro.fr/guide-assainissement-picardie" },
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
            Guide territorial 2025
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Guide de l&apos;Assainissement en Picardie 2025
            <span className="block text-[#f5b800] mt-1">Somme · Oise · Aisne</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Réglementation locale · SPANC · Services disponibles · Zones couvertes
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Par Vilbert Hydro, expert en assainissement en Picardie depuis 30 ans.
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
              Demander un devis
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* SECTION 1 — Collectif vs non collectif */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Assainissement collectif vs non collectif en Picardie</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              En France, chaque logement dépend soit du <strong>réseau d&apos;assainissement collectif</strong> (égouts publics vers une station d&apos;épuration), soit de l&apos;<strong>assainissement non collectif (ANC)</strong> — autrement appelé assainissement individuel ou autonome.
            </p>
            <p>
              En Picardie, environ <strong>20 % des logements</strong> sont en ANC. Cette proportion monte à plus de 60 % dans les zones rurales. Les principales zones rurales à forte concentration ANC sont :
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 not-prose">
              {["Pays du Coquelicot", "Santerre", "Vimeu", "Ponthieu", "Thiérache", "Pays de Bray", "Noyonnais", "Soissonnais rural", "Laonnois"].map((z) => (
                <div key={z} className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 text-sm text-[#1b4f8c] font-medium">
                  <span className="text-[#f5b800]">●</span> {z}
                </div>
              ))}
            </div>
            <p>
              Les grandes agglomérations (Amiens, Compiègne, Beauvais, Saint-Quentin) sont quasi intégralement raccordées au réseau collectif. En dehors de ces pôles urbains, la situation est très variable d&apos;une commune à l&apos;autre.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SPANC en Picardie */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Les SPANC en Picardie</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <p className="text-gray-600 mb-6">Le SPANC (Service Public d&apos;Assainissement Non Collectif) est la structure publique chargée du contrôle des installations ANC. Il est organisé à l&apos;échelle des communautés de communes ou d&apos;agglomération.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                dept: "80",
                nom: "Somme",
                spanc: [
                  "CA Amiens Métropole",
                  "CA Baie de Somme",
                  "CC Pays du Coquelicot",
                  "CC Haute Somme",
                  "CC Terre de Picardie",
                ],
              },
              {
                dept: "60",
                nom: "Oise",
                spanc: [
                  "CA Creil Sud Oise",
                  "CA du Beauvaisis",
                  "CA de la Région de Compiègne",
                  "CC Picardie Verte",
                  "CC des Sources de l&apos;Automne",
                ],
              },
              {
                dept: "02",
                nom: "Aisne",
                spanc: [
                  "CA Saint-Quentin",
                  "CA du Soissonnais",
                  "CC de la Thiérache",
                  "CC du Laonnois",
                  "CC du Pays de Château-Thierry",
                ],
              },
            ].map((d) => (
              <div key={d.dept} className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#1b4f8c] text-white text-sm font-black px-2.5 py-1 rounded">{d.dept}</span>
                  <h3 className="font-black text-[#1b4f8c] text-lg">{d.nom}</h3>
                </div>
                <ul className="space-y-2">
                  {d.spanc.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#1b4f8c] font-black mt-0.5">✓</span>
                      <span dangerouslySetInnerHTML={{ __html: s }} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">La liste n&apos;est pas exhaustive. Votre mairie vous indiquera le SPANC compétent pour votre commune.</p>
        </div>
      </section>

      {/* SECTION 3 — Réglementation spécifique Picardie */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Spécificités réglementaires en Picardie</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="space-y-5">
            {[
              {
                titre: "Sols argileux et faible perméabilité",
                texte: "Une large partie du territoire picard (Thiérache, Santerre, Pays de Bray) présente des sols argileux lourds à très faible perméabilité. Ces sols sont incompatibles avec un épandage classique. Le SPANC impose alors généralement une micro-station d'épuration ou un filtre compact avec rejet vers un exutoire autorisé.",
              },
              {
                titre: "Nappes phréatiques sensibles — Crétacé de la Craie",
                texte: "L'aquifère crayeux de Picardie (Crétacé de la Craie) est une ressource stratégique pour l'eau potable. Les installations ANC à proximité de captages AEP (Alimentation en Eau Potable) font l'objet de règles renforcées et d'une surveillance accrue par les DDT.",
              },
              {
                titre: "Plans d'épandage réglementés par les DDT",
                texte: "Les Directions Départementales des Territoires (DDT Somme, DDT Oise, DDT Aisne) encadrent strictement les plans d'épandage en zones sensibles. Tout projet de nouvelle installation ou de réhabilitation en zone protégée doit être soumis à instruction préalable.",
              },
              {
                titre: "Obligations renforcées dans les périmètres de captage",
                texte: "Les propriétaires dont l'installation ANC est située dans un périmètre de protection de captage (PPR) peuvent être soumis à des obligations de réhabilitation prioritaires, indépendamment de l'état de leur installation.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white/10 rounded-xl p-5">
                <h3 className="font-black text-[#f5b800] mb-2">{item.titre}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Services Vilbert Hydro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Services disponibles en Picardie par Vilbert Hydro</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto text-sm">Basés à Camon (Somme), nous couvrons l&apos;intégralité de la Picardie avec notre flotte de véhicules spécialisés.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🚛", titre: "Vidange fosse septique", href: "/vidange-fosse-septique", desc: "Agréé vidangeur préfectoral, BSMD systématique, toutes fosses toutes eaux et septiques strictes." },
              { icon: "🔧", titre: "Débouchage canalisation", href: "/debouchage-canalisation", desc: "Débouchage par hydrocurage haute pression, furet motorisé. Intervention rapide 24h/24." },
              { icon: "💧", titre: "Hydrocurage haute pression", href: "/hydrocurage-haute-pression", desc: "Nettoyage de réseaux collectifs et particuliers, collectivités, industriels." },
              { icon: "📷", titre: "Inspection télévisée", href: "/inspection-televisee", desc: "Caméra de diagnostic des canalisations. Rapport vidéo et cartographie des défauts." },
              { icon: "⚙️", titre: "Maintenance poste de relevage", href: "/maintenance-poste-relevage", desc: "Entretien préventif et curatif des postes de relevage pour collectivités et particuliers." },
              { icon: "🛢️", titre: "Dégazage cuve fioul", href: "/degazage-cuve-fioul", desc: "Dégazage, nettoyage et neutralisation de cuves domestiques et industrielles." },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-[#1b4f8c]/20 transition-all">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-black text-[#1b4f8c] text-sm mb-2 group-hover:underline">{s.titre}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Villes couvertes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Communes et villes couvertes</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#1b4f8c] text-white">
                  <th className="px-4 py-3 text-left font-black">Commune</th>
                  <th className="px-4 py-3 text-left font-black">Code postal</th>
                  <th className="px-4 py-3 text-left font-black">Département</th>
                </tr>
              </thead>
              <tbody>
                {villes.map((v, i) => (
                  <tr key={v.ville} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-[#1b4f8c] border-b border-gray-100">{v.ville}</td>
                    <td className="px-4 py-3 text-gray-700 border-b border-gray-100">{v.cp}</td>
                    <td className="px-4 py-3 border-b border-gray-100">
                      <span className="bg-[#1b4f8c] text-white text-xs font-bold px-2 py-0.5 rounded">{v.dept}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Et toutes les communes des trois départements. Nous intervenons également dans les zones limitrophes : Nord (59), Pas-de-Calais (62), Seine-Maritime (76), Val-d&apos;Oise (95).</p>
        </div>
      </section>

      {/* SECTION 6 — Contacts utiles */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Contacts utiles</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                org: "Vilbert Hydro",
                role: "Votre prestataire assainissement en Picardie",
                contact: "03 22 91 72 01",
                href: "tel:0322917201",
                highlight: true,
              },
              {
                org: "Agence de l&apos;Eau Seine-Normandie",
                role: "Aides financières réhabilitation ANC",
                contact: "www.eau-seine-normandie.fr",
                href: "https://www.eau-seine-normandie.fr",
              },
              {
                org: "DDTM Somme",
                role: "Réglementation et autorisations",
                contact: "www.somme.gouv.fr",
                href: "https://www.somme.gouv.fr",
              },
              {
                org: "SPANC de votre commune",
                role: "Contrôle et conformité ANC",
                contact: "Contacter votre mairie",
                href: null,
              },
            ].map((c) => (
              <div key={c.org} className={`rounded-xl p-5 border ${c.highlight ? "bg-[#1b4f8c] border-[#1b4f8c] text-white" : "bg-gray-50 border-gray-200"}`}>
                <p className={`font-black text-sm mb-1 ${c.highlight ? "text-[#f5b800]" : "text-[#1b4f8c]"}`} dangerouslySetInnerHTML={{ __html: c.org }} />
                <p className={`text-xs mb-2 ${c.highlight ? "text-blue-100" : "text-gray-500"}`}>{c.role}</p>
                {c.href ? (
                  <a href={c.href} className={`text-sm font-bold ${c.highlight ? "text-white underline" : "text-[#1b4f8c] underline"}`} dangerouslySetInnerHTML={{ __html: c.contact }} />
                ) : (
                  <span className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: c.contact }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Assainissement en Picardie</h2>
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
            Votre expert assainissement en Picardie
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Devis gratuit · Intervention rapide · 30 ans d&apos;expérience
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg mb-4"
          >
            📞 03 22 91 72 01
          </a>
          <p className="text-gray-600 text-sm">Somme (80) · Oise (60) · Aisne (02)</p>
        </div>
      </section>

      {/* Liens internes */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4">Pages utiles</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Guide fosse septique", href: "/guide-fosse-septique" },
              { label: "Vidange fosse septique", href: "/vidange-fosse-septique" },
              { label: "Tarifs assainissement", href: "/tarifs-assainissement-picardie" },
              { label: "Inspection télévisée", href: "/inspection-televisee" },
              { label: "FAQ", href: "/faq" },
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
