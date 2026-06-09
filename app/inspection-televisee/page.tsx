import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inspection Télévisée Canalisation Picardie — Caméra HD · Rapport Vidéo — 03 22 91 72 01",
  description:
    "Vilbert Hydro : inspection télévisée par caméra HD en Picardie. Rapport vidéo numérique, localisation anomalies, diagnostic avant achat immobilier. Somme (80), Oise (60), Aisne (02). Devis gratuit.",
  alternates: { canonical: "https://vilbert-hydro.fr/inspection-televisee" },
};

export default function InspectionTelevisee() {
  const faqItems = [
    {
      q: "L'inspection télévisée est-elle obligatoire lors d'une vente immobilière ?",
      a: "Elle n'est pas obligatoire au sens strict, mais le diagnostic assainissement prévu à l'article L.271-4 du Code de la Construction et de l'Habitation (CCH) impose un contrôle de l'assainissement non collectif. Pour l'assainissement collectif, l'inspection caméra peut être exigée par le futur acquéreur ou son notaire pour sécuriser la transaction.",
    },
    {
      q: "Que fait-on des images et du rapport après l'inspection ?",
      a: "Vous recevez une vidéo numérique HD enregistrée sur support USB ou transmise par lien de téléchargement sécurisé, accompagnée d'un rapport écrit localisé avec photos. Ces documents sont archivables et présentables au notaire, au syndic ou au bureau d'études.",
    },
    {
      q: "Peut-on faire une inspection sans déboucher d'abord la canalisation ?",
      a: "Si la canalisation est obstruée, nous réalisons d'abord un hydrocurage pour nettoyer le réseau, puis nous procédons à l'inspection caméra. Cette approche combinée vous offre à la fois le résultat immédiat et un diagnostic complet.",
    },
    {
      q: "Quelle est la longueur maximale inspectable par caméra ?",
      a: "Nos caméras robotisées atteignent jusqu'à 100 mètres dans un réseau de diamètre DN50 à DN600. Pour les réseaux plus grands (caniveaux, collecteurs), des équipements spécifiques sont disponibles sur devis.",
    },
    {
      q: "Combien de temps dure une inspection télévisée ?",
      a: "Pour un logement individuel avec 30 à 60 mètres de réseau, l'intervention dure 1h à 2h sur place, rapport inclus. La vidéo définitive vous est transmise sous 24 à 48h.",
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
              { "@type": "ListItem", position: 2, name: "Inspection Télévisée", item: "https://vilbert-hydro.fr/inspection-televisee" },
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
            Rapport vidéo HD inclus
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Inspection Télévisée par Caméra
            <span className="block text-[#f5b800] mt-1">en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Caméra robotisée HD · Enregistrement temps réel · Rapport vidéo + écrit
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention en Picardie : Somme (80), Oise (60), Aisne (02). Devis gratuit.
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
              Demander un devis
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* PRINCIPE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Comment fonctionne la caméra d&apos;inspection ?</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              L&apos;inspection télévisée repose sur une <strong>caméra robotisée haute définition</strong> introduite dans la canalisation depuis un regard d&apos;accès ou un orifice. La caméra autopropulsée progresse dans le réseau en transmettant un flux vidéo en temps réel vers la surface.
            </p>
            <p>
              L&apos;opérateur observe l&apos;état intérieur du tuyau sur écran : il identifie et localise précisément chaque anomalie (fissure, déboîtement, racine, obstruction, contre-pente…). L&apos;enregistrement vidéo est intégral. Le rapport final mentionne la position de chaque défaut en mètres depuis le point d&apos;introduction, avec captures d&apos;écran annotées.
            </p>
          </div>
        </div>
      </section>

      {/* CAS D'USAGE */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">5 situations où l&apos;inspection caméra est indispensable</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="space-y-4">
            {[
              {
                num: "1",
                titre: "Avant achat immobilier (art. L.271-4 CCH)",
                desc: "L'article L.271-4 du Code de la Construction et de l'Habitation encadre le dossier de diagnostic technique. L'inspection caméra sécurise l'acquéreur en révélant l'état réel du réseau enterré, souvent invisible lors des visites.",
              },
              {
                num: "2",
                titre: "Diagnostic d'un bouchon récidivant",
                desc: "Si un bouchon revient régulièrement malgré les débouchages, la caméra identifie la cause structurelle : racines, déboîtement, contre-pente ou accumulation de dépôts liée à une paroi dégradée.",
              },
              {
                num: "3",
                titre: "Contrôle après travaux",
                desc: "Après une réfection de canalisations, l'inspection télévisée vérifie la bonne pose, l'étanchéité des joints et l'absence de déformation avant remblaiement.",
              },
              {
                num: "4",
                titre: "État des lieux en copropriété",
                desc: "Le syndic ou le conseil syndical peut commander une inspection complète du réseau collectif pour programmer les travaux de réhabilitation ou justifier les charges d'entretien.",
              },
              {
                num: "5",
                titre: "Recherche de fuite ou de fissure",
                desc: "En cas de surconsommation d'eau inexpliquée ou d'humidité persistante en sous-sol, l'inspection caméra localise précisément la fissure ou le joint défaillant, évitant des fouilles inutiles.",
              },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-5 bg-blue-50 rounded-xl p-5 border border-blue-100">
                <div className="flex-shrink-0 w-10 h-10 bg-[#1b4f8c] text-white rounded-full flex items-center justify-center font-black text-lg">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-black text-[#1b4f8c] mb-1">{step.titre}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CE QUE RÉVÈLE L'INSPECTION */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">Ce que révèle l&apos;inspection caméra</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { emoji: "💔", titre: "Fissures & fractures", desc: "Dégâts liés au tassement de terrain, gel ou pression mécanique." },
              { emoji: "🔀", titre: "Décalages & déboîtements", desc: "Joints déplacés créant des zones d'accumulation et des fuites." },
              { emoji: "🌿", titre: "Intrusions racinaires", desc: "Racines pénétrant par les joints, pouvant obstruer complètement le tuyau." },
              { emoji: "⛔", titre: "Obstructions", desc: "Corps étrangers, dépôts calcaires ou bouchons résiduels non évacués." },
              { emoji: "🏗️", titre: "Effondrements partiels", desc: "Sections aplaties ou affaissées réduisant le débit ou bloquant l'écoulement." },
              { emoji: "📐", titre: "Contre-pentes", desc: "Sections mal posées où l'eau stagne et favorise les dépôts." },
            ].map((c) => (
              <div key={c.titre} className="bg-white/10 rounded-xl p-5">
                <div className="text-3xl mb-2">{c.emoji}</div>
                <h3 className="font-black text-[#f5b800] text-sm mb-1">{c.titre}</h3>
                <p className="text-blue-100 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RAPPORT */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Le rapport d&apos;inspection fourni</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { emoji: "🎥", titre: "Vidéo numérique HD", desc: "Enregistrement intégral de l'inspection remis sur USB ou par lien sécurisé. Visionnable sur tout support." },
              { emoji: "📍", titre: "Localisation des anomalies", desc: "Chaque défaut est repéré en mètres depuis le point d'entrée. Captures d'écran annotées incluses." },
              { emoji: "📋", titre: "Recommandations techniques", desc: "Préconisations claires : entretien, réhabilitation, remplacement ou absence d'intervention nécessaire." },
              { emoji: "🗂️", titre: "Document archivable", desc: "Rapport PDF transmissible au notaire, au syndic, au bureau d'études ou aux services techniques de la collectivité." },
            ].map((c) => (
              <div key={c.titre} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow flex gap-4">
                <div className="text-3xl flex-shrink-0">{c.emoji}</div>
                <div>
                  <h3 className="font-black text-[#1b4f8c] text-sm mb-1">{c.titre}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Tarifs indicatifs</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-[#1b4f8c] text-white">
                <tr>
                  <th className="text-left p-4 font-black">Prestation</th>
                  <th className="text-right p-4 font-black">Fourchette de prix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { prestation: "Inspection logement individuel (jusqu'à 50 m)", prix: "180 – 350 €" },
                  { prestation: "Inspection + rapport détaillé avant vente", prix: "250 – 400 €" },
                  { prestation: "Inspection réseau copropriété", prix: "Sur devis" },
                  { prestation: "Inspection combinée hydrocurage + caméra", prix: "350 – 700 €" },
                ].map((row, i) => (
                  <tr key={row.prestation} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-gray-700">{row.prestation}</td>
                    <td className="p-4 text-right font-bold text-[#1b4f8c]">{row.prix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center">
            Tarifs HT. Devis définitif fourni sur place.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Inspection télévisée</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
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
            Besoin d&apos;une inspection caméra en Picardie ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Rapport vidéo HD inclus · Devis gratuit · Intervention rapide
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg mb-4"
          >
            📞 03 22 91 72 01
          </a>
          <p className="text-gray-600 text-sm">Somme · Oise · Aisne · Picardie</p>
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
              { label: "Débouchage canalisation", href: "/debouchage-canalisation" },
              { label: "Hydrocurage haute pression", href: "/hydrocurage-haute-pression" },
              { label: "Vidange fosse septique", href: "/vidange-fosse-septique" },
              { label: "Tous nos services", href: "/services" },
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
