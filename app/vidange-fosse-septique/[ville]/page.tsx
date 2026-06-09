import type { Metadata } from "next";
import Link from "next/link";
import { villes } from "@/lib/villes";
import { notFound } from "next/navigation";

const SLUGS = ["amiens", "compiegne", "beauvais", "saint-quentin", "abbeville", "peronne"];

const zonesAutour: Record<string, string[]> = {
  amiens: ["Longueau", "Rivery", "Camon", "Dury", "Glisy", "Boves", "Sains-en-Amiénois", "Thézy-Glimont", "Villers-Bocage", "Corbie"],
  compiegne: ["Margny-lès-Compiègne", "Clairoix", "Venette", "Jonquières", "Compiègne", "Lacroix-Saint-Ouen", "Verberie", "Noyon", "Ribécourt-Dreslincourt", "Lassigny"],
  beauvais: ["Tillé", "Allonne", "Milly-sur-Thérain", "Saint-Martin-le-Nœud", "Goincourt", "Auneuil", "Hermes", "Bresles", "Noailles", "Clermont"],
  "saint-quentin": ["Gauchy", "Rouvroy", "Fayet", "Roupy", "Vermand", "Ham", "Bohain-en-Vermandois", "La Fère", "Tergnier", "Chauny"],
  abbeville: ["Rouvroy-les-Merles", "Drucat", "Grand-Laviers", "Vauchelles-les-Quesnoy", "Saint-Riquier", "Ailly-le-Haut-Clocher", "Rue", "Crécy-en-Ponthieu", "Doullens", "Gamaches"],
  peronne: ["Roisel", "Brie", "Estrées-Mons", "Sailly-Saillisel", "Fins", "Villers-Carbonnel", "Doingt", "Éterpigny", "Nesle", "Chaulnes"],
};

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ ville: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville: villeSlug } = await params;
  const ville = villes.find((v) => v.slug === villeSlug);
  if (!ville) return {};
  return {
    title: `Vidange Fosse Septique ${ville.nom} (${ville.codePostal}) — Agréé Vidangeur · 03 22 91 72 01`,
    description: `Vilbert Hydro, agréé vidangeur préfectoral à ${ville.nom} (${ville.codePostal}). Vidange fosse septique conforme SPANC, remise du BSMD obligatoire. Agrément préfectoral (arrêté 2009), 30 ans d'expérience. Urgences 24h/24. ☎ 03 22 91 72 01`,
    alternates: { canonical: `https://vilbert-hydro.vercel.app/vidange-fosse-septique/${ville.slug}` },
    keywords: [
      `vidange fosse septique ${ville.nom}`,
      `vidangeur agréé ${ville.nom}`,
      `SPANC ${ville.nom}`,
      `BSMD ${ville.nom}`,
      `fosse toutes eaux ${ville.nom}`,
      `assainissement non collectif ${ville.departement}`,
    ],
  };
}

