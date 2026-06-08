import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-posts";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TrustBanner from "@/components/TrustBanner";

const services = [
  {
    icon: "🚿",
    title: "Débouchage canalisations",
    desc: "Intervention rapide pour déboucher vos canalisations bouchées. Particuliers et professionnels. Urgences 24h/24.",
    href: "/services#debouchage",
    img: "/20221028_083531.jpg",
  },
  {
    icon: "💧",
    title: "Curage & Hydrocurage",
    desc: "Nettoyage haute pression de vos réseaux d'assainissement. Dépôts, graisses, racines éliminés.",
    href: "/services#curage",
    img: "/hydrocurage-de-canalisation.webp",
  },
  {
    icon: "📷",
    title: "Inspection télévisée",
    desc: "Diagnostic précis par caméra robotisée. Rapport complet avec images et recommandations.",
    href: "/services#inspection",
    img: null,
  },
  {
    icon: "🏠",
    title: "Vidange fosse septique",
    desc: "Vidange et entretien de fosses septiques, fosses toutes eaux. Respect des obligations légales.",
    href: "/services#vidange",
    img: "/poste de relevage  après entretien de maintenance 1.jpg",
  },
];

const clientTypes = [
  {
    icon: "🏘️",
    title: "Particuliers",
    desc: "Canalisation bouchée, fosse à vidanger, douche qui refoule — nous intervenons rapidement chez vous.",
    cta: "Je suis particulier",
  },
  {
    icon: "🍽️",
    title: "Restaurants & Métiers de bouche",
    desc: "Entretien bacs à graisses, débouchage, contrats de maintenance. Conformité réglementaire garantie.",
    cta: "Je suis restaurateur",
  },
  {
    icon: "🏭",
    title: "Professionnels & Industries",
    desc: "Curage de réseaux industriels, vidange de bacs, interventions sur sites. Devis sur mesure.",
    cta: "Je suis professionnel",
  },
];

const avantages = [
  { titre: "Urgences 24h/24", desc: "Disponible 7j/7, y compris week-ends et jours fériés. Intervention rapide garantie." },
  { titre: "Devis gratuit", desc: "Estimation gratuite et sans engagement. Tarif fixé avant intervention, sans mauvaise surprise." },
  { titre: "+30 ans d'expérience", desc: "Filiale du Groupe Vilbert, expert en assainissement depuis plus de 30 ans en Hauts-de-France." },
  { titre: "Certifié & agréé", desc: "Bordereaux de suivi fournis. Conformité totale avec la réglementation en vigueur." },
];

