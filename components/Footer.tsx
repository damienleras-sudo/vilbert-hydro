import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Bande urgence */}
      <div className="bg-red-600 py-3 text-center text-white font-black text-sm">
        🚨 URGENCES 24h/24 — 7j/7 — Week-ends et jours fériés inclus —{" "}
        <a href="tel:0322917201" className="underline hover:text-yellow-300">03 22 91 72 01</a>
      </div>

      {/* CTA */}
      <div className="bg-[#1b4f8c] py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white">
              Canalisation bouchée ? Fosse à vidanger ?
            </h2>
            <p className="text-blue-200 mt-1">
              Intervention rapide — Devis gratuit — Picardie (80 · 60 · 02)
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            <a
              href="tel:0322917201"
              className="bg-[#f5b800] text-gray-900 font-bold px-6 py-3 rounded hover:bg-[#ffd44d] transition-colors"
            >
              📞 03 22 91 72 01
            </a>
            <a
              href="mailto:hydro@groupe-vilbert.fr"
              className="border-2 border-white text-white font-bold px-6 py-3 rounded hover:bg-white hover:text-[#1b4f8c] transition-colors"
            >
              ✉️ hydro@groupe-vilbert.fr
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* COL 1 — Logo + description */}
        <div>
          {/* Logo sur fond blanc pour lisibilité */}
          <div className="mb-4 inline-block bg-white rounded-lg px-3 py-2">
            <Image
              src="/logo.png"
              alt="Vilbert Hydro"
              width={180}
              height={65}
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Filiale du Groupe Vilbert, spécialiste du débouchage, curage et assainissement
            en Picardie (Somme, Oise, Aisne) depuis plus de 30 ans.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Agréé vidangeur", "CATEC", "N1/N2", "Habilitation élec."].map((c) => (
              <span key={c} className="text-xs bg-[#f5b800]/20 text-[#f5b800] border border-[#f5b800]/30 px-2 py-0.5 rounded">
                {c}
              </span>
            ))}
          </div>
          {/* Réseaux sociaux */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/p/Vilbert-Hydro-100092874391446/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1877F2] text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-[#1565d8] transition-colors"
              aria-label="Page Facebook Vilbert Hydro"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a
              href="https://share.google/PQU1deHsGCgaHebS9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded hover:bg-white/20 transition-colors"
              aria-label="Avis Google Vilbert Hydro"
            >
              <span className="text-yellow-400">★</span>
              Google
            </a>
          </div>
        </div>

        {/* COL 2 — Services */}
        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Nos Services
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/services#debouchage" className="hover:text-white transition-colors">Débouchage canalisations</Link></li>
            <li><Link href="/services#curage" className="hover:text-white transition-colors">Curage & Hydrocurage</Link></li>
            <li><Link href="/services#inspection" className="hover:text-white transition-colors">Inspection télévisée</Link></li>
            <li><Link href="/vidange-fosse-septique" className="hover:text-white transition-colors font-semibold text-[#f5b800]/80">Vidange fosse septique ↗</Link></li>
            <li><Link href="/services#relevage" className="hover:text-white transition-colors">Maintenance poste de relevage</Link></li>
            <li><Link href="/services#electromecanique" className="hover:text-white transition-colors">Électromécanique</Link></li>
            <li><Link href="/services#restauration" className="hover:text-white transition-colors">Bacs à graisses restaurants</Link></li>
            <li><Link href="/services#industriel" className="hover:text-white transition-colors">Assainissement industriel</Link></li>
          </ul>
        </div>

        {/* COL 3 — Zones */}
        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Zones Picardie
          </h3>
          <ul className="space-y-1 text-gray-400 text-xs">
            {[
              { label: "Amiens", slug: "amiens" },
              { label: "Abbeville", slug: "abbeville" },
              { label: "Péronne", slug: "peronne" },
              { label: "Albert", slug: "albert" },
              { label: "Montdidier", slug: "montdidier" },
              { label: "Doullens", slug: "doullens" },
              { label: "Compiègne", slug: "compiegne" },
              { label: "Beauvais", slug: "beauvais" },
              { label: "Soissons", slug: "soissons" },
            ].map((v) => (
              <li key={v.slug}>
                <Link href={`/debouchage-${v.slug}`} className="hover:text-white transition-colors">
                  Débouchage {v.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="font-bold text-[#f5b800] mt-5 mb-3 uppercase text-sm tracking-wide">
            Autres villes
          </h3>
          <ul className="space-y-1 text-gray-400 text-xs">
            {[
              { label: "Arras", slug: "arras" },
              { label: "Lens", slug: "lens" },
              { label: "Saint-Quentin", slug: "saint-quentin" },
              { label: "Laon", slug: "laon" },
            ].map((v) => (
              <li key={v.slug}>
                <Link href={`/debouchage-${v.slug}`} className="hover:text-white transition-colors">
                  Débouchage {v.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* COL 4 — Contact */}
        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Contact
          </h3>
          <address className="not-italic text-gray-400 text-sm space-y-2.5">
            <div>
              <p className="text-white font-semibold text-xs mb-0.5">📍 Siège social</p>
              <p>620 Rue Stéphane Hessel</p>
              <p>80450 Camon (Somme)</p>
            </div>
            <p className="text-2xl font-black">
              <a href="tel:0322917201" className="text-white hover:text-[#f5b800] transition-colors">
                03 22 91 72 01
              </a>
            </p>
            <p>
              <a href="mailto:hydro@groupe-vilbert.fr" className="hover:text-white transition-colors break-all">
                hydro@groupe-vilbert.fr
              </a>
            </p>
            <div className="border-t border-gray-700 pt-2.5 space-y-1">
              <p className="text-red-400 font-black">🚨 Urgences 24h/24 — 7j/7</p>
              <p className="text-gray-500 text-xs">WE et jours fériés inclus</p>
              <p className="text-gray-500 text-xs">Zone d&apos;intervention : 80 km autour de Camon</p>
            </div>
          </address>
          <div className="mt-4">
            <a
              href="https://www.groupe-vilbert.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold px-3 py-1.5 rounded hover:bg-[#ffd44d] transition-colors"
            >
              ↗ Groupe Vilbert
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {currentYear} Vilbert Hydro – 620 Rue Stéphane Hessel, 80450 Camon – Tous droits réservés</p>
          <p className="flex items-center gap-3 flex-wrap justify-center">
            <span>Agréé vidangeur · CATEC · Habilitation électrique · Picardie (80·60·02)</span>
            <Link href="/mentions-legales" className="hover:text-gray-300 transition-colors underline">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-gray-300 transition-colors underline">Politique de confidentialité</Link>
            <Link href="/conditions-generales" className="hover:text-gray-300 transition-colors underline">Conditions générales</Link>
            <Link href="/politique-cookies" className="hover:text-gray-300 transition-colors underline">Politique cookies</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
