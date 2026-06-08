import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { villes } from "@/lib/villes";
import FAQ from "@/components/FAQ";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return villes.map((v) => ({ slug: `debouchage-${v.slug}` }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const villeSlug = slug.replace(/^debouchage-/, "");
  const v = villes.find((x) => x.slug === villeSlug);
  if (!v) return {};
  return {
    title: `Débouchage ${v.nom} (${v.codePostal}) — Vilbert Hydro`,
    description: `Débouchage de canalisations à ${v.nom} (${v.departement}). Vilbert Hydro intervient rapidement pour vos urgences. Curage, vidange fosse septique, inspection télévisée. Devis gratuit au 03 22 91 72 01.`,
    alternates: { canonical: `https://vilbert-hydro.vercel.app/debouchage-${v.slug}` },
  };
}

export default async function VillePage({ params }: Props) {
  const { slug } = await params;
  if (!slug.startsWith("debouchage-")) notFound();
  const villeSlug = slug.replace(/^debouchage-/, "");
  const v = villes.find((x) => x.slug === villeSlug);
  if (!v) notFound();

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Débouchage canalisations ${v.nom}`,
    description: `Service de débouchage de canalisations à ${v.nom} (${v.departement}). Intervention urgente 24h/24. Curage, vidange fosse septique, inspection télévisée.`,
    provider: {
      "@type": "LocalBusiness",
      name: "Vilbert Hydro",
      telephone: "+33322917201",
      url: "https://vilbert-hydro.vercel.app",
    },
    areaServed: {
      "@type": "City",
      name: v.nom,
      containedInPlace: { "@type": "AdministrativeArea", name: v.departement },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      {/* HERO */}
      <section className="bg-[#1b4f8c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
            📍 {v.description}
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Débouchage Canalisations {v.nom}
          </h1>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <p className="text-blue-100 max-w-2xl text-lg mb-8">
            Vilbert Hydro intervient rapidement à <strong>{v.nom}</strong> et dans tout le{" "}
            {v.departement} pour le débouchage de canalisations, le curage, la vidange de fosses
            septiques et l&apos;inspection télévisée. Urgences 24h/24.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:0322917201"
              className="bg-[#f5b800] text-gray-900 font-black px-8 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors"
            >
              📞 03 22 91 72 01
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded text-lg hover:bg-white hover:text-[#1b4f8c] transition-colors"
            >
              Devis gratuit →
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-black text-[#1b4f8c] mb-4">
                Débouchage rapide à {v.nom} — Intervention 24h/24
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Un évier bouché, des WC qui débordent, une canalisation qui refoule à {v.nom} ?
                L&apos;équipe Vilbert Hydro intervient rapidement dans toute la ville et ses
                environs pour résoudre votre problème d&apos;assainissement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Grâce à notre matériel de débouchage professionnel et à nos techniciens
                expérimentés, nous traitons tous les types de bouchons : simples obstructions,
                bouchons tenaces, racines d&apos;arbres, dépôts calcaires ou graisses accumulées.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#1b4f8c] mb-4">
                Nos services à {v.nom}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "🚿", titre: "Débouchage canalisation", href: "/services#debouchage" },
                  { icon: "💧", titre: "Curage & Hydrocurage", href: "/services#curage" },
                  { icon: "📷", titre: "Inspection télévisée", href: "/services#inspection" },
                  { icon: "🏠", titre: "Vidange fosse septique", href: "/services#vidange" },
                  { icon: "🍽️", titre: "Bacs à graisses restaurants", href: "/services#restauration" },
                  { icon: "🏭", titre: "Assainissement industriel", href: "/services#industriel" },
                ].map((s) => (
                  <Link
                    key={s.titre}
                    href={s.href}
                    className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-[#1b4f8c] transition-colors"
                  >
                    <span className="text-2xl">{s.icon}</span>
                    <span className="font-semibold text-gray-900 text-sm">{s.titre}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-[#1b4f8c] mb-4">
                Particuliers et professionnels à {v.nom}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Que vous soyez un particulier avec une canalisation bouchée, un restaurateur qui
                doit entretenir son bac à graisses, ou un industriel avec un réseau à curer,
                Vilbert Hydro dispose de l&apos;équipement et de l&apos;expérience pour intervenir.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nous proposons des <strong>contrats de maintenance</strong> pour les professionnels
                de la restauration et les sites industriels de {v.nom} — une solution clé en main
                pour rester en conformité réglementaire.
              </p>
            </div>
          </div>

          <aside className="space-y-5">
            <div className="bg-[#1b4f8c] rounded-xl p-6 text-white sticky top-24">
              <h3 className="font-black text-lg mb-2">Intervention à {v.nom}</h3>
              <div className="w-10 h-0.5 bg-[#f5b800] mb-4" />
              <address className="not-italic space-y-3 text-blue-100 text-sm">
                <p>📍 {v.nom} ({v.codePostal})</p>
                <p className="text-xl font-black text-white">
                  📞{" "}
                  <a href="tel:0322917201" className="hover:text-[#f5b800] transition-colors">
                    03 22 91 72 01
                  </a>
                </p>
                <p>
                  ✉️{" "}
                  <a href="mailto:hydro@groupe-vilbert.fr" className="hover:text-white transition-colors">
                    hydro@groupe-vilbert.fr
                  </a>
                </p>
                <div className="border-t border-blue-700 pt-3 mt-3">
                  <p className="text-[#f5b800] font-bold">🚨 Urgences 24h/24 · 7j/7</p>
                </div>
              </address>
              <Link
                href="/contact"
                className="mt-4 block text-center bg-[#f5b800] text-gray-900 font-bold px-4 py-3 rounded hover:bg-[#ffd44d] transition-colors text-sm"
              >
                Devis gratuit →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">Autres villes</h3>
              <ul className="space-y-1.5">
                {villes.filter((x) => x.slug !== villeSlug).slice(0, 6).map((x) => (
                  <li key={x.slug}>
                    <Link
                      href={`/debouchage-${x.slug}`}
                      className="text-sm text-[#1b4f8c] hover:underline"
                    >
                      Débouchage {x.nom} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <FAQ />
    </>
  );
}
