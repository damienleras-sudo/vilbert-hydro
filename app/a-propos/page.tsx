import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos — Vilbert Hydro, expert assainissement depuis +30 ans",
  description:
    "Découvrez Vilbert Hydro : filiale du Groupe Vilbert, spécialiste du débouchage, curage et assainissement en Picardie (Somme, Oise, Aisne) depuis plus de 30 ans. Notre équipe, nos valeurs, notre engagement.",
  alternates: { canonical: "https://vilbert-hydro.fr/a-propos" },
};

const valeurs = [
  {
    icon: "⚡",
    titre: "Réactivité",
    desc: "Nous savons qu'un problème d'assainissement ne peut pas attendre. C'est pourquoi nous assurons des interventions d'urgence 24h/24 et 7j/7.",
  },
  {
    icon: "🎯",
    titre: "Expertise",
    desc: "Nos techniciens sont formés aux dernières techniques d'hydrocurage, d'inspection télévisée et d'assainissement. Nous investissons en permanence dans notre matériel.",
  },
  {
    icon: "🌿",
    titre: "Responsabilité environnementale",
    desc: "Nous traitons les matières collectées dans des filières agréées et respectueuses de l'environnement. Aucun rejet illicite.",
  },
  {
    icon: "🤝",
    titre: "Transparence",
    desc: "Devis gratuit avant intervention, tarif fixé à l'avance, rapport d'intervention fourni systématiquement. Aucune mauvaise surprise.",
  },
];

const chiffres = [
  { val: "+30 ans", label: "d'expérience en assainissement" },
  { val: "+5 000", label: "interventions réalisées" },
  { val: "80 km", label: "de rayon d'intervention" },
  { val: "3", label: "départements Picardie couverts" },
];

