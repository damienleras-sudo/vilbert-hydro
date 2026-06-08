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
    name: "Syndicat de copropriété",
    role: "Gestionnaire — Amiens",
    text: "Contrat de maintenance pour notre poste de relevage. Vilbert Hydro intervient rapidement, toujours avec un rapport d'intervention. Sérieux et professionnel. On renouvelle chaque année.",
    stars: 5,
  },
];

const GOOGLE_REVIEW_URL = "https://share.google/PQU1deHsGCgaHebS9";

export default function Testimonials() {
  return (
    <section className="py-16 bg-[#1b4f8c] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Ils nous font confiance
          </h2>
          <div className="w-16 h-1 bg-[#f5b800] mx-auto mb-4" />
          <div className="flex items-center justify-center gap-2 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-[#f5b800] text-2xl">★</span>
            ))}
            <span className="text-white font-black text-xl ml-2">4,9</span>
            <span className="text-blue-300 text-sm ml-1">/ 5 sur Google</span>
          </div>
          <p className="text-blue-200 max-w-xl mx-auto text-sm">
            Particuliers, restaurants, syndicats de copropriété, industries — notre engagement qualité est le même pour tous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm flex flex-col">
              <div className="flex mb-3">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i} className="text-[#f5b800] text-lg">★</span>
                ))}
              </div>
              <p className="text-blue-100 text-sm leading-relaxed mb-4 italic flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-white text-sm">{r.name}</p>
                <p className="text-blue-300 text-xs">{r.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Google Avis */}
        <div className="bg-white/10 rounded-2xl p-8 text-center border border-white/20">
          <div className="flex items-center justify-center gap-3 mb-3">
            {/* Logo Google simplifié SVG */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <h3 className="text-xl font-black text-white">
              Votre expérience nous aide à grandir
            </h3>
          </div>
          <p className="text-blue-200 text-sm mb-6 max-w-lg mx-auto">
            Vous avez fait appel à Vilbert Hydro ? Un avis Google prend 30 secondes et aide d&apos;autres clients à nous trouver. Merci pour votre confiance !
          </p>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-gray-900 font-black px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg text-base"
          >
            <span className="text-yellow-500 text-xl">★</span>
            Laisser un avis sur Google
            <span className="text-gray-400">→</span>
          </a>
          <p className="text-blue-300 text-xs mt-3">
            Gratuit · 30 secondes · Aide vraiment une entreprise locale
          </p>
        </div>
      </div>
    </section>
  );
}
