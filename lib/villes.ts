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
  {
    slug: "amiens",
    nom: "Amiens",
    departement: "Somme",
    codePostal: "80000",
    description: "Amiens et son agglomération — Somme (80)",
    lat: 49.8941,
    lng: 2.2958,
  },
  {
    slug: "abbeville",
    nom: "Abbeville",
    departement: "Somme",
    codePostal: "80100",
    description: "Abbeville et le Ponthieu — Somme (80)",
    lat: 50.1049,
    lng: 1.8328,
  },
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
  {
    slug: "saint-quentin",
    nom: "Saint-Quentin",
    departement: "Aisne",
    codePostal: "02100",
    description: "Saint-Quentin et le Saint-Quentinois — Aisne (02)",
    lat: 49.8467,
    lng: 3.2878,
  },
  {
    slug: "compiegne",
    nom: "Compiègne",
    departement: "Oise",
    codePostal: "60200",
    description: "Compiègne et la vallée de l'Oise — Oise (60)",
    lat: 49.4183,
    lng: 2.8258,
  },
  {
    slug: "douai",
    nom: "Douai",
    departement: "Nord",
    codePostal: "59500",
    description: "Douai et le Douaisis — Nord (59)",
    lat: 50.3714,
    lng: 3.0794,
  },
  {
    slug: "valenciennes",
    nom: "Valenciennes",
    departement: "Nord",
    codePostal: "59300",
    description: "Valenciennes et le Valenciennois — Nord (59)",
    lat: 50.3569,
    lng: 3.5228,
  },
];
