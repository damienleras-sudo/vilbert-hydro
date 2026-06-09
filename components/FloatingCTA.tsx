"use client";
import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-2.5">
      <div className="bg-red-600 text-white text-xs font-black px-3 py-1.5 rounded-full text-center shadow-lg animate-pulse">
        🚨 URGENCES 24h/24
      </div>
<a
        href="tel:0322917201"
        className="flex items-center gap-2 bg-[#1b4f8c] text-white font-bold px-5 py-3.5 rounded-full shadow-2xl hover:bg-[#0f2942] transition-all hover:scale-105"
        aria-label="Appeler Vilbert Hydro"
      >
        <span className="text-xl">📞</span>
        <span className="text-sm font-black">03 22 91 72 01</span>
      </a>
      <a
        href="mailto:hydro@groupe-vilbert.fr"
        className="flex items-center gap-2 bg-[#f5b800] text-gray-900 font-bold px-5 py-3 rounded-full shadow-2xl hover:bg-[#ffd44d] transition-all hover:scale-105"
        aria-label="Envoyer un email"
      >
        <span className="text-xl">✉️</span>
        <span className="text-sm">Devis gratuit</span>
      </a>
    </div>
  );
}
