const reviews = [
  {
    name: "Jean-Pierre M.",
    role: "Particulier — Amiens",
    text: "Canalisation bouchée un samedi soir, j'ai appelé Vilbert Hydro en urgence. Intervention en moins de 2h, technicien efficace et propre. Tarif raisonnable même en urgence. Merci !",
    stars: 5,
  },
  {
    name: "Restaurant Le Prieuré",
    role: "Restaurateur — Abbeville",
    text: "Nous confions l'entretien de nos bacs à graisses à Vilbert Hydro depuis 3 ans. Toujours ponctuels, rigoureux, et conformes aux réglementations en vigueur. Un prestataire de confiance.",
    stars: 5,
  },
  {
    name: "Marie L.",
    role: "Particulier — Péronne",
    text: "Vidange de fosse septique réalisée rapidement et sans mauvaises odeurs dans le jardin. Le technicien a tout expliqué. Je les recommande sans hésitation.",
    stars: 5,
  },
  {
    name: "Société Industrie Nord",
    role: "Site industriel — Lens",
    text: "Curage de notre réseau industriel en urgence. Vilbert Hydro a mobilisé une équipe en moins de 24h. Travail sérieux, rapport d'intervention fourni. Partenaire fiable.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#1b4f8c] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Ils nous font confiance
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
          <p className="text-blue-200 max-w-xl mx-auto">
            Particuliers, restaurants, industries — notre engagement qualité est le même pour tous.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex mb-3">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i} className="text-[#f5b800] text-lg">★</span>
                ))}
              </div>
              <p className="text-blue-100 text-sm leading-relaxed mb-4 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-white text-sm">{r.name}</p>
                <p className="text-blue-300 text-xs">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
