import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-posts";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import TrustBanner from "@/components/TrustBanner";
import ZoneMapWrapper from "@/components/ZoneMapWrapper";

const services = [
  {
    icon: "🚿",
    title: "Débouchage canalisations",
    desc: "Intervention rapide pour déboucher vos canalisations bouchées. Particuliers, copropriétés, professionnels. Urgences 24h/24.",
    href: "/services#debouchage",
    img: "/20221028_083531.jpg",
  },
  {
    icon: "💧",
    title: "Curage & Hydrocurage",
    desc: "Nettoyage haute pression de vos réseaux d'assainissement. Dépôts, graisses, racines éliminés.",
    href: "/services#curage",
    img: "/HYDROCURAGE-dessin.png",
  },
  {
    icon: "📷",
    title: "Inspection télévisée",
    desc: "Diagnostic précis par caméra robotisée. Rapport complet avec images et recommandations.",
    href: "/services#inspection",
    img: "/intervention-puisard.jpg",
  },
  {
    icon: "🏠",
    title: "Vidange fosse septique",
    desc: "Vidange et entretien agréés. Bordereau de suivi fourni. Conformité SPANC garantie.",
    href: "/services#vidange",
    img: "/20220701_090902.jpg",
  },
  {
    icon: "⚙️",
    title: "Maintenance postes de relevage",
    desc: "Entretien préventif et curatif, dépannage urgent. Personnel habilité électrique.",
    href: "/services#relevage",
    img: "/poste-relevage-maintenance.jpg",
  },
  {
    icon: "⚡",
    title: "Électromécanique",
    desc: "Pompes, armoires de commande, variateurs. Agents CATEC habilités N1/N2 et électrique.",
    href: "/services#electromecanique",
    img: "/circuit-electrique.jpg",
  },
];

const clientTypes = [
  { icon: "🏘️", title: "Particuliers" },
  { icon: "🏢", title: "Syndicats de copropriété" },
  { icon: "🍽️", title: "Restaurants & Métiers de bouche" },
  { icon: "🌾", title: "Agriculteurs" },
  { icon: "🏭", title: "Industries" },
  { icon: "🏛️", title: "Collectivités & Mairies" },
];

const certifs = [
  { icon: "📋", label: "Agréé vidangeur" },
  { icon: "🦺", label: "Agents CATEC" },
  { icon: "⚠️", label: "Habilitation N1/N2" },
  { icon: "⚡", label: "Habilitation électrique" },
];

const zoneVilles = [
  { label: "Amiens", slug: "amiens" },
  { label: "Abbeville", slug: "abbeville" },
  { label: "Péronne", slug: "peronne" },
  { label: "Albert", slug: "albert" },
  { label: "Montdidier", slug: "montdidier" },
  { label: "Doullens", slug: "doullens" },
  { label: "Arras", slug: "arras" },
  { label: "Lens", slug: "lens" },
  { label: "Saint-Quentin", slug: "saint-quentin" },
  { label: "Compiègne", slug: "compiegne" },
  { label: "Beauvais", slug: "beauvais" },
];

