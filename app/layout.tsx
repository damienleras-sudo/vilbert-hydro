import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SchemaOrg from "@/components/SchemaOrg";

const BASE_URL = "https://vilbert-hydro.fr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vilbert Hydro | Débouchage · Vidange Fosse Septique · Assainissement — Picardie (80·60·02)",
    template: "%s | Vilbert Hydro",
  },
  description:
    "Vilbert Hydro — agréé vidangeur préfectoral : débouchage canalisation, curage, vidange fosse septique agréé, inspection télévisée, maintenance poste de relevage en Picardie (Somme, Oise, Aisne). Urgences 24h/24 7j/7. Agents CATEC habilités N1/N2. ☎ 03 22 91 72 01.",
  keywords: [
    // Somme priorité
    "débouchage Somme",
    "débouchage Amiens",
    "débouchage canalisation Somme 80",
    "curage canalisation Somme",
    "vidange fosse septique Somme",
    "assainissement Somme",
    "hydrocurage Amiens",
    "débouchage Abbeville",
    "débouchage Péronne",
    "débouchage Albert Somme",
    // Services
    "débouchage canalisation",
    "curage hydrocurage",
    "inspection télévisée canalisation",
    "vidange fosse septique",
    "vidange fosse septique Picardie",
    "vidange fosse septique Amiens",
    "vidange fosse septique Compiègne",
    "vidange fosse septique Beauvais",
    "bac à graisses restaurant",
    "maintenance poste de relevage",
    "électromécanique assainissement",
    "assainissement industriel",
    // Certifications
    "agrément vidangeur",
    "entreprise CATEC",
    "habilitation électrique assainissement",
    // Clients
    "débouchage syndic copropriété",
    "assainissement agricole",
    "curage réseau industriel",
    // Geo Picardie
    "Picardie",
    "assainissement Picardie",
    "débouchage Picardie",
    "Oise 60",
    "Aisne 02",
    "Beauvais",
    "Soissons",
    "Laon",
    "Noyon",
    "Hauts-de-France",
    "urgence débouchage 24h 7j/7",
    "Vilbert Hydro",
    "Groupe Vilbert",
    "dégazage cuve fioul",
    "balayage voirie Picardie",
    "séparateur hydrocarbures",
    "sous-produits animaux",
    "nettoyage haute pression sol",
    "assainissement particulier",
    "assainissement collectivité",
    "assainissement industrie",
    "TrackDéchets",
    "agrément ADR",
  ],
  openGraph: {
    title: "Vilbert Hydro | Débouchage, Curage & Assainissement — Picardie (80·60·02)",
    description:
      "Débouchage, curage, vidange fosse septique agréé, maintenance postes de relevage en Picardie (Somme, Oise, Aisne). Urgences 24h/24. Agréé vidangeur · CATEC · Habilitation électrique.",
    url: BASE_URL,
    siteName: "Vilbert Hydro",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Vilbert Hydro — Assainissement Picardie" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilbert Hydro | Débouchage & Assainissement Picardie — Urgences 24h/24",
    description: "Débouchage, curage, vidange fosse septique agréé. Picardie (Somme, Oise, Aisne). Urgences 24h/24. Agréé vidangeur · CATEC.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  alternates: { canonical: BASE_URL },
  verification: {
    // Coller ici le code Google Search Console (ex: "abc123xyz")
    // Obtenir sur : https://search.google.com/search-console → Ajouter une propriété → Balise HTML
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#1b4f8c",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <head>
        <SchemaOrg />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