export default async function VidangeFosseSeptiqueVillePage({ params }: { params: Promise<{ ville: string }> }) {
  const { ville: villeSlug } = await params;
  const ville = villes.find((v) => v.slug === villeSlug);
  if (!ville || !SLUGS.includes(villeSlug)) notFound();

  const zones = zonesAutour[villeSlug] ?? [];

  const faqItems = [
    {
      q: `À quelle fréquence dois-je vidanger ma fosse septique à ${ville.nom} ?`,
      a: `L'arrêté du 7 septembre 2009 impose une vidange au minimum tous les 4 ans. Toutefois, le SPANC de ${ville.nom} et de sa communauté de communes peut exiger une fréquence plus courte selon la taille de votre installation et le nombre d'occupants. En cas de doute, contactez-nous : nous vous conseillons gratuitement.`,
    },
    {
      q: "Qu'est-ce que le BSMD et pourquoi est-il obligatoire ?",
      a: "Le Bordereau de Suivi des Matières de Vidange (BSMD) est un document officiel remis par le prestataire agréé à chaque vidange. Il atteste que les matières ont été collectées par une entreprise habilitée et acheminées vers une filière de traitement conforme. Ce document est exigé par le SPANC et indispensable lors d'une vente immobilière.",
    },
    {
      q: `Vilbert Hydro intervient-il en urgence pour une vidange à ${ville.nom} ?`,
      a: `Oui. Vilbert Hydro assure des interventions urgentes 24h/24 et 7j/7 sur ${ville.nom} et toutes les communes environnantes. En cas de fosse saturée, de reflux ou d'odeurs persistantes, appelez immédiatement le 03 22 91 72 01.`,
    },
  ];

  const schemaOrg = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `Vidange Fosse Septique ${ville.nom}`,
        description: `Vidange de fosse septique et fosse toutes eaux à ${ville.nom} (${ville.codePostal}) — agréé vidangeur préfectoral, remise du BSMD, conformité SPANC.`,
        areaServed: {
          "@type": "City",
          name: ville.nom,
          postalCode: ville.codePostal,
          addressCountry: "FR",
        },
        provider: {
          "@type": "LocalBusiness",
          name: "Vilbert Hydro",
          telephone: "+33322917201",
          address: {
            "@type": "PostalAddress",
            streetAddress: "620 Rue Stéphane Hessel",
            addressLocality: "Camon",
            postalCode: "80450",
            addressCountry: "FR",
          },
          url: "https://vilbert-hydro.vercel.app",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://vilbert-hydro.vercel.app" },
          { "@type": "ListItem", position: 2, name: "Vidange Fosse Septique", item: "https://vilbert-hydro.vercel.app/vidange-fosse-septique" },
          { "@type": "ListItem", position: 3, name: `Vidange Fosse Septique ${ville.nom}`, item: `https://vilbert-hydro.vercel.app/vidange-fosse-septique/${ville.slug}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />

      {/* BREADCRUMB */}
      <nav className="bg-gray-100 py-2 px-4 text-xs text-gray-500">
        <div className="max-w-5xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-[#1b4f8c]">Accueil</Link>
          <span>/</span>
          <Link href="/vidange-fosse-septique" className="hover:text-[#1b4f8c]">Vidange Fosse Septique</Link>
          <span>/</span>
          <span className="text-[#1b4f8c] font-semibold">{ville.nom}</span>
        </div>
      </nav>

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
            Agréé vidangeur préfectoral
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Vidange Fosse Septique à {ville.nom}
            <span className="block text-[#f5b800] mt-1">Agréé Vidangeur</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Conformité SPANC · BSMD remis systématiquement · Agrément préfectoral
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention à {ville.nom} ({ville.codePostal}) et communes environnantes. Urgences 24h/24.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322917201"
              className="bg-[#f5b800] text-gray-900 font-black px-10 py-4 rounded text-xl hover:bg-[#ffd44d] transition-colors shadow-lg"
            >
              📞 03 22 91 72 01
            </a>
            <Link
              href="/vidange-fosse-septique"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded text-base hover:bg-white hover:text-[#1b4f8c] transition-colors"
            >
              En savoir plus
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* OBLIGATION LÉGALE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">
            Obligation légale de vidange à {ville.nom}
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              L&apos;<strong>arrêté du 7 septembre 2009</strong> relatif à l&apos;assainissement non collectif (ANC) impose la vidange régulière de toute fosse septique ou fosse toutes eaux. À {ville.nom} comme partout en France, la fréquence minimale est de <strong>4 ans</strong>, mais le <strong>SPANC</strong> (Service Public d&apos;Assainissement Non Collectif) local peut exiger une fréquence plus courte.
            </p>
            <p>
              Chaque vidange doit être réalisée par un <strong>prestataire titulaire d&apos;un agrément préfectoral</strong>. À l&apos;issue de l&apos;intervention, le vidangeur remet obligatoirement un <strong>Bordereau de Suivi des Matières de Vidange (BSMD)</strong>, document officiel à conserver pour le contrôle SPANC et lors d&apos;une vente immobilière.
            </p>
            <p>
              En cas de non-conformité, vous risquez des <strong>sanctions administratives</strong> du SPANC et un possible blocage lors d&apos;une transaction immobilière, depuis la loi de 2011 rendant le diagnostic ANC obligatoire à la vente.
            </p>
          </div>
        </div>
      </section>

      {/* AVANTAGES — 4 cartes */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">
              Pourquoi choisir Vilbert Hydro à {ville.nom} ?
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📋",
                titre: "Agréé vidangeur préfectoral",
                desc: "Agrément obligatoire (arrêté 7 sept. 2009) pour la collecte et le transport des matières de vidange. Intervention 100 % conforme.",
              },
              {
                icon: "📄",
                titre: "BSMD remis systématiquement",
                desc: "Bordereau de Suivi des Matières de Vidange fourni à chaque intervention. Indispensable pour le SPANC et les actes notariaux.",
              },
              {
                icon: "🏅",
                titre: "30 ans d'expérience",
                desc: `Filiale du Groupe Vilbert, nous intervenons en Picardie depuis plus de 30 ans. Expérience éprouvée sur tous types de fosses à ${ville.nom} et alentours.`,
              },
              {
                icon: "🚨",
                titre: "Urgences 24h/24",
                desc: "Fosse saturée, reflux, odeurs : nos techniciens interviennent en urgence 24h/24, 7j/7, y compris week-ends et jours fériés.",
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

      {/* ZONES COUVERTES */}
      {zones.length > 0 && (
        <section className="py-16 bg-[#1b4f8c] text-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black mb-3">
                Communes desservies autour de {ville.nom}
              </h2>
              <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
              <p className="text-blue-200 text-sm max-w-xl mx-auto">
                Vilbert Hydro intervient dans toute la zone autour de {ville.nom} ({ville.codePostal}).
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {zones.map((z) => (
                <span key={z} className="bg-white/10 border border-white/20 text-white text-sm px-4 py-2 rounded-full">
                  {z}
                </span>
              ))}
              <span className="bg-[#f5b800] text-gray-900 text-sm font-bold px-4 py-2 rounded-full">
                + toutes les communes environnantes
              </span>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">
              FAQ — Vidange fosse septique à {ville.nom}
            </h2>
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
      </section>

      {/* CTA */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Vidange fosse septique à {ville.nom} ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Contactez Vilbert Hydro — agréé vidangeur, BSMD systématique
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg mb-4"
          >
            📞 03 22 91 72 01
          </a>
          <p className="text-gray-600 text-sm">Devis gratuit · Intervention rapide · BSMD systématique</p>
          <div className="mt-6 flex justify-center gap-4 text-sm">
            <Link href="/vidange-fosse-septique" className="text-gray-800 font-semibold hover:underline">
              ← Retour Vidange Fosse Septique
            </Link>
            <Link href="/services#vidange" className="text-gray-800 font-semibold hover:underline">
              Nos tarifs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