const equipements = [
  {
    icon: "🚛",
    titre: "Camions hydrocureurs haute pression",
    desc: "Notre flotte de camions hydrocureurs équipés de pompes à 200 bars garantit un nettoyage en profondeur de tous vos réseaux, quelles que soient les obstructions.",
  },
  {
    icon: "📷",
    titre: "Caméras d'inspection télévisée haute résolution",
    desc: "Nos caméras robotisées haute résolution permettent un diagnostic précis de l'état de vos canalisations, sans travaux destructifs.",
  },
  {
    icon: "🏗️",
    titre: "Camions vidangeurs agréés",
    desc: "Nos camions vidangeurs agréés pour matières de vidange assurent la collecte, le transport et le traitement des boues dans des filières réglementées. BSMD fourni systématiquement.",
  },
];

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://vilbert-hydro.fr" },
              { "@type": "ListItem", position: 2, name: "À propos", item: "https://vilbert-hydro.fr/a-propos" },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-[#1b4f8c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">À propos de Vilbert Hydro</h1>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <p className="text-blue-100 max-w-2xl text-lg">
            Une expertise de plus de 30 ans au service des particuliers et des professionnels de
            Picardie (Somme, Oise, Aisne).
          </p>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Notre histoire</h2>
            <div className="w-16 h-1 bg-[#f5b800] mb-6" />
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Vilbert Hydro est la division assainissement du{" "}
                <strong>Groupe Vilbert</strong>, une entreprise familiale implantée en Picardie (Somme, Oise, Aisne)
                depuis plus de 30 ans. Fondé par la famille Vilbert, le groupe s&apos;est
                progressivement diversifié pour répondre aux besoins croissants de ses clients dans
                les domaines des travaux publics, du transport, du recyclage et de l&apos;assainissement.
              </p>
              <p>
                Aujourd&apos;hui, Vilbert Hydro rassemble des techniciens spécialisés en
                <strong> débouchage de canalisations</strong>, <strong>hydrocurage</strong>,{" "}
                <strong>inspection télévisée</strong> et <strong>vidange de fosses septiques</strong>.
                Nous intervenons pour les particuliers, les restaurateurs, les industries et les
                collectivités dans toute la région Picardie (Somme, Oise, Aisne).
              </p>
              <p>
                Notre engagement : une réponse rapide, des techniciens qualifiés, et une transparence
                totale sur nos tarifs et interventions.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            {/* Photo flotte de véhicules */}
            <div className="relative rounded-2xl overflow-hidden h-52">
              <Image
                src="/15403663_1320018538019104_2463712989386103737_o.jpg"
                alt="Flotte de véhicules Vilbert Hydro — camions hydrocureurs et vidangeurs"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-bold">Notre flotte de véhicules professionnels</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {chiffres.map((c) => (
                <div key={c.label} className="bg-gray-50 rounded-2xl p-5 text-center border border-gray-100">
                  <div className="text-3xl font-black text-[#1b4f8c]">{c.val}</div>
                  <div className="text-gray-500 text-sm mt-1">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Nos valeurs</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((v) => (
              <div key={v.titre} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{v.titre}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÉQUIPEMENT */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Un matériel professionnel de pointe</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vilbert Hydro investit continuellement dans des équipements de dernière génération pour garantir des interventions efficaces et conformes aux exigences réglementaires.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipements.map((e) => (
              <div key={e.titre} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-5xl mb-4">{e.icon}</div>
                <h3 className="font-black text-[#1b4f8c] text-lg mb-3">{e.titre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GROUPE VILBERT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-[#1b4f8c] rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-black mb-4">
                  Une filiale du Groupe Vilbert
                </h2>
                <div className="w-16 h-1 bg-[#f5b800] mb-5" />
                <p className="text-blue-100 leading-relaxed mb-4">
                  Le Groupe Vilbert est un acteur majeur des services environnementaux et des travaux
                  publics en Picardie (Somme, Oise, Aisne). Avec près de 70 collaborateurs et plus de 5 000 interventions réalisées,
                  le groupe intervient dans les domaines de la carrière, du transport, du recyclage
                  des déchets BTP et de l&apos;assainissement.
                </p>
                <p className="text-blue-100 leading-relaxed">
                  En choisissant Vilbert Hydro, vous bénéficiez de la solidité et du savoir-faire
                  d&apos;un groupe régional engagé dans le respect de l&apos;environnement.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "🏗️", titre: "Travaux publics & Carrières", href: "https://www.groupe-vilbert.com" },
                  { icon: "🚛", titre: "Transport", href: "https://www.groupe-vilbert.com" },
                  { icon: "♻️", titre: "Vilbert Recyclage — Déchets BTP", href: "https://vilbert-recyclage.vercel.app" },
                  { icon: "💧", titre: "Vilbert Hydro — Assainissement", href: "/" },
                ].map((item) => (
                  <a
                    key={item.titre}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-3 hover:bg-white/20 transition-colors"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-sm">{item.titre}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT QUALITÉ / GARANTIES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Nos engagements qualité</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "📋",
                titre: "Devis gratuit",
                desc: "Devis gratuit et sans engagement avant chaque intervention. Tarif fixé à l'avance, sans mauvaise surprise.",
              },
              {
                icon: "⚡",
                titre: "Arrivée en 2h",
                desc: "En cas d'urgence, nos techniciens s'engagent à intervenir dans les 2 heures en Picardie (Somme, Oise, Aisne).",
              },
              {
                icon: "📄",
                titre: "Rapport d'intervention",
                desc: "Un rapport d'intervention complet vous est remis à chaque passage : travaux réalisés, état du réseau, recommandations.",
              },
              {
                icon: "🏅",
                titre: "Satisfaction garantie",
                desc: "Notre priorité : votre satisfaction. Si le problème persiste après notre intervention, nous revenons sans surcoût.",
              },
            ].map((g) => (
              <div key={g.titre} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{g.icon}</div>
                <h3 className="font-black text-[#1b4f8c] text-base mb-2">{g.titre}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-gray-700 mb-8">
            Contactez Vilbert Hydro pour discuter de votre projet ou demander un devis gratuit.
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
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
