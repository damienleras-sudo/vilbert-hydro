"use client";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="tel:0322917201"
        className="flex items-center gap-2 bg-[#1b4f8c] text-white font-bold px-5 py-3 rounded-full shadow-2xl hover:bg-[#0f2942] transition-all hover:scale-105"
        aria-label="Appeler Vilbert Hydro"
      >
        <span className="text-xl">📞</span>
        <span className="hidden sm:inline text-sm">03 22 91 72 01</span>
      </a>
      <a
        href="mailto:hydro@groupe-vilbert.fr"
        className="flex items-center gap-2 bg-[#f5b800] text-gray-900 font-bold px-5 py-3 rounded-full shadow-2xl hover:bg-[#ffd44d] transition-all hover:scale-105"
        aria-label="Envoyer un mail"
      >
        <span className="text-xl">✉️</span>
        <span className="hidden sm:inline text-sm">Devis gratuit</span>
      </a>
    </div>
  );
}