const zoneVilles = [
  { label: "Amiens", slug: "amiens" },
  { label: "Abbeville", slug: "abbeville" },
  { label: "Arras", slug: "arras" },
  { label: "Lens", slug: "lens" },
  { label: "Saint-Quentin", slug: "saint-quentin" },
  { label: "Compiègne", slug: "compiegne" },
  { label: "Douai", slug: "douai" },
  { label: "Valenciennes", slug: "valenciennes" },
];

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#1b4f8c] text-white overflow-hidden">
        {/* Photo de fond semi-transparente */}
        <div className="absolute inset-0">
          <Image
            src="/20210908_131650.jpg"
            alt="Camion hydrocureur Vilbert - débouchage et curage"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-6 tracking-widest">
                🚨 Urgences 24h/24 — 7j/7 — Hauts-de-France
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">
                Débouchage,<br />
                Curage &{" "}
                <span className="text-[#f5b800]">Assainissement</span>
              </h1>
              <p className="text-lg text-blue-100 mb-8 max-w-xl">
                Vilbert Hydro intervient pour le{" "}
                <strong>débouchage de canalisations</strong>, le curage, la vidange de fosses
                septiques et l'inspection télévisée.{" "}
                <strong>Particuliers, restaurants et industries</strong> — devis gratuit.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:0322917201"
                  className="bg-[#f5b800] text-gray-900 font-black px-8 py-4 rounded text-lg hover:bg-[#ffd44d] transition-colors shadow-lg"
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
              <p className="text-blue-300 text-sm mt-4">
                ⚡ Intervention rapide · 📋 Devis gratuit · ✅ Certifié & Agréé
              </p>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { val: "+30 ans", label: "d'expérience" },
                { val: "+2 000", label: "clients" },
                { val: "24h/24", label: "urgences" },
                { val: "6", label: "départements" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
                >
                  <div className="text-4xl font-black text-[#f5b800]">{s.val}</div>
                  <div className="text-blue-200 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* CLIENTS TYPES */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-6">
            Nous intervenons pour
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clientTypes.map((c) => (
              <Link
                key={c.title}
                href="/contact"
                className="group border border-gray-700 rounded-xl p-6 hover:border-[#f5b800] transition-colors"
              >
                <div className="text-3xl mb-3">{c.icon}</div>
                <h3 className="font-black text-lg text-white mb-2 group-hover:text-[#f5b800] transition-colors">
                  {c.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{c.desc}</p>
                <span className="text-[#f5b800] text-sm font-bold">{c.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <TrustBanner />

      {/* SERVICES avec photos */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1b4f8c] mb-3">
              Nos prestations
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto">
              Du débouchage d'urgence à l'entretien régulier de vos réseaux — une solution complète.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 group"
              >
                {s.img && (
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-[#1b4f8c]/30" />
                    <div className="absolute top-3 left-3 text-3xl">{s.icon}</div>
                  </div>
                )}
                <div className="p-6">
                  {!s.img && <div className="text-4xl mb-4">{s.icon}</div>}
                  <h3 className="text-lg font-bold text-[#1b4f8c] mb-2 group-hover:text-[#0f2942]">
                    {s.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  <span className="inline-block mt-4 text-[#f5b800] font-bold text-sm">
                    En savoir plus →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services"
              className="inline-block bg-[#1b4f8c] text-white font-bold px-8 py-3 rounded hover:bg-[#0f2942] transition-colors"
            >
              Voir tous nos services →
            </Link>
          </div>
        </div>
      </section>

      {/* PROS SECTION avec photo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
                Offre professionnelle
              </div>
              <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">
                Restaurants, industries : une offre dédiée
              </h2>
              <div className="w-16 h-1 bg-[#f5b800] mb-6" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Les établissements de restauration et les sites industriels ont des contraintes
                spécifiques en matière d'assainissement. Vilbert Hydro propose des{" "}
                <strong>contrats de maintenance</strong> sur mesure pour garantir votre conformité
                réglementaire.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Entretien et vidange des bacs à graisses",
                  "Curage préventif des réseaux",
                  "Interventions d'urgence prioritaires",
                  "Rapports d'intervention pour vos archives",
                  "Conformité aux normes en vigueur",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="text-[#f5b800] font-black mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-[#1b4f8c] text-white font-bold px-8 py-3 rounded hover:bg-[#0f2942] transition-colors"
              >
                Demander un contrat de maintenance
              </Link>
            </div>
            <div className="space-y-4">
              {/* Photo bac à graisses */}
              <div className="relative rounded-xl overflow-hidden h-52">
                <Image
                  src="/entretien bac dégraisseur.jpg"
                  alt="Entretien bac dégraisseur restaurant - Vilbert Hydro"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-bold">Entretien bac dégraisseur</p>
                </div>
              </div>
              {/* Photo intervention industrielle */}
              <div className="relative rounded-xl overflow-hidden h-52">
                <Image
                  src="/20221028_111003.jpg"
                  alt="Intervention Vilbert Hydro sur site industriel"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-bold">Intervention sur site industriel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1b4f8c] mb-3">
              Pourquoi choisir Vilbert Hydro ?
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((a) => (
              <div
                key={a.titre}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-[#1b4f8c] flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-[#f5b800] rounded-full" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{a.titre}</h3>
                <p className="text-gray-600 text-sm">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE PHOTOS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Nos équipes en action</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-xl mx-auto">
              Des véhicules équipés et des techniciens expérimentés pour toutes vos interventions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/15403663_1320018538019104_2463712989386103737_o.jpg", alt: "Flotte de véhicules Vilbert Hydro - camions hydrocureurs" },
              { src: "/20210908_131650.jpg", alt: "Camion hydrocureur Vilbert - débouchage curage" },
              { src: "/20221028_083531.jpg", alt: "Intervention débouchage canalisation Vilbert Hydro" },
              { src: "/photo d'intervention  entretien et remise en fonction d'un puisard.jpg", alt: "Entretien et remise en fonction d'un puisard" },
              { src: "/poste de relevage  après entretien de maintenance 1.jpg", alt: "Poste de relevage après entretien de maintenance" },
              { src: "/HYDROCURAGE-dessin.png", alt: "Schéma hydrocurage de canalisation" },
            ].map((photo, i) => (
              <div key={i} className={`relative rounded-xl overflow-hidden ${i === 0 ? "md:col-span-2 h-64" : "h-48"}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE + CONTACT CARD */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Zone d&apos;intervention</h2>
              <div className="w-16 h-1 bg-[#f5b800] mb-6" />
              <p className="text-gray-600 mb-6">
                Vilbert Hydro intervient dans toute la région{" "}
                <strong>Hauts-de-France</strong> : Somme, Pas-de-Calais, Oise, Aisne, Nord et
                Seine-Maritime. Nos équipes sont mobiles et réactives.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {zoneVilles.map((v) => (
                  <Link
                    key={v.slug}
                    href={`/debouchage-${v.slug}`}
                    className="bg-[#1b4f8c] text-white text-xs px-3 py-1.5 rounded-full hover:bg-[#0f2942] transition-colors"
                  >
                    {v.label}
                  </Link>
                ))}
                <span className="text-xs text-gray-400 self-center">+ toute la région</span>
              </div>
            </div>
            <div className="bg-[#1b4f8c] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-black mb-2">Contactez Vilbert Hydro</h3>
              <div className="w-12 h-1 bg-[#f5b800] mb-5" />
              <address className="not-italic space-y-3 text-blue-100 text-sm">
                <p className="text-lg font-black text-white">
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
                  <p className="font-bold text-[#f5b800]">🚨 Urgences 24h/24 · 7j/7</p>
                  <p className="text-blue-200 text-xs mt-1">Devis gratuit — Intervention rapide</p>
                </div>
              </address>
              <Link
                href="/contact"
                className="mt-5 block text-center bg-[#f5b800] text-gray-900 font-bold px-6 py-3 rounded hover:bg-[#ffd44d] transition-colors"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* BLOG PREVIEW */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <div>
              <h2 className="text-3xl font-black text-[#1b4f8c] mb-2">Conseils & Actualités</h2>
              <div className="w-16 h-1 bg-[#f5b800]" />
            </div>
            <Link href="/blog" className="mt-4 md:mt-0 text-[#1b4f8c] font-bold hover:underline">
              Voir tous les articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5 group"
              >
                <div className="bg-[#1b4f8c] h-2" />
                <div className="p-6">
                  <span className="text-xs text-[#1b4f8c] font-bold uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h3 className="text-gray-900 font-bold mt-2 mb-3 group-hover:text-[#1b4f8c] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{post.excerpt}</p>
                  <p className="text-xs text-gray-400 mt-4">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Une canalisation bouchée ? Une fosse à vidanger ?
          </h2>
          <p className="text-gray-700 mb-8">
            Vilbert Hydro intervient rapidement en Hauts-de-France. Devis gratuit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322917201"
              className="bg-gray-900 text-white font-bold px-8 py-4 rounded text-lg hover:bg-gray-800 transition-colors"
            >
              📞 03 22 91 72 01
            </a>
            <Link
              href="/contact"
              className="bg-white text-gray-900 font-bold px-8 py-4 rounded text-lg hover:bg-gray-100 transition-colors border border-gray-200"
            >
              Formulaire de contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
