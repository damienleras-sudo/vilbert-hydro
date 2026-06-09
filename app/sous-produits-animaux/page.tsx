import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Collecte & Transport Sous-Produits Animaux Picardie — Agrément · Industries Agro-Alimentaires — Vilbert Hydro",
  description:
    "Vilbert Hydro : collecte, transport et traitement de sous-produits animaux (catégories 2 et 3) en Picardie. Agréé, agents formés. Industries agro-alimentaires, élevages, abattoirs.",
  alternates: { canonical: "https://vilbert-hydro.fr/sous-produits-animaux" },
};

export default function SousProduitsAnimaux() {
  const faqItems = [
    {
      q: "Qu'est-ce que le règlement CE 1069/2009 ?",
      a: "Le règlement CE 1069/2009 est le texte européen de référence encadrant la collecte, le transport, la transformation et l'élimination des sous-produits animaux non destinés à la consommation humaine. Il définit les trois catégories de risque et les filières de traitement autorisées pour chacune.",
    },
    {
      q: "Peut-on épandre des sous-produits animaux ?",
      a: "Oui, sous conditions strictes. L'épandage de certains sous-produits de catégorie 2 (lisiers, fumiers) et de catégorie 3 est possible mais nécessite des analyses préalables, un plan d'épandage validé et une notification préfectorale. Vilbert Hydro vous accompagne dans ces démarches.",
    },
    {
      q: "Quelle différence entre catégorie 2 et catégorie 3 ?",
      a: "La catégorie 2 comprend les lisiers, fumiers, contenus du tube digestif, et déchets d'animaux présentant un risque sanitaire modéré. La catégorie 3 regroupe les anciens aliments d'origine animale, déchets de cuisine d'origine animale non dangereux. Les filières de traitement autorisées diffèrent selon la catégorie.",
    },
    {
      q: "Vos véhicules sont-ils agréés pour ce transport ?",
      a: "Oui. Nos véhicules sont agréés pour le transport de sous-produits animaux catégories 2 et 3 conformément au règlement CE 1069/2009. Ils sont nettoyés et désinfectés après chaque tournée selon un protocole sanitaire strict.",
    },
    {
      q: "Pouvez-vous gérer des flux réguliers pour une industrie agroalimentaire ?",
      a: "Oui, nous proposons des contrats réguliers avec des fréquences adaptées à votre volume de production. Une planification hebdomadaire, bi-hebdomadaire ou mensuelle est possible selon vos besoins. Contactez-nous pour établir un contrat sur mesure.",
    },
  ];

  return (
    <>
      {/* BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "https://vilbert-hydro.fr" },
              { "@type": "ListItem", position: 2, name: "Sous-Produits Animaux", item: "https://vilbert-hydro.fr/sous-produits-animaux" },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-[#1b4f8c] text-white py-16 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-[#f5b800] text-gray-900 text-xs font-bold uppercase px-3 py-1 rounded mb-6 tracking-widest">
            Agrément catégories 2 &amp; 3 · Règlement CE 1069/2009
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Collecte et Transport de
            <span className="block text-[#f5b800] mt-1">Sous-Produits Animaux en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Industries agro-alimentaires, élevages, abattoirs, restaurants collectifs — traçabilité complète
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention : Somme (80), Oise (60), Aisne (02), Pas-de-Calais.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:0322917201"
              className="bg-[#f5b800] text-gray-900 font-black px-10 py-4 rounded text-xl hover:bg-[#ffd44d] transition-colors shadow-lg"
            >
              📞 03 22 91 72 01
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded text-base hover:bg-white hover:text-[#1b4f8c] transition-colors"
            >
              Devis gratuit
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* DÉFINITION RÉGLEMENTAIRE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Qu&apos;est-ce que les sous-produits animaux ?</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Les sous-produits animaux (SPA) sont définis par le <strong>règlement CE 1069/2009</strong> comme les corps entiers ou parties d&apos;animaux, produits d&apos;origine animale ou autres produits obtenus à partir d&apos;animaux <strong>non destinés à la consommation humaine</strong>. Ils sont classés en trois catégories selon leur niveau de risque sanitaire.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-[#1b4f8c] text-white rounded-2xl p-6">
              <div className="text-2xl mb-2">📦</div>
              <h3 className="font-black text-[#f5b800] mb-2">Catégorie 2</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Lisiers et fumiers, contenus de tube digestif, matières fécales animales, déchets d&apos;animaux présentant un risque sanitaire modéré. Filières : compostage, méthanisation, épandage sous conditions.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-2xl mb-2">🥩</div>
              <h3 className="font-black text-[#1b4f8c] mb-2">Catégorie 3</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Anciens aliments d&apos;origine animale déclassés, déchets de cuisine d&apos;origine animale, produits alimentaires animaux non dangereux. Filières : compostage, méthanisation, alimentation animale agréée.
              </p>
            </div>
          </div>
          <p className="mt-4 text-gray-500 text-xs">
            Note : La catégorie 1 (matériaux à haut risque : farines animales contaminées, cadavres d&apos;animaux infectés) n&apos;entre pas dans notre périmètre d&apos;intervention.
          </p>
        </div>
      </section>

      {/* QUI EST CONCERNÉ */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Qui est concerné ?</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: "🔪", titre: "Abattoirs & ateliers de découpe", desc: "Produits d'abattage, parures, issues et co-produits de découpe." },
              { emoji: "🏭", titre: "Industries agroalimentaires", desc: "Charcuteries, conserveries, laiteries, salaisons — rebuts de production." },
              { emoji: "🐄", titre: "Élevages", desc: "Élevages porcins, bovins, volailles — lisiers, fumiers, cadavres d'animaux." },
              { emoji: "🍽️", titre: "Restaurants collectifs", desc: "Cuisines centrales, cantines, restauration hospitalière — déchets alimentaires d'origine animale." },
            ].map((c) => (
              <div key={c.titre} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{c.emoji}</div>
                <h3 className="font-black text-[#1b4f8c] text-sm mb-2">{c.titre}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTRE AGRÉMENT */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3">Notre agrément et nos garanties</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                emoji: "🏅",
                titre: "Agrément officiel",
                desc: "Collecte et transport de sous-produits animaux catégories 2 et 3 conformément au règlement CE 1069/2009.",
              },
              {
                emoji: "👷",
                titre: "Agents formés",
                desc: "Nos intervenants sont formés aux règles sanitaires spécifiques aux sous-produits animaux et aux protocoles d'hygiène.",
              },
              {
                emoji: "🚛",
                titre: "Véhicules agréés",
                desc: "Véhicules dédiés, nettoyés et désinfectés après chaque tournée selon un protocole sanitaire strict et documenté.",
              },
            ].map((item) => (
              <div key={item.titre} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-black text-[#f5b800] mb-2">{item.titre}</h3>
                <p className="text-blue-100 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FILIÈRES DE TRAITEMENT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Filières de traitement</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <p className="text-gray-700 leading-relaxed mb-6">
            Selon la catégorie des sous-produits collectés, nous orientons les matières vers les filières de traitement agréées et adaptées :
          </p>
          <div className="space-y-3">
            {[
              { emoji: "🌱", label: "Compostage", desc: "Transformation en amendement organique — cat. 2 et 3 selon conditions." },
              { emoji: "⚡", label: "Méthanisation", desc: "Production de biogaz et digestat valorisé en agriculture." },
              { emoji: "🏭", label: "Équarrissage agréé", desc: "Traitement par des équarrisseurs agréés pour les matières à risque plus élevé." },
              { emoji: "🌾", label: "Épandage agricole", desc: "Sous contrôle préalable obligatoire : analyses, plan d'épandage, notification préfectorale." },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 bg-white rounded-xl border border-gray-100 p-4">
                <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                <div>
                  <span className="font-black text-[#1b4f8c] text-sm">{item.label}</span>
                  <span className="text-gray-500 text-sm"> — {item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAÇABILITÉ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">TrackDéchets et traçabilité</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <p className="text-gray-700 leading-relaxed">
            Chaque transport de sous-produits animaux est documenté par des <strong>documents de transport commerciaux conformes au règlement 1069/2009</strong>. La traçabilité est assurée de bout en bout, de la collecte au traitement final, avec utilisation de <strong>TrackDéchets</strong> pour les flux concernés par la réglementation déchets dangereux.
          </p>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Tarifs</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-500 text-sm">
              Tarifs sur devis selon volume et fréquence. Contrats réguliers pour industries agroalimentaires bienvenus.
            </p>
          </div>
          <div className="bg-[#1b4f8c] text-white rounded-2xl p-8 text-center">
            <p className="text-blue-100 mb-4 text-sm">
              Chaque situation étant unique (volume, fréquence, catégorie, distance), nous établissons un devis personnalisé après échange avec vous.
            </p>
            <a
              href="tel:0322917201"
              className="inline-block bg-[#f5b800] text-gray-900 font-black px-8 py-4 rounded-xl text-xl hover:bg-[#ffd44d] transition-colors shadow-lg"
            >
              📞 03 22 91 72 01
            </a>
            <p className="text-blue-200 mt-3 text-xs">Devis gratuit — Réponse rapide</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Sous-produits animaux</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-black text-[#1b4f8c] mb-3 text-sm md:text-base">{item.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Collecte de sous-produits animaux en Picardie ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Agrément CE 1069/2009 — Véhicules désinfectés — Traçabilité complète
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg mb-4"
          >
            📞 03 22 91 72 01
          </a>
          <p className="text-gray-600 text-sm">Somme · Oise · Aisne · Pas-de-Calais</p>
        </div>
      </section>

      {/* LIENS INTERNES */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-4">
            Nos autres services
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Assainissement agriculteur", href: "/assainissement-agriculteur" },
              { label: "Dégazage cuve à fioul", href: "/degazage-cuve-fioul" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-[#1b4f8c] hover:underline border border-[#1b4f8c]/20 px-3 py-1.5 rounded-full"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
