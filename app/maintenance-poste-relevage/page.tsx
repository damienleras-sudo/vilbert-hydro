import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maintenance Poste de Relevage Picardie — Dépannage Pompes · Habilitation Élec. — 03 22 91 72 01",
  description:
    "Vilbert Hydro : maintenance et dépannage de postes de relevage en Picardie. Habilitation électrique N1/N2, contrat annuel, urgences 24h/24. Somme (80), Oise (60), Aisne (02). Devis gratuit.",
  alternates: { canonical: "https://vilbert-hydro.fr/maintenance-poste-relevage" },
};

export default function MaintenancePosteRelevage() {
  const faqItems = [
    {
      q: "À quelle fréquence faut-il entretenir un poste de relevage ?",
      a: "Un entretien annuel minimum est recommandé pour un poste résidentiel ou de copropriété. Pour les postes à fort débit (industriel, agricole, restaurant), un entretien semestriel est préconisé. Notre contrat de maintenance annuel couvre les visites préventives et les pièces d'usure.",
    },
    {
      q: "Quels sont les signes d'une panne imminente ?",
      a: "Une alarme qui se déclenche fréquemment, un niveau haut persistant dans le regard, des odeurs inhabituelles, un bruit anormal de la pompe ou un disjoncteur qui saute régulièrement sont des signaux d'alerte à ne pas ignorer. Appelez-nous avant une panne complète.",
    },
    {
      q: "Quelle est la durée de vie d'une pompe de relevage ?",
      a: "Une pompe immergée de qualité a une durée de vie de 7 à 10 ans avec un entretien régulier. Sans maintenance, l'encrassement des turbines et la corrosion des contacts électriques réduisent cette durée de moitié.",
    },
    {
      q: "En copropriété, qui est responsable de l'entretien du poste de relevage ?",
      a: "Le poste de relevage étant une partie commune, son entretien incombe au syndicat des copropriétaires. Le syndic est chargé de mettre en place un contrat de maintenance et de budgéter les travaux de remplacement dans le plan pluriannuel.",
    },
    {
      q: "Quel est votre délai d'intervention en cas d'urgence sur un poste de relevage ?",
      a: "Vilbert Hydro intervient en moins de 2 heures sur l'ensemble de la Picardie pour les urgences postes de relevage, 24h/24 et 7j/7. Une panne de poste peut entraîner des débordements : n'attendez pas.",
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
              { "@type": "ListItem", position: 2, name: "Maintenance Poste de Relevage", item: "https://vilbert-hydro.fr/maintenance-poste-relevage" },
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
            Habilitation électrique N1/N2
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
            Maintenance Poste de Relevage
            <span className="block text-[#f5b800] mt-1">en Picardie</span>
          </h1>
          <p className="text-blue-100 text-lg mb-4 max-w-2xl mx-auto">
            Entretien préventif · Dépannage urgence · Contrat annuel · Habilitation élec. N1/N2
          </p>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-sm">
            Intervention en Picardie : Somme (80), Oise (60), Aisne (02). Urgences 24h/24.
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
              Devis contrat maintenance
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5b800]" />
      </section>

      {/* FONCTIONNEMENT POSTE DE RELEVAGE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">Qu&apos;est-ce qu&apos;un poste de relevage ?</h2>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4 mb-10">
            <p>
              Un poste de relevage est une installation qui collecte les eaux usées dans un regard souterrain et les <strong>refoule vers le réseau d&apos;assainissement</strong> lorsque la gravité ne suffit pas (maison en contrebas, sous-sol profond, réseau enterré trop haut). Il est indispensable dans les zones où le raccordement gravitaire est impossible.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { emoji: "🔧", titre: "Pompes immergées", desc: "1 à 2 pompes submersibles assurent le relevage des effluents. Elles fonctionnent alternativement pour s'user uniformément." },
              { emoji: "⚡", titre: "Armoire électrique", desc: "Centrale de commande avec disjoncteurs, contacteurs et carte électronique gérant les cycles de démarrage." },
              { emoji: "🪂", titre: "Flotteurs de niveau", desc: "Capteurs déclenchant les pompes selon le niveau d'eau : niveau haut, niveau bas, alarme." },
              { emoji: "🚨", titre: "Système d'alarme", desc: "Alerte sonore et/ou téléphonique en cas de niveau critique ou de défaut pompe." },
            ].map((c) => (
              <div key={c.titre} className="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="text-3xl mb-3">{c.emoji}</div>
                <h3 className="font-black text-[#1b4f8c] text-xs mb-2">{c.titre}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PANNES FRÉQUENTES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Pannes les plus fréquentes</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                emoji: "🧻",
                titre: "Lingettes enroulées autour des turbines",
                desc: "Les lingettes humides s'enroulent sur les pales de la pompe, la bloquant progressivement. Première cause de panne sur les postes résidentiels.",
              },
              {
                emoji: "🔥",
                titre: "Grillage de la pompe",
                desc: "Surchauffe par fonctionnement à sec (flotteur défaillant) ou court-circuit électrique. La pompe est hors service et doit être remplacée.",
              },
              {
                emoji: "📉",
                titre: "Défaut de niveau",
                desc: "Flotteur coincé ou calcifié ne détectant plus le niveau réel. La pompe ne démarre plus ou tourne en continu jusqu'à grillage.",
              },
              {
                emoji: "🚨",
                titre: "Alarme intempestive",
                desc: "Déclenchements répétés sans cause apparente : capteur défaillant, parasitage électrique ou début de panne d'une des deux pompes.",
              },
            ].map((c) => (
              <div key={c.titre} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex gap-4">
                <div className="text-3xl flex-shrink-0">{c.emoji}</div>
                <div>
                  <h3 className="font-black text-[#1b4f8c] text-sm mb-2">{c.titre}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTRE INTERVENTION */}
      <section className="py-16 bg-[#1b4f8c] text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-3">Notre intervention sur poste de relevage</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto" />
          </div>
          <div className="space-y-4">
            {[
              { num: "1", titre: "Vidange du regard", desc: "Aspiration intégrale des eaux usées accumulées par camion hydrocureur pour accéder aux composants en sécurité." },
              { num: "2", titre: "Nettoyage des turbines", desc: "Démontage des pompes, nettoyage haute pression des pales et des grilles anti-débris, contrôle de l'usure mécanique." },
              { num: "3", titre: "Vérification électrique (habilitation N1/N2)", desc: "Contrôle de l'armoire électrique, des contacteurs, de la carte de commande, des câbles immergés et de la mise à la terre. Seuls des techniciens habilités N1/N2 sont autorisés à intervenir sur ces équipements." },
              { num: "4", titre: "Test de l'alarme", desc: "Simulation des niveaux d'alerte pour vérifier le déclenchement correct des alarmes sonore et téléphonique." },
              { num: "5", titre: "Rapport d'intervention", desc: "Compte-rendu écrit remis à l'issue de chaque intervention : état des composants, pièces remplacées, recommandations." },
            ].map((step) => (
              <div key={step.num} className="flex items-start gap-5 bg-white/10 rounded-xl p-5">
                <div className="flex-shrink-0 w-10 h-10 bg-[#f5b800] text-gray-900 rounded-full flex items-center justify-center font-black text-lg">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-black text-[#f5b800] mb-1">{step.titre}</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRAT MAINTENANCE */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">Contrat de maintenance annuel</h2>
            <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Sécurisez votre poste de relevage avec un contrat d&apos;entretien Vilbert Hydro. Tarif forfaitaire annuel, pas de mauvaise surprise.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "1 ou 2 visites préventives annuelles incluses",
              "Nettoyage complet du regard et des pompes",
              "Vérification et réglage des flotteurs de niveau",
              "Contrôle du tableau électrique par technicien habilité",
              "Test de l'alarme et du système de téléalarme",
              "Remplacement des pièces d'usure standard inclus",
              "Rapport d'intervention écrit après chaque visite",
              "Priorité d'intervention en cas de panne",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <span className="text-[#f5b800] font-black mt-0.5 flex-shrink-0">✓</span>
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/contrat-maintenance"
              className="inline-block bg-[#1b4f8c] text-white font-black px-8 py-4 rounded-xl hover:bg-[#163f71] transition-colors"
            >
              Découvrir nos contrats de maintenance →
            </Link>
          </div>
        </div>
      </section>

      {/* HABILITATION ÉLECTRIQUE */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-3xl font-black text-[#1b4f8c] mb-4">
                Habilitation électrique N1/N2 : pourquoi c&apos;est essentiel
              </h2>
              <div className="w-16 h-1 bg-[#f5b800] mb-6" />
              <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
                <p>
                  Un poste de relevage intègre une armoire électrique alimentée en <strong>230 V ou 400 V</strong>. La norme NF C 18-510 impose que toute opération sur ces équipements soit réalisée par des techniciens détenteurs d&apos;une <strong>habilitation électrique N1 (exécutant) ou N2 (chargé de travaux)</strong>.
                </p>
                <p>
                  Intervenir sans habilitation expose à un risque d&apos;électrocution grave, engage la responsabilité civile et pénale de l&apos;entreprise, et peut invalider les garanties du constructeur.
                </p>
                <p>
                  <strong>Tous les techniciens Vilbert Hydro</strong> affectés à la maintenance des postes de relevage sont habilités électriquement. Cette compétence est vérifiée et renouvelée tous les 3 ans conformément à la réglementation.
                </p>
              </div>
            </div>
            <div className="md:w-64 bg-[#1b4f8c] text-white rounded-2xl p-6 text-center flex-shrink-0">
              <div className="text-5xl mb-4">⚡</div>
              <div className="font-black text-2xl text-[#f5b800] mb-2">N1 / N2</div>
              <p className="text-blue-100 text-xs">Habilitation électrique conforme NF C 18-510 · Renouvelée tous les 3 ans</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#1b4f8c] mb-3">FAQ — Maintenance poste de relevage</h2>
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
            Poste de relevage en panne ou à entretenir ?
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Intervention en moins de 2h · Habilitation électrique N1/N2 · Contrat annuel disponible
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
              { label: "Inspection télévisée", href: "/inspection-televisee" },
              { label: "Contrat maintenance", href: "/contrat-maintenance" },
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
