export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Plumber"],
        "@id": "https://vilbert-hydro.vercel.app/#business",
        name: "Vilbert Hydro",
        legalName: "Vilbert Hydro",
        description:
          "Spécialiste du débouchage de canalisations, curage, hydrocurage, inspection télévisée et vidange de fosses septiques en Hauts-de-France. Intervention rapide pour particuliers et professionnels (restaurants, métiers de bouche, sites industriels).",
        url: "https://vilbert-hydro.vercel.app",
        logo: {
          "@type": "ImageObject",
          url: "https://vilbert-hydro.vercel.app/logo.png",
          width: 400,
          height: 160,
        },
        image: "https://vilbert-hydro.vercel.app/logo.png",
        telephone: "+33322917201",
        email: "hydro@groupe-vilbert.fr",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Hauts-de-France",
          addressCountry: "FR",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
            description: "Urgences 24h/24 7j/7",
          },
        ],
        sameAs: ["https://www.groupe-vilbert.com"],
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Virement, Chèque, Carte bancaire",
        areaServed: [
          { "@type": "AdministrativeArea", name: "Somme" },
          { "@type": "AdministrativeArea", name: "Pas-de-Calais" },
          { "@type": "AdministrativeArea", name: "Oise" },
          { "@type": "AdministrativeArea", name: "Aisne" },
          { "@type": "AdministrativeArea", name: "Nord" },
          { "@type": "AdministrativeArea", name: "Seine-Maritime" },
        ],
        makesOffer: [
          {
            "@type": "Offer",
            name: "Débouchage de canalisations",
            description: "Débouchage rapide de canalisations bouchées pour particuliers et professionnels.",
          },
          {
            "@type": "Offer",
            name: "Curage et hydrocurage",
            description: "Nettoyage haute pression des réseaux d'assainissement collectifs et privatifs.",
          },
          {
            "@type": "Offer",
            name: "Inspection télévisée de canalisations",
            description: "Diagnostic précis par caméra robotisée pour localiser les défauts.",
          },
          {
            "@type": "Offer",
            name: "Vidange fosse septique",
            description: "Vidange et entretien de fosses septiques et fosses toutes eaux.",
          },
          {
            "@type": "Offer",
            name: "Nettoyage bac à graisses",
            description: "Nettoyage et entretien des bacs à graisses pour restaurants et métiers de bouche.",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "63",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Jean-Pierre M." },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: "Intervention très rapide suite à un bouchon sévère. Technicien professionnel et efficace. La canalisation est parfaitement nettoyée. Je recommande vivement.",
          },
          {
            "@type": "Review",
            author: { "@type": "Organization", name: "Restaurant Le Prieuré" },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: "Vilbert Hydro gère l'entretien de nos bacs à graisses depuis 3 ans. Toujours ponctuels, sérieux et conformes aux réglementations. Indispensable pour notre établissement.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Marie L." },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: "Vidange de fosse septique réalisée rapidement et proprement. Tarif correct, technicien sympathique. Rien à redire.",
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://vilbert-hydro.vercel.app/#org",
        name: "Vilbert Hydro",
        url: "https://vilbert-hydro.vercel.app",
        logo: "https://vilbert-hydro.vercel.app/logo.png",
        parentOrganization: {
          "@type": "Organization",
          name: "Groupe Vilbert",
          url: "https://www.groupe-vilbert.com",
        },
        foundingDate: "1990",
        numberOfEmployees: { "@type": "QuantitativeValue", value: 70 },
      },
      {
        "@type": "WebSite",
        "@id": "https://vilbert-hydro.vercel.app/#website",
        url: "https://vilbert-hydro.vercel.app",
        name: "Vilbert Hydro",
        description: "Débouchage, curage, vidange fosse septique en Hauts-de-France",
        inLanguage: "fr-FR",
        publisher: { "@id": "https://vilbert-hydro.vercel.app/#org" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://vilbert-hydro.vercel.app/blog?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
