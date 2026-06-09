import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ Débouchage & Assainissement Picardie — Toutes vos questions — Vilbert Hydro",
  description:
    "Toutes les réponses à vos questions sur le débouchage, la vidange de fosse septique, l'hydrocurage et l'assainissement en Picardie.",
  keywords: [
    "FAQ débouchage",
    "questions assainissement",
    "vidange fosse septique questions",
    "Vilbert Hydro",
  ],
  alternates: {
    canonical: "https://vilbert-hydro.fr/faq",
  },
};

const faqData = [
  {
    section: "Débouchage",
    questions: [
      {
        q: "Quel est votre délai d'intervention pour un débouchage ?",
        a: "Nous intervenons en moins de 2 heures dans la Somme, 24h/24 et 7j/7, y compris les nuits, week-ends et jours fériés. Appelez-nous au 03 22 91 72 01 pour une intervention immédiate.",
        link: { href: "/debouchage-canalisation", label: "En savoir plus sur le débouchage" },
      },
      {
        q: "Que faire en attendant l'intervention pour un débouchage ?",
        a: "N'actionnez pas la chasse d'eau pour éviter tout refoulement. N'utilisez pas de produits chimiques qui pourraient endommager vos canalisations. Si un débordement est en cours, coupez l'arrivée d'eau et éloignez-vous de la zone affectée.",
      },
      {
        q: "Combien coûte un débouchage de canalisation ?",
        a: "Le prix d'un débouchage varie entre 150 € et 350 € selon la complexité et la localisation du bouchon. Un devis gratuit vous est systématiquement communiqué avant toute intervention.",
        link: { href: "/debouchage-canalisation", label: "Voir nos tarifs débouchage" },
      },
      {
        q: "Intervenez-vous la nuit, le week-end et les jours fériés ?",
        a: "Oui, notre service d'urgence fonctionne 24h/24, 7j/7, 365 jours par an, sans majoration cachée sur les interventions nocturnes ou les jours fériés. Le prix annoncé au téléphone est celui facturé.",
      },
      {
        q: "Quelle est la différence entre le furet et l'hydrocurage ?",
        a: "Le furet est un outil mécanique qui perfore et dégage un bouchon localisé. L'hydrocurage à haute pression (200 bars) projette un jet d'eau puissant qui nettoie complètement les parois sur toute la longueur de la canalisation, éliminant dépôts graisseux, racines et tartre. L'hydrocurage est plus efficace et durable.",
        link: { href: "/hydrocurage-haute-pression", label: "Découvrir l'hydrocurage haute pression" },
      },
      {
        q: "Y a-t-il une garantie sur vos interventions de débouchage ?",
        a: "Un rapport d'intervention détaillé vous est remis à l'issue de chaque prestation. En cas de récidive dans les 30 jours suivant notre passage, nous effectuons un diagnostic offert pour identifier la cause profonde du problème.",
      },
    ],
  },
  {
    section: "Vidange fosse septique",
    questions: [
      {
        q: "À quelle fréquence faut-il vidanger une fosse septique ?",
        a: "La réglementation impose une vidange au minimum tous les 4 ans, conformément à l'arrêté du 7 septembre 2009 relatif aux modalités de l'exécution de la mission de contrôle des installations d'assainissement non collectif. En pratique, cette fréquence peut être plus courte selon le nombre d'occupants et le volume de la fosse.",
        link: { href: "/vidange-fosse-septique", label: "En savoir plus sur la vidange de fosse septique" },
      },
      {
        q: "Qu'est-ce que le BSMD ?",
        a: "Le BSMD (Bordereau de Suivi des Matières de Vidange) est un document légalement obligatoire remis par le vidangeur agréé à l'issue de chaque vidange. Il atteste de la traçabilité des matières jusqu'au site de traitement agréé. Sans ce document, la vidange n'est pas réglementaire.",
      },
      {
        q: "Vilbert Hydro est-il agréé vidangeur ?",
        a: "Oui. Vilbert Hydro détient l'agrément préfectoral de vidangeur, rendu obligatoire depuis l'arrêté du 7 septembre 2009. Cet agrément garantit que nos équipes respectent l'ensemble des normes sanitaires et environnementales en vigueur. Le BSMD vous est systématiquement remis.",
      },
      {
        q: "Quels sont les risques si on ne vidange pas sa fosse septique ?",
        a: "Une fosse non vidangée régulièrement peut provoquer : des odeurs nauséabondes, un refoulement dans les canalisations et sanitaires, une pollution de la nappe phréatique et des sols engageant votre responsabilité, des sanctions du SPANC pouvant aller jusqu'à une mise en demeure, et un blocage lors de la vente de votre bien immobilier.",
      },
      {
        q: "Quel est le coût d'une vidange de fosse septique ?",
        a: "Le tarif d'une vidange varie entre 280 € et 600 € selon la taille de la fosse (de 3 000 L à 5 000 L et plus) et son accessibilité. Un devis gratuit est établi avant l'intervention. Ce prix inclut le déplacement, la vidange, le transport et l'élimination des matières dans un centre agréé, ainsi que la remise du BSMD.",
      },
      {
        q: "Quelle est la différence entre une fosse septique et une fosse toutes eaux ?",
        a: "La fosse septique (ancienne norme) ne reçoit que les eaux vannes provenant des WC. Les eaux grises (cuisine, salle de bain) étaient traitées séparément. La fosse toutes eaux, obligatoire depuis 1992, collecte l'ensemble des eaux usées domestiques (WC, cuisine, douche, lave-linge). Si votre installation est antérieure à 1992, elle peut être non conforme.",
      },
      {
        q: "Le SPANC peut-il m'obliger à changer ma fosse septique ?",
        a: "Oui. Si le SPANC (Service Public d'Assainissement Non Collectif) constate lors de son contrôle que votre installation présente un danger pour la santé ou l'environnement, il peut vous imposer une mise en conformité. Selon l'article L.1337-2 du Code de la Santé Publique, un délai d'un an après la notification du rapport vous est accordé pour effectuer les travaux.",
      },
    ],
  },
  {
    section: "Assainissement non collectif",
    questions: [
      {
        q: "Qu'est-ce que le SPANC et quel est son rôle ?",
        a: "Le SPANC (Service Public d'Assainissement Non Collectif) est un service géré par votre commune ou intercommunalité. Il est chargé de contrôler la conception, l'installation, la bon fonctionnement et l'entretien des installations d'assainissement non collectif (fosses septiques, toutes eaux, micro-stations…). Les contrôles périodiques ont lieu tous les 8 à 10 ans.",
      },
      {
        q: "Comment savoir si mon installation d'assainissement est conforme ?",
        a: "La première étape est de contacter votre SPANC pour obtenir l'historique des contrôles de votre installation. Nous pouvons également réaliser une inspection télévisée de vos canalisations pour détecter toute anomalie (fissures, effondrement, mauvais raccordements).",
        link: { href: "/inspection-televisee", label: "Demander une inspection télévisée" },
      },
      {
        q: "Micro-station ou filtre compact : quelle solution choisir ?",
        a: "La micro-station d'épuration est adaptée aux terrains exigus ou aux contraintes de sol. Elle nécessite une alimentation électrique. Coût : entre 4 000 € et 10 000 € fournie et posée. Le filtre compact (à coco, zéolithe ou autre média filtrant) convient aux parcelles avec peu de surface disponible, ne nécessite pas d'électricité et est moins onéreux : entre 2 500 € et 6 000 €. Le choix dépend de la superficie, du type de sol et de votre budget.",
      },
      {
        q: "Le diagnostic d'assainissement est-il obligatoire pour vendre sa maison ?",
        a: "Oui. Depuis la loi Grenelle II, le diagnostic de l'installation d'assainissement non collectif est obligatoire dans le cadre d'une vente immobilière, en application de l'article L.271-4 du Code de la Construction et de l'Habitation. Le rapport de contrôle du SPANC doit dater de moins de 3 ans au moment de la signature du compromis de vente.",
      },
      {
        q: "Qui finance les travaux de mise en conformité de l'assainissement ?",
        a: "Les travaux de mise en conformité sont à la charge du propriétaire. Toutefois, des aides financières peuvent être mobilisées : subventions de l'Agence de l'Eau Artois-Picardie, prêts à taux zéro (Éco-PTZ assainissement), aides de l'ANAH sous conditions de ressources. Renseignez-vous auprès de votre SPANC ou de votre mairie.",
      },
      {
        q: "Peut-on réaliser une inspection télévisée sans vider la fosse septique ?",
        a: "Pour l'inspection des canalisations de collecte et d'évacuation, aucune vidange préalable n'est nécessaire. La caméra se déplace dans les tuyaux. En revanche, pour inspecter l'intérieur de la cuve elle-même, une vidange préalable est indispensable pour des raisons de sécurité et de visibilité.",
      },
    ],
  },
  {
    section: "Maintenance préventive",
    questions: [
      {
        q: "Quel est l'intérêt d'un contrat de maintenance annuel ?",
        a: "Un contrat de maintenance annuel permet : un curage préventif des canalisations avant tout bouchon, la priorité en cas d'urgence, un rapport d'état annuel de vos réseaux, et des économies significatives par rapport aux coûts d'une intervention d'urgence. Nos clients sous contrat évitent en moyenne 2 à 3 urgences coûteuses par an.",
        link: { href: "/contrat-maintenance", label: "Découvrir nos contrats de maintenance" },
      },
      {
        q: "À quelle fréquence faut-il curer le réseau d'une copropriété ?",
        a: "En copropriété, le curage préventif des réseaux est recommandé tous les 1 à 2 ans. C'est une obligation d'entretien qui incombe au syndic en vertu de la loi du 10 juillet 1965 sur la copropriété. Un réseau non entretenu expose le syndicat à des responsabilités en cas de dommages aux parties privatives.",
      },
      {
        q: "Le nettoyage du bac à graisses est-il obligatoire pour un restaurant ?",
        a: "Oui. Tout établissement de restauration raccordé au réseau collectif doit entretenir son bac dégraisseur. L'arrêté du 2 février 1998 impose un entretien régulier pour éviter tout déversement de graisses dans le réseau. En pratique, un vidange tous les 3 à 6 mois est recommandée selon le volume d'activité, sous peine de fermeture administrative.",
      },
      {
        q: "Quels sont les signes d'une panne de poste de relevage ?",
        a: "Les principaux signes sont : le déclenchement de l'alarme sonore ou lumineuse du poste, des odeurs fortes et persistantes autour du regard, des eaux stagnantes ou non évacuées, ou un niveau anormalement haut dans la bâche. En cas de doute, ne tardez pas à nous contacter.",
        link: { href: "/maintenance-poste-relevage", label: "Maintenance de poste de relevage" },
      },
      {
        q: "L'hydrocurage préventif est-il vraiment utile ?",
        a: "Oui. Un hydrocurage préventif réalisé tous les 2 à 3 ans en résidentiel élimine les dépôts graisseux, les amas de calcaire et les petites racines avant qu'ils ne provoquent un bouchon. C'est un investissement modeste qui prévient des urgences coûteuses et préserve l'intégrité de vos canalisations.",
        link: { href: "/hydrocurage-haute-pression", label: "En savoir plus sur l'hydrocurage" },
      },
    ],
  },
  {
    section: "Zone d'intervention et tarifs",
    questions: [
      {
        q: "Quelle est votre zone d'intervention ?",
        a: "Vilbert Hydro intervient dans un rayon de 80 km autour de notre base de Camon (Somme), couvrant l'ensemble du département de la Somme (80), l'Oise (60), l'Aisne (02) et une partie du Pas-de-Calais (62).",
      },
      {
        q: "Couvrez-vous toute la Somme ?",
        a: "Oui, nous intervenons dans toutes les communes du département : Amiens, Abbeville, Péronne, Albert, Montdidier, Doullens, Corbie, Roye, Ham, Chaulnes, Friville-Escarbotin, et l'ensemble des communes rurales de la Somme.",
      },
      {
        q: "Les frais de déplacement sont-ils facturés en plus ?",
        a: "Non. Les frais de déplacement sont inclus dans le devis qui vous est communiqué avant l'intervention. Il n'y a aucun surcoût caché lié au trajet. Le prix annoncé est le prix final.",
      },
      {
        q: "Quels modes de paiement acceptez-vous ?",
        a: "Nous acceptons le virement bancaire, le chèque et la carte bancaire. Une facture détaillée vous est systématiquement remise à l'issue de chaque prestation, avec le détail des prestations effectuées.",
      },
      {
        q: "Vilbert Hydro est-il assuré ?",
        a: "Oui. Vilbert Hydro dispose d'une assurance Responsabilité Civile Professionnelle couvrant l'ensemble de nos activités : débouchage, vidange, hydrocurage, inspection télévisée et maintenance. Vous intervenez en toute sécurité.",
      },
      {
        q: "Comment obtenir un devis gratuit ?",
        a: "Contactez-nous par téléphone au 03 22 91 72 01 (disponible 24h/24, 7j/7) ou par e-mail à hydro@groupe-vilbert.fr. Un devis gratuit et sans engagement vous est transmis rapidement. Pour les urgences, le devis est communiqué par téléphone avant toute intervention.",
      },
    ],
  },
  {
    section: "Prestations spécialisées",
    questions: [
      {
        q: "Faites-vous le dégazage de cuves à fioul ?",
        a: "Oui. Vilbert Hydro réalise le dégazage de cuves à fioul avec agrément ADR et agents habilités ATEX. Selon vos besoins, nous assurons le pompage des résidus, le nettoyage, l'inertage ou le démantèlement complet de la cuve. Une attestation de dégazage vous est remise à l'issue de l'intervention. Traçabilité numérique assurée via TrackDéchets.",
        link: { href: "/degazage-cuve-fioul", label: "En savoir plus sur le dégazage de cuves à fioul" },
      },
      {
        q: "Entretenez-vous les séparateurs hydrocarbures ?",
        a: "Oui. Vilbert Hydro assure l'entretien réglementaire de vos séparateurs hydrocarbures, de 1 à 4 fois par an selon votre activité, ainsi que vos bacs dégraisseurs. Nos interventions sont conformes à la norme EN 858. Un rapport de conformité vous est systématiquement remis, à conserver pour vos contrôles réglementaires.",
        link: { href: "/separateur-hydrocarbures", label: "En savoir plus sur l'entretien des séparateurs hydrocarbures" },
      },
      {
        q: "Proposez-vous le nettoyage haute pression de sols ?",
        a: "Oui. Nos camions équipés de pompes haute pression (200 bars) interviennent pour le nettoyage de plateformes industrielles, chantiers BTP et cours agricoles. Vilbert Hydro adopte une démarche éco-responsable : les eaux pluviales récupérées sont utilisées pour recharger nos camions, limitant ainsi la consommation d'eau potable.",
        link: { href: "/nettoyage-haute-pression-sol", label: "En savoir plus sur le nettoyage haute pression de sols" },
      },
      {
        q: "Disposez-vous d'un agrément pour les sous-produits animaux ?",
        a: "Oui. Vilbert Hydro dispose d'un agrément préfectoral pour la collecte et le transport de sous-produits animaux catégories 2 et 3, conformément au règlement CE 1069/2009. Nous intervenons auprès des industries agroalimentaires et des élevages en Picardie.",
        link: { href: "/sous-produits-animaux", label: "En savoir plus sur la collecte de sous-produits animaux" },
      },
      {
        q: "Avez-vous un camion balayeur ?",
        a: "Oui. Vilbert Hydro dispose d'un camion balayeur-aspirateur pour le balayage et le nettoyage de voiries, routes communales, chantiers et plateformes industrielles en Picardie. Contactez-nous pour un devis adapté à votre besoin.",
        link: { href: "/balayage-voirie", label: "En savoir plus sur le balayage de voirie" },
      },
    ],
  },
];

