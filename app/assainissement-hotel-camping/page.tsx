import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assainissement Hôtels, Campings & Hébergements Picardie — Vilbert Hydro 03 22 91 72 01",
  description:
    "Vilbert Hydro : vidange fosses, débouchage, entretien bacs graisses pour hôtels, campings et hébergements touristiques en Picardie. Discrétion garantie. Somme (80).",
  alternates: { canonical: "https://vilbert-hydro.fr/assainissement-hotel-camping" },
};

export default function AssainissementHotelCampingPage() {
  const faqItems = [
    {
      q: "Intervenez-vous discrètement pendant la saison touristique ?",
      a: "Oui. Nous adaptons nos horaires d'intervention à votre activité : tôt le matin avant l'ouverture, en soirée après le service ou la nuit si nécessaire. Nos camions n'ont pas de signalétique intrusive. La discrétion vis-à-vis de vos clients est notre priorité.",
    },
    {
      q: "Quelle fréquence de vidange pour une fosse septique en camping ?",
      a: "La fréquence dépend de la capacité de la fosse et du nombre de campeurs. Pour un camping de capacité moyenne, une vidange en début et en fin de saison (soit 2 fois par an minimum) est généralement nécessaire. Vilbert Hydro peut établir un calendrier adapté à votre fréquentation.",
    },
    {
      q: "Gérez-vous les fosses mobiles de camping ?",
      a: "Oui. Nous assurons la vidange et le nettoyage des fosses mobiles (bornes de vidange camping-cars, cuves amovibles) ainsi que des sanitaires collectifs. BSMD remis après chaque intervention.",
    },
    {
      q: "À quelle fréquence entretenir le bac à graisses d'un restaurant d'hôtel ?",
      a: "Pour un restaurant d'hôtel en activité normale, l'entretien du bac à graisses est recommandé tous les 3 à 6 mois selon le nombre de couverts. En haute saison avec une activité soutenue, la fréquence peut être mensuelle. Vilbert Hydro adapte le calendrier à votre rythme d'activité.",
    },
    {
      q: "Proposez-vous un contrat annuel adapté à la saisonnalité ?",
      a: "Oui. Nous établissons un contrat annuel tenant compte de votre saisonnalité : interventions concentrées avant et après la haute saison pour les vidanges et le curage, avec des passages réguliers pour le bac à graisses pendant l'activité. Tarifs négociés et planning fixé à l'avance.",
    },
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://vilbert-hydro.fr" },
      { "@type": "ListItem", position: 2, name: "Hôtels & Campings", item: "https://vilbert-hydro.fr/assainissement-hotel-camping" },
    ],
  };

  return (
    <>
      {/* BREADCRUMB JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
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
            Discrétion · Intervention hors saison · Devis annuel
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Assainissement pour Hôtels,
            <span className="block text-[#f5b800] mt-1">Campings et Hébergements en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Vidange fosses · Débouchage · Bac à graisses · Fosses mobiles
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention en Picardie — Somme (80), Oise (60), Aisne (02). Contrats adaptés à votre saisonnalité.
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-[#f5b800] text-gray-900 font-black px-10 py-4 rounded text-xl hover:bg-[#ffd44d] transition-colors shadow-lg"
          >
            📞 03 22 91 72 01
          </a>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* SPÉCIFICITÉS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">
            Vos spécificités en tant qu&apos;hébergeur
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
            <p>
              Les hébergements touristiques font face à une <strong>forte variation de charge</strong> selon la saison : en haute saison, la fosse septique ou le réseau peut atteindre ses limites en quelques semaines. À l&apos;inverse, l&apos;hiver offre une fenêtre idéale pour les interventions de maintenance lourde.
            </p>
            <p>
              Vos clients ne doivent pas percevoir vos opérations d&apos;entretien : <strong>discrétion et flexibilité horaire</strong> sont au cœur de notre approche pour les hébergements. Nos techniciens interviennent tôt le matin, en soirée ou la nuit pour ne pas gêner l&apos;activité.
            </p>
            <p>
              Vilbert Hydro établit un <strong>calendrier d&apos;entretien annuel</strong> calé sur votre saisonnalité : vidanges avant l&apos;ouverture, bacs à graisses pendant la saison, curage réseau en fermeture.
            </p>
          </div>
        </div>
      </section>

      {/* PRESTATIONS */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Nos prestations hébergement</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🚛", titre: "Vidange fosses septiques", desc: "Vidange avant haute saison recommandée. Agrément vidangeur, BSMD systématique. Intervention discrète aux horaires de votre choix." },
              { icon: "🚽", titre: "Débouchage WC et canalisations", desc: "Urgences même en saison. Intervention rapide pour ne pas impacter vos clients. Techniciens disponibles 24h/24." },
              { icon: "🍳", titre: "Entretien bac à graisses", desc: "Vidange et nettoyage du bac à graisses restaurant/cuisine tous les 3 à 6 mois. BSMD remis, traçabilité conforme." },
              { icon: "🔧", titre: "Curage réseaux intérieurs", desc: "Hydrocurage des canalisations internes, idéalement en hors-saison pour minimiser les perturbations." },
              { icon: "📹", titre: "Inspection télévisée", desc: "Contrôle par caméra avant ouverture ou fermeture de saison. Détection préventive des anomalies avant qu'elles deviennent urgentes." },
              { icon: "⚙️", titre: "Maintenance postes de relevage", desc: "Entretien préventif et dépannage des postes de relevage. Panne en pleine saison : intervention d'urgence 24h/24." },
            ].map((s) => (
              <div key={s.titre} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-black text-[#1b4f8c] mb-2 text-sm">{s.titre}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPING SPÉCIFICITÉS */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-3">Campings : spécificités et interventions</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🏕️", titre: "Fosses mobiles", desc: "Vidange et nettoyage des bornes de vidange camping-cars et cuves amovibles. Intervention planifiée ou à la demande." },
              { icon: "🚿", titre: "Sanitaires collectifs", desc: "Curage des réseaux sous sanitaires collectifs, débouchage en urgence. Discrétion et réactivité pendant la saison." },
              { icon: "🌿", titre: "Réseau enterré", desc: "Inspection télévisée et curage du réseau enterré. Idéalement réalisé en intersaison pour ne pas perturber l'accueil." },
            ].map((e) => (
              <div key={e.titre} className="bg-white/10 rounded-2xl p-6 text-center border border-white/20">
                <div className="text-3xl mb-3">{e.icon}</div>
                <h3 className="font-black text-[#f5b800] mb-2 text-sm">{e.titre}</h3>
                <p className="text-blue-100 text-xs leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANNING ANNUEL */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Planning annuel recommandé</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { mois: "Avant ouverture (mars-avril)", icon: "🌱", items: ["Vidange fosses septiques", "Bac à graisses (1re vidange)", "Inspection télévisée réseau", "Contrôle poste de relevage"] },
              { mois: "Pendant la saison (mai-sept)", icon: "☀️", items: ["Bac à graisses (si activité forte)", "Débouchage urgences", "Vidange fosses mobiles camping", "Dépannage relevage 24h/24"] },
              { mois: "Fermeture (octobre-nov)", icon: "🍂", items: ["Vidange fosses septiques", "Bac à graisses (2e vidange)", "Curage réseau intérieur", "Bilan annuel et rapport"] },
            ].map((p) => (
              <div key={p.mois} className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className="text-2xl mb-2">{p.icon}</div>
                <h3 className="font-black text-[#1b4f8c] text-xs mb-3">{p.mois}</h3>
                <ul className="space-y-1">
                  {p.items.map((item) => (
                    <li key={item} className="text-gray-600 text-xs flex gap-2">
                      <span className="text-[#f5b800] font-black">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm text-center">
            Vilbert Hydro établit votre calendrier d&apos;entretien personnalisé — contactez-nous pour en discuter.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Hôtels &amp; Campings</h2>
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

      {/* CTA */}
      <section className="bg-[#f5b800] py-14">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Préparez votre saison avec Vilbert Hydro
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Contrat annuel adapté à votre saisonnalité — devis gratuit
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-gray-900 text-white font-black px-10 py-5 rounded-xl text-2xl hover:bg-gray-800 transition-colors shadow-lg mb-4"
          >
            📞 03 22 91 72 01
          </a>
          <p className="text-gray-700 mb-2 text-sm">
            ou par email :{" "}
            <a href="mailto:hydro@groupe-vilbert.fr" className="font-bold underline">
              hydro@groupe-vilbert.fr
            </a>
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/vidange-fosse-septique" className="text-gray-800 font-semibold hover:underline">Vidange fosse septique →</Link>
            <Link href="/assainissement-restaurant" className="text-gray-800 font-semibold hover:underline">Assainissement restaurant →</Link>
            <Link href="/contrat-maintenance" className="text-gray-800 font-semibold hover:underline">Contrat maintenance →</Link>
            <Link href="/inspection-televisee" className="text-gray-800 font-semibold hover:underline">Inspection télévisée →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
