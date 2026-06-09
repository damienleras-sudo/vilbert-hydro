"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const servicesMenu = [
  {
    category: "🔧 Assainissement & Réseaux",
    items: [
      { label: "Débouchage canalisation", href: "/debouchage-canalisation", desc: "Urgences 24h/24, furet, hydrocurage" },
      { label: "Hydrocurage haute pression", href: "/hydrocurage-haute-pression", desc: "200 bars, lance rotative 360°" },
      { label: "Inspection télévisée", href: "/inspection-televisee", desc: "Caméra HD, rapport vidéo inclus" },
      { label: "Vidange fosse septique", href: "/vidange-fosse-septique", desc: "Agréé vidangeur, BSMD" },
      { label: "Maintenance poste de relevage", href: "/maintenance-poste-relevage", desc: "Habilitation élec. N1/N2" },
    ],
  },
  {
    category: "🚛 Nettoyage & Voirie",
    items: [
      { label: "Nettoyage haute pression sol", href: "/nettoyage-haute-pression-sol", desc: "Éco-responsable, eaux pluviales récupérées" },
      { label: "Balayage voirie & chantiers", href: "/balayage-voirie", desc: "Camion balayeur-aspirateur" },
      { label: "Séparateur hydrocarbures", href: "/separateur-hydrocarbures", desc: "Norme EN 858, rapport conformité" },
    ],
  },
  {
    category: "☣️ Déchets & Spécialisé",
    items: [
      { label: "Dégazage cuve fioul", href: "/degazage-cuve-fioul", desc: "Agrément ADR, TrackDéchets" },
      { label: "Sous-produits animaux", href: "/sous-produits-animaux", desc: "Agrément cat. 2 & 3, CE 1069/2009" },
    ],
  },
  {
    category: "🏢 Par type de client",
    items: [
      { label: "Copropriété & Syndic", href: "/assainissement-copropriete", desc: "Réseau collectif, contrat annuel" },
      { label: "Restaurants & CHR", href: "/assainissement-restaurant", desc: "Bac graisses, bac dégraisseur" },
      { label: "Agriculteurs", href: "/assainissement-agriculteur", desc: "Fosse, réseau, cours de ferme" },
      { label: "Contrat maintenance", href: "/contrat-maintenance", desc: "Entretien préventif planifié" },
    ],
  },
];

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Avis clients", href: "/avis-clients" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Barre d'urgence 24h/24 — très visible */}
      <div className="bg-red-600 text-white text-center py-1.5 text-xs sm:text-sm font-bold tracking-wide">
        🚨 URGENCES 24h/24 — 7j/7 — WE et jours fériés inclus —{" "}
        <a href="tel:0322917201" className="underline hover:text-yellow-300 transition-colors">
          03 22 91 72 01
        </a>
      </div>

      {/* Barre de contact */}
      <div className="bg-[#1b4f8c] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-5 flex-wrap">
            <a
              href="tel:0322917201"
              className="flex items-center gap-1.5 hover:text-[#f5b800] transition-colors font-bold"
            >
              <span>📞</span>
              <span>03 22 91 72 01</span>
            </a>
            <a
              href="mailto:hydro@groupe-vilbert.fr"
              className="hidden md:flex items-center gap-1.5 hover:text-[#f5b800] transition-colors"
            >
              <span>✉️</span>
              <span>hydro@groupe-vilbert.fr</span>
            </a>
            <span className="hidden lg:flex items-center gap-1 text-green-300 font-bold text-xs">
              ✓ Arrivée en moins de 2h en urgence
            </span>
          </div>
          <div className="flex items-center gap-3 flex-wrap text-xs">
            <span className="hidden md:inline text-blue-200">Agréé vidangeur · CATEC · ADR · Habilitation électrique</span>
            <a
              href="https://www.facebook.com/p/Vilbert-Hydro-100092874391446/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-200 hover:text-white transition-colors"
              aria-label="Facebook Vilbert Hydro"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a
              href="https://www.groupe-vilbert.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-[#f5b800] text-gray-900 text-xs font-bold px-2 py-1 rounded hover:bg-[#ffd44d] transition-colors"
            >
              Groupe Vilbert →
            </a>
          </div>
        </div>
      </div>

      {/* Logo + nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" aria-label="Vilbert Hydro — Accueil">
          <Image
            src="/logo.png"
            alt="Vilbert Hydro — Débouchage, Curage et Assainissement en Picardie"
            width={200}
            height={72}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-6">
          {/* MEGA-MENU SERVICES */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-gray-700 font-semibold hover:text-[#1b4f8c] transition-colors text-sm uppercase tracking-wide"
              aria-expanded={servicesOpen}
            >
              Nos Services
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[860px] z-50">
                <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
                  {/* Header du mega-menu */}
                  <div className="bg-[#1b4f8c] px-6 py-3 flex items-center justify-between">
                    <span className="text-white font-bold text-sm">Toutes nos prestations</span>
                    <Link
                      href="/services"
                      className="text-[#f5b800] text-xs font-semibold hover:underline"
                    >
                      Voir la page services complète →
                    </Link>
                  </div>

                  {/* Grille 4 colonnes */}
                  <div className="grid grid-cols-4 gap-0 divide-x divide-gray-100">
                    {servicesMenu.map((col) => (
                      <div key={col.category} className="p-4">
                        <p className="text-xs font-bold text-[#1b4f8c] uppercase tracking-wide mb-3 pb-2 border-b border-gray-100">
                          {col.category}
                        </p>
                        <ul className="space-y-1">
                          {col.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="group block px-2 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
                              >
                                <span className="block text-sm font-semibold text-gray-800 group-hover:text-[#1b4f8c]">
                                  {item.label}
                                </span>
                                <span className="block text-xs text-gray-500 leading-tight mt-0.5">
                                  {item.desc}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Footer du mega-menu */}
                  <div className="bg-gray-50 px-6 py-3 flex items-center gap-6 border-t border-gray-100">
                    <span className="text-xs text-gray-500">📍 Somme (80) · Oise (60) · Aisne (02) · Pas-de-Calais</span>
                    <span className="text-xs text-gray-500">✅ Agréé vidangeur · ADR · CATEC N1/N2 · TrackDéchets</span>
                    <a
                      href="tel:0322917201"
                      className="ml-auto bg-[#f5b800] text-gray-900 font-bold text-xs px-4 py-2 rounded hover:bg-[#ffd44d] transition-colors whitespace-nowrap"
                    >
                      📞 Devis gratuit
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Autres liens */}
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 font-semibold hover:text-[#1b4f8c] transition-colors text-sm uppercase tracking-wide"
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center gap-2">
            <a
              href="mailto:hydro@groupe-vilbert.fr"
              className="border border-[#1b4f8c] text-[#1b4f8c] font-bold px-4 py-2 rounded hover:bg-[#1b4f8c] hover:text-white transition-colors text-sm"
            >
              ✉️ Email
            </a>
            <a
              href="tel:0322917201"
              className="bg-[#f5b800] text-gray-900 font-bold px-5 py-2 rounded hover:bg-[#ffd44d] transition-colors text-sm"
            >
              📞 03 22 91 72 01
            </a>
          </div>
        </nav>

        {/* Burger mobile */}
        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-700 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-700" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white max-h-[80vh] overflow-y-auto">
          {/* Nos Services avec sous-menu accordéon */}
          <div>
            <button
              className="w-full flex items-center justify-between px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 border-b border-gray-100"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <span>Nos Services</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileServicesOpen && (
              <div className="bg-gray-50 border-b border-gray-200">
                {servicesMenu.map((col) => (
                  <div key={col.category} className="px-4 pt-3 pb-1">
                    <p className="text-xs font-bold text-[#1b4f8c] uppercase tracking-wide mb-2">
                      {col.category}
                    </p>
                    {col.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-2 py-2 pl-2 border-b border-gray-100 last:border-0"
                        onClick={() => setOpen(false)}
                      >
                        <span className="text-sm font-semibold text-gray-800">{item.label}</span>
                      </Link>
                    ))}
                  </div>
                ))}
                <div className="px-4 py-3">
                  <Link
                    href="/services"
                    className="block text-center text-sm font-bold text-[#1b4f8c] underline"
                    onClick={() => setOpen(false)}
                  >
                    Voir tous les services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Autres liens */}
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 border-b border-gray-100"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="px-4 py-3 space-y-2">
            <a
              href="tel:0322917201"
              className="block text-center bg-[#f5b800] text-gray-900 font-bold px-5 py-3 rounded hover:bg-[#ffd44d] transition-colors text-lg"
              onClick={() => setOpen(false)}
            >
              📞 03 22 91 72 01
            </a>
            <a
              href="mailto:hydro@groupe-vilbert.fr"
              className="block text-center border border-[#1b4f8c] text-[#1b4f8c] font-bold px-5 py-2 rounded transition-colors"
              onClick={() => setOpen(false)}
            >
              ✉️ hydro@groupe-vilbert.fr
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
