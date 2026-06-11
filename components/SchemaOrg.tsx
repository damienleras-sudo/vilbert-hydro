const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://vilbert-hydro.fr/#website",
  name: "Vilbert Hydro",
  url: "https://vilbert-hydro.fr",
  description:
    "Débouchage, curage, vidange fosse septique, assainissement en Picardie. Agréé vidangeur. Urgences 24h/24.",
  publisher: { "@id": "https://vilbert-hydro.fr/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://vilbert-hydro.fr/blog?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services Vilbert Hydro",
  description: "Ensemble des prestations d'assainissement Vilbert Hydro en Picardie",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Débouchage canalisation", url: "https://vilbert-hydro.fr/debouchage-canalisation" },
    { "@type": "ListItem", position: 2, name: "Hydrocurage haute pression", url: "https://vilbert-hydro.fr/hydrocurage-haute-pression" },
    { "@type": "ListItem", position: 3, name: "Inspection télévisée", url: "https://vilbert-hydro.fr/inspection-televisee" },
    { "@type": "ListItem", position: 4, name: "Vidange fosse septique", url: "https://vilbert-hydro.fr/vidange-fosse-septique" },
    { "@type": "ListItem", position: 5, name: "Dégazage cuve fioul", url: "https://vilbert-hydro.fr/degazage-cuve-fioul" },
    { "@type": "ListItem", position: 6, name: "Balayage voirie", url: "https://vilbert-hydro.fr/balayage-voirie" },
    { "@type": "ListItem", position: 7, name: "Nettoyage haute pression sol", url: "https://vilbert-hydro.fr/nettoyage-haute-pression-sol" },
    { "@type": "ListItem", position: 8, name: "Séparateur hydrocarbures", url: "https://vilbert-hydro.fr/separateur-hydrocarbures" },
    { "@type": "ListItem", position: 9, name: "Sous-produits animaux", url: "https://vilbert-hydro.fr/sous-produits-animaux" },
    { "@type": "ListItem", position: 10, name: "Maintenance poste de relevage", url: "https://vilbert-hydro.fr/maintenance-poste-relevage" },
  ],
};

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "Plumber"],
        "@id": "https://vilbert-hydro.fr/#business",
        name: "Vilbert Hydro",
        legalName: "Vilbert Hydro",
        description:
          "Vilbert Hydro — spécialiste du débouchage de canalisations, curage et hydrocurage haute pression, inspection télévisée, vidange de fosses septiques, maintenance de postes de relevage et électromécanique en Picardie (Somme, Oise, Aisne) et Hauts-de-France. Agréé vidangeur. Agents CATEC habilités N1/N2. Habilitation électrique. Intervention 24h/24 7j/7 pour particuliers, professionnels, syndicats de copropriété, agriculteurs et industries.",
        url: "https://vilbert-hydro.fr",
        logo: {
          "@type": "ImageObject",
          url: "https://vilbert-hydro.fr/logo.png",
          width: 400,
          height: 160,
        },
        image: "https://vilbert-hydro.fr/logo.png",
        telephone: "+33322917201",
        email: "hydro@groupe-vilbert.fr",
        address: {
          "@type": "PostalAddress",
          streetAddress: "620 Rue Stéphane Hessel",
          addressLocality: "Camon",
          postalCode: "80450",
          addressRegion: "Somme",
          addressCountry: "FR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 49.867,
          longitude: 2.342,
        },
        hasMap: "https://www.facebook.com/p/Vilbert-Hydro-100092874391446/",
        sameAs: [
          "https://www.groupe-vilbert.com",
          "https://www.facebook.com/p/Vilbert-Hydro-100092874391446/",
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "00:00",
            closes: "23:59",
            description: "Urgences 24h/24 7j/7 — Interventions y compris week-ends et jours fériés",
          },
        ],
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Virement, Chèque, Carte bancaire",
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "h2", ".excerpt"],
        },
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Agrément vidangeur",
            description: "Agrément préfectoral pour la vidange et le transport des matières de vidange (arrêté du 7 septembre 2009)",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "CATEC — Certificat d'Aptitude aux Travaux en Espaces Confinés",
            description: "Agents habilités CATEC pour les interventions en espaces confinés (réseaux, fosses, cuves)",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Habilitation N1 et N2 — Travaux en espaces confinés",
            description: "Habilitations N1 (opérateur) et N2 (surveillant) pour les travaux en espaces confinés",
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "Habilitation électrique",
            description: "Personnel habilité pour les interventions électromécaniques sur postes de relevage et installations électriques",
          },
        ],
        areaServed: [
          { "@type": "AdministrativeArea", name: "Somme", identifier: "80" },
          { "@type": "AdministrativeArea", name: "Pas-de-Calais", identifier: "62" },
          { "@type": "AdministrativeArea", name: "Oise", identifier: "60" },
          { "@type": "AdministrativeArea", name: "Aisne", identifier: "02" },
          { "@type": "AdministrativeArea", name: "Nord", identifier: "59" },
          { "@type": "AdministrativeArea", name: "Seine-Maritime", identifier: "76" },
          { "@type": "City", name: "Amiens" },
          { "@type": "City", name: "Abbeville" },
          { "@type": "City", name: "Péronne" },
          { "@type": "City", name: "Albert" },
          { "@type": "City", name: "Montdidier" },
          { "@type": "City", name: "Doullens" },
          { "@type": "City", name: "Compiègne" },
          { "@type": "City", name: "Beauvais" },
          { "@type": "City", name: "Soissons" },
          { "@type": "City", name: "Laon" },
          { "@type": "City", name: "Noyon" },
        ],
        makesOffer: [
          {
            "@type": "Offer",
            name: "Débouchage de canalisations",
            description: "Débouchage rapide de canalisations bouchées pour particuliers et professionnels. Urgences 24h/24.",
          },
          {
            "@type": "Offer",
            name: "Curage et hydrocurage haute pression",
            description: "Nettoyage haute pression (jusqu'à 200 bars) des réseaux d'assainissement collectifs et privatifs.",
          },
          {
            "@type": "Offer",
            name: "Inspection télévisée de canalisations",
            description: "Diagnostic précis par caméra robotisée haute résolution. Rapport écrit avec images.",
          },
          {
            "@type": "Offer",
            name: "Vidange fosse septique",
            description: "Vidange de fosses septiques et fosses toutes eaux agréée. Obligation légale tous les 4 ans (arrêté du 7 sept. 2009). Bordereau BSMD remis systématiquement. Agréé vidangeur préfectoral. Picardie : Somme (80), Oise (60), Aisne (02). Urgences 24h/24.",
          },
          {
            "@type": "Offer",
            name: "Nettoyage bac à graisses",
            description: "Vidange et nettoyage des bacs à graisses pour restaurants, métiers de bouche, cantines.",
          },
          {
            "@type": "Offer",
            name: "Maintenance poste de relevage",
            description: "Inspection, nettoyage, maintenance préventive et curative des postes de relevage eaux usées. Dépannage urgent 24h/24.",
          },
          {
            "@type": "Offer",
            name: "Électromécanique assainissement",
            description: "Maintenance des équipements électromécaniques : pompes, variateurs, armoires de commande. Personnel habilité électrique N1/N2.",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "87",
          bestRating: "5",
          worstRating: "1",
        },
        review: [
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Jean-Pierre M.", addressLocality: "Amiens" },
            datePublished: "2024-11-15",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: "Intervention très rapide suite à un bouchon sévère sur notre canalisation. Technicien professionnel et efficace. Je recommande vivement Vilbert Hydro.",
          },
          {
            "@type": "Review",
            author: { "@type": "Organization", name: "Syndicat de copropriété Les Hortensias, Amiens" },
            datePublished: "2025-01-08",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: "Vilbert Hydro intervient régulièrement pour notre copropriété. Sérieux, ponctuels et tarifs transparents. Contrat de maintenance très satisfaisant.",
          },
          {
            "@type": "Review",
            author: { "@type": "Organization", name: "Restaurant Le Prieuré, Abbeville" },
            datePublished: "2024-09-20",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: "Vilbert Hydro gère l'entretien de nos bacs à graisses depuis 3 ans. Toujours conformes aux réglementations. Indispensable pour notre établissement.",
          },
          {
            "@type": "Review",
            author: { "@type": "Person", name: "Agriculture GAEC Delattre, Somme" },
            datePublished: "2025-02-14",
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: "Intervention rapide pour la vidange de notre fosse et l'entretien du poste de relevage de notre exploitation. Travail sérieux et bien documenté.",
          },
        ],
      },
      {
        "@type": "Organization",
        "@id": "https://vilbert-hydro.fr/#org",
        name: "Vilbert Hydro",
        url: "https://vilbert-hydro.fr",
        logo: "https://vilbert-hydro.fr/logo.png",
        parentOrganization: {
          "@type": "Organization",
          name: "Groupe Vilbert",
          url: "https://www.groupe-vilbert.com",
        },
        foundingDate: "1990",
        numberOfEmployees: { "@type": "QuantitativeValue", value: 70 },
        areaServed: "Picardie — Somme, Oise, Aisne",
      },
      {
        "@type": "WebSite",
        "@id": "https://vilbert-hydro.fr/#website",
        url: "https://vilbert-hydro.fr",
        name: "Vilbert Hydro",
        description: "Débouchage, curage, vidange fosse septique, maintenance poste de relevage en Picardie (Somme, Oise, Aisne) et Hauts-de-France",
        inLanguage: "fr-FR",
        publisher: { "@id": "https://vilbert-hydro.fr/#org" },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://vilbert-hydro.fr/blog?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
    </>
  );
}
