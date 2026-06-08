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
    default: "Vilbert Hydro | Débouchage, Curage & Assainissement — Hauts-de-France",
    template: "%s | Vilbert Hydro",
  },
  description:
    "Vilbert Hydro : débouchage de canalisations, curage, hydrocurage, inspection télévisée et vidange de fosses septiques en Hauts-de-France. Particuliers et professionnels. Urgences 24h/24 — Devis gratuit au 03 22 91 72 01.",
  keywords: [
    "débouchage canalisation",
    "curage canalisation",
    "hydrocurage",
    "vidange fosse septique",
    "inspection télévisée canalisation",
    "bac à graisses restaurant",
    "assainissement",
    "débouchage Amiens",
    "débouchage Somme",
    "Hauts-de-France",
    "urgence plomberie",
    "nettoyage réseau",
  ],
  openGraph: {
    title: "Vilbert Hydro | Débouchage, Curage & Assainissement",
    description:
      "Débouchage, curage, vidange fosse septique en Hauts-de-France. Particuliers et professionnels. Urgences 24h/24.",
    url: BASE_URL,
    siteName: "Vilbert Hydro",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Vilbert Hydro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilbert Hydro | Débouchage & Assainissement Hauts-de-France",
    description: "Débouchage, curage, vidange fosse septique. Urgences 24h/24.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: BASE_URL },
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
