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
              Intervention rapide — Devis gratuit — Somme & Hauts-de-France
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
        <div>
          <div className="mb-4">
            <Image
              src="/logo.png"
              alt="Vilbert Hydro"
              width={200}
              height={72}
              className="h-12 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Filiale du Groupe Vilbert, spécialiste du débouchage, curage et assainissement
            en Somme et Hauts-de-France depuis plus de 30 ans.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Agréé vidangeur", "CATEC", "N1/N2", "Habilitation élec."].map((c) => (
              <span key={c} className="text-xs bg-[#f5b800]/20 text-[#f5b800] border border-[#f5b800]/30 px-2 py-0.5 rounded">
                {c}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Nos Services
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/services#debouchage" className="hover:text-white transition-colors">Débouchage canalisations</Link></li>
            <li><Link href="/services#curage" className="hover:text-white transition-colors">Curage & Hydrocurage</Link></li>
            <li><Link href="/services#inspection" className="hover:text-white transition-colors">Inspection télévisée</Link></li>
            <li><Link href="/services#vidange" className="hover:text-white transition-colors">Vidange fosse septique</Link></li>
            <li><Link href="/services#relevage" className="hover:text-white transition-colors">Maintenance poste de relevage</Link></li>
            <li><Link href="/services#electromecanique" className="hover:text-white transition-colors">Électromécanique</Link></li>
            <li><Link href="/services#restauration" className="hover:text-white transition-colors">Bacs à graisses restaurants</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Zones Somme (80)
          </h3>
          <ul className="space-y-1 text-gray-400 text-xs">
            {[
              { label: "Amiens", slug: "amiens" },
              { label: "Abbeville", slug: "abbeville" },
              { label: "Péronne", slug: "peronne" },
              { label: "Albert", slug: "albert" },
              { label: "Montdidier", slug: "montdidier" },
              { label: "Doullens", slug: "doullens" },
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
            ].map((v) => (
              <li key={v.slug}>
                <Link href={`/debouchage-${v.slug}`} className="hover:text-white transition-colors">
                  Débouchage {v.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[#f5b800] mb-4 uppercase text-sm tracking-wide">
            Contact
          </h3>
          <address className="not-italic text-gray-400 text-sm space-y-3">
            <p>📍 Somme (80) & Hauts-de-France</p>
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
            <div className="border-t border-gray-700 pt-3 mt-3 space-y-1">
              <p className="text-red-400 font-black">🚨 Urgences 24h/24 — 7j/7</p>
              <p className="text-gray-500 text-xs">WE et jours fériés inclus</p>
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
          <p>© {currentYear} Vilbert Hydro – Tous droits réservés</p>
          <p>
            Agréé vidangeur · CATEC · Habilitation électrique · Somme (80) · Hauts-de-France
          </p>
        </div>
      </div>
    </footer>
  );
}
