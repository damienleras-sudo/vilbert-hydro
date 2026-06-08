import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import SchemaOrg from "@/components/SchemaOrg";

const BASE_URL = "https://vilbert-hydro.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vilbert Hydro | Débouchage Curage Assainissement — Somme 80 & Hauts-de-France",
    template: "%s | Vilbert Hydro",
  },
  description:
    "Vilbert Hydro — débouchage canalisation, curage, hydrocurage, vidange fosse septique, inspection télévisée, maintenance poste de relevage. Somme (80), Hauts-de-France. Urgences 24h/24 7j/7. Agréé vidangeur. Agents CATEC habilités N1/N2. ☎ 03 22 91 72 01.",
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
    // Geo
    "Hauts-de-France",
    "urgence débouchage 24h 7j/7",
    "Vilbert Hydro",
    "Groupe Vilbert",
  ],
  openGraph: {
    title: "Vilbert Hydro | Débouchage, Curage & Assainissement — Somme & Hauts-de-France",
    description:
      "Débouchage, curage, vidange fosse septique, maintenance postes de relevage. Somme (80) et Hauts-de-France. Urgences 24h/24. Agréé vidangeur · CATEC · Habilitation électrique.",
    url: BASE_URL,
    siteName: "Vilbert Hydro",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Vilbert Hydro — Assainissement Somme" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilbert Hydro | Débouchage & Assainissement Somme — Urgences 24h/24",
    description: "Débouchage, curage, vidange fosse septique. Somme (80), Hauts-de-France. Urgences 24h/24. Agréé vidangeur · CATEC.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  alternates: { canonical: BASE_URL },
  verification: {
    google: undefined,
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