export default function Home() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[#1b4f8c] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/20210908_131650.jpg"
            alt="Camion hydrocureur Vilbert — débouchage et curage Somme"
            fill
            className="object-cover opacity-25"
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
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
                Picardie · Somme · Oise · Aisne
              </div>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-5">
                Débouchage, Curage &{" "}
                <span className="text-[#f5b800]">Assainissement</span>
                <br />en Picardie
              </h1>
              <p className="text-lg text-blue-100 mb-6 max-w-xl leading-relaxed">
                Vilbert Hydro intervient pour le{" "}
                <strong>débouchage de canalisations</strong>, le curage, la vidange de fosses
                septiques, l&apos;inspection télévisée et la{" "}
                <strong>maintenance de postes de relevage</strong>.
                Particuliers, restaurants, syndicats de copropriété, agriculteurs et industries.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {certifs.map((c) => (
                  <span key={c.label} className="bg-white/15 text-white text-xs px-3 py-1.5 rounded-full border border-white/30">
                    {c.icon} {c.label}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:0322917201"
                  className="bg-[#f5b800] text-gray-900 font-black px-8 py-4 rounded text-xl hover:bg-[#ffd44d] transition-colors shadow-lg"
                >
                  📞 03 22 91 72 01
                </a>
                <a
                  href="mailto:hydro@groupe-vilbert.fr"
                  className="border-2 border-white text-white font-bold px-6 py-4 rounded text-base hover:bg-white hover:text-[#1b4f8c] transition-colors"
                >
                  ✉️ Devis gratuit
                </a>
              </div>
            </div>
            {/* PHOTO HÉRO — intégrée au graphisme */}
            <div className="hidden lg:block relative">
              {/* Barre jaune décorative verticale droite */}
              <div className="absolute -right-4 top-6 bottom-6 w-2 bg-[#f5b800] rounded-full z-10" />
              {/* Barre jaune décorative horizontale bas */}
              <div className="absolute -bottom-4 left-6 right-10 h-2 bg-[#f5b800]/50 rounded-full z-10" />

              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <Image
                  src="/15403663_1320018538019104_2463712989386103737_o.jpg"
                  alt="Flotte de véhicules Vilbert Hydro — camions hydrocureurs Somme"
                  width={620}
                  height={430}
                  className="object-cover w-full h-[380px]"
                  priority
                />
                {/* Gradient bas pour lisibilité des stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a50] via-[#1b4f8c]/20 to-transparent" />

                {/* Badge urgence flottant */}
                <div className="absolute top-4 right-4 bg-red-600 text-white font-black text-xs px-3 py-2 rounded-full shadow-lg animate-pulse">
                  🚨 24h/24 · 7j/7
                </div>

                {/* Certif badge haut gauche */}
                <div className="absolute top-4 left-4 bg-white/90 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow">
                  ✓ Agréé vidangeur · CATEC
                </div>

                {/* Stats en bas de la photo */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { val: "+30 ans", label: "d'expérience" },
                      { val: "+2 000", label: "clients" },
                      { val: "6 dép.", label: "couverts" },
                    ].map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="text-2xl font-black text-[#f5b800] drop-shadow">{s.val}</div>
                        <div className="text-blue-200 text-xs mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* CLIENTS TYPES */}
      <section className="py-10 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-5">
            Nous intervenons pour tous types de clients
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {clientTypes.map((c) => (
              <a
                key={c.title}
                href="tel:0322917201"
                className="group border border-gray-700 rounded-xl p-4 hover:border-[#f5b800] transition-colors text-center"
              >
                <div className="text-2xl mb-2">{c.icon}</div>
                <h3 className="font-bold text-xs text-white group-hover:text-[#f5b800] transition-colors leading-tight">
                  {c.title}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <TrustBanner />

      {/* SERVICES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#1b4f8c] mb-3">
              Nos prestations
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Du débouchage d&apos;urgence à la maintenance électromécanique — une gamme complète pour tous vos besoins en assainissement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#1b4f8c]/40" />
                  <div className="absolute top-3 left-3 text-3xl">{s.icon}</div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-black text-[#1b4f8c] mb-2">{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                  <span className="inline-block mt-3 text-[#f5b800] font-bold text-sm">En savoir plus →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="inline-block bg-[#1b4f8c] text-white font-bold px-8 py-3 rounded hover:bg-[#0f2942] transition-colors">
              Voir tous nos services →
            </Link>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-12 bg-[#1b4f8c] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black mb-2">Une entreprise sérieuse et certifiée</h2>
            <div className="w-12 h-1 bg-[#f5b800] mx-auto mb-3" />
            <p className="text-blue-200 text-sm max-w-xl mx-auto">
              Habilitations obligatoires pour garantir des interventions sûres et conformes à la réglementation.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "📋", titre: "Agrément vidangeur", desc: "Habilitation préfectorale pour la collecte et le transport des matières de vidange. Bordereau BSMD systématique." },
              { icon: "🦺", titre: "CATEC — Espaces confinés", desc: "Certificat d'Aptitude aux Travaux en Espaces Confinés pour les interventions dans fosses, regards et cuves." },
              { icon: "⚠️", titre: "Habilitation N1 & N2", desc: "Opérateurs (N1) et surveillants (N2) habilités pour les travaux en espaces confinés selon la réglementation INRS." },
              { icon: "⚡", titre: "Habilitation électrique", desc: "Personnel habilité B1, B1V, BR pour la maintenance des postes de relevage et armoires de commande." },
            ].map((c) => (
              <div key={c.titre} className="bg-white/10 rounded-xl p-5 text-center hover:bg-white/20 transition-colors">
                <div className="text-3xl mb-3">{c.icon}</div>
                <p className="font-black text-[#f5b800] text-sm mb-2">{c.titre}</p>
                <p className="text-blue-200 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROS & COLLECTIVITÉS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-4 tracking-widest">
                Offre professionnelle
              </div>
              <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">
                Restaurants, syndicats de copropriété, agriculteurs, industries
              </h2>
              <div className="w-16 h-1 bg-[#f5b800] mb-5" />
              <p className="text-gray-600 mb-5 leading-relaxed">
                Vilbert Hydro propose des <strong>contrats de maintenance</strong> sur mesure adaptés à chaque type de clientèle professionnelle.
              </p>
              <ul className="space-y-2.5 mb-6">
                {[
                  "Entretien bacs à graisses pour restaurants (réglementation garantie)",
                  "Maintenance postes de relevage pour syndicats et collectivités",
                  "Curage préventif réseaux de copropriétés",
                  "Vidange fosses et lagunes pour exploitations agricoles",
                  "Curage et dépollution pour sites industriels (CATEC)",
                  "Rapports et bordereaux de suivi pour vos archives",
                  "Urgences prioritaires 24h/24 pour contrats maintenance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                    <span className="text-[#f5b800] font-black mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 flex-wrap">
                <a href="tel:0322917201" className="inline-block bg-[#1b4f8c] text-white font-bold px-6 py-3 rounded hover:bg-[#0f2942] transition-colors">
                  📞 03 22 91 72 01
                </a>
                <a href="mailto:hydro@groupe-vilbert.fr" className="inline-block border border-[#1b4f8c] text-[#1b4f8c] font-bold px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                  ✉️ Demander un contrat
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden h-52">
                <Image src="/entretien-bac-degraisseur.jpg" alt="Entretien bac dégraisseur restaurant — Vilbert Hydro" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-bold">Entretien bac dégraisseur restaurant</p>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden h-52">
                <Image src="/20221028_111003.jpg" alt="Intervention Vilbert Hydro sur site industriel" fill className="object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-bold">Intervention sur site industriel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIES */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-2">Nos engagements</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "✅", titre: "Devis gratuit & sans engagement", desc: "Tarif fixé avant intervention, zéro surprise" },
              { icon: "⏱️", titre: "Arrivée en moins de 2h", desc: "En urgence, nos équipes se déplacent rapidement" },
              { icon: "📋", titre: "Rapport d'intervention", desc: "Document fourni après chaque prestation" },
              { icon: "🔄", titre: "Satisfaction garantie", desc: "Si le problème persiste, on revient" },
            ].map((g) => (
              <div key={g.titre} className="bg-gray-50 rounded-xl p-5 text-center border border-gray-100 hover:border-[#f5b800] transition-colors">
                <div className="text-3xl mb-3">{g.icon}</div>
                <p className="font-black text-[#1b4f8c] text-sm mb-2">{g.titre}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-[#1b4f8c] mb-2">Nos équipes en action</h2>
            <div className="w-12 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: "/15403663_1320018538019104_2463712989386103737_o.jpg", alt: "Flotte de véhicules Vilbert Hydro", wide: true },
              { src: "/20210908_131650.jpg", alt: "Camion hydrocureur Vilbert Hydro — Somme" },
              { src: "/20221028_083531.jpg", alt: "Intervention débouchage canalisation" },
              { src: "/intervention-puisard.jpg", alt: "Entretien puisard — Vilbert Hydro" },
              { src: "/poste-relevage-maintenance.jpg", alt: "Poste de relevage après maintenance" },
              { src: "/HYDROCURAGE-dessin.png", alt: "Schéma hydrocurage canalisation" },
            ].map((photo, i) => (
              <div key={i} className={`relative rounded-xl overflow-hidden ${photo.wide ? "md:col-span-2 h-56" : "h-44"}`}>
                <Image src={photo.src} alt={photo.alt} fill className="object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE + CARTE + CONTACT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#1b4f8c] mb-3">
              Zone d&apos;intervention
            </h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Basés à <strong>Camon (Somme)</strong>, nous intervenons dans un rayon de{" "}
              <strong>80 km</strong> — couvrant toute la Picardie (Somme, Oise, Aisne), le Pas-de-Calais,
              et les départements limitrophes.
            </p>
          </div>

          {/* PRIX INDICATIFS */}
          <div className="bg-[#f5b800]/10 border border-[#f5b800]/30 rounded-xl p-6 mb-6">
            <h3 className="font-black text-[#1b4f8c] mb-4 text-lg">💶 Tarifs indicatifs</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Débouchage", prix: "à partir de 150€" },
                { label: "Vidange fosse septique", prix: "à partir de 280€" },
                { label: "Hydrocurage", prix: "à partir de 200€" },
                { label: "Inspection télévisée", prix: "à partir de 180€" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p className="font-black text-[#1b4f8c] text-sm mb-1">{item.label}</p>
                  <p className="text-[#f5b800] font-black">{item.prix}</p>
                  <p className="text-gray-400 text-xs mt-2">Devis gratuit • Tarif définitif avant intervention</p>
                </div>
              ))}
            </div>
          </div>

          {/* CARTE LEAFLET */}
          <div className="mb-8">
            <ZoneMapWrapper />
          </div>

          {/* Villes + Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Principales communes desservies</h3>
              <div className="flex flex-wrap gap-2">
                {zoneVilles.map((v) => (
                  <Link key={v.slug} href={`/debouchage-${v.slug}`} className="bg-[#1b4f8c] text-white text-xs px-3 py-1.5 rounded-full hover:bg-[#0f2942] transition-colors">
                    {v.label}
                  </Link>
                ))}
                <span className="text-xs text-gray-400 self-center">+ toutes communes dans 80 km</span>
              </div>
              <div className="mt-4 text-sm text-gray-500 flex items-start gap-2">
                <span className="text-[#1b4f8c] mt-0.5">📍</span>
                <p>Siège : 620 Rue Stéphane Hessel, 80450 Camon (Somme)</p>
              </div>
            </div>
            <div className="bg-[#1b4f8c] rounded-2xl p-6 text-white">
              <h3 className="text-lg font-black mb-2">Contactez Vilbert Hydro</h3>
              <div className="w-10 h-1 bg-[#f5b800] mb-4" />
              <div className="space-y-3">
                <a href="tel:0322917201" className="flex items-center gap-3 bg-[#f5b800] text-gray-900 rounded-xl p-4 hover:bg-[#ffd44d] transition-colors">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-black text-lg">03 22 91 72 01</p>
                    <p className="text-xs font-semibold text-gray-700">🚨 Urgences 24h/24 · 7j/7</p>
                  </div>
                </a>
                <a href="mailto:hydro@groupe-vilbert.fr" className="flex items-center gap-3 bg-white/10 rounded-xl p-3 hover:bg-white/20 transition-colors">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="font-bold text-white text-sm">hydro@groupe-vilbert.fr</p>
                    <p className="text-blue-300 text-xs">Devis, contrats, questions</p>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/p/Vilbert-Hydro-100092874391446/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#1877F2] rounded-xl p-3 hover:bg-[#1565d8] transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <p className="font-bold text-white text-sm">Suivez-nous sur Facebook</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />

      {/* BLOG */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
            <div>
              <h2 className="text-3xl font-black text-[#1b4f8c] mb-2">Conseils & Actualités</h2>
              <div className="w-16 h-1 bg-[#f5b800]" />
            </div>
            <Link href="/blog" className="mt-4 md:mt-0 text-[#1b4f8c] font-bold hover:underline">Voir tous les articles →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all hover:-translate-y-0.5 group">
                <div className="bg-[#1b4f8c] h-2" />
                <div className="p-6">
                  <span className="text-xs text-[#1b4f8c] font-bold uppercase tracking-wide">{post.category}</span>
                  <h3 className="text-gray-900 font-bold mt-2 mb-3 group-hover:text-[#1b4f8c] transition-colors">{post.title}</h3>
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
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
            Besoin d&apos;une intervention en Picardie ?
          </h2>
          <p className="text-gray-700 mb-6">
            Vilbert Hydro intervient rapidement dans toute la Picardie : Somme (80), Oise (60), Aisne (02) et au-delà. Devis gratuit — disponible 24h/24.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:0322917201" className="bg-gray-900 text-white font-black px-8 py-4 rounded text-xl hover:bg-gray-800 transition-colors">
              📞 03 22 91 72 01
            </a>
            <a href="mailto:hydro@groupe-vilbert.fr" className="bg-white text-gray-900 font-bold px-8 py-4 rounded text-base hover:bg-gray-100 transition-colors border border-gray-200">
              ✉️ hydro@groupe-vilbert.fr
            </a>
          </div>
        </div>
      </section>

      {/* SEO VILLES */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4">
            Débouchage et assainissement — Communes de Picardie — Somme · Oise · Aisne
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {zoneVilles.map((v) => (
              <Link key={v.slug} href={`/debouchage-${v.slug}`} className="text-xs text-gray-500 hover:text-[#1b4f8c] hover:underline">
                Débouchage {v.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
