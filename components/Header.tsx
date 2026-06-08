"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "Accueil", href: "/" },
  { label: "Nos Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

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
          </div>
          <div className="flex items-center gap-3 flex-wrap text-xs">
            <span className="hidden md:inline text-blue-200">Agréé vidangeur · CATEC · Habilitation électrique</span>
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
            alt="Vilbert Hydro — Débouchage, Curage et Assainissement en Hauts-de-France"
            width={200}
            height={72}
            priority
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((item) => (
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

      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          {nav.map((item) => (
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
