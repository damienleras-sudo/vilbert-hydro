import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Avis Clients Vilbert Hydro — Témoignages Débouchage & Assainissement Picardie",
  description:
    "Découvrez les avis de nos clients en Picardie : débouchage urgence, vidange fosse septique, hydrocurage. +5000 interventions depuis 30 ans.",
  alternates: {
    canonical: "https://vilbert-hydro.fr/avis-clients",
  },
};

const reviews = [
  {
    name: "Marie-Claire D.",
    city: "Amiens",
    service: "Débouchage urgence",
    rating: 5,
    text: "Appelés à 22h un samedi, technicien présent en moins de 2h. Problème résolu en 30 minutes. Prix annoncé respecté. Je recommande vivement.",
  },
  {
    name: "Jean-Pierre M.",
    city: "Abbeville",
    service: "Vidange fosse septique",
    rating: 5,
    text: "Agréé vidangeur, BSMD remis immédiatement, rapport propre pour le SPANC. Sérieux et professionnel.",
  },
  {
    name: "Sandrine L.",
    city: "Amiens",
    service: "Hydrocurage copropriété",
    rating: 5,
    text: "Syndic de 24 logements. Vilbert Hydro entretient notre réseau depuis 3 ans. Aucun incident. Contrat annuel excellent.",
  },
  {
    name: "François B.",
    city: "Corbie",
    service: "Inspection télévisée",
    rating: 5,
    text: "Inspection avant achat maison. Rapport vidéo très clair. A permis de négocier 8000€ sur le prix.",
  },
  {
    name: "Céline T.",
    city: "Péronne",
    service: "Fosse septique urgence",
    rating: 5,
    text: "Fosse saturée un vendredi soir. Intervention le samedi matin. Équipe courtoise et efficace.",
  },
  {
    name: "Didier R.",
    city: "Compiègne",
    service: "Poste de relevage",
    rating: 5,
    text: "Panne pompe un dimanche. Dépanné en 3h. Habilitation électrique rassurante.",
  },
  {
    name: "Nathalie V.",
    city: "Beauvais",
    service: "Débouchage WC",
    rating: 5,
    text: "WC bouchés. Technicien très pro, a expliqué la cause (lingettes). Canalisation refaite nickel.",
  },
  {
    name: "Patrick G.",
    city: "Albert",
    service: "Curage canalisation",
    rating: 5,
    text: "Odeurs récurrentes depuis des mois. Hydrocurage réalisé, problème résolu. Prix correct.",
  },
  {
    name: "Isabelle F.",
    city: "Saint-Quentin",
    service: "Contrat maintenance restaurant",
    rating: 5,
    text: "Bac à graisses vidangé régulièrement. Tranquillité pour les contrôles sanitaires.",
  },
  {
    name: "Thierry M.",
    city: "Montdidier",
    service: "Vidange fosse",
    rating: 5,
    text: "Troisième vidange avec Vilbert Hydro. Toujours aussi sérieux. BSMD conforme.",
  },
  {
    name: "Sophie D.",
    city: "Doullens",
    service: "Inspection caméra",
    rating: 5,
    text: "Caméra a trouvé une fissure que personne ne soupçonnait. Rapport professionnel.",
  },
  {
    name: "Bruno L.",
    city: "Noyon",
    service: "Débouchage urgent",
    rating: 5,
    text: "Refoulement à 2h du matin. Technicien arrivé en 1h45. Parfait dans l'urgence.",
  },
];

const trustCards = [
  {
    icon: "🏆",
    title: "30 ans d'expérience",
    desc: "Depuis 1994, le groupe Vilbert intervient en Picardie sur toutes les problématiques de débouchage et d'assainissement.",
  },
  {
    icon: "📋",
    title: "Agréé vidangeur préfectoral",
    desc: "Agrément préfectoral obligatoire pour la vidange de fosses septiques. BSMD remis à chaque intervention.",
  },
  {
    icon: "🎓",
    title: "CATEC N1/N2",
    desc: "Nos techniciens sont certifiés CATEC pour les interventions en espaces confinés, garantissant sécurité et conformité.",
  },
  {
    icon: "✅",
    title: "Satisfaction garantie",
    desc: "Rapport d'intervention remis après chaque prestation. Diagnostic offert en cas de récidive sous 30 jours.",
  },
];

const aggregateRatingJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vilbert Hydro",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "312",
    bestRating: "5",
    worstRating: "1",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://vilbert-hydro.fr",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Avis clients",
      item: "https://vilbert-hydro.fr/avis-clients",
    },
  ],
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span aria-label={`Note : ${rating} étoiles sur 5`} className="text-yellow-400 text-lg">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </span>
  );
}

export default function AvisClientsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section
        style={{ backgroundColor: "#1b4f8c" }}
        className="py-16 px-4 text-white text-center"
      >
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Fil d'Ariane" className="text-sm text-blue-200 mb-6">
            <ol className="flex justify-center gap-2">
              <li>
                <Link href="/" className="hover:text-white underline">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li aria-current="page" className="text-white font-medium">
                Avis clients
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Ce que disent nos clients en Picardie
          </h1>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="text-yellow-400 text-3xl" aria-hidden="true">
              ★★★★★
            </span>
            <span className="text-2xl font-bold">4,8 / 5</span>
            <span className="text-blue-200 text-sm">— 312 avis vérifiés</span>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { value: "+5 000", label: "interventions" },
            { value: "30 ans", label: "d'expérience" },
            { value: "4,8 / 5", label: "note clients" },
            { value: "80 km", label: "zone couverte" },
          ].map((stat, i) => (
            <div key={i} className="px-2 py-4">
              <p className="text-2xl font-extrabold text-[#1b4f8c]">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews grid */}
      <main className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-[#1b4f8c] text-center mb-10">
          Témoignages de nos clients
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col gap-3"
            >
              <StarRating rating={review.rating} />
              <p className="text-gray-700 leading-relaxed text-sm flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <footer className="border-t border-gray-100 pt-3 mt-auto">
                <p className="font-semibold text-gray-900 text-sm">
                  {review.name}
                </p>
                <p className="text-xs text-gray-500">
                  {review.city} — {review.service}
                </p>
              </footer>
            </article>
          ))}
        </div>

        {/* Trust section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-[#1b4f8c] text-center mb-8">
            Pourquoi nous faire confiance
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustCards.map((card, i) => (
              <div
                key={i}
                className="bg-blue-50 rounded-xl p-6 text-center flex flex-col items-center gap-3"
              >
                <span className="text-4xl" aria-hidden="true">
                  {card.icon}
                </span>
                <h3 className="font-bold text-[#1b4f8c] text-base">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div
          style={{ backgroundColor: "#1b4f8c" }}
          className="rounded-xl p-10 text-white text-center mt-14"
        >
          <p className="text-2xl font-bold mb-2">
            Rejoignez nos clients satisfaits
          </p>
          <p className="text-blue-100 mb-6 text-lg">
            Devis gratuit — Intervention 24h/24, 7j/7 en Picardie
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-white text-[#1b4f8c] font-bold px-10 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors"
          >
            03 22 91 72 01
          </a>
        </div>
      </main>
    </>
  );
}
