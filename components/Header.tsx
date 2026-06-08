"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const nav = [
  { label: "Accueil", href: "/" },
  { label: "Nos Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-[#1b4f8c] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span>
              📞{" "}
              <a href="tel:0322917201" className="hover:text-[#f5b800] transition-colors font-semibold">
                03 22 91 72 01
              </a>
            </span>
            <span className="hidden md:inline">
              ✉️{" "}
              <a href="mailto:hydro@groupe-vilbert.fr" className="hover:text-[#f5b800] transition-colors">
                hydro@groupe-vilbert.fr
              </a>
            </span>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <span className="hidden sm:block">🚨 Urgences 24h/24 — 7j/7</span>
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

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" aria-label="Vilbert Hydro — Accueil">
          <Image
            src="/logo.png"
            alt="Vilbert Hydro — Débouchage, Curage et Assainissement en Hauts-de-France"
            width={220}
            height={80}
            priority
            className="h-12 w-auto object-contain"
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
          <a
            href="tel:0322917201"
            className="bg-[#f5b800] text-gray-900 font-bold px-5 py-2 rounded hover:bg-[#ffd44d] transition-colors text-sm"
          >
            📞 Devis gratuit
          </a>
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
          <div className="px-4 py-3">
            <a
              href="tel:0322917201"
              className="block text-center bg-[#f5b800] text-gray-900 font-bold px-5 py-2 rounded hover:bg-[#ffd44d] transition-colors"
              onClick={() => setOpen(false)}
            >
              📞 03 22 91 72 01
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
