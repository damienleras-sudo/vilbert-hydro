export interface Ville {
  slug: string;
  nom: string;
  departement: string;
  codePostal: string;
  description: string;
  lat: number;
  lng: number;
}

export const villes: Ville[] = [
  // SOMME (80) — priorité SEO
  {
    slug: "amiens",
    nom: "Amiens",
    departement: "Somme",
    codePostal: "80000",
    description: "Amiens et son agglomération — Picardie, Somme (80)",
    lat: 49.8941,
    lng: 2.2958,
  },
  {
    slug: "abbeville",
    nom: "Abbeville",
    departement: "Somme",
    codePostal: "80100",
    description: "Abbeville et le Ponthieu — Picardie, Somme (80)",
    lat: 50.1049,
    lng: 1.8328,
  },
  {
    slug: "peronne",
    nom: "Péronne",
    departement: "Somme",
    codePostal: "80200",
    description: "Péronne et le Santerre — Picardie, Somme (80)",
    lat: 49.9286,
    lng: 2.9338,
  },
  {
    slug: "albert",
    nom: "Albert",
    departement: "Somme",
    codePostal: "80300",
    description: "Albert et le Pays du Coquelicot — Picardie, Somme (80)",
    lat: 50.0025,
    lng: 2.6511,
  },
  {
    slug: "montdidier",
    nom: "Montdidier",
    departement: "Somme",
    codePostal: "80500",
    description: "Montdidier et la Haute-Somme — Picardie, Somme (80)",
    lat: 49.6486,
    lng: 2.5697,
  },
  {
    slug: "doullens",
    nom: "Doullens",
    departement: "Somme",
    codePostal: "80600",
    description: "Doullens et l'Authie — Picardie, Somme (80)",
    lat: 50.1592,
    lng: 2.3433,
  },
  // PAS-DE-CALAIS (62)
  {
    slug: "arras",
    nom: "Arras",
    departement: "Pas-de-Calais",
    codePostal: "62000",
    description: "Arras et l'Arrageois — Pas-de-Calais (62)",
    lat: 50.2917,
    lng: 2.7789,
  },
  {
    slug: "lens",
    nom: "Lens",
    departement: "Pas-de-Calais",
    codePostal: "62300",
    description: "Lens et l'agglomération du Bassin Minier — Pas-de-Calais (62)",
    lat: 50.4328,
    lng: 2.8314,
  },
  // AISNE (02)
  {
    slug: "saint-quentin",
    nom: "Saint-Quentin",
    departement: "Aisne",
    codePostal: "02100",
    description: "Saint-Quentin et le Saint-Quentinois — Picardie, Aisne (02)",
    lat: 49.8467,
    lng: 3.2878,
  },
  {
    slug: "soissons",
    nom: "Soissons",
    departement: "Aisne",
    codePostal: "02200",
    description: "Soissons et le Soissonnais — Picardie, Aisne (02)",
    lat: 49.3815,
    lng: 3.3233,
  },
  {
    slug: "laon",
    nom: "Laon",
    departement: "Aisne",
    codePostal: "02000",
    description: "Laon et le Laonnois — Picardie, Aisne (02)",
    lat: 49.5635,
    lng: 3.6239,
  },
  // OISE (60)
  {
    slug: "compiegne",
    nom: "Compiègne",
    departement: "Oise",
    codePostal: "60200",
    description: "Compiègne et la vallée de l'Oise — Picardie, Oise (60)",
    lat: 49.4183,
    lng: 2.8258,
  },
  {
    slug: "beauvais",
    nom: "Beauvais",
    departement: "Oise",
    codePostal: "60000",
    description: "Beauvais et le Beauvaisis — Picardie, Oise (60)",
    lat: 49.4295,
    lng: 2.0808,
  },
  {
    slug: "noyon",
    nom: "Noyon",
    departement: "Oise",
    codePostal: "60400",
    description: "Noyon et le Noyonnais — Picardie, Oise (60)",
    lat: 49.5804,
    lng: 3.0005,
  },
];