const allQA = faqData.flatMap((s) => s.questions);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allQA.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
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
      name: "FAQ",
      item: "https://vilbert-hydro.fr/faq",
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
                FAQ
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Questions fréquentes — Débouchage &amp; Assainissement en Picardie
          </h1>
          <p className="mt-4 text-blue-100 text-lg">
            Retrouvez toutes les réponses à vos questions sur nos services.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        {faqData.map((section, si) => (
          <section key={si} className="mb-12">
            <h2 className="text-xl font-bold text-[#1b4f8c] border-b-2 border-[#1b4f8c] pb-2 mb-6">
              {section.section}
            </h2>
            <div className="space-y-3">
              {section.questions.map((item, qi) => (
                <details
                  key={qi}
                  className="group border border-gray-200 rounded-lg overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-semibold text-gray-800 hover:bg-blue-50 list-none select-none">
                    <span>{item.q}</span>
                    <span
                      className="flex-shrink-0 w-5 h-5 text-[#1b4f8c] transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 pt-2 text-gray-700 leading-relaxed bg-white">
                    <p>{item.a}</p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="inline-block mt-3 text-sm font-semibold text-[#1b4f8c] hover:underline"
                      >
                        {item.link.label} →
                      </Link>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div
          style={{ backgroundColor: "#1b4f8c" }}
          className="rounded-xl p-8 text-white text-center mt-8"
        >
          <p className="text-xl font-bold mb-2">
            Vous n&apos;avez pas trouvé la réponse à votre question ?
          </p>
          <p className="text-blue-100 mb-5">
            Notre équipe est disponible 24h/24, 7j/7 pour vous répondre.
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-white text-[#1b4f8c] font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
          >
            03 22 91 72 01
          </a>
        </div>
      </main>
    </>
  );
}
